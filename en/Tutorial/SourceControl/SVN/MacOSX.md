# MacOSX SVN

In HBuilderX, you have to install the SVN plug-in before you can use SVN.

The SVN plug-in calls the `external SVN command line tool`, you need to install SVN command tool.

## SVN Command line tool

Open `Operating System Terminal` and enter the following command. If brew is not installed, please install it first [Homebrew](https://brew.sh/index_zh-cn)

```
brew install subversion

# check svn installed or not
which svn
```

## Install SVB Plugin

HBuilderX Top menu, [Tool]-> [plug-in installation]. Open the plug-in installation window, Find SVN, Click [Install].

<img src="/static/snapshots/tutorial/source_control/plugin_macosx_en.png" style="zoom:40%; border-radius: 20px;border: 1px solid #eee;" />

## SVN menu

In the project manager, select the project and right-click the menu to see the SVN related operation menu. 

<img src="/static/snapshots/tutorial/source_control/svn_macosx_menu_en.png" style="zoom:50%;border-radius: 5px;border: 1px solid #eee;" />

## Commit

1. On the file, directory, or project to be submitted, right-click the menu and click [SVN Submit]
2. In the SVN window, enter the Message, and click the [SVN Submit] button.

<img src="/static/snapshots/tutorial/source_control/svn_macosx_ci_en.jpg" style="zoom:45%; border: 1px solid #eee;" />

## Show Log

Select the project, right-click the menu,  【SVN】->【Log】

<img src="/static/snapshots/tutorial/source_control/svn_macosx_log_en.jpg" style="zoom:40%; border: 1px solid #eee;border-radius: 20px;" />

## Shortcut Configuration

1. Top menu, 【Tool】-->【Custom Keybindings】
2. All SVN command configurations can be seen at the bottom of the left side of the document

```
//svn update
//{"key":"","command":"ExternalCommand:SVN_UPDATE"},

//svn add file
//{"key":"","command":"ExternalCommand:SVN_ADD"},

//svn delte file
//{"key":"","command":"ExternalCommand:SVN_REMOVE"},

//svn revert
//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

Select the required command and copy it to the right, configure your own shortcut keys

Example：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```
