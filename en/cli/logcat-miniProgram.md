# CLI uni-app Run Logs - MiniProgram@launch-miniProgram

> HBuilderX cli command line tool

> Requires HBuilderX 4.87+ version

> You can also use this feature through npm package: [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

View uni-app application logs running on various mini-program platforms through CLI, supporting WeChat, Alipay, Baidu, ByteDance, QQ, 360, JD, Kuaishou, Feishu, Xiaohongshu, HarmonyOS Meta Service, Quick App and other platforms. [Learn about HBuilderX CLI](/cli/README?id=cli)

You can add cli to the environment variables, so you can call cli anytime, anywhere in any directory or terminal, without having to use it by entering the absolute path of cli. [Details](/cli/env)

## Command Description

### logcat mp-weixin

View logs for running on MiniProgram-WeChat

**Usage:**

```shell
./cli logcat mp-weixin --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View WeChat MiniProgram logs
./cli logcat mp-weixin --project ProjectName

# View WeChat MiniProgram logs (specify log mode)
./cli logcat mp-weixin --project ProjectName --mode full

# Mac: Use cli to view WeChat MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-weixin --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-weixin --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view WeChat MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-weixin --project hello-uni-app-x
```

### logcat mp-alipay

View logs for running on MiniProgram-Alipay (only for uni-app)

**Usage:**

```shell
./cli logcat mp-alipay --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Alipay MiniProgram logs
./cli logcat mp-alipay --project ProjectName

# View Alipay MiniProgram logs (specify log mode)
./cli logcat mp-alipay --project ProjectName --mode full

# Mac: Use cli to view Alipay MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-alipay --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-alipay --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Alipay MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-alipay --project hello-uni-app-x
```

### logcat mp-baidu

View logs for running on MiniProgram-Baidu (only for uni-app)

**Usage:**

```shell
./cli logcat mp-baidu --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Baidu MiniProgram logs
./cli logcat mp-baidu --project ProjectName

# View Baidu MiniProgram logs (specify log mode)
./cli logcat mp-baidu --project ProjectName --mode full

# Mac: Use cli to view Baidu MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-baidu --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-baidu --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Baidu MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-baidu --project hello-uni-app-x
```

### logcat mp-toutiao

View logs for running on MiniProgram-Douyin (only for uni-app)

**Usage:**

```shell
./cli logcat mp-toutiao --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Douyin MiniProgram logs
./cli logcat mp-toutiao --project ProjectName

# View Douyin MiniProgram logs (specify log mode)
./cli logcat mp-toutiao --project ProjectName --mode full

# Mac: Use cli to view Douyin MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-toutiao --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-toutiao --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Douyin MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-toutiao --project hello-uni-app-x
```

### logcat mp-qq

View logs for running on MiniProgram-QQ (only for uni-app)

**Usage:**

```shell
./cli logcat mp-qq --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View QQ MiniProgram logs
./cli logcat mp-qq --project ProjectName

# View QQ MiniProgram logs (specify log mode)
./cli logcat mp-qq --project ProjectName --mode full

# Mac: Use cli to view QQ MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-qq --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-qq --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view QQ MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-qq --project hello-uni-app-x
```

### logcat mp-360

View logs for running on MiniProgram-360 (only for uni-app)

**Usage:**

```shell
./cli logcat mp-360 --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View 360 MiniProgram logs
./cli logcat mp-360 --project ProjectName

# View 360 MiniProgram logs (specify log mode)
./cli logcat mp-360 --project ProjectName --mode full

# Mac: Use cli to view 360 MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-360 --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-360 --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view 360 MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-360 --project hello-uni-app-x
```

### logcat mp-jd

View logs for running on MiniProgram-JD (only for uni-app)

**Usage:**

```shell
./cli logcat mp-jd --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View JD MiniProgram logs
./cli logcat mp-jd --project ProjectName

# View JD MiniProgram logs (specify log mode)
./cli logcat mp-jd --project ProjectName --mode full

# Mac: Use cli to view JD MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-jd --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-jd --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view JD MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-jd --project hello-uni-app-x
```

### logcat mp-kuaishou

View logs for running on MiniProgram-Kuaishou (only for uni-app)

**Usage:**

```shell
./cli logcat mp-kuaishou --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Kuaishou MiniProgram logs
./cli logcat mp-kuaishou --project ProjectName

# View Kuaishou MiniProgram logs (specify log mode)
./cli logcat mp-kuaishou --project ProjectName --mode full

# Mac: Use cli to view Kuaishou MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-kuaishou --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-kuaishou --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Kuaishou MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-kuaishou --project hello-uni-app-x
```

### logcat mp-lark

View logs for running on MiniProgram-Feishu (only for uni-app)

**Usage:**

```shell
./cli logcat mp-lark --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Feishu MiniProgram logs
./cli logcat mp-lark --project ProjectName

# View Feishu MiniProgram logs (specify log mode)
./cli logcat mp-lark --project ProjectName --mode full

# Mac: Use cli to view Feishu MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-lark --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-lark --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Feishu MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-lark --project hello-uni-app-x
```

### logcat mp-xhs

View logs for running on MiniProgram-Xiaohongshu (only for uni-app)

**Usage:**

```shell
./cli logcat mp-xhs --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Xiaohongshu MiniProgram logs
./cli logcat mp-xhs --project ProjectName

# View Xiaohongshu MiniProgram logs (specify log mode)
./cli logcat mp-xhs --project ProjectName --mode full

# Mac: Use cli to view Xiaohongshu MiniProgram logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-xhs --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-xhs --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Xiaohongshu MiniProgram logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-xhs --project hello-uni-app-x
```

### logcat mp-harmony

View logs for running on HarmonyOS Meta Service (only for uni-app)

**Usage:**

```shell
./cli logcat mp-harmony --help
```

**Parameters:**

| Parameter  | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| --help     | Display cli command help                                                            |
| --project  | Project name or absolute path imported in HBuilder X                               |
| --deviceId | Specify device serial number to use, defaults to first device, can get list via devices list |
| --mode     | Log mode, values: full, lastBuild, prevBuild, default is prevBuild                 |

**Usage Examples:**

```shell
# View HarmonyOS Meta Service logs
./cli logcat mp-harmony --project ProjectName

# View HarmonyOS Meta Service logs (specify device)
./cli logcat mp-harmony --project ProjectName --deviceId DeviceSerialNumber

# View HarmonyOS Meta Service logs (specify log mode)
./cli logcat mp-harmony --project ProjectName --mode full

# View HarmonyOS Meta Service logs (combined parameters: specify device + log mode)
./cli logcat mp-harmony --project ProjectName --deviceId DeviceSerialNumber --mode lastBuild

# Mac: Use cli to view HarmonyOS Meta Service logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-harmony --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat mp-harmony --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view HarmonyOS Meta Service logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat mp-harmony --project hello-uni-app-x
```

### logcat quickapp-webview-huawei

View logs for running on QuickApp-Huawei (only for uni-app)

**Usage:**

```shell
./cli logcat quickapp-webview-huawei --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View Huawei QuickApp logs
./cli logcat quickapp-webview-huawei --project ProjectName

# View Huawei QuickApp logs (specify log mode)
./cli logcat quickapp-webview-huawei --project ProjectName --mode full

# Mac: Use cli to view Huawei QuickApp logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-huawei --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-huawei --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Huawei QuickApp logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat quickapp-webview-huawei --project hello-uni-app-x
```

### logcat quickapp-webview-union

View logs for running on QuickApp-Union (only for uni-app)

**Usage:**

```shell
./cli logcat quickapp-webview-union --help
```

**Parameters:**

| Parameter | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| --help    | Display cli command help                                              |
| --project | Project name or absolute path imported in HBuilder X                 |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild   |

**Usage Examples:**

```shell
# View QuickApp Union logs
./cli logcat quickapp-webview-union --project ProjectName

# View QuickApp Union logs (specify log mode)
./cli logcat quickapp-webview-union --project ProjectName --mode full

# Mac: Use cli to view QuickApp Union logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-union --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat quickapp-webview-union --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view QuickApp Union logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat quickapp-webview-union --project hello-uni-app-x
```

## Using CLI through npm scripts@npm

We need to install [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli) in the project, which serves as a bridge that allows us to call HBuilderX's powerful features through the command line (such as starting test processes).

#### Add npm Script Support

```shell
# First, make sure there is a package.json file in your project root directory. If not, you can quickly generate it with the following command:
npm init -y

# Then, install hbuilderx-cli as a development dependency:
npm install @dcloudio/hbuilderx-cli --save-dev
```

#### View Logs Using npm Commands

**Syntax**

```
npm run logcat:<miniprogram-platform-name>
```

**Examples**

```shell
# View WeChat MiniProgram logs
npm run logcat:mp-weixin

# View HarmonyOS Meta Service logs
npm run logcat:mp-harmony
```