# CLI uni-app Run Logs - Phone or Emulator@launch-app

> HBuilderX cli command line tool

> Requires HBuilderX 4.87+ version

> You can also use this feature through npm package: [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

View uni-app application logs running on phone or emulator through CLI, supporting Android, iOS, and HarmonyOS platforms. [Learn about HBuilderX CLI](/cli/README?id=cli)

You can add cli to the environment variables, so you can call cli anytime, anywhere in any directory or terminal, without having to use it by entering the absolute path of cli. [Details](/cli/env)

## Command Description

### logcat app-android

View logs for running on Android App

**Usage:**

```shell
./cli logcat app-android --help
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
# Mac: Use cli to view Android App logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view Android App logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat app-android --project hello-uni-app-x

# View Android App logs
./cli logcat app-android --project ProjectName

# View Android App logs (specify device)
./cli logcat app-android --project ProjectName --deviceId DeviceSerialNumber

# View Android App logs (specify log mode)
./cli logcat app-android --project ProjectName --mode full

# View Android App logs (combined parameters: specify device + log mode)
./cli logcat app-android --project ProjectName --deviceId DeviceSerialNumber --mode lastBuild
```

### logcat app-ios

View logs for running on iOS App

**Usage:**

```shell
./cli logcat app-ios --help
```

**Parameters:**

| Parameter   | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| --help      | Display cli command help                                                            |
| --project   | Project name or absolute path imported in HBuilder X                               |
| --deviceId  | Specify device serial number to use, defaults to first device, can get list via devices list |
| --iosTarget | Device type, values: device or simulator, default is device                         |
| --mode      | Log mode, values: full, lastBuild, prevBuild, default is prevBuild                 |

**Usage Examples:**

```shell
# Mac: Use cli to view iOS App logs for hello-uni-app-x project (real device)
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view iOS App logs for hello-uni-app-x project (real device)
D:\ide\HBuilderX\cli.exe logcat app-ios --project hello-uni-app-x

# View iOS App logs (real device)
./cli logcat app-ios --project ProjectName

# View iOS App logs (simulator)
./cli logcat app-ios --project ProjectName --iosTarget simulator

# View iOS App logs (specify device)
./cli logcat app-ios --project ProjectName --deviceId DeviceSerialNumber

# View iOS App logs (specify log mode)
./cli logcat app-ios --project ProjectName --mode full

# View iOS App logs (combined parameters: simulator + specify device + log mode)
./cli logcat app-ios --project ProjectName --iosTarget simulator --deviceId DeviceSerialNumber --mode lastBuild
```

### logcat app-harmony

View logs for running on HarmonyOS

**Usage:**

```shell
./cli logcat app-harmony --help
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
# Mac: Use cli to view HarmonyOS App logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view HarmonyOS App logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat app-harmony --project hello-uni-app-x

# View HarmonyOS App logs
./cli logcat app-harmony --project ProjectName

# View HarmonyOS App logs (specify device)
./cli logcat app-harmony --project ProjectName --deviceId DeviceSerialNumber

# View HarmonyOS App logs (specify log mode)
./cli logcat app-harmony --project ProjectName --mode full

# View HarmonyOS App logs (combined parameters: specify device + log mode)
./cli logcat app-harmony --project ProjectName --deviceId DeviceSerialNumber --mode lastBuild
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

```shell
# View Android logs
npm run logcat:app-android -- --deviceId feyhuos8ai89jr4p

# View iOS real device logs
npm run logcat:app-ios -- --iosTarget device --deviceId 00001110001C35240AF2801A

# View iOS simulator logs
npm run logcat:app-ios -- --iosTarget simulator --deviceId 3FFE4F41-997F-4ED3-AC3B-DF4ADB9A4262
```