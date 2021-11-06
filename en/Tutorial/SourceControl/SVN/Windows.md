# Windows SVN

## Summary
 
In HBuilderX, you have to install the SVN plug-in before you can use SVN. 

The SVN plug-in calls the `external SVN command line tool`, you need to install `TortoiseSVN`。

[TortoiseSVN Download](https://tortoisesvn.net/downloads.html), double click exe file after download and then follow the instructions to complete the installation.

## Install SVN Plugin

HBuilderX Top menu, [Tool]-> [plug-in installation]. Open the plug-in installation window, Find SVN, Click [Install].

<img src="/static/snapshots/tutorial/source_control/plugin_window_en.png" style="zoom:70%" />

## SVN menu

In the project manager, select the project and right-click the menu to see the SVN related operation menu.

> Note: HBuilderX SVN plug-in calls TortoiseSVN for all SVN operation, please search TortoiseSVN manual for more details.

<img src="/static/snapshots/tutorial/source_control/svn_windows_menu.png" style="border-radius: 5px;border: 1px solid #eee;" />

## Shortcut Configuration

1. Top menu, [Tool]-->[Custom Keybindings]
2. All SVN command configurations can be seen at the bottom of the left side of the document

```
// svn update
//{"key":"","command":"ExternalCommand:SVN_UPDATE"},

// svn commit
//{"key":"","command":"ExternalCommand:SVN_COMMIT"},

//svn show log
//{"key":"","command":"ExternalCommand:SVN_LOG"},

//svn delete file
//{"key":"","command":"ExternalCommand:SVN_REMOVE"},

//svn add file
//{"key":"","command":"ExternalCommand:SVN_ADD"},

//svn revert file
//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

Select the required command and copy it to the right, configure your own shortcut keys

Example：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```
