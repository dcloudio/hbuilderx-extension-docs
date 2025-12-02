# CLI Publish uni-app to H5@h5

> HBuilderX 3.3.7-alpha, supports using CLI to publish uni-app projects to H5.

Through this method, you can complete the compilation and upload of uni-app projects to H5 in command line or other CI tools.

## Command Syntax@cmd

```shell
# Only compile uni-app project to H5, do not upload to uniCloud frontend web hosting
cli publish --platform h5 --project project_name

# Compile uni-app project to H5 and upload to frontend web hosting
cli publish --platform h5 --project project_name --webHosting true --provider aliyun --spaceId xxxxxxx
```

|Parameter			|Description																	|
|--				|--																		|
|--platform		|Required, publish platform (H5)												|
|--project		|Required, project name															|
|--ssr			|SSR publishing, use when value is true, default is false (only effective when project uses vue3)	|
|--webDomain	|Website domain (can be configured when publish type is H5)										|
|--webTitle		|Website title (can be configured when publish type is H5, defaults to project name if not specified)				|
|--webHosting	|Frontend web hosting, use when value is true, default is false							|
|--provider		|uniCloud service provider code (currently only supports aliyun, defaults to aliyun if not specified), does not support Tencent Cloud	|
|--spaceId		|uniCloud cloud space id												|

Note: When using CLI command to upload files to frontend web hosting, if the file already exists in the cloud, the local file will overwrite the cloud file.

# Extensions@expand

- [Frontend Web Hosting Feature Details](https://uniapp.dcloud.io/uniCloud/hosting)