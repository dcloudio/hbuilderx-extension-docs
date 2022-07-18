HBuilderX對md提供了強大支持，是有史以來最強大、最簡潔、最高效的markdown書寫工具。

下載HBuilderX，點菜單幫助-markdown語法說明，會打開一個md文件，裏面詳細演示了HBuilderX對markdown的強化。
**推薦在那裏實際體驗**

## 強大的Emmet支持、及快捷鍵支持

- 標題:  敲`h2+Tab`即可生成二級標題
- 圖片: `img`後敲`Tab`
- 鏈接: `a`後敲`Tab`
- 表格: `table3*3`後敲`Tab`，表示生成3行3列的表格，行首生效
- 分割線: `hr`後敲`Tab`
- 代碼塊: `code`後敲`Tab`，行首生效
- `day`後敲`Tab`，當前日期。注意day需在行首或前面有空格
- `time`後敲`Tab`，當前時間。注意time需在行首或前面有空格
- 文字加粗: `b`後敲`Tab`
- 文字傾斜: `i`後敲`Tab`
- 註釋：快捷鍵`Ctrl+/`快速插入註釋

## 強大的智能粘貼

- 圖片: 支持智能粘貼，粘貼剪切板裏的圖形時會自動保存爲本md文檔的附件
- 鏈接: 支持智能粘貼，粘貼URL會自動變成超鏈接格式，粘貼本地文件進來也會自動創建引用鏈接
- 表格: 支持從excel、wps、word、number的表格中複製粘貼表格進來

## 強大的智能雙擊

- 標題: 雙擊`#號`可選中整個標題段落
- 有序列表: `雙擊`前面的數字，可重新對數字排序，修正序號錯誤
- 代碼塊: `雙擊`語法區開頭，即`!左側`，選中包含定義符的整段文字
- 註釋: `雙擊`註釋首尾的定義符，選中整段註釋
- 鏈接: `雙擊`語法區開頭，即`[`左側，選中包含定義符的整段文字
- 圖片: `雙擊`語法區開頭，即`!`左側，選中包含定義符的整段文字

## 強大的整理功能

- 表格：支持`Ctrl+K`可以自動整理表格格式

<img src="/static/snapshots/tutorial/markdown/markdown_table_format.gif" style="border: 1px solid #eee;"/>

## 直观的文档结构图

HBuilderX Markdown文件，也支持显示文档结构图（大纲视图）。

windows快捷键: `Alt+w`; MacOSX快捷键：`Ctrl+w`

<img src="/static/snapshots/tutorial/markdown/markdown_outline.jpg" style="zoom: 45%;border-radius: 20px;border: 1px solid #eee;"/>

## 实用的任务列表

任务列表非常实用，管理待办、已办非常便利。

- [ ] 任务列表-未完成任务 `快捷键：Ctrl+Alt+[`
- [x] 任务列表-已完成任务 `快捷键：Ctrl+Alt+]`

## markdown一鍵分享

使用markdown也有一個重要的問題，那就是圖片的存儲，markdown文件要用到圖片時必須是一個鏈接，在不使用圖牀的情況下，編輯上傳圖片太麻煩。

HBuilderX 2.8.8,  推出了 MarkDown一鍵分享功能。使用uniCloud作爲圖牀 什麼是[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，可靠、安全、簡單易用、免費。

markdown一鍵分享，顧名思義是在HBuilderX中寫好的markdown文檔，可以簡單通過編輯器右鍵【一鍵分享】菜單或者快捷鍵上傳到雲端，並生成分享鏈接，並且完全免費！

文檔引用到本地圖片會自動解析一併上傳到雲端。

[markdown一鍵分享](/Tutorial/extension/markdown_share)

## 錨點轉到定義@goto-definition

HBuilderX 3.5.2起，Markdown支持`[]()`文件名+錨點轉到定義, 且支持`@`別名。

<img src="/static/snapshots/tutorial/markdown/file_goto_definition.png" class="hd-img" />

## 雲同步筆記的技巧

#### 雲同步工具

首先推薦一個雲同步工具，微軟的onedrive。[https://skydrive.live.com/](https://skydrive.live.com/)

在dropbox被牆後，onedrive成爲最佳選擇，免費、穩定、安全、多平臺。

win10平臺自帶onedrive客戶端，其他平臺可在上述網址下載安裝。（一定要安裝客戶端，web版也需要翻牆）

配置onedrive賬戶後，在本機我的電腦上會出現一個onedrive文件夾，在裏面新建一個“note”的文件夾（名字可自定），然後把HBuilderX寫的md都存到這個文件夾中。

每次在HBuilderX中保存md文件後，onedrive會自動同步這個文件到雲端。

使用其他電腦或手持設備後，也會自動看到這個文檔。

onedrive手機端不支持直接查看markdown，可另行安裝手機App，iOS上推薦使用mweb，安卓上推薦使用錘子便籤。


#### svn、git同步

本機裝好node後，利用watch監聽文件變化，發現文件修改可自動提交到svn或git。

團隊共享的待辦事項同步可以用這種方式處理。

在DCloud內部，個人文檔大多采用方式1，公司協作文檔均採用方式2。並行使用。

這套方案適用於pc端編寫，手機端查看的場景。這個場景下，HBuilderX+markdown擁有遠勝於evernote、OneNote等筆記軟件的體驗。啓動更快捷、編寫更高效、閱讀更美觀。

但如果經常在手機端編寫並同步的話，還是雲筆記本軟件更合適。

總看電視和刷短視頻，會讓人變傻。

打開HBuilderX，在鍵盤上敲出凝結思緒的markdown，會讓你變聰明。