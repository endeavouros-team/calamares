/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

Item {
    Rectangle {
        anchors.fill: parent
        color: "#2a2e32"

        ButtonGroup {
            id: switchGroup
        }

        Loader {
            anchors.centerIn: parent
            source: Global.value("firmwareType") === "efi" ? "UEFI.qml" : "BIOS.qml"
        }
    }

}
