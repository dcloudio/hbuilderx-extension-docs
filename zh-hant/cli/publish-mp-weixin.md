# CLI 發行uni-app到微信小程序@mp-weixin

> HBuilderX 3.3.7-alpha，支持使用CLI發行微信小程序。

通過此種方式，可在命令行或其它CI工具中，完成微信小程序代碼的上傳、預覽等操作。

## CLI命令語法@cmd


|參數			|說明																	|
|--				|--																		|
|--platform		|必填，發行平臺(MP-WEIXIN)												|
|--project		|必填，項目名稱															|
|--appid		|必填，微信小程序appid													|
|--subPackage	|發行為混合包, 示例：--subPackage xxx									|
|--upload		|打包後是否上傳到微信平臺,只有值為true時生效							|
|--description	|上傳的小程序描述														|
|--privatekey	|微信代碼上傳密鑰文件 [詳情](#uploadPrivateKey)							|
|--version		|上傳小程序的版本號；選填。如果不填寫，則會讀取manifest.json中的版本號	|
|--sourceMap    |生成SourceMap,值為 true 時生效，默認為 false					|
|--robot		|指定微信ci機器人編號（取值範圍：1 ~ 30），默認為 1						|

註意：`--robot`參數，僅支持HBuilderX 3.6.18+版本。同時需要升級 [微信小程序上傳CI插件](https://ext.dcloud.net.cn/plugin?id=7199)


```shell
# 僅編譯uni-app項目到微信小程序，不發行
cli publish --platform mp-weixin --project 項目名稱

# 編譯uni-app項目到微信小程序，並發行小程序到微信平臺
cli publish --platform mp-weixin --project 項目名稱 --upload true --appid 小程序appid --description 發布描述 --version 發布版本 --privatekey 小程序上傳密鑰文件

cli publish --platform mp-weixin --project 項目名稱 --upload true --appid 小程序appid --description 發布描述 --version 發布版本 --privatekey 小程序上傳密鑰文件  --robot 2
```


## 小程序代碼上傳密鑰@uploadPrivateKey

> HBuilderX 3.3.7+, uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行。[详情](/Tutorial/App/uni-app-publish-mp-weixin)
>
> HBuilderX 發行微信小程序，需要提供微信小程序代碼上傳密鑰

通过微信小程序CI，使用上传密钥上传代码，无需打开微信开发者工具，一键完成微信小程序代码的上传、预览等操作。

**如何獲取微信小程序代碼上傳密鑰？**

打開微信公衆平臺 [官網](https://mp.weixin.qq.com/), 掃碼登錄，左側菜單【開發 -> 開發管理】，點擊tab【開發設置】，如下圖：

<img src="/static/snapshots/cli/wechat-uploadPrivateKey.png" class="hd-img" />

**下載密鑰文件：**

<img src="/static/snapshots/cli/wechat-downloadkeyFile.png" class="hd-img"/>

**特别注意:**
1. 请正确填写`微信小程序appid`和`privatekey`
2. 如果开启了`IP白名单`，请确保微信平台已配置 IP 白名单
