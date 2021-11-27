## Summary

DCloud provides some functions such as website publishing and App publishing for developers. `Front-end web hosting` is one product of the web publishing.

`Front-end web hosting` base on [uniCloud](https://unicloud.dcloud.net.cn/login), provides a **faster, safer, more powerful, and cheaper** website publishing for developers' html pages.

- Faster: Without going through the web server, the pages and resources are directly uploaded to the CDN, which can be accessed nearby, and the speed is faster.
- Safer: There are no vulnerabilities in the operating systems and web servers of traditional servers. A service that will never be defeated by DDoS attacks.
- Powerful：You don't need to purchase any hardware or software to protect your files.  Don’t worry about anything, just upload your files.
- Cheaper：uniCloud is launched by DCloud in conjunction with Alibaba Cloud and Tencent Cloud, and the Alibaba Cloud is completely free.

## Cases

- `HBuilderX` websites, which is a document system based on `markdown`, URL：[https://hx.dcloud.net.cn/](https://hx.dcloud.net.cn/)
- `uni statistics` the official website has now been deployed to uniCloud, with a report to master the  business，URL：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)
- `hello uni-app` the project  has deployed to uniCloud, URL：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)

## Activation

Firstly, developers need to activate `uniCloud`, login [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/).

Then choose or create a service space.

Finally, in the left navigation of the above webpage, click on `Front-end web hosting` to start using.

`Front-end web hosting` has no binding with cloud functions. It can be deployed in a service space with cloud functions, or in a different space, or even a space of different cloud service providers.

- Aliyun `front-end web hosting` is free.
- Tencent Cloud `front-end web hosting` requires payment to activate, and pricing is provided by Tencent Cloud. Different packages of Tencent Cloud have different specifications, see the attached table at the end of the article.


## How to use

After activation, you need to upload front-end web page to uniCloud's `Front-end web hosting`.

Two ways:

