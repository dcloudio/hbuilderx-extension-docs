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

Method 1. Visit [uniCloud Console](https://unicloud.dcloud.net.cn/), upload on the web page.

  When uploading, you can upload by file or folder.

  If you upload by folder, you can choose whether the uploaded directory contains the root directory of the upload folder.

<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-web-hosting.jpg"  style="border: 1px solid #eee; zoom: 80%;"/>

Method 2. Upload through the HBuilderX tool

  > From HBuilderX 2.8+, it supports to upload front-end web pages directly to uniCloud in HBuilderX.

  In the menu 'publish', select `upload website to server`.

  - For uni-app projects, you can compile to h5 first, and then upload the compiled h5 directly. As shown below:

<img src="/static/snapshots/tutorial/unicloud/unicloud-web-hosting-en.png" class="hd-img" />

  - For non-uni-app projects, you can choose the directory to upload, including static front-end file interfaces such as html, js, css, and pictures. As shown below:

<img src="/static/snapshots/tutorial/unicloud/unicloud-hx-hosting-h5-en.png" class="hd-img" />

  > HBuilderX 2.8.9+，support front-end web hosting manager.

  In the menu view, or in the status bar in the lower left corner, click `Web Hosting` to open the front-end web hosting manager on the left. As shown below:

<img src="/static/snapshots/tutorial/unicloud/open-hosting-en.jpg" class="hd-img" />

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


If you have not SSL certificate, click here [Quick Request](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)。

**Note**

- When you enabled *.domainname acceleration on Alibaba Cloud, the subdomain name may not be configured for web hosting. **In this case, you may be prompted: The domain name has already been added and cannot be added repeatedly***
- Not support binding Chinese domain names

### Routing @routing

**Home Page**

Set home page name

**404 page**

404 page returned after an error occurred while visiting the website.

**Redirection rules**

> Only supported by Tencent Cloud

Support the following three combination configurations.

- Type: Error code, rule: replace path。Redirect requests for specific error codes to the target document. Only 4xx error codes are supported.

Example: To redirect the 404 error code to index.html, you need to do the following configuration (This configuration can be used when the uni-app project is released to h5 in history mode):

|Type		|Description	|Rule			|Replace Content		|
|:-:		|:-:	|:-:			|:-:				|
|Error Code	|404	|Replace path	|index.html	|

- Type: Prefix match, Rule: Replace path. Redirect requests matching a specific prefix to the target document.

For example: When you delete the images/ folder (that is, delete all objects with the prefix images/). You can add redirection rules to redirect requests for any object with the prefix images/ to the test.html page.

|Type			|Description		|Rule			|Replace Content	|
|:-:			|:-:		|:-:			|:-:			|
|Prefix match	|images/|Replace path	|test.html|

- Type: Prefix match, Rule: Replace prefix. Replace the prefix in the request that matches a specific prefix with the replacement content, for example:

For example: When you rename the folder from docs/ to documents/, users will get an error when accessing the docs/ folder. Therefore, you can redirect requests with the prefix docs/ to documents/.

|Type			|Description	|Rule			|Replace Content		|
|:-:			|:-:	|:-:			|:-:				|
|Prefix match	|docs/|Replace prefix	|documents/	|

### Cache Configuration @cache

> Only supported by Tencent Cloud

- File Type: Set the cache expiration time according to the file suffix. The format is .jpg, and the interval is used between different suffixes.
- Folder: Set the cache expiration time according to the directory path. The format is /test, and there is no need to end with /. Use interval between different directories.
- Full Path File: Specify the full file path to set the cache expiration time, the format is /index.html, and the full path plus file type matching mode is supported, such as /test/*.jpg.

**Note**

- Up to 10 cache expiration rules can be configured.
- The priority among multiple cache expiration rules is from bottom to top.
- The cache expiration time can be set up to 365 days.

### Prevent Hotlinking Configuration @referer

> Only supported by Tencent Cloud

**referer Blacklist: **

- If the referer field of the request matches the content set in the blacklist, the CDN node refuses to return the requested information and returns 403 status code.
- If the requested referer does not match the content set in the blacklist, the CDN node returns the requested information.
- When the option of including empty referer is checked, if the request referer field is empty or there is no referer field (such as a browser request), the CDN node refuses to return the request information and returns 403 status code.

**referer Whitelist：**

- If the requested referer field matches the content set in the whitelist, the CDN node returns the requested information.
- If the referer field of the request does not match the content set in the whitelist, the CDN node will refuse to return the requested information and will returns 403 status code.
- When the whitelist is set, the CDN node can only return requests that match the string content in the whitelist.
- When the option of including empty referer is checked, if the request referer field is empty or there is no referer field (such as a browser request), the CDN will return the request information.

**Configuration Rule: **

Anti-hotlinking supports domain name/IP rules, and the matching method is prefix matching (only path is supported, domain name prefix matching is not supported), that is, if the configuration list is www.abc.com, then www.abc.com/123 will match, www.abc.com.cn does not match; assuming the configuration list is 127.0.0.1, 127.0.0.1/123 will also match.
Anti-hotlinking supports wildcard matching, for example, if the list is *.qq.com, both www.qq.com and a.qq.com will match.


### IP Blacklist Configuration @ip-filter

> Only supported by Tencent Cloud

**IP Blacklist**

When the client IP matches the IP or IP segment in the blacklist, the 403 status code will be returned when accessing the CDN node.

**IP Whitelist*

When the client IP does not match the IP or IP segment in the whitelist, the 403 status code will be returned directly when accessing the CDN node.

**Blacklist/Whitelist Rules**

- Only one of the IP blacklist and the IP whitelist can be selected, not at the same time.
- The IP segment only supports /8, /16, /24 network segments, and does not support other network segments.
- Not support IP: black and white list with port.
- Up to 50 lists.

### Default domain name IP whitelist @default-domain-ip-whitelist

> Only supported by Alibaba Cloud

In order to ensure that the default domain name is not abused, Alibaba Cloud has made the following restrictions on the default domain name: the first 10 IPs can be accessed directly every day, and the IP whitelist needs to be configured after the 10 IPs can be accessed.

Only ipv4 is supported, IP or IP network segment can be configured, and the mask digits range from 24-31. Up to three can be configured at the same time, separated by commas, such as:
123.120.5.235/24,123.123.123.123

### IP access frequency limit configuration @ip-freq

> Only supported by Tencent Cloud

**Configuration Instructions**

- After the configuration is enabled, requests that exceed the QPS limit will be returned to 514. Setting a lower frequency limit may affect the use of your high-frequency users. Please set the threshold reasonably according to business conditions and usage scenarios.

- Frequency limitation only restricts the number of visits to a single IP and a single node. If malicious users carry out targeted attacks with massive IPs, this function is unstoppable.

## Best Practices

### Deploy uni-app project @host-uni-app

The uni-app project needs to be configured differently according to different routing modes.

- When using hash mode, it can be used without special configuration

- The following rules can be configured when using history mode

  + Tencent Cloud configures redirection rules to redirect 404 error codes to `index.html`
  + Alibaba Cloud configuration error document to `index.html`

When manually deploying uni-app projects, you need to pay attention to deploying the files under the  h5 base path. **HBuilderX one-click deployment will automatically follow the basic path configured in manifest.json for deployment**

If you deploy multiple projects to a service space, you can use different basic paths to distinguish them. It should be noted that only one of these multiple projects can use the history mode

## Tencent Cloud Price List

|Package		|Package1|Package2|Package3|
|:-:			|:-:								|:-:								|:-:								|
|Capacity			|5G									|10G								|100G								|
|Traffic			|5G/Month							|50G/Month							|500G/Month						|
|Reads		|1.5 Million Times/Month					|2 Million Times/Month					|15 Million Times/Month				|
|Writes		|0.6 Million Times/Month					|1 Million Times/Month					|6 Million times/Month					|
|Return Traffic	|5G/Month							|10G/Month							|150G/Month						|

<!--
|费用			|¥9.9/Month						|¥35/Month						|¥330/Month						|
-->

**Note**

- The data displayed on the resource statistics page may be delayed
- The number of reads, writes, and return-to-source traffic are system limits, and generally will not exceed the capacity and traffic limits of the existing package
- Tencent Cloud's web page deployment package will be retained for 7 days after expiration, and will be destroyed after 7 days
- If the hosting service is a monthly package, if the hosting service expires but web hosting has not expired, web hosting will also be destroyed with the hosting. Please pay attention to renew the hosting.

## Alibaba Cloud usage restrictions

- The maximum storage usage of web hosting is 2GB
- The maximum limit for a single file is 50MB 

### Glossary

**CDN return-to-source traffic**

Refers to the traffic generated when the CDN request files\functions\codes from original web hosting after CDN acceleration is turned on.

<!--
### Tencent Cloud Price List

**New purchase**

- When you buy a package, the validity period is calculated in natural months. Example: If you purchase a 2-month package on May 28, 2020, the package will be valid until 23:59:59 on July 28, 2020

**Renew**

- The renewal is calculated in natural months like new purchases. Example: The current validity period will be until 23:59:59 on July 28, 2020. If the renewal is one month, the package will be valid until 23:59:59 on August 28, 2020.

**Upgrade**

- Upgrade Cost = Monthly upgrade price difference × Upgrade days / (365 / 12) × Discount
  - Monthly upgrade price difference: the monthly unit price of the original price of the new and old configuration.
  - The cost of the upgrade is calculated on a daily basis: the number of days of the upgrade = the resource expiration time - the current time.
  - Discount：The applicable discount is matched downwards according to the number of upgrade days.
  - The discount is the discount in effect on the live network.
- Upgrading does not affect the resource expiration time.

**Example of Upgrade**

>The following prices are for example only, not the actual prices on the official website, and the actual unit price shall prevail at the time of purchase.

For Example:


On November 1, 2019, you can purchase a 3-month professional package. The expiration time is 23:59:59 on February 1, 2020. The unit price of the annual and monthly subscription is 100 yuan/month.

On December 15, 2019, the package will be upgraded to an enterprise package of 1,000 yuan/month.

- Monthly upgrade price difference = 1000 - 100 = 900元/Month
- Days of Upgrade = 31 × 1 + 15 + 1 = 47 Days（1 means 31 days in January, 15 means 15 days remaining in December, 1 means 1 day in February）
- Discount：No valid discount
- Cost of Upgrade = （1000 - 100） × 47 /（365 / 12） = 1390.53 Yuan
-->
