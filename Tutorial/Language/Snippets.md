代码块是快速开发的利器。简单的敲几个字母，回车，就能生成大段代码。

比如我们经常会敲if...else结构，在HBuilderX中，只需敲`ife`回车，就能直接生成相应的代码结构。

敲ife

<img src="/static/snapshots/tutorial/snippets_3.png" style="zoom: 90%;" />

回车后生成if结构体

<img src="/static/snapshots/tutorial/snippets_4.png" style="zoom: 90%;" />

## 代码块设置

HBuilderX已经内置了大量常用的代码块，熟悉这些代码块，对于提高编程效率有重要帮助。

查看内建的代码块，点击菜单-工具-代码块设置，选择你要查看的语言的代码块。

<img src="/static/snapshots/tutorial/snippets_1.png" style="zoom: 90%;" />

打开的界面中，左侧即是预置的代码块，右侧是开发者可以自己扩展代码块的地方。

<img src="/static/snapshots/tutorial/snippets_2.png" style="zoom: 80%;" />

## 常用代码块列表

#### 通用js代码块

- iff ：简单if
- forr ：for循环结构体
- fori ：for循环结构体并包含i
- funn：函数
- funa：匿名函数
- clog：打印日志
- clogvar：打印变量命名和值

#### dom代码块

- dg ：document.getElementById
- dl ：$("")

#### vue代码块

敲v，即可拉出各种vue代码块

#### uni-app代码块

敲u，即可拉出各种uni-app代码块
还有ifios、ifandroid，这2个平台判断代码块（HBuilderX 1.9.10+）

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
    
### 代码块配置格式说明

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


### 注意事项
  
1. 每个代码块以`key`为主键，多个代码块需要`逗号`分隔。
2. 如果json语法不合法，编辑器状态栏会弹出错误信息，json中会画出红波浪线，请注意修正。
