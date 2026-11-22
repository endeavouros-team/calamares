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
BOOT = "blockDevicesBoot"
SWAP_ARRAY = "blockDevicesSwapArray"
ESP_TYPE = "c12a7328-f81f-11d2-ba4b-00a0c93ec93b"
BIOS_TYPE = "21686148-6449-6e6f-744e-656564454649"


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


def check_unused(device, allowed_signatures=()):
    if not stat.S_ISBLK(os.stat(device).st_mode):
        raise StorageError(_("{} is not a block device.").format(device))
    entries = json.loads(command(["lsblk", "--json", "--output", "NAME,PKNAME,MOUNTPOINTS", device]))["blockdevices"]
    if len(entries) != 1:
        raise StorageError(_("Could not identify {}.").format(device))
    info = entries[0]
    if info.get("children") or any(info.get("mountpoints") or []):
        raise StorageError(_("{} is already in use.").format(device))
    signatures = json.loads(command(["wipefs", "--no-act", "--json", device]))["signatures"]
    if any(item["type"] not in allowed_signatures for item in signatures):
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


def probe_partition_location(device):
    fields = command(["lsblk", "-pndo", "TYPE,PKNAME,PARTTYPE", device]).split()
    if len(fields) not in (2, 3) or fields[0] != "part" or not fields[1].startswith("/dev/"):
        return "", ""
    return fields[1], fields[2].lower() if len(fields) == 3 else ""


def partition_location(device):
    disk, kind = probe_partition_location(device)
    if not disk:
        raise StorageError(_("{} must be a partition on a physical disk.").format(device))
    return disk, kind


def partition_path(partition):
    uuid = partition.get("partuuid", "").lower()
    return "/dev/disk/by-partuuid/" + uuid if uuid and os.path.exists("/dev/disk/by-partuuid/" + uuid) else device_for(partition)


def prepare_boot(storage, partitions, members):
    disks = [partition_location(member)[0] for member in members]
    boot = [p for p in partitions if p.get("mountPoint") == "/boot"]
    if len(disks) < 2 or len(boot) != 1 or boot[0].get("fs") != "zfs" or not boot[0].get("claimed"):
        raise StorageError(_("Redundant GRUB requires RAID1 and a new separate ZFS /boot."))
    replicas = [p for p in partitions if p.get("fs") == "zfs" and p.get("claimed") and p.get("raidMember")
                and not p.get("mountPoint")]
    boot_members = [device_for(p) for p in boot + replicas]
    if sorted(partition_location(device)[0] for device in boot_members) != sorted(disks):
        raise StorageError(_("Select exactly one boot-pool partition on every root RAID disk."))
    for device in boot_members:
        check_unused(device)

    if any(p.get("mountpoint") == "/boot" and p.get("encrypted") for p in storage.value("zfsInfo") or []):
        raise StorageError(_("The mirrored GRUB boot pool must be unencrypted."))

    firmware = storage.value("firmwareType")
    if firmware not in ("efi", "bios"):
        raise StorageError(_("Redundant GRUB requires UEFI or BIOS boot mode."))
    wanted = ESP_TYPE if firmware == "efi" else BIOS_TYPE
    esp_mount = storage.value("efiSystemPartition") or "/boot/efi"
    candidates = {}
    for partition in partitions:
        if partition.get("device") and partition.get("fs") in ("fat32", "unformatted"):
            disk, kind = probe_partition_location(device_for(partition))
            if disk in disks and kind == wanted:
                candidates.setdefault(disk, []).append(partition)
    updated, installs = {}, {}
    for idx, disk in enumerate(disks):
        if len(candidates.get(disk, [])) != 1:
            raise StorageError(_("Create exactly one EFI System or BIOS Boot partition on {}.").format(disk))
        p, = candidates[disk]
        if firmware == "bios":
            if p.get("mountPoint"):
                raise StorageError(_("A BIOS Boot partition must not have a mount point."))
            continue
        mount = esp_mount if idx == 0 else esp_mount + "-raid" + str(idx + 1)
        allowed_mounts = (mount,) if idx == 0 else ("", mount)
        if p.get("fs") != "fat32" or not p.get("claimed") or p.get("mountPoint", "") not in allowed_mounts:
            raise StorageError(_("Each RAID disk needs a newly formatted FAT32 ESP; mount only the first at {}.").format(esp_mount))
        if any(other is not p and other.get("mountPoint") == mount for other in partitions):
            raise StorageError(_("The redundant EFI mount point {} is already in use.").format(mount))
        updated[p["device"]] = dict(p, mountPoint=mount, raidBootEsp=True)
        installs[disk] = mount
    storage.insert(BOOT, {"disks": disks, "esps": [installs[disk] for disk in disks] if installs else [],
                          "vdevs": [partition_path(p) for p in boot + replicas]})
    return [updated.get(p.get("device"), p) for p in partitions]


