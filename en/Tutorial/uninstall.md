# Uninstall

## Uninstall HBuilderX on Windows

1. Delete the data directory and registry. Enter the HBuilderX installation directory, find `reset.bat` and click it to run. This operation will delete the HBuilderX data directory and registry.
2. Delete the program directory. HBuilderX installation package is a zip package, just delete the unzipped folder directly.
3. If there is a HBuilderX shortcut on the desktop, just delete it.

## Uninstall HBuilderX on MacOSX

#### 1. Delete application

> As shown below. Open `Finder`, click `Applications` on the left, enter the application list, find HBuilderX, right-click the menu, and click `Move to Trash`

<img src="/static/snapshots/mac_uninstall_en.png" style="zoom: 50%; border:1px solid #eee; border-radius: 20px;" />

#### 2. Delete data directory

Open the operating system terminal and enter the following command

```
open $HOME/Library/Application\ Support/
```

In opened finder window, find the `HBuilderX` directory, right-click the menu, and click "Move to Bin".
