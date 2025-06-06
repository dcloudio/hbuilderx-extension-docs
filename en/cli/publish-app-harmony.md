# CLI uni-app发行 - App-Harmony-本地打包App资源@publishAppHarmony

> HBuilderX 4.71-alpha，支持使用 CLI 对鸿蒙平台生成本地打包 App 资源。

通过此种方式，可在命令行或其它 CI 工具中，完成 uni-app (x) 项目生成本地打包 App 资源。

## 基本使用@usage

1. 首先, 需要启动 HBuilderX. (进入 HBuilderX 安装目录根目录, 终端输入 `cli.exe open`)
2. cli 运行, 终端输入
```shell
cli publish app-harmony --type 资源类型 --project 项目名称
```

## 命令参数@params

| 参数       | 说明                                                            |
| ---------- | -------------------------------------------------------------- |
| --type     | 必填，资源类型，取值为 `appResource` 或 `wgt`，表示打包 App 资源或 wgt |
| --project  | 必填，项目名称                                                  |

## 使用示例@example
```shell
# 生成本地打包App资源
cli publish app-harmony --type appResource --project demo-app
```
