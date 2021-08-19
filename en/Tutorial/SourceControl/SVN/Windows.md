# Windows SVN

## Introduce

In HBuilderX, to use SVN, you need to install the SVN plug-in first. 

The SVN plug-in calls the `external SVN command line tool`, So need to install`TortoiseSVN`。

[TortoiseSVN Download](https://tortoisesvn.net/downloads.html)

## Plug-in Install

HBuilderX Top menu, 【Tool】-> 【plug-in installation】. Open the plug-in installation window, Find SVN, Click【Install】.

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## Operation menu

Project manager, select the project, right-click the menu, you can see the SVN related operation menu.

> 备注：HBuilderX SVN插件，都是调用TortoiseSVN，因此本文不再详细描述TortoiseSVN操作教程。

<img src="/static/snapshots/tutorial/source_control/svn_windows_menu.png" style="border-radius: 5px;border: 1px solid #eee;" />

## Shortcut key configuration

1. toop menu, 【tool】-->【custom keybindings】
2. All SVN command configurations can be seen at the bottom of the left side of the document

```
// svn update//{"key":"","command":"ExternalCommand:SVN_UPDATE"},
// svn commit//{"key":"","command":"ExternalCommand:SVN_COMMIT"},
//svn show log//{"key":"","command":"ExternalCommand:SVN_LOG"},
//svn delete file//{"key":"","command":"ExternalCommand:SVN_REMOVE"},
//svn add file//{"key":"","command":"ExternalCommand:SVN_ADD"},
//svn revert file//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

Select the required command and copy it to the right, configure your own shortcut keys

Example：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```