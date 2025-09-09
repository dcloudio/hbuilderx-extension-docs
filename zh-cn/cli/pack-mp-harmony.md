# CLI uni-app发行 - 鸿蒙元服务@packMpHarmony

> HBuilderX 4.81-alpha，支持使用 CLI 对鸿蒙元服务平台进行本地打包。

通过此种方式，可在命令行或其它 CI 工具中，完成 uni-app 项目对鸿蒙元服务平台进行本地打包。

## 基本使用@usage

1. 首先, 需要启动HBuilderX. (进入HBuilderX安装目录根目录, 终端输入`cli.exe open`)
2. cli运行, 终端输入
```shell
cli pack mp-harmony --project 项目名称
```

## 命令参数@params

| 参数       | 说明                      |
| ---------- | ------------------------ |
| --help     | 命令帮助                  |
| --project  | 必填，项目名称            |


## 使用示例@example
```shell
# 查看命令帮助
cli pack mp-harmony --help

# 对鸿蒙元服务平台进行本地打包
cli pack mp-harmony --project demo-app
```
