#   SPDX-FileCopyrightText: no
#   SPDX-License-Identifier: CC0-1.0
#
# Calamares Boilerplate
import libcalamares
libcalamares.globalstorage = libcalamares.GlobalStorage(None)
libcalamares.globalstorage.insert("testing", True)

# Module prep-work
from src.modules.displaymanager import main
default_desktop_environment = main.DesktopEnvironment("startplasma-x11", "kde-plasma.desktop")

# Specific DM test
d = main.DMlightdm("/tmp")
d.find_preferred_greeter()
