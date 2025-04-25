# 代码块

<!--
keyword: 代码块,代码片段,Snippets,codeblocks
-->

## 概述

代码块是快速开发的利器。简单的敲几个字母，回车，就能生成大段代码。

比如我们经常会敲if...else结构，在HBuilderX中，只需敲`ife`回车，就能直接生成相应的代码结构。

敲`ife`

<img src="/static/snapshots/tutorial/ls_snippets/snippets_3.png" style="zoom: 90%;" />

回车后生成if结构体

<img src="/static/snapshots/tutorial/ls_snippets/snippets_4.png" style="zoom: 90%;" />

## 常用代码块列表

**通用js代码块**

- iff ：简单if
- forr ：for循环结构体
- fori ：for循环结构体并包含i
- funn：函数
- funa：匿名函数
- clog：打印日志
- clogvar：打印变量命名和值

**dom代码块**

- dg ：document.getElementById
- dl ：$("")

**vue代码块**

敲v，即可拉出各种vue代码块

**uni-app代码块**

敲u，即可拉出各种uni-app代码块
还有ifios、ifandroid，这2个平台判断代码块（HBuilderX 1.9.10+）

## 代码块设置

HBuilderX已经内置了大量常用的代码块，熟悉这些代码块，对于提高编程效率有重要帮助。

查看内建的代码块，点击菜单-工具-代码块设置，选择你要查看的语言的代码块。

<img src="/static/snapshots/tutorial/ls_snippets/snippets_1.png" style="zoom: 90%;" />

打开的界面中，左侧即是预置的代码块，右侧是开发者可以自己扩展代码块的地方。

<img src="/static/snapshots/tutorial/ls_snippets/snippets_2.png" style="zoom: 80%;" />


## 自定义代码块

自定义代码块都是配置json文件中的，直接来一个js例子吧，上述`ife`代码块的配置如下：

```json
{
"if ... else": {
	"body": [
		"if ($1) {",
		"\t$0",
		"} else{",
		"\t",
		"}"
	],
	"prefix": "ife",
	"scope": "source.js"
}
}
```

备注：HBuilderX 3.7.1+，支持代码块包围功能。[更多](#自定义包围代码块)

#### 代码块配置格式说明

HBuilderX使用json定义代码块的格式，兼容vscode的代码块格式，也就是你可以把vscode里已经配置的自定义代码块方便的挪到HBuilderX中使用。


|配置项			|说明																																																																													|
|--				|--																																																																														|
|key			|代码块显示名称，显示在代码助手列表中的名字。key是不能重复的。上面例子中`"if ... else"`就是一个`key`。																																																					|
|prefix			|代码块的触发字符，就是敲什么字母可以激活这个代码块。																																																																	|
|body			|代码块的内容																																																																											|
|triggerAssist	|为`true`表示该代码块输入到文档后立即在第一个`tabstop`上触发代码提示，拉出代码助手，默认为`false`。																																																						|
| project		|将代码块控制在指定项目类型下生效。可取值有：`uni-app`、`Web`、`App`、`Wap2App`。<br/>`Web`指普通项目，`App`指5+App项目。如果不设置，则该代码块在所有项目类型下均生效。<br/>比如：`"project": "uni-app"`，代表这个代码块仅在uni-app项目下生效。<br/>如需设置多种项目类型，用逗号分隔。比如：`"project": "uni-app,App"`	|

**配置项body详细说明:**

- `$1` 表示代码块输入后光标的所在位置。如需要多光标，就在多个地方配置`$1`；如该位置有预置数据且需要选中，则写法是`${1:selectedtext}`；这里还支持下拉候选菜单，多选项即下拉候选列表使用`${1:foo1/foo2/foo3}`
- `$2` 表示代码块输入后再次按tab后光标的切换位置`tabstops`（代码块展开后按tab可以跳到下一个`tabstop`，在HBuilderX中看到类似绿色光标的不闪的竖线，就可以按tab或回车跳转光标过去）
- `$0`代表代码块输入后最终光标的所在位置（也可以按回车直接跳过去）。

特别说明：
1. **双引号使用`\"`转义**
2. **换行使用多个数组表示，每个行一个数组，用`双引号`包围，并用`逗号`分隔**
3. **缩进需要用`\t`表示，不能直接输入缩进或空格！**


#### 注意事项

1. 每个代码块以`key`为主键，多个代码块需要`逗号`分隔。
2. 如果json语法不合法，编辑器状态栏会弹出错误信息，json中会画出红波浪线，请注意修正。

## 自定义项目代码块@projectSnippets

> HBuilderX 3.4.8+版本起，支持自定义项目代码块。

HBuilderX，顶部菜单【工具 代码块设置 自定义项目代码块】。创建的代码块文件，会出现在项目根目录下的`.hbuilderx`目录下。

<img src="/static/snapshots/tutorial/ls_snippets/project_snippets.png" class="hd-img"/>

## 注释模板同步时间

> HBuilderX 2.7.5+版本起，支持注释模板同步时间

点击菜单【工具】【代码块设置】【javascript代码块】，输入如下内容：

```
{
    "method-annotation": {
        "prefix": "anno",
        "body": [
            "/**",
            " * 方法说明",
            " * author: 佚名",
            " * description: ",
            " * @param $1",
            " * @return $2",
            " * @createTime: $DATE_TIME",
            " */"
        ],
        "triggerAssist": false,
        "description": "method annotation"
    }
}
```

<img src="/static/snapshots/tutorial/ls_snippets/Snippets_time.gif" style="zoom: 80%; border: 1px solid #eee;border-radius: 10px;" />

## 自定义包围代码块@surround

> HBuilderX 3.7.1-alpha，新增自定义包围代码块功能。

目前HBuilderX，内置了js和ts的部分包围代码块，如需更多包围代码块，需要自定义进行配置。

如下Gif，在编辑器选中要操作的代码，按下`Ctrl + Alt + T`(MacOSX快捷键：`Command + Alt + T`)，则会打开代码块包围功能。

当然，您也可以点击HBuilderX顶部菜单【编辑 - 包围 - 代码块包围】

![](https://web-assets.dcloud.net.cn/hbuilderx-doc/code-block-surround.gif)

#### 如何自定义包围代码块？

![](https://web-assets.dcloud.net.cn/hbuilderx-doc/code-block-surround-example.gif)

如下示例，`$SELECTION` 表示选中的区域。

其它配置项，[参考](#代码块配置格式说明)

```json
{
	"div_bao": {
		"body": [
			"<div>$SELECTION</div>"
		],
		"prefix": "div_bao",
		"scope": "text.html.basic"
	}
}
```
