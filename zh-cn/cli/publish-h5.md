# CLI uni-app 发行 - WEB@h5

> HBuilderX cli 命令行工具

通过 CLI 发行 uni-app 项目到 H5，支持编译、上传等操作。

## 命令说明

### publish h5

发行到 Web/H5

**参数：**

| 参数          | 说明                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| --platform    | 必填，发行平台(H5)（HBuilderX 4.67-alpha+ 支持 web）                      |
| --project     | 必填，项目名称                                                            |
| --ssr         | SSR 发行，值为 true 时使用，默认为 false(项目使用 vue3 时配置此项才生效)  |
| --ssrHost     | SSR 发行时，网页托管的服务商配置多个域名的情况下，需指定域名地址（4.51+） |
| --ssrProvider | SSR 发行时，项目下存在多个 uniCloud 服务商，需指定服务商代号（4.51+）     |
| --webDomain   | 网站域名(发行类型为 H5 时可配置此项)                                      |
| --webTitle    | 网站标题(发行类型为 H5 时可配置此项，不指定默认为项目名称)                |
| --webHosting  | 前端网页托管，值为 true 时使用，默认为 false                              |
| --provider    | uniCloud 服务商代号[aliyun、alipay、tcb]（4.51 之前版本只支持 aliyun）    |
| --spaceId     | uniCloud 云空间 id                                                        |

**使用示例：**

```shell
# 仅编译uni-app项目到H5，不上传uniCloud前端网页托管
cli publish --platform h5 --project 项目名称

# 编译uni-app项目到H5，并上传到前端网页托管
cli publish --platform h5 --project 项目名称 --webHosting true --provider aliyun --spaceId xxxxxxx

# 编译uni-app项目到H5，自定义网站域名和标题
cli publish --platform h5 --project 项目名称 --webDomain 域名地址 --webTitle 网站标题

# 编译uni-app项目到H5，SSR发行
cli publish --platform h5 --project 项目名称 --ssr true

# 编译uni-app项目到H5，SSR发行并指定域名和服务商
cli publish --platform h5 --project 项目名称 --ssr true --ssrHost 域名地址 --ssrProvider aliyun

# 编译uni-app项目到H5，组合参数：前端网页托管 + 自定义域名标题
cli publish --platform h5 --project 项目名称 --webHosting true --provider aliyun --spaceId xxxxxxx --webDomain 域名地址 --webTitle 网站标题

# 发行到Web（HBuilderX 4.67-alpha+）
cli publish web --project 项目名称

# 发行到Web并上传到前端网页托管（HBuilderX 4.67-alpha+）
cli publish web --project 项目名称 --webHosting true --provider aliyun --spaceId xxxxxxx
```

**注意事项：**

> HBuilderX 4.67-alpha 开始 platform 支持 web 平台

> 使用 CLI 命令，上传文件到前端网页托管，如果云端已存在此文件，会使用本地文件覆盖云端的文件。

**扩展阅读：**

-   [前端网页托管功能详情](https://uniapp.dcloud.io/uniCloud/hosting)
