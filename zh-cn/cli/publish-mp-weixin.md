# CLI 发行uni-app到微信小程序@mp-weixin

> HBuilderX 3.3.7-alpha，支持使用CLI发行微信小程序。

通过此种方式，可在命令行或其它CI工具中，完成微信小程序代码的上传、预览等操作。

## 命令语法@cmd

```shell
# 仅编译uni-app项目到微信小程序，不发行
cli publish --platform mp-weixin --project 项目名称

# 编译uni-app项目到微信小程序，并发行小程序到微信平台
cli publish --platform mp-weixin --project 项目名称 --upload true --appid 小程序appid --description 发布描述 --version 发布版本 --privatekey 小程序上传密钥文件
```

|参数			|说明										|
|--				|--											|
|--platform		|必填，发行平台(MP-WEIXIN)					|
|--project		|必填，项目名称								|
|--appid		|必填，微信小程序appid						|
|--subPackage	|发行为混合包, 示例：--subPackage xxx|
|--upload		|打包后是否上传到微信平台,只有值为true时生效|
|--description	|上传的小程序描述							|
|--privatekey	|微信代码上传密钥文件 [详情](#uploadPrivateKey)				|
|--version		|上传小程序的版本号；选填。如果不填写，则会读取manifest.json中的版本号|


## 小程序代码上传密钥@uploadPrivateKey

> HBuilderX 发行微信小程序，需要提供微信小程序代码上传密钥

通过微信小程序CI，使用上传密钥上传代码，无需打开微信开发者工具，一键完成微信小程序代码的上传、预览等操作。

如何获取微信小程序代码上传密钥？

打开微信公众平台 [官网](https://mp.weixin.qq.com/), 扫码登录，左侧菜单【开发 -> 开发管理】，点击tab【开发设置】，如下图：

<img src="/static/snapshots/cli/wechat-uploadPrivateKey.png" class="hd-img" />

下载密钥文件：

<img src="/static/snapshots/cli/wechat-downloadkeyFile.png" class="hd-img"/>