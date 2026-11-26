#!/usr/bin/bash
# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later
set -euo pipefail

usage() {
    printf '%s\n' "Usage: sudo bash $0 ZFS-LINUX-PACKAGE ZFS-UTILS-PACKAGE" \
        "       sudo bash $0 --dkms ZFS-DKMS-PACKAGE ZFS-UTILS-PACKAGE LINUX-HEADERS-PACKAGE" \
        'Supply the two signed local packages, with their detached .sig files beside them.' \
        'The package signing key must already be trusted by the live pacman keyring.' >&2
    exit 2
}

(( EUID == 0 )) || usage
package=zfs-linux
if [[ ${1:-} == --dkms ]]; then
    shift
    package=zfs-dkms
    (( $# == 3 )) || usage
    headers=$(realpath "$3")
else
    (( $# == 2 )) || usage
fi
module=$(realpath "$1")
utils=$(realpath "$2")
kernel=$(uname -r)
archives=("$module" "$utils")
if [[ -n ${headers:-} ]]; then
    archives+=("$headers")
fi
for path in "${archives[@]}"; do
    [[ -f $path && -f $path.sig ]] || usage
    pacman-key --verify "$path.sig" "$path"
done

if ! grep -qx "pkgname = $package" < <(bsdtar -xOf "$module" .PKGINFO) ||
   ! grep -qx 'pkgname = zfs-utils' < <(bsdtar -xOf "$utils" .PKGINFO); then
    printf 'Expected signed %s and zfs-utils packages.\n' "$package" >&2
    exit 1
fi
if [[ $package == zfs-linux ]]; then
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
else
    command -v dkms >/dev/null || { printf '%s\n' 'Install compatible DKMS build tools on the live session first.' >&2; exit 1; }
    if ! grep -qx 'pkgname = linux-headers' < <(bsdtar -xOf "$headers" .PKGINFO) ||
       ! grep -Fxq "usr/lib/modules/$kernel/build/Makefile" < <(bsdtar -tf "$headers"); then
        printf 'Headers do not match running kernel %s.\n' "$kernel" >&2
        exit 1
    fi
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
printf '%s\n' '[options]' 'Architecture = auto' 'SigLevel = Required' 'LocalFileSigLevel = Required' > "$tmp/pacman.conf"
pacman --config "$tmp/pacman.conf" -U --needed -- "${archives[@]}"
if [[ $package == zfs-dkms ]]; then
    dkms autoinstall -k "$kernel"
fi
test "$(modinfo -k "$kernel" -F vermagic zfs | cut -d' ' -f1)" = "$kernel"
modprobe zfs
zpool list -H
printf 'OpenZFS is ready on the stock live kernel %s.\n' "$kernel"
