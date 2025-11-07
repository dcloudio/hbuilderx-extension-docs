# CLI uni-app 运行日志 - 手机或模拟器@launch-app

> HBuilderX cli 命令行工具

通过 CLI 查看运行到手机或模拟器的 uni-app 应用日志，支持 Android、iOS、鸿蒙平台。

## 命令说明

### logcat app-android

查看运行到 Android App 日志

**用法：**

```shell
./cli logcat app-android --help
```

**参数：**

| 参数名称        | 描述                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| --help          | 显示 cli 命令帮助                                                             |
| --project       | HBuilder X 里导入的项目名称或绝对路径                                         |
| --deviceId      | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表  |
| --wait-for-stop | 等待运行停止后再退出，取值：true 或 false，默认值为 false                     |
| --full-log      | 获取完整编译日志，默认仅显示最新编译日志，取值：true 或 false，默认值为 false |

**使用示例：**

```shell
# 查看Android App日志
./cli logcat app-android --project 项目名称

# 查看Android App日志（指定设备）
./cli logcat app-android --project 项目名称 --deviceId 设备序列号

# 查看Android App日志（等待运行停止）
./cli logcat app-android --project 项目名称 --wait-for-stop true

# 查看Android App日志（获取完整日志）
./cli logcat app-android --project 项目名称 --full-log true

# 查看Android App日志（组合参数：指定设备 + 等待停止 + 完整日志）
./cli logcat app-android --project 项目名称 --deviceId 设备序列号 --wait-for-stop true --full-log true
```

### logcat app-ios

查看运行到 iOS App 日志

**用法：**

```shell
./cli logcat app-ios --help
```

**参数：**

| 参数名称        | 描述                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| --help          | 显示 cli 命令帮助                                                             |
| --project       | HBuilder X 里导入的项目名称或绝对路径                                         |
| --deviceId      | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表  |
| --iosTarget     | 设备类型，取值：device 或 simulator，默认值为 device                          |
| --wait-for-stop | 等待运行停止后再退出，取值：true 或 false，默认值为 false                     |
| --full-log      | 获取完整编译日志，默认仅显示最新编译日志，取值：true 或 false，默认值为 false |

**使用示例：**

```shell
# 查看iOS App日志（真机）
./cli logcat app-ios --project 项目名称

# 查看iOS App日志（模拟器）
./cli logcat app-ios --project 项目名称 --iosTarget simulator

# 查看iOS App日志（指定设备）
./cli logcat app-ios --project 项目名称 --deviceId 设备序列号

# 查看iOS App日志（等待运行停止）
./cli logcat app-ios --project 项目名称 --wait-for-stop true

# 查看iOS App日志（获取完整日志）
./cli logcat app-ios --project 项目名称 --full-log true

# 查看iOS App日志（组合参数：模拟器 + 指定设备 + 等待停止 + 完整日志）
./cli logcat app-ios --project 项目名称 --iosTarget simulator --deviceId 设备序列号 --wait-for-stop true --full-log true
```

### logcat app-harmony

查看运行到鸿蒙日志

**用法：**

```shell
./cli logcat app-harmony --help
```

**参数：**

| 参数名称        | 描述                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| --help          | 显示 cli 命令帮助                                                             |
| --project       | HBuilder X 里导入的项目名称或绝对路径                                         |
| --deviceId      | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表  |
| --wait-for-stop | 等待运行停止后再退出，取值：true 或 false，默认值为 false                     |
| --full-log      | 获取完整编译日志，默认仅显示最新编译日志，取值：true 或 false，默认值为 false |

**使用示例：**

```shell
# 查看鸿蒙App日志
./cli logcat app-harmony --project 项目名称

# 查看鸿蒙App日志（指定设备）
./cli logcat app-harmony --project 项目名称 --deviceId 设备序列号

# 查看鸿蒙App日志（等待运行停止）
./cli logcat app-harmony --project 项目名称 --wait-for-stop true

# 查看鸿蒙App日志（获取完整日志）
./cli logcat app-harmony --project 项目名称 --full-log true

# 查看鸿蒙App日志（组合参数：指定设备 + 等待停止 + 完整日志）
./cli logcat app-harmony --project 项目名称 --deviceId 设备序列号 --wait-for-stop true --full-log true
```
