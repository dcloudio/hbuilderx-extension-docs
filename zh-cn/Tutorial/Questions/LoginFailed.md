# 登录失败问题
此文档用于解决某些用户登录失败问题排查。

## 目前已知的登录失败的原因有以下几条：
#### 1.网络问题
解决方法：如果电脑开启了代理或vpn,关闭后试试。换个网络试试，比如4G/5G手机热点

#### 2.网络限制
解决方法：ping 域名 ide.liuyingyong.cn 如果ping不通,可能是网络做了限制,需要放开后重启HBuilderX

#### 3.某些windows本地运行环境问题
解决方法：将HBuilderX解压目录里bin/msvcr120.dll,bin/msvcp140.dll这两个文件考拷贝到上一级目录（也就是HBuilderX.exe的同级目录），拷贝完成后重启HBuilderX

#### 4.电脑时间问题
解决方法：某些用户反馈本机时间不正确，校准之后就正常了，可网上搜索一下电脑时间自动校准操作步骤，校准后重启HBuilderX再试\

#### 5. SslHandshakeFailedError

如下图所示，当登录出现SslHandshakeFailedError错误时，请下载证书, 然后双击安装。

<a download href="https://web-ext-storage.dcloud.net.cn/hx/questions/certum.cer" target="_blank">证书下载地址</a>

<img src="https://web-ext-storage.dcloud.net.cn/hx/questions/hx_login_failed_ssl.png" style="zoom:50%" />

## 如果以上都尝试了，还未解决，请联系官方：
1. Email: ide@dcloud.io
2. QQ: 搜群，群关键字：HBuilderX ,加入群后，找群管理员帮您解决。
3. 去论坛发帖。论坛地址：http://ask.dcloud.net.cn
