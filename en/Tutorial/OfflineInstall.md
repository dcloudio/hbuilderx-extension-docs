# Offline installation

## windows

1. Open Resource Manager and go to the HBuilderX installation directory
2. Go to the 'plugins' directory
3. Put the plug-in folder in this directory. (If it is a ZIP package, decompress it)
4. Restart the HBuilderX editor

## Mac

1. Open the system terminal and run the following command to open the HBuilderX plug-in directory (note: on MAC, the official version is different from the alpha directory).
2. Put the plugins folder, such as the zip package, into the 'plugins' directory
3. Restart the HBuilderX editor

Release:
```shell
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/
```

Alpha: 
```shell
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

## `Notes`

If 'node_modules' is not available in the plug-in, you need to manually run' NPM install '