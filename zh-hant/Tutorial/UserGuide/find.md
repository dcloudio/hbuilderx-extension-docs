# 查找替換@find-replace

- 查找文件
- 查找替換字符串（按文件、按項目、按目錄），且支持正則
- 查找索引符號

## 正則表達式分組與反向引用@replace-group-by-regexp
正則表達式的捕獲組通過從左到右計算開括號來編號。比如`(A)(B(C))`中有四個分組：

|組號   	|組内容      |
|--	        |--	        |
|0			|(A)(B(C))	|
|1			|(A)		|
|2			|(B(C))		|
|3			|(C)		|

反向引用：在替換表達式中我們可以使用組的編號來引用查找表達式所捕獲到的文本内容(而非正則)。

hx反向引用使用反斜綫\加數字，使用示例如下：

```
查找表達式(輸入要查找的字符)：([A-Za-z\s]+)@(\w+\.io)
替換表達式(輸入要替換的字符)：email:(\1)@163.com\3
替換前内容：unicloud@dcloud.io
替換後内容：email:(unicloud)@163.com\3
```

## 快速查找文件@find-files

`ctrl+p (MacOSX: ⌘P)`，可以定位到搜索框，輸入文件名，快速打開任何文件。

文件名後，敲擊空格，輸入項目名稱，可以只搜索指定項目下文件。

<img src="/static/snapshots/tutorial/find/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

按住`Ctrl+Tab`, 可以查看在編輯器中，打開的所有文件的列表。

<img src="/static/snapshots/tutorial/find/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找索引符號@find-symbol

在當前文件，按下`Ctrl + Shift + O`, 可以查找索引符號。

<img src="/static/snapshots/tutorial/find/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找字符串@find-string

- 範圍：字符串查找，支持`按當前文件`、`按目錄`、`按左側選中`、`按當前項目`、`按所有項目`進行搜索查找。
- 功能：字符串查找，支持`整詞匹配`、`正則匹配`、`大小寫匹配`，且支持`排除`特定目錄

<img src="/static/snapshots/tutorial/find/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## 區域內搜索@find-in-selection

> 僅支持HBuilderX 3.1.15+版本

HBuilderX，支持選中一段文字，在頂部搜索欄選中區域搜索【Ctrl+Shift+f】，可以在特殊背景區內`搜索`、`替換`、`全選相同詞`

如下動畫，區域搜索，選中區域背景會變成黃色。按`esc`鍵，退出區域搜索。

<img src="/static/snapshots/tutorial/find/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>
