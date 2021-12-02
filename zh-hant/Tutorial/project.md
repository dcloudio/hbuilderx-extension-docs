# 項目@project

使用HBuilderX，從創建項目開始吧。

下面將介紹項目創建、導入、關閉、創建別名、移除、重命名項目、重新識別項目類型、重新構建項目索引等操作。

## 導入項目/目錄@import

點擊頂部菜單【文件】【導入】，或點擊菜單【打開目錄】，即可導入項目到HBuilderX。

HBuilderX， 支持從`svn`、`Git`、`本地`導入項目。

svn、git導入項目，需要先安裝svn、git插件。

<img src="/static/snapshots/tutorial/project/project_import.png" style="zoom: 85%;" />

## 创建项目@CreateProjectWindows

> 本章节适用于HBuilderX 3.3.0+版本, 低版本HBuilderX新建项目请[参考](/Tutorial/history/project?id=CreateProjectWindows) 

HBuilderX支持多种项目类型，主要有：web项目、5+App项目、uni-app项目、wap2app、HBuilderX扩展插件等。[项目类型详细介绍](/Tutorial/Other/ProjectType)    

- 欢迎页面，点击`新建项目`
- 【工具栏】第一个图标
- 顶部菜单【文件 -> 新建 -> 项目】

<img src="/static/snapshots/tutorial/project/project_create.png" style="zoom: 49%;" />

## 關閉項目@close

當項目管理器，項目數量過多時，您可以`關閉項目`；

在項目管理器，選中項目，右鍵菜單，點擊【關閉項目】，即可將目移動到【已關閉項目】列表中。

當然，後期也可以從【已關閉項目】中，將需要的項目打開，移動到項目管理器。

<img src="/static/snapshots/tutorial/project/project_close.png" style="zoom: 85%;" />

## 項目別名@alias

HBuilderX，支持對項目創建或修改`別名`。

項目管理器，選中項目，右鍵菜單，點擊【修改項目別名】，即創建別名。

<img src="/static/snapshots/tutorial/project/project_alias.png" style="zoom: 85%;" />

## toolbar@toolbar

> HBuilderX 3.3.0+版本, 项目管理器视图toolbar 新增定位和折叠所有快捷功能

注意：将鼠标移动到HBuilderX项目管理器范围内，相关图标才会显示出来。

<img src="/static/snapshots/tutorial/project/project_toolbar.png" class="hd-img" />

## 其它操作@other

**移除項目**：您可以將項目，從項目管理器移除，或移動到回收站。

**重新識別項目類型**：某些情況下，HBuilderX沒有正確識別項目類型（比如uni-app項目，無法顯示運行菜單），導致相關菜單無法正確顯示，通過重新識別項目類型即可解決。[瞭解項目類型](/Tutorial/ProjectType)

**重新構建項目索引**：某些情況下，代碼提示異常（比如圖片路徑無法提示），通過`重新構建項目索引`即可解決。

## 與編輯器同步@sync

<p>項目管理器，右上角，點擊 <svg t="1631502274114" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24803" width="14" height="14"><path d="M873.8304 552.96h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96zM873.8304 307.2h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96zM873.8304 798.72h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96z" p-id="24804" fill="#707070"></path></svg> 圖標</svg>，即可設置編輯器同步功能</p>

<img src="/static/snapshots/tutorial/settings/sync.png" style="zoom: 50%;border: 1px solid #eee;" />