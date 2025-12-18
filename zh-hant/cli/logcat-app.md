# CLI uni-app 運行日誌 - 手機或模擬器@launch-app

> 需HBuilderX 4.87+ 版本

> 您也可以通過 npm 包使用此功能：[@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

通過 CLI 查看運行到手機或模擬器的 uni-app 應用日誌，支持 Android、iOS、鴻蒙平臺。[HBuilderX CLI](/cli/README?id=cli)

您可以將cli加入到環境變量，這樣您就可以在任意目錄、任意終端上，隨時隨地調用cli， 而無需通過輸入cli絕對路徑的方式來使用它。[詳情](/cli/env)

## 命令說明

### logcat app-android

查看運行到 Android App 日誌

**用法：**

```shell
./cli logcat app-android --help
```

**參數：**

| 參數名稱   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 顯示 cli 命令幫助                                                            |
| --project  | HBuilder X 裏導入的項目名稱或絕對路徑                                        |
| --deviceId | 指定要使用的設備序列號，默認使用第一個設備，可通過 devices list 獲取設備列表 |
| --mode     | 日誌模式，取值：full、lastBuild、prevBuild，默認值爲 prevBuild               |

**使用示例：**

```shell
# Mac電腦 使用cli查看 hello-uni-app-x項目 Android App日誌
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project hello-uni-app-x

# Mac電腦 --project 傳遞絕對路徑
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-android --project /User/apple/Desktop/hello-uni-app-x

# Windows電腦: 使用cli查看 hello-uni-app-x項目 Android App日誌
D:\ide\HBuilderX\cli.exe logcat app-android --project hello-uni-app-x

# 查看Android App日誌
./cli logcat app-android --project 項目名稱

# 查看Android App日誌（指定設備）
./cli logcat app-android --project 項目名稱 --deviceId 設備序列號

# 查看Android App日誌（指定日誌模式）
./cli logcat app-android --project 項目名稱 --mode full

# 查看Android App日誌（組合參數：指定設備 + 日誌模式）
./cli logcat app-android --project 項目名稱 --deviceId 設備序列號 --mode lastBuild
```

### logcat app-ios

查看運行到 iOS App 日誌

**用法：**

```shell
./cli logcat app-ios --help
```

**參數：**

| 參數名稱    | 描述                                                                         |
| ----------- | ---------------------------------------------------------------------------- |
| --help      | 顯示 cli 命令幫助                                                            |
| --project   | HBuilder X 裏導入的項目名稱或絕對路徑                                        |
| --deviceId  | 指定要使用的設備序列號，默認使用第一個設備，可通過 devices list 獲取設備列表 |
| --iosTarget | 設備類型，取值：device 或 simulator，默認值爲 device                         |
| --mode      | 日誌模式，取值：full、lastBuild、prevBuild，默認值爲 prevBuild               |

**使用示例：**

```shell
# Mac電腦 使用cli查看 hello-uni-app-x項目 iOS App日誌（真機）
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project hello-uni-app-x

# Mac電腦 --project 傳遞絕對路徑
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-ios --project /User/apple/Desktop/hello-uni-app-x

# Windows電腦: 使用cli查看 hello-uni-app-x項目 iOS App日誌（真機）
D:\ide\HBuilderX\cli.exe logcat app-ios --project hello-uni-app-x

# 查看iOS App日誌（真機）
./cli logcat app-ios --project 項目名稱

# 查看iOS App日誌（模擬器）
./cli logcat app-ios --project 項目名稱 --iosTarget simulator

# 查看iOS App日誌（指定設備）
./cli logcat app-ios --project 項目名稱 --deviceId 設備序列號

# 查看iOS App日誌（指定日誌模式）
./cli logcat app-ios --project 項目名稱 --mode full

# 查看iOS App日誌（組合參數：模擬器 + 指定設備 + 日誌模式）
./cli logcat app-ios --project 項目名稱 --iosTarget simulator --deviceId 設備序列號 --mode lastBuild
```

### logcat app-harmony

查看運行到鴻蒙日誌

**用法：**

```shell
./cli logcat app-harmony --help
```

**參數：**

| 參數名稱   | 描述                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| --help     | 顯示 cli 命令幫助                                                            |
| --project  | HBuilder X 裏導入的項目名稱或絕對路徑                                        |
| --deviceId | 指定要使用的設備序列號，默認使用第一個設備，可通過 devices list 獲取設備列表 |
| --mode     | 日誌模式，取值：full、lastBuild、prevBuild，默認值爲 prevBuild               |

**使用示例：**

```shell
# Mac電腦 使用cli查看 hello-uni-app-x項目 鴻蒙App日誌
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project hello-uni-app-x

# Mac電腦 --project 傳遞絕對路徑
/Applications/HBuilderX.app/Contents/MacOS/cli logcat app-harmony --project /User/apple/Desktop/hello-uni-app-x

# Windows電腦: 使用cli查看 hello-uni-app-x項目 鴻蒙App日誌
D:\ide\HBuilderX\cli.exe logcat app-harmony --project hello-uni-app-x

# 查看鴻蒙App日誌
./cli logcat app-harmony --project 項目名稱

# 查看鴻蒙App日誌（指定設備）
./cli logcat app-harmony --project 項目名稱 --deviceId 設備序列號

# 查看鴻蒙App日誌（指定日誌模式）
./cli logcat app-harmony --project 項目名稱 --mode full

# 查看鴻蒙App日誌（組合參數：指定設備 + 日誌模式）
./cli logcat app-harmony --project 項目名稱 --deviceId 設備序列號 --mode lastBuild
```

## 通過npm scripts使用CLI@npm

我們需要在項目中安裝 [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli),它是一個橋樑，讓我們可以通過命令行來調用 HBuilderX 的強大功能（如啓動測試流程）。

#### 添加 npm 腳本支持

```shell
# 首先，請確保你的項目根目錄下有 package.json 文件。如果沒有，可以通過以下命令快速生成：
npm init -y

# 然後，安裝 hbuilderx-cli 作爲開發依賴：
npm install @dcloudio/hbuilderx-cli --save-dev
```

#### 使用npm命令查看日誌

```shell
# 查看 Android 日誌
npm run logcat:app-android -- --deviceId feyhuos8ai89jr4p

# 查看 iOS真機 日誌。
npm run logcat:app-ios -- --iosTarget device --deviceId 00001110001C35240AF2801A

# 查看 iOS模擬器 日誌。
npm run logcat:app-ios -- --iosTarget simulator --deviceId 3FFE4F41-997F-4ED3-AC3B-DF4ADB9A4262
```
