# CLI uni-app / uni-app x 运行 - 手机或模拟器@launch-app

> 需HBuilderX 5.0+ 版本

> 您也可以通过 npm 包使用此功能：[@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

通过 CLI 将 **uni-app** 或 **uni-app x** 项目运行到手机或模拟器，支持 Android、iOS、鸿蒙平台。[HBuilderX CLI](/cli/README?id=cli)

> **适用项目**：uni-app、uni-app x（`app-android` / `app-ios` / `app-harmony`）。完整平台对照见 [CLI 概述](/cli/README?id=project-platform)。

## 运行模式说明@launch-ui

> 需 HBuilderX **5.11+** 版本

各 `launch` 命令均支持 `--ui` 参数，用于切换运行方式：

| 取值 | 说明 |
| --- | --- |
| 不传或 `--ui false`（默认） | **纯 CLI 运行**：在终端完成编译与运行，适合 CI、脚本自动化 |
| `--ui true` | **界面运行**：与在 HBuilderX 中点击工具栏「运行」按钮效果相同，由 IDE 界面接管后续流程 |

## 命令说明

### launch app-android@launch-app-android

运行到 Android App

**用法：**

```shell
./cli launch app-android --help
```

**参数：**

| 参数名称            | 描述                                                                                |
| ------------------- | ----------------------------------------------------------------------------------- |
| --help              | cli 命令帮助                                                                        |
| --project           | HBuilder X 里导入的项目名称或绝对路径                                               |
| --ui                | 切换为界面运行模式（需 HBuilderX 5.11+）。默认纯 CLI 运行，传 `--ui true` 后通过界面启动。取值：true 或 false，默认值为 false |
| --deviceId          | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表        |
| --playground        | 基座类型（自定义基座仅支持云打包基座），取值：standard 或 custom，默认值为 standard |
| --native-log        | 显示原生日志，取值：true 或 false，默认值为 false                                   |
| --cleanCache        | 清理构建缓存（仅 uni-app x 项目生效），取值：true 或 false，默认值为 false          |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false                     |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                             |
| --pagePath          | 页面路径（需 HBuilderX 5.01+ 版本）                                                  |
| --pageQuery         | 页面查询参数（使用 & 符号连接多个参数，需 HBuilderX 5.01+ 版本）                      |

**使用示例：**

```shell
# 运行到Android App
./cli launch app-android --project 项目名称

# 运行到Android App（界面运行，等同点击「运行」按钮）
./cli launch app-android --project 项目名称 --ui true

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

# 运行到Android App（指定页面路径）
./cli launch app-android --project 项目名称 --pagePath pages/index/index

# 运行到Android App（指定页面路径和查询参数）
./cli launch app-android --project 项目名称 --pagePath pages/detail/detail --pageQuery id=123&type=product
```

### launch app-ios@launch-app-ios

运行到 iOS App

**用法：**

```shell
./cli launch app-ios --help
```

**参数：**

| 参数名称               | 描述                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------- |
| --help                 | cli 命令帮助                                                                        |
| --project              | HBuilder X 里导入的项目名称或绝对路径                                               |
| --ui                   | 切换为界面运行模式（需 HBuilderX 5.11+）。默认纯 CLI 运行，传 `--ui true` 后通过界面启动。取值：true 或 false，默认值为 false |
| --deviceId             | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表        |
| --iosTarget            | 设备类型，取值：device 或 simulator，默认值为 device                                |
| --playground           | 基座类型（自定义基座仅支持云打包基座），取值：standard 或 custom，默认值为 standard |
| --cleanCache           | 清理构建缓存（仅 uni-app x 项目生效），取值：true 或 false，默认值为 false          |
| --compile              | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false                     |
| --continue-on-error    | 编译错误后继续运行，取值：true 或 false，默认值为 false                             |
| --peveloperCertificate | 开发者证书文件（开发 uts 插件需要）                                                 |
| --provisioningProfile  | 配置描述文件（开发 uts 插件需要）                                                   |
| --privateKey           | 私钥密码（开发 uts 插件需要）                                                       |
| --pagePath             | 页面路径（需 HBuilderX 5.01+ 版本）                                                  |
| --pageQuery            | 页面查询参数（使用 & 符号连接多个参数，需 HBuilderX 5.01+ 版本）                      |

**使用示例：**

```shell
# 运行到iOS App（真机）
./cli launch app-ios --project 项目名称

# 运行到iOS App（界面运行）
./cli launch app-ios --project 项目名称 --ui true

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

# 运行到iOS App（指定页面路径）
./cli launch app-ios --project 项目名称 --pagePath pages/index/index

# 运行到iOS App（指定页面路径和查询参数）
./cli launch app-ios --project 项目名称 --pagePath pages/detail/detail --pageQuery id=123&type=product
```

### launch app-harmony@launch-app-harmony

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
| --ui                | 切换为界面运行模式（需 HBuilderX 5.11+）。默认纯 CLI 运行，传 `--ui true` 后通过界面启动。取值：true 或 false，默认值为 false |
| --deviceId          | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --cleanCache        | 清理构建缓存，取值：true 或 false，默认值为 false                            |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false              |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                      |
| --pagePath          | 页面路径（需 HBuilderX 5.01+ 版本）                                          |
| --pageQuery         | 页面查询参数（使用 & 符号连接多个参数，需 HBuilderX 5.01+ 版本）              |

**使用示例：**

```shell
# 运行到鸿蒙
cli launch app-harmony --project 项目名称

# 运行到鸿蒙（界面运行）
cli launch app-harmony --project 项目名称 --ui true

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

# 运行到鸿蒙（指定页面路径和查询参数）
cli launch app-harmony --project 项目名称 --pagePath pages/index/index --pageQuery id=123
```

## 通过npm scripts使用CLI@npm

我们需要在项目中安装 [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli),它是一个桥梁，让我们可以通过命令行来调用 HBuilderX 的强大功能（如启动测试流程）。

#### 添加 npm 脚本支持

```shell
# 首先，请确保你的项目根目录下有 package.json 文件。如果没有，可以通过以下命令快速生成：
npm init -y

# 然后，安装 hbuilderx-cli 作为开发依赖：
npm install @dcloudio/hbuilderx-cli --save-dev
```

#### 使用npm命令运行应用

```shell
# 运行到 Android App
npm run launch:app-android -- --deviceId feyhuos8ai89jr4p

# 运行到 iOS真机
npm run launch:app-ios -- --iosTarget device --deviceId 00001110001C35240AF2801A

# 运行到 iOS模拟器
npm run launch:app-ios -- --iosTarget simulator --deviceId 3FFE4F41-997F-4ED3-AC3B-DF4ADB9A4262

# 运行到鸿蒙
npm run launch:app-harmony -- --deviceId 设备序列号
```
