# CLI 原生App-本地打包(生成本地打包App資源)@appResource

> HBuilderX 3.4.3-alpha，支持使用CLI生成本地打包App資源。

通過此種方式，可在命令行或其它CI工具中，完成uni-app、Wap2App、5+App項目生成本地打包App資源。

## CLI命令語法@cmd

```shell
# 生成本地打包App資源
cli publish --platform APP --type appResource --project 項目名稱
```

| 參數       | 說明                                              |
| ---------- | ------------------------------------------------- |
| --platform | 必填，[APP] 原生App                               |
| --type     | 必填，[appResource] 本地打包(生成本地打包App資源) |
| --project  | 必填，項目名稱                                    |
