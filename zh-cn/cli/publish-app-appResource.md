# CLI uni-app发行 - App生成本地打包资源@appResource

> HBuilderX 3.4.3-alpha，支持使用CLI生成本地打包App资源。

通过此种方式，可在命令行或其它CI工具中，完成uni-app、Wap2App、5+App项目生成本地打包App资源。

## 命令参数@params

| 参数       | 说明                                              |
| ---------- | ------------------------------------------------- |
| --platform | 必填，[APP] 原生App                               |
| --type     | 必填，[appResource] 本地打包(生成本地打包App资源) |
| --project  | 必填，项目名称                                    |

***注意事项***
> HBuilderX 4.67-alpha开始 platform 支持app-ios/app-android平台

## 使用示例@example
```shell
# 生成本地打包App资源
cli publish --platform APP --type appResource --project 项目名称
```
