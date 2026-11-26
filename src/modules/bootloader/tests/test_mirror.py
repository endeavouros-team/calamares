# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path
from types import ModuleType, SimpleNamespace
from unittest.mock import patch


class Storage(dict):
    value = dict.get


utils = ModuleType("libcalamares.utils")
utils.gettext_path = lambda: None
utils.gettext_languages = lambda: []
utils.check_target_env_call = None
utils.check_target_env_output = None
api = SimpleNamespace(utils=utils, globalstorage=Storage(), job=SimpleNamespace(
    configuration={"grubInstall": "grub-install", "efiBootloaderId": "endeavouros"}))
spec = importlib.util.spec_from_file_location("bootloader", Path(__file__).resolve().parents[1] / "main.py")
module = importlib.util.module_from_spec(spec)
with patch.dict(sys.modules, {"libcalamares": api, "libcalamares.utils": utils}):
    spec.loader.exec_module(module)


class GrubMirrorTest(unittest.TestCase):
    def test_bios_reinstalls_to_each_disk_without_force(self):
        with patch.object(module, "check_target_env_call") as call:
            module.install_grub_mirror({"disks": ["/dev/sda", "/dev/sdb"]}, "bios")
        self.assertEqual([args.args[0][-1] for args in call.call_args_list], ["/dev/sda", "/dev/sdb"])
        self.assertTrue(all("--target=i386-pc" in args.args[0] and "--force" not in args.args[0]
                            for args in call.call_args_list))

    def test_efi_creates_an_install_and_fallback_per_mounted_esp(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            api.globalstorage["rootMountPoint"] = directory

            def install(args):
                esp = next(arg.split("=", 1)[1] for arg in args if arg.startswith("--efi-directory="))
                label = next(arg.split("=", 1)[1] for arg in args if arg.startswith("--bootloader-id="))
                binary = root / esp.lstrip("/") / "efi" / label / "grubx64.efi"
                binary.parent.mkdir(parents=True)
                binary.write_bytes(esp.encode())

            with patch.object(module.os.path, "ismount", return_value=True), \
                    patch.object(module, "get_grub_efi_parameters", return_value=("x86_64-efi", "grubx64.efi", "BOOTX64.EFI")), \
                    patch.object(module, "check_target_env_call", side_effect=install):
                module.install_grub_mirror({"esps": ["/efi", "/efi-raid2"]}, "efi")
            for esp in ("efi", "efi-raid2"):
                self.assertEqual((root / esp / "efi/BOOT/BOOTX64.EFI").read_bytes(), ("/" + esp).encode())

    def test_efi_never_writes_to_an_unmounted_esp(self):
        api.globalstorage["rootMountPoint"] = "/target"
        with patch.object(module.os.path, "ismount", return_value=False), \
                patch.object(module, "get_grub_efi_parameters", return_value=("x86_64-efi", "grubx64.efi", "BOOTX64.EFI")), \
                patch.object(module, "check_target_env_call") as call:
            with self.assertRaisesRegex(ValueError, "not mounted"):
                module.install_grub_mirror({"esps": ["/efi"]}, "efi")
        call.assert_not_called()


if __name__ == "__main__":
    unittest.main()
