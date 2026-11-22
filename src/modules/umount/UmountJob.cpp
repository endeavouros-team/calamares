/* === This file is part of Calamares - <https://calamares.io> ===
 *
 * Tags from the Python version of this module:
 *   SPDX-FileCopyrightText: 2014 Aurélien Gâteau <agateau@kde.org>
 *   SPDX-FileCopyrightText: 2016 Anke Boersma <demm@kaosx.us>
 *   SPDX-FileCopyrightText: 2018 Adriaan de Groot <groot@kde.org>
 * Tags for the C++ version of this module:
 *   SPDX-FileCopyrightText: 2021 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#include "UmountJob.h"

#include "partition/Mount.h"
#include "utils/Logger.h"
#include "utils/System.h"
#include "utils/Variant.h"

#include "GlobalStorage.h"
#include "JobQueue.h"

#include <QCoreApplication>
#include <QDir>
#include <QList>

UmountJob::UmountJob( QObject* parent )
    : Calamares::CppJob( parent )
{
}

UmountJob::~UmountJob() { }

QString
UmountJob::prettyName() const
{
    return tr( "Unmounting file systems…", "@status" );
}

static Calamares::JobResult
unmountTargetMounts( const QString& rootMountPoint )
{
    QDir targetMount( rootMountPoint );
    if ( !targetMount.exists() )
    {
        return Calamares::JobResult::internalError(
            QCoreApplication::translate( UmountJob::staticMetaObject.className(), "Could not unmount target system." ),
            QCoreApplication::translate( UmountJob::staticMetaObject.className(),
                                         "The target system is not mounted at '%1'." )
                .arg( rootMountPoint ),
            Calamares::JobResult::GenericError );
    }
    QString targetMountPath = targetMount.absolutePath();
    if ( !targetMountPath.endsWith( '/' ) )
    {
        targetMountPath.append( '/' );
    }

    using MtabInfo = Calamares::Partition::MtabInfo;
    auto targetMounts = MtabInfo::fromMtabFilteredByPrefix( targetMountPath );
    std::sort( targetMounts.begin(), targetMounts.end(), MtabInfo::mountPointOrder );

    cDebug() << "Read" << targetMounts.count() << "entries from" << targetMountPath;
    for ( const auto& m : std::as_const( targetMounts ) )
    {
        // Returns the program's exit code, so 0 is success and non-0
        // (truthy) is a failure.
        if ( Calamares::Partition::unmount( m.mountPoint, { "-v" } ) )
        {
            return Calamares::JobResult::error(
                QCoreApplication::translate( UmountJob::staticMetaObject.className(),
                                             "Could not unmount target system." ),
                QCoreApplication::translate( UmountJob::staticMetaObject.className(),
                                             "The device '%1' is mounted in the target system. It is mounted at '%2'. "
                                             "The device could not be unmounted." )
                    .arg( m.device, m.mountPoint ) );
        }
    }

    // Last we unmount the root
    const auto roots = MtabInfo::fromMtabFilteredByPrefix( rootMountPoint );
    const auto mounted
        = std::any_of( roots.cbegin(),
                       roots.cend(),
                       [ &rootMountPoint ]( const auto& mount ) { return mount.mountPoint == rootMountPoint; } );
    if ( mounted && Calamares::Partition::unmount( rootMountPoint, { "-v" } ) )
    {
        return Calamares::JobResult::error(
            QCoreApplication::translate( UmountJob::staticMetaObject.className(),
                                         "Could not unmount the root of the target system." ),
            QCoreApplication::translate( UmountJob::staticMetaObject.className(),
                                         "The device mounted at '%1' could not be unmounted." )
                .arg( rootMountPoint ) );
    }

    return Calamares::JobResult::ok();
}

static Calamares::JobResult
exportZFSPools()
{
    auto* gs = Calamares::JobQueue::instance()->globalStorage();
    auto pools = gs->value( "zfsImportedPools" ).toList();
    while ( !pools.isEmpty() )
    {
        const QStringList command { "zpool", "export", pools.last().toString() };
        auto result = Calamares::System::runCommand( command, std::chrono::seconds( 30 ) );
        if ( result.getExitCode() )
        {
            return result.explainProcess( command, std::chrono::seconds( 30 ) );
        }
        pools.removeLast();
        gs->insert( "zfsImportedPools", pools );
    }
    return Calamares::JobResult::ok();
}

Calamares::JobResult
UmountJob::exec()
{
    const auto* sys = Calamares::System::instance();
    if ( !sys )
    {
        return Calamares::JobResult::internalError(
            "UMount", tr( "No target system available." ), Calamares::JobResult::InvalidConfiguration );
    }

    Calamares::GlobalStorage* gs
        = Calamares::JobQueue::instance() ? Calamares::JobQueue::instance()->globalStorage() : nullptr;
    if ( !gs )
    {
        return Calamares::JobResult::internalError(
            "UMount", tr( "No global storage is available." ), Calamares::JobResult::InvalidConfiguration );
    }
    gs->remove( "zfsInfo" );

    // Do the unmounting of target-system filesystems
    const auto rootMountPoint = gs->value( "rootMountPoint" ).toString();
    if ( !rootMountPoint.isEmpty() )
    {
        auto r = unmountTargetMounts( rootMountPoint );
        if ( !r )
        {
            return r;
        }
    }

    // For ZFS systems, export the pools
    auto result = exportZFSPools();
    auto swaps = gs->value( "installationSwapDevices" ).toList();
    while ( !swaps.isEmpty() )
    {
        const QStringList command { "swapoff", swaps.last().toString() };
        const auto stopped = Calamares::System::runCommand( command, std::chrono::seconds( 30 ) );
        if ( stopped.getExitCode() )
        {
            return result ? stopped.explainProcess( command, std::chrono::seconds( 30 ) ) : result;
        }
        swaps.removeLast();
        gs->insert( "installationSwapDevices", swaps );
    }
    return result;
}

void
UmountJob::setConfigurationMap( const QVariantMap& map )
{
    Q_UNUSED( map )
}

CALAMARES_PLUGIN_FACTORY_DEFINITION( UmountJobFactory, registerPlugin< UmountJob >(); )
