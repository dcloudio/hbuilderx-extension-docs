# CLI uni-app發行 - App-Harmony-本地打包@packAppHarmony

> HBuilderX 4.67-alpha，支持使用CLI對鴻蒙平台進行本地打包。

通過此種方式，可在命令行或其它 CI 工具中，完成 uni-app (x) 項目對鴻蒙平台進行本地打包。

## 基本使用@usage

1. 首先，需要啟動HBuilderX。(進入HBuilderX安裝目錄根目錄，終端輸入`cli.exe open`)
2. cli運行，終端輸入
```shell
cli pack app-harmony --project 項目名稱
```

## 命令參數@params

| 參數       | 說明                      |
| ---------- | ------------------------ |
| --help     | 命令幫助                  |
| --project  | 必填，項目名稱            |


## 使用示例@example
```shell
# 查看命令幫助
cli pack app-harmony --help

# 對鴻蒙平台進行本地打包
cli pack app-harmony --project demo-app
```
