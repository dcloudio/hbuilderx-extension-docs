# CLI uni-app 运行日志 - WEB@launch-web

> HBuilderX cli 命令行工具

通过 CLI 查看运行到 Web 或手机 H5 的 uni-app 应用日志。

## 命令说明

### logcat web

查看运行到 Web 或手机 H5 日志

**用法：**

```shell
./cli logcat web --help
```

**参数：**

| 参数名称  | 描述                                                                       |
| --------- | -------------------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                                          |
| --project | HBuilder X 里导入的项目名称或绝对路径                                      |
| --browser | 浏览器类型，取值：Built、Chrome、Firefox、Ie、Edge、Safari，默认值为 Built |

**使用示例：**

```shell
# 查看Web日志（使用默认浏览器）
./cli logcat web --project 项目名称

# 查看Web日志（指定Chrome浏览器）
./cli logcat web --project 项目名称 --browser Chrome

# 查看Web日志（指定Firefox浏览器）
./cli logcat web --project 项目名称 --browser Firefox

# 查看Web日志（指定Edge浏览器）
./cli logcat web --project 项目名称 --browser Edge

# 查看Web日志（指定Safari浏览器）
./cli logcat web --project 项目名称 --browser Safari

# 查看Web日志（指定IE浏览器）
./cli logcat web --project 项目名称 --browser Ie
```
