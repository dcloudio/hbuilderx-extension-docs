# CLI Publish uni-app to WeChat Mini Program@mp-weixin

> HBuilderX 3.3.7-alpha, supports using CLI to publish WeChat Mini Programs.

Through this method, you can complete operations such as uploading and previewing WeChat Mini Program code in command line or other CI tools.

## CLI Command Syntax@cmd


|Parameter			|Description																	|
|--				|--																		|
|--platform		|Required, publish platform (MP-WEIXIN)												|
|--project		|Required, project name															|
|--appid		|Required if uploading mini program to WeChat platform, WeChat Mini Program appid													|
|--subPackage	|Publish as hybrid package, example: --subPackage xxx									|
|--upload		|Whether to upload to WeChat platform after packaging, only effective when value is true							|
|--description	|Description of the uploaded mini program														|
|--privatekey	|WeChat code upload key file [Details](#uploadPrivateKey)							|
|--version		|Version number of the uploaded mini program; optional. If not filled, it will read the version number from manifest.json	|
|--sourceMap    |Generate SourceMap, effective when value is true, default is false				|
|--robot		|Specify WeChat CI robot number (range: 1 ~ 30), default is 1						|

Note: The `--robot` parameter only supports HBuilderX 3.6.18+ versions. You also need to upgrade the [WeChat Mini Program Upload CI Plugin](https://ext.dcloud.net.cn/plugin?id=7199)


```shell
# Only compile uni-app project to WeChat Mini Program
cli publish --platform mp-weixin --project project_name

# Compile uni-app project to WeChat Mini Program and upload to WeChat platform
cli publish --platform mp-weixin --project project_name --upload true --appid mini_program_appid --description publish_description --version publish_version --privatekey mini_program_upload_key_file

cli publish --platform mp-weixin --project project_name --upload true --appid mini_program_appid --description publish_description --version publish_version --privatekey mini_program_upload_key_file --robot 2
```


## Mini Program Code Upload Key@uploadPrivateKey

> HBuilderX 3.3.7+, uni-app publishing to WeChat Mini Program supports automatically uploading code to WeChat platform, no need to upload through WeChat Developer Tools anymore. [Details](/Tutorial/App/uni-app-publish-mp-weixin)
>
> HBuilderX publishing WeChat Mini Program requires providing the WeChat Mini Program code upload key

Through WeChat Mini Program CI, using the upload key to upload code, you can complete operations such as uploading and previewing WeChat Mini Program code with one click without opening WeChat Developer Tools.

**How to obtain the WeChat Mini Program code upload key?**

Open the WeChat Mini Program platform [official website](https://mp.weixin.qq.com/), scan to log in, in the left menu [Development -> Development Management], click the tab [Development Settings], as shown below:

<img src="/static/snapshots/cli/wechat-uploadPrivateKey.png" class="hd-img" />

**Download the key file:**

<img src="/static/snapshots/cli/wechat-downloadkeyFile.png" class="hd-img"/>

## Notes

1. Please fill in the `WeChat Mini Program appid` and `privatekey` correctly
2. If `IP whitelist` is enabled, please ensure the IP whitelist is configured on the WeChat platform
