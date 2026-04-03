# CLI uni-app 截圖 - 手機、模擬器與 Web@screencap-app

> **手機或模擬器**截圖需 HBuilderX **5.01+**；**Web** 截圖自 **5.07** 起支援。

透過 CLI 對已執行的 uni-app 專案截圖：**手機或模擬器**端支援 Android、iOS、鴻蒙；**Web** 端支援對已執行到瀏覽器的專案截圖（僅 **Chrome** 或 **HBuilderX 內建瀏覽器**）。此功能主要用於輔助 AI 透過截圖判斷頁面顯示是否正確，協助開發者快速驗證實際渲染效果。

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

對已執行到瀏覽器的 Web 專案截圖；**僅支援 Chrome 或 HBuilderX 內建瀏覽器（Built）**。可用於輔助 AI 判斷頁面在瀏覽器中的顯示效果。

**用法：**

```shell
./cli screencap web --help
```

**參數：**

| 參數名稱   | 描述 |
| ---------- | ---- |
| --help     | 顯示 cli 命令說明 |
| --project  | HBuilder X 裡匯入的專案名稱或絕對路徑 |
| --saveFile | 截圖儲存的完整檔案路徑（如 `.png`），**必填** |
| --browser  | 瀏覽器類型，僅支援 `Chrome` 或 `Built`（內建瀏覽器）；**不傳時預設使用目前正用來執行 Web 專案的那一個瀏覽器** |
| --fullPage | 截圖範圍：`true` 為長圖（整頁），`false` 為目前可視區域；預設值為 `true` |

**使用範例：**

```shell
# Mac：對已執行的 Web 專案截圖（預設使用目前執行中的瀏覽器；預設長圖）
/Applications/HBuilderX.app/Contents/MacOS/cli screencap web --project hello-uni-app --saveFile /Users/apple/Desktop/web-screenshot.png

# 指定使用 Chrome 截圖
./cli screencap web --project 專案名稱 --saveFile screenshot.png --browser Chrome

# 指定使用 HBuilderX 內建瀏覽器截圖
./cli screencap web --project 專案名稱 --saveFile screenshot.png --browser Built

# 只截目前可視區域（非整頁長圖）
./cli screencap web --project 專案名稱 --saveFile screenshot.png --fullPage false

# Windows
D:\ide\HBuilderX\cli.exe screencap web --project hello-uni-app --saveFile D:\web-screenshot.png
```
