# CLI 發行uni-app到支付寶小程序@mp-aplipay

> HBuilderX 3.8.5-alpha，支持使用CLI發行支付寶小程序。

通過此種方式，可在命令行或其它CI工具中，完成支付寶小程序代碼的上傳、預覽等操作。

## CLI命令語法@cmd

|參數			|說明																	|
|--				|--																		|
|--platform		|必填，發行平臺(MP-ALIPAY)												|
|--project		|必填，項目名稱															|
|--appid		|必填，支付寶小程序appid													|
|--subPackage	|發行為混合包, 示例：--subPackage xxx									|
|--upload		|打包後是否上傳到支付寶平臺,只有值為true時生效							|
|--description	|上傳的小程序描述														|
|--privatekey	|支付寶開發工具密鑰文件 [詳情](#uploadPrivateKey)							|
|--version		|上傳小程序的版本號；選填。如果不填寫，則會讀取manifest.json中的版本號	|


```shell
# 僅編譯uni-app項目到支付寶小程序
cli publish --platform mp-alipay --project 項目名稱

# 編譯uni-app項目到支付寶小程序，並上傳發行小程序到支付寶平臺
cli publish --platform mp-alipay --project 項目名稱 --upload true --appid 小程序appid --description 發布描述 --version 發布版本 --privatekey 支付寶開發工具密鑰文件

```


## 支付寶開發工具密鑰文件@uploadPrivateKey

> HBuilderX 3.8.5+, uni-app 發行到支付寶小程序，支持自動上傳代碼到支付寶平臺，無需再通過支付寶開發者工具上傳發行。
>
> HBuilderX 發行支付寶小程序，需要提供支付寶開發工具密鑰文件

通過支付寶小程序CLI，使用支付寶開發工具密鑰上傳代碼，無需打開支付寶開發者工具，一鍵完成支付寶小程序代碼的上傳操作

**如何獲取支付寶開發工具密鑰文件？**

打開支付寶開放平臺 [開發工具密鑰](https://open.alipay.com/develop/manage/tool-key), 掃碼登錄，左側菜單【開發工具密鑰】, 點擊,生成身份密鑰，如下圖：

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-createPrivateKey.png" class="hd-img" />

**下載開發工具密鑰：**

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-downloadkeyFile.png" class="hd-img"/>

## 註意事項

請正確填寫`支付寶小程序appid`和 開發工具密鑰