Method 1. Via [uniCloud Console](https://unicloud.dcloud.net.cn/), upload on the web page.

  When uploading, you can upload by file or folder.

  If you upload by folder, you can choose whether the uploaded directory contains the root directory of the upload folder.

<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-web-hosting.jpg"  style="border: 1px solid #eee; zoom: 80%;"/>

Method 2. Upload through the HBuilderX tool

  > From HBuilderX 2.8+, it supports to upload front-end web pages directly to uniCloud in HBuilderX.

  In the menu 'publish', select `upload website to server`.

  - For uni-app projects, you can compile to h5 first, and then upload the compiled h5 directly. As shown below:

<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-hx-hosting.jpg" style="border: 1px solid #eee; zoom: 80%;"/>

  - For non-uni-app projects, you can choose the directory to upload, including static front-end file interfaces such as html, js, css, and pictures. As shown below:

<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-hx-hosting-h5.jpg" style="border: 1px solid #eee; zoom: 80%;"/>

  > HBuilderX 2.8.9+，support front-end web hosting manager.

  In the menu view, or in the status bar in the lower left corner, click `Web Hosting` to open the front-end web hosting manager on the left. As shown below:

<img src="/static/snapshots/tutorial/hosting.jpeg" style="border: 1px solid #eee; zoom: 50%;">

In the front-end web hosting manager, you can see the current user's service space list, grayed out means that the front-end web hosting has not been activated in the service space, and you can activate it according to the prompts after clicking. (As shown in the grayed-out ali1 service space in the figure above).

  Click on the available service space, you can see the remote resource manager on the right, drag the local file into it, and you can upload the file.

**Note**

1. `Front-end web hosting` is suitable for publishing h5 pages of uni-app. Especially with uniCloud cloud development, there will be no need to rent any traditional servers at all.
2. `Front-end web hosting` is suitable for publishing front-end pages in all websites where the front-end and back-end are separated, including PC web pages.
3. Only supports html, CSS, JavaScript, fonts, pictures, audio and video, json and other files. It does not support php, java, python, ruby, go, c++ and other language files that require interpretation by an additional language interpreter.
4. If developers need to do a/b test or grayscale new functions, they need to write code in js to implement them, and they cannot be implemented by routing to different servers.
5. When the uni-app project is compiled to h5, configure the secondary directory in the project's manifest. There is no need to set the secondary directory repeatedly when uploading.
6. In a `front-end web hosting` space, multiple websites can be uploaded, separated by different directories, and accessed by using the same domain name followed by different directories. It is not supported to set a different domain name separately for each directory.
7. Websites in `front-end web hosting` deployed to different service spaces can also access cloud functions in the same service space. You only need to add deployment front-end pages to the `cross-domain configuration` of the service space where cloud functions are deployed. Domain name

## Basic Configuration @base-config

This chapter introduces the description of various configuration items provided by `Front End Web Hosting`. The configuration of domain name, website homepage, and 404 page are supported by both Alibaba Cloud and Tencent Cloud, and other configurations are only supported by Tencent Cloud.

### Configure domain@domain

`Front-end web hosting`, comes with a test domain name, which is only used for product experience and testing to quickly experience the complete process of front-end web deployment. The domain name has the following restrictions:
  + Alibaba Cloud has a maximum of 60 requests per minute. By default, only 10 public network IPs are allowed to visit per day. If the excess is exceeded, the source IP must be manually added to the whitelist, and the IP whitelist will also have a limit on the number
  + Tencent Cloud speed limit 100K/s

If the business is to be deployed, please set your own domain name. After configuring your own domain name, you will not be restricted by the above-mentioned test domain. (Note: The Alibaba Cloud test domain is public. If any service space is complained of uploading malicious files, the test domain will be banned by the built-in WeChat browser.)


The steps for web hosting to configure your own domain are as follows:

1. Login[uniCloud Console](https://unicloud.dcloud.net.cn/)。
2. Open "Web Hosting" page, select [Basic Configuration], click [Add Domain] to add new domain name, as shown below:

<img src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/uniCloud/uniCloud-hosting-domain-add.jpg " style="border: 1px solid #eee; zoom: 80%;" />

3. The system will automatically assign a CNAME domain. The CNAME cannot be asscessed directly and you have to add CNAME configuration at the domain name service provider (DNS). After the configuration takes effect, the new domain name can be used.

Alibaba Cloud supports HTTP forced redirection to https, please turn on the configuration on above setting page.

**Domain Registration**

If you already have a registered domain name, just resolve it directly; You have to buy domain name if you want to register a new domain name. Please note: You must receive a ICP License (Internet Content Provider License) if you want to use Alibaba Cloud or Tencent Cloud. The registation process here is slightly different from traditional cloud hosts, and there is a problem that uniCloud does not have a fixed IP. So you can purchase domain registation service from oray company or use traditional domain registation by temporarily purchasing a short-term traditional cloud. There is also an authorization code solution, please see the posts shared by the developers:
[https://ask.dcloud.net.cn/article/38116](https://ask.dcloud.net.cn/article/38116)

**About certificate and private key**

A certificate is required if the domain name use https. After the certificate is issued, it can be downloaded to the local, and then the content can be copied and pasted to the uniCloud web console.

Note: The suffix of the certificate may be different. The `.key` file is the private key, and the `.pem` or `.crt` file is the certificate. You can use Notepad to open and view the content of these files.


If you have not SSL certificate, click here[Quick Request](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)。

**Note**

- When you enabled *.domainname acceleration on Alibaba Cloud, the subdomain name may not be configured for web hosting. **In this case, you may be prompted: The domain name has already been added and cannot be added repeatedly***
- Not support binding Chinese domain names

### @routing

**Home Page**

Set home page name

**404 page**

404 page returned after an error occurred while visiting the website.

**Redirection rules**

> Only supported by Tencent Cloud

支持以下三种组合配置

- 类型：错误码、规则：替换路径。将特定错误码的请求重定向到目标文档，仅支持对4xx错误码。

例：将404错误码重定向至index.html，需做如下配置（uni-app项目使用history模式发行到h5时可以使用此配置）：

|类型		|描述	|规则			|替换内容		|
|:-:		|:-:	|:-:			|:-:				|
|错误码	|404	|替换路径	|index.html	|

- 类型：前缀匹配、规则：替换路径。将匹配到特定前缀的请求重定向到目标文档

例：当您删除了images/文件夹（即删除了具有前缀images/的所有对象）。您可以添加重定向规则，将具有前缀images/的任何对象的请求重定向至test.html页面。

|类型			|描述		|规则			|替换内容	|
|:-:			|:-:		|:-:			|:-:			|
|前缀匹配	|images/|替换路径	|test.html|

- 类型：前缀匹配、规则：替换前缀。将匹配到特定前缀的请求中的前缀替换为替换内容，例：

例：当您将文件夹从docs/重命名为documents/后，用户在访问docs/文件夹会产生错误。所以，您可以将前缀docs/的请求重定向至documents/。

|类型			|描述	|规则			|替换内容		|
|:-:			|:-:	|:-:			|:-:				|
|前缀匹配	|docs/|替换前缀	|documents/	|

### 缓存配置@cache

> 仅腾讯云支持

- 文件类型：根据填入的文件后缀进行缓存过期时间设置，格式为.jpg形式，不同后缀之间用;间隔。
- 文件夹：根据填入的目录路径进行缓存过期时间设置，格式为/test形式，无需以/结尾，不同目录之间用;间隔。
- 全路径文件：指定完整的文件路径进行缓存过期时间设置，格式为/index.html，支持完整路径加文件类型匹配模式，如/test/*.jpg。

**注意**

- 缓存过期规则最多可配置10条。
- 多条缓存过期规则之间的优先级为底部优先。
- 缓存过期时间最多可设置365天。

### 防盗链配置@referer

> 仅腾讯云支持

**referer 黑名单：**

- 若请求的 referer 字段匹配黑名单内设置的内容，CDN 节点拒绝返回该请求信息，直接返回403状态码。
- 若请求的 referer 不匹配黑名单内设置的内容，则 CDN 节点正常返回请求信息。
- 当勾选包含空 referer 选项时，此时若请求 referer 字段为空或无 referer 字段（如浏览器请求），则 CDN 节点拒绝返回该请求信息，返回403状态码。

**referer白名单：**

- 若请求的 referer 字段匹配白名单设置的内容，则 CDN 节点正常返回请求信息。
- 若请求的 referer 字段不匹配白名单设置的内容，则 CDN 节点拒绝返回该请求信息，会直接返回状态码403。
- 当设置白名单时，CDN 节点只能返回符合该白名单内字符串内容的请求。
- 当勾选包含空 referer 选项时，此时若请求 referer 字段为空或无 referer 字段（如浏览器请求），则 CDN 正常返回请求信息。

**配置规则：**

防盗链支持域名 / IP 规则，匹配方式为前缀匹配（仅支持路径情况下，域名的前缀匹配不支持），即假设配置名单为www.abc.com，则www.abc.com/123匹配，www.abc.com.cn不匹配；假设配置名单为127.0.0.1，则127.0.0.1/123也会匹配。
防盗链支持通配符匹配，即假设名单为*.qq.com，则www.qq.com、a.qq.com均会匹配。

### IP黑白名单配置@ip-filter

> 仅腾讯云支持

**IP 黑名单**

用户端 IP 匹配黑名单中的 IP 或 IP 段时 ，访问 CDN 节点时将直接返回403状态码。

**IP 白名单**

用户端 IP 未匹配白名单中的 IP 或 IP 段时 ，访问 CDN 节点时将直接返回403状态码。

**名单规则**

- IP 黑名单与 IP 白名单二选一，不可同时配置。
- IP 段仅支持 /8、/16、/24 网段，不支持其他网段。
- 不支持IP：端口形式的黑白名单
- 名单最多可输入50个。

### 默认域名IP白名单@default-domain-ip-whitelist

> 仅阿里云支持

为保障默认域名不被滥用，阿里云对默认域名做出了如下限制：每天前10个IP可以直接访问，超出10个IP后需要配置IP白名单才可以访问

仅支持配置ipv4，可以配置IP或者IP网段，掩码位数取值范围24-31。最多可同时配置三个，多个之间用逗号隔开，如：123.120.5.235/24,123.123.123.123

### IP访问限频配置@ip-freq

> 仅腾讯云支持

**配置说明**

- 配置开启后，超出 QPS 限制的请求会直接返回514，设置较低频次限制可能会影响您的正常高频用户的使用，请根据业务情况、使用场景合理设置阈值。
- 限频仅针对与单 IP 单节点访问次数进行约束，若恶意用户海量 IP 针对性的进行全网节点攻击，则通过此功能无法进行有效控制。

## 最佳实践

### 部署uni-app项目@host-uni-app

uni-app项目根据路由模式不同需要做不同的配置

- 使用hash模式时，无需特别的配置即可正常使用

- 使用history模式时可以配置如下规则

  + 腾讯云配置重定向规则将404错误码重定向至`index.html`
  + 阿里云配置错误文档为`index.html`

手动部署uni-app项目时需要注意将文件部署在配置的h5基础路径下。**HBuilderX一键部署时会自动按照manifest.json内配置的基础路径进行部署**

如果部署多个项目到一个服务空间可以使用不同的基础路径来区分，需要注意的是这多个项目中只有一个项目可以使用history模式

## 腾讯云计费详细说明

|套餐名		|前端网页部署增值包1|前端网页部署增值包2|前端网页部署增值包3|
|:-:			|:-:								|:-:								|:-:								|
|容量			|5G									|10G								|100G								|
|流量			|5G/月							|50G/月							|500G/月						|
|读次数		|150万次/月					|200万次/月					|1500万次/月				|
|写次数		|60万次/月					|100万次/月					|600万次/月					|
|回源流量	|5G/月							|10G/月							|150G/月						|

<!--
|费用			|9.9元/月						|35元/月						|330元/月						|
-->

**注意**

- 资源统计页面展示的数据可能会有延迟
- 读次数、写次数、回源流量为系统限制，在现有套餐的容量、流量限制下一般不会超出
- 腾讯云前端网页部署套餐到期之后会保留7天，超过7天将会销毁
- 如果服务空间是包月套餐，在服务空间到期但是前端网页托管未到期的情况下，前端网页托管也会随服务空间销毁，请注意给服务空间续费

## 阿里云使用限制

- 前端网页部署限制为最大存储空间用量2GB
- 单文件最大限制为50MB

### 名词解释

**CDN 回源流量**

指开启了 CDN 加速后，CDN 回源存储时产生的流量。

<!--
### 腾讯云费用说明

**新购**

- 新购时某套餐时有效期按自然月计。例：2020年5月28日购买2个月套餐，则套餐有效期至2020年7月28日23时59分59秒

**续费**

- 续费逻辑和新购一样以自然月计。例：当前有效期至2020年7月28日23时59分59秒，续费一个月，则套餐有效期至2020年8月28日23时59分59秒

**升配**

- 升配费用 = 按月升配差价 × 升配天数 / (365 / 12) × 适用折扣
  - 按月升配差价：新老配置原价按月的单价。
  - 升配的费用按天计算：升配天数 = 资源到期时间 - 当前时间。
  - 适用折扣：根据升配天数向下匹配适用折扣。
  - 折扣为现网生效的折扣。
- 升配不影响资源到期时间。

**升配示例**

>以下价格仅作示例用，非官网实际价格，实际单价请以购买时为准。

举例：

2019年11月1日，购买3个月专业版套餐，到期时间为2020年2月1日23时59分59秒，包年包月单价为100元/月。

2019年12月15日，将该套餐升级为1000元/月的企业版套餐。

- 按月升配差价 = 1000 - 100 = 900元/月
- 升配天数 = 31 × 1 + 15 + 1 = 47天（1指1月份为31天，15指12月份剩余15天， 1指2月份1天）
- 适用折扣：暂无折扣
- 升配费用 = （1000 - 100） × 47 /（365 / 12） = 1390.53元
-->
