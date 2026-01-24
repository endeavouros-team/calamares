#!/usr/bin/env python3

import os
import subprocess
import shutil

import libcalamares
from libcalamares.utils import gettext_path, gettext_languages

import gettext

_translation = gettext.translation("calamares-python",
                                   localedir=gettext_path(),
                                   languages=gettext_languages(),
                                   fallback=True)
_ = _translation.gettext
_n = _translation.ngettext

custom_status_message = None
name = "Run script"
user_output = False


def pretty_name():
    return _(name)


def pretty_status_message():
    if custom_status_message is not None:
        return custom_status_message


def line_cb(line):
    """
    Writes every line to the debug log and displays it in calamares
    :param line: The line of output text from the command
    """
    if user_output:
        global custom_status_message
        custom_status_message = line.strip()
    libcalamares.utils.debug(line)


def run():
    """
    Runs a script passing in the appropriate options

    """

    if not libcalamares.job.configuration:
        return "No configuration found", "Aborting due to missing configuration"

    if "name" in libcalamares.job.configuration:
        global name
        name = libcalamares.job.configuration["name"]

    if "scriptPath" in libcalamares.job.configuration:
        script_path = libcalamares.job.configuration["scriptPath"]
    else:
        return "Configuration Error", "No script defined in config"

    online = libcalamares.job.configuration.get("isOnline", False)
    run_in_target = libcalamares.job.configuration.get("runInTarget", False)
    include_root = libcalamares.job.configuration.get("includeRoot", False)
    include_user = libcalamares.job.configuration.get("includeUser", False)
    include_raw_user = libcalamares.job.configuration.get("includeRawUser", False)
    global user_output
    user_output = libcalamares.job.configuration.get("userOutput", False)

    try:
        gs_name = libcalamares.job.configuration["gsName"]
    except KeyError:
        gs_name = None

    # build the parameter list
    command = [script_path]
    if online and libcalamares.globalstorage.contains("hasInternet"):
        if libcalamares.globalstorage.value("hasInternet"):
            command.append("--online")

    if gs_name is not None:
        try:
            command.append("--bootloader=" + libcalamares.globalstorage.value(gs_name))
        except KeyError:
            return f"Key missing", f"Failed to find {gs_name} in global storage"

    if include_root:
        root_mount_point = libcalamares.globalstorage.value("rootMountPoint")

        if not root_mount_point:
            return ("No mount point for root partition in globalstorage",
                    "globalstorage does not contain a \"rootMountPoint\" key, "
                    "doing nothing")

        if not os.path.exists(root_mount_point):
            return ("Bad mount point for root partition in globalstorage",
                    "globalstorage[\"rootMountPoint\"] is \"{}\", which does not "
                    "exist, doing nothing".format(root_mount_point))

        command.append("--root=" + root_mount_point)

    if include_user or include_raw_user:
        user = libcalamares.globalstorage.value("username")
        if user:
            if include_user:
                command.append(f"--user={user}")
            else:
                command.append(user)
        else:
            return "Username missing", "Username not available in global storage"

    try:
        if run_in_target:
            libcalamares.utils.target_env_process_output(command, line_cb)
        else:
            libcalamares.utils.host_env_process_output(command, line_cb)
    except subprocess.CalledProcessError as cpe:
        return "Failed to run script", "The script failed with error {!s}".format(cpe.stderr)

    return None
