#!/usr/bin/env python3

import os
import re
import subprocess
import shutil
from subprocess import CalledProcessError

import libcalamares
from libcalamares.utils import gettext_path, gettext_languages

import gettext
from pathlib import Path

_translation = gettext.translation("calamares-python",
                                   localedir=gettext_path(),
                                   languages=gettext_languages(),
                                   fallback=True)
_ = _translation.gettext
_n = _translation.ngettext

name = "Setup pacman and configure mirrors"
user_output = False


def pretty_name():
    return _(name)


def pretty_status_message():
    return 'Updating mirrorlists and initializing keyrings'


def line_cb(line):
    """
    Writes every line to the debug log and displays it in calamares
    :param line: The line of output text from the command
    """
    if user_output:
        global custom_status_message
        custom_status_message = line.strip()
    libcalamares.utils.debug(line)


def is_package_file_modified(package_name, search_string, filename):
    if Path(filename).exists():
        diff_re = re.compile(f".*{search_string}.*checksum.*")

        pacman_output = list()
        try:
            libcalamares.utils.host_env_process_output(['pacman', '-Qkk', package_name], pacman_output)
            for line in pacman_output:
                if diff_re.match(line):
                    return True
        except CalledProcessError:
            libcalamares.utils.warning("Failed to process existing Arch mirrorlist, continuing...")

    return False


def generate_mirrorlist(command, run_command):
    if Path(command).exists():
        try:
            libcalamares.utils.host_env_process_output(run_command, line_cb)
            return True
        except CalledProcessError:
            libcalamares.utils.warning(f"{command} missing")

    return False


def update_mirrorlist_online(mountpoint):
    relative_command = "/usr/bin/rate-mirrors"
    eos_relative_command = "/usr/bin/eos-rankmirrors"
    fallback_command = ["/usr/bin/create-ml"]
    arch_mirrorlist_filename = "/etc/pacman.d/mirrorlist"
    eos_mirrorlist_filename = "/etc/pacman.d/endeavouros-mirrorlist"

    # Check if the Arch mirrorlist on the host has been modified
    use_existing_mirrorlist = is_package_file_modified('pacman-mirrorlist', 'mirrorlist', arch_mirrorlist_filename)

    # Generate the Arch mirrorlist if needed
    if use_existing_mirrorlist:
        libcalamares.utils.debug('Using existing Arch mirrorlist from host')
    else:
        if not generate_mirrorlist(relative_command, [relative_command, "--allow-root", "--save=/etc/pacman.d/mirrorlist",
                                                      "arch", "--max-delay=3600"]):
            # Use the fallback mirrorlist
            libcalamares.utils.warning("Generating fallback mirrorlist")
            libcalamares.utils.host_env_process_output(fallback_command, line_cb)

    # Now copy the mirrorlist to the target
    install_file(mountpoint, arch_mirrorlist_filename)

    # Check if the EOS mirrorlist on the host has been modified
    use_existing_mirrorlist = is_package_file_modified('endeavouros-mirrorlist', 'endeavouros', eos_mirrorlist_filename)

    # Generate the EOS mirrorlist if needed
    if use_existing_mirrorlist:
        libcalamares.utils.debug('Using existing EOS mirrorlist from host')
    else:
        if not generate_mirrorlist(eos_relative_command, [eos_relative_command]):
            libcalamares.utils.warning(f"Failed to generate EOS mirrorlist")

    # Now copy the mirrorlist to the target
    install_file(mountpoint, eos_mirrorlist_filename)



def update_mirrorlist_offline(mountpoint):
    command = ["/usr/bin/create-ml", "--offline"]
    arch_mirrorlist_filename = "/etc/pacman.d/mirrorlist"
    eos_mirrorlist_filename = "/etc/pacman.d/endeavouros-mirrorlist"

    use_existing_mirrorlist = is_package_file_modified('pacman-mirrorlist', 'mirrorlist', arch_mirrorlist_filename)

    if use_existing_mirrorlist:
        libcalamares.utils.debug('Using existing Arch mirrorlist from host')
    else:
        libcalamares.utils.host_env_process_output(command, line_cb)

    install_file(mountpoint, arch_mirrorlist_filename)
    install_file(mountpoint, eos_mirrorlist_filename)


def install_file(mountpoint, filename):
    try:
        target = mountpoint + filename
        libcalamares.utils.debug(f'Installing {filename} to {target}')
        Path(target).parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(filename, target)
    except:
        libcalamares.utils.warning(f"Failed to install {filename} to target")


def run():
    """
    Runs a script passing in the appropriate options

    """
    global user_output
    user_output = libcalamares.job.configuration.get("userOutput", False)

    try:
        root_mountpoint = libcalamares.globalstorage.value("rootMountPoint")
    except KeyError:
        return f"Missing root mountpoint, aborting"

    # If hasInternet is missing from global storage, it means the user selected an offline install
    if libcalamares.globalstorage.contains("hasInternet"):
        update_mirrorlist_online(root_mountpoint)
        try:
            libcalamares.utils.host_env_process_output(["pacman", "-Sy", "--noconfirm", "archlinux-keyring", "endeavouros-keyring"],
                                                       line_cb)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to update keyring on host")
    else:
        update_mirrorlist_offline(root_mountpoint)
        try:
            libcalamares.utils.host_env_process_output(["pacman-key", "--init"], line_cb)
            libcalamares.utils.host_env_process_output(["pacman-key", "--populate", "archlinux", "endeavouros"], line_cb)
        except CalledProcessError:
            libcalamares.utils.warning(f"Failed to update keyring on host")

    return None
