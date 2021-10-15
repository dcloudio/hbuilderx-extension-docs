**This document is for beginners, it is recommended that beginners study it carefully**

#### 1. introduce

1. HBuilderX, `Left Project Manager` is `click on `Response instead of `double click`
2. Mouse click, Expand the directory. Mouse click, Preview file. Double click, open file.
3. When previewing a file, the top tab is in italics. At this time, continuing to preview other files will replace the preview tab. Double-click the file, The tab shows the body and will not be replaced. If you edit the previewed file, it will automatically become officially opened.
4. The project manager does not display icons by default, You can move the mouse to the project manager area, There will be a floating menu in the upper right corner, Inside can choose to display icons.
5. File saving is to avoid loss, and there is a hot exit function. Hot exit, that is, do not save the file when closing the software. When it is opened again, it is still in the previous state. Unsaved files will continue to be displayed as they are.
6. HBuilderX has a policy of saving temporary files every `30 seconds` by default（You can adjust the time interval in the settings）
7. No matter it is closing HBuilderX, power failure or crash, temporary files will always be saved automatically.
8. There are more and more pre-compiled languages on the front end. Compilation is triggered every time it is saved, which consumes resources. With hx, you can focus on writing code without pressing` ctrl+s` after a while. You need to save when you compile, or edit multiple After the file, press `ctrl+alt+s` to save all.

#### 2. syntax tips

Owning a self-developed world-class grammatical analysis engine has always been the capital of the HBuilder series of products that scorns the industry.

However, there are many front-end frameworks, and the syntax prompts of the frameworks need to load a separate syntax prompt library.

Framework syntax hint library, Select at the bottom right corner of the page.

<img src="/static/snapshots/started_tutorial/frameworks-en.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**note**：

1. The framework grammar library is hung under the project. After a project loads a framework grammar library, all js files or HTML files under this project will prompt the grammar of this framework in the code assistant.
2. However, if a file is opened separately from the hard disk and the entire project is not dragged into hx, then the framework syntax library cannot be loaded at this time.

#### 3. Code assistant


HBuilderX Code assistant，Press ` alt+number`Select an item directly

<img src="/static/snapshots/started_tutorial/code-help-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

#### 4. syntax help


Place the cursor on an api and press `F1` to jump to the official manual of this api. Currently supports vue, uni-app, 5+ and other apis

<img src="/static/snapshots/tutorial/language/hover_help_en.png" class="hd-img" />


#### 5. Synchronization of editor and project manager


The hx default is to automatically associate the opened tab card with the project manager. The project manager will also follow the changes when switching tabs. If you don’t need this function, you can move the mouse to the project manager area, and there will be a floating menu in the upper right corner. You can cancel "Sync with Editor".

<img src="/static/snapshots/started_tutorial/sync-en.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

It is recommended to cancel the synchronization function when there are multiple projects.

After canceling the synchronization, if you need to manually locate the project where the label card is located, you can right-click the editor-"Reveal in Project Explorer".

<img src="/static/snapshots/started_tutorial/project-manager-position-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 6. Multi-cursor


HBuilderX supports multiple cursors, press `ctrl+left mouse button` to add a cursor, and `ctrl+right mouse button` to cancel a cursor or selection.

<img src="/static/snapshots/started_tutorial/more-cursor.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

You can also select the same word. `ctrl+e` (mac is `cmd+d`) can select the same words for batch processing.

<img src="/static/snapshots/started_tutorial/select-same-word.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 7. Column selection


The column selection of hx is `alt+mouse drag selection`. Or use the shortcut key `ctrl+alt+↑` or `↓`

<img src="/static/snapshots/started_tutorial/select-column-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 8. Choose file encoding、Code Color highlight

When you open an unknown document, that is, hx cannot be highlighted and colored, you can choose to open it with other editors in the lower right corner.

When you open a file with garbled encoding, you can also select the encoding in the lower right corner to reopen it.

<img src="/static/snapshots/started_tutorial/select-encoding.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 9. Go to definition


Go to definition is a very commonly used function, ordinary editors are not longer than this, only guess the word jump.

HBuilderX has a powerful syntax analysis engine that can accurately jump to the defined position.

The shortcut key to go to the definition is `Alt+d`, and the mouse operation is alt+left click (note that it is not ctrl, because ctrl is reserved for multiple cursors)

