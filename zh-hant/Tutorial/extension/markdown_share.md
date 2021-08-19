> 僅支持HBuilderX 2.8.7+ 版本

## 1. 概述

markdown擁有迷人的輸入體驗，但分享並不方便，尤其是缺少免費、穩定、高速的圖牀。

[uniCloud](https://unicloud.dcloud.net.cn/)提供了免費、穩定、高速的服務器和cdn。

HBuilderX 2.8.7起，基於uniCloud，提供了markdown的`一鍵分享`功能。

利用uniCloud的前端網頁託管，將markdown穩定轉成了HTML網頁，併發布爲在線的URL。您可以把URL發送給任何想要分享的人。

同時markdown裏涉及的圖片也會自動上傳到前端網頁託管裏免費cdn中。

## 2. 使用方式

在`md`文件上，點擊【右鍵菜單 - 一鍵分享】，然後在控制檯就會返回URL。
<img src="/static/snapshots/tutorial/markdown_share_1.jpeg" style="zoom:65%" />


## 3. 配置方式

使用markdown一鍵分享，需要提前完成配置，包括插件下載、uniCloud開通、服務空間綁定。

uniCloud是DCloud與阿里雲等合作伙伴一起爲開發者提供的網絡服務器。

uniCloud包括`前端網頁託管`功能，它是一個免費、高速的網頁託管服務器。是的，真的免費送了你一個服務器。具體產品文檔見：[https://uniapp.dcloud.io/uniCloud/hosting](https://uniapp.dcloud.io/uniCloud/hosting)。

開發者需要在HBuilderX中登錄，並開通uniCloud服務。

### 3.1 開通uniCloud

開通uniCloud的地址爲：[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/); 

<img src="/static/snapshots/tutorial/markdown_share_2.jpeg" style="zoom:80%" />

注意： 按照國家法律要求和阿里雲的要求，使用uniCloud服務，需要先實名認證

<img src="/static/snapshots/tutorial/markdown_share_3.jpeg" style="zoom:80%" />


### 3.2.  新建阿里雲服務空間

<img src="/static/snapshots/tutorial/markdown_share_4.jpeg" style="zoom:65%" />

### 3.3  開通前端網頁託管

注意：前端網頁託管服務初始化，需要 1-3 分鐘，請耐心等待

<img src="/static/snapshots/tutorial/markdown_share_5.jpeg" style="zoom:65%" />

開通成功後，進入到首頁，複製剛纔創建的服務空間SpaceID

<img src="/static/snapshots/tutorial/markdown_share_6.jpeg" style="zoom:65%" />

### 3.4 HBuilderX 插件設置

打開HBuilderX,  點擊菜單【設置】，插件設置，配置`uniCloud`空間ID （目前只支持阿里雲）

<img src="/static/snapshots/tutorial/markdown_share_7.jpeg" style="zoom:80%" />


## 4. 插件使用

### 4.1 MarkDown文件轉換

在`md`文件上，右鍵菜單，點擊【一鍵分享】,會將`md`文件轉換爲html，並自動上傳到雲端。並在控制檯打印出`URL`

<img src="/static/snapshots/tutorial/markdown_share_8.jpeg" style="zoom:80%" />

### 4.2 查看MarkDown歷史分享記錄

點擊菜單【工具】【查看MarkDown歷史分享記錄】

<img src="/static/snapshots/tutorial/markdown_share_9.jpeg" style="zoom:80%" />