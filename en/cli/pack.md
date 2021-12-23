# cli pack@pack

> Supported from HBuilderX 3.1.5+

## Usage@usage

1. First, you need to start HBuilderX. (Open the root directory of the HBuilderX installation directory, and enter `cli.exe open` in the terminal)
2. Edit App packaging configuration file (json file), [App packaging configuration file](/cli/pack?id=config)
3. run cli, input the following command in terminal
```shell
cli pack --config configuration file
```
4. If there is an error during the packaging process, the error message will be given and the operation will be interrupted. After the packaging is successful, the traditional packaging will output the download address of the packaging, and the safe packaging will output the path after the successful packaging.
5. cli pack command output
```
localhost:MacOS hx$ ./cli pack --config /Users/hx/Documents/HBuilderProjects/testproject/pca/configure.json
16:42:37.575 Check cloud packaging status...
16:42:38.016 Check packaging resources...
16:42:38.689 Compiling packaged resources...
16:42:43.570 Compress and package resources...
16:42:43.678 Send a packaging request to the cloud...
16:42:45.518 Project pca [__UNI__EB87FB4] packaging status: Time: 2021-03-08 16:42:45    Type: iOS Appstore    		in the queue    The current application IDFA has been turned on, and IDFA needs to be turned on in the background when submitting the AppStore for review. [Details](https://ask.dcloud.net.cn/article/36107) Time: 2021-03-08 16:42:45    Type: Android custom certificate     	in the queue    
After successful packaging, the download link will be automatically returned. For enquiries about the packaging process, please click the menu issue-view cloud packaging status. There is a long queue for packing during peak hours on Friday evening, so please wait patiently. If it is for third-party SDK debugging, please use a custom debugging dock (menu run-mobile phone or simulator-make custom debugging dock), do not repeatedly package.
16:42:45.529 Project pca [__UNI__EB87FB4] packaging status: Time: 2021-03-08 16:42:45    Type: iOS Appstore    in the queue    The current application IDFA has been turned on, and IDFA needs to be turned on in the background when submitting the AppStore for review, [Details](https://ask.dcloud.net.cn/article/36107)
16:43:42.881 Project pca [__UNI__EB87FB4] Successfully packaged:
    Type: Android custom certificate Download Link: https://service.dcloud.net.cn/build/download/40dc5910-7fea-11eb-b149-2bda895b13a3 （Note: this address is a temporary download address and can only be downloaded 5 times）
16:43:48.232 Project pca [__UNI__EB87FB4] packaging status: Time: 2021-03-08 16:42:45    Type: iOS Appstore    Cloud Packing    The current application IDFA has been turned on, and IDFA needs to be turned on in the background when submitting the AppStore for review, [Details] (https://ask.dcloud.net.cn/article/36107)
16:44:46.579 Project pca [__UNI__EB87FB4] Successfully packaged:
    Type: iOS Appstore Download Link: https://service.dcloud.net.cn/build/download/40c60580-7fea-11eb-af55-b9c5ccd8a1ee （Note: this address is a temporary download address and can only be downloaded 5 times）The current application IDFA has been turned on, and IDFA needs to be turned on in the background when submitting the AppStore for review, [Details](https://ask.dcloud.net.cn/article/36107)
```

## Pack configuration file@config

The configuration file format is json, save the following content in a json file with utf-8 encoding, and configure the required parameters according to the instructions

```json
{
    //Project name or project absolute path
    "project": "test-pack",
    //package platform default is android  value have "android","ios" separate the packaging platform with multiple commas
    "platform":"ios,android",
    //Whether to use a custom dock. The default value is false. True is custom dock, and false is custom certificate.
    "iscustom": false,
    //Whether the packaging method is safe packing, the default value is false, true is safe packing, false is traditional packing.
    "safemode": false,
    //android package parameters
    "android": {
      //package name
      "packagename":"com.test.android",
      //pack type default is 0. 0:custom certificate, 1: public certificate, 2: old certificate.
      "androidpacktype":"1",
      //Android uses its custom certificate to package
      //Android packaging certificate alias
      "certalias":"",
      //Android packaging certificate file path
      "certfile":"",
      //Android packaging certificate password
      "certpassword":"",
      //The channel package, options have "google","yyb","360","huawei","xiaomi","oppo","vivo", use commas to separate multiple platforms.
      "channels":""
      },
    //ios package parameters
    "ios": {
       //ios appid
       "bundle":"com.test.ios",
       //Device types supported by ios packaging. The default value of iPhone. Options have "iPhone", "iPad". use commas to separate multiple platforms.
       "supporteddevice":"iPhone,iPad",
       //The path of the profile file which packaged with a custom certificate
       "profile":"",
       //p12 file path which packaged with custom certificate
       "certfile":"",
       //certificate password which packaged with a custom certificate
       "certpassword":"123"
     },
    //Whether to confuse, true: confuse, false: close.
    "isconfusion":false,
    //Whether to display open-screen ads,true: on, false: off.
    "splashads":false,
    //Whether to display redpack ads, true: open, false: close.
    "rpads":false,
    //Whether to display push ads, true: open, false: close.
    "pushads":false,
    //Whether to join the exchange alliance, true: yes, false: no.
    "exchange":false
}
```

