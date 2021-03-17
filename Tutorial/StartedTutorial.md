>  HX是轻量编辑器和强大IDE的完美结合体。敏捷的性能，清爽的界面，强大的功能和于一身。

**本文档面向入门用户，建议初学者仔细研读。**


#### 1. 介绍

1. 执着于更快一步的理念，hx的`左侧项目管理器`是`单击`响应而`不是双击`。
2. `单击`展开目录，`单击`预览文件，`双击`打开文件。
3. 预览文件时顶部标签卡是`斜体`的，此时继续预览其他文件会替换预览标签卡。`双击`文件后标签卡为正体，不会被替换。预览的文件一旦开始编辑，也会自动变为正式打开状态。

<img src="/static/snapshots/started_tutorial/overview.png" style="zoom: 90%;"/>

4. 项目管理器默认是不显示图标的，可以将鼠标移到项目管理器区域，右上角会悬浮菜单，在里面可以选择显示图标。HBuilderX支持业内多种图标插件，可以在工具-插件安装中找到更多图标插件。
5. hx的文件保存是免丢失的，并且有热退出功能。所谓热退出，就是关闭hx时不要保存文件。再次打开时仍然是之前的状态。未保存的文件也会继续原样展现。
6. hx默认带有每`30秒`保存一次临时文件的策略（可以在设置里调节时间间隔）
7. 不管是关闭hx，还是断电、崩溃，临时文件始终会自动保存。
8. 前端预编译型语言越来越多，每次保存都触发编译比较消耗资源，有了hx，可以专注写代码而不需要隔一会按一下ctrl+s，需要编译时再保存，或编辑多个文件后按ctrl+alt+s全部保存。

#### 2. 语法提示

拥有自研的世界级语法分析引擎一直是HBuilder系列产品傲视业内的资本。
但前端框架众多，框架的语法提示需要加载单独的语法提示库。

框架语法提示库是在页面的右下角选择。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-syntax-hints.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**注意**：

1. 框架语法库是挂在项目下的，一个项目加载了一个框架语法库后，这个项目下所有js文件或HTML文件都会在代码助手提示这个框架的语法。
2. 但如果一个文件是单独从硬盘打开，没有整项目拖入hx，那么此时无法加载框架语法库。

#### 3. 代码助手


hx的代码助手，可以按`alt+数字`选择直接选择某个项目，类似中文输入法数字选词 （如下图示例）

<img src="/static/snapshots/started_tutorial/code-help.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

#### 4. 语法帮助


光标放到某api处，按下`F1`，就可跳转到这个api的官方手册。目前支持vue、uni-app、5+等api （如下图示例）

<img src="/static/snapshots/started_tutorial/code-help-doc.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 5. 编辑器与项目管理器的同步


hx默认是打开的标签卡和项目管理器自动关联，切换标签卡时项目管理器也会跟随变化，如不需要此功能，可以将鼠标移到项目管理器区域，右上角会悬浮菜单，在里面可以取消“与编辑器同步”。（如下图示例）

<img src="/static/snapshots/started_tutorial/sync.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

一般多项目时建议取消同步功能。

取消同步后，如需手动定位标签卡所在的项目，可以对编辑器点右键-“在项目管理器中定位”。（如下图示例）

<img src="/static/snapshots/started_tutorial/project-manager-position.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 6. 多光标


hx支持多光标，按 `ctrl+鼠标左键` 就可增加一个光标，`ctrl+鼠标右键` 可取消一个光标或选区。（如下图示例）

<img src="/static/snapshots/started_tutorial/more-cursor.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

还可以选择相同词。`ctrl+e` (mac是`cmd+d`)可选中相同的词做批处理。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-same-word.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

多光标是极客必备工具，高级技巧请参考：[https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/13191](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/13191)



#### 7. 列选择


hx的列选择，是`alt+鼠标拖选`。或者用快捷键`ctrl+alt+↑`或`↓`。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-column.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 8. 选择编码、着色高亮


当你打开一个不认识的文档时，即hx的无法高亮着色，可以在右下角选择使用其他编辑器打开。

当你打开一个文件编码错乱，产生乱码时，也可以在右下角选择编码重新打开。（如下图示例）

<img src="/static/snapshots/started_tutorial/select-encoding.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 9. 转到定义


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
 
#### 10. 文件快速打开


在顶部工具栏直接搜索工程下的文件名并打开，或者使用快捷键`ctrl+p`。（如下图示例）

<img src="/static/snapshots/started_tutorial/file_quick_open.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比较常用的文件，可以在工具栏里添加到收藏夹。（如下图示例）

<img src="/static/snapshots/started_tutorial/add-to-favorites.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

`ctrl+p`也是标签卡管理的重要工具，屏幕窄看不清左右打开的标签时，可以用它来浏览所有以打开的标签



#### 11. 目录内搜索


项目管理器点右键，选：查找字符串(当前目录)，可在该目录下所有文件中搜索字符串（如下图示例）

<img src="/static/snapshots/started_tutorial/search-dir.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 12. 缩进调整


hx默认使用`tab`缩进，`tab`长度为4个空格。

如果你需要调整缩进长度，比如`tab`长度为2个空格，在工具设置-编辑器中调整。（如下图示例）

<img src="/static/snapshots/started_tutorial/ident.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

如果不喜欢使用tab而喜欢使用空格，也可以在设置中调。注意这个调节只是编辑器里敲tab按键时转为了空格，格式化时仍是tab。

调节格式化设置，参考菜单工具-插件配置。hx支持几种格式化插件，他们都有自己的配置定义文件，请按插件配置中的说明修改设置。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-code-format.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比如格式化插件Formator-Prettier，它的配置文件为：【工具】【插件配置】【formator-frettier】【formator.config.js】（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-setting.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

在菜单编辑-缩进中，可文件的缩进从`tab`转`空格`或从`空格`转`tab`。



#### 13. 语法校验


hx的语法校验都是插件，在工具插件安装中选择各种校验插件，不同语言的校验插件不一样。安装校验插件后，保存文件时会自动执行语法校验。

[语法校验插件详细介绍](/Tutorial/UserGuide/SyntaxCheck)


校验概要结果会显示在状态栏，比如有2个错误（如下图），可以按`F4`切换到不同的错误处，画有红波浪线（如下图），鼠标移到红波浪线上会显示具体的错误信息。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


你也可以不保存，直接点菜单工具-验证本文档校验语法 来进行校验。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-02.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 15. svn/git项目导入


以git为例：（git项目：需要安装git插件、以及TortoiseGit、并配置ssh秘钥）（如下图示例）

<img src="/static/snapshots/started_tutorial/project-svn-git-import.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

|插件名称	|Mac操作系统	|Windows操作系统	|
|--	|--	|--	|
|svn	|[Mac SVN教程](https://ask.dcloud.net.cn/article/35252)	|[Windows SVN教程](https://ask.dcloud.net.cn/article/35246)	|
|git	|[Mac Git教程](https://ask.dcloud.net.cn/article/35248)	|[Windows Git教程](https://ask.dcloud.net.cn/article/35247)	|


#### 15. 预编译器(less/sass)


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