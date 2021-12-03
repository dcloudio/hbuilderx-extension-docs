# 跳转/转到定义

<!--
keyword:goto,go-to,转到定义,跳转
-->

HBuilderX拥有强大的跳转功能，如下:

- 光标跳转
- 转到行
- 转到指定行列
- 转到匹配的括号
- 跳转到书签
- 跳转到滚动条信息点
- 转到定义
- 转到定义到分栏
- .....

### 上一个光标位置

在HBuilderX中，`Alt+Left` (MacOSX: `ctrl + -`)、点击工具栏上的`<`, 即可回到上一个光标位置。

### 转到行

转到行快捷键：`ctrl + G`

<img src="/static/snapshots/tutorial/goto_line.jpg" style="zoom: 50%;border:1px solid #eee;border-radius: 25px;" />

### 跳转到指定行列

> 仅支持HBuilderX 2.8.10+


<img src="/static/snapshots/tutorial/goto_lc.jpg" style="zoom: 50%;border:1px solid #eee;border-radius: 25px;" />

注意：HBuilderX 3.1.13+版本，支持输入`0`跳转到首行、输入`$`跳转到最后一行。

同时支持通过命令行打开指定文件，并跳转到指定的行和列。

```
# 示例：
/Applications/HBuilderX-Alpha.app/Contents/MacOS/HBuilderX /Users/hx/filename.md:2:10
```

注意：文件，需要是绝对路径

### 转到定义

转到定义是非常常用的功能，普通编辑器不长于此，只能猜单词跳转。

HBuilderX有强大的语法分析引擎，可以准确的跳转定义位置。

转到定义的快捷键是`Alt+d`，鼠标操作是alt+左键单击（注意不是ctrl，因为ctrl留给了多光标）

<img src="/static/snapshots/started_tutorial/3b6a921a9021ffa5ed54e7633afb7fd0.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

> 备注：支持切换【Ctrl+鼠标左键】或【Alt+鼠标左键】进行转到定义 （菜单【选择】，最后一个菜单）

### 转到定义到分栏

而HBuilderX还有一个特色是`转到定义到分栏`，`ctrl+alt+左键`，可以把一个定义处的代码打开在另一侧，方便共同查看

<img src="/static/snapshots/started_tutorial/c75ed6bdd5b6c5a9b8c827b2ee1262a9.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



