> `Supported from HBuilderX 2.7.12+`

## 1. About sftp/ftp

HBuilderX optimized SFTP/FTP plugin from version 2.7.12+.

[SFTP/FTP Installation](https://ext.dcloud.net.cn/plugin?id=2038)

This plugin is a popular ftp plugin in vscode. Because HBuilderX is compatible with part of the plugin ecology of vscode, it can also be used in HBuilderX.
- Use this plug-in to synchronize local workspace files with FTP server or Linux server files
- Support `ftp/sftp` protocol
- Support remote file directory `browse`, `upload`, `download`, `delete`
- Support `auto save upload`

## 2. sftp/ftp introduction

Steps：

1. As shown in the figure below, in the project manager, create an empty directory or empty project, and then select.
2. Right-click menu, click [Ftp: Create connection configuration].
3. The system automatically creates the `.ftp/ftp-sync.json` configuration file.
4. Edit `ftp-sync.json`, enter`host（ip）`、`username`、`password`、`port`、`protocol`.
5. After filling in the configuration file, right-click the menu and click [Ftp:browse remote files].
6. Select the file directory and perform the operations of `upload`, `download`, and `delete`.


### 2.1 Setup ftp/sftp configuration file

<img src="/static/snapshots/tutorial/ftp1.gif" style="zoom:80%" />

### 2.2 Sync directory

- Sync from remote to local
- Sync from local to remote server

<img src="/static/snapshots/tutorial/ftp/ftp_sync_en.png" class="hd-img" />

### 2.3 Edit remote files locally, delete remote files

Select an item from project manager and right-click the menu [FTP: browse remote files] to open the `SFTP view`.

<img src="/static/snapshots/tutorial/ftp/ftp_right_menu_en.png" class="hd-img" />


## 3. ftp configuration file parameter description

```json
{
    "name": "Linux Testing Server",
    "host": "ip",
    "protocol": "sftp",
    "port": 22,
    "username": "username",
    "password": "password",
    "remotePath": "remote directory",
    "uploadOnSave": false
}
```


**Note：The configuration file is an ordinary json file placed under the project, which stores the ftp account. If your project uses the third party node library, please pay attention to its reliability to avoid the theft of ftp accounts**


## 4. ftp、sftp agreement description

Support Ftp、Sftp 2 protocol.

If the remote server has set up the `ftp` service, `username` and `password` need to fill in the ftp user password.

`sftp` doesn't need any configuration. Turning on `SSH` will enable `SFTP` by default. In other words, if your remote server is a `linux` system, even if the `ftp` service is not set up, you can still connect via `sftp` and use the file synchronization service.

- SSH/SFTP，default port：22
- Use sftp service, you need to fill in the user and password of the target computer.

## 5. ftp/sftp menu configuration shortcuts

Menu [Tool] [Custom Keybindings]，you can configure shortcut keys for sftp related menus.

The details are as follows, you can change the `key` value to the shortcut key you want.

```
[
    // Browse remote files
    {
        "key": "ctrl+shift+w",
        "command": "sftp.revealInRemoteExplorer"
    },
    // Synchronize remote data to local
    {
        "key": "ctrl+shift+r",
        "command": "sftp.sync.remoteToLocal"
    },
    // Synchronize local data to remote
    {
        "key": "ctrl+shift+l",
        "command": "sftp.sync.localToRemote"
    },
    // Upload the current folder
    {
        "key": "ctrl+shift+h",
        "command": "sftp.upload.folder"
    },
    // Download the current folder
    {
        "key": "ctrl+shift+q",
        "command": "sftp.download.folder"
    },
    // In project manager, right-click menu Ftp: Upload the current file
    {
        "key": "ctrl+shift+u",
        "command": "sftp.upload.file"
    },
    // Edit remote files locally
    {
        "key": "ctrl+shift+e",
        "command": "sftp.remoteExplorer.editInLocal"
    },
    // Delete remote files
    {
        "key": "ctrl+shift+d",
        "command": "sftp.delete.remote"
    },
    // Refresh
    {
        "key": "ctrl+shift+f",
        "command": "sftp.remoteExplorer.refresh"
    }
]

```
