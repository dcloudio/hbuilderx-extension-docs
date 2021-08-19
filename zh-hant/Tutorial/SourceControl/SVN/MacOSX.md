# MacOSX SVN使用手冊

在HBuilderX內，使用SVN，需要先安裝SVN插件，SVN插件調用的是`外部SVN命令行工具`，因此也需要安裝svn命令工具。

## SVN命令行工具

打開`操作系統終端`，輸入如下命令, 如未安裝brew，請先安裝[Homebrew](https://brew.sh/index_zh-cn)
```
brew install subversion

# 安裝完成後，輸入如下命令，測試是否安裝成功。
which svn
```

## HBuilderX SVN插件

HBuilderX頂部菜單，【工具】-> 【插件安裝】，即可打開插件安裝窗口，如下圖所示，找到SVN插件，點擊【安裝】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_macosx.jpg" style="zoom:40%; border-radius: 20px;border: 1px solid #eee;" />

## SVN操作菜單

項目管理器，選中項目，右鍵菜單，即可看到SVN相關操作菜單。

<img src="/static/snapshots/tutorial/source_control/svn_macosx_menu.png" style="zoom:50%;border-radius: 5px;border: 1px solid #eee;" />

## SVN 提交

1. 在要提交的文件、或目錄、或項目上，右鍵菜單，點擊【SVN 提交】
2. 在彈窗中，輸入提交內容，點擊【SVN 提交】按鈕。

<img src="/static/snapshots/tutorial/source_control/svn_macosx_ci.jpg" style="zoom:45%; border: 1px solid #eee;" />

## SVN 查看日誌

項目上，右鍵菜單 【SVN】->【查看日誌】

<img src="/static/snapshots/tutorial/source_control/svn_macosx_log.jpg" style="zoom:50%; border: 1px solid #eee;border-radius: 20px;" />

## SVN 快捷鍵配置

1. 點擊菜單【工具】-->【自定義快捷鍵】
2. 文檔左側底部可看到所有SVN命令

```
//svn更新
//{"key":"","command":"ExternalCommand:SVN_UPDATE"},
//svn增加文件(單個文件)
//{"key":"","command":"ExternalCommand:SVN_ADD"},
//svn刪除當前文件(單個文件)
//{"key":"","command":"ExternalCommand:SVN_REMOVE"},
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