# Color Theme Setting 

HBuilderX has the same configuration of color theme settings as vscode, and it is easy to get theme settings from vscode.

It is recommended to use the theme configuration plugin: [Custom Theme Plugin](https://ext.dcloud.net.cn/plugin?id=2684)

### Text Editor

|Name				|Description			|
|-					|-				|
|editor.foreground	|Foreground color of editor	|
|editor.background	|Background color of editor	|
|editor.caret|Cursor color|
|editor.caretLine| The color of the line where the cursor is|
|editor.hyperlink|The color of the text when the hyperlink is activated|
|editor.indentguide|The color of the indentation guide|
|editor.indicator.matchtag|Highlight color of paired brackets|
|editor.indicator.sameword|Highlight colors for the same words|
|editor.linenumber|Line number color|
|editor.selection|The color of selection|
|editor.selectRegion|The color of selected region|
|editor.whitespace|The color of blank area(including TAB and SPACE)|
|editor.unactive_selection.background|The background color of inactive selection|
|editor.foldMarker.expanded.background|The background color of the code editor from collapsed to expanded state |
|editor.foldMarker.expanded.foreground|The foreground color of the code editor from collapsed to expanded state|
|editor.foldMarker.collapsed.background|The background color of the code editor in the collapsed state|
|editor.foldMarker.collapsed.foreground|The foreground color of the code editor in the collapsed state|

备注：The setting after editor.background is only valid for 3.2.7+ version.

#### Defult setting of code editor
> Customize，copy default configuration to `"rules"` node of `"editor.tokenColorCustomizations"` node in the source view of `settings.json`.

> The default color of code editor：[Color settings of code editor](/Tutorial/Other/themes_code.md)

For example：
```json
//settings.json
"editor.tokenColorCustomizations": {
    "[Default]": {//green soft
        "rules":[
            {
                "scope": ["meta.embedded", "source.groovy.embedded"],
                "settings": {
                    "foreground": "#657B83"
                }
            },
            {
                "scope": "meta.property-name",
                "settings": {
                    "foreground": "#3c7a03"
                }
            }
        ]
    }
}
```

### mac（Available for macOS）

|Name					|Description		|
|-							|-			|
|titleBar.activeBackground	|Background color	|
|titleBar.activeForeground	|Foreground color	|

### windows 

>  Available few students for windows3.2.7+

|Nmae						|Description		|
|-							|-			|
|menubar.background	|The background color of top navigation	|
|menubar.foreground	|The foreground color of top navigation	|

### Toolbar


|Name					|Description							|
|-						|-								|
|toolBar.background		|The background color of toolbar					|
|toolBar.border			|The border color of toolbar					|
|toolBar.hoverBackground|The background color of the icon when hovering over the icon	|

### Search Bar 

> The following items are supported from 3.2.7+

|Name						|Description		|
|-							|-			|
|searchbar.foreground|当input.searchbar.foreground为空时,字符搜索框没有内容时,字符搜索框内的文字颜色(颜色模式为反色的bgr);当input.searchbar.foreground为空时,字符搜索框有内容,且内容被搜索到时,搜索文件的颜色(因是rgb模式,设置的颜色不生效);字符搜索框光标的颜色|
|searchbar.notfinded.foreground|当input.searchbar.foreground.notfinded为空时,字符搜索框有内容,且内容没有搜索到时,搜索文字的颜色(因是rgb模式,设置的颜色不生效);字符搜索框光标的颜色|
|searchbar.quick_search_item.icon_selected|搜索栏下拉列表,当前选中项的颜色(颜色模式为反色的bgr)|
|searchbar.quick_search_item.icon|搜索栏下拉列表,未选中项的颜色(颜色模式为反色的bgr)|
|input.searchbar.foreground.notfinded|字符搜索框有内容,且内容没有搜索到时,搜索文字的颜色;字符搜索框光标的颜色|
|input.searchbar.foreground|字符搜索框没有内容时,字符搜索框内的文字颜色;字符搜索框有内容,且内容被搜索到时,搜索文字的颜色;字符搜索框光标的颜色|

### Dropdown search box

|Name						|Description				|
|-								|-						|
|inputValidation.infoBackground	|The background color of dropdown box		|
|inputList.hoverBackground		|The background color when the mouse hovers over the list item	|
|inputList.border				|The border color of dropdown box		|
|inputList.titleColor			|Search title color of dropdown box		|
|inputList.foreground			|Search text color of dropdown box	|

### Text box


|Name				|Description					|
|-					|-						|
|input.background	|	The background color of text box		|
|input.foreground	| The foreground color of text box			|
|input.border		|The border color of text box			|
|focusBorder		|The border color when the text box has focus	|

### List component/Tree component

|Name								|Description							|
|-									|-								|
|list.foreground					|The foreground color	of list component					|
|list.activeSelectionBackground		|The background color of selected list item			|
|list.activeSelectionForeground		|The foreground color of selected list item			|
|list.hoverBackground				|The background color when the mouse hovers over the list item 			|
|list.highlightForeground			|The foreground color when the item is highlighted					|
|list.inactiveSelectionBackground	|The background color of unselected items 				|
|list.inactiveSelectionForeground	|The foreground color of unselected items				|
|explorer.file.status.modified		|File name color of modified files with version control （SVN/GIT）	|
|explorer.file.status.untracked		|File name color of untracked files with version control （SVN/GIT）|
|explorer.file.status.added			|File name color of new file with version control （SVN/GIT）	|
|explorer.file.status.conflicted	|File name color of conflicted files with version control （SVN/GIT）	|
|explorer.file.status.rename		|File name color after rename a file with version control	|
|explorer.file.status.marktext		|File name color of marktext files with version control （SVN/GIT）		|

### Explorer

|Name				|Description		|
|-					|-			|
|sideBar.background	|Background color	|
|sideBar.border		|Border color	|

### Tabs

|Name								|Description									|
|-									|-										|
|editorGroupHeader.tabsBackground	|The background color of tabs							|
|tab.activeBackground				|The background color of selected tab							|
|tab.border							|The border color of tab							|
|tab.inactiveBackground				|The background color of unselected tabs						|
|tab.hoverBackground				|The background color when the mouse hovers over the tab |
|tab.inactiveForeground				|The foreground color of unselected tabs						|
|tab.activeBorder					|The border color of selected tab							|
|tab.activeForeground				|The foreground color of selected tab					|
|tab.unfocusedInactiveForeground	|The foreground color of the unselected tab in the unfocused column			|
|tab.unfocusedHoverBackground		|The background color when the mouse hovers over unselected tab in the unfocused column|
|tab.unfocusedActiveForeground		|The foreground color of selected tab the unfocused column			|

### Columns


|Name							|Description						|
|-								|-							|
|editorGroup.border				|Dividing line color					|
|tab.unfocusedActiveForeground	|The foreground color of selected tab in unfocused column	|

### Button

|Name					|Descritpion					|
|-						|-						|
|button.background		|The background color of button	|
|button.foreground		|The foreground color of button	|
|button.hoverBackground	|The background color when the mouse hovers over button	|

### Code assistant


|名称									|描述						|
|-										|-							|
|editorSuggestWidget.background			|助手弹窗背景颜色			|
|editorSuggestWidget.border				|助手弹窗边框颜色			|
|editorSuggestWidget.selectedBackground	|助手弹窗选中条目时背景颜色	|
|editorSuggestWidget.link				|助手链接颜色				|


### 文档结构图


|名称				|描述			|
|-					|-				|
|outlineBackground	|文档结构背景颜色	|

### 滚动条

|名称							|描述					|
|-								|-						|
|scrollbarSlider.background		|滚动条背景颜色			|
|scrollbarSlider.hoverBackground|鼠标滑过滚动条背景颜色	|

### 预览按钮

|名称										|描述					|
|-											|-						|
|extensionButton.prominentBackground		|背景颜色				|
|extensionButton.prominentForeground		|前景颜色				|
|extensionButton.border						|边框颜色				|
|extensionButton.prominentHoverBackground	|鼠标滑过时的背景颜色	|
|extensionButton.checkColor					|选中时的前景颜色		|


### 设置


|名称								|描述						|
|-									|-							|
|editor.background					|设置页面背景颜色			|
|inputOption.activeBorder			|文本框有焦点时边框颜色		|
|settings.textInputBackground		|文本框背景颜色				|
|settings.textInputBorder			|文本框边框颜色				|
|settings.textInputDisableBackground|文本框不可用背景颜色		|
|settings.dropdownForeground		|combobox下拉列表前景颜色	|
|settings.dropdownBorder			|combobox下拉列表边框颜色	|
|settings.dropdownBackground		|combobox下拉列表背景颜色	|
|settings.dropdownListBorder		|combobox item边框颜色		|

### 图片预览


|名称					|描述			|
|-						|-				|
|imageview.background	|浅色方格颜色	|
|imageview.foreground	|深色方格颜色	|

### 弹窗提示框

|名称									|描述					|
|-										|-						|
|notifications.border					|弹窗边框颜色			|
|notifications.background				|弹窗背景颜色			|
|notifications.foreground				|弹窗前景颜色			|
|notification.buttonBorder				|弹窗按钮边框颜色		|
|notification.buttonBackground			|弹窗按钮背景颜色		|
|notification.buttonForeground			|弹窗按钮前景颜色		|
|notification.buttonPressedForeground	|弹窗按钮按下前景颜色	|
|notification.buttonPressedBackground	|弹窗按钮按下背景颜色	|
|notificationLink.foreground			|弹窗链接颜色			|

### 文件对比

|名称					|描述											|
|-						|-												|
|filediff.line.add		|添加行背景颜色									|
|filediff.line.delete	|删除行背景颜色									|
|filediff.inline.base	|行内比较和右边行有不同字符，左边字符显示颜色	|
|filediff.inline.modify	|行内比较和左边行有不同字符，右边字符显示颜色	|

### 控制台


|名称						|描述				|
|-							|-					|
|terminal.background		|终端背景颜色		|
|console.background | 控制台背景颜色|
|panelTitle.activeForeground|tab选中时的前景颜色|
|debug.foreground			|前景颜色			|
|console.ad|控制台广告信息文字颜色|
|console.error|控制台错误信息文字颜色|
|console.foreground|控制台窗口前景颜色颜色(控制台窗口文字颜色)|
|console.success|控制台成功信息文字颜色|
|console.time|控制台时间信息文字颜色|
|console.warn|控制台警告信息文字颜色|

备注：debug.foreground之后的颜色，仅对3.2.7+版本生效。

### 查看svn/git日志

在svn/git项目上点击右键。只在mac上生效

|名称							|描述					|
|-								|-						|
|logviewButton.background		|按钮背景颜色			|
|logviewButton.border			|按钮边框颜色			|
|logviewButton.hover			|鼠标滑过按钮背景颜色	|
|logviewButton.disable			|按钮不可用背景颜色		|
|logviewButtonDisable.border	|按钮不可用边框颜色		|
|logview.file.action.modified	|选中已修改文件前景色	|
|logview.file.action.deleted	|选中已删除文件前景色	|
|logview.file.action.added		|选中已增加文件前景色	|
|logview.file.action.rename		|选中已重命名文件前景色	|


### 状态栏

|名称					|描述			|
|-						|-				|
|statusBar.background	|状态栏背景颜色	|
|statusBar.foreground	|状态栏前景颜色	|


### 右侧迷你地图

|名称					|描述			|
|-						|-				|
|minimap.handle.background	|迷你地图滑块背景	|
