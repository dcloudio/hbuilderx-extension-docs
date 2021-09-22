# 主題顏色配置規則

顏色配置命名規則與vscode相同，方便從vscode提取外觀主題。

推薦使用主題配置插件: [自定義主題插件](https://ext.dcloud.net.cn/plugin?id=2684)

### 文本編輯區

|名稱				|描述			|
|-					|-				|
|editor.foreground	|編輯區前景顏色	|
|editor.background	|編輯區背景顏色	|
|editor.caret|光標顏色|
|editor.caretLine|光標所在行的行顏色|
|editor.hyperlink|超鏈接激活時的文字顏色|
|editor.indentguide|縮進導軌的顏色|
|editor.indicator.matchtag|配對括號的突出顯示顏色|
|editor.indicator.sameword|相同詞彙的突出顯示顏色|
|editor.linenumber|行號顏色|
|editor.selection|激活的選區顏色|
|editor.selectRegion|區域內搜索選區顏色|
|editor.whitespace|空白的顏色(包括TAB和SPACE)|
|editor.unactive_selection.background|未激活的選區顏色(分欄後在右側獲取選區,然後點擊左側編輯器)|
|editor.foldMarker.expanded.background|編輯器代碼摺疊圖標展開狀態背景色|
|editor.foldMarker.expanded.foreground|編輯器代碼摺疊圖標展開狀態前景色|
|editor.foldMarker.collapsed.background|編輯器代碼摺疊圖標摺疊狀態背景色|
|editor.foldMarker.collapsed.foreground|編輯器代碼摺疊圖標摺疊狀態前景色|

備註：editor.background之後的顏色，僅對3.2.7+版本生效。

#### 編輯區代碼默認顏色定義
> 自定義方式，將默認代碼區顏色配置拷貝到`settings.json`源碼視圖中自定義`"editor.tokenColorCustomizations"`節點下對應主題的`"rules"`節點下。

> 默認代碼區顏色定義參考：[代碼區顏色定義](/Tutorial/Other/themes_code.md)

舉例：
```json
//settings.json
"editor.tokenColorCustomizations": {
    "[Default]": {//綠柔
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

### mac標題欄（只在mac os上生效）

|名稱						|描述		|
|-							|-			|
|titleBar.activeBackground	|背景顏色	|
|titleBar.activeForeground	|前景顏色	|

### windows菜單欄

> 以下兩項，僅對windows 3.2.7+版本生效。

|名稱						|描述		|
|-							|-			|
|menubar.background	|頂部菜單欄背景顏色	|
|menubar.foreground	|頂部菜單欄前景顏色	|

### 工具欄


|名稱					|描述							|
|-						|-								|
|toolBar.background		|工具欄背景顏色					|
|toolBar.border			|工具欄邊框顏色					|
|toolBar.hoverBackground|工具欄上圖標被選中時的背景顏色	|

### 搜索框 

> 以下6項，僅對3.2.7+版本生效

|名稱						|描述		|
|-							|-			|
|searchbar.foreground|當input.searchbar.foreground爲空時,字符搜索框沒有內容時,字符搜索框內的文字顏色(顏色模式爲反色的bgr);當input.searchbar.foreground爲空時,字符搜索框有內容,且內容被搜索到時,搜索文件的顏色(因是rgb模式,設置的顏色不生效);字符搜索框光標的顏色|
|searchbar.notfinded.foreground|當input.searchbar.foreground.notfinded爲空時,字符搜索框有內容,且內容沒有搜索到時,搜索文字的顏色(因是rgb模式,設置的顏色不生效);字符搜索框光標的顏色|
|searchbar.quick_search_item.icon_selected|搜索欄下拉列表,當前選中項的顏色(顏色模式爲反色的bgr)|
|searchbar.quick_search_item.icon|搜索欄下拉列表,未選中項的顏色(顏色模式爲反色的bgr)|
|input.searchbar.foreground.notfinded|字符搜索框有內容,且內容沒有搜索到時,搜索文字的顏色;字符搜索框光標的顏色|
|input.searchbar.foreground|字符搜索框沒有內容時,字符搜索框內的文字顏色;字符搜索框有內容,且內容被搜索到時,搜索文字的顏色;字符搜索框光標的顏色|

### 搜索下拉框

|名稱							|描述					|
|-								|-						|
|inputValidation.infoBackground	|下拉框背景顏色			|
|inputList.hoverBackground		|鼠標滑過item背景顏色	|
|inputList.border				|下拉框邊框顏色			|
|inputList.titleColor			|下拉框左邊文字顏色		|
|inputList.foreground			|下拉框右邊文字顏色		|

### 文本框


|名稱				|描述					|
|-					|-						|
|input.background	|文本框背景顏色			|
|input.foreground	|文本框前景顏色			|
|input.border		|文本框邊框顏色			|
|focusBorder		|文本框有焦點時邊框顏色	|

### 列表控件/樹控件區

|名稱								|描述							|
|-									|-								|
|list.foreground					|前景顏色						|
|list.activeSelectionBackground		|選中條目背景顏色				|
|list.activeSelectionForeground		|選中條目前景顏色				|
|list.hoverBackground				|鼠標滑過背景顏色				|
|list.highlightForeground			|高亮時前景顏色					|
|list.inactiveSelectionBackground	|未選中條目背景顏色				|
|list.inactiveSelectionForeground	|未選中條目前景顏色				|
|explorer.file.status.modified		|svn/git項目修改狀態前景色		|
|explorer.file.status.untracked		|svn/git項目未跟蹤狀態前景色	|
|explorer.file.status.added			|svn/git項目添加狀態前景色		|
|explorer.file.status.conflicted	|svn/git項目衝突狀態前景色		|
|explorer.file.status.rename		|svn/git項目重命名狀態前景色	|
|explorer.file.status.marktext		|svn/git項目標記前景色			|

### 文件資源管理器

|名稱				|描述		|
|-					|-			|
|sideBar.background	|背景顏色	|
|sideBar.border		|邊框顏色	|

### 標籤卡

|名稱								|描述									|
|-									|-										|
|editorGroupHeader.tabsBackground	|tabs背景顏色							|
|tab.activeBackground				|選中時的背景顏色							|
|tab.border							|邊框顏色								|
|tab.inactiveBackground				|未選中時的背景顏色						|
|tab.hoverBackground				|鼠標滑過時的背景顏色						|
|tab.inactiveForeground				|未選中時的前景顏色						|
|tab.activeBorder					|選中時的邊框顏色							|
|tab.activeForeground				|選中時的前景顏色							|
|tab.unfocusedInactiveForeground	|未選中分欄裏未選中標籤的前景顏色			|
|tab.unfocusedHoverBackground		|未選中分欄裏鼠標滑過未選中標籤的背景顏色	|
|tab.unfocusedActiveForeground		|未選中分欄裏選中標籤的前景顏色			|

### 分欄


|名稱							|描述						|
|-								|-							|
|editorGroup.border				|分割線顏色					|
|tab.unfocusedActiveForeground	|未激活分組裏選中標籤前景色	|

### 按鈕

|名稱					|描述					|
|-						|-						|
|button.background		|按鈕背景顏色			|
|button.foreground		|按鈕前景顏色			|
|button.hoverBackground	|鼠標滑過按鈕背景顏色	|

### 代碼助手


|名稱									|描述						|
|-										|-							|
|editorSuggestWidget.background			|助手彈窗背景顏色			|
|editorSuggestWidget.border				|助手彈窗邊框顏色			|
|editorSuggestWidget.selectedBackground	|助手彈窗選中條目時背景顏色	|
|editorSuggestWidget.link				|助手鍊接顏色				|


### 文檔結構圖


|名稱				|描述			|
|-					|-				|
|outlineBackground	|文檔結構背景顏色	|

### 滾動條

|名稱							|描述					|
|-								|-						|
|scrollbarSlider.background		|滾動條背景顏色			|
|scrollbarSlider.hoverBackground|鼠標滑過滾動條背景顏色	|

### 預覽按鈕

|名稱										|描述					|
|-											|-						|
|extensionButton.prominentBackground		|背景顏色				|
|extensionButton.prominentForeground		|前景顏色				|
|extensionButton.border						|邊框顏色				|
|extensionButton.prominentHoverBackground	|鼠標滑過時的背景顏色	|
|extensionButton.checkColor					|選中時的前景顏色		|


### 設置


|名稱								|描述						|
|-									|-							|
|editor.background					|設置頁面背景顏色			|
|inputOption.activeBorder			|文本框有焦點時邊框顏色		|
|settings.textInputBackground		|文本框背景顏色				|
|settings.textInputBorder			|文本框邊框顏色				|
|settings.textInputDisableBackground|文本框不可用背景顏色		|
|settings.dropdownForeground		|combobox下拉列表前景顏色	|
|settings.dropdownBorder			|combobox下拉列表邊框顏色	|
|settings.dropdownBackground		|combobox下拉列表背景顏色	|
|settings.dropdownListBorder		|combobox item邊框顏色		|

### 圖片預覽


|名稱					|描述			|
|-						|-				|
|imageview.background	|淺色方格顏色	|
|imageview.foreground	|深色方格顏色	|

### 彈窗提示框

|名稱									|描述					|
|-										|-						|
|notifications.border					|彈窗邊框顏色			|
|notifications.background				|彈窗背景顏色			|
|notifications.foreground				|彈窗前景顏色			|
|notification.buttonBorder				|彈窗按鈕邊框顏色		|
|notification.buttonBackground			|彈窗按鈕背景顏色		|
|notification.buttonForeground			|彈窗按鈕前景顏色		|
|notification.buttonPressedForeground	|彈窗按鈕按下前景顏色	|
|notification.buttonPressedBackground	|彈窗按鈕按下背景顏色	|
|notificationLink.foreground			|彈窗鏈接顏色			|

### 文件對比

|名稱					|描述											|
|-						|-												|
|filediff.line.add		|添加行背景顏色									|
|filediff.line.delete	|刪除行背景顏色									|
|filediff.inline.base	|行內比較和右邊行有不同字符，左邊字符顯示顏色	|
|filediff.inline.modify	|行內比較和左邊行有不同字符，右邊字符顯示顏色	|

### 控制檯


|名稱						|描述				|
|-							|-					|
|terminal.background		|終端背景顏色		|
|console.background | 控制檯背景顏色|
|panelTitle.activeForeground|tab選中時的前景顏色|
|debug.foreground			|前景顏色			|
|console.ad|控制檯廣告信息文字顏色|
|console.error|控制檯錯誤信息文字顏色|
|console.foreground|控制檯窗口前景顏色顏色(控制檯窗口文字顏色)|
|console.success|控制檯成功信息文字顏色|
|console.time|控制檯時間信息文字顏色|
|console.warn|控制檯警告信息文字顏色|

備註：debug.foreground之後的顏色，僅對3.2.7+版本生效。

### 查看svn/git日誌

在svn/git項目上點擊右鍵。只在mac上生效

|名稱							|描述					|
|-								|-						|
|logviewButton.background		|按鈕背景顏色			|
|logviewButton.border			|按鈕邊框顏色			|
|logviewButton.hover			|鼠標滑過按鈕背景顏色	|
|logviewButton.disable			|按鈕不可用背景顏色		|
|logviewButtonDisable.border	|按鈕不可用邊框顏色		|
|logview.file.action.modified	|選中已修改文件前景色	|
|logview.file.action.deleted	|選中已刪除文件前景色	|
|logview.file.action.added		|選中已增加文件前景色	|
|logview.file.action.rename		|選中已重命名文件前景色	|


### 狀態欄

|名稱					|描述			|
|-						|-				|
|statusBar.background	|狀態欄背景顏色	|
|statusBar.foreground	|狀態欄前景顏色	|


### 右側迷你地圖

|名稱					|描述			|
|-						|-				|
|minimap.handle.background	|迷你地圖滑塊背景	|
