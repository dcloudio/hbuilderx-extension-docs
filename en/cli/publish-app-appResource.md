# CLI 原生App-本地打包(生成本地打包App资源)@appResource

> HBuilderX 3.4.3-alpha，支持使用CLI生成本地打包App资源。

通过此种方式，可在命令行或其它CI工具中，完成uni-app、Wap2App、5+App项目生成本地打包App资源。

## CLI命令语法@cmd

```shell
# 生成本地打包App资源
cli publish --platform APP --type appResource --project 项目名称
```

| 参数       | 说明                                              |
| ---------- | ------------------------------------------------- |
| --platform | 必填，[APP] 原生App                               |
| --type     | 必填，[appResource] 本地打包(生成本地打包App资源) |
| --project  | 必填，项目名称                                    |
