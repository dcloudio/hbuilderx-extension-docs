>  HBuilderX is the perfect combination of a lightweight editor and a powerful IDE. Agile performance, outstanding UI and powerful functions are all in one.

**This document is recommended for beginners**

#### 1. Summary

1. In `Project Explorer`, you can quickly open files/projects with single-clicking which is more efficient than double-clicking.
2. Expand the directory or preview file with single-clicking. Open a file with double-clicking.
3. When the file is in preview mode, the text on the top tab is italicized. Double-click a file or edit a file, the file will be in edit mode, and the text on the top tab will become normal.
<img src="/static/snapshots/started_tutorial/overview.png" style="zoom: 90%;"/>
4. By default, the project explorer does not display icons, but you can choose `Icon Theme` by clicking the floating menu in the upper right corner. HBuilderX supports a variety of icon theme and you can install more icon themes through "[Tool] [Plug-in Installation]".
5. HBuilderX supports hot exit feature. Hot Exit enables HBuilderX to exit immediately without prompting, preserving your changes and unsaved files for the next time you run. 
6. HBuilderX has a default behavior of saving temporary files every `30 seconds`（You can adjust the time interval in the settings）
7. Automatically save temporary files to ensure data security, whether it is shutdown, power failure, or crash.
8. The automatic saving of HBuilderX can save system resources, because ctrl+s (save file) or ctrl+alt+s (save all files) may trigger the compilation of pre-compiled programming languages.

#### 2. Syntax tips

HBuilderX stands out because it has its own world-class syntax analysis engine. You can easily load different javascript syntax libraries by clicking "Javascript library" in the bottom right corner of HBuilderX.

<img src="/static/snapshots/started_tutorial/select-syntax-hints.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**note**：

1. The syntax library is associated with the project. If a javascript library is loaded in a project, then all js and html files in this project can call this javascript library.
2. The syntax library cannot be loaded for a separately opened file.

#### 3. Code assistant


Code assistant of HBuilderX supports to select an item by `alt+number`.

<img src="/static/snapshots/started_tutorial/code-help.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

#### 4. Syntax guide


Place the cursor on an API and press `F1` to open the official manual of this API. Currently supports Vue, uni-app, 5+ apps, etc.

> In prior to version 2.5.7, press F1 and open the manual in build-in browser. Starting from 2.5.7.20200116-alpha+, press F1 to open the help through an external browser. 

<img src="/static/snapshots/started_tutorial/code-help-doc.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 5. Sync of editor and project explorer


By default, HBuilderX automatically associates the opened tab with the project explorer. When you switch tabs, the project explorer will also change. If you don't need this feature, you can cancel "Sync with Editor" via the floating menu in the upper right corner.

<img src="/static/snapshots/started_tutorial/sync.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

When there are multiple projects in the project explorer, it is recommended to cancel the synchronization function.

After canceling the synchronization, if you need to manually locate the project where the label card is located, you can right-click the editor-"locate in project explorer".

<img src="/static/snapshots/started_tutorial/project-manager-position.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 6. Multi-cursor


HBuilderX supports multiple cursors, press `ctrl+left mouse button` to add a cursor, and `ctrl+right mouse button` to cancel a cursor or selection.

<img src="/static/snapshots/started_tutorial/more-cursor.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

You can also select the same word. `ctrl+e` (mac is `cmd+d`) can select the same words for batch processing.

<img src="/static/snapshots/started_tutorial/select-same-word.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 7. Column selection


The column selection of hx is `alt+mouse drag selection`. Or use the shortcut key `ctrl+alt+↑` or `↓`

<img src="/static/snapshots/started_tutorial/select-column.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 8. Change file encoding、Code Color highlight

When you open an unknown document, hx cannot be highlighted and colored, you can choose to open it with other editors in the lower right corner.

When you open a file with garbled encoding, you can also select the encoding in the lower right corner to reopen it.

<img src="/static/snapshots/started_tutorial/select-encoding.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 9. Goto definition

Goto definition is an important part of what makes an editor useful.

HBuilderX has a powerful syntax analysis engine that can accurately jump to the defined position.

The shortcut key to go to the definition is Alt+D, and the mouse operation is Alt+left click.

<img src="/static/snapshots/started_tutorial/3b6a921a9021ffa5ed54e7633afb7fd0.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

