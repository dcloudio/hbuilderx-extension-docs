# MacOSX 

## DownLoad

HBuilderX Download URL:  [Download](https://www.dcloud.io/hbuilderx.html)

## Install

Drag and drop the HBuilderX app to the Applications folder.

<img src="/static/snapshots/tutorial/install_mac.jpeg" />

> The HBuilder application should be installed in the /Applications directory on MacOSX to avoid problems such as extension installation failure and project creation failure.
> 
Please jump to `System Perference -> Security & Privacy`, allow to use HBuilderX.app.


## Question

In some cases, MacOSX HBuilderX Unable to start up, Please try the following solutions:

- Restart the computer
- Delete the .lock file in the $HOME/Library/Application\ Support/HBuilder\ X/ [Details](/Tutorial/install/macosx?id=del-.lock-file)
- Reset HBuilderX configuration file。[Details](/Tutorial/install/macosx?id=reset-config-file)

### del .lock file

Open `Terminal`，input the command： 

```
rm -f $HOME/Library/Application\ Support/HBuilder\ X/.lock
```
If HBuilderX still fails to startup after deleting the .lock file, please remove the configuration folder.

### reset configuration file

> Please backup before remove any files.
> 

Configuration file directory：`$HOME/Library/Application\ Support/HBuilder\ X`

Note: On Mac, please add \ to escape if the path contains spaces.

```shell
# Backup configuration file
cp -rf $HOME/Library/Application\ Support/HBuilder\ X   $HOME/Desktop/HX

# Remove configuration file directory
rm -rf $HOME/Library/Application\ Support/HBuilder\ X
```
