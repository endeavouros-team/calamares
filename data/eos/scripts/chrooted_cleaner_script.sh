#!/usr/bin/env bash

# New version of cleaner_script
# Made by @fernandomaroto and @manuel
# Any failed command will just be skipped, error message may pop up but won't crash the install process
# Net-install creates the file /tmp/run_once in live environment (need to be transfered to installed system) so it can be used to detect install option
# ISO-NEXT specific cleanup removals and additions (08-2021) @killajoe and @manuel
# 01-2022 passing in online and username as params - @dalto
# 04-2022 small code re-organization - @manuel
# 10-2022 remove unused code and support for dracut/mkinitcpio switch
# 04-2025 use 'nvidia-inst' to install the Nvidia packages now - @manuel
# 07-2025 adding logic to install nvidia-lts if needed - @killajoe/joekamprad
# 11-2025 adding logic to install broadcom-wl if needed and extra check to decide if broadcom-wl or broadcom-wl-dkms is needed - @killajoe/joekamprad
# 01-2026 changing to only use nvidia-open - @killajoe/joekamprad

_c_c_s_msg() {            # use this to provide all user messages (info, warning, error, ...)
    local type="$1"
    local msg="$2"
    echo "==> $type: $msg"
}

_pkg_msg() {            # use this to provide all package management messages (install, uninstall)
    local op="$1"
    local pkgs="$2"
    case "$op" in
        remove | uninstall) op="uninstalling" ;;
        install) op="installing" ;;
    esac
    echo "==> $op $pkgs"
}

_remove_a_pkg() {
    local pkgname="$1"
    _pkg_msg remove "$pkgname"
    pacman -Rsn --noconfirm "$pkgname"
}

_install_needed_packages() {
    if [ "$INSTALL_TYPE" = "online" ]; then
        _pkg_msg install "if missing: $*"
        pacman -S --needed --noconfirm "$@"
    else
        _c_c_s_msg warning "offline mode, not installing packages $*"
    fi
}

_sed_stuff(){

    # Journal for offline. Turn volatile (for iso) into a real system.
    sed -i 's/volatile/auto/g' /etc/systemd/journald.conf 2>>/tmp/.errlog
    sed -i 's/.*pam_wheel\.so/#&/' /etc/pam.d/su
}

