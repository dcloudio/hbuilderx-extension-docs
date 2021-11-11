> Supported from HBuilderX 2.8.7

## 1. Summary

Markdown has an excellent input experience, but it is difficult to share because of the lack of free, stable, and high-speed hosting servers.

[uniCloud](https://unicloud.dcloud.net.cn/) provide free, stable and high-speed hosting servers and CDN.

Since HBuilderX 2.8.7, based on uniCloud, it provides markdown `one-click sharing` function.

You can convert markdown into HTML web pages with uniCloud web hosting services and publish them as online URLs. Then you can send the URL to anyone who wants to share.

At the same time, the pictures involved in markdown will also be automatically uploaded to the CDN of uniCloud.

## 2. How to use

In the `md` file, right-click and select [Share to Weblink], you can find that the "url" will be output from the console.

<img src="/static/snapshots/tutorial/markdown_share_1.jpeg" style="zoom:65%" />


## 3. Configuration

To use markdown one-click sharing, you have to complete the configuration in advance, including plug-in download, uniCloud activation and set service space.
 
DCloud cooperated with Alibaba Cloud to establish uniCloud to provide web servers for developers.

uniCloud is a free, high-speed web hosting server that can help you to store web pages。More details：[https://uniapp.dcloud.io/uniCloud/hosting](https://uniapp.dcloud.io/uniCloud/hosting).

Developers need to log in HBuilderX and activate uniCloud service.

### 3.1 Sign Up uniCloud

Sign up uniCloud：[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/); 

<img src="/static/snapshots/tutorial/markdown_share_2.jpeg" style="zoom:80%" />

Note: In accordance with national legal and Alibaba Cloud requirements, to use uniCloud services, real-name authentication is required.

<img src="/static/snapshots/tutorial/markdown_share_3.jpeg" style="zoom:80%" />


### 3.2.  Choose Alibaba Cloud

<img src="/static/snapshots/tutorial/markdown_share_4.jpeg" style="zoom:65%" />

### 3.3  Activate Web Page Hosting

Note: It takes 1-3 minutes to initialize the front-end web hosting service.

<img src="/static/snapshots/tutorial/markdown_share_5.jpeg" style="zoom:65%" />

After successful activation, go to the homepage and copy the service spaceID.

<img src="/static/snapshots/tutorial/markdown_share_6.jpeg" style="zoom:65%" />

### 3.4 HBuilderX Plug-in Setting

Open HBuilderX, click [Settings] and choose "Plugins", then set `uniCloud` space ID. (Current only support Alibaba Cloud)

<img src="/static/snapshots/tutorial/markdown_share_7.jpeg" style="zoom:80%" />


## 4. How to use plugin

### 4.1 MarkDown File Conversion

In the `md` file, right-click and select [Share to Weblink], HBuilderX will convert `md` file to html file and upload to uniCloud, then output "URL" in the console.

<img src="/static/snapshots/tutorial/markdown_share_8.jpeg" style="zoom:80%" />

### 4.2 View MarkDown Share History

Click menu [Tool]->[View Markdown Share History]

<img src="/static/snapshots/tutorial/markdown_share_9.jpeg" style="zoom:80%" />
