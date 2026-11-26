# SPDX-FileCopyrightText: no
# SPDX-License-Identifier: GPL-3.0-or-later

import importlib.util
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock, patch


class Storage(dict):
    value = dict.get
    insert = dict.__setitem__


api = SimpleNamespace(globalstorage=Storage(), job=SimpleNamespace(configuration={}),
                      utils=SimpleNamespace(gettext_path=lambda: None, gettext_languages=lambda: [],
                                            target_env_process_output=Mock()))
spec = importlib.util.spec_from_file_location("eos_zfs", Path(__file__).resolve().parents[1] / "main.py")
module = importlib.util.module_from_spec(spec)
with patch.dict(sys.modules, libcalamares=api):
    spec.loader.exec_module(module)


class EosZfsTest(unittest.TestCase):
    def setUp(self):
        api.globalstorage.clear()
        api.globalstorage.update(partitions=[dict(fs="zfs", mountPoint="/")])
        api.job.configuration = {}
        api.utils.target_env_process_output.reset_mock()

    @patch.object(module.subprocess, "run")
    def test_live_requires_grub_before_touching_live_kernel(self, run):
        api.globalstorage["packagechooser_packagechooserq"] = "systemd-boot"
        self.assertIn("requires GRUB", module.run()[1])
        run.assert_not_called()

    @patch.object(module.subprocess, "run")
    def test_live_checks_zfs_linux_before_partition_data_exists(self, run):
        api.globalstorage["packagechooser_packagechooserq"] = "grub"
        del api.globalstorage["partitions"]
        run.return_value.stdout = "zfs-utils 2.4.4-1\n"
        with patch.object(module.Path, "is_file", return_value=True), patch.object(module, "probe", return_value="2.4.4-1"):
            self.assertIsNone(module.run())
        self.assertEqual([item.args[0][0] for item in run.call_args_list], ["modprobe", "zpool", "pacman"])
        self.assertIn("zfs-linux", run.call_args_list[-1].args[0])

    def configure(self, version):
        with tempfile.TemporaryDirectory() as target:
            root = Path(target)
            kernels = root / "usr/lib/modules/test-kernel"
            kernels.mkdir(parents=True)
            (kernels / "vmlinuz").touch()
            api.globalstorage["rootMountPoint"] = target
            api.job.configuration = {"operation": "configureTarget"}
            with patch.object(module.subprocess, "run", return_value=subprocess.CompletedProcess([], 0, stdout=version)), \
                    patch.object(module, "write_pool_cache"):
                result = module.run()
            config = root / "etc/dracut.conf.d/calamares-zfs.conf"
            return result, config.read_text() if config.exists() else None

    def test_target_uses_exact_kernel_release(self):
        result, config = self.configure("test-kernel SMP preempt")
        self.assertIsNone(result)
        self.assertIn('add_dracutmodules+=" zfs "', config)
        api.utils.target_env_process_output.assert_called_once()

    def test_target_rejects_mismatched_kernel(self):
        result, config = self.configure("unmatched-kernel SMP preempt")
        self.assertIn("does not match installed kernel", result[1])
        self.assertIsNone(config)
        api.utils.target_env_process_output.assert_not_called()

    def test_cache_contains_only_imports_owned_by_install(self):
        def zpool_set(args, **_kwargs):
            property_name, path = args[2].split("=", 1)
            self.assertEqual(property_name, "cachefile")
            if path != "none":
                with Path(path).open("a", encoding="utf-8") as cache:
                    cache.write(args[3] + "\n")

        with tempfile.TemporaryDirectory() as target, patch.object(module.subprocess, "run", side_effect=zpool_set) as run:
            module.write_pool_cache(Path(target), ["eosroot", "eosboot"])
            cache = (Path(target) / "etc/zfs/zpool.cache").read_text()
            self.assertEqual(cache.splitlines(), ["eosroot", "eosboot"])
            self.assertEqual([c.args[0][2] for c in run.call_args_list[-2:]], ["cachefile=none", "cachefile=none"])

    def test_resume_rejects_zvol_and_accepts_installer_swap_raid(self):
        uuid = "12345678-1234-1234-1234-123456789abc"
        api.globalstorage["partitions"].append(dict(fs="linuxswap", claimed=True, luksUuid=uuid,
                                                   luksMapperName="luks-" + uuid, device="/dev/vda2"))
        with patch.object(module, "probe", return_value="disk"):
            with self.assertRaisesRegex(ValueError, "dedicated partition"):
                module.prepare_resume(api.globalstorage)
        swap = api.globalstorage["partitions"][-1]
        swap["device"] = "/dev/md/swap"
        api.globalstorage["blockDevicesSwapArray"] = {"device": swap["device"]}
        with patch.object(module, "probe", side_effect=["raid1", uuid, "swap", str(1 << 40)]):
            module.prepare_resume(api.globalstorage)
        self.assertEqual(api.globalstorage["zfsResume"]["uuid"], uuid)

    def test_single_swap_partition_on_one_boot_mirror_disk_is_not_redundant(self):
        uuid = "12345678-1234-1234-1234-123456789abc"
        api.globalstorage["partitions"].append(dict(fs="linuxswap", claimed=True, luksUuid=uuid,
                                                   luksMapperName="luks-" + uuid, device="/dev/vda3"))
        api.globalstorage["blockDevicesBoot"] = {"disks": ["/dev/vda", "/dev/vdb"]}
        with patch.object(module, "probe", return_value="/dev/vda"):
            with self.assertRaisesRegex(ValueError, "Use --raid-swap"):
                module.prepare_resume(api.globalstorage)

    def test_resume_requires_swap_before_either_zfs_import_service(self):
        with tempfile.TemporaryDirectory() as target:
            root = Path(target)
            config = module.configure_resume(root, {"device": "/dev/mapper/luks-test", "uuid": "test"})
            self.assertIn('force_add_dracutmodules+=" calamares-zfs-resume "', config)
            self.assertIn('/dev/disk/by-uuid/test', config)
            path = root / "usr/lib/dracut/modules.d/91calamares-zfs-resume"
            setup = (path / "module-setup.sh").read_text()
            for value in ("/etc/crypttab", "zfs-import-cache zfs-import-scan", "systemd crypt resume zfs"):
                self.assertIn(value, setup)
            self.assertFalse((root / "etc/systemd/system").exists())
            for directive in ("Requires", "After"):
                self.assertIn(f"{directive}=systemd-hibernate-resume.service", (path / "guard.service").read_text())
            self.assertIn("noresume", (path / "guard.service").read_text())

    def test_refresh_installs_to_each_esp_before_touching_fallback(self):
        with tempfile.TemporaryDirectory() as target:
            root = Path(target)
            module.configure_grub_refresh(root, {"esps": ["/efi", "/efi-raid2"]})
            script = root / "usr/local/sbin/eos-refresh-grub-mirror"
            self.assertTrue(script.stat().st_mode & 0o111)
            subprocess.run(["bash", "-n", str(script)], check=True)
            self.assertIn('for esp in /efi /efi-raid2', script.read_text())
            self.assertIn('--no-nvram', script.read_text())


if __name__ == "__main__":
    unittest.main()