def create_array(key, name, members, bitmap=True, write_mostly=False, mail="root"):
    array = "/dev/md/" + name
    args = ["mdadm", "--create", array, "--run", "--name=" + name, "--metadata=1.2", "--level=1",
            "--raid-devices={}".format(len(members)), "--bitmap=" + ("internal" if bitmap else "none"), members[0]]
    if write_mostly:
        args.append("--write-mostly")
    activate(args + members[1:], array, ["mdadm", "--stop", array])
    detail = command(["mdadm", "--detail", "--export", array])
    match = re.search(r"^MD_UUID=([0-9a-f:]+)$", detail, re.MULTILINE)
    if not match:
        raise StorageError(_("Could not determine the RAID array UUID."))
    libcalamares.globalstorage.insert(key, {"device": array, "uuid": match.group(1), "mailAddress": mail})
    return array


def open_luks(device, secret):
    command(["cryptsetup", "luksFormat", "--type", "luks2", "--batch-mode", "--key-file", "-", device], secret)
    uuid = command(["cryptsetup", "luksUUID", device])
    if not re.fullmatch(r"[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}", uuid):
        raise StorageError(_("Could not determine the LUKS UUID."))
    mapper = "luks-" + uuid
    path = "/dev/mapper/" + mapper
    if os.path.lexists(path):
        raise StorageError(_("A requested block device name is already in use."))
    activate(["cryptsetup", "open", "--type", "luks", "--key-file", "-", device, mapper],
             path, ["cryptsetup", "close", mapper], secret)
    return uuid, mapper, path


def create(config):
    storage = libcalamares.globalstorage
    partitions = storage.value("partitions") or []
    roots = [p for p in partitions if p.get("mountPoint") == "/"]
    if len(roots) != 1 or roots[0].get("fs") != "zfs":
        return
    root = roots[0]
    raid = config.get("raid1")
    swap_raid = config.get("swapRaid1")
    lvm = config.get("lvm")
    mode = config.get("encryption", "native")
    if mode not in ("native", "luks", "both"):
        raise StorageError(_("Invalid block device encryption mode."))
    if config.get("bootRedundancy") and not raid:
        raise StorageError(_("Enable root RAID1 before requesting redundant GRUB installation."))
    if swap_raid and not raid:
        raise StorageError(_("Enable root RAID1 before requesting mirrored swap."))
    zfs_info = storage.value("zfsInfo") or []
    encryption = next((p for p in reversed(zfs_info) if p.get("mountpoint") == "/"), {})
    encrypt = bool(encryption.get("encrypted")) and mode != "native"
    secret = encryption.get("passphrase") if encryption.get("encrypted") and (encrypt or swap_raid) else None
    if not (raid or lvm or encrypt):
        return
    if not root.get("claimed") or root.get("luksMapperName") or storage.value(JOURNAL):
        raise StorageError(_("Layering requires a ZFS root selected for formatting and no active installer layers."))
    if (encrypt or swap_raid) and (not isinstance(secret, str) or not secret or any(c in secret for c in "\n\r\0")):
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
    if config.get("bootRedundancy"):
        partitions = prepare_boot(storage, partitions, members)

    array_name = checked_name(raid.get("name")) if raid else None
    swap_name = checked_name(swap_raid.get("name")) if swap_raid else None
    mail = raid.get("mailAddress", "root") if raid else None
    if raid and (not isinstance(mail, str) or not re.fullmatch(r"[A-Za-z0-9.!_+@-]+", mail)):
        raise StorageError(_("Invalid RAID monitoring mail address."))
    vg = checked_name(lvm.get("volumeGroup")) if lvm else None
    lv = checked_name(lvm.get("logicalVolume")) if lvm else None
    size = lvm.get("sizeMiB") if lvm else None
    if size is not None and (type(size) is not int or size < 64):
        raise StorageError(_("The root logical volume size must be at least 64 MiB."))
    if (swap_name and swap_name == array_name) or any(os.path.lexists("/dev/md/" + name)
                                                     for name in (array_name, swap_name) if name):
        raise StorageError(_("A requested block device name is already in use."))
    tools = (["mdadm"] if array_name else []) + (["vgcreate", "lvcreate", "vgchange"] if vg else [])
    tools += ["cryptsetup"] if encrypt or swap_raid else []
    tools += ["mkswap"] if swap_raid else []
    missing = [tool for tool in tools if not shutil.which(tool)]
    if missing:
        raise StorageError(_("Missing block device tools: {}.").format(", ".join(missing)))

    swap_members = [p for p in partitions if p.get("fs") == "linuxswap" and p.get("claimed")] if swap_raid else []
    if swap_raid:
        if any(p.get("luksMapperName") or p.get("mountPoint") for p in swap_members):
            raise StorageError(_("Choose unencrypted Linux swap members; the installer encrypts their RAID array."))
        swap_paths = [device_for(p) for p in swap_members]
        if sorted(partition_location(p)[0] for p in swap_paths) != sorted(partition_location(p)[0] for p in members):
            raise StorageError(_("Create exactly one Linux swap member on each root RAID disk."))
        for path in swap_paths:
            check_unused(path, allowed_signatures=("swap",))

    if array_name:
        device = create_array(ARRAY, array_name, members, raid.get("bitmap", True), raid.get("writeMostly", False), mail)

    if vg:
        command(["vgcreate", vg, device])
        record_cleanup(["vgchange", "-an", vg])
        volume = "/dev/{}/{}".format(vg, lv)
        size_args = ["--size", "{}M".format(size)] if size is not None else ["--extents", "100%FREE"]
        activate(["lvcreate", "--yes", *size_args, "--name", lv, vg], volume)
        device = volume
        storage.insert(VOLUME, vg + "/" + lv)

    updated = dict(root, device=device, partuuid="")
    if encrypt:
        uuid, mapper, _path = open_luks(device, secret)
        updated.update(luksMapperName=mapper, luksUuid=uuid, luksKeyFileAllowed=False)
        storage.insert(LUKS, uuid)
        if mode == "luks":
            storage.insert("zfsInfo", [p for p in zfs_info if p.get("mountpoint") != "/"])
    partitions = [updated if p is root else p for p in partitions]
    if swap_raid:
        for path in swap_paths:
            command(["wipefs", "--all", "--types", "swap", path])
        array = create_array(SWAP_ARRAY, swap_name, swap_paths)
        uuid, mapper, path = open_luks(array, secret)
        command(["mkswap", path])
        partitions = [p for p in partitions if p not in swap_members] + [dict(
            device=array, fs="linuxswap", fsName="luks2", mountPoint="", claimed=True, uuid="",
            luksMapperName=mapper, luksUuid=uuid, luksKeyFileAllowed=False)]
    storage.insert("partitions", partitions)