<img src="/static/snapshots/started_tutorial/goto-definition-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

Another feature of HBuilderX is `Go to definition to column`, `ctrl+alt+left mouse button`, you can open the code of a definition on the other side, which is convenient for common viewing。

<img src="/static/snapshots/started_tutorial/goto-definition-col-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


**How to go back to the previous cursor position？**

In HBuilderX, `Alt+Left` or click `<` on the toolbar to return to the previous cursor position.


Note: Support switching [Ctrl+left mouse button] or [Alt+left mouse button] to go to definition (menu [select], the last menu).

<img src="/static/snapshots/started_tutorial/switch-multi-cursor-en.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
 
#### 10. Open files quickly


Directly search and open the file name under the project in the top toolbar, or use the shortcut key `ctrl+p`

<img src="/static/snapshots/started_tutorial/file_quick_open_en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

More commonly used files can be added to favorites in the toolbar.

<img src="/static/snapshots/started_tutorial/add-to-favorites-en.png" style="zoom: 45%;border:1px solid #eee;border-radius: 15px;" />

`ctrl+p` is also an important tool for tag card management. When the screen is narrow and the left and right open tabs cannot be seen clearly, you can use it to browse all open tabs.



#### 11. Search in the directory


Right click on the project manager, menu [Character search], Search for strings in all files in this directory.

<img src="/static/snapshots/started_tutorial/search-dir-en.gif" style="zoom: 80%;border:1px solid #eee;border-radius: 5px;" />



#### 12. Indent adjustment

HBuilderX, Tab indentation is used by default, and the tab length is 4 spaces

If you need to adjust the indent length, Adjust in [Tools-Settings].

<img src="/static/snapshots/started_tutorial/ident_en.png" style="zoom: 45%;border:1px solid #eee;border-radius: 5px;" />

If you don't like to use tabs and prefer to use spaces, you can also adjust them in the settings. Note that this adjustment is only converted to a space when the tab button is pressed in the editor, and it is still tab when formatted.

To adjust the formatting settings, refer to the menu tool-plug-in configuration. hx supports several formatting plug-ins, and they all have their own configuration definition files. Please modify the settings according to the instructions in the plug-in configuration.

<img src="/static/snapshots/started_tutorial/plugins-code-format.jpg" style="zoom: 80%;border:1px solid #eee;border-radius: 5px;" />


In the menu edit-indent, the indentation of the file can be changed from `tab` to `space` or from `space` to `tab`.


#### 13. Syntax check

HBuilderX, Syntax check needs to install a plug-in. Different languages have different verification plug-ins。After installing the verification plug-in, syntax verification will be performed automatically when saving the file.

[SyntaxCheck Docs](/Tutorial/UserGuide/SyntaxCheck)


The summary result of the verification will be displayed in the status bar. 

For example, if there are two errors , you can press `F4` to switch to different errors. A red wavy line is drawn. When the mouse moves over the red wavy line, a specific error message will be displayed.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01-en.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


Directly click the menu tool-verify the verification syntax of this document to verify.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-en.png" style="zoom: 40%;border:1px solid #eee;border-radius: 5px;" />



#### 15. svn/git import


<img src="/static/snapshots/started_tutorial/project-svn-git-import-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

|Plug-in name	| MacOSX	|Windows	|
|--	|--	|--	|
|svn	|[Mac SVN Tutorials](https://ask.dcloud.net.cn/article/35252)	|[Windows SVN Tutorials](https://ask.dcloud.net.cn/article/35246)	|
|git	|[Mac Git Tutorials](https://ask.dcloud.net.cn/article/35248)	|[Windows Git Tutorials](https://ask.dcloud.net.cn/article/35247)	|


#### 15. Precompiler(less/sass)

Plug-in market, there are pre-compilers in various languages, such as less, ts, etc. 

After installing the pre-compiler, all projects can be shared.

**sass Example：**  

<img src="/static/snapshots/started_tutorial/plugins-precompiler-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**sass/less tips：**

Less and sass can be configured to automatically compile when saving files in the plug-in configuration.

> After installing the less or sass plugin, enter the menu [Tools] [Plugin Configuration] [compile-less], click the package.json file, and modify onDidSaveExecution to true. Note that you need to restart HBuilderX after the modification to take effect

```Json
{
  "onDidSaveExecution": true
}
```