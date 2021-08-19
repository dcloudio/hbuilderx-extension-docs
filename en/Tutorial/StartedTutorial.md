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

拥有自研的世界级语法分析引擎一直是HBuilder系列产品傲视业内的资本。
但前端框架众多，框架的语法提示需要加载单独的语法提示库。

Framework syntax hint library, Select at the bottom right corner of the page.

<img src="/static/snapshots/started_tutorial/select-syntax-hints.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**注意**：

1. 框架语法库是挂在项目下的，一个项目加载了一个框架语法库后，这个项目下所有js文件或HTML文件都会在代码助手提示这个框架的语法。
2. 但如果一个文件是单独从硬盘打开，没有整项目拖入hx，那么此时无法加载框架语法库。

#### 3. Code assistant


HBuilderX Code assistant，Press ` alt+number`Select an item directly

<img src="/static/snapshots/started_tutorial/code-help.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

#### 4. syntax help


光标放到某api处，按下`F1`，就可跳转到这个api的官方手册。目前支持vue、uni-app、5+等api （如下图示例）

> 此功能仅适用于2.5.7以下版本，2.5.7.20200116-alpha+版本，按F1查看帮助文档，改为打开外部浏览器，避免对边改边看造成影响

<img src="/static/snapshots/started_tutorial/code-help-doc.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 5. Synchronization of editor and project manager


hx默认是打开的标签卡和项目管理器自动关联，切换标签卡时项目管理器也会跟随变化，如不需要此功能，可以将鼠标移到项目管理器区域，右上角会悬浮菜单，在里面可以取消“与编辑器同步”。（如下图示例）

<img src="/static/snapshots/started_tutorial/sync.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

一般多项目时建议取消同步功能。

取消同步后，如需手动定位标签卡所在的项目，可以对编辑器点右键-“在项目管理器中定位”。（如下图示例）

<img src="/static/snapshots/started_tutorial/project-manager-position.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 6. Multi-cursor


hx支持多光标，按 `ctrl+鼠标左键` 就可增加一个光标，`ctrl+鼠标右键` 可取消一个光标或选区。（如下图示例）

<img src="/static/snapshots/started_tutorial/more-cursor.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

还可以选择相同词。`ctrl+e` (mac是`cmd+d`)可选中相同的词做批处理。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-same-word.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

多光标是极客必备工具，高级技巧请参考：[https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/13191](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/13191)



#### 7. Column selection


hx的列选择，是`alt+鼠标拖选`。或者用快捷键`ctrl+alt+↑`或`↓`。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-column.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 8. 选择编码、着色高亮


当你打开一个不认识的文档时，即hx的无法高亮着色，可以在右下角选择使用其他编辑器打开。

当你打开一个文件编码错乱，产生乱码时，也可以在右下角选择编码重新打开。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-encoding.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 9. Go to definition


转到定义是非常常用的功能，普通编辑器不长于此，只能猜单词跳转。

HBuilderX有强大的语法分析引擎，可以准确的跳转定义位置。

转到定义的快捷键是`Alt+d`，鼠标操作是alt+左键单击（注意不是ctrl，因为ctrl留给了多光标）

<img src="/static/snapshots/started_tutorial/3b6a921a9021ffa5ed54e7633afb7fd0.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

而HBuilderX还有一个特色是`转到定义到分栏`，`ctrl+alt+左键`，可以把一个定义处的代码打开在另一侧，方便共同查看

<img src="/static/snapshots/started_tutorial/c75ed6bdd5b6c5a9b8c827b2ee1262a9.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


**如何回到上一个光标位置？**

在HBuilderX中，`Alt+Left`或点击工具栏上的`<`, 即可回到上一个光标位置。


备注：支持切换【Ctrl+鼠标左键】或【Alt+鼠标左键】进行转到定义 （菜单【选择】，最后一个菜单）。

<img src="/static/snapshots/started_tutorial/f20f178f0559eebc71106d00c7b4117a.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
 
#### 10. Open files quickly


在顶部工具栏直接搜索工程下的文件名并打开，或者使用快捷键`ctrl+p`。（如下图示例）

<img src="/static/snapshots/started_tutorial/file_quick_open.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比较常用的文件，可以在工具栏里添加到收藏夹。（如下图示例）

<img src="/static/snapshots/started_tutorial/add-to-favorites.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

`ctrl+p`也是标签卡管理的重要工具，屏幕窄看不清左右打开的标签时，可以用它来浏览所有以打开的标签



#### 11. Search in the directory


Right click on the project manager, menu [Character search], Search for strings in all files in this directory.

<img src="/static/snapshots/started_tutorial/search-dir.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 12. Indent adjustment

HBuilderX, Tab indentation is used by default, and the tab length is 4 spaces

If you need to adjust the indent length, Adjust in [Tools-Settings].

<img src="/static/snapshots/started_tutorial/ident.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

如果不喜欢使用tab而喜欢使用空格，也可以在设置中调。注意这个调节只是编辑器里敲tab按键时转为了空格，格式化时仍是tab。

调节格式化设置，参考菜单工具-插件配置。hx支持几种格式化插件，他们都有自己的配置定义文件，请按插件配置中的说明修改设置。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-code-format.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比如格式化插件Formator-Prettier，它的配置文件为：【工具】【插件配置】【formator-frettier】【formator.config.js】（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-setting.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

在菜单编辑-缩进中，可文件的缩进从`tab`转`空格`或从`空格`转`tab`。


#### 13. Syntax check

HBuilderX, Syntax check needs to install a plug-in. Different languages have different verification plug-ins。After installing the verification plug-in, syntax verification will be performed automatically when saving the file.

[语法校验插件详细介绍](/Tutorial/UserGuide/SyntaxCheck)


校验概要结果会显示在状态栏，比如有2个错误（如下图），可以按`F4`切换到不同的错误处，画有红波浪线（如下图），鼠标移到红波浪线上会显示具体的错误信息。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


你也可以不保存，直接点菜单工具-验证本文档校验语法 来进行校验。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-02.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 15. svn/git import


以git为例：（git项目：需要安装git插件、以及TortoiseGit、并配置ssh秘钥）（如下图示例）

<img src="/static/snapshots/started_tutorial/project-svn-git-import.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

|Plug-in name	| MacOSX	|Windows	|
|--	|--	|--	|
|svn	|[Mac SVN Tutorials](https://ask.dcloud.net.cn/article/35252)	|[Windows SVN Tutorials](https://ask.dcloud.net.cn/article/35246)	|
|git	|[Mac Git Tutorials](https://ask.dcloud.net.cn/article/35248)	|[Windows Git Tutorials](https://ask.dcloud.net.cn/article/35247)	|


#### 15. Precompiler(less/sass)


在【菜单】-->【插件安装】里有各种语言的预编译器，比如less、ts等。安装预编译器后，hx下的所有项目均可用共用。

**sass示例：** （如下图示例） 
> 预编译器安装后使用入口在外部命令菜单中


<img src="/static/snapshots/started_tutorial/plugins-precompiler.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**sass/less插件配置小技巧：**

less、sass可以在插件配置里，配置为保存文件时自动编译。
> 安装less或sass插件后，进入菜单【工具】【插件配置】【compile-less】,点击package.json文件，将onDidSaveExecution修改为true。注意修改后需要重启HBuilderX才能生效

```Json
{
  "onDidSaveExecution": true
}
```