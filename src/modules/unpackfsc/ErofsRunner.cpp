/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2025 Kel Modderman <kelvmod@gmail.com>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#include "ErofsRunner.h"

#include <utils/Logger.h>
#include <utils/Runner.h>
#include <utils/String.h>

#include <QString>

Calamares::JobResult
ErofsRunner::run()
{
    if ( !checkSourceExists() )
    {
        return Calamares::JobResult::internalError(
            tr( "Invalid erofs configuration" ),
            tr( "The source archive <i>%1</i> does not exist." ).arg( m_source ),
            Calamares::JobResult::InvalidConfiguration );
    }

    const QString dumpErofsToolName = QStringLiteral( "dump.erofs" );
    QString dumpErofsExecutable;
    if ( !checkToolExists( dumpErofsToolName, dumpErofsExecutable ) )
    {
        return Calamares::JobResult::internalError(
            tr( "Missing tools" ),
            tr( "The <i>%1</i> tool is not installed on the system." ).arg( dumpErofsToolName ),
            Calamares::JobResult::MissingRequirements );
    }

    const QString fsckErofsToolName = QStringLiteral( "fsck.erofs" );
    QString fsckErofsExecutable;
    if ( !checkToolExists( fsckErofsToolName, fsckErofsExecutable ) )
    {
        return Calamares::JobResult::internalError(
            tr( "Missing tools" ),
            tr( "The <i>%1</i> tool is not installed on the system." ).arg( fsckErofsToolName ),
            Calamares::JobResult::MissingRequirements );
    }

    const QString destinationPath = Calamares::System::instance()->targetPath( m_destination );
    if ( destinationPath.isEmpty() )
    {
        return Calamares::JobResult::internalError(
            tr( "Invalid erofs configuration" ),
            tr( "No destination could be found for <i>%1</i>." ).arg( m_destination ),
            Calamares::JobResult::InvalidConfiguration );
    }

    // Get the stats (number of inodes) from the FS
    {
        m_inodes = -1;
        Calamares::Utils::Runner r( { dumpErofsExecutable, QStringLiteral( "-s" ), m_source } );
        r.setLocation( Calamares::Utils::RunLocation::RunInHost ).enableOutputProcessing();
        QObject::connect( &r,
                          &decltype( r )::output,
                          [ & ]( QString line )
                          {
                              if ( line.startsWith( "Filesystem inode count: " ) )
                              {
                                  m_inodes = line.split( ' ', SplitSkipEmptyParts ).last().toInt();
                              }
                          } );
        /* ignored */ r.run();
    }
    if ( m_inodes <= 0 )
    {
        cWarning() << "No stats could be obtained from" << dumpErofsExecutable << "-s "
                   << m_source;
    }

    // Now do the actual unpack
    {
        m_linesProcessed = 0;
        Calamares::Utils::Runner r( { fsckErofsExecutable,
                                      QStringLiteral( "-d9" ),
                                      QStringLiteral( "--force" ),
                                      QStringLiteral( "--extract=%1" ).arg( destinationPath ),
                                      m_source } );
        r.setLocation( Calamares::Utils::RunLocation::RunInHost ).enableOutputProcessing();
        connect( &r, &decltype( r )::output, this, &ErofsRunner::erofsProgress );
        return r.run().explainProcess( fsckErofsToolName, std::chrono::seconds( 0 ) );
    }
}

void
ErofsRunner::erofsProgress( QString line )
{
    m_linesProcessed++;
    m_linesSinceLastUIUpdate++;
    if ( m_linesSinceLastUIUpdate > updateUIEveryNLines && line.contains( '/' ) )
    {
        const QString pathname = line.split( '/', SplitSkipEmptyParts ).last().trimmed();
        if ( !pathname.isEmpty() )
        {
            m_linesSinceLastUIUpdate = 0;
            double p = m_inodes > 0 ? ( double( m_linesProcessed ) / double( m_inodes ) ) : 0.5;
            Q_EMIT progress( p, tr( "Erofs path %1" ).arg( pathname ) );
        }
    }
}
