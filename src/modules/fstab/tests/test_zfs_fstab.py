# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch


class Storage(dict):
    value = dict.get


api = SimpleNamespace(globalstorage=Storage(), job=SimpleNamespace(configuration={}),
                      utils=SimpleNamespace(gettext_path=lambda: None, gettext_languages=lambda: []))
spec = importlib.util.spec_from_file_location("fstab", Path(__file__).resolve().parents[1] / "main.py")
module = importlib.util.module_from_spec(spec)
with patch.dict(sys.modules, libcalamares=api):
    spec.loader.exec_module(module)


class ZfsFstabTest(unittest.TestCase):
    def setUp(self):
        api.globalstorage.clear()
        self.swap = dict(device="/dev/vda2", fs="linuxswap", mountPoint="", claimed=True, uuid="inner",
                         luksUuid="outer", luksMapperName="swap")
        self.root = dict(device="/dev/vda1", fs="zfs", mountPoint="/", claimed=True, uuid="")

    def test_encrypted_swap_with_plain_or_natively_encrypted_zfs_root(self):
        with tempfile.TemporaryDirectory() as target:
            module.FstabGenerator([self.root, self.swap], target, [], "luks", {}).run()
            etc = Path(target) / "etc"
            self.assertEqual((etc / "crypttab").read_text().splitlines()[-1].split(),
                             ["swap", "UUID=outer", "none", "luks"])
            self.assertEqual((etc / "fstab").read_text().splitlines()[-1].split(),
                             ["/dev/mapper/swap", "swap", "swap", "defaults", "0", "0"])

    def test_foreign_encrypted_swap_is_not_claimed(self):
        self.swap["claimed"] = False
        generator = module.FstabGenerator([self.root, self.swap], "/unused", [], "luks", {})
        self.assertIsNone(generator.generate_crypttab_line_info(self.swap))

    def test_swapfile_rejected_before_any_files_are_written(self):
        api.globalstorage.update(partitions=[self.root], rootMountPoint="/unused", partitionChoices={"swap": "file"})
        self.assertIn("ZFS does not support swap files", module.run()[1])

    def test_separate_boot_pool_mount_is_ordered_after_import(self):
        api.globalstorage["zfsPoolInfo"] = [dict(mountpoint="/boot", poolName="bpool", dsName="boot", legacy=True)]
        boot = dict(self.root, device="/dev/vda3", mountPoint="/boot")
        with tempfile.TemporaryDirectory() as target:
            module.FstabGenerator([self.root, boot], target, [], "luks", {}).run()
            self.assertEqual((Path(target) / "etc/fstab").read_text().splitlines()[-1].split(),
                             ["bpool/boot", "/boot", "zfs", "defaults,x-systemd.requires=zfs-import.target", "0", "0"])


if __name__ == "__main__":
    unittest.main()