_clean_archiso(){

    local _files_to_remove=(
        /etc/sudoers.d/g_wheel
        /var/lib/NetworkManager/NetworkManager.state
        /etc/systemd/system/getty@tty1.service.d/autologin.conf
        /etc/systemd/system/getty@tty1.service.d
        /etc/systemd/system/multi-user.target.wants/*
        /etc/systemd/journald.conf.d
        /etc/systemd/logind.conf.d
        /etc/mkinitcpio-archiso.conf
        /etc/initcpio
        /root/{,.[!.],..?}*
        /etc/motd
        /{gpg.conf,gpg-agent.conf,pubring.gpg,secring.gpg}
        /version
    )

    local xx

    for xx in ${_files_to_remove[*]}; do rm -rf "$xx"; done

    find /usr/lib/initcpio -name "archiso*" -type f -exec rm '{}' \;

}

_clean_offline_packages(){

    local packages_to_remove=(

        # BASE

        ## Base system
        edk2-shell

        # SOFTWARE

        # ISO

        ## Live iso specific
        arch-install-scripts
        net-tools
        memtest86+
        memtest86+-efi
        mkinitcpio
        mkinitcpio-archiso
        mkinitcpio-busybox
        mkinitcpio-nfs-utils
        pv
        syslinux

        ## Live iso tools
        clonezilla
        fsarchiver
        gpart
        gparted
        gptfdisk
        grsync

        # ENDEAVOUROS REPO

        ## General

        ## Calamares EndeavourOS
        $(pacman -Qq | grep calamares)        # finds calamares related packages
        ckbcomp
	
    )

    pacman -Rsn --noconfirm "${packages_to_remove[@]}"

}

_install_extra_drivers_to_target() {
    local dir=/usr/share/packages
    local pkg

    # Handle the broadcom-wl package.
    if [ -r /tmp/broadcom-wl.txt ] && grep -q "^yes$" /tmp/broadcom-wl.txt; then
        _pkg_msg info "Installing broadcom-wl package"

        if _is_offline_mode; then
            # Install using the copied broadcom-wl package.
            pkg="$(/usr/bin/ls -1 $dir/broadcom-wl-*-x86_64.pkg.tar.zst 2>/dev/null | head -n1)"
            if [ -n "$pkg" ]; then
                _pkg_msg install "broadcom-wl (offline)"
                pacman -U --noconfirm "$pkg"
            else
                _c_c_s_msg error "No broadcom-wl package found in folder $dir!"
            fi
        else
            # Online install – choose correct package depending on kernels installed
            if expac %n linux-lts >/dev/null ; then
                # LTS kernel installed --> use DKMS version
                _pkg_msg info "LTS kernel detected --> installing broadcom-wl-dkms"
                _install_needed_packages broadcom-wl-dkms
            else
                # No LTS kernel → install regular broadcom-wl
                _pkg_msg info "No LTS kernel --> installing broadcom-wl"
                _install_needed_packages broadcom-wl
            fi
        fi
    fi

}

_install_more_firmware() {
    # Install or remove firmware packages based on detected hardware

    if lspci -k | grep -q "Kernel driver in use: mwifiex_pcie"; then
        # e.g. Microsoft Surface Pro
        _install_needed_packages linux-firmware-marvell
    else
        if [ "$INSTALL_TYPE" != "online" ]; then
            _remove_a_pkg linux-firmware-marvell
        fi
    fi
}

_clean_up(){
    local xx

    _install_extra_drivers_to_target
    _install_more_firmware

    # change log file permissions
    [ -r /var/log/Calamares.log ]         && chown root:root /var/log/Calamares.log

    # run possible user-given commands
    # _RunUserCommands     # this is in calamares directly now
}

_show_info_about_installed_system() {
    local cmd
    local cmds=( "lsblk -f -o+SIZE"
                 "fdisk -l"
               )

    for cmd in "${cmds[@]}" ; do
        _c_c_s_msg info "$cmd"
        $cmd
    done
}

_run_hotfix_end() {
    local file=hotfix-end.bash
    local type=""
    if [ "$INSTALL_TYPE" = "online" ]; then
        if [ ! -e /tmp/$file ] ; then
            local url=https://raw.githubusercontent.com/endeavouros-team/ISO-hotfixes/main/$file
            wget --timeout=60 -q -O /tmp/$file "$url" || {
                _c_c_s_msg warning "fetching $file failed."
                return
            }
        fi
    fi
    _c_c_s_msg info "running script $file"
    bash /tmp/$file
}

Main() {
    _c_c_s_msg info "Chrooted cleaner started, parameters: $*"

    local i
    local NEW_USER=""
    INSTALL_TYPE=""

    # parse the options
    for i in "$@"; do
        case $i in
            --user=*)
                NEW_USER="${i#*=}"
                ;;
            --online)
                INSTALL_TYPE="online"
                ;;
        esac
    done
    if [ -z "$NEW_USER" ]; then
        _c_c_s_msg error "new username is unknown!"
    fi

    if [ "$INSTALL_TYPE" != "online" ]; then
        _clean_offline_packages
        _clean_archiso
        chown "$NEW_USER":"$NEW_USER" "/home/$NEW_USER/.bashrc"
        _sed_stuff
    fi

    _clean_up
    _run_hotfix_end
    _show_info_about_installed_system

    # Remove pacnew files
    find /etc -type f -name "*.pacnew" -exec rm {} \;

    rm -rf /etc/calamares /opt/extra-drivers

    _c_c_s_msg info "Chrooted cleaner done."
}


########################################
########## SCRIPT STARTS HERE ##########
########################################

Main "$@"
