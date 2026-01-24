#!/usr/bin/env python3

import subprocess

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
name = "Hardware detection"


def pretty_name():
    return _(name)


def pretty_status_message():
    if custom_status_message is not None:
        return custom_status_message


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
        package = 'intel_ucode'
    elif vendor == 'AuthenticAMD':
        package = 'amd_ucode'

    if package:
        try:
            libcalamares.utils.target_env_process_output(["pacman", "-Sy", "--noconfirm", package], None)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to install {package}")
    else:
        libcalamares.utils.warning(f'Vendor {vendor} has no know ucode package.  Skipping ucode install...')


def remove_ucode(vendor):
    packages = list()
    if vendor != 'GenuineIntel':
        packages.append('intel_ucode')
    elif vendor != 'AuthenticAMD':
        packages.append('amd_ucode')

    if packages:
        try:
            libcalamares.utils.target_env_process_output(["pacman", "-Rcn", "--noconfirm"].append(packages), None)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to remove {packages}")


def run_command(command):
    try:
        libcalamares.utils.target_env_process_output(command, None)
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
