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
|editor.unactive_selection.background|Background color of inactive selection|
|editor.foldMarker.expanded.background|Background color of the code editor from collapsed to expanded state |
|editor.foldMarker.expanded.foreground|Foreground color of the code editor from collapsed to expanded state|
|editor.foldMarker.collapsed.background|Background color of the code editor in the collapsed state|
|editor.foldMarker.collapsed.foreground|Foreground color of the code editor in the collapsed state|

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
|menubar.background	|Background color of top navigation	|
|menubar.foreground	|Foreground color of top navigation	|

### Toolbar


|Name					|Description							|
|-						|-								|
|toolBar.background		|Background color of toolbar					|
|toolBar.border			|Border color of toolbar					|
|toolBar.hoverBackground|Background color of the icon when hovering over the icon	|

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
|inputValidation.infoBackground	|Background color of dropdown box		|
|inputList.hoverBackground		|Background color when the mouse hovers over the list item	|
|inputList.border				|Border color of dropdown box		|
|inputList.titleColor			|Search title color of dropdown box		|
|inputList.foreground			|Search text color of dropdown box	|

### Text box


|Name				|Description					|
|-					|-						|
|input.background	|Background color of text box		|
|input.foreground	|Foreground color of text box			|
|input.border		|Border color of text box			|
|focusBorder		|Border color when the text box has focus	|

### List component/Tree component

|Name								|Description							|
|-									|-								|
|list.foreground					|Foreground color	of list component					|
|list.activeSelectionBackground		|Background color of selected list item			|
|list.activeSelectionForeground		|Foreground color of selected list item			|
|list.hoverBackground				|Background color when the mouse hovers over the list item 			|
|list.highlightForeground			|Foreground color when the item is highlighted					|
|list.inactiveSelectionBackground	|Background color of unselected items 				|
|list.inactiveSelectionForeground	|Foreground color of unselected items				|
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
|editorGroupHeader.tabsBackground	|Background color of tabs							|
|tab.activeBackground				|Background color of selected tab							|
|tab.border							|Border color of tab							|
|tab.inactiveBackground				|Background color of unselected tabs						|
|tab.hoverBackground				|Background color when the mouse hovers over the tab |
|tab.inactiveForeground				|Foreground color of unselected tabs						|
|tab.activeBorder					|Border color of selected tab							|
|tab.activeForeground				|Foreground color of selected tab					|
|tab.unfocusedInactiveForeground	|Foreground color of the unselected tab in the unfocused column			|
|tab.unfocusedHoverBackground		|Background color when the mouse hovers over unselected tab in the unfocused column|
|tab.unfocusedActiveForeground		|Foreground color of selected tab the unfocused column			|

### Columns


|Name							|Description						|
|-								|-							|
|editorGroup.border				|Dividing line color					|
|tab.unfocusedActiveForeground	|Foreground color of selected tab in unfocused column	|

### Button

|Name					|Descritpion					|
|-						|-						|
|button.background		|Background color of button	|
|button.foreground		|Foreground color of button	|
|button.hoverBackground	|Background color when the mouse hovers over button	|

### Code assistant


|Name									|Description						|
|-										|-							|
|editorSuggestWidget.background			|Background color of editor widget			|
|editorSuggestWidget.border				|Border color of editor widget		|
|editorSuggestWidget.selectedBackground	|Background color of selected item in editor widget	|
|editorSuggestWidget.link				|Hyperlink color in editor widget			|


### Outline 


|Name				|Description			|
|-					|-				|
|outlineBackground	|Background color of outline	|

### Scroll Bar

|Name							|Description					|
|-								|-						|
|scrollbarSlider.background		|Background color of scroll bar			|
|scrollbarSlider.hoverBackground|Background color when the mouse hovers over scroll bar	|

### Preview Button

|Name										|Description					|
|-											|-						|
|extensionButton.prominentBackground		|Background color			|
|extensionButton.prominentForeground		|Foreground color				|
|extensionButton.border						|Border color				|
|extensionButton.prominentHoverBackground	|Background color when the mouse hovers over it	|
|extensionButton.checkColor					|Foreground color after it was clicked		|


### Settings


|Name								|Description					|
|-									|-							|
|editor.background					|Background color of editor		|
|inputOption.activeBorder			|Border color when the input box has focus|
|settings.textInputBackground		|Background color of input field				|
|settings.textInputBorder			|Border color of input field				|
|settings.textInputDisableBackground|Background color of the disabled input field	|
|settings.dropdownForeground		|Foreground color of dropdown box	|
|settings.dropdownBorder			|Border color of dropdown box	|
|settings.dropdownBackground		|Background color of dropdown box	|
|settings.dropdownListBorder		|Boder color of dropdown list item		|

### Image Preview


|Name					|Description			|
|-						|-				|
|imageview.background	|Background color of image view	|
|imageview.foreground	|Foreground color of image view|

### Popup Window

|Name								|Description					|
|-										|-						|
|notifications.border					|Border color of popup window		|
|notifications.background				|Background color of popup window		|
|notifications.foreground				|Foreground color of popup window		|
|notification.buttonBorder				|Border color of button on popup window	|
|notification.buttonBackground			|Background color of button on popup window	|
|notification.buttonForeground			|Foreground color of button on popup window	|
|notification.buttonPressedForeground	|Foreground color when press button on popup window	|
|notification.buttonPressedBackground	|Background color when press button on popup window|
|notificationLink.foreground			|Hyperlink color on popup window			|

### File Compare

|Name					|Description											|
|-						|-												|
|filediff.line.add		|Background color when add line								|
|filediff.line.delete	|Background color when delete line								|
|filediff.inline.base	|Font color of left column if there is some differences in the file comparison	|
|filediff.inline.modify	|Font color of right column if there is some differences in the file comparison	|

### Console


|Name						|Description				|
|-							|-					|
|terminal.background		|Background color of terminal		|
|console.background | Background color of console|
|panelTitle.activeForeground|Foreground color of selected tab|
|debug.foreground			|Foreground color			|
|console.ad|Text color of Ad in the console|
|console.error|Text color of error message in the console|
|console.foreground|Text color of the console dialog|
|console.success|Text color of success message in the console|
|console.time|Text color of time message in the console|
|console.warn|Text color of warning message in the console|

Note: The settings after debug.forground are supported from 3.2.7+.

### svn/git log

在svn/git项目上点击右键。只在mac上生效

|Name							|Description					|
|-								|-						|
|logviewButton.background		|Background color of logview button			|
|logviewButton.border			|Border color of logview button	|
|logviewButton.hover			|Background color when the mouse hovers over logview button	|
|logviewButton.disable			|Background color of the disabled logview button		|
|logviewButtonDisable.border	|Border color of the disabled logview button		|
|logview.file.action.modified	|File name color of modified file 	|
|logview.file.action.deleted	|File name color of deleted file |
|logview.file.action.added		|File name color of added file|
|logview.file.action.rename		|File name color after rename file	|


### Status Bar

|Name					|Description			|
|-						|-				|
|statusBar.background	|Background color of status bar	|
|statusBar.foreground	|Foreground color of status bar|


### Mini Map

|Name					|Description			|
|-						|-				|
|minimap.handle.background	|Background color of mini map	|
