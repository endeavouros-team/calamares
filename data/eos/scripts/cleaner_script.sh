#!/usr/bin/env bash

# Made by fernandomaroto for EndeavourOS and Portergos
# Adapted from AIS. An excellent bit of code!
# ISO-NEXT specific cleanup removals and additions (08-2021) @killajoe and @manuel
# 01-2022 passing in root path and username as params - @dalto
# 04-2022 re-organized code - @manuel

# Anything to be executed outside chroot need to be here.

_cleaner_msg() {            # use this function to provide all user messages (info, warning, error, ...)
    local type="$1"
    local msg="$2"
    echo "==> $type: $msg"
}

arch_chroot() {   # This function is no more needed?
    # Use chroot not arch-chroot because of the way calamares mounts partitions
    chroot /tmp/$chroot_path /bin/bash -c "${1}"
}

_CopyFileToTarget() {
    # Copy a file to target

    local file="$1"
    local targetdir="$2"

    if [ ! -r "$file" ] ; then
        _cleaner_msg warning "file '$file' does not exist."
        return
    fi
    if [ ! -d "$targetdir" ] ; then
        _cleaner_msg warning "folder '$targetdir' does not exist."
        return
    fi
    _cleaner_msg info "copying $(basename "$file") to target"
    cp "$file" "$targetdir"
}

_manage_broadcom_wifi_driver() {
    local pkgname=broadcom-wl
    local targetfile=/tmp/$chroot_path/tmp/$pkgname.txt

    # detecting broadcom hardware
    if lsmod | grep -q "brcmfmac\|b43\|wl" \
      || lspci -nn | grep -qi "14e4:43"; then

        # check in addition if  broadcom-wl is installed on the live-system
        if pacman -Q broadcom-wl &>/dev/null; then
            echo "yes" > "$targetfile"
        else
            echo "Broadcom hardware found, but broadcom-wl not installed in live system" >&2
        fi

    fi
}

_copy_files(){
    local config_file
    local target=/tmp/$chroot_path            # $target refers to the / folder of the installed system

    if [ -r /home/liveuser/setup.url ] ; then
        # Is this needed anymore?
        # /home/liveuser/setup.url contains the URL to personal setup.sh
        local URL="$(cat /home/liveuser/setup.url)"
        if (wget -q -O /home/liveuser/setup.sh "$URL") ; then
            _cleaner_msg info "copying setup.sh to target"
            cp /home/liveuser/setup.sh $target/tmp/   # into /tmp/setup.sh of chrooted
        fi
    fi

    # Communicate to chrooted system if
    # - nvidia card is detected
    # - livesession is running nvidia driver
	if grep -qw "nvidia=1" /proc/cmdline; then
    	local nvidia_file="$target/tmp/nvidia-info.bash"
    	local driver

    	driver="$(/usr/bin/nvidia-inst --recommended-driver)"

   	 	if [ "$driver" = "nvidia-open" ]; then
        	echo "nvidia_driver=nvidia-open" >> "$nvidia_file"
    	fi
	fi


    # copy user_commands.bash to target
    _CopyFileToTarget /home/liveuser/user_commands.bash $target/tmp

    # copy hotfix-end.bash to target
    _CopyFileToTarget /usr/share/endeavouros/hotfix/hotfixes/hotfix-end.bash $target/tmp

    # copy 30-touchpad.conf Xorg config file
    _cleaner_msg info "copying 30-touchpad.conf to target"
    mkdir -p $target/usr/share/X11/xorg.conf.d
    cp /usr/share/X11/xorg.conf.d/30-touchpad.conf  $target/usr/share/X11/xorg.conf.d/

    # copy extra drivers from /opt/extra-drivers to target's /opt/extra-drivers
    if [ -n "$(/usr/bin/ls /opt/extra-drivers/*.zst 2>/dev/null)" ] ; then
        _cleaner_msg info "copying extra drivers to target"
        mkdir -p $target/opt/extra-drivers || _cleaner_msg warning "creating folder /opt/extra-drivers on target failed."
        cp /opt/extra-drivers/*.zst $target/opt/extra-drivers/ || _cleaner_msg warning "copying drivers to /opt/extra-drivers on target failed."
    fi
    #if [ -n "$(lsmod | grep r8168)" ] ; then
    #    _cleaner_msg info "detected usage of r8168 driver"
    #    touch $target/tmp/r8168_in_use
    #fi

    _manage_broadcom_wifi_driver

    # copy endeavouros-release file
    local file=/usr/lib/endeavouros-release
    if [ -r $file ] ; then
        if [ ! -r $target$file ] ; then
            _cleaner_msg info "copying $file to target"
            rsync -vaRI $file $target
        fi
    else
        _cleaner_msg warning "$FUNCNAME: file $file does not exist in the ISO, copy to target failed!"
    fi
}

Main() {
    _cleaner_msg info "cleaner_script.sh started."

    local ROOT_PATH="" NEW_USER=""
    local i

    # parse the options
    for i in "$@"; do
        case $i in
            --root=*)
                ROOT_PATH="${i#*=}"
                shift
                ;;
            --user=*)
                NEW_USER="${i#*=}"
                shift
                ;;
            --online)
                INSTALL_TYPE="online"
                shift
                ;;
        esac
    done

    if [ -n "$ROOT_PATH" ] ; then
        chroot_path="${ROOT_PATH#/tmp/}"
    else
        # "else" needed no more?
        if [ -f /tmp/chrootpath.txt ]
        then
            chroot_path=$(echo ${ROOT_PATH} |sed 's/\/tmp\///')
        else
            chroot_path=$(lsblk |grep "calamares-root" |awk '{ print $NF }' |sed -e 's/\/tmp\///' -e 's/\/.*$//' |tail -n1)
        fi
    fi

    if [ -z "$chroot_path" ] ; then
        _cleaner_msg "FATAL ERROR" "cleaner_script.sh: chroot_path is empty!"
        return  # no point in continuing here
    fi
    # [ -z "$NEW_USER" ] && _cleaner_msg "error" "cleaner_script.sh: new username is unknown!"

    # If the Intel X driver was installed, also install it on the target
    echo "Checking if Intel X11 driver is needed"
    if [[ $(pacman -Q xf86-video-intel 2>/dev/null) ]] ; then
		if [ -z ${INSTALL_TYPE} ] ; then
			pacman -U --noconfirm --sysroot /tmp/$chroot_path /usr/share/packages/libxvmc*.zst --asdeps
			pacman -U --noconfirm --sysroot /tmp/$chroot_path /usr/share/packages/xf86-video-intel*.zst
		else
			pacman -S --noconfirm --sysroot /tmp/$chroot_path xf86-video-intel
		fi
	fi

    # Copy any file from live environment to new system

    cp -f /etc/calamares/files/environment /tmp/$chroot_path/etc/environment
    cp -n /usr/bin/device-info /tmp/$chroot_path/usr/bin/.
    cp -n /usr/bin/eos-connection-checker /tmp/$chroot_path/usr/bin/.

    _copy_files

    _cleaner_msg info "cleaner_script.sh done."
}


Main "$@"
