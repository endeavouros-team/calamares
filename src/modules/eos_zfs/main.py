# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import gettext
import re
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
        plan = subprocess.run(["pacman", "--dbpath", directory, "-Syp", "--noconfirm", "--print-format", "%n %v",
                               "linux", "zfs-linux", "zfs-utils"], check=True, capture_output=True, text=True, timeout=120)
    live_version = probe("modinfo", "-F", "version", "zfs")
    target = re.search(r"^zfs-utils (?:\d+:)?(\d+\.\d+)", plan.stdout, re.MULTILINE)
    live = re.match(r"(\d+\.\d+)", live_version)
    if not live or not target or tuple(map(int, live[1].split("."))) > tuple(map(int, target[1].split("."))):
        return _("The target ZFS version must not be older than the live kernel module's major/minor version.")


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


def probe(*args):
    return subprocess.run(args, check=True, capture_output=True, text=True, timeout=30).stdout.strip()


def prepare_resume(storage):
    partitions = storage.value("partitions") or []
    if not any(p.get("mountPoint") == "/" and p.get("fs") == "zfs" for p in partitions):
        raise ValueError(_("The ZFS hibernation option requires a ZFS root."))
    swaps = [p for p in partitions if p.get("claimed") and p.get("fs") == "linuxswap"]
    if len(swaps) != 1:
        raise ValueError(_("Hibernation needs exactly one dedicated, newly formatted LUKS swap device."))
    swap, = swaps
    uuid = swap.get("luksUuid", "")
    if not re.fullmatch(r"[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}", uuid):
        raise ValueError(_("Hibernation needs a persistent LUKS swap partition, not a file or zvol."))
    name = "luks-" + uuid
    array = storage.value("blockDevicesSwapArray") or {}
    mirror = storage.value("blockDevicesBoot")
    if mirror and array.get("device") != swap["device"]:
        parent = probe("lsblk", "-pndo", "PKNAME", swap["device"])
        if parent in mirror["disks"]:
            raise ValueError(_("A single swap partition on a root RAID disk would prevent degraded boot. Use --raid-swap."))
    if swap.get("luksMapperName") != name or (
            probe("lsblk", "-ndo", "TYPE", swap["device"]) != "part" and array.get("device") != swap["device"]):
        raise ValueError(_("Hibernation swap must be a dedicated partition or installer-created RAID1 array."))
    device = "/dev/mapper/" + name
    if (probe("cryptsetup", "luksUUID", swap["device"]) != uuid
            or probe("blkid", "-s", "TYPE", "-o", "value", device) != "swap"):
        raise ValueError(_("The hibernation device does not contain persistent encrypted swap."))
    memory = re.search(r"^MemTotal:\s+(\d+) kB$", Path("/proc/meminfo").read_text(), re.MULTILINE)
    if not memory or int(probe("blockdev", "--getsize64", device)) <= int(memory[1]) * 1024:
        raise ValueError(_("The unlocked hibernation swap partition must be larger than RAM."))
    storage.insert("zfsResume", {"uuid": uuid, "device": device})


def configure_resume(root, resume):
    module = root / "usr/lib/dracut/modules.d/91calamares-zfs-resume"
    module.mkdir(parents=True, exist_ok=True)
    guard = "calamares-zfs-resume-guard.service"
    service = "systemd-hibernate-resume.service"
    (module / "guard.service").write_text(f"""[Unit]
Description=Check the ZFS hibernation boot parameters
DefaultDependencies=no
Requires={service}
After={service}

[Service]
Type=oneshot
ExecStart=/usr/bin/test -b {resume['device']}
ExecStart=/usr/bin/grep -Eq '(^| )resume={resume['device']}( |$)' /proc/cmdline
ExecStart=/usr/bin/grep -Eqv '(^| )noresume( |$)' /proc/cmdline
""", encoding="utf-8")
    (module / "ordering.conf").write_text(f"[Unit]\nRequires={guard}\nAfter={guard}\n", encoding="utf-8")
    (module / "module-setup.sh").write_text(f"""#!/bin/bash
check() {{ return 255; }}
depends() {{ echo 'systemd crypt resume zfs'; }}
install() {{
    inst_multiple /usr/bin/grep /usr/bin/test /etc/crypttab
    inst_simple "$moddir/guard.service" "$systemdsystemunitdir/{guard}"
    for service in zfs-import-cache zfs-import-scan; do
        inst_simple "$moddir/ordering.conf" "$systemdsystemconfdir/$service.service.d/calamares-resume.conf"
    done
}}
""", encoding="utf-8")
    return ('force_add_dracutmodules+=" calamares-zfs-resume "\n'
            + 'add_device+=" /dev/disk/by-uuid/{} "\n'.format(resume['uuid']))


def configure_grub_refresh(root, mirror):
    if not mirror["esps"]:
        # BIOS targets need a separate explicit reinstall after a GRUB upgrade.
        return
    esps = mirror["esps"]
    if any(not re.fullmatch(r"/[a-zA-Z0-9_/-]+", path) for path in esps):
        raise ValueError(_("Invalid EFI mount point for the GRUB update hook."))
    sbin = root / "usr/local/sbin"
    sbin.mkdir(parents=True, exist_ok=True)
    refresh = sbin / "eos-refresh-grub-mirror"
    refresh.write_text("""#!/usr/bin/bash
set -eu
export ZPOOL_VDEV_NAME_PATH=1
if [[ $(uname -m) != x86_64 || $(cat /sys/firmware/efi/fw_platform_size) != 64 ]]; then
    printf '%s\\n' 'This GRUB update hook requires x86-64 UEFI.' >&2
    exit 1
fi
updated=0
index=0
for esp in {mounts}; do
    index=$((index + 1))
    label=endeavouros
    if (( index > 1 )); then label="endeavouros-raid$index"; fi
    if mountpoint -q "$esp"; then
        grub-install --target=x86_64-efi --efi-directory="$esp" --bootloader-id="$label" --no-nvram
        install -D "$esp/EFI/$label/grubx64.efi" "$esp/EFI/BOOT/BOOTX64.EFI"
        updated=$((updated + 1))
    else
        printf 'GRUB not refreshed on missing ESP %s\\n' "$esp" >&2
    fi
done
(( updated > 0 ))
""".format(mounts=" ".join(esps)), encoding="utf-8")
    refresh.chmod(0o755)
    hooks = root / "etc/pacman.d/hooks"
    hooks.mkdir(parents=True, exist_ok=True)
    (hooks / "95-calamares-grub-mirror.hook").write_text("""[Trigger]
Operation = Upgrade
Type = Package
Target = grub

[Action]
Description = Refresh GRUB on the mounted RAID member EFI System Partitions
When = PostTransaction
Exec = /usr/local/sbin/eos-refresh-grub-mirror
""", encoding="utf-8")


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
    config = 'add_dracutmodules+=" zfs "\n'
    resume = storage.value("zfsResume")
    if resume:
        config += configure_resume(root, resume)
    else:
        sleep_conf = root / "etc/systemd/sleep.conf.d"
        sleep_conf.mkdir(parents=True, exist_ok=True)
        (sleep_conf / "calamares-zfs.conf").write_text("[Sleep]\nAllowHibernation=no\n", encoding="utf-8")
    (directory / "calamares-zfs.conf").write_text(config, encoding="utf-8")
    mirror = storage.value("blockDevicesBoot")
    if mirror:
        configure_grub_refresh(root, mirror)
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
            if not message and libcalamares.job.configuration.get("raidBoot"):
                firmware = Path("/sys/firmware/efi")
                if firmware.is_dir() and (probe("uname", "-m") != "x86_64"
                                          or (firmware / "fw_platform_size").read_text().strip() != "64"):
                    message = _("The EndeavourOS redundant GRUB profile requires x86-64 UEFI or BIOS.")
        elif operation == "prepareResume":
            prepare_resume(storage)
            message = None
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
