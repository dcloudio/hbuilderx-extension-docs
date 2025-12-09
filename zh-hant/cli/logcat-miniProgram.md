# CLI uni-app 运行日志 - 小程序@launch-miniProgram

> HBuilderX cli 命令行工具

> 需HBuilderX 4.87+ 版本

> 您也可以通过 npm 包使用此功能：[@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

通过 CLI 查看运行到各平台小程序的 uni-app 应用日志，支持微信、支付宝、百度、字节跳动、QQ、360、京东、快手、飞书、小红书、鸿蒙元服务、快应用等平台。[HBuilderX CLI](/cli/README?id=cli)

您可以将cli加入到环境变量，这样您就可以在任意目录、任意终端上，随时随地调用cli， 而无需通过输入cli绝对路径的方式来使用它。[详情](/cli/env)

## 命令说明

### logcat mp-weixin

查看运行到小程序-微信日志

**用法：**

```shell
./cli logcat mp-weixin --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看微信小程序日志
./cli logcat mp-weixin --project 项目名称

# 查看微信小程序日志（指定日志模式）
./cli logcat mp-weixin --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 微信小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-weixin --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-weixin --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 微信小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-weixin --project hello-uni-app-x
```

### logcat mp-alipay

查看运行到小程序-支付宝(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-alipay --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看支付宝小程序日志
./cli logcat mp-alipay --project 项目名称

# 查看支付宝小程序日志（指定日志模式）
./cli logcat mp-alipay --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 支付宝小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-alipay --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-alipay --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 支付宝小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-alipay --project hello-uni-app-x
```

### logcat mp-baidu

查看运行到小程序-百度(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-baidu --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看百度小程序日志
./cli logcat mp-baidu --project 项目名称

# 查看百度小程序日志（指定日志模式）
./cli logcat mp-baidu --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 百度小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-baidu --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-baidu --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 百度小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-baidu --project hello-uni-app-x
```

### logcat mp-toutiao

查看运行到小程序-抖音(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-toutiao --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看抖音小程序日志
./cli logcat mp-toutiao --project 项目名称

# 查看抖音小程序日志（指定日志模式）
./cli logcat mp-toutiao --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 抖音小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-toutiao --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-toutiao --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 抖音小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-toutiao --project hello-uni-app-x
```

### logcat mp-qq

查看运行到小程序-QQ(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-qq --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看QQ小程序日志
./cli logcat mp-qq --project 项目名称

# 查看QQ小程序日志（指定日志模式）
./cli logcat mp-qq --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 qq小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-qq --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-qq --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 qq小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-qq --project hello-uni-app-x
```

### logcat mp-360

查看运行到小程序-360(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-360 --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看360小程序日志
./cli logcat mp-360 --project 项目名称

# 查看360小程序日志（指定日志模式）
./cli logcat mp-360 --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 360小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-360 --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-360 --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 360小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-360 --project hello-uni-app-x
```

### logcat mp-jd

查看运行到小程序-京东(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-jd --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看京东小程序日志
./cli logcat mp-jd --project 项目名称

# 查看京东小程序日志（指定日志模式）
./cli logcat mp-jd --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 京东小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-jd --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-jd --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 京东小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-jd --project hello-uni-app-x
```

### logcat mp-kuaishou

查看运行到小程序-快手(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-kuaishou --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看快手小程序日志
./cli logcat mp-kuaishou --project 项目名称

# 查看快手小程序日志（指定日志模式）
./cli logcat mp-kuaishou --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 快手小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-kuaishou --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-kuaishou --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 快手小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-kuaishou --project hello-uni-app-x
```

### logcat mp-lark

查看运行到小程序-飞书(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-lark --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看飞书小程序日志
./cli logcat mp-lark --project 项目名称

# 查看飞书小程序日志（指定日志模式）
./cli logcat mp-lark --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 飞书小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-lark --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-lark --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 飞书小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-lark --project hello-uni-app-x
```

### logcat mp-xhs

查看运行到小程序-小红书(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-xhs --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看小红书小程序日志
./cli logcat mp-xhs --project 项目名称

# 查看小红书小程序日志（指定日志模式）
./cli logcat mp-xhs --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 小红书小程序日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-xhs --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-xhs --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 小红书小程序日志
D:\ide\HBuilderX\cli.exe logcat mp-xhs --project hello-uni-app-x
```

### logcat mp-harmony

查看运行到鸿蒙元服务(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat mp-harmony --help
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
# 查看鸿蒙元服务日志
./cli logcat mp-harmony --project 项目名称

# 查看鸿蒙元服务日志（指定设备）
./cli logcat mp-harmony --project 项目名称 --deviceId 设备序列号

# 查看鸿蒙元服务日志（指定日志模式）
./cli logcat mp-harmony --project 项目名称 --mode full

# 查看鸿蒙元服务日志（组合参数：指定设备 + 日志模式）
./cli logcat mp-harmony --project 项目名称 --deviceId 设备序列号 --mode lastBuild

# Mac电脑 使用cli查看 hello-uni-app-x项目 鸿蒙元服务日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-harmony --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-harmony --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 鸿蒙元服务日志
D:\ide\HBuilderX\cli.exe logcat mp-harmony --project hello-uni-app-x
```

### logcat quickapp-webview-huawei

查看运行到快应用-华为(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat quickapp-webview-huawei --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看华为快应用日志
./cli logcat quickapp-webview-huawei --project 项目名称

# 查看华为快应用日志（指定日志模式）
./cli logcat quickapp-webview-huawei --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 华为快应用日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-huawei --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-huawei --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 华为快应用日志
D:\ide\HBuilderX\cli.exe logcat quickapp-webview-huawei --project hello-uni-app-x
```

### logcat quickapp-webview-union

查看运行到快应用-联盟(仅适用于 uni-app)日志

**用法：**

```shell
./cli logcat quickapp-webview-union --help
```

**参数：**

| 参数名称  | 描述                                                           |
| --------- | -------------------------------------------------------------- |
| --help    | 显示 cli 命令帮助                                              |
| --project | HBuilder X 里导入的项目名称或绝对路径                          |
| --mode    | 日志模式，取值：full、lastBuild、prevBuild，默认值为 prevBuild |

**使用示例：**

```shell
# 查看快应用联盟日志
./cli logcat quickapp-webview-union --project 项目名称

# 查看快应用联盟日志（指定日志模式）
./cli logcat quickapp-webview-union --project 项目名称 --mode full

# Mac电脑 使用cli查看 hello-uni-app-x项目 快应用联盟日志
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-union --project hello-uni-app-x

# Mac电脑 --project 传递绝对路径
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-union --project /User/apple/Desktop/hello-uni-app-x

# Windows电脑: 使用cli查看 hello-uni-app-x项目 快应用联盟日志
D:\ide\HBuilderX\cli.exe logcat quickapp-webview-union --project hello-uni-app-x
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

**语法**

```
npm run logcat:<小程序平台名称>
```

**示例**

```shell
# 查看 微信小程序日志
npm run logcat:mp-weixin

# 查看 鸿蒙元服务日志
npm run logcat:mp-harmony
```