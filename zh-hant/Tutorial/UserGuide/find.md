# 查找替換

- 查找文件
- 查找替換字符串（按文件、按項目、按目錄），且支持正則
- 查找索引符號

## 快速查找文件

`ctrl+p (MacOSX: ⌘P)`，可以定位到搜索框，輸入文件名，快速打開任何文件。 

文件名後，敲擊空格，輸入項目名稱，可以只搜索指定項目下文件。

<img src="/static/snapshots/tutorial/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

按住`Ctrl+Tab`, 可以查看在編輯器中，打開的所有文件的列表。

<img src="/static/snapshots/tutorial/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找索引符號

在當前文件，按下`Ctrl + Shift + O`, 可以查找索引符號。

<img src="/static/snapshots/tutorial/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## 查找字符串

- 範圍：字符串查找，支持`按當前文件`、`按目錄`、`按左側選中`、`按當前項目`、`按所有項目`進行搜索查找。
- 功能：字符串查找，支持`整詞匹配`、`正則匹配`、`大小寫匹配`，且支持`排除`特定目錄

<img src="/static/snapshots/tutorial/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## 區域內搜索

> 僅支持HBuilderX 3.1.15+版本

HBuilderX，支持選中一段文字，在頂部搜索欄選中區域搜索【Ctrl+Shift+f】，可以在特殊背景區內`搜索`、`替換`、`全選相同詞`

如下動畫，區域搜索，選中區域背景會變成黃色。按`esc`鍵，退出區域搜索。

<img src="/static/snapshots/tutorial/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>