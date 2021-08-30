# Uninstall

## Windows uninstall

1. Delete the data directory and registry, enter the HBuilderX installation directory, find `reset.bat`, and click Run. This operation can delete the HBuilderX data directory and registry.
2. Delete the program directory. Windows and HBuilderX installation package is a zip package, just delete the unzipped folder directly.
3. If there is a shortcut to HBuilderX on the desktop, just delete the shortcut on the desktop

## MacOSX uninstall

#### 1. Delete application

> As shown below. MacOSX, open `Finder`, click `Applications` on the left, enter the application window, find HBuilderX, right-click the menu, and click `Move to Trash`

<img src="/static/snapshots/mac_uninstall_en.png" style="zoom: 50%; border:1px solid #eee; border-radius: 20px;" />

#### 2. Delete data directory

Open the operating system terminal and enter the following command

```
open $HOME/Library/Application\ Support/
```

The `Finder` will open at this time, in the Finder window, find the `HBuilderX` directory, right-click the menu, and click Delete.
