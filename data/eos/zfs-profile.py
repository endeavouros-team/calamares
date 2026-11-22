#!/usr/bin/env python3
# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

"""Generate a separate, opt-in online Calamares configuration for ZFS."""

import argparse
import shutil
from pathlib import Path

import yaml


def write_yaml(path, value):
    path.write_text(yaml.safe_dump(value, sort_keys=False), encoding="utf-8")


def read_yaml(path):
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def generate(source, output, online_settings, hibernate=False, raid_boot=None, raid_swap=None):
    if not (source / "modules").is_dir():
        raise ValueError(f"Missing module configurations in {source}")
    settings = read_yaml(online_settings)
    shutil.copytree(source, output, symlinks=True)
    modules = output / "modules"
    execute = next(item["exec"] for item in settings["sequence"] if "exec" in item)
    instances = settings.setdefault("instances", [])

    def instance(module, name, config):
        filename = f"{module}_{name}.conf"
        instances.append(dict(id=name, module=module, config=filename))
        write_yaml(modules / filename, config)
        return f"{module}@{name}"

    preflight = instance("eos_zfs", "live", {"operation": "checkLive", "raidBoot": bool(raid_boot)})
    storage = {"operation": "create"}
    if raid_boot:
        storage.update(raid1={"name": raid_boot}, bootRedundancy=True)
    if raid_swap:
        storage["swapRaid1"] = {"name": raid_swap}
    create = instance("blockdevices", "create", storage)
    configure = instance("blockdevices", "configure", {"operation": "configure", "initramfs": "dracut"})
    deactivate = instance("blockdevices", "deactivate", {"operation": "deactivate", "emergency": True})
    target = instance("eos_zfs", "target", {"operation": "configureTarget"})
    execute.insert(execute.index("partition"), preflight)
    index = execute.index("partition") + 1
    execute[index:index] = [create, "zfs"]
    if hibernate:
        execute.insert(index + 1, instance("eos_zfs", "resume", {"operation": "prepareResume"}))
    index = execute.index("eos_bootloader")
    execute[index:index] = ["zfshostid", configure, target]
    execute.insert(execute.index("umount") + 1, deactivate)
    write_yaml(output / "settings.conf", settings)
    write_yaml(modules / "umount.conf", {"emergency": True})

    partition = read_yaml(modules / "partition.conf")
    partition["defaultFileSystemType"] = "zfs"
    partition["availableFileSystemTypes"] = ["zfs"]
    partition["userSwapChoices"] = ["none", "suspend" if hibernate else "small"]
    if hibernate:
        partition["enableLuksAutomatedPartitioning"] = True
    partition["luksGeneration"] = "luks2"
    write_yaml(modules / "partition.conf", partition)

    chooser = read_yaml(modules / "packagechooserq.conf")
    chooser["packageChoice"] = "grub"
    write_yaml(modules / "packagechooserq.conf", chooser)
    if raid_boot:
        bootloader = read_yaml(modules / "bootloader.conf")
        bootloader.update(efiBootloaderId="endeavouros")
        write_yaml(modules / "bootloader.conf", bootloader)

    zfs = read_yaml(modules / "zfs.conf")
    zfs.update(poolNames={"/": "eosroot", "/boot": "eosboot"}, grubCompatibility="grub2", utf8Only=False)
    zfs["poolOptions"] = "-o ashift=12 -O acltype=posixacl -O relatime=on"
    write_yaml(modules / "zfs.conf", zfs)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="existing EndeavourOS Calamares configuration directory")
    parser.add_argument("output", type=Path, help="new directory for the generated profile")
    parser.add_argument("--online-settings", type=Path, default=Path(__file__).with_name("settings_online.conf"),
                        help="base online settings file to extend")
    parser.add_argument("--hibernate", action="store_true", help="require persistent LUKS swap for ZFS hibernation")
    parser.add_argument("--raid-boot", metavar="ARRAY_NAME", help="require root RAID1 and redundant GRUB")
    parser.add_argument("--raid-swap", metavar="ARRAY_NAME", help="put persistent LUKS swap on its own RAID1 array")
    args = parser.parse_args()
    if args.source.resolve() in args.output.resolve().parents:
        parser.error("the output directory must be outside the source directory")
    if args.raid_swap and not args.raid_boot:
        parser.error("--raid-swap requires --raid-boot")
    generate(args.source, args.output, args.online_settings, args.hibernate, args.raid_boot, args.raid_swap)


if __name__ == "__main__":
    main()
