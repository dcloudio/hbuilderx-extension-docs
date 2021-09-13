# Windows Git使用手冊

## 前言

在HBuilderX內，使用Git，需要先安裝Git插件，Git插件調用的是`外部Git工具`，因此也需要安裝`TortoiseGit`。

[TortoiseGit下載地址](https://tortoisegit.org/download/), 下載後，雙擊打開exe，按照提示完成安裝。

## 安裝 HBuilderX Git插件

HBuilderX頂部菜單，【工具】-> 【插件安裝】，即可打開插件安裝窗口，如下圖所示，找到Git插件，點擊【安裝】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## 克隆或導入項目

- 頂部菜單【文件】-> 【導入】-> 【從Git導入】，即可打開導入窗口
- 或從項目管理器，空白處，右鍵菜單【導入】-> 【從Git導入】

<img src="/static/snapshots/tutorial/source_control/git_windows_clone.png" style="zoom:70%" />

## Git操作菜單

項目管理器，選中項目，右鍵菜單，即可看到git相關操作菜單，點擊相關菜單，即可調起TortoiseGit。

> 備註：HBuilderX Git插件，都是調用TortoiseGit，因此本文不再詳細描述TortoiseGit操作教程。

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull拉取

項目管理器，選中項目，右鍵菜單 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull.png" style="zoom:50%; border: 1px solid #eee;" />

## Push推送

項目管理器，選中項目，右鍵菜單 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push.png" style="zoom:50%; border: 1px solid #eee;" />

**备注**：git push --force: 表示将目前自己本机的代码库推送到远端，并覆盖。请谨慎使用。

## 快捷鍵配置

1. 點擊菜單【工具】-->【自定義快捷鍵】
2. 文檔左側底部可看到所有git命令

```
//git拉取(pull)  
//{"key":"","command":"ExternalCommand:GIT_PULL"},  
//git提交  
//{"key":"","command":"ExternalCommand:GIT_COMMIT"},  
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
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"},  
  {"key":"command+i","command":"ExternalCommand:GIT_COMMIT"}  
]
```