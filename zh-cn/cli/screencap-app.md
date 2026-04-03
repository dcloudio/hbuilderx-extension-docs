# CLI uni-app 截图 - 手机、模拟器与 Web@screencap-app

> **手机或模拟器**截图需 HBuilderX **5.01+**；**Web** 截图自 **5.07** 起支持。

通过 CLI 对已运行的 uni-app 项目进行截图：**手机或模拟器**端支持 Android、iOS、鸿蒙；**Web** 端支持对已运行到浏览器的项目进行截图（仅 **Chrome** 或 **HBuilderX 内置浏览器**）。该功能主要用于辅助 AI 通过截图判断页面显示是否准确，帮助开发者快速验证实际渲染效果。

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

### screencap web

> 需 HBuilderX **5.07+** 版本

对已运行到浏览器的 Web 项目进行截图；**仅支持 Chrome 或 HBuilderX 内置浏览器（Built）**。用于辅助 AI 判断页面在浏览器中的显示效果。

**用法：**

```shell
./cli screencap web --help
```

**参数：**

| 参数名称   | 描述 |
| ---------- | ---- |
| --help     | 显示 cli 命令帮助 |
| --project  | HBuilder X 里导入的项目名称或绝对路径 |
| --saveFile | 截图保存的完整文件路径（如 `.png`），**必填** |
| --browser  | 浏览器类型，仅支持 `Chrome` 或 `Built`（内置浏览器）；**不传时默认使用当前正在运行 Web 项目的那一个浏览器** |
| --fullPage | 截图范围：`true` 为长图（整页），`false` 为当前可视区域；默认值为 `true` |

**使用示例：**

```shell
# Mac：对已运行的 Web 项目截图（默认使用当前运行中的浏览器；默认长图）
/Applications/HBuilderX.app/Contents/MacOS/cli screencap web --project hello-uni-app --saveFile /Users/apple/Desktop/web-screenshot.png

# 指定使用 Chrome 截图
./cli screencap web --project 项目名称 --saveFile screenshot.png --browser Chrome

# 指定使用 HBuilderX 内置浏览器截图
./cli screencap web --project 项目名称 --saveFile screenshot.png --browser Built

# 只截当前可视区域（非整页长图）
./cli screencap web --project 项目名称 --saveFile screenshot.png --fullPage false

# Windows
D:\ide\HBuilderX\cli.exe screencap web --project hello-uni-app --saveFile D:\web-screenshot.png
```
