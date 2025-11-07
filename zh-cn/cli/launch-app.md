# CLI uni-app 运行 - 手机或模拟器@launch-app

> HBuilderX cli 命令行工具

通过 CLI 运行到手机或模拟器的 uni-app 应用，支持 Android、iOS、鸿蒙平台。

## 命令说明

### launch app-android

运行到 Android App

**用法：**

```shell
./cli launch app-android --help
```

**参数：**

| 参数名称            | 描述                                                                                |
| ------------------- | ----------------------------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                                                   |
| --project           | HBuilder X 里导入的项目名称或绝对路径                                               |
| --deviceId          | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表        |
| --playground        | 基座类型（自定义基座仅支持云打包基座），取值：standard 或 custom，默认值为 standard |
| --native-log        | 显示原生日志，取值：true 或 false，默认值为 false                                   |
| --cleanCache        | 清理构建缓存（仅 uni-app x 项目生效），取值：true 或 false，默认值为 false          |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false                     |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                             |

**使用示例：**

```shell
# 运行到Android App
./cli launch app-android --project 项目名称

# 运行到Android App（指定设备）
./cli launch app-android --project 项目名称 --deviceId 设备序列号

# 运行到Android App（使用自定义基座）
./cli launch app-android --project 项目名称 --playground custom

# 运行到Android App（显示原生日志）
./cli launch app-android --project 项目名称 --native-log true

# 运行到Android App（清理构建缓存）
./cli launch app-android --project 项目名称 --cleanCache true

# 运行到Android App（编译模式运行）
./cli launch app-android --project 项目名称 --compile true

# 运行到Android App（编译错误后继续运行）
./cli launch app-android --project 项目名称 --continue-on-error true

# 运行到Android App（组合参数：指定设备 + 使用自定义基座）
./cli launch app-android --project 项目名称 --deviceId 设备序列号 --playground custom

# 运行到Android App（组合参数：编译模式 + 显示原生日志）
./cli launch app-android --project 项目名称 --compile true --native-log true

# 运行到Android App（组合参数：清理构建缓存 + 编译模式）
./cli launch app-android --project 项目名称 --cleanCache true --compile true
```

### launch app-ios

运行到 iOS App

**用法：**

```shell
./cli launch app-ios --help
```

**参数：**

| 参数名称               | 描述                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------- |
| --help                 | 显示 cli 命令帮助                                                                   |
| --project              | HBuilder X 里导入的项目名称或绝对路径                                               |
| --deviceId             | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表        |
| --iosTarget            | 设备类型，取值：device 或 simulator，默认值为 device                                |
| --playground           | 基座类型（自定义基座仅支持云打包基座），取值：standard 或 custom，默认值为 standard |
| --cleanCache           | 清理构建缓存（仅 uni-app x 项目生效），取值：true 或 false，默认值为 false          |
| --compile              | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false                     |
| --continue-on-error    | 编译错误后继续运行，取值：true 或 false，默认值为 false                             |
| --peveloperCertificate | 开发者证书文件（开发 uts 插件需要）                                                 |
| --provisioningProfile  | 配置描述文件（开发 uts 插件需要）                                                   |
| --privateKey           | 私钥密码（开发 uts 插件需要）                                                       |

**使用示例：**

```shell
# 运行到iOS App（真机）
./cli launch app-ios --project 项目名称

# 运行到iOS App（模拟器）
./cli launch app-ios --project 项目名称 --iosTarget simulator

# 运行到iOS App（指定设备）
./cli launch app-ios --project 项目名称 --deviceId 设备序列号

# 运行到iOS App（使用自定义基座）
./cli launch app-ios --project 项目名称 --playground custom

# 运行到iOS App（清理构建缓存）
./cli launch app-ios --project 项目名称 --cleanCache true

# 运行到iOS App（编译模式运行）
./cli launch app-ios --project 项目名称 --compile true

# 运行到iOS App（编译错误后继续运行）
./cli launch app-ios --project 项目名称 --continue-on-error true

# 运行到iOS App（开发uts插件，指定证书）
./cli launch app-ios --project 项目名称 --peveloperCertificate 证书文件 --provisioningProfile 描述文件 --privateKey 私钥密码

# 运行到iOS App（组合参数：模拟器 + 使用自定义基座）
./cli launch app-ios --project 项目名称 --iosTarget simulator --playground custom

# 运行到iOS App（组合参数：编译模式 + 清理构建缓存）
./cli launch app-ios --project 项目名称 --compile true --cleanCache true
```

### launch app-harmony

运行到鸿蒙

**用法：**

```shell
cli launch app-harmony --help
```

**参数：**

| 参数名称            | 描述                                                                         |
| ------------------- | ---------------------------------------------------------------------------- |
| --help              | cli 命令帮助                                                                 |
| --project           | HBuilder X 里导入的项目绝对路径或目录名                                      |
| --deviceId          | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --cleanCache        | 清理构建缓存，取值：true 或 false，默认值为 false                            |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false              |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                      |

**使用示例：**

```shell
# 运行到鸿蒙
cli launch app-harmony --project 项目名称

# 运行到鸿蒙（指定设备）
cli launch app-harmony --project 项目名称 --deviceId 设备序列号

# 运行到鸿蒙（清理构建缓存）
cli launch app-harmony --project 项目名称 --cleanCache true

# 运行到鸿蒙（编译模式运行）
cli launch app-harmony --project 项目名称 --compile true

# 运行到鸿蒙（编译错误后继续运行）
cli launch app-harmony --project 项目名称 --continue-on-error true

# 运行到鸿蒙（组合参数：指定设备 + 清理构建缓存）
cli launch app-harmony --project 项目名称 --deviceId 设备序列号 --cleanCache true

# 运行到鸿蒙（组合参数：编译模式 + 清理构建缓存）
cli launch app-harmony --project 项目名称 --compile true --cleanCache true
```
