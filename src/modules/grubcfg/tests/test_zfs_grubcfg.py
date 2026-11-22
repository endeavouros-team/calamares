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
                      utils=SimpleNamespace(gettext_path=lambda: None, gettext_languages=lambda: [],
                                            target_env_call=lambda args: 0 if "which dracut" in args else 1))
spec = importlib.util.spec_from_file_location("grubcfg", Path(__file__).resolve().parents[1] / "main.py")
module = importlib.util.module_from_spec(spec)
with patch.dict(sys.modules, libcalamares=api):
    spec.loader.exec_module(module)


class ZfsGrubCfgTest(unittest.TestCase):
    def test_layered_root_keeps_dataset_and_not_swap_resume(self):
        api.globalstorage.update(
            zfsDatasets=[dict(mountpoint="/", zpool="eosroot", dsName="ROOT/os")],
            blockDevicesArray=dict(uuid="md-uuid"), blockDevicesVolume="vg/root")
        partitions = [dict(fs="zfs", mountPoint="/", luksUuid="root-uuid", luksMapperName="luks-root-uuid"),
                      dict(fs="zfs", mountPoint="/boot"),
                      dict(fs="linuxswap", mountPoint="", claimed=True, luksUuid="swap-uuid", luksMapperName="swap")]
        with tempfile.TemporaryDirectory() as target:
            (Path(target) / "etc").mkdir()
            module.modify_grub_default(partitions, target, "Calamares")
            text = (Path(target) / "etc/default/grub").read_text()
        for value in ("root=ZFS=eosroot/ROOT/os", "rd.luks.uuid=root-uuid", "rd.md.uuid=md-uuid",
                      "rd.lvm.lv=vg/root", "GRUB_SAVEDEFAULT=false"):
            self.assertIn(value, text)
        for value in ("resume=", "swap-uuid", "root=/dev/mapper", "GRUB_ENABLE_CRYPTODISK"):
            self.assertNotIn(value, text)


if __name__ == "__main__":
    unittest.main()
