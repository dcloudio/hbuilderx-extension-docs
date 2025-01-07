# CLI 发行uni-app到H5@h5

> HBuilderX 3.3.7-alpha，支持使用CLI发行uni-app项目到H5。

通过此种方式，可在命令行或其它CI工具中，完成uni-app项目到H5的编译、上传。

## 命令语法@cmd

```shell
# 仅编译uni-app项目到H5，不上传uniCloud前端网页托管
cli publish --platform h5 --project 项目名称

# 编译uni-app项目到H5，并上传到前端网页托管
cli publish --platform h5 --project 项目名称 --webHosting true --provider aliyun --spaceId xxxxxxx
```

|参数			|说明																	|
|--				|--																		|
|--platform		|必填，发行平台(MP-WEIXIN)												|
|--project		|必填，项目名称															|
|--ssr			|ssr发行，值为 true 时使用，默认为 false(项目使用vue3时配置此项才生效)	|
|--ssrHost		|ssr发行时，网页托管的服务商配置多个域名的情况下，需指定域名地址（4.51以上版本支持）	|
|--ssrProvider	|ssr发行时，项目下存在多个uniCloud 服务商，需指定服务商代号（4.51以上版本支持）	|
|--webDomain	|网站域名(发行类型为H5时可配置此项)										|
|--webTitle		|网站标题(发行类型为H5时可配置此项，不指定默认为项目名称)				|
|--webHosting	|前端网页托管，值为 true 时使用，默认为 false							|
|--provider		|uniCloud 服务商代号[aliyun|alipay|tcb]（4.51之前版本只支持aliyun）	|
|--spaceId		|uniCloud 云空间id												|

注意事项：使用CLI命令，上传文件到前端网页托管，如果云端已存在此文件，会使用本地文件覆盖云端的文件。

# 拓展@expand

- [前端网页托管功能详情](https://uniapp.dcloud.io/uniCloud/hosting)
