<!-- SPDX-FileCopyrightText: no
     SPDX-License-Identifier: CC0-1.0 -->

# Opt-in EndeavourOS ZFS installer profile

This profile is for **online, GRUB** installations on a custom live image.
It does not change the official online or offline profile. Use the matching
Calamares storage patches and include `eos_zfs`, `blockdevices`, `zfs` and
`zfshostid` when building Calamares.

## Prepare the image and package repositories

1. Provision the live image with `zfs-utils` and `zfs-linux` built for its
   exact `linux` release, plus `lvm2`, `mdadm`, `cryptsetup`, and `python-yaml`.
   Confirm `modprobe zfs` and `zpool list` work on the live image.
2. Configure a **signed** repository with snapshots providing a mutually
   compatible `linux`, `zfs-linux`, and `zfs-utils`. Add it to the live
   `/etc/pacman.conf` used by pacstrap, and provision the repository's trusted
   signing keys in the live keyring. Make the same trusted repo and signing
   configuration available to the installed system for future upgrades.
   Keep `SigLevel` at the distribution's defaults or stricter. Do not work
   around an unavailable kernel with `--nodeps` or by disabling signatures.
3. The profile requests the three packages in one pacstrap transaction only
   for ZFS root. It checks the installed package names and compares the
   module's `vermagic` with each target kernel before Dracut runs. If the
   repositories do not offer a compatible set, that install fails rather
   than switching to DKMS or shipping a kernel that cannot import root.

The installed ZFS cache contains only the pools imported by this installer.
The target and initramfs use it instead of importing every attached pool by
name. This also avoids choosing an unrelated pool when another ZFS disk is
connected. Pool names still need to be unique on the live system. Separately
encrypted non-root pools are not automatically unlocked by this profile.

## Run Calamares

Generate a separate configuration from the image's packaged configuration
and the fork's `settings_online.conf`:

```sh
sudo python3 data/eos/zfs-profile.py /etc/calamares /run/calamares-zfs
sudo calamares --config /run/calamares-zfs
```

The output directory must not exist. It contains the configuration used by
the profile; it does not overwrite `/etc/calamares`. Keep the standard
EndeavourOS helper scripts at their usual `/etc/calamares/scripts` paths.
The profile selects GRUB by default and checks the live ZFS tools and package
transaction before changing partitions. It is intended only for GRUB-based
ZFS installs; use the regular profile for other filesystems or bootloaders.

For a layered install, edit the generated
`modules/blockdevices_create.conf` before opening Calamares, for example:

```yaml
operation: create
raid1:
    name: eos-root
    bitmap: true
    writeMostly: true
lvm:
    volumeGroup: eos
    logicalVolume: root
    sizeMiB: 51200
encryption: luks
```

Configure only the layers you need. With RAID1, use manual partitioning to
assign `/` to the primary ZFS partition and mark newly created unformatted
partitions on the other disks with the RAID flag. Their size, or the LV size
when LVM is enabled, determines root pool capacity. Assign a separate ZFS
partition of your chosen size to `/boot` for `eosboot`, or use ext4 for `/boot`.
An unencrypted single-pool install can leave `/boot` inside `eosroot`. Keep
`/boot` unencrypted for the encryption example above; use a separate EFI
System Partition mounted at `/efi` on UEFI.

For more pools, select the backing device and size in manual partitioning
and assign each partition a distinct mount point. To separate a mount
without a separate pool, use `datasets` and optional `properties` in the
generated `modules/zfs.conf`. Its UTF-8-only policy is off by default.
For encrypted swap, create a Linux swap partition and select encryption for
that partition. Do not select a swap file on ZFS. ZFS hibernation is not
configured by this profile.

The root RAID mirror is not bootloader redundancy. Verify package upgrades,
initramfs regeneration and reboot on a disposable VM before publishing an
image based on this profile. The official EndeavourOS live image does not
provide the ZFS package repository or kernel-module pairing for this profile.
