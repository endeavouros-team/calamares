<!-- SPDX-FileCopyrightText: no
     SPDX-License-Identifier: CC0-1.0 -->

# Opt-in EndeavourOS ZFS installer profile

This profile is for **online, GRUB** installations. Start the stock
EndeavourOS live ISO and load matching OpenZFS packages into that running
session; there is no need to remaster an ISO. Use the patched Calamares
package built for that live session, including `eos_zfs`, `blockdevices`,
`zfs`, and `zfshostid`. The standard online and offline profiles are unchanged.

## Prepare the image and package repositories

1. Boot the official ISO, run `uname -r`, and obtain signed `zfs-linux` and
   corresponding `zfs-utils` archives for **that exact kernel** from a trusted
   ArchZFS repository or snapshot. Keep the detached `.sig` beside each
   package and verify the publisher's signing-key fingerprint before trusting
   it in the live keyring. Run `sudo bash data/eos/load-live-zfs.sh` with the
   module package and the userspace package paths, in that order. The helper
   verifies the files and refuses a package for a different kernel. It never
   upgrades the live kernel. If no signed prebuilt module matches, the same
   helper accepts `--dkms` followed by signed `zfs-dkms`, `zfs-utils`, and
   the exact `linux-headers` package for the live kernel. Install matching
   DKMS build tools first; where necessary use an Arch Linux Archive snapshot
   rather than partially upgrading the live session. DKMS is a live-only
   fallback: the installed system still requires a matched `zfs-linux` set.
   For example, Titan Nova's package manifest lists `linux 7.1.8.arch1-3`,
   while the checked ArchZFS release advertises a prebuilt module for
   `7.2.15-arch1-1`; that prebuilt module is not usable on Titan Nova.
   The live workflow requires `python-yaml`, `lvm2`,
   `mdadm`, and `cryptsetup`, in addition to the patched Calamares package.
2. Configure a **signed** repository with snapshots providing a mutually
   compatible `linux`, `zfs-linux`, and `zfs-utils`. Add it to the live
   `/etc/pacman.conf` used by pacstrap, and provision the repository's trusted
   signing keys in the live keyring. Use inline repository `Server` lines
   or arrange for referenced mirrorlists to be copied to the target. Before
   upgrading the installed system, add and verify the repository signing key
   in its pacman keyring as well; the install does not copy the live private
   trust database.
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

The output directory must not exist. Add `--hibernate` for resume support,
`--raid-boot eos-root` for a redundant GRUB install, and `--raid-swap eos-swap`
for a dedicated encrypted swap mirror. These are opt-in and may be combined.
For example:

```sh
sudo python3 data/eos/zfs-profile.py /etc/calamares /run/calamares-zfs \
    --hibernate --raid-boot eos-root --raid-swap eos-swap
```

The output contains the configuration used by
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
that partition. Swap is always on a block device outside ZFS. Do not put
swap in a ZFS file or zvol.

### Hibernation and redundancy

- **Single swap device:** use `--hibernate` and create one dedicated, newly
  formatted LUKS swap partition larger than RAM after LUKS overhead.
  The boot process prompts for its passphrase before attempting resume;
  OpenZFS import is ordered after that attempt. If redundant boot is also
  enabled, a single swap partition may be on an independent third device,
  but not on just one of the two root RAID disks: losing that disk would
  leave a pending image unverifiable. The swap mirror uses both root disks
  and is the recommended two-disk layout. The boot guard refuses to import
  pools if resume was bypassed; do not manually boot with `noresume` to
  skip a locked or unavailable hibernation image.
- **Swap mirror:** with `--raid-boot … --raid-swap …`, manually create an
  **unencrypted Linux swap partition with no mount point on every root RAID
  disk**, all large enough for hibernation when selected. Do not enable
  encryption on the individual swap members. The installer clears only
  their temporary swap signatures, creates a separate RAID1, opens a single
  persistent LUKS2 mapping above it using the confirmed root encryption
  passphrase, and creates swap only in that mapping. Select encryption on
  the ZFS root partition to supply the passphrase.
- **Boot mirror:** with `--raid-boot`, use GPT on every member and create an
  unencrypted ZFS partition mounted at `/boot` on one disk. Create a ZFS
  partition of comparable size on each other root RAID disk, with no mount
  point and the RAID flag. These become one native ZFS mirror. On x86-64
  UEFI, create one new FAT32 ESP with the EFI flag per disk, and mount only
  the first at `/efi`. The installer mounts the others as `/efi-raid2`, etc.
  GRUB and the standard fallback executable are installed on every ESP.
  The ESPs are **not** mdadm members. On BIOS/GPT, reserve one unformatted
  `bios_grub` partition per disk instead; GRUB is installed to every disk.

The mirrored boot pool holds the kernel, initramfs, and GRUB configuration.
On x86-64 UEFI, a pacman hook refreshes each mounted ESP on GRUB package
upgrades. If a member was absent, remount it and run
`sudo /usr/local/sbin/eos-refresh-grub-mirror` after it returns. BIOS GRUB
upgrades require reinstalling GRUB on each disk. Secure Boot and hybrid
BIOS/UEFI installation are outside the redundant profile.

Verify both normal and fallback boot, hibernation/resume, and degraded boot
with each disk separately removed before using these options on real data.
