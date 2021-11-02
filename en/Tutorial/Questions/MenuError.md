# Menu Problems

### Problem

The menu displays %xxx% after some users upgrade to latest HBuilderX.

<img src="/static/snapshots/other/menu_error.png" class="hd-img" />

### Method 1: Remove configuration file

#### MacOSX

1. Enter `$HOME/Library/Application\ Support/HBuilder\ X` directory through the terminal command，remove `prefs` file.
2. Remove `$HOME/Library/Caches/HBuilder\ X` directory through the terminal command.

Please note: On mac, if the path contains `spaces`, it needs to be escaped by `\`

#### Windows

1. Enter `%appdata%` in the address bar of Windows resource manager, find `HBuilder X` directory. Delete `prefs` file from `HBuilder X` directory.
2. If he the problem still exists, then enter `%localAppdata%` in the address bar of Windows resource manager and delete `HBuilder X` directory.

### Method 2：Re-install

Open [HBuilderX Official Website](https://www.dcloud.io/hbuilderx.html)，download and re-install again。
