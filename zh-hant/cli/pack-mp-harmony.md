# CLI uni-app發行 - 鴻蒙元服務@packMpHarmony

> HBuilderX 4.81-alpha，支援使用 CLI 對鴻蒙元服務平台進行本地打包。

透過此方式，可在命令列或其他 CI 工具中，完成 uni-app 專案對鴻蒙元服務平台進行本地打包。

## 基本使用@usage

1. 首先，需要啟動 HBuilderX。（進入 HBuilderX 安裝目錄根目錄，終端輸入 `cli.exe open`）
2. cli 執行，終端輸入
```shell
cli pack mp-harmony --project 專案名稱
```

## 命令參數@params

| 參數       | 說明                      |
| ---------- | ------------------------ |
| --help     | 命令幫助                  |
| --project  | 必填，專案名稱            |


## 使用範例@example
```shell
# 查看命令幫助
cli pack mp-harmony --help

# 對鴻蒙元服務平台進行本地打包
cli pack mp-harmony --project demo-app
```
