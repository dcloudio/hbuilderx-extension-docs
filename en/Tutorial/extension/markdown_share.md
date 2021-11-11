> Supported from HBuilderX 2.8.7

## 1. Summary

Markdown has an excellent input experience, but it is difficult to share because of the lack of free, stable, and high-speed hosting servers.

[uniCloud](https://unicloud.dcloud.net.cn/) provide free, stable and high-speed hosting servers and CDN.

Since HBuilderX 2.8.7, based on uniCloud, it provides markdown `one-click sharing` function.

You can convert markdown into HTML web pages with uniCloud web hosting services and publish them as online URLs. Then you can send the URL to anyone who wants to share.

At the same time, the pictures involved in markdown will also be automatically uploaded to the CDN of uniCloud Hosting Server.

## 2. How to use

在`md`文件上，点击【右键菜单 - 一键分享】，然后在控制台就会返回URL。
<img src="/static/snapshots/tutorial/markdown_share_1.jpeg" style="zoom:65%" />


## 3. 配置方式

使用markdown一键分享，需要提前完成配置，包括插件下载、uniCloud开通、服务空间绑定。

uniCloud是DCloud与阿里云等合作伙伴一起为开发者提供的网络服务器。

uniCloud包括`前端网页托管`功能，它是一个免费、高速的网页托管服务器。是的，真的免费送了你一个服务器。具体产品文档见：[https://uniapp.dcloud.io/uniCloud/hosting](https://uniapp.dcloud.io/uniCloud/hosting)。

开发者需要在HBuilderX中登录，并开通uniCloud服务。

### 3.1 开通uniCloud

开通uniCloud的地址为：[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/); 

<img src="/static/snapshots/tutorial/markdown_share_2.jpeg" style="zoom:80%" />

注意： 按照国家法律要求和阿里云的要求，使用uniCloud服务，需要先实名认证

<img src="/static/snapshots/tutorial/markdown_share_3.jpeg" style="zoom:80%" />


### 3.2.  新建阿里云服务空间

<img src="/static/snapshots/tutorial/markdown_share_4.jpeg" style="zoom:65%" />

### 3.3  开通前端网页托管

注意：前端网页托管服务初始化，需要 1-3 分钟，请耐心等待

<img src="/static/snapshots/tutorial/markdown_share_5.jpeg" style="zoom:65%" />

开通成功后，进入到首页，复制刚才创建的服务空间SpaceID

<img src="/static/snapshots/tutorial/markdown_share_6.jpeg" style="zoom:65%" />

### 3.4 HBuilderX 插件设置

打开HBuilderX,  点击菜单【设置】，插件设置，配置`uniCloud`空间ID （目前只支持阿里云）

<img src="/static/snapshots/tutorial/markdown_share_7.jpeg" style="zoom:80%" />


## 4. 插件使用

### 4.1 MarkDown文件转换

在`md`文件上，右键菜单，点击【一键分享】,会将`md`文件转换为html，并自动上传到云端。并在控制台打印出`URL`

<img src="/static/snapshots/tutorial/markdown_share_8.jpeg" style="zoom:80%" />

### 4.2 查看MarkDown历史分享记录

点击菜单【工具】【查看MarkDown历史分享记录】

<img src="/static/snapshots/tutorial/markdown_share_9.jpeg" style="zoom:80%" />
