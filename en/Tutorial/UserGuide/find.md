# Find and replace

- Find files
- Find and replace strings (by file, by project, by directory), and support regular
- Find symbol in editor
- Find in selection

## Find files

`ctrl+p (MacOSX: ⌘P)`, You can navigate to the search box, enter the file name, and quickly open any file.

After the file name, hit the space and enter the project name, you can search only the files under the specified project.

<img src="/static/snapshots/tutorial/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

Press and hold `Ctrl+Tab`, you can view the list of all files opened in the editor.

<img src="/static/snapshots/tutorial/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find symbol

In the current file, press `Ctrl + Shift + O` to find symbol.

<img src="/static/snapshots/tutorial/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find string

- 范围：字符串查找，支持`按当前文件`、`按目录`、`按左侧选中`、`按当前项目`、`按所有项目`进行搜索查找。
- 功能：字符串查找，支持`整词匹配`、`正则匹配`、`大小写匹配`，且支持`排除`特定目录

<img src="/static/snapshots/tutorial/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## Find in selection

> Only supports HBuilderX 3.1.15+ version

HBuilderX，支持选中一段文字，在顶部搜索栏选中区域搜索【Ctrl+Shift+f】，可以在特殊背景区内`搜索`、`替换`、`全选相同词`

如下动画，区域搜索，选中区域背景会变成黄色。按`esc`键，退出区域搜索。

<img src="/static/snapshots/tutorial/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>