> `本文档仅适用于HBuilderX 2.7.12+版本`

## 1. sftp/ftp插件简介@about

HBuilderX 2.7.12+版本，优化了SFTP/FTP插件

[SFTP/FTP插件市场插件地址](https://ext.dcloud.net.cn/plugin?id=2038)

此插件是vscode中流行的ftp插件，因HBuilderX兼容vscode的部分插件生态，也可以在HBuilderX中使用。
- 使用此插件，可将本地工作区文件，与FTP服务器或linux服务器文件同步。
- 支持`ftp/sftp`协议
- 支持远程文件目录`浏览`、`上传`、`下载`、`删除`
- 支持`自动保存上传`

## 2. sftp/ftp使用介绍

使用步骤：

1. 如下图，在项目管理器，新建一个空目录或空项目，然后选中
2. 右键菜单，点击【Ftp: 创建连接配置】
3. 系统自动创建`.ftp/ftp-sync.json`配置文件
4. 编辑`ftp-sync.json`, 填写`host（ip）`、`username（用户名）`、`password（密码）`、`port（端口）`、`protocol（协议）`
5. 填写完配置文件，右键菜单，点击【Ftp: 浏览远程文件】
6. 选择文件目录，进行`上传`、`下载`、`删除`操作

### 2.1 创建ftp/sftp配置文件

<img src="/static/snapshots/tutorial/ftp/ftp1.gif" style="zoom:80%" />

### 2.2 同步目录

- 从远程同步到本地
- 从本地同步到远程

<img src="/static/snapshots/tutorial/ftp/ftp2.png" style="zoom:80%" />

### 2.3 本地编辑远程文件、删除远程文件

选中项目，右键菜单【FTP: 浏览远程文件】，即可打开`SFTP视图`

<img src="/static/snapshots/tutorial/ftp/ftp3.png" style="zoom:80%" />


## 3. ftp配置文件参数说明

```json
{
    "name": "Linux测试服务器",
    "host": "ip地址",
    "protocol": "sftp",
    "port": 22,
    "username": "用户名",
    "password": "密码",
    "remotePath": "远程目录",
    "uploadOnSave": false
}
```


**注意：配置文件是放在项目下的普通json文件，存放着ftp账号。若你的项目使用三方node库，请注意其可靠性，避免ftp账户失窃**


## 4. ftp、sftp协议说明

本插件支持FTP、sftp两种协议。

如果远程服务器，搭建了`ftp`服务，`username`和`password`需要填写ftp的用户密码

`sftp`不需要任何配置，开启`SSH`默认就开启了`SFTP`。也就是说，如果您的远程服务器为`linux`系统，即使没有搭建`ftp`服务，也可以通过`sftp`连接，使用文件同步的服务。

- SSH/SFTP，默认端口为：22
- 使用sftp服务，`username`和`password`，需要填写目标电脑的用户、密码

## 5. ftp/sftp 菜单配置快捷键

菜单【工具】【自定义快捷键】，即可对sftp相关菜单配置快捷键。

具体如下， 可以把`key`值改成自己想要的快捷键

```
[
    // 浏览远程文件
    {
        "key": "ctrl+shift+w",
        "command": "sftp.revealInRemoteExplorer"
    },
    // 同步远程数据到本地
    {
        "key": "ctrl+shift+r",
        "command": "sftp.sync.remoteToLocal"
    },
    // 同步本地数据到远程
    {
        "key": "ctrl+shift+l",
        "command": "sftp.sync.localToRemote"
    },
    // 上传当前文件夹
    {
        "key": "ctrl+shift+h",
        "command": "sftp.upload.folder"
    },
    // 下载当前文件夹
    {
        "key": "ctrl+shift+q",
        "command": "sftp.download.folder"
    },
    // 项目管理器 右键菜单 FTP: 上传选中文件
    {
        "key": "ctrl+shift+u",
        "command": "sftp.upload.file"
    },
    // 在本地编辑远程文件
    {
        "key": "ctrl+shift+e",
        "command": "sftp.remoteExplorer.editInLocal"
    },
    // 删除远程文件
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
