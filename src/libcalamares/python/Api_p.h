/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2026 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#ifndef CALAMARES_PYTHON_API_P_H
#define CALAMARES_PYTHON_API_P_H

/** @file
 *
 * Defines private API for Python modules, in particular strings
 * (should be included only from one translation unit to avoid
 * duplication) with Python docstrings for functions.
 */

#include <string_view>

namespace Calamares
{
namespace Python __attribute__( ( visibility( "hidden" ) ) )
{

    static constexpr std::string_view docstring_target_env_process_output
        = "Runs the specified @p command in the target system. "
          "Calls @p callback for each line out output of the command. "
          "Returns 0 or raises a subprocess.CalledProcessError if something went wrong.";

    static constexpr std::string_view docstring_host_env_process_output
        = "Runs the specified command in the host system. "
          "Calls @p callback for each line out output of the command. "
          "Returns 0 or raises a subprocess.CalledProcessError if something went wrong.";

}  // namespace Python
}  // namespace Calamares

#endif
