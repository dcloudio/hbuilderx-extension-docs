# 主题颜色配置规则

颜色配置命名规则与vscode相同，方便从vscode提取外观主题。

推荐使用主题配置插件: [自定义主题插件](https://ext.dcloud.net.cn/plugin?id=2684)

### 文本编辑区

|名称				|描述			|
|-					|-				|
|editor.foreground	|编辑区前景颜色	|
|editor.background	|编辑区背景颜色	|
|editor.caret|光标颜色|
|editor.caretLine|光标所在行的行颜色|
|editor.hyperlink|超链接激活时的文字颜色|
|editor.indentguide|缩进导轨的颜色|
|editor.indicator.matchtag|配对括号的突出显示颜色|
|editor.indicator.sameword|相同词汇的突出显示颜色|
|editor.linenumber|行号颜色|
|editor.selection|激活的选区颜色|
|editor.selectRegion|区域内搜索选区颜色|
|editor.whitespace|空白的颜色(包括TAB和SPACE)|
|editor.unactive_selection.background|未激活的选区颜色(分栏后在右侧获取选区,然后点击左侧编辑器)|
|editor.foldMarker.expanded.background|编辑器代码折叠图标展开状态背景色|
|editor.foldMarker.expanded.foreground|编辑器代码折叠图标展开状态前景色|
|editor.foldMarker.collapsed.background|编辑器代码折叠图标折叠状态背景色|
|editor.foldMarker.collapsed.foreground|编辑器代码折叠图标折叠状态前景色|

备注：editor.background之后的颜色，仅对3.2.7+版本生效。

#### 编辑区代码默认颜色定义
> 自定义方式，将默认代码区颜色配置拷贝到`settings.json`源码视图中自定义`"editor.tokenColorCustomizations"`节点下对应主题的`"rules"`节点下。

> 默认代码区颜色定义参考：[代码区颜色定义](/Tutorial/Other/themes_code.md)

举例：
```json
//settings.json
"editor.tokenColorCustomizations": {
    "[Default]": {//绿柔
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

### mac标题栏（只在mac os上生效）

|名称						|描述		|
|-							|-			|
|titleBar.activeBackground	|背景颜色	|
|titleBar.activeForeground	|前景颜色	|

### windows菜单栏

> 以下两项，仅对windows 3.2.7+版本生效。

|名称						|描述		|
|-							|-			|
|menubar.background	|顶部菜单栏背景颜色	|
|menubar.foreground	|顶部菜单栏前景颜色	|

### 工具栏


|名称					|描述							|
|-						|-								|
|toolBar.background		|工具栏背景颜色					|
|toolBar.border			|工具栏边框颜色					|
|toolBar.hoverBackground|工具栏上图标被选中时的背景颜色	|

### 搜索框 

> 以下6项，仅对3.2.7+版本生效

|名称						|描述		|
|-							|-			|
|searchbar.foreground|当input.searchbar.foreground为空时,字符搜索框没有内容时,字符搜索框内的文字颜色(颜色模式为反色的bgr);当input.searchbar.foreground为空时,字符搜索框有内容,且内容被搜索到时,搜索文件的颜色(因是rgb模式,设置的颜色不生效);字符搜索框光标的颜色|
|searchbar.notfinded.foreground|当input.searchbar.foreground.notfinded为空时,字符搜索框有内容,且内容没有搜索到时,搜索文字的颜色(因是rgb模式,设置的颜色不生效);字符搜索框光标的颜色|
|searchbar.quick_search_item.icon_selected|搜索栏下拉列表,当前选中项的颜色(颜色模式为反色的bgr)|
|searchbar.quick_search_item.icon|搜索栏下拉列表,未选中项的颜色(颜色模式为反色的bgr)|
|input.searchbar.foreground.notfinded|字符搜索框有内容,且内容没有搜索到时,搜索文字的颜色;字符搜索框光标的颜色|
|input.searchbar.foreground|字符搜索框没有内容时,字符搜索框内的文字颜色;字符搜索框有内容,且内容被搜索到时,搜索文字的颜色;字符搜索框光标的颜色|

### 搜索下拉框

|名称							|描述					|
|-								|-						|
|inputValidation.infoBackground	|下拉框背景颜色			|
|inputList.hoverBackground		|鼠标滑过item背景颜色	|
|inputList.border				|下拉框边框颜色			|
|inputList.titleColor			|下拉框左边文字颜色		|
|inputList.foreground			|下拉框右边文字颜色		|

### 文本框


|名称				|描述					|
|-					|-						|
|input.background	|文本框背景颜色			|
|input.foreground	|文本框前景颜色			|
|input.border		|文本框边框颜色			|
|focusBorder		|文本框有焦点时边框颜色	|

### 列表控件/树控件区

|名称								|描述							|
|-									|-								|
|list.foreground					|前景颜色						|
|list.activeSelectionBackground		|选中条目背景颜色				|
|list.activeSelectionForeground		|选中条目前景颜色				|
|list.hoverBackground				|鼠标滑过背景颜色				|
|list.highlightForeground			|高亮时前景颜色					|
|list.inactiveSelectionBackground	|未选中条目背景颜色				|
|list.inactiveSelectionForeground	|未选中条目前景颜色				|
|explorer.file.status.modified		|svn/git项目修改状态前景色		|
|explorer.file.status.untracked		|svn/git项目未跟踪状态前景色	|
|explorer.file.status.added			|svn/git项目添加状态前景色		|
|explorer.file.status.conflicted	|svn/git项目冲突状态前景色		|
|explorer.file.status.rename		|svn/git项目重命名状态前景色	|
|explorer.file.status.marktext		|svn/git项目标记前景色			|

### 文件资源管理器

|名称				|描述		|
|-					|-			|
|sideBar.background	|背景颜色	|
|sideBar.border		|边框颜色	|

### 标签卡

|名称								|描述									|
|-									|-										|
|editorGroupHeader.tabsBackground	|tabs背景颜色							|
|tab.activeBackground				|选中时的背景颜色							|
|tab.border							|边框颜色								|
|tab.inactiveBackground				|未选中时的背景颜色						|
|tab.hoverBackground				|鼠标滑过时的背景颜色						|
|tab.inactiveForeground				|未选中时的前景颜色						|
|tab.activeBorder					|选中时的边框颜色							|
|tab.activeForeground				|选中时的前景颜色							|
|tab.unfocusedInactiveForeground	|未选中分栏里未选中标签的前景颜色			|
|tab.unfocusedHoverBackground		|未选中分栏里鼠标滑过未选中标签的背景颜色	|
|tab.unfocusedActiveForeground		|未选中分栏里选中标签的前景颜色			|

### 分栏


|名称							|描述						|
|-								|-							|
|editorGroup.border				|分割线颜色					|
|tab.unfocusedActiveForeground	|未激活分组里选中标签前景色	|

### 按钮

|名称					|描述					|
|-						|-						|
|button.background		|按钮背景颜色			|
|button.foreground		|按钮前景颜色			|
|button.hoverBackground	|鼠标滑过按钮背景颜色	|

### 代码助手


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
