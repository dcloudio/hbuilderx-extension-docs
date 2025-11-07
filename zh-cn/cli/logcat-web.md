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

| 参数名称        | 描述                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| --help          | 显示 cli 命令帮助                                                             |
| --project       | HBuilder X 里导入的项目名称或绝对路径                                         |
| --wait-for-stop | 等待运行停止后再退出，取值：true 或 false，默认值为 false                     |
| --full-log      | 获取完整编译日志，默认仅显示最新编译日志，取值：true 或 false，默认值为 false |
| --browser       | 浏览器类型，取值：Built、Chrome、Firefox、Ie、Edge、Safari，默认值为 Built    |

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

# 查看Web日志（等待运行停止）
./cli logcat web --project 项目名称 --wait-for-stop true

# 查看Web日志（获取完整日志）
./cli logcat web --project 项目名称 --full-log true

# 查看Web日志（组合参数：指定浏览器 + 等待停止 + 完整日志）
./cli logcat web --project 项目名称 --browser Chrome --wait-for-stop true --full-log true
```
