# 如何卸載HBuilderX

## Windows卸載HBuilderX@windows

1. 刪除數據目錄和及註冊表，進入HBuilderX安裝目錄，找到`reset.bat`，點擊運行。此操作可以刪除HBuilderX數據目錄及註冊表。
2. 刪除程序目錄。windows, HBuilderX安裝包是zip包，直接將解壓的文件夾刪除即可。
3. 如桌面有HBuilderX快捷方式，直接刪除桌面快捷方式即可

## MacOSX刪除HBuilderX@macosx

#### 1. 刪除應用程序

> 如下圖。MacOSX，打開`訪達`，左側點擊`應用程序`，進入應用程序窗口，找到HBuilderX，右鍵菜單，點擊`移到廢紙簍`

<img src="/static/snapshots/mac_uninstall.png" style="zoom: 50%; border:1px solid #eee; border-radius: 20px;" />

#### 2. 刪除數據目錄

打開操作系統終端，輸入如下命令：

```
open $HOME/Library/Application\ Support/
```

此時會打開`訪達`, 在訪達窗口，找到`HBuilderX`目錄，右鍵菜單，點擊刪除。
