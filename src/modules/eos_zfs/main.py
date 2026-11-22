# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import gettext
import subprocess
from pathlib import Path

import libcalamares

_ = gettext.translation("calamares-python",
                        localedir=libcalamares.utils.gettext_path(),
                        languages=libcalamares.utils.gettext_languages(),
                        fallback=True).gettext


def pretty_name():
    return _("Preparing EndeavourOS ZFS support.")


def check_live(storage):
    bootloader = storage.value("packagechooser_packagechooserq")
    if not isinstance(bootloader, str) or bootloader.strip().casefold() != "grub":
        return _("This EndeavourOS ZFS profile requires GRUB. Select GRUB on the bootloader page.")
    subprocess.run(["modprobe", "zfs"], check=True, capture_output=True, text=True, timeout=30)
    subprocess.run(["zpool", "list", "-H"], check=True, capture_output=True, text=True, timeout=30)
    storage.insert("eosZfsRoot", True)


def configure_target(storage):
    root_path = storage.value("rootMountPoint")
    if not root_path:
        return _("The target system is not mounted.")
    root = Path(root_path)
    modules_root = root / "usr/lib/modules"
    kernels = sorted(p.parent.name for p in modules_root.glob("*/vmlinuz"))
    if not kernels:
        return _("No target kernel was installed.")
    subprocess.run(["pacman", "--root", str(root), "-Q", "zfs-linux", "zfs-utils"],
                   check=True, capture_output=True, text=True, timeout=30)
    for version in kernels:
        module_result = subprocess.run(["modinfo", "-b", str(root), "-k", version, "-F", "vermagic", "zfs"],
                                       check=True, capture_output=True, text=True, timeout=30)
        if module_result.stdout.split()[:1] != [version]:
            return _("The ZFS module does not match installed kernel {}.").format(version)

    directory = root / "etc/dracut.conf.d"
    directory.mkdir(parents=True, exist_ok=True)
    (directory / "calamares-zfs.conf").write_text('add_dracutmodules+=" zfs "\n', encoding="utf-8")
    libcalamares.utils.target_env_process_output(["systemctl", "enable", "zfs-import-scan.service",
                                                 "zfs-mount.service", "zfs.target"])
    return None


def run():
    storage = libcalamares.globalstorage
    partitions = storage.value("partitions") or []
    if not any(p.get("mountPoint") == "/" and p.get("fs") == "zfs" for p in partitions):
        return None

    error_title = _("EndeavourOS ZFS configuration failed.")
    try:
        operation = libcalamares.job.configuration.get("operation", "checkLive")
        if operation == "checkLive":
            message = check_live(storage)
        elif operation == "configureTarget":
            message = configure_target(storage)
        else:
            message = _("Unknown ZFS setup operation.")
        if message:
            return error_title, message
    except (OSError, subprocess.SubprocessError) as error:
        detail = getattr(error, "stderr", None) or str(error)
        return error_title, detail
    return None
