#!/usr/bin/bash
# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later
set -euo pipefail

usage() {
    printf '%s\n' "Usage: sudo bash $0 ZFS-LINUX-PACKAGE ZFS-UTILS-PACKAGE" \
        'Supply the two signed local packages, with their detached .sig files beside them.' \
        'The package signing key must already be trusted by the live pacman keyring.' >&2
    exit 2
}

(( $# == 2 && EUID == 0 )) || usage
module=$(realpath "$1")
utils=$(realpath "$2")
kernel=$(uname -r)
for path in "$module" "$utils"; do
    [[ -f $path && -f $path.sig ]] || usage
    pacman-key --verify "$path.sig" "$path"
done

mapfile -t modules < <(bsdtar -tf "$module")
matches=0
for member in "${modules[@]}"; do
    case "$member" in
        "usr/lib/modules/$kernel/"*/zfs.ko|"usr/lib/modules/$kernel/"*/zfs.ko.*) matches=$((matches + 1));;
    esac
done
if (( matches != 1 )); then
    printf 'No matching zfs.ko for running kernel %s; do not upgrade the live kernel.\n' "$kernel" >&2
    exit 1
fi

if ! grep -qx 'pkgname = zfs-linux' < <(bsdtar -xOf "$module" .PKGINFO) ||
   ! grep -qx 'pkgname = zfs-utils' < <(bsdtar -xOf "$utils" .PKGINFO); then
    printf '%s\n' 'Expected zfs-linux and zfs-utils packages.' >&2
    exit 1
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
printf '%s\n' '[options]' 'Architecture = auto' 'SigLevel = Required' 'LocalFileSigLevel = Required' > "$tmp/pacman.conf"
pacman --config "$tmp/pacman.conf" -U --needed -- "$module" "$utils"
test "$(modinfo -k "$kernel" -F vermagic zfs | cut -d' ' -f1)" = "$kernel"
modprobe zfs
zpool list -H
printf 'OpenZFS is ready on the stock live kernel %s.\n' "$kernel"
