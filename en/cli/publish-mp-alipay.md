# CLI Publish uni-app to Alipay Mini Program@mp-alipay

> HBuilderX 3.8.5-alpha, supports using CLI to publish Alipay Mini Programs.

Through this method, you can complete operations such as uploading and previewing Alipay Mini Program code in command line or other CI tools.

## CLI Command Syntax@cmd

|Parameter			|Description																	|
|--				|--																		|
|--platform		|Required, publish platform (MP-ALIPAY)												|
|--project		|Required, project name															|
|--appid		|Required, Alipay Mini Program appid													|
|--subPackage	|Publish as hybrid package, example: --subPackage xxx									|
|--upload		|Whether to upload to Alipay platform after packaging, only effective when value is true							|
|--description	|Description of the uploaded mini program														|
|--privatekey	|Alipay development tool key file [Details](#uploadPrivateKey)							|
|--version		|Version number of the uploaded mini program; optional. If not filled, it will read the version number from manifest.json	|


```shell
# Only compile uni-app project to Alipay Mini Program
cli publish --platform mp-alipay --project project_name

# Compile uni-app project to Alipay Mini Program and upload to Alipay platform
cli publish --platform mp-alipay --project project_name --upload true --appid mini_program_appid --description publish_description --version publish_version --privatekey alipay_dev_tool_key_file

```


## Alipay Development Tool Key File@uploadPrivateKey

> HBuilderX 3.8.5+, uni-app publishing to Alipay Mini Program supports automatically uploading code to Alipay platform, no need to upload through Alipay Developer Tools anymore.
>
> HBuilderX publishing Alipay Mini Program requires providing the Alipay development tool key file

Through Alipay Mini Program CLI, using the Alipay development tool key to upload code, you can complete the Alipay Mini Program code upload operation with one click without opening Alipay Developer Tools.

**How to obtain the Alipay development tool key file?**

Open Alipay Open Platform [Development Tool Key](https://open.alipay.com/develop/manage/tool-key), scan to log in, in the left menu [Development Tool Key], click to generate identity key, as shown below:

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-createPrivateKey.png" class="hd-img" />

**Download the development tool key:**

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/cli/alipay-downloadkeyFile.png" class="hd-img"/>

## Notes

Please fill in the `Alipay Mini Program appid` and development tool key correctly
