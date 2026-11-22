/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 Evan James <dalto@fastmail.com>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#include "ZfsJob.h"

#include "compat/Variant.h"
#include "utils/Logger.h"
#include "utils/System.h"
#include "utils/Variant.h"

#include "GlobalStorage.h"
#include "JobQueue.h"
#include "Settings.h"

#include <QFileInfo>
#include <QProcess>
#include <QRegularExpression>
#include <QSet>

/** @brief Returns the alphanumeric portion of a string
 *
 * @p input is the input string
 *
 */
static QString
alphaNumeric( QString input )
{
    return input.remove( QRegularExpression( "[^a-zA-Z\\d\\s]" ) );
}

/** @brief Returns the best available device for zpool creation
 *
 * zfs partitions generally don't have UUID until the zpool is created. Generally,
 * they are formed using either the id or the partuuid.  The id isn't stored by kpmcore
 * so this function checks to see if we have a partuuid.  If so, it forms a device path
 * for it.  As a backup, it uses the device name i.e. /dev/sdax.
 *
 * The function returns a fully qualified path to the device or an empty string if no device
 * is found
 *
 * @p pMap is the partition map from global storage
 *
 */
static QString
findBestZfsDevice( const QVariantMap& pMap )
{
    const auto mapper = pMap.value( "luksMapperName" ).toString();
    if ( !mapper.isEmpty() )
    {
        return "/dev/mapper/" + mapper;
    }
    const auto partUuid = pMap.value( "partuuid" ).toString();
    const auto path = "/dev/disk/by-partuuid/" + partUuid.toLower();
    return !partUuid.isEmpty() && QFileInfo::exists( path ) ? path : pMap.value( "device" ).toString();
}

/** @brief Converts the value in a QVariant to a string which is a valid option for canmount
 *
 * Storing "on" and "off" in QVariant results in a conversion to boolean.  This function takes
 * the Qvariant in @p canMount and converts it to a QString holding "on", "off" or the string
 * value in the QVariant.
 *
 */
static QString
convertCanMount( QVariant canMount )
{
    if ( Calamares::typeOf( canMount ) == Calamares::BoolVariantType )
    {
        return canMount.toBool() ? "on" : "off";
    }
    return canMount.toString();
}

ZfsJob::ZfsJob( QObject* parent )
    : Calamares::CppJob( parent )
{
}

ZfsJob::~ZfsJob() { }

QString
ZfsJob::prettyName() const
{
    return tr( "Creating ZFS pools and datasets…", "@status" );
}

void
ZfsJob::collectMountpoints( const QVariantList& partitions )
{
    m_mountpoints.clear();
    for ( const QVariant& partition : partitions )
    {
        if ( partition.canConvert< QVariantMap >() )
        {
            QString mountpoint = partition.toMap().value( "mountPoint" ).toString();
            if ( !mountpoint.isEmpty() )
            {
                m_mountpoints.append( mountpoint );
            }
        }
    }
}

bool
ZfsJob::isMountpointOverlapping( const QString& targetMountpoint ) const
{
    for ( const QString& mountpoint : m_mountpoints )
    {
        if ( mountpoint != '/'
             && ( targetMountpoint == mountpoint || targetMountpoint.startsWith( mountpoint + '/' ) ) )
        {
            return true;
        }
    }
    return false;
}

ZfsResult
ZfsJob::createZpool( QString deviceName, QString poolName, QString poolOptions, bool encrypt, QString passphrase ) const
{
    QStringList command { "zpool", "create" };
    command += QProcess::splitCommand( poolOptions );
    for ( const auto& option : std::as_const( command ) )
    {
        if ( option == "-m" || option.startsWith( "cachefile=" )
             || ( option.startsWith( "mountpoint=" ) && option != "mountpoint=none" ) )
        {
            return { false, tr( "Pool creation must not set a cache file or mount a dataset on the live system." ) };
        }
    }
    if ( !command.contains( "mountpoint=none" ) )
    {
        command << "-O" << "mountpoint=none";
    }
    command << "-o" << "cachefile=none";
    if ( m_utf8Only )
    {
        command << "-O" << "utf8only=on";
    }
    if ( encrypt )
    {
        command << "-O" << "encryption=aes-256-gcm" << "-O" << "keyformat=passphrase";
    }
    command << poolName << deviceName;

    auto r = Calamares::System::instance()->runCommand( Calamares::System::RunLocation::RunInHost,
                                                        command,
                                                        QString(),
                                                        encrypt ? passphrase + '\n' : QString(),
                                                        std::chrono::seconds( 60 ) );

    if ( r.getExitCode() != 0 )
    {
        cWarning() << "Failed to run zpool create.  The output was: " + r.getOutput();
        return { false, tr( "Failed to create zpool on " ) + deviceName };
    }

    return { true, QString() };
}

Calamares::JobResult
ZfsJob::exec()
{
    QVariantList partitions;
    Calamares::GlobalStorage* gs = Calamares::JobQueue::instance()->globalStorage();
    if ( gs && gs->contains( "partitions" ) && gs->value( "partitions" ).canConvert< QVariantList >() )
    {
        partitions = gs->value( "partitions" ).toList();
    }
    else
    {
        cWarning() << "No *partitions* defined.";
        return Calamares::JobResult::internalError( tr( "Configuration Error" ),
                                                    tr( "No partitions are available for ZFS." ),
                                                    Calamares::JobResult::InvalidConfiguration );
    }

    const Calamares::System* system = Calamares::System::instance();

    QVariantList poolNames;

    collectMountpoints( partitions );
    bool devicesReady = false;
    const auto hasEncryptedBoot
        = std::any_of( partitions.cbegin(),
                       partitions.cend(),
                       []( const QVariant& partition )
                       {
                           const auto p = partition.toMap();
                           return p.value( "mountPoint" ) == "/boot" && p.contains( "luksMapperName" );
                       } );
    QSet< QString > usedPools, usedDevices, usedMounts;
    QVariantList importedPools;
    QMap< QString, QVariantMap > encryptionByMount;
    const auto zfsInfoList = gs->value( "zfsInfo" ).toList();
    for ( const auto& entry : zfsInfoList )
    {
        const auto info = entry.toMap();
        encryptionByMount.insert( info.value( "mountpoint" ).toString(), info );
    }

    for ( auto& partition : std::as_const( partitions ) )
    {
        QVariantMap pMap;
        if ( partition.canConvert< QVariantMap >() )
        {
            pMap = partition.toMap();
        }

        // If it isn't a zfs partition, ignore it
        if ( pMap.value( "fs" ) != "zfs" || pMap.value( "mountPoint" ).toString().isEmpty() )
        {
            continue;
        }
        if ( !m_grubCompatibility.isEmpty() && hasEncryptedBoot )
        {
            return Calamares::JobResult::error( tr( "GRUB needs an unencrypted /boot for this ZFS layout." ) );
        }

        if ( !devicesReady )
        {
            const auto settled = system->runCommand( { "udevadm", "settle" }, std::chrono::seconds( 30 ) );
            if ( settled.getExitCode() )
            {
                return settled.explainProcess( QStringLiteral( "udevadm settle" ), std::chrono::seconds( 30 ) );
            }
            if ( !QFileInfo::exists( "/etc/hostid" ) )
            {
                const auto hostId = system->runCommand( { "zgenhostid" }, std::chrono::seconds( 10 ) );
                if ( hostId.getExitCode() )
                {
                    return hostId.explainProcess( QStringLiteral( "zgenhostid" ), std::chrono::seconds( 10 ) );
                }
            }
            devicesReady = true;
        }

        const auto mountpoint = pMap.value( "mountPoint" ).toString();
        const auto deviceName = findBestZfsDevice( pMap );
        const auto device = QFileInfo( deviceName ).canonicalFilePath();
        if ( !pMap.value( "claimed" ).toBool() || !deviceName.startsWith( "/dev/" ) || device.isEmpty() )
        {
            return Calamares::JobResult::error(
                tr( "No device selected for ZFS formatting at %1." ).arg( mountpoint ) );
        }

        const auto poolName = m_poolNames.value( mountpoint, m_poolName + alphaNumeric( mountpoint ) ).toString();
        static const QRegularExpression poolNamePattern( "^[A-Za-z][A-Za-z0-9_.:-]*$" );
        if ( !poolNamePattern.match( poolName ).hasMatch() || usedPools.contains( poolName )
             || usedDevices.contains( device ) || usedMounts.contains( mountpoint ) )
        {
            return Calamares::JobResult::error(
                tr( "Invalid or duplicate ZFS pool, device, or mount point: %1." ).arg( mountpoint ) );
        }
        usedPools.insert( poolName );
        usedDevices.insert( device );
        usedMounts.insert( mountpoint );

        const auto encryption = encryptionByMount.value( mountpoint );
        const bool encrypt = encryption.value( "encrypted" ).toBool();
        const auto passphrase = encryption.value( "passphrase" ).toString();
        if ( encrypt && ( passphrase.isEmpty() || passphrase.contains( '\n' ) ) )
        {
            return Calamares::JobResult::error(
                tr( "A ZFS encryption passphrase is missing or invalid for %1." ).arg( mountpoint ) );
        }

        auto poolOptions = m_poolOptions;
        const bool grubReadsPool = mountpoint == "/boot" || ( mountpoint == "/" && !m_mountpoints.contains( "/boot" ) );
        if ( !m_grubCompatibility.isEmpty() && grubReadsPool )
        {
            static const QSet< QString > profiles { "grub2", "grub2-2.06", "grub2-2.12" };
            if ( !profiles.contains( m_grubCompatibility ) )
            {
                return Calamares::JobResult::error( tr( "Unknown GRUB compatibility profile." ) );
            }
            if ( encrypt || pMap.contains( "luksMapperName" ) )
            {
                return Calamares::JobResult::error(
                    tr( "GRUB needs an unencrypted /boot to start from encrypted ZFS." ) );
            }
            if ( poolOptions.contains( "compatibility=" ) || poolOptions.contains( "encryption=" )
                 || poolOptions.contains( "feature@" ) || poolOptions.contains( "version=" ) )
            {
                return Calamares::JobResult::error(
                    tr( "Do not override compatibility, features, version or encryption for a GRUB-visible pool." ) );
            }
            poolOptions += " -o compatibility=" + m_grubCompatibility;
        }

        // Create the zpool
        ZfsResult zfsResult;
        if ( encrypt )
        {
            zfsResult = createZpool( deviceName, poolName, poolOptions, true, passphrase );
        }
        else
        {
            zfsResult = createZpool( deviceName, poolName, poolOptions, false );
        }

        if ( !zfsResult.success )
        {
            return Calamares::JobResult::error( tr( "Failed to create zpool" ), zfsResult.failureMessage );
        }
        importedPools.append( poolName );
        gs->insert( "zfsImportedPools", importedPools );

        // Save the poolname, dataset name and mountpoint.  It will later be added to a list and placed in global storage.
        // This will be used by later modules including mount and umount
        QVariantMap poolNameEntry;
        poolNameEntry[ "poolName" ] = poolName;
        poolNameEntry[ "mountpoint" ] = mountpoint;
        poolNameEntry[ "dsName" ] = "none";
        poolNameEntry[ "device" ] = deviceName;

        // If the mountpoint is /, create datasets per the config file. If not, create a single dataset mounted at the partitions mountpoint
        if ( mountpoint == '/' )
        {
            QVariantList datasetList;
            for ( const auto& dataset : std::as_const( m_datasets ) )
            {
                QVariantMap datasetMap = dataset.toMap();

                // Make sure all values are valid
                const auto canMount = convertCanMount( datasetMap[ "canMount" ] );
                const auto properties = datasetMap.value( "properties" ).toMap();
                if ( datasetMap[ "dsName" ].toString().isEmpty() || datasetMap[ "mountpoint" ].toString().isEmpty()
                     || ( canMount != "on" && canMount != "off" && canMount != "noauto" )
                     || properties.contains( "mountpoint" ) || properties.contains( "canmount" ) )
                {
                    return Calamares::JobResult::error( tr( "Invalid ZFS dataset configuration." ) );
                }

                // We should skip this dataset if it conflicts with a permanent mountpoint
                if ( isMountpointOverlapping( datasetMap[ "mountpoint" ].toString() ) )
                {
                    continue;
                }

                datasetMap[ "canMount" ] = canMount;
                QStringList options = QProcess::splitCommand( m_datasetOptions );
                for ( auto it = properties.cbegin(); it != properties.cend(); ++it )
                {
                    options << "-o" << it.key() + '=' + it.value().toString();
                }
                const auto datasetName = poolName + '/' + datasetMap[ "dsName" ].toString();

                // Create the dataset
                auto r = system->runCommand( { QStringList() << "zfs"
                                                             << "create" << "-u" << options << "-o"
                                                             << "canmount=" + canMount << "-o"
                                                             << "mountpoint=" + datasetMap[ "mountpoint" ].toString()
                                                             << datasetName },
                                             std::chrono::seconds( 10 ) );
                if ( r.getExitCode() != 0 )
                {
                    return Calamares::JobResult::error( tr( "Failed to create ZFS dataset %1." ).arg( datasetName ),
                                                        r.getOutput() );
                }
                if ( datasetMap.value( "mountpoint" ) == "/" && canMount != "off" )
                {
                    const QStringList args { "zpool", "set", "bootfs=" + datasetName, poolName };
                    r = system->runCommand( args, std::chrono::seconds( 10 ) );
                    if ( r.getExitCode() )
                    {
                        return r.explainProcess( args, std::chrono::seconds( 10 ) );
                    }
                }

                // Add the dataset to the list for global storage this information is used later to properly set
                // the mount options on each dataset
                datasetMap[ "zpool" ] = poolName;
                datasetList.append( datasetMap );
            }

            const auto numRoots
                = std::count_if( datasetList.cbegin(),
                                 datasetList.cend(),
                                 []( const QVariant& item )
                                 {
                                     const auto ds = item.toMap();
                                     return ds.value( "mountpoint" ) == "/" && ds.value( "canMount" ) != "off";
                                 } );
            if ( numRoots != 1 )
            {
                return Calamares::JobResult::error(
                    tr( "Exactly one mountable ZFS dataset must provide the root filesystem." ) );
            }
            gs->insert( "zfsDatasets", datasetList );
        }
        else
        {
            const auto dsName = alphaNumeric( mountpoint );
            const bool legacy = mountpoint == "/boot";
            auto r = system->runCommand(
                { QStringList() << "zfs"
                                << "create" << "-u" << QProcess::splitCommand( m_datasetOptions ) << "-o"
                                << "canmount=on"
                                << "-o"
                                << ( legacy ? QStringLiteral( "mountpoint=legacy" ) : "mountpoint=" + mountpoint )
                                << poolName + "/" + dsName },
                std::chrono::seconds( 10 ) );
            if ( r.getExitCode() != 0 )
            {
                return Calamares::JobResult::error( tr( "Failed to create dataset" ),
                                                    tr( "The output was: " ) + r.getOutput() );
            }
            poolNameEntry[ "dsName" ] = dsName;
            poolNameEntry[ "legacy" ] = legacy;
        }

        poolNames.append( poolNameEntry );

        // Export the zpool so it can be reimported at the correct location later
        auto r = system->runCommand( { "zpool", "export", poolName }, std::chrono::seconds( 10 ) );
        if ( r.getExitCode() != 0 )
        {
            return Calamares::JobResult::error( tr( "Failed to export ZFS pool %1." ).arg( poolName ), r.getOutput() );
        }
        importedPools.removeLast();
        gs->insert( "zfsImportedPools", importedPools );
    }

    // Put the list of zpools into global storage
    if ( !poolNames.isEmpty() )
    {
        gs->insert( "zfsPoolInfo", poolNames );
    }

    return Calamares::JobResult::ok();
}

void
ZfsJob::setConfigurationMap( const QVariantMap& map )
{
    m_poolName = Calamares::getString( map, "poolName" );
    m_poolOptions = Calamares::getString( map, "poolOptions" );
    m_datasetOptions = Calamares::getString( map, "datasetOptions" );
    m_grubCompatibility = Calamares::getString( map, "grubCompatibility" );
    m_poolNames = map.value( "poolNames" ).toMap();
    m_utf8Only = Calamares::getBool( map, "utf8Only", false );

    m_datasets = Calamares::getList( map, "datasets" );
}

CALAMARES_PLUGIN_FACTORY_DEFINITION( ZfsJobFactory, registerPlugin< ZfsJob >(); )