## cli pack 参数@params

> 以下参数选项, 均为`cli pack`的选项.

|参数名称	    |描述	    |
|--			|--			|
|--help	|打包命令帮助		|
|--config	|配置文件绝对路径，配置文件配置，参考[配置文件](/cli/pack?id=config)	|
|--project	|HBuilder X里导入的项目名或绝对路径		|
|--platform	|配打包平台,默认值android,取值有"android","ios"如果要打多个逗号隔开		|
|--iscustom	|是否使用自定义基座 默认值false, true自定义基座 false自定义证书		|
|--safemode	|打包方式是否为安心打包,默认值false,true安心打包,false传统打包		|
|--isconfusion	|配置文件绝对路径，配置文件配置，参考configure.json		|
|--isconfusion  | 是否对配置的js/nvue文件进行原生混淆，true打开 false关闭|
|--splashads	|开屏广告,默认值false, true打开 false关闭		|
|--rpads	|悬浮红包广告,默认值false, true打开 false关闭		|
|--pushads	|push广告,默认值false, true打开 false关闭		|
|--exchange	|加入换量联盟,默认值false, true加入 false不加入		|
|--android.packagename	|安卓包名，打安卓包填写		|
|--android.androidpacktype	|安卓打包类型 默认值0,0 使用自有证书 1 使用公共证书 2 使用DCloud老版证书	|
|--android.certalias	|安卓打包证书别名,自有证书打包填写的参数		|
|--android.certfile	|安卓打包证书文件路径,自有证书打包填写的参数		|
|--android.certpassword	|安卓打包证书密码,自有证书打包填写的参数		|
|--android.channels	|安卓平台要打的渠道包,取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多个逗号隔开		|
|--ios.bundle	|iOS appid 打ios包填写		|
|--ios.supporteddevice	|iOS打包支持的设备类型,默认值iPhone 值有"iPhone","iPad" 如果要打多个逗号隔开打包平台		|
|--ios.isprisonbreak	|iOS打包是否打越狱包,true打越狱包,false正式包。HBuilderX 3.2.3+版本起，不再支持构建越狱包。		|
|--ios.profile	|iOS使用自定义证书打包的profile文件路径		|
|--ios.certfile	|iOS使用自定义证书打包的p12文件路径		|
|--ios.certpassword 	|iOS使用自定义证书打包的证书密码		|

> 注 如果配置文件与配置参数都配置了相同参数，以命令行参数为准

## 命令行使用示例@example

```shell

# 通过配置文件打包
cli pack --config 配置文件

# android打包： 项目名称（apps）、传统打包、包名（io.test)、打包证书（自有证书、别名：testalias、密码123456）
cli pack --project apps --platform android --safemode false --android.packagename io.test --android.androidpacktype 0 --android.certalias testalias --android.certfile /Users/hx/Desktop/cert/jdk13/test.key --android.certpassword 123456

# ios打包
cli pack --project <projectname> --platform iOS --safemode false --iscustom true --ios.bundle <bundle> --ios.supporteddevice iPhone,iPad --ios.isprisonbreak false --ios.profile <profile> --ios.certfile <p12 file> --ios.certpassword <passwd>
```

## 扩展@extend
------

#### 如何读取带有注释的manifest.json文件?@how-to-read-manifest

**问题：** 有的用户希望打包前，动态修改`manifest.json`, 但是manifest.json带有注释，怎么办？

**回答：** js或python都有可以读取带有注释JSON文件的`库`。

|	语言|库	|
|--	|--	|
|	JavaScript| [strip-json-comments](https://www.npmjs.com/package/strip-json-comments)、[jsona](https://www.npmjs.com/package/jsona)	|
|	Python | [commentjson](https://www.cnpython.com/pypi/commentjson)	|
