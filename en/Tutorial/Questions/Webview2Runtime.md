# WebView2 Runtime Installation Guide (Windows 7 / 8 Users)

HBuilderX depends on the Microsoft Edge WebView2 Runtime to properly render webview.

## 1. Check Your System Version
* If you are using Windows 7 / 8 / 8.1, please note that Microsoft has stopped providing the latest support for these systems. The last compatible WebView2 Runtime version is **109.0.1518.140**.
* If your system does not have the WebView2 Runtime installed, please follow the steps below to install it.

<img src="/static/snapshots/tutorial/question/webview2RuntimeMessage_en.png" style="zoom:60%;" />

## 2. Download the Runtime Package
1. Open the Baidu Netdisk link:
   [https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg](https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg?pwd=jxwk)

   Access code: `jxwk`

2. Download the zip file:
   `Webview2_Runtime_109.0.1518.140.zip`

## 3. Locate the Application Directory

If you are unsure where the program is installed, follow these steps:

1. Find the program shortcut on your desktop (HBuilder X.lnk).
2. Right-click the shortcut and select **Properties**.
3. In the popup window, click **Open File Location**.
4. This will take you directly to the installation directory of the program.

## 4. Extract the Runtime

1. Extract `Webview2_Runtime_109.0.1518.140.zip` into the program directory you just opened.
* After extraction, the directory structure should look like this:

```bash
HBuilderX.exe
Webview2_Runtime_109.0.1518.140/
    ├─ msedgewebview2.exe
    ├─ msedge.dll
    ├─ icudtl.dat
    ├─ resources.pak
    ├─ locales/
    └─ ...
```
2. **Note**: You must keep the extracted directory structure intact. Copying only part of the files will not work.

## 5. Restart the Application

1. After extraction, close and restart the program.
2. The program will automatically detect the webview2_runtime directory and use it as the runtime environment.
3. If the directory is correct, the program should run normally.
