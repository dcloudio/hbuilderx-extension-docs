# CLI uni-app 运行日志 - 手机或模拟器@launch-app

> HBuilderX cli 命令行工具

> 需HBuilderX 4.87+ 版本

> 您也可以通过 npm 包使用此功能：[@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

通过 CLI 查看运行到手机或模拟器的 uni-app 应用日志，支持 Android、iOS、鸿蒙平台。[了解HBuilderX CLI](/cli/README?id=cli)

您可以将cli加入到环境变量，这样您就可以在任意目录、任意终端上，随时随地调用cli， 而无需通过输入cli绝对路径的方式来使用它。[详情](/cli/env)

## 命令说明

### logcat app-android

查看运行到 Android App 日志

**用法：**

```shell
./cli logcat app-android --help
```

**参数：**

| 参数名称   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                            |
| --project  | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --mode     | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild               |

**使用示例：**

```shell
# Mac电脑 使用cli查看 hello-uni-app-x项目 Android App日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 Android App日志
D:\ide\HBuilderX\cli.exe logcat app-android --project hello-uni-app-x

# 查看Android App日志
./cli logcat app-android --project 项目名称

# 查看Android App日志（指定设备）
./cli logcat app-android --project 项目名称 --deviceId 设备序列号

# 查看Android App日志（指定日志模式）
./cli logcat app-android --project 项目名称 --mode full

# 查看Android App日志（组合参数：指定设备 + 日志模式）
./cli logcat app-android --project 项目名称 --deviceId 设备序列号 --mode lastBuild
```

### logcat app-ios

查看运行到 iOS App 日志

**用法：**

```shell
./cli logcat app-ios --help
```

**参数：**

| 参数名称    | 描述                                                                         |
| ----------- | ---------------------------------------------------------------------------- |
| --help      | 显示 cli 命令帮助                                                            |
| --project   | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId  | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --iosTarget | 设备类型，取值：device 或 simulator，默认值为 device                         |
| --mode      | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild               |

**使用示例：**

```shell
# Mac电脑 使用cli查看 hello-uni-app-x项目 iOS App日志（真机）
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 iOS App日志（真机）
D:\ide\HBuilderX\cli.exe logcat app-ios --project hello-uni-app-x

# 查看iOS App日志（真机）
./cli logcat app-ios --project 项目名称

# 查看iOS App日志（模拟器）
./cli logcat app-ios --project 项目名称 --iosTarget simulator

# 查看iOS App日志（指定设备）
./cli logcat app-ios --project 项目名称 --deviceId 设备序列号

# 查看iOS App日志（指定日志模式）
./cli logcat app-ios --project 项目名称 --mode full

# 查看iOS App日志（组合参数：模拟器 + 指定设备 + 日志模式）
./cli logcat app-ios --project 项目名称 --iosTarget simulator --deviceId 设备序列号 --mode lastBuild
```

### logcat app-harmony

查看运行到鸿蒙日志

**用法：**

```shell
./cli logcat app-harmony --help
```

**参数：**

| 参数名称   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                            |
| --project  | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --mode     | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild               |

**使用示例：**

```shell
# Mac电脑 使用cli查看 hello-uni-app-x项目 鸿蒙App日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 鸿蒙App日志
D:\ide\HBuilderX\cli.exe logcat app-harmony --project hello-uni-app-x

# 查看鸿蒙App日志
./cli logcat app-harmony --project 项目名称

# 查看鸿蒙App日志（指定设备）
./cli logcat app-harmony --project 项目名称 --deviceId 设备序列号

# 查看鸿蒙App日志（指定日志模式）
./cli logcat app-harmony --project 项目名称 --mode full

# 查看鸿蒙App日志（组合参数：指定设备 + 日志模式）
./cli logcat app-harmony --project 项目名称 --deviceId 设备序列号 --mode lastBuild
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

#### 使用npm命令查看日志

```shell
# 查看 Android 日志
npm run logcat:app-android -- --deviceId feyhuos8ai89jr4p

# 查看 iOS真机 日志。 
npm run logcat:app-ios -- --iosTarget device --deviceId 00001110001C35240AF2801A

# 查看 iOS模拟器 日志。 
npm run logcat:app-ios -- --iosTarget simulator --deviceId 3FFE4F41-997F-4ED3-AC3B-DF4ADB9A4262
```