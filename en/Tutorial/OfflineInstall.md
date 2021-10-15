# Install plugins offline

## windows

1. Open Resource Manager and find the HBuilderX installation directory
2. Open the 'plugins' directory of HBuilderX
3. Copy/paste the downloaded HBuilderX plugins to the current directory. (Decompress the archive file if it is a ZIP package)
4. Restart the HBuilderX editor

## Mac

1. Open the system terminal and run the following command to open the HBuilderX plugins directory (note: On MAC, The official version and the alpha version have different directories).
2. Copy/paste the downloaded HBuilderX plugins to the current directory. (Decompress the archive file if it is a ZIP package)
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

If "node_modules" does not exist in the plugin, you have to manually run "NPM install".
