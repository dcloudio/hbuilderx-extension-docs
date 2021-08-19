# MacOSX Git使用手冊

## 前言

在HBuilderX內，使用Git，需要先安裝HBuilderX Git插件。

HBuilderX頂部菜單，【工具】-> 【插件安裝】，即可打開插件安裝窗口，如下圖所示，找到Git插件，點擊【安裝】即可。

<img src="/static/snapshots/tutorial/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 克隆或導入項目

- 頂部菜單【文件】-> 【導入】-> 【從Git導入】，即可打開導入窗口
- 或從項目管理器，空白處，右鍵菜單【導入】-> 【從Git導入】

<img src="/static/snapshots/tutorial/source_control/git_macosx_clone.jpg" style="zoom:45%" />

## Git操作菜單

項目管理器，選中項目，右鍵菜單，即可看到git相關操作菜單。

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull拉取

項目管理器，選中項目，右鍵菜單 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull.png" style="zoom:50%; border: 1px solid #eee;" />

## Push推送

項目管理器，選中項目，右鍵菜單 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push.png" style="zoom:50%; border: 1px solid #eee;" />

## 提交

1. 在要提交的文件、或目錄、或項目上，右鍵菜單，點擊【提交】
2. 在彈窗中，輸入提交內容，點擊【提交】按鈕。

<img src="/static/snapshots/tutorial/source_control/git_macosx_ac.jpg" style="zoom:45%; border: 1px solid #eee;" />

## 查看日誌

項目上，右鍵菜單 【Git】->【查看日誌】

<img src="/static/snapshots/tutorial/source_control/git_macosx_log.jpg" style="zoom:45%; border: 1px solid #eee;border-radius: 20px;" />

## 分支操作

- 新建分支：選中項目，右鍵菜單【Git】-> 【新建分支】
- 切換分支：選中項目，右鍵菜單【Git】-> 【切換分支】
- 刪除分支：選中項目，右鍵菜單【Git】-> 【刪除分支】
- 合併分支：選中項目，右鍵菜單【Git】-> 【合併分支】 

<img src="/static/snapshots/tutorial/source_control/git_macosx_branch.jpg" style="zoom:60%; border: 1px solid #eee;border-radius: 20px;" />

## 快捷鍵配置

1. 點擊菜單【工具】-->【自定義快捷鍵】
2. 文檔左側底部可看到所有git命令

```
//git拉取(pull)
//{"key":"","command":"ExternalCommand:GIT_PULL"},
//git推送
//{"key":"","command":"ExternalCommand:GIT_PUSH"},
//git刪除當前文件(單個文件)
//{"key":"","command":"ExternalCommand:GIT_REMOVE"},
//git增加文件(單個文件)
//{"key":"","command":"ExternalCommand:GIT_ADD"},
//git切換分支
//{"key":"","command":"ExternalCommand:GIT_CHECKOUT_BRANCH"},
//git文件狀態
//{"key":"","command":"ExternalCommand:GIT_STATUS"},
//git還原(reset)
//{"key":"","command":"ExternalCommand:GIT_RESET"}
```

挑選需要的命令複製到右側，配置上自己的快捷鍵
如：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"} 
]
```

## 問題：git xcrun錯誤

使用git時遇到的錯誤
```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

解決方案, 打開終端輸入如下命令：

```
xcode-select --install
```