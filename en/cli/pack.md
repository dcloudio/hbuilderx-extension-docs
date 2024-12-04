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
      //pack type default is 0. 0:custom certificate, 1: public certificate, 2: old certificate, 3: Cloud certificate.
      "androidpacktype":"1",
      //Android uses its custom certificate to package
      //Android packaging certificate alias
      "certalias":"",
      //Android packaging certificate file path
      "certfile":"",
      //Android packaging certificate password
      "certpassword":"",
      "keystorepassword": "",
      //The package channel, the options have "google","yyb","360","huawei","xiaomi","oppo","vivo", separate multiple platforms with commas.
      "channels":""
      },
    //ios package parameters
    "ios": {
       //ios appid
       "bundle":"com.test.ios",
       //Device types supported by ios packaging. The default value of iPhone. The options have "iPhone", "iPad". Separate multiple platforms with commas.
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

## cli pack parameters@params

> The following parameters are options of `cli pack`.

|name	    |description	    |
|--			|--			|
|--help	|pack command help	|
|--config	|The absolute path of the configuration file. Configuration file refer to [Configuration File](/cli/pack?id=config)	|
|--project	|Imported project name or absolute path in HBuilder X		|
|--platform	|Packaging platform, the default value is android, the options is "android", "ios". Separate multiple platforms with commas.		|
|--iscustom	|Whether to use a custom dock. The default value is false, true: custom dock, false: custom certificate	|
|--safemode	|Whether the packaging method is safe packaging, the default value is false, true: safe packaging, false: traditional packaging		|
|--isconfusion  | Whether to natively obfuscate the configured js/nvue files, true: turned on, false: turned off|
|--splashads	|Whether to display the open-screen ads, the default value is false, true: turned on, false: turned off		|
|--rpads	|Whether to display the redpack ads, the default value is false, true: turned on, false: turned off	|
|--pushads	|Whether to display push ads, the default value is false, true: turned on, false: turned off		|
|--exchange	|Whether to join the exchange alliance, the default value is false, true:yes, false:no		|
|--android.packagename	|android package name		|
|--android.androidpacktype	|pack type, default is 0. 0:custom certificate, 1: public certificate, 2: Dcloud old certificate.	|
|--android.certalias	|Android packaging certificate alias		|
|--android.certfile	|Android packaging certificate file path		|
|--android.certpassword	|Android packaging certificate password		|
|--android.keystorepassword	|Android packaging certificate password		|
|--android.channels	|The package channel, the options have "google","yyb","360","huawei","xiaomi","oppo","vivo", separate multiple platforms with commas.		|
|--ios.bundle	|iOS appid app id		|
|--ios.supporteddevice	|Device types supported by ios packaging. The default value of iPhone. The options have "iPhone", "iPad". Separate multiple platforms with commas.		|
|--ios.isprisonbreak	|Whether iOS packaging is a jailbreak package, true is a jailbreak package, and false is an official package. Starting from HBuilderX 3.2.3+, the jailbreak package is no longer supported.		|
|--ios.profile	|The path of the profile file which packaged with a custom certificate		|
|--ios.certfile	|p12 file path which packaged with custom certificate		|
|--ios.certpassword 	|certificate password which packaged with a custom certificate		|

>Note: If the configuration file and configuration parameters are configured with the same parameters, the command line parameters shall prevail.

## Command line example@example

```shell

# Package via configuration file
cli pack --config configuration file

# android pack：
Project name (apps), traditional packaging, package name (io.test), packaging certificate (own certificate, alias: testalias, password 123456)
cli pack --project apps --platform android --safemode false --android.packagename io.test --android.androidpacktype 0 --android.certalias testalias --android.certfile /Users/hx/Desktop/cert/jdk13/test.key --android.certpassword 123456

# ios pack
cli pack --project <projectname> --platform iOS --safemode false --iscustom true --ios.bundle <bundle> --ios.supporteddevice iPhone,iPad --ios.isprisonbreak false --ios.profile <profile> --ios.certfile <p12 file> --ios.certpassword <passwd>
```

## Extension@extend
------

#### How to read the annotated manifest.json file?@how-to-read-manifest

**Questions:** Some users want to dynamically modify the `manifest.json` before packaging, but the manifest.json has comments, what should we do?

**Answer:** Both js or python have `libraries` that can read commented JSON files

|	Lanague|Library	|
|--	|--	|
|	JavaScript| [strip-json-comments](https://www.npmjs.com/package/strip-json-comments)、[jsona](https://www.npmjs.com/package/jsona)	|
|	Python | [commentjson](https://www.cnpython.com/pypi/commentjson)	|
