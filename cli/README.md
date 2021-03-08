> HBuilderX cli, 仅适用于HBuilderX 3.1.5+版本

开发者可以通过cli命令行指示HBuilderX进行启动、打包等操作。

## cli程序

命令行工具所在位置:

- Windows: HBuilderX安装目录根目录, `cli.exe`
- MacOSX
    - 正式版 `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha版 `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`

## cli 打包

1. 首先, 需要启动HBuilderX. (进入HBuilderX安装目录根目录, 终端输入`cli.exe open`)
2. 编辑App打包配置文件(json文件), [App打包配置文件](/cli/README?id=App打包配置文件)
3. cli运行, 终端输入
```
cli.exe pack --config 配置文件
```
4. 打包过程中如果有错误会给出相应的错误信息并中断操作，打包成功后传统打包会输出打包成功的下载地址，安心打包会输出打包成功后的路径。


## App打包配置文件

配置文件格式为json,将下面内容保存在文件json文件，编码为utf-8，根据说明配置所需参数

```json
{
    //项目名字或项目绝对路径
    "project": "test-pack",
    //打包平台 默认值android  值有"android","ios" 如果要打多个逗号隔开打包平台
    "platform":"ios,android",
    //是否使用自定义基座 默认值false  true自定义基座 false自定义证书
    "iscustom": false,
    //打包方式是否为安心打包默认值false,true安心打包,false传统打包
    "safemode": false,
    //android打包参数
    "android": {
      //安卓包名
      "packagename":"com.test.android",
      //安卓打包类型 默认值0 0 使用自有证书 1 使用公共证书 2 使用老版证书
      "androidpacktype":"1",
      //安卓使用自有证书自有打包证书参数
      //安卓打包证书别名,自有证书打包填写的参数
      "certalias":"",
      //安卓打包证书文件路径,自有证书打包填写的参数
      "certfile":"",
      //安卓打包证书密码,自有证书打包填写的参数
      "certpassword":"",
      //安卓平台要打的渠道包 取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多个逗号隔开
      "channels":""
      },
    //ios打包参数
    "ios": {
       //ios appid
       "bundle":"com.test.ios",
       //ios打包支持的设备类型 默认值iPhone 值有"iPhone","iPad" 如果要打多个逗号隔开打包平台
       "supporteddevice":"iPhone,iPad",
       //iOS打包是否打越狱包,只有值为true时打越狱包,false打正式包
       "isprisonbreak":true,
       //iOS使用自定义证书打包的profile文件路径
       "profile":"",
       //iOS使用自定义证书打包的p12文件路径
       "certfile":"",
       //iOS使用自定义证书打包的证书密码
       "certpassword":"123"
     },
    //是否混淆 true混淆 false关闭
    "isconfusion":false,
    //开屏广告 true打开 false关闭
    "splashads":false,
    //悬浮红包广告true打开 false关闭
    "rpads":false,
    //push广告 true打开 false关闭
    "pushads":false,
    //加入换量联盟 true加入 false不加入
    "exchange":false
}
```

## cli打包参数

|参数名称	    |描述	    |
|--			|--			|
|--config	|配置文件绝对路径，配置文件配置，参考[配置文件](#配置文件)	|
|--project	|HBuilder X里导入的项目名或绝对路径		|
|--platform	|配打包平台,默认值android,取值有"android","ios"如果要打多个逗号隔开		|
|--iscustom	|是否使用自定义基座 默认值false true自定义基座 false自定义证书		|
|--safemode	|打包方式是否为安心打包,默认值false,true安心打包,false传统打包		|
|--isconfusion	|配置文件绝对路径，配置文件配置，参考configure.json		|
|--splashads	|开屏广告,true打开 false关闭		|
|--rpads	|悬浮红包广告,true打开 false关闭		|
|--pushads	|push广告,true打开 false关闭		|
|---exchange	|加入换量联盟,true加入 false不加入		|
|--help	|打包命令帮助		|
|--android.packagename	|安卓包名，打安卓包填写		|
|--android.androidpacktype	|安卓打包类型 默认值0,0 使用自有证书 1 使用公共证书 2 使用DCloud老版证书	|
|--android.certalias	|安卓打包证书别名,自有证书打包填写的参数		|
|--android.certfile	|安卓打包证书文件路径,自有证书打包填写的参数		|
|--android.certpassword	|安卓打包证书密码,自有证书打包填写的参数		|
|--android.channels	|安卓平台要打的渠道包,取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多个逗号隔开		|
|--ios.bundle	|iOS appid 打ios包填写		|
|---ios.supporteddevice	|iOS打包支持的设备类型,默认值iPhone 值有"iPhone","iPad" 如果要打多个逗号隔开打包平台		|
|--ios.isprisonbreak	|iOS打包是否打越狱包,true打越狱包,false正式包		|
|--ios.profile	|iOS使用自定义证书打包的profile文件路径		|
|--ios.certfile	|iOS使用自定义证书打包的p12文件路径		|
|--ios.certpassword 	|iOS使用自定义证书打包的证书密码		|

> 注 如果配置文件与配置参数都配置了相同参数，以命令行参数为准