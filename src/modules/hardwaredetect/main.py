#!/usr/bin/env python3

import subprocess

import libcalamares
from libcalamares.utils import gettext_path, gettext_languages
from subprocess import CalledProcessError
import gettext

_translation = gettext.translation("calamares-python",
                                   localedir=gettext_path(),
                                   languages=gettext_languages(),
                                   fallback=True)
_ = _translation.gettext
_n = _translation.ngettext

custom_status_message = "Detecting hardware and installing drivers"
name = "Hardware detection"

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
    global custom_status_message
    custom_status_message = line.strip()
    libcalamares.utils.debug(line)


def get_cpu_info():
    cpu_model = "unknown"
    cpu_vendor = "unknown"
    try:
        with open("/proc/cpuinfo", "r") as cpu_file:
            for line in cpu_file:
                if line.strip().startswith("vendor_id"):
                    cpu_vendor = line.split(":")[1].strip()
                if line.strip().startswith("model name"):
                    cpu_model = line.split(":")[1].strip()
    except KeyError:
        libcalamares.utils.warning("Failed to get CPU information")

    return cpu_vendor, cpu_model;


def install_ucode(vendor):
    package = None
    if vendor == 'GenuineIntel':
        package = 'intel-ucode'
    elif vendor == 'AuthenticAMD':
        package = 'amd-ucode'

    if package:
        try:
            libcalamares.utils.target_env_process_output(["pacman", "-Sy", "--noconfirm", package], line_cb)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to install {package}")
    else:
        libcalamares.utils.warning(f'Vendor {vendor} has no know ucode package.  Skipping ucode install...')


def remove_ucode(vendor):
    packages = list()
    if vendor != 'GenuineIntel':
        packages.append('intel-ucode')
    elif vendor != 'AuthenticAMD':
        packages.append('amd-ucode')

    if packages:
        try:
            libcalamares.utils.target_env_process_output(["pacman", "-Rcn", "--noconfirm"] + packages, callback=line_cb)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to remove {packages}")


def run_command(command):
    try:
        libcalamares.utils.target_env_process_output(command, line_cb)
    except CalledProcessError:
        libcalamares.utils.warning(f"Failed to run {command}")


def run():
    vendor, model = get_cpu_info()
    hw_tool = '/usr/bin/eos-hwtool'

    if libcalamares.globalstorage.contains("hasInternet"):
        install_ucode(vendor)
        run_command([hw_tool, '--iso', '--no32', '--install-recommended'])
    else:
        remove_ucode(vendor)
        run_command([hw_tool, '--iso', '--install-recommended', '--packagedir=/usr/share/packages', '--nvidia-only'])
        run_command([hw_tool, '--iso', '--purge'])
        run_command([hw_tool, '--enable-services'])

    return None
