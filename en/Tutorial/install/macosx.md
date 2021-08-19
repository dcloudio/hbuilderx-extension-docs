# MacOSX 

## DownLoad

HBuilderX Download URL:  [Download](https://www.dcloud.io/hbuilderx.html)

## Install

Drag and drop the HBuilderX application to the Application folder.

<img src="/static/snapshots/tutorial/install_mac.jpeg" />

> MacOSX, Must be installed in the /Applications directory. 
> 
> If the installation directory is wrong, May cause the extension installation to fail, or Failed to create project.


## Question

In some cases, MacOSX HBuilderX Unable to start, Solution:

- Restart the computer
- Delete the .lock file in the $HOME/Library/Application\ Support/HBuilder\ X/ [Details](/Tutorial/install/macosx?id=del-.lock-file)
- reset HBuilderX config file。[Details](/Tutorial/install/macosx?id=reset-config-file)

### del .lock file

Open the operating system terminal，input the command： 

```
rm -f $HOME/Library/Application\ Support/HBuilder\ X/.lock
```

If deleting the .lock file does not solve the startup problem, try deleting the configuration file directory.

### reset config file

Configuration file directory：`$HOME/Library/Application\ Support/HBuilder\ X`

```shell
# Backup configuration file
cp -rf $HOME/Library/Application\ Support/HBuilder\ X   $HOME/Desktop/HX

# delete Configuration file directory
rm -rf $HOME/Library/Application\ Support/HBuilder\ X
```