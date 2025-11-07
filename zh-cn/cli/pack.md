# CLI uni-app 发行 - Android/iOS 云打包@pack

> HBuilderX cli 命令行工具

通过 CLI 进行 Android/iOS 云打包，仅适用于 HBuilderX 3.1.5+ 版本。

## 命令说明

### pack

Android/iOS 云打包

**参数：**

| 参数名称                  | 描述                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| --help                    | 打包命令帮助                                                                                          |
| --config                  | 配置文件绝对路径，配置文件配置，参考[配置文件](/cli/pack?id=config)                                   |
| --project                 | HBuilder X 里导入的项目名或绝对路径                                                                   |
| --platform                | 配打包平台,默认值 android,取值有"android","ios"如果要打多个逗号隔开                                   |
| --iscustom                | 是否使用自定义基座 默认值 false, true 自定义基座 false 自定义证书                                     |
| --safemode                | 打包方式是否为安心打包,默认值 false,true 安心打包,false 传统打包                                      |
| --isconfusion             | 是否对配置的 js/nvue 文件进行原生混淆，true 打开 false 关闭                                           |
| --splashads               | 开屏广告,默认值 false, true 打开 false 关闭                                                           |
| --rpads                   | 悬浮红包广告,默认值 false, true 打开 false 关闭                                                       |
| --pushads                 | push 广告,默认值 false, true 打开 false 关闭                                                          |
| --exchange                | 加入换量联盟,默认值 false, true 加入 false 不加入                                                     |
| --android.packagename     | 安卓包名，打安卓包填写                                                                                |
| --android.androidpacktype | 安卓打包类型 默认值 0,0 使用自有证书 1 使用公共证书 2 使用 DCloud 老版证书                            |
| --android.certalias       | 安卓打包证书别名,自有证书打包填写的参数                                                               |
| --android.certfile        | 安卓打包证书文件路径,自有证书打包填写的参数                                                           |
| --android.certpassword    | 安卓打包证书密码,自有证书打包填写的参数                                                               |
| --android.storepassword   | 安卓打包证书库密码（HBuilderx4.41 支持）,自有证书打包填写的参数                                       |
| --android.channels        | 安卓平台要打的渠道包,取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多个逗号隔开 |
| --ios.bundle              | iOS appid 打 ios 包填写                                                                               |
| --ios.supporteddevice     | iOS 打包支持的设备类型,默认值 iPhone 值有"iPhone","iPad" 如果要打多个逗号隔开打包平台                 |
| --ios.isprisonbreak       | iOS 打包是否打越狱包,true 打越狱包,false 正式包。HBuilderX 3.2.3+版本起，不再支持构建越狱包。         |
| --ios.profile             | iOS 使用自定义证书打包的 profile 文件路径                                                             |
| --ios.certfile            | iOS 使用自定义证书打包的 p12 文件路径                                                                 |
| --ios.certpassword        | iOS 使用自定义证书打包的证书密码                                                                      |

**使用示例：**

```shell
# 通过配置文件打包
cli pack --config 配置文件

# Android打包：项目名称（apps）、传统打包、包名（io.test)、打包证书（自有证书、别名：testalias、密码123456）
cli pack --project apps --platform android --safemode false --android.packagename io.test --android.androidpacktype 0 --android.certalias testalias --android.certfile /Users/hx/Desktop/cert/jdk13/test.key --android.certpassword 123456 --android.storepassword 123456

# iOS打包
cli pack --project 项目名称 --platform ios --safemode false --iscustom true --ios.bundle 包名 --ios.supporteddevice iPhone,iPad --ios.isprisonbreak false --ios.profile profile文件路径 --ios.certfile p12文件路径 --ios.certpassword 证书密码
```

**注意事项：**

> 首先, 需要启动 HBuilderX. (进入 HBuilderX 安装目录根目录, 终端输入 `cli.exe open`)

> 如果配置文件与配置参数都配置了相同参数，以命令行参数为准

> 打包过程中如果有错误会给出相应的错误信息并中断操作，打包成功后传统打包会输出打包成功的下载地址，安心打包会输出打包成功后的路径。

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

## 打包配置文件格式@config

配置文件格式为 json,将下面内容保存在文件 json 文件，编码为 utf-8，根据说明配置所需参数

```json
{
    //项目名字或项目绝对路径
    "project": "test-pack",
    //打包平台 默认值android  值有"android","ios" 如果要打多个逗号隔开打包平台
    "platform": "ios,android",
    //是否使用自定义基座 默认值false  true自定义基座 false自定义证书
    "iscustom": false,
    //打包方式是否为安心打包默认值false,true安心打包,false传统打包
    "safemode": false,
    //android打包参数
    "android": {
        //安卓包名
        "packagename": "com.test.android",
        //安卓打包类型 默认值0 0 使用自有证书 1 使用公共证书 2 使用老版证书 3 使用云端证书
        "androidpacktype": "1",
        //安卓使用自有证书自有打包证书参数
        //安卓打包证书别名,自有证书打包填写的参数
        "certalias": "",
        //安卓打包证书文件路径,自有证书打包填写的参数
        "certfile": "",
        //安卓打包证书密码,自有证书打包填写的参数
        "certpassword": "",
        //安卓打包证书库密码（HBuilderx4.41支持）,自有证书打包填写的参数
        "storePassword": "",
        //安卓平台要打的渠道包 取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多个逗号隔开
        "channels": ""
    },
    //ios打包参数
    "ios": {
        //ios appid
        "bundle": "com.test.ios",
        //ios打包支持的设备类型 默认值iPhone 值有"iPhone","iPad" 如果要打多个逗号隔开打包平台
        "supporteddevice": "iPhone,iPad",
        //iOS使用自定义证书打包的profile文件路径
        "profile": "",
        //iOS使用自定义证书打包的p12文件路径
        "certfile": "",
        //iOS使用自定义证书打包的证书密码
        "certpassword": "123"
    },
    //是否混淆 true混淆 false关闭
    "isconfusion": false,
    //开屏广告 true打开 false关闭
    "splashads": false,
    //悬浮红包广告true打开 false关闭
    "rpads": false,
    //push广告 true打开 false关闭
    "pushads": false,
    //加入换量联盟 true加入 false不加入
    "exchange": false
}
```

## 扩展@extend

#### 如何读取带有注释的 manifest.json 文件?@how-to-read-manifest

**问题：** 有的用户希望打包前，动态修改`manifest.json`, 但是 manifest.json 带有注释，怎么办？

**回答：** js 或 python 都有可以读取带有注释 JSON 文件的`库`。

| 语言       | 库                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| JavaScript | [strip-json-comments](https://www.npmjs.com/package/strip-json-comments)、[jsona](https://www.npmjs.com/package/jsona) |
| Python     | [commentjson](https://www.cnpython.com/pypi/commentjson)                                                               |
