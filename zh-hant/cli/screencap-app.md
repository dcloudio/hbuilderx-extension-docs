# CLI uni-app 截图 - 手机或模拟器@screencap-app

> 需HBuilderX 5.01+ 版本

通过 CLI 对已运行到手机或模拟器的 uni-app 应用进行截图，支持 Android、iOS、鸿蒙平台。该功能主要用于辅助 AI 通过截图来判断页面显示的准确性，帮助开发者快速验证应用在不同设备上的实际渲染效果。

## 命令说明

### screencap app-android

对已运行到 Android App 的项目进行截图，可用于辅助 AI 判断页面显示的准确性

**用法：**

```shell
./cli screencap app-android --help
```

**参数：**

| 参数名称   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                            |
| --project  | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId | 设备序列号，需与当前运行会话一致；不填则使用该平台下最近连接的一台设备       |
| --saveFile | 截图保存的完整文件路径（如 .png），必填                                      |
| --fullPage | 截图类型，取值：true（长图）或 false（当前屏），默认值为 true                |

**使用示例：**

```shell
# Mac电脑 使用cli对 hello-uni-app-x项目 Android App截图
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-android --project hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-android --project /User/apple/Desktop/hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Windows电脑: 使用cli对 hello-uni-app-x项目 Android App截图
D:\ide\HBuilderX\cli.exe screencap app-android --project hello-uni-app-x --saveFile D:\screenshot.png

# 对Android App截图
./cli screencap app-android --project 项目名称 --saveFile screenshot.png

# 对Android App截图（指定设备）
./cli screencap app-android --project 项目名称 --deviceId 设备序列号 --saveFile screenshot.png

# 对Android App截图（截取长图，默认）
./cli screencap app-android --project 项目名称 --saveFile screenshot.png --fullPage true

# 对Android App截图（只截取当前屏）
./cli screencap app-android --project 项目名称 --saveFile screenshot.png --fullPage false
```

### screencap app-ios

对已运行到 iOS App 的项目进行截图，可用于辅助 AI 判断页面显示的准确性

**用法：**

```shell
./cli screencap app-ios --help
```

**参数：**

| 参数名称   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                            |
| --project  | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId | 设备序列号（udid），需与当前运行会话一致；不填则使用该平台下最近连接的一台设备 |
| --saveFile | 截图保存的完整文件路径（如 .png），必填                                      |
| --fullPage | 截图类型，取值：true（长图）或 false（当前屏），默认值为 true                |

**使用示例：**

```shell
# Mac电脑 使用cli对 hello-uni-app-x项目 iOS App截图（真机）
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-ios --project hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-ios --project /User/apple/Desktop/hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Windows电脑: 使用cli对 hello-uni-app-x项目 iOS App截图（真机）
D:\ide\HBuilderX\cli.exe screencap app-ios --project hello-uni-app-x --saveFile D:\screenshot.png

# 对iOS App截图
./cli screencap app-ios --project 项目名称 --saveFile screenshot.png

# 对iOS App截图（指定设备）
./cli screencap app-ios --project 项目名称 --deviceId 设备序列号 --saveFile screenshot.png

# 对iOS App截图（截取长图，默认）
./cli screencap app-ios --project 项目名称 --saveFile screenshot.png --fullPage true

# 对iOS App截图（只截取当前屏）
./cli screencap app-ios --project 项目名称 --saveFile screenshot.png --fullPage false
```

### screencap app-harmony

对已运行到鸿蒙的项目进行截图，可用于辅助 AI 判断页面显示的准确性

**用法：**

```shell
./cli screencap app-harmony --help
```

**参数：**

| 参数名称   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                            |
| --project  | HBuilder X 里导入的项目名称或绝对路径                                        |
| --deviceId | 设备序列号，需与当前运行会话一致；不填则使用该平台下最近连接的一台设备       |
| --saveFile | 截图保存的完整文件路径（如 .png），必填                                      |
| --fullPage | 截图类型，取值：true（长图）或 false（当前屏），默认值为 true                |

**使用示例：**

```shell
# Mac电脑 使用cli对 hello-uni-app-x项目 鸿蒙App截图
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-harmony --project hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli screencap app-harmony --project /User/apple/Desktop/hello-uni-app-x --saveFile /Users/apple/Desktop/screenshot.png

# Windows电脑: 使用cli对 hello-uni-app-x项目 鸿蒙App截图
D:\ide\HBuilderX\cli.exe screencap app-harmony --project hello-uni-app-x --saveFile D:\screenshot.png

# 对鸿蒙App截图
./cli screencap app-harmony --project 项目名称 --saveFile screenshot.png

# 对鸿蒙App截图（指定设备）
./cli screencap app-harmony --project 项目名称 --deviceId 设备序列号 --saveFile screenshot.png

# 对鸿蒙App截图（截取长图，默认）
./cli screencap app-harmony --project 项目名称 --saveFile screenshot.png --fullPage true

# 对鸿蒙App截图（只截取当前屏）
./cli screencap app-harmony --project 项目名称 --saveFile screenshot.png --fullPage false
```
