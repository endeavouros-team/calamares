# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import gettext
import shutil
import subprocess
import tempfile
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
    if not Path("/usr/share/zfs/compatibility.d/grub2").is_file():
        return _("The live system is missing the OpenZFS GRUB compatibility profile.")
    subprocess.run(["modprobe", "zfs"], check=True, capture_output=True, text=True, timeout=30)
    subprocess.run(["zpool", "list", "-H"], check=True, capture_output=True, text=True, timeout=30)
    with tempfile.TemporaryDirectory(prefix="calamares-pacman-") as directory:
        subprocess.run(["pacman", "--dbpath", directory, "-Syp", "--noconfirm", "linux", "zfs-linux", "zfs-utils"],
                       check=True, capture_output=True, text=True, timeout=120)


def write_pool_cache(root, pools):
    if not pools:
        raise ValueError(_("No target ZFS pools were imported."))
    target = root / "etc/zfs/zpool.cache"
    target.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="calamares-zfs-") as directory:
        cache = Path(directory) / "zpool.cache"
        configured = []
        try:
            for pool in pools:
                subprocess.run(["zpool", "set", f"cachefile={cache}", pool], check=True, timeout=30)
                configured.append(pool)
            shutil.copyfile(cache, target)
        finally:
            for pool in configured:
                subprocess.run(["zpool", "set", "cachefile=none", pool], check=True, timeout=30)


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

    write_pool_cache(root, storage.value("zfsImportedPools"))
    directory = root / "etc/dracut.conf.d"
    directory.mkdir(parents=True, exist_ok=True)
    (directory / "calamares-zfs.conf").write_text('add_dracutmodules+=" zfs "\n', encoding="utf-8")
    libcalamares.utils.target_env_process_output(["systemctl", "enable", "zfs-import-cache.service",
                                                 "zfs-mount.service", "zfs-import.target", "zfs.target"])
    return None


def run():
    storage = libcalamares.globalstorage
    error_title = _("EndeavourOS ZFS configuration failed.")
    try:
        operation = libcalamares.job.configuration.get("operation", "checkLive")
        if operation == "checkLive":
            message = check_live(storage)
        elif operation == "configureTarget":
            partitions = storage.value("partitions") or []
            if not any(p.get("mountPoint") == "/" and p.get("fs") == "zfs" for p in partitions):
                return None
            message = configure_target(storage)
        else:
            message = _("Unknown ZFS setup operation.")
        if message:
            return error_title, message
    except (OSError, ValueError, subprocess.SubprocessError) as error:
        detail = getattr(error, "stderr", None) or str(error)
        return error_title, detail
    return None
