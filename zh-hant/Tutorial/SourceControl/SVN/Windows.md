# Windows SVN使用手冊

## 前言

在HBuilderX內，使用SVN，需要先安裝SVN插件，SVN插件調用的是`外部SVN工具`，因此也需要安裝`TortoiseSVN`。

[TortoiseSVN下載地址](https://tortoisesvn.net/downloads.html), 下載後，雙擊打開exe，按照提示完成安裝。

## 安裝 HBuilderX SVN插件

HBuilderX頂部菜單，【工具】-> 【插件安裝】，即可打開插件安裝窗口，如下圖所示，找到SVN插件，點擊【安裝】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## SVN操作菜單

項目管理器，選中項目，右鍵菜單，即可看到SVN相關操作菜單，點擊相關菜單，即可調起TortoiseSVN。

> 備註：HBuilderX SVN插件，都是調用TortoiseSVN，因此本文不再詳細描述TortoiseSVN操作教程。

<img src="/static/snapshots/tutorial/source_control/svn_windows_menu.png" style="border-radius: 5px;border: 1px solid #eee;" />

## 快捷鍵配置

1. 點擊菜單【工具】-->【自定義快捷鍵】
2. 文檔左側底部可看到所有SVN命令

```
//svn更新
//{"key":"","command":"ExternalCommand:SVN_UPDATE"},
//svn提交
//{"key":"","command":"ExternalCommand:SVN_COMMIT"},
//svn檢查修改內容
//{"key":"","command":"ExternalCommand:SVN_REPOSTATUS"},
//svn查看日誌
//{"key":"","command":"ExternalCommand:SVN_LOG"},
//svn刪除當前文件(單個文件)
//{"key":"","command":"ExternalCommand:SVN_REMOVE"},
//svn增加文件(單個文件)
//{"key":"","command":"ExternalCommand:SVN_ADD"},
//svn還原(revert)
//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

挑選需要的命令複製到右側，配置上自己的快捷鍵
如：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```