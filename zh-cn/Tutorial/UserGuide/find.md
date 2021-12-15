# 查找替换@find-replace

<!--
keyword:查找,替换,find,replace
-->

- 查找文件
- 查找替换字符串（按文件、按项目、按目录），且支持正则
- 查找索引符号

## 快速查找文件@find-files

`ctrl+p (MacOSX: ⌘P)`，可以定位到搜索框，输入文件名，快速打开任何文件。 

文件名后，敲击空格，输入项目名称，可以只搜索指定项目下文件。

<img src="/static/snapshots/tutorial/find/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

按住`Ctrl+Tab`, 可以查看在编辑器中，打开的所有文件的列表。

<img src="/static/snapshots/tutorial/find/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找索引符号@find-symbol

在当前文件，按下`Ctrl + Shift + O`, 可以查找索引符号。

<img src="/static/snapshots/tutorial/find/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找字符串@find-string

- 范围：字符串查找，支持`按当前文件`、`按目录`、`按左侧选中`、`按当前项目`、`按所有项目`进行搜索查找。
- 功能：字符串查找，支持`整词匹配`、`正则匹配`、`大小写匹配`，且支持`排除`特定目录

<img src="/static/snapshots/tutorial/find/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## 区域内搜索@find-in-selection

> 仅支持HBuilderX 3.1.15+版本

HBuilderX，支持选中一段文字，在顶部搜索栏选中区域搜索【Ctrl+Shift+f】，可以在特殊背景区内`搜索`、`替换`、`全选相同词`

如下动画，区域搜索，选中区域背景会变成黄色。按`esc`键，退出区域搜索。

<img src="/static/snapshots/tutorial/find/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>