Another feature of HBuilderX is `Goto definition to column`, `ctrl+alt+left mouse button`, you can open definition of codes on the other side, which is convenient for general viewing.

<img src="/static/snapshots/started_tutorial/c75ed6bdd5b6c5a9b8c827b2ee1262a9.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


**How to go back to the previous cursor position？**

In HBuilderX, `Alt+Left` or click `<` on the toolbar to return to the previous cursor position.


Note: Support switching [Ctrl+left mouse button] or [Alt+left mouse button] to goto definition (menu [select], the last menu).

<img src="/static/snapshots/started_tutorial/f20f178f0559eebc71106d00c7b4117a.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
 
#### 10. Quick open files

Use the search bar on the top toolbar to search and open the file, or use the shortcut key `ctrl+p`

<img src="/static/snapshots/started_tutorial/file_quick_open.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

You can add more frequently used files to favorites in the toolbar.

<img src="/static/snapshots/started_tutorial/add-to-favorites-en.png" style="zoom: 45%;border:1px solid #eee;border-radius: 15px;" />

`ctrl+p` is also an important tool for tag card management. When the screen is narrow and you cannot see the left and right tabs, you can use it to browse all opened tabs.

#### 11. Search in the directory


Right click on the project explorer, menu [Character search], Search for strings in all files in this directory.

<img src="/static/snapshots/started_tutorial/search-dir.gif" style="zoom: 75%;border:1px solid #eee;border-radius: 5px;" />



#### 12. Indent adjustment

In HBuilderX, Tab indentation is used by default, and the tab size is 4 spaces.

If you need to chnage the tab size, Adjust in [Tools-Settings].

<img src="/static/snapshots/started_tutorial/ident_en.png" style="zoom: 45%;border:1px solid #eee;border-radius: 5px;" />

If you don't like to use tabs and prefer to use spaces, you can also adjust them in the settings. Note that this adjustment is only converted to a space when the tab button is pressed in the editor, and it is still tab when formatted.

To adjust the formatting settings, refer to the menu tool -> plug-in configuration. hx supports several formatting plug-ins, and they all have their own configuration files. Please modify the settings according to the instructions in the plug-in configuration.

<img src="/static/snapshots/started_tutorial/plugins-code-format.jpg" style="zoom: 80%;border:1px solid #eee;border-radius: 5px;" />


In the menu edit-indent, the indentation of the file can be changed from `tab` to `space` or from `space` to `tab`.


#### 13. Syntax check

HBuilderX, Syntax check needs to install a plug-in. Different languages have different verification plug-ins。After installing the verification plug-in, syntax verification will be performed automatically when saving the file.

[Syntax Check](/Tutorial/UserGuide/SyntaxCheck)


The summary result of the verification will be displayed in the status bar. 

For example, if there are two errors , you can press `F4` to switch to different errors. A red wavy line is drawn. When the mouse moves over the red wavy line, a specific error message will be displayed.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


Directly click the menu tool-verify the verification syntax of this document to verify.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-en.png" style="zoom: 40%;border:1px solid #eee;border-radius: 5px;" />



#### 15. svn/git import

Take git as an example: (git project: need to install the git plugin, TortoiseGit, and configure the ssh key)

<img src="/static/snapshots/started_tutorial/project-svn-git-import.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

|Plug-in name	| MacOSX	|Windows	|
|--	|--	|--	|
|svn	|[Mac SVN Tutorials](https://ask.dcloud.net.cn/article/35252)	|[Windows SVN Tutorials](https://ask.dcloud.net.cn/article/35246)	|
|git	|[Mac Git Tutorials](https://ask.dcloud.net.cn/article/35248)	|[Windows Git Tutorials](https://ask.dcloud.net.cn/article/35247)	|


#### 15. Precompiler(less/sass)

There are pre-compilers for various languages in [Tool] -> [Plug-in Installation], such as less, ts, etc. After installing the pre-compiler, all projects can be shared.

**sass Example：**  

<img src="/static/snapshots/started_tutorial/plugins-precompiler.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**sass/less tips：**

Less and sass can be configured to automatically compile when saving files in the plug-in configuration.

> After installing the less or sass plugin, enter the menu [Tools] [Plug-in Installation] [compile-less], click the package.json file, and modify onDidSaveExecution to true. Please note that you need to restart HBuilderX for the changes to take effect.

```Json
{
  "onDidSaveExecution": true
}
```
