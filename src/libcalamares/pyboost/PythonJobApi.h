/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2014-2016 Teo Mrnjavac <teo@kde.org>
 *   SPDX-FileCopyrightText: 2017-2020 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#ifndef CALAMARES_PYBOOST_PYTHONJOBAPI_H
#define CALAMARES_PYBOOST_PYTHONJOBAPI_H

#include "PythonTypes.h"

#include <qglobal.h>  // For qreal

#include <string>

namespace Calamares
{
class PythonJob;
}  // namespace Calamares

namespace CalamaresPython
{

QT_WARNING_PUSH
QT_WARNING_DISABLE_CLANG( "-Wdocumentation-deprecated-sync" )

/// @deprecated Prefer target_env_process_output(args,None,input,timeout) with try/except
int target_env_call( const boost::python::list& args, const std::string& input = std::string(), int timeout = 0 );
/// @deprecated Prefer target_env_process_output(command.split(),None,input,timeout) with try/except
int target_env_call( const std::string& command, const std::string& input = std::string(), int timeout = 0 );
/// @deprecated Prefer target_env_proces_output(args,None,input,timeout)
int check_target_env_call( const boost::python::list& args, const std::string& input = std::string(), int timeout = 0 );
/// @deprecated Prefer target_env_process_output(args,string_variable,input,timeout)
int check_target_env_call( const std::string& command, const std::string& input = std::string(), int timeout = 0 );

QT_WARNING_POP

std::string
check_target_env_output( const std::string& command, const std::string& input = std::string(), int timeout = 0 );

std::string
check_target_env_output( const boost::python::list& args, const std::string& input = std::string(), int timeout = 0 );

int target_env_process_output( const boost::python::list& args,
                               const boost::python::object& callback = boost::python::object(),
                               const std::string& input = std::string(),
                               int timeout = 0 );

int host_env_process_output( const boost::python::list& args,
                             const boost::python::object& callback = boost::python::object(),
                             const std::string& input = std::string(),
                             int timeout = 0 );

class PythonJobInterface
{
public:
    explicit PythonJobInterface( Calamares::PythonJob* parent );

    std::string moduleName;
    std::string prettyName;
    std::string workingPath;

    boost::python::dict configuration;

    void setprogress( qreal progress );

private:
    Calamares::PythonJob* m_parent;
};

}  // namespace CalamaresPython

#endif  // PYTHONJOBAPI_H
