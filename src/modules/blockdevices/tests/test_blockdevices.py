# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import importlib.util
import stat
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch


class Storage(dict):
    value = dict.get
    insert = dict.__setitem__


api = SimpleNamespace(globalstorage=Storage(),
                      utils=SimpleNamespace(gettext_path=lambda: None, gettext_languages=lambda: []))
source = Path(__file__).resolve().parents[1] / "main.py"
spec = importlib.util.spec_from_file_location("blockdevices", source)
module = importlib.util.module_from_spec(spec)
with patch.dict(sys.modules, libcalamares=api):
    spec.loader.exec_module(module)


class BlockDevicesTest(unittest.TestCase):
    def setUp(self):
        api.globalstorage.clear()
        api.globalstorage["partitions"] = [
            dict(device="/dev/vda2", partuuid="sample", mountPoint="/", fs="zfs", claimed=True),
            dict(device="/dev/vdb1", mountPoint="", fs="unformatted", claimed=True, raidMember=True),
            dict(device="/dev/vdc1", mountPoint="", fs="unformatted", claimed=False, raidMember=True),
        ]
        api.globalstorage["zfsInfo"] = [dict(mountpoint="/", encrypted=True, passphrase="test passphrase")]
        self.config = dict(raid1=dict(name="root-mirror", writeMostly=True),
                           lvm=dict(volumeGroup="system", logicalVolume="root", sizeMiB=4096), encryption="luks")
        self.requests = []
        self.failure = None

    def command(self, args, secret=None):
        self.requests.append((args, secret))
        if args[0] == self.failure:
            raise module.StorageError("test failure")
        if args[:2] == ["mdadm", "--detail"]:
            return "MD_UUID=01234567:89abcdef:01234567:89abcdef"
        if args[:2] == ["cryptsetup", "luksUUID"]:
            return "12345678-1234-1234-1234-123456789abc"
        return ""

    def create(self, devices=None):
        with patch.object(module, "command", self.command), \
                patch.object(module, "check_unused", side_effect=devices or ["vda", "vdb"]), \
                patch.object(module.os, "stat", return_value=SimpleNamespace(st_mode=stat.S_IFBLK)), \
                patch.object(module.os.path, "lexists", return_value=False), \
                patch.object(module.shutil, "which", return_value="tool"):
            module.create(self.config)

    def test_full_stack(self):
        self.create()
        commands = [args for args, _ in self.requests if args[0] != "udevadm"]
        self.assertEqual([args[0] for args in commands],
                         ["mdadm", "mdadm", "vgcreate", "lvcreate", "cryptsetup", "cryptsetup", "cryptsetup"])
        self.assertEqual(commands[0][-3:], ["/dev/vda2", "--write-mostly", "/dev/vdb1"])
        self.assertIn("--bitmap=internal", commands[0])
        self.assertIn("4096M", commands[3])
        self.assertEqual([args for args, secret in self.requests if secret], commands[4:6])
        self.assertNotIn("test passphrase", repr(commands))
        root = api.globalstorage["partitions"][0]
        self.assertEqual(root["device"], "/dev/system/root")
        self.assertEqual(root["luksMapperName"], "calamares-zfs-root")
        self.assertEqual(api.globalstorage["zfsInfo"], [])
        self.requests.clear()
        with patch.object(module, "command", self.command):
            module.deactivate()
        self.assertEqual([args[0] for args, _ in self.requests], ["cryptsetup", "vgchange", "mdadm"])
        self.assertEqual(api.globalstorage[module.JOURNAL], [])

    def test_rejects_raid_members_on_same_disk(self):
        with self.assertRaisesRegex(module.StorageError, "different disks"):
            self.create(["vda", "vda"])
        self.assertEqual([args[0] for args, _ in self.requests], ["udevadm"])

    def test_failed_lv_keeps_cleanup_for_earlier_layers(self):
        self.failure = "lvcreate"
        with self.assertRaises(module.StorageError):
            self.create()
        self.assertEqual([cmd[0] for cmd in api.globalstorage[module.JOURNAL]], ["mdadm", "vgchange"])
        self.assertNotIn("luksMapperName", api.globalstorage["partitions"][0])

    def test_dracut_config_contains_only_installer_array(self):
        self.create()
        with tempfile.TemporaryDirectory() as target:
            etc = Path(target) / "etc"
            etc.mkdir()
            api.globalstorage["rootMountPoint"] = target
            module.configure("dracut")
            self.assertIn("ARRAY /dev/md/root-mirror UUID=", (etc / "mdadm.conf").read_text())
            text = (etc / "dracut.conf.d/calamares-blockdevices.conf").read_text()
            for parameter in ("mdraid lvm crypt", "rd.lvm.lv=system/root", "rd.md.uuid=", "rd.luks.uuid="):
                self.assertIn(parameter, text)


if __name__ == "__main__":
    unittest.main()
