# CLI uni-app 发行 - 小程序@publish-miniProgram

> HBuilderX cli 命令行工具

通过 CLI 发行到各平台小程序，支持微信、支付宝等平台。

## 命令说明

### publish mp-weixin

发行到小程序-微信

**参数：**

| 参数          | 说明                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| --platform    | 必填，发行平台(MP-WEIXIN)                                               |
| --project     | 必填，项目名称                                                          |
| --appid       | 如果上传发行小程序到微信平台，则必填微信小程序 appid                    |
| --subPackage  | 发行为混合包, 示例：--subPackage xxx                                    |
| --upload      | 打包后是否上传到微信平台,只有值为 true 时生效                           |
| --description | 上传的小程序描述                                                        |
| --privatekey  | 微信代码上传密钥文件 [详情](#uploadPrivateKeyWeixin)                    |
| --version     | 上传小程序的版本号；选填。如果不填写，则会读取 manifest.json 中的版本号 |
| --sourceMap   | 生成 SourceMap,值为 true 时生效，默认为 false                           |
| --robot       | 指定微信 ci 机器人编号（取值范围：1 ~ 30），默认为 1                    |

**使用示例：**

```shell
# 仅编译uni-app项目到微信小程序
cli publish --platform mp-weixin --project 项目名称

# 编译uni-app项目到微信小程序，并上传发行小程序到微信平台
cli publish --platform mp-weixin --project 项目名称 --upload true --appid 小程序appid --description 发布描述 --version 发布版本 --privatekey 小程序上传密钥文件

# 编译uni-app项目到微信小程序，并上传发行小程序到微信平台（指定机器人）
cli publish --platform mp-weixin --project 项目名称 --upload true --appid 小程序appid --description 发布描述 --version 发布版本 --privatekey 小程序上传密钥文件 --robot 2

# 编译uni-app项目到微信小程序，生成SourceMap
cli publish --platform mp-weixin --project 项目名称 --sourceMap true

# 编译uni-app项目到微信小程序，发行为混合包
cli publish --platform mp-weixin --project 项目名称 --subPackage 子包名称

# 编译uni-app项目到微信小程序，组合参数：上传 + SourceMap
cli publish --platform mp-weixin --project 项目名称 --upload true --appid 小程序appid --privatekey 小程序上传密钥文件 --sourceMap true

# 发行到微信小程序（HBuilderX 4.67-alpha+）
cli publish mp-weixin --project 项目名称

# 发行到微信小程序并上传（HBuilderX 4.67-alpha+）
cli publish mp-weixin --project 项目名称 --upload true --appid 小程序appid --privatekey 小程序上传密钥文件
```

**注意事项：**

> HBuilderX 4.67-alpha 开始 platform 支持 mp-weixin 平台

> `--robot` 参数，仅支持 HBuilderX 3.6.18+ 版本。同时需要升级 [微信小程序上传 CI 插件](https://ext.dcloud.net.cn/plugin?id=7199)

> 请正确填写`微信小程序appid`和`privatekey`

> 如果开启了`IP白名单`，请确保微信平台已配置 IP 白名单

### publish mp-alipay

发行到小程序-支付宝

**参数：**

| 参数          | 说明                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| --platform    | 必填，发行平台(MP-ALIPAY)                                               |
| --project     | 必填，项目名称                                                          |
| --appid       | 必填，支付宝小程序 appid                                                |
| --subPackage  | 发行为混合包, 示例：--subPackage xxx                                    |
| --upload      | 打包后是否上传到支付宝平台,只有值为 true 时生效                         |
| --description | 上传的小程序描述                                                        |
| --privatekey  | 支付宝开发工具密钥文件 [详情](#uploadPrivateKeyAlipay)                  |
| --version     | 上传小程序的版本号；选填。如果不填写，则会读取 manifest.json 中的版本号 |

**使用示例：**

```shell
# 仅编译uni-app项目到支付宝小程序
cli publish --platform mp-alipay --project 项目名称

# 编译uni-app项目到支付宝小程序，并上传发行小程序到支付宝平台
cli publish --platform mp-alipay --project 项目名称 --upload true --appid 小程序appid --description 发布描述 --version 发布版本 --privatekey 支付宝开发工具密钥文件

# 编译uni-app项目到支付宝小程序，发行为混合包
cli publish --platform mp-alipay --project 项目名称 --subPackage 子包名称

# 编译uni-app项目到支付宝小程序，组合参数：上传 + 混合包
cli publish --platform mp-alipay --project 项目名称 --upload true --appid 小程序appid --privatekey 支付宝开发工具密钥文件 --subPackage 子包名称

# 发行到支付宝小程序（HBuilderX 4.67-alpha+）
cli publish mp-alipay --project 项目名称

# 发行到支付宝小程序并上传（HBuilderX 4.67-alpha+）
cli publish mp-alipay --project 项目名称 --upload true --appid 小程序appid --privatekey 支付宝开发工具密钥文件
```

**注意事项：**

> HBuilderX 4.67-alpha 开始 platform 支持 mp-alipay 平台

> 请正确填写`支付宝小程序appid`和开发工具密钥

## 小程序代码上传密钥@uploadPrivateKeyWeixin

> HBuilderX 3.3.7+, uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行。[详情](/Tutorial/App/uni-app-publish-mp-weixin)
>
> HBuilderX 发行微信小程序，需要提供微信小程序代码上传密钥

通过微信小程序 CI，使用上传密钥上传代码，无需打开微信开发者工具，一键完成微信小程序代码的上传、预览等操作。

**如何获取微信小程序代码上传密钥？**

打开微信公众平台 [官网](https://mp.weixin.qq.com/), 扫码登录，左侧菜单【开发 -> 开发管理】，点击 tab【开发设置】，如下图：

<img src="/static/snapshots/cli/wechat-uploadPrivateKey.png" class="hd-img" />

**下载密钥文件：**

<img src="/static/snapshots/cli/wechat-downloadkeyFile.png" class="hd-img"/>

## 支付宝开发工具密钥文件@uploadPrivateKeyAlipay

> HBuilderX 3.8.5+, uni-app 发行到支付宝小程序，支持自动上传代码到支付宝平台，无需再通过支付宝开发者工具上传发行。
>
> HBuilderX 发行支付宝小程序，需要提供支付宝开发工具密钥文件

通过支付宝小程序 CLI，使用支付宝开发工具密钥上传代码，无需打开支付宝开发者工具，一键完成支付宝小程序代码的上传操作

**如何获取支付宝开发工具密钥文件？**

打开支付宝开放平台 [开发工具密钥](https://open.alipay.com/develop/manage/tool-key), 扫码登录，左侧菜单【开发工具密钥】, 点击,生成身份密钥，如下图：

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-createPrivateKey.png" class="hd-img" />

**下载开发工具密钥：**

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-downloadkeyFile.png" class="hd-img"/>
