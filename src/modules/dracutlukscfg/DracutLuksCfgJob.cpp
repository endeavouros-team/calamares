/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2016 Kevin Kofler <kevin.kofler@chello.at>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#include "DracutLuksCfgJob.h"

#include <algorithm>

#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QTextStream>

#include "CalamaresVersion.h"
#include "GlobalStorage.h"
#include "JobQueue.h"

#include "utils/Logger.h"

static const QLatin1String CONFIG_FILE( "/etc/dracut.conf.d/calamares-luks.conf" );

static const char CONFIG_FILE_HEADER[]
    = "# LUKS configuration automatically written by the Calamares system installer\n"
      "\n";

static const char CONFIG_FILE_CRYPTTAB_KEYFILE_LINE[]
    = "# force installing /etc/crypttab even if hostonly=\"no\", install the keyfile\n"
      "install_items+=\" /etc/crypttab /crypto_keyfile.bin \"\n";

static const char CONFIG_FILE_CRYPTTAB_LINE[] = "# force installing /etc/crypttab even if hostonly=\"no\"\n"
                                                "install_items+=\" /etc/crypttab \"\n";

static const QLatin1String
    CONFIG_FILE_SWAPLINE( "# enable automatic resume from swap\nadd_device+=\" /dev/disk/by-uuid/%1 \"\n" );

static QString
rootMountPoint()
{
    Calamares::GlobalStorage* globalStorage = Calamares::JobQueue::instance()->globalStorage();
    return globalStorage->value( QStringLiteral( "rootMountPoint" ) ).toString();
}

static QVariantList
partitions()
{
    Calamares::GlobalStorage* globalStorage = Calamares::JobQueue::instance()->globalStorage();
    return globalStorage->value( QStringLiteral( "partitions" ) ).toList();
}

static bool
isRootEncrypted()
{
    const QVariantList partitions = ::partitions();
    for ( const QVariant& partition : partitions )
    {
        QVariantMap partitionMap = partition.toMap();
        QString mountPoint = partitionMap.value( QStringLiteral( "mountPoint" ) ).toString();
        if ( mountPoint == QStringLiteral( "/" ) )
        {
            return partitionMap.contains( QStringLiteral( "luksMapperName" ) );
        }
    }
    return false;
}

static bool
includeKeyfile()
{
    const QVariantList partitions = ::partitions();
    for ( const QVariant& partition : partitions )
    {
        QVariantMap partitionMap = partition.toMap();
        QString mountPoint = partitionMap.value( QStringLiteral( "mountPoint" ) ).toString();
        if ( mountPoint == QStringLiteral( "/boot" ) )
        {
            if ( !partitionMap.contains( QStringLiteral( "luksMapperName" ) ) )
            {
                return false;
            }
        }
    }
    return QFileInfo::exists( rootMountPoint() + QStringLiteral( "/crypto_keyfile.bin" ) );
}

static bool
usesGrub()
{
    if ( Calamares::JobQueue::instance()->globalStorage()->contains( "packagechooser_packagechooserq" ) )
    {
        const QString bootloader
            = Calamares::JobQueue::instance()->globalStorage()->value( "packagechooser_packagechooserq" ).toString();
        return bootloader.toLower().trimmed() == "grub";
    }
    return false;
}

static QString
swapOuterUuid()
{
    const QVariantList partitions = ::partitions();
    const auto zfsRoot = std::any_of( partitions.cbegin(),
                                      partitions.cend(),
                                      []( const QVariant& partition )
                                      {
                                          const auto p = partition.toMap();
                                          return p.value( "fs" ) == "zfs" && p.value( "mountPoint" ) == "/";
                                      } );
    if ( zfsRoot )
    {
        return { };
    }
    for ( const QVariant& partition : partitions )
    {
        QVariantMap partitionMap = partition.toMap();
        QString fsType = partitionMap.value( QStringLiteral( "fs" ) ).toString();
        if ( fsType == QStringLiteral( "linuxswap" ) && partitionMap.value( "claimed" ).toBool()
             && partitionMap.contains( QStringLiteral( "luksMapperName" ) ) )
        {
            return partitionMap.value( QStringLiteral( "luksUuid" ) ).toString();
        }
    }
    return QString();
}

DracutLuksCfgJob::DracutLuksCfgJob( QObject* parent )
    : Calamares::CppJob( parent )
{
}


DracutLuksCfgJob::~DracutLuksCfgJob() { }


QString
DracutLuksCfgJob::prettyName() const
{
    if ( isRootEncrypted() || !swapOuterUuid().isEmpty() )
    {
        return tr( "Writing LUKS configuration for Dracut to %1…", "@status" ).arg( CONFIG_FILE );
    }
    else
    {
        return tr( "No encrypted root or swap device to configure for Dracut.", "@info" );
    }
}


Calamares::JobResult
DracutLuksCfgJob::exec()
{
    const QString swapUuid = swapOuterUuid();
    if ( isRootEncrypted() || !swapUuid.isEmpty() )
    {
        const QString realConfigFilePath = rootMountPoint() + CONFIG_FILE;
        cDebug() << "[DRACUTLUKSCFG]: Writing" << realConfigFilePath;
        QDir( QStringLiteral( "/" ) ).mkpath( QFileInfo( realConfigFilePath ).absolutePath() );
        QFile configFile( realConfigFilePath );
        if ( !configFile.open( QIODevice::WriteOnly | QIODevice::Text ) )
        {
            cDebug() << "[DRACUTLUKSCFG]: Failed to open" << realConfigFilePath;
            return Calamares::JobResult::error( tr( "Failed to open %1", "@error" ).arg( realConfigFilePath ) );
        }
        QTextStream outStream( &configFile );
        outStream << CONFIG_FILE_HEADER
                  << ( usesGrub() && includeKeyfile() ? CONFIG_FILE_CRYPTTAB_KEYFILE_LINE : CONFIG_FILE_CRYPTTAB_LINE );
        if ( !swapUuid.isEmpty() )
        {
            outStream << QString( CONFIG_FILE_SWAPLINE ).arg( swapUuid ).toLatin1();
        }
        cDebug() << "[DRACUTLUKSCFG]: Wrote config to" << realConfigFilePath;
    }
    else
    {
        cDebug() << "[DRACUTLUKSCFG]: no encrypted root or swap, skipping";
    }

    return Calamares::JobResult::ok();
}

CALAMARES_PLUGIN_FACTORY_DEFINITION( DracutLuksCfgJobFactory, registerPlugin< DracutLuksCfgJob >(); )
