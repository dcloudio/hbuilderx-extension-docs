> `本文檔僅適用於HBuilderX 2.7.12+版本`

## 1. sftp/ftp插件簡介

HBuilderX 2.7.12+版本，優化了SFTP/FTP插件

[SFTP/FTP插件市場插件地址](https://ext.dcloud.net.cn/plugin?id=2038)

此插件是vscode中流行的ftp插件，因HBuilderX兼容vscode的部分插件生態，也可以在HBuilderX中使用。
- 使用此插件，可將本地工作區文件，與FTP服務器或linux服務器文件同步。
- 支持`ftp/sftp`協議
- 支持遠程文件目錄`瀏覽`、`上傳`、`下載`、`刪除`
- 支持`自動保存上傳`

## 2. sftp/ftp使用介紹

使用步驟：

1. 如下圖，在項目管理器，新建一個空目錄或空項目，然後選中
2. 右鍵菜單，點擊【Ftp: 創建連接配置】
3. 系統自動創建`.ftp/ftp-sync.json`配置文件
4. 編輯`ftp-sync.json`, 填寫`host（ip）`、`username（用戶名）`、`password（密碼）`、`port（端口）`、`protocol（協議）`
5. 填寫完配置文件，右鍵菜單，點擊【Ftp: 瀏覽遠程文件】
6. 選擇文件目錄，進行`上傳`、`下載`、`刪除`操作

### 2.1 創建ftp/sftp配置文件

<img src="/static/snapshots/tutorial/ftp1.gif" style="zoom:80%" />

### 2.2 同步目錄

- 從遠程同步到本地
- 從本地同步到遠程

<img src="/static/snapshots/tutorial/ftp2.png" style="zoom:80%" />

### 2.3 本地編輯遠程文件、刪除遠程文件

選中項目，右鍵菜單【FTP: 瀏覽遠程文件】，即可打開`SFTP視圖`

<img src="/static/snapshots/tutorial/ftp3.png" style="zoom:80%" />


## 3. ftp配置文件參數說明

```json
{
    "name": "Linux測試服務器",
    "host": "ip地址",
    "protocol": "sftp",
    "port": 22,
    "username": "用戶名",
    "password": "密碼",
    "remotePath": "遠程目錄",
    "uploadOnSave": false
}
```


**注意：配置文件是放在項目下的普通json文件，存放着ftp賬號。若你的項目使用三方node庫，請注意其可靠性，避免ftp賬戶失竊**


## 4. ftp、sftp協議說明

本插件支持FTP、sftp兩種協議。

如果遠程服務器，搭建了`ftp`服務，`username`和`password`需要填寫ftp的用戶密碼

`sftp`不需要任何配置，開啓`SSH`默認就開啓了`SFTP`。也就是說，如果您的遠程服務器爲`linux`系統，即使沒有搭建`ftp`服務，也可以通過`sftp`連接，使用文件同步的服務。

- SSH/SFTP，默認端口爲：22
- 使用sftp服務，`username`和`password`，需要填寫目標電腦的用戶、密碼

## 5. ftp/sftp 菜單配置快捷鍵

菜單【工具】【自定義快捷鍵】，即可對sftp相關菜單配置快捷鍵。

具體如下， 可以把`key`值改成自己想要的快捷鍵

```
[
    // 瀏覽遠程文件
    {
        "key": "ctrl+shift+w",
        "command": "sftp.revealInRemoteExplorer"
    },
    // 同步遠程數據到本地
    {
        "key": "ctrl+shift+r",
        "command": "sftp.sync.remoteToLocal"
    },
    // 同步本地數據到遠程
    {
        "key": "ctrl+shift+l",
        "command": "sftp.sync.localToRemote"
    },
    // 上傳當前文件夾
    {
        "key": "ctrl+shift+h",
        "command": "sftp.upload.folder"
    },
    // 下載當前文件夾
    {
        "key": "ctrl+shift+q",
        "command": "sftp.download.folder"
    },
    // 項目管理器 右鍵菜單 FTP: 上傳選中文件
    {
        "key": "ctrl+shift+u",
        "command": "sftp.upload.file"
    },
    // 在本地編輯遠程文件
    {
        "key": "ctrl+shift+e",
        "command": "sftp.remoteExplorer.editInLocal"
    },
    // 刪除遠程文件
    {
        "key": "ctrl+shift+d",
        "command": "sftp.delete.remote"
    },
    // 刷新
    {
        "key": "ctrl+shift+f",
        "command": "sftp.remoteExplorer.refresh"
    }
]

```