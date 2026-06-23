# CLI uni-app / uni-app x 发行 - Android/iOS 云打包@pack

> HBuilderX cli 命令行工具

通过 CLI 对 **uni-app** 或 **uni-app x** 项目进行 Android/iOS 云打包，仅适用于 HBuilderX 3.1.5+ 版本。

> **适用项目**：uni-app、uni-app x（`app-android` / `app-ios`）。完整平台对照见 [CLI 概述](/cli/README?id=project-platform)。

## 命令说明

### pack

Android/iOS 云打包

**用法：**

```shell
cli pack --help
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --help | 查看打包 CLI 命令帮助 |
| --config | 配置文件的绝对路径，配置项参考 [配置文件](/cli/pack?id=config)。使用 `--config` 时 |
| --project | HBuilderX 中已导入项目的绝对路径或目录名 |
| --platform | 打包平台，默认值为 `android`。可选值：`android`、`ios`；多个平台用英文逗号分隔 |
| --iscustom | 是否使用自定义基座，仅值为 `true` 时启用 |
| --safemode | 是否使用安心打包，仅值为 `true` 时启用；否则使用传统打包（**仅适用于 uni-app** 项目） |
| --sourceMap | 是否生成 SourceMap，默认值为 `false` |
| --isconfusion | 是否启用代码混淆，仅值为 `true` 时启用（**仅适用于 uni-app** 项目） |
| --splashads | 是否启用开屏广告，仅值为 `true` 时启用（Android / iOS 均支持） |
| --rpads | 是否启用悬浮红包广告，仅值为 `true` 时启用（**仅适用于 uni-app** 项目，Android / iOS 均支持） |
| --unimpads | 是否启用激励视频广告，仅值为 `true` 时启用（Android / iOS 均支持） |
| --android.packagename | Android 包名，打包 Android 时必填 |
| --android.androidpacktype | Android 打包证书类型，默认值为 `0`。`0` 使用自有证书，`1` 使用公共证书，`2` 使用 DCloud 老版证书（**仅适用于 uni-app** 项目），`3` 使用云端证书（**仅适用于 uni-app** 项目） |
| --android.certalias | Android 自有证书别名，使用自有证书打包时填写 |
| --android.certfile | Android 自有证书文件路径，使用自有证书打包时填写 |
| --android.certpassword | Android 自有证书密码，使用自有证书打包时填写 |
| --android.storepassword | Android 自有证书库密码，使用自有证书打包时填写 |
| --android.channels | Android 渠道包。可选值：`google`、`yyb`、`360`、`huawei`、`xiaomi`、`oppo`、`vivo`；多个渠道用英文逗号分隔 |
| --ios.bundle | iOS App ID，打包 iOS 时必填 |
| --ios.supporteddevice | iOS 支持的设备类型，默认值为 `iPhone`。可选值：`iPhone`、`iPad`；多个设备类型用英文逗号分隔 |
| --ios.channels | iOS 渠道包。可选值：`phone`、`simulator`；多个渠道用英文逗号分隔（**仅 macOS 生效**） |
| --ios.profile | iOS 自定义证书打包使用的 profile 文件路径 |
| --ios.certfile | iOS 自定义证书打包使用的 p12 文件路径 |
| --ios.certpassword | iOS 自定义证书打包使用的证书密码 |

**使用示例：**

> 以下示例中，`demo-app` 可为 HBuilderX 导入的项目目录名，也可换为项目绝对路径。标记 **uni-app** 的参数或证书类型不适用于 uni-app x。

#### 配置文件与命令行

```shell
# 配置文件打包（参数均在 JSON 中，勿与命令行参数混用）
cli pack --config ./configure.json

# 命令行打包：项目目录名
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1

# 命令行打包：项目绝对路径
cli pack --project D:/HBuilderProjects/demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1
```

#### Android 证书与打包方式

```shell
# 公共证书（androidpacktype 1，uni-app / uni-app x）
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1

# 自有证书（androidpacktype 0）
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 0 --android.certalias myalias --android.certfile /path/to/cert.keystore --android.certpassword 123456 --android.storepassword 123456

# 老版证书（androidpacktype 2，uni-app）
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 2

# 云端证书（androidpacktype 3，uni-app）
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 3

# 安心打包（safemode，uni-app）
cli pack --project demo-app --platform android --safemode true --android.packagename com.example.app --android.androidpacktype 1

# 自定义基座
cli pack --project demo-app --platform android --iscustom true --android.packagename com.example.app --android.androidpacktype 1
```

#### Android 渠道与 SourceMap

```shell
# 多渠道包
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1 --android.channels google,huawei,xiaomi,oppo,vivo

# 生成 SourceMap
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1 --sourceMap true
```

#### iOS 证书与打包方式

```shell
# 自定义证书打包
cli pack --project demo-app --platform ios --ios.bundle com.example.app --ios.supporteddevice iPhone,iPad --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456

# 仅支持 iPhone
cli pack --project demo-app --platform ios --ios.bundle com.example.app --ios.supporteddevice iPhone --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456

# 仅支持 iPad
cli pack --project demo-app --platform ios --ios.bundle com.example.app --ios.supporteddevice iPad --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456

# 自定义基座
cli pack --project demo-app --platform ios --iscustom true --ios.bundle com.example.app --ios.supporteddevice iPhone
```

#### iOS 渠道与 SourceMap

```shell
# 模拟器渠道（ios.channels simulator，仅 macOS）
cli pack --project demo-app --platform ios --ios.bundle com.example.app --ios.channels simulator --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456

# 生成 SourceMap
cli pack --project demo-app --platform ios --ios.bundle com.example.app --sourceMap true --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456
```

#### 广告（Android / iOS）

> 以下参数 **Android、iOS 均支持**。`rpads` 仅 uni-app 项目可用。iOS 示例需同时指定 `--ios.profile`、`--ios.certfile`、`--ios.certpassword`。

```shell
# 开屏 + 激励视频 + 悬浮红包（rpads 仅 uni-app）
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1 --splashads true --unimpads true --rpads true
cli pack --project demo-app --platform ios --ios.bundle com.example.app --ios.profile /path/to/profile.mobileprovision --ios.certfile /path/to/cert.p12 --ios.certpassword 123456 --splashads true --unimpads true --rpads true
```

#### CI 自动化@pack-ci

> 需 HBuilderX **5.11+**（`logcat pack`、`pack status`）；`pack cancel` 需 HBuilderX **5.14+**

```shell
cli open
cli pack --project demo-app --platform android --android.packagename com.example.app --android.androidpacktype 1
cli logcat pack                              # 另开终端查看打包日志
cli pack status --project demo-app           # 查询状态（支持目录名或绝对路径）
cli pack cancel --project demo-app --platform app-android  # 取消 Android 云打包任务
```

**注意事项：**

> 首先，需要启动 HBuilderX。（进入 HBuilderX 安装目录根目录，终端输入 `cli open`）

> `--config` 与命令行参数请勿混用：使用配置文件打包时，参数均在 JSON 中配置；使用命令行打包时，通过 `--project`、`--platform` 等参数指定。

> 打包过程中如有错误会给出相应错误信息并中断操作。打包成功后，传统打包会输出下载地址，安心打包会输出打包成功后的路径。

**打包输出示例：**

```shell
localhost:MacOS hx$ ./cli pack --config /Users/hx/Documents/HBuilderProjects/测试项目/pca/configure.json
16:42:37.575 检查云端打包状态...
16:42:38.016 检查打包资源...
16:42:38.689 正在编译打包资源...
16:42:43.570 压缩打包资源...
16:42:43.678 向云端发送打包请求...
16:42:45.518 项目 pca [__UNI__EB87FB4]的打包状态：时间: 2021-03-08 16:42:45    类型: iOS Appstore    		队列中    当前应用 IDFA 已经开启，在提交 AppStore 审核时需要在后台开启 IDFA，[详细操作查看](https://ask.dcloud.net.cn/article/36107)时间: 2021-03-08 16:42:45    类型: Android自有证书    	队列中
打包成功后会自动返回下载链接。打包过程查询请点菜单发行-查看云打包状态。周五傍晚等高峰期打包排队较长，请耐心等待。如果是为了三方SDK调试，请使用自定义调试基座（菜单运行-手机或模拟器-制作自定义调试基座），不要反复打包。
16:42:45.529 项目 pca [__UNI__EB87FB4]的打包状态：时间: 2021-03-08 16:42:45    类型: iOS Appstore    队列中    当前应用 IDFA 已经开启，在提交 AppStore 审核时需要在后台开启 IDFA，[详细操作查看](https://ask.dcloud.net.cn/article/36107)
16:43:42.881 项目 pca [__UNI__EB87FB4]打包成功：
    类型: Android自有证书 下载地址: https://service.dcloud.net.cn/build/download/40dc5910-7fea-11eb-b149-2bda895b13a3 （注意该地址为临时下载地址，只能下载5次）
16:43:48.232 项目 pca [__UNI__EB87FB4]的打包状态：时间: 2021-03-08 16:42:45    类型: iOS Appstore    正在云端打包    当前应用 IDFA 已经开启，在提交 AppStore 审核时需要在后台开启 IDFA，[详细操作查看](https://ask.dcloud.net.cn/article/36107)
16:44:46.579 项目 pca [__UNI__EB87FB4]打包成功：
    类型: iOS Appstore 下载地址: https://service.dcloud.net.cn/build/download/40c60580-7fea-11eb-af55-b9c5ccd8a1ee （注意该地址为临时下载地址，只能下载5次）当前应用 IDFA 已经开启，在提交 AppStore 审核时需要在后台开启 IDFA，[详细操作查看](https://ask.dcloud.net.cn/article/36107)
```

### pack status@pack-query

> 需 HBuilderX **5.11+** 版本

查询 App 云打包状态。

**用法：**

```shell
cli pack status --help
cli pack status --project demo-app
cli pack status --project D:/HBuilderProjects/demo-app
```

**参数：**

| 参数名称  | 描述                                    |
| --------- | --------------------------------------- |
| --help    | cli 命令帮助                            |
| --project | HBuilder X 里导入的项目绝对路径或目录名 |

> `--project` 支持目录名或绝对路径。查询前需先启动 HBuilderX。打包日志见 [logcat pack](/cli/logcat-pack)；CI 流程见上文 [CI 自动化](/cli/pack?id=pack-ci)。

### pack cancel@pack-cancel

> 需 HBuilderX **5.14+** 版本

取消 App 云打包任务。

**用法：**

```shell
cli pack cancel --help
cli pack cancel --project D:/projects/demo-app --platform app-android
cli pack cancel --project demo-app --platform app-ios
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --help | 查看 CLI 命令帮助 |
| --project | HBuilderX 中已导入项目的绝对路径或目录名 |
| --platform | 要取消打包的平台类型，可选值：`app-ios`、`app-android` |

> `--project` 支持目录名或绝对路径。`--platform` 一次仅支持一个平台。执行前需先启动 HBuilderX；可结合 [pack status](/cli/pack?id=pack-query) 查询当前打包状态。

## 打包配置文件格式@config

配置文件格式为 JSON，编码为 UTF-8。各字段说明见上文 [pack 命令参数](#pack)。使用 `--config` 打包时，所有参数在 JSON 中配置，**不要**与 `--project`、`--platform` 等命令行参数混用。

**配置示例：**

```json
{
  "project": "test-pack",
  "platform": "ios,android",
  "iscustom": false,
  "safemode": false,
  "sourceMap": false,
  "isconfusion": false,
  "splashads": false,
  "rpads": false,
  "unimpads": false,
  "android": {
    "packagename": "com.test.android",
    "androidpacktype": "1",
    "certalias": "",
    "certfile": "",
    "certpassword": "",
    "storePassword": "",
    "channels": ""
  },
  "ios": {
    "bundle": "com.test.ios",
    "supporteddevice": "iPhone,iPad",
    "channels": "",
    "profile": "",
    "certfile": "",
    "certpassword": ""
  }
}
```

**使用方式：**

```shell
cli pack --config ./configure.json
```

> 将下方 JSON 保存为 `configure.json` 后执行上述命令。`--config` 与命令行参数请勿混用。

## 扩展@extend

#### 如何读取带有注释的 manifest.json 文件?@how-to-read-manifest

**问题：** 有的用户希望打包前，动态修改`manifest.json`, 但是 manifest.json 带有注释，怎么办？

**回答：** js 或 python 都有可以读取带有注释 JSON 文件的`库`。

| 语言       | 库                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| JavaScript | [strip-json-comments](https://www.npmjs.com/package/strip-json-comments)、[jsona](https://www.npmjs.com/package/jsona) |
| Python     | [commentjson](https://www.cnpython.com/pypi/commentjson)                                                               |
