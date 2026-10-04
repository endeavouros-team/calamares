# [EndeavourOS fork of Calamares Installer Framework](https://endeavouros-team.github.io/EndeavourOS-Development/)
[![Maintenance](https://img.shields.io/maintenance/yes/2026.svg)]()

<!-- SPDX-FileCopyrightText: no
     SPDX-License-Identifier: CC0-1.0
-->

# Calamares: Distribution-Independent Installer Framework
---------

[![Current issue](https://img.shields.io/badge/issue-in_progress-FE9B48)](https://codeberg.org/Calamares/calamares/issues?labels=306730)
[![Releases](https://img.shields.io/github/release/calamares/calamares.svg)](https://codeberg.org/Calamares/calamares/releases)
[![License](https://img.shields.io/badge/license-Multiple-green)](./LICENSES)


| [Report a Bug](https://codeberg.org/Calamares/calamares/issues/new) | [Translate](https://app.transifex.com/calamares/calamares/) | [Contribute](CONTRIBUTING.md) | [Chat on Matrix: #calamares:kde.org](https://matrix.to/#/#calamares:kde.org)
|:--:|:--:|:--:|:--:|


> Calamares is a distribution-independent system installer, with an advanced partitioning
> feature for both manual and automated partitioning operations. Calamares is designed to
> be customizable by distribution maintainers without the need for cumbersome patching,
> thanks to third-party branding and external modules support.

## Target Audience

Calamares is a Linux installer; users who install Linux on a computer will hopefully
use it just **once**, to install their Linux distribution. Calamares is not
a "ready to use" application: distributions apply a huge amount of customization
and configuration to Calamares, and the target audience for this repository
is those distributions, and the people who make those Linux distros.

Calamares has some [generic user documentation](https://calamares.io/docs/users-guide/)
for end-users, but most of what we have is for distro developers.

## Getting Calamares

Clone Calamares from Codeberg. The default branch is called *calamares*.

```
git clone https://codeberg.org/Calamares/calamares.git
```

Calamares is a KDE-Frameworks and Qt-based, C++17, CMake-built application.
The dependencies are explained in [CONTRIBUTING.md](CONTRIBUTING.md).

## Contributing to Calamares

Calamares welcomes PRs. New issues are welcome, too.
There are both the Calamares **core** repository (this one)
and an **extensions** repository ([Calamares extensions](https://codeberg.org/Calamares/calamares-extensions)).

Contributions to code, modules, documentation, the wiki, and the website are all welcome.
There is more information in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Join the Conversation

Issues are **one** place for discussing Calamares if there are concrete
problems or a new feature to discuss.
Issues are not a help channel.
Visit Matrix for help with configuration or compilation.

Regular Calamares development chit-chat happens in a [Matrix](https://matrix.org/)
room, `#calamares:kde.org`. Responsiveness is best during the day
in Europe, but feel free to idle.
Matrix is persistent, and we'll see your message eventually.

* [![Join us on Matrix](https://img.shields.io/badge/Matrix-%23calamares:kde.org-blue)](https://matrix.to/#/#calamares:kde.org) (needs a Matrix account)

