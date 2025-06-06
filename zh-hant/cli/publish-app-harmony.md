# CLI uni-app發行 - App-Harmony-本地打包App資源@publishAppHarmony

> HBuilderX 4.71-alpha，支援使用 CLI 對鴻蒙平台生成本地打包 App 資源。

通過此種方式，可在命令列或其它 CI 工具中，完成 uni-app (x) 項目生成本地打包 App 資源。

## 基本使用@usage

1. 首先, 需要啟動 HBuilderX. (進入 HBuilderX 安裝目錄根目錄, 終端輸入 `cli.exe open`)
2. cli 運行, 終端輸入
```shell
cli publish app-harmony --type 資源類型 --project 項目名稱
```

## 命令參數@params

| 參數       | 說明                                              |
| ---------- | ------------------------------------------------- |
| --type     | 必填，資源類型，取值为 `appResource` 或 `wgt`，表示打包 App 資源或 wgt |
| --project  | 必填，項目名稱                                    |

## 使用示例@example
```shell
# 生成本地打包App資源
cli publish app-harmony --type appResource --project demo-app
```
