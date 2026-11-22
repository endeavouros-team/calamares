<!-- SPDX-FileCopyrightText: no
     SPDX-License-Identifier: CC0-1.0 -->

# Layered ZFS installations

The opt-in `blockdevices` job builds the storage below the new ZFS root pool.
It does not replace the partitioning view or change ordinary installations.
Each layer is optional and the order is partition/device → RAID1 → LVM →
LUKS2 → ZFS. Native ZFS encryption remains an independent option. The job
does not support arbitrary layer order or reuse of an existing stack.

## Select the devices and capacities

In manual partitioning, create a partition for each pool on the device you
want. Choose **ZFS**, a capacity, and a mount point. A device assigned to `/`
backs the root pool. A ZFS partition assigned to `/boot`, `/home`, or another
mount point gets its own pool, consuming that partition, not space in the root
pool. An independent, unencrypted `/boot` can also be an ordinary filesystem
supported by the bootloader. The EFI System Partition stays separate from both
ZFS and the root stack (e.g. FAT mounted on `/boot/efi` or `/efi`).

For `raid1`, create one or more new unformatted partitions on different disks
with the `raid` flag selected and no mount point. The `/` partition is the
primary member. Other partitions do not enter the array; this includes
existing, unclaimed RAID partitions. The smallest member limits capacity.
Choose `bitmap: false` to disable the internal write-intent bitmap and
`writeMostly: true` to prefer reads from the primary. The latter marks the
other members write-mostly; they may still serve reads if necessary. This
does not install the bootloader on extra disks or mirror the ESP or `/boot`.

For `lvm`, set `volumeGroup` and `logicalVolume` to unused names. Set `sizeMiB`
to cap the root LV before ZFS is created; without it the LV uses all free
extents. The remainder of the volume group is left unallocated. Other pools
are not allocated inside this VG by the job.

In `zfs.conf`, `datasets` controls the root pool's independently mounted
filesystems, such as `/home` or `/var/log`. Configure parent datasets before
children and exactly one mountable dataset at `/`. A dedicated partition or
pool takes precedence over a root-pool dataset at or below its mount point.
Per-dataset `properties` such as `quota: '200G'` and `reservation: '10G'`
control space within the root pool; they do not change pool capacity. Set
`poolNames` to map mount points to names (otherwise names derive from
`poolName`). `utf8Only` defaults to `false`; opt in at creation time only when
the target supports UTF-8-only filenames.

## Encryption and boot

- `encryption: native` (default) leaves a partitioning passphrase for ZFS to
  use directly. `luks` instead puts LUKS2 below the root pool. `both` uses the
  passphrase for both layers, which may prompt twice during boot. Without a
  confirmed passphrase, the root stack is not encrypted. Layered LUKS root
  does not generate or include an automatic unlock key in the initramfs.
- For GRUB, set `grubCompatibility` to an OpenZFS profile matching the installed
  GRUB (`grub2` for GRUB 2.12 or newer). It constrains the ZFS `/boot` pool, or
  the root pool when there is no separate `/boot`. Use a separate **unencrypted**
  `/boot` for native or LUKS encryption. Do not add unrestricted feature or
  encryption options to the GRUB-visible pool. A compatible profile does not
  make every storage topology readable by GRUB. A separate ZFS `/boot` uses
  a legacy mount declared in `fstab`, ordered after pool import and before
  any child mounts such as `/boot/efi`.
- Use a swap partition, not a swap file on ZFS. In manual partitioning, pick
  Linux swap and enable encryption on that partition. In the guided erase
  workflow, newly created swap is LUKS when an encryption passphrase is set.
  The installed system addresses swap via the mapper name in `fstab` and the
  outer LUKS UUID in `crypttab`. Hibernation requires initramfs resume support
  and sufficient swap; the small-swap option does not guarantee either.

## Distribution integration

The `create`, `configure`, and `deactivate` instances must run in the same
execution sequence. Insert them around the distribution's jobs as follows:

```yaml
instances:
  - { id: create, module: blockdevices, config: blockdevices.conf }
  - { id: configure, module: blockdevices, config: blockdevices_configure.conf }
  - { id: deactivate, module: blockdevices, config: blockdevices_deactivate.conf }
```

1. `partition` → `blockdevices@create` → `zfs` → `mount`.
2. Install the target, write `fstab`/`crypttab`, copy the host ID using
   `zfshostid`, and run `blockdevices@configure` before building the initramfs.
   Use `operation: configure` and `initramfs: dracut` for its configuration to
   persist the md/LVM/crypt modules, UUIDs and target config files. Otherwise
   it writes the array UUID to `mdadm.conf`, and the distribution must arrange
   for storage assembly and ZFS import before root mount.
3. Build the initramfs with OpenZFS's boot integration, then install the
   bootloader. Enable target ZFS import/mount for non-root datasets and pools.
4. Run `umount` with `emergency: true`, followed by
   `blockdevices@deactivate` with `operation: deactivate` and `emergency: true`.
   Unmounting and exporting the pools must happen before deactivating devices.

The live system needs `udevadm`, util-linux, ZFS and any selected layer's
tools (`mdadm`, LVM, cryptsetup). Use a clean set of target disks. The layer
job rejects active mounts, devices with children, existing signatures, and
members on the same underlying disk. The emergency job deactivates only
successfully started installer layers in reverse order. It does not remove
their persistent metadata or undo partitioning. No new environment variables
are needed.
