# 控制台搜索@consoleview-search

<!--
keyword: 查找,控制台,find,consoleview
-->

> HBuilderX 4.61-alpha新增了控制台搜索功能，可以在底部視圖的控制台內搜索日誌內容，目前僅支持字元搜索匹配

本功能提供在程式運行時實時搜索控制台輸出日誌的能力，支援動態更新匹配項、多快捷鍵操作及獨立搜索狀態管理，幫助使用者快速定位關鍵資訊

功能入口：焦點在控制台時鍵盤按下`ctrl+F`(windows)/`command+F`(mac)，或者在控制台點擊滑鼠右鍵，選擇搜索，即可喚起搜索工具列

## 即時動態搜索@consoleview-search-dynamic
​即時更新：在日誌持續輸出過程中，按下`Enter/Shift+Enter`均可自動刷新搜索結果，同步追蹤最新內容

​無滑鼠交互：搜索過程可以完全不使用滑鼠，`Ctrl+F/Command+F`喚起搜索工具列，輸入搜索文字後按下`Enter/Shift+Enter`即可查找下一個/上一個結果，按下`Esc`即可退出搜索；也可以選中文字後快捷鍵喚起搜索工具列進行交互

<img src="/static/snapshots/tutorial/find/consoleview-search.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />

## 獨立會話管理@consoleview-search-indepent-session
多控制台支援：每個控制台實例獨立存儲搜索狀態（含：關鍵詞、結果列表、當前定位索引）

智能上下文切換：當切換不同控制台標籤時，自動加載對應搜索狀態並重新渲染高亮

<img src="/static/snapshots/tutorial/find/consoleview-search2.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />
