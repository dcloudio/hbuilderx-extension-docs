# CLI 发行uni-app到支付宝小程序@mp-aplipay

> HBuilderX 3.8.5-alpha，支持使用CLI发行支付宝小程序。

通过此种方式，可在命令行或其它CI工具中，完成支付宝小程序代码的上传、预览等操作。

## CLI命令语法@cmd

|参数			|说明																	|
|--				|--																		|
|--platform		|必填，发行平台(MP-ALIPAY)												|
|--project		|必填，项目名称															|
|--appid		|必填，支付宝小程序appid													|
|--subPackage	|发行为混合包, 示例：--subPackage xxx									|
|--upload		|打包后是否上传到支付宝平台,只有值为true时生效							|
|--description	|上传的小程序描述														|
|--privatekey	|支付宝开发工具密钥文件 [详情](#uploadPrivateKey)							|
|--version		|上传小程序的版本号；选填。如果不填写，则会读取manifest.json中的版本号	|


```shell
# 仅编译uni-app项目到支付宝小程序
cli publish --platform mp-alipay --project 项目名称

# 编译uni-app项目到支付宝小程序，并上传发行小程序到支付宝平台
cli publish --platform mp-alipay --project 项目名称 --upload true --appid 小程序appid --description 发布描述 --version 发布版本 --privatekey 支付宝开发工具密钥文件

```


## 支付宝开发工具密钥文件@uploadPrivateKey

> HBuilderX 3.8.5+, uni-app 发行到支付宝小程序，支持自动上传代码到支付宝平台，无需再通过支付宝开发者工具上传发行。
>
> HBuilderX 发行支付宝小程序，需要提供支付宝开发工具密钥文件

通过支付宝小程序CLI，使用支付宝开发工具密钥上传代码，无需打开支付宝开发者工具，一键完成支付宝小程序代码的上传操作

**如何获取支付宝开发工具密钥文件？**

打开支付宝开放平台 [开发工具密钥](https://open.alipay.com/develop/manage/tool-key), 扫码登录，左侧菜单【开发工具密钥】, 点击,生成身份密钥，如下图：

<img src="/static/snapshots/cli/aplipay-createPrivateKey.png" class="hd-img" />

**下载开发工具密钥：**

<img src="/static/snapshots/cli/aplipay-downloadkeyFile.png" class="hd-img"/>

## 注意事项

请正确填写`支付宝小程序appid`和 开发工具密钥