def configure(initramfs):
    storage = libcalamares.globalstorage
    if not storage.value(JOURNAL):
        return
    mountpoint = storage.value("rootMountPoint")
    if not mountpoint:
        raise StorageError(_("The target system is not mounted."))
    etc = Path(mountpoint) / "etc"
    array = storage.value(ARRAY)
    arrays = [item for item in (array, storage.value(SWAP_ARRAY)) if item]
    if arrays:
        config = etc / "mdadm.conf"
        lines = config.read_text(encoding="utf-8").splitlines() if config.exists() else []
        entries = ["ARRAY {device} UUID={uuid}".format(**item) for item in arrays]
        additions = [entry for entry in entries if entry not in lines]
        if not any(re.match(r"^\s*(MAILADDR|PROGRAM)\s+", line) for line in lines):
            additions.append("MAILADDR " + arrays[0]["mailAddress"])
        if additions:
            with config.open("a", encoding="utf-8") as file:
                file.write("\n" + "\n".join(additions) + "\n")

    if initramfs == "dracut":
        directory = etc / "dracut.conf.d"
        directory.mkdir(exist_ok=True)
        modules, devices, files = [], [], []
        if arrays:
            modules.append("mdraid")
            devices.extend("rd.md.uuid=" + item["uuid"] for item in arrays)
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
        vdev = ("/dev/mapper/luks-" + uuid if uuid else "/dev/" + volume if volume else
                "/dev/disk/by-id/md-uuid-" + array["uuid"])
        unit = command(["systemd-escape", "--path", "--suffix=device", vdev])
        for service in ("zfs-import-scan", "zfs-import-cache"):
            relative = "etc/systemd/system/{}.service.d/calamares-vdev.conf".format(service)
            dropin = Path(mountpoint) / relative
            dropin.parent.mkdir(parents=True, exist_ok=True)
            dropin.write_text("[Unit]\nRequires={0}\nAfter={0}\n".format(unit), encoding="utf-8")
            files.append("/" + relative)
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
