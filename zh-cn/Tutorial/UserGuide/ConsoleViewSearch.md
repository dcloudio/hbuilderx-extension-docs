# 控制台搜索@consoleview-search

<!--
keyword:查找,控制台,find,consoleview
-->

>HBuilderX 4.61-alpha新增了控制台搜索功能，可以在底部视图的控制台内搜索日志内容，目前仅支持字符搜索匹配

本功能提供在程序运行时实时搜索控制台输出日志的能力，支持动态更新匹配项、多快捷键操作及独立搜索状态管理，帮助用户快速定位关键信息

功能入口：焦点在控制台时键盘按下`ctrl+F`(windows)/`command+F`(mac)，或者在控制台点击鼠标右键，选择搜索，即可唤起搜索工具栏

## 即时动态搜索@consoleview-search-dynamic
​实时更新：在日志持续输出过程中，按下`Enter/Shift+Enter`均可自动刷新搜索结果，同步追踪最新内容

​无鼠标交互：搜索过程可以完全不使用鼠标，`Ctrl+F/Command+F`唤起搜索工具栏，输入搜索文本后按下`Enter/Shift+Enter`即可查找下一个/上一个结果，按下`Esc`即可退出搜索；也可以选中文本后快捷键唤起搜索工具栏进行交互

<img src="/static/snapshots/tutorial/find/consoleview-search.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />

## 独立会话管理@consoleview-search-indepent-session
多控制台支持：每个控制台实例独立存储搜索状态（含：关键词、结果列表、当前定位索引）

智能上下文切换：当切换不同控制台标签时，自动加载对应搜索状态并重新渲染高亮

<img src="/static/snapshots/tutorial/find/consoleview-search2.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />
