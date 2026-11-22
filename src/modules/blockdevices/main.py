# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import gettext
import json
import os
import re
import shutil
import stat
import subprocess
from pathlib import Path
from typing import List, Optional

import libcalamares

_ = gettext.translation("calamares-python",
                        localedir=libcalamares.utils.gettext_path(),
                        languages=libcalamares.utils.gettext_languages(),
                        fallback=True).gettext

JOURNAL = "blockDevicesCleanup"
ARRAY = "blockDevicesArray"
VOLUME = "blockDevicesVolume"
LUKS = "blockDevicesLuks"


class StorageError(RuntimeError):
    pass


def pretty_name():
    return _("Setting up layered block devices.")


def command(args: List[str], secret: Optional[str] = None) -> str:
    result = subprocess.run(args, input=secret.encode("utf-8") if secret is not None else b"",
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=120,
                            env=dict(os.environ, LC_ALL="C"))
    if result.returncode:
        detail = result.stderr.decode(errors="replace").strip() if secret is None else ""
        message = "{} (exit code {})".format(" ".join(args), result.returncode)
        raise StorageError(message + (": " + detail if detail else ""))
    return result.stdout.decode(errors="replace").strip()


def checked_name(value):
    if not isinstance(value, str) or not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_-]{0,31}", value):
        raise StorageError(_("Invalid block device name."))
    return value


def device_for(partition):
    node = partition.get("device", "")
    if not node.startswith("/dev/"):
        raise StorageError(_("A selected partition has no block device."))
    return node


def check_unused(device):
    if not stat.S_ISBLK(os.stat(device).st_mode):
        raise StorageError(_("{} is not a block device.").format(device))
    entries = json.loads(command(["lsblk", "--json", "--output", "NAME,PKNAME,MOUNTPOINTS", device]))["blockdevices"]
    if len(entries) != 1:
        raise StorageError(_("Could not identify {}.").format(device))
    info = entries[0]
    if info.get("children") or any(info.get("mountpoints") or []):
        raise StorageError(_("{} is already in use.").format(device))
    if json.loads(command(["wipefs", "--no-act", "--json", device]))["signatures"]:
        raise StorageError(_("{} has an existing storage signature.").format(device))
    return info.get("pkname") or os.path.realpath(device)


def record_cleanup(undo):
    storage = libcalamares.globalstorage
    journal = storage.value(JOURNAL) or []
    storage.insert(JOURNAL, journal + [undo])


def activate(args, output, undo=None, secret=None):
    command(args, secret)
    if undo is not None:
        record_cleanup(undo)
    command(["udevadm", "wait", "--timeout=30", output])
    if not stat.S_ISBLK(os.stat(output).st_mode):
        raise StorageError(_("{} did not become a block device.").format(output))


def create(config):
    storage = libcalamares.globalstorage
    partitions = storage.value("partitions") or []
    roots = [p for p in partitions if p.get("mountPoint") == "/"]
    if len(roots) != 1 or roots[0].get("fs") != "zfs":
        return
    root = roots[0]
    raid = config.get("raid1")
    lvm = config.get("lvm")
    mode = config.get("encryption", "native")
    if mode not in ("native", "luks", "both"):
        raise StorageError(_("Invalid block device encryption mode."))
    zfs_info = storage.value("zfsInfo") or []
    encryption = next((p for p in reversed(zfs_info) if p.get("mountpoint") == "/"), {})
    encrypt = bool(encryption.get("encrypted")) and mode != "native"
    secret = encryption.get("passphrase") if encrypt else None
    if not (raid or lvm or encrypt):
        return
    if not root.get("claimed") or root.get("luksMapperName") or storage.value(JOURNAL):
        raise StorageError(_("Layering requires a ZFS root selected for formatting and no active installer layers."))
    if encrypt and (not isinstance(secret, str) or not secret or any(c in secret for c in "\n\r\0")):
        raise StorageError(_("The partitioning passphrase is not valid for the selected encryption mode."))

    device = device_for(root)
    members = [device]
    if raid:
        members.extend(device_for(p) for p in partitions if p.get("raidMember") and p.get("claimed")
                       and p.get("fs") == "unformatted" and not p.get("mountPoint"))
        if len(members) < 2:
            raise StorageError(_("RAID1 needs at least one additional unformatted partition marked as RAID."))
    command(["udevadm", "settle"])
    if len({check_unused(member) for member in members}) != len(members):
        raise StorageError(_("RAID1 members must be on different disks."))

    array_name = checked_name(raid.get("name")) if raid else None
    vg = checked_name(lvm.get("volumeGroup")) if lvm else None
    lv = checked_name(lvm.get("logicalVolume")) if lvm else None
    size = lvm.get("sizeMiB") if lvm else None
    if size is not None and (type(size) is not int or size < 64):
        raise StorageError(_("The root logical volume size must be at least 64 MiB."))
    mapper = "calamares-zfs-root"
    mapper_path = "/dev/mapper/" + mapper
    array = "/dev/md/" + array_name if array_name else None
    if (array and os.path.lexists(array)) or (secret is not None and os.path.lexists(mapper_path)):
        raise StorageError(_("A requested block device name is already in use."))
    tools = (["mdadm"] if array else []) + (["vgcreate", "lvcreate", "vgchange"] if vg else [])
    tools += ["cryptsetup"] if encrypt else []
    missing = [tool for tool in tools if not shutil.which(tool)]
    if missing:
        raise StorageError(_("Missing block device tools: {}.").format(", ".join(missing)))

    if array:
        args = ["mdadm", "--create", array, "--run", "--name=" + array_name, "--metadata=1.2", "--level=1",
                "--raid-devices={}".format(len(members)),
                "--bitmap=" + ("internal" if raid.get("bitmap", True) else "none"), members[0]]
        if raid.get("writeMostly", False):
            args.append("--write-mostly")
        activate(args + members[1:], array, ["mdadm", "--stop", array])
        detail = command(["mdadm", "--detail", "--export", array])
        match = re.search(r"^MD_UUID=([0-9a-f:]+)$", detail, re.MULTILINE)
        if not match:
            raise StorageError(_("Could not determine the RAID array UUID."))
        storage.insert(ARRAY, {"device": array, "uuid": match.group(1)})
        device = array

    if vg:
        command(["vgcreate", vg, device])
        record_cleanup(["vgchange", "-an", vg])
        volume = "/dev/{}/{}".format(vg, lv)
        size_args = ["--size", "{}M".format(size)] if size is not None else ["--extents", "100%FREE"]
        activate(["lvcreate", "--yes", *size_args, "--name", lv, vg], volume)
        device = volume
        storage.insert(VOLUME, vg + "/" + lv)

    updated = dict(root, device=device, partuuid="")
    if secret is not None:
        command(["cryptsetup", "luksFormat", "--type", "luks2", "--batch-mode", "--key-file", "-", device], secret)
        activate(["cryptsetup", "open", "--type", "luks", "--key-file", "-", device, mapper],
                 mapper_path, ["cryptsetup", "close", mapper], secret)
        uuid = command(["cryptsetup", "luksUUID", device])
        if not re.fullmatch(r"[a-fA-F0-9-]{36}", uuid):
            raise StorageError(_("Could not determine the root LUKS UUID."))
        updated.update(luksMapperName=mapper, luksUuid=uuid, luksKeyFileAllowed=False)
        storage.insert(LUKS, uuid)
        if mode == "luks":
            storage.insert("zfsInfo", [p for p in zfs_info if p.get("mountpoint") != "/"])
    storage.insert("partitions", [updated if p is root else p for p in partitions])


def configure(initramfs):
    storage = libcalamares.globalstorage
    if not storage.value(JOURNAL):
        return
    mountpoint = storage.value("rootMountPoint")
    if not mountpoint:
        raise StorageError(_("The target system is not mounted."))
    etc = Path(mountpoint) / "etc"
    array = storage.value(ARRAY)
    if array:
        config = etc / "mdadm.conf"
        entry = "ARRAY {device} UUID={uuid}".format(**array)
        if not config.exists() or entry not in config.read_text(encoding="utf-8").splitlines():
            with config.open("a", encoding="utf-8") as file:
                file.write("\n" + entry + "\n")

    if initramfs == "dracut":
        directory = etc / "dracut.conf.d"
        directory.mkdir(exist_ok=True)
        modules, devices, files = [], [], []
        if array:
            modules.append("mdraid")
            devices.append("rd.md.uuid=" + array["uuid"])
            files.append("/etc/mdadm.conf")
        volume = storage.value(VOLUME)
        if volume:
            modules.append("lvm")
            devices.append("rd.lvm.lv=" + volume)
        uuid = storage.value(LUKS)
        if uuid:
            modules.append("crypt")
            devices.append("rd.luks.uuid=" + uuid)
            files.append("/etc/crypttab")
        with (directory / "calamares-blockdevices.conf").open("w", encoding="utf-8") as file:
            file.write('add_dracutmodules+=" {} "\n'.format(" ".join(modules)))
            file.write('kernel_cmdline+=" {} "\n'.format(" ".join(devices)))
            if files:
                file.write('install_items+=" {} "\n'.format(" ".join(files)))


def deactivate():
    storage = libcalamares.globalstorage
    journal = storage.value(JOURNAL) or []
    while journal:
        command(journal[-1])
        journal.pop()
        storage.insert(JOURNAL, journal)


def run():
    config = libcalamares.job.configuration
    try:
        operation = config.get("operation", "create")
        if operation == "create":
            create(config)
        elif operation == "configure":
            configure(config.get("initramfs", "none"))
        elif operation == "deactivate":
            deactivate()
        else:
            raise StorageError(_("Unknown block device operation."))
    except (OSError, ValueError, subprocess.TimeoutExpired, StorageError) as error:
        return _("Layered block device setup failed."), str(error)
