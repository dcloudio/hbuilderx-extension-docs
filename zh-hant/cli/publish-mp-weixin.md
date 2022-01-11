# CLI 發行uni-app到微信小程序@mp-weixin

> HBuilderX 3.3.7-alpha，支持使用CLI發行微信小程序。

通過此種方式，可在命令行或其它CI工具中，完成微信小程序代碼的上傳、預覽等操作。

## 命令語法@cmd

```shell
# 僅編譯uni-app項目到微信小程序，不發行
cli publish --platform mp-weixin --project 項目名稱

# 編譯uni-app項目到微信小程序，併發行小程序到微信平臺
cli publish --platform mp-weixin --project 項目名稱 --upload true --appid 小程序appid --description 發佈描述 --version 發佈版本 --privatekey 小程序上傳密鑰文件
```

|參數			|說明										|
|--				|--											|
|--platform		|必填，發行平臺(MP-WEIXIN)					|
|--project		|必填，項目名稱								|
|--appid		|必填，微信小程序appid						|
|--behavior		|發行爲混合包,只有vue3項目並且值爲true時生效|
|--upload		|打包後是否上傳到微信平臺,只有值爲true時生效|
|--description	|上傳的小程序描述							|
|--privatekey	|微信代碼上傳密鑰文件 [詳情](#uploadPrivateKey)				|
|--version		|上傳小程序的版本號							|


## 小程序代碼上傳密鑰@uploadPrivateKey

> HBuilderX 發行微信小程序，需要提供微信小程序代碼上傳密鑰

如何獲取微信小程序代碼上傳密鑰？

打開微信公衆平臺 [官網](https://mp.weixin.qq.com/), 掃碼登錄，左側菜單【開發 -> 開發管理】，點擊tab【開發設置】，如下圖：

<img src="/static/snapshots/cli/wechat-uploadPrivateKey.png" class="hd-img" />

下載密鑰文件：

<img src="/static/snapshots/cli/wechat-downloadkeyFile.png" class="hd-img"/>