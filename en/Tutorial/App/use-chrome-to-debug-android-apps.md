# Chrome Debugging Android Applications

> Note that this document only applies to 5+App applications.

HBuilder has three ways to debug the front-end code，for example watch while changing, running on real device, and webkit remote debugg on real device. 
Webkit remote debug is actually an official service provided by Google and Apple. This article mainly introduces how to debug webpages running in webview on Android phones under google's chrome.

*Articles Navigation:*
- [Method 1 - watch while changing](http://ask.dcloud.net.cn/article/483)
- [Method 2 - running on real device](http://ask.dcloud.net.cn/article/484)
- [Method 3 - webkit remote debugg on real device (Android Phone)]
- [Method 4 - webkit remote debugg on real device (iOS Phone)](http://ask.dcloud.net.cn/article/143)

## Overview of Chrome debugging Android phones

Debugging is a very important part of the software development process, it can help developers quickly locate and solve the problems encountered in the development process. For the development of HTML5, everyone knows that Chrome's DevTools tool has powerful functions and friendly user experience. It can not only debug JavaScript quickly and easily, check the DOM structure of HTML pages, update the CSS styles of elements in real time, but also track and analyze page resource loading performance and other issues. For developers of mobile platforms, from Android 4.4, you can also use Chrome's DevTools to connect the device to debug the application.

The debugging effect is shown in the figure:

![Android Debugging](http://www.dcloud.io/docs/a/adebug/1.1.png)

**Software requirements**
- The system version of the Android device or emulator is 4.4+;



## Real device debugging environment
If you have an Android device and the system is version 4.4 or higher, you can directly use Chrome to connect for debugging.

### Get device version
Open the system "Settings" -> "About" to check the Android version:

![](http://www.dcloud.io/docs/a/adebug/3.1.png)

The Android version must be 4.4 and above, otherwise application debugging cannot be performed. Please refer to the "Simulator Debugging Environment" chapter to use the simulator for application debugging.

### Show developer options
Android device default "Developer Options" is hidden, you need to open the "Settings" -> "About" page, click on the "Version Number" item multiple times (7 times), return to the "Settings" page to display "Developer Options" :

![](http://www.dcloud.io/docs/a/adebug/3.2.png)

Click "Developer Options" to open the "Developer Options" settings page.

### Turn on USB debugging

![](http://www.dcloud.io/docs/a/adebug/3.3.png)

### Connect PC

The Android device is connected to the PC via a USB data cable. If the system cannot recognize it correctly, you need to install the driver, which can usually be downloaded and installed from the official website of the device manufacturer. You can also use third-party mobile assistant software to install, such as "360 mobile assistant", "app treasure" and so on.

After the PC find the device, you can connect and install the HBuilder application through the real device running function of HBuilder.

## Use HBuilder to debug
In the latest version of HBuilder, click the run menu, or the view menu of HBuilderX, and click "Open Webview debugging mode" inside.
Make sure that the phone is connected and the debuggable app is activated, then the debuggable pages will be listed on the right or bottom. Click debug/inspect to open the chrome console for debugging.

**Note：Since chrome83, the agreement has been adjusted. Since HBuilderX2.8, the new protocol has been adapted. If your chrome is upgraded to version 83 or higher, you need to update HBuilderX to 2.8+**


================================================
**This is the end of the developer's reading. The follow-up documents are the installation tutorial of the Android emulator and the tutorial of using chrome to debug without using HBuilder.**
================================================
================================================
## Appendix: Android emulator debugging environment
If you don't have an Android phone and want to debug Android applications, then you need to install Google's official Android emulator. Note: Three-party emulators such as genymotion, Droid (Haimawan), Bluestacks and other emulators can only run on real devices, and cannot be debugged.

The following content only introduces the installation of Google's official emulator. As Google updates frequently, it is recommended that developers follow other updated tutorials on the Internet at any time.

If you do not have a device with Android 4.4 and above, you can configure the Android emulator for debugging. The Android emulator has always been known for its slow running. In fact, the official has provided a solution to use Intel HAXM to accelerate, which greatly improves the running speed of the emulator.

**Hardware Requirements**

- CPU supports Intel VT technology (AMD CPU cannot use HAXM acceleration);
- Recommended 4G memory
- Window XP/Vista/7/8（32/64-bit），Recommended Windows 7/8（64-bit）。

**Network Requirements**
You have to use VPN for visiting google services.
It is necessary to use VPN for emulator during installation, update and debugging initialization.
**Please try to modify local host configuration if you cannot visit google, host reference to [google-hosts](https://github.com/txthinking/google-hosts/blob/master/hosts)）**

### ADT Tool
To configure the simulator debugging environment, you need to install the ADT tool. If you have already configured the android development environment, you can skip this chapter.

**Download ADT Tool**

The Android emulator development environment needs to be installed through the ADT tool. There is no need to download the complete ADT Bundle, just use the independent ADT tool:
- Download Android SDK Tools

![](http://www.dcloud.io/docs/a/adebug/2.1.1.1.png)

Select the independent ADT plug-in installation package for the windows platform.

- Agree to the terms and conditions

![](http://www.dcloud.io/docs/a/adebug/2.1.1.2.png)

Click download button

- Save Installation
The current version is 22.6.2, saved it as:：installer_r22.6.2-windows.exe。


**Install ADT Tool**
- Double-click to run the saved ADT installation file（install_r22.6.2-windows.exe）, start to install.

![](http://www.dcloud.io/docs/a/adebug/2.1.2.1.png)

Choose "Next",

- Configure the JDK environment
If you have already installed the JDK environment, you are prompted to confirm:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.2.png)

Click "Next"
If you have not installed the JDK, you will be prompted that it was not found:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.3.png)

Set JAVA_HOME environment variable after installing JDK, and re-run the ADT installation file.

- Choose Users

![](http://www.dcloud.io/docs/a/adebug/2.1.2.4.png)

Choose default value "Install just for me"，then click "Next".

- Choose Install Location

![](http://www.dcloud.io/docs/a/adebug/2.1.2.5.png)

Select non-system disk directory（Such as "D:\AndroidSDK"）, ensure that there is enough disk space to install the SDK and emulator files (at least 1G of space is required). Click "Next".

- Choose Start Menu Folder

![](http://www.dcloud.io/docs/a/adebug/2.1.2.6.png)

Keep default value, then click "Next"

- Extract and install

![](http://www.dcloud.io/docs/a/adebug/2.1.2.7.png)

After completion, click "Next":

![](http://www.dcloud.io/docs/a/adebug/2.1.2.8.png)

- Installation Complete

![](http://www.dcloud.io/docs/a/adebug/2.1.2.9.png)

Start SDK Manager（Android SDK Manager）, click "Next", complete the installation of the ADT tool.
If it does not start immediately, you can double-click to run the "SDK Manager.exe" program in the Android SDK root directory (such as "D:\AndroidSDK").


### Download SDK and emulator
After installing the ADT tool, start the SDK management to manage each version of the compilation tool, SDK, emulator, and plug-ins, such as upgrade, installation, uninstallation, etc. If you have already downloaded the SDK and emulator, you can skip this chapter.
- Update SDK list
After starting the SDK management program, the latest tool, SDK, emulator and extension plug-in list will be automatically obtained.

![](http://www.dcloud.io/docs/a/adebug/2.2.1.png)

- List update completed
After the update is complete, the log is displayed:

![](http://www.dcloud.io/docs/a/adebug/2.2.2.png)

- Choose Download Items
To use the Intel HAXM acceleration simulator, you must select the following items to download:

| Directory | Item	 | Purpose |
| :-------- | :--: | :--: |
| Tools | Android SDK Platform-tools | Android platform tools, basic components |
| Android 4.4.2（API19） | SDK Platform | Android4.4.2 SDK，emulator basic components |
| Android 4.4.2（API19） | Intel x86 Atom System Image | Inter x86平台的Android4.4.2 emulator image file |
| Extras | Intel x86 Emulator Accelerator (HAXM installer) | Inter x86 Android eimulator hardware acceleration program |

After selecting the download item, as shown in the figure below:

![](http://www.dcloud.io/docs/a/adebug/2.2.3.png)

Choose "Intall 4 Packages...", Start to download and install.

- Accept the license agreement

![](http://www.dcloud.io/docs/a/adebug/2.2.4.png)

After selecting the items in the packages list on the right, select "Accept License" to accept the license agreement. Then click "Install" to start downloading.

- Start to download

![](http://www.dcloud.io/docs/a/adebug/2.2.5.png)

Because the SDK and emulator image files are large, the download time will be relatively long, and the domestic visit to the official Google website is not stable, and the download failure is often prompted:

![](http://www.dcloud.io/docs/a/adebug/2.2.6.png)

Close the prompt dialog and download again, or **retry downloading after overriding the wall**.


### Install Intel X86HAXM
After downloading the Intel X86 HAXM plug-in, you need to run the installer in the download directory to install it. The directory is: "%ADT installation directory%\extras\intel\Hardware_Accelerated_Execution_Manager\". Double-click to run intelhaxm.exe to install, the current new version is 1.0.8, if the lower version has been installed, it is recommended to upgrade.

- Start installation

![](http://www.dcloud.io/docs/a/adebug/2.3.1.png)

Click "Next"。

- Configure HAXM to use maximum memory

![](http://www.dcloud.io/docs/a/adebug/2.3.2.png)
The installer will automatically calculate the recommended value, use the default value, select the next step "Next".

- Confirm configuration

![](http://www.dcloud.io/docs/a/adebug/2.3.3.png)
Click "Next"。

- Complete Installation

![](http://www.dcloud.io/docs/a/adebug/2.3.4.png)


### 创建模拟器
The ADT tool comes with the Android Virtual Device Manager (Android Virtual Device Manager), you can double-click to run the "AVD Manager.exe" program in the Android SDK root directory (such as "D:\AndroidSDK").

![](http://www.dcloud.io/docs/a/adebug/2.4.1.png)

Since no emulator has been created, no available emulator is displayed in the list, click "New..." to start creating a new emulator.

- Create emulator

![](http://www.dcloud.io/docs/a/adebug/2.4.2.png)

| Item | Description |
| :-------- | :-------- |
| AVD Name | Emulator name, input according to hobbies |
| Device | Analog equipment, choose according to your hobby, it is recommended to choose according to the display resolution, large display selection is a high score ratio emulator |
| Target | Choose "Android 4.4.2 - API Level 19" |
| CPU/ABI | Choose "Intel Atom (x86)" |
| Skin | Emulator skin, choose according to hobbies, recommend choosing WVGA800 |
| Front Camera | For front camera, select "None" if you don't need it, select "Emulated" for analog camera, select "WebCam0" for PC camera |
| Back Camera | Rear camera, similar to the front camera selection |
| Memory Options | Memory size, set according to PC memory size, recommended RAM: 512; Heap: 64 |
| Internal Storage | Internal memory size, set according to the size of the PC system disk space, 200M is recommended |
| SD Card | Internal memory size, set according to the size of the PC system disk space, 200M is recommended |

**Note that the SD Card must be set up, otherwise it will not run on the real machine.**
Complete installation, click "OK"

- Confirm Configration

![](http://www.dcloud.io/docs/a/adebug/2.4.3.png)

- After the creation is completed, it will be displayed in the emulator list

![](http://www.dcloud.io/docs/a/adebug/2.4.4.png)

### Start emulator
After creating the emulator, it can be displayed in the list every time you start the Android emulator management program

![](http://www.dcloud.io/docs/a/adebug/2.5.1.png)

- Start emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.2.png)
Choose "Android4.4.2" emulator, click "Start..." button.

- Set startup configuration

![](http://www.dcloud.io/docs/a/adebug/2.5.3.png)

| Item | Description |
| :-------- | :-------- |
| Scale Display to real size | Whether to zoom to the set simulator resolution, used when the PC resolution is low |
| Wipe user data | Whether to erase user data, used when resetting the emulator |

Click "Launch" to start。

- Wait for the emulator to load

![](http://www.dcloud.io/docs/a/adebug/2.5.4.png)

The configuration of the PC determines the speed, and wait patiently for the emulator to start.

- Finish starting the emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.5.png)

After the simulator is configured, you can connect through the real device running function of HBuilder. Refer to the "Application Debugging" chapter later.

## Appendix: Use chrome to debug webview {#chromedebug}
After configuring the emulator or real device debugging environment, you can quickly debug the mobile application developed by HBuilder through Chrome's DevTools tool.

### Install HBuilder Application
After starting HBuilder, it will automatically detect the device (emulator or real device) connected to the PC. After creating a "mobile App", you can install the HBuilder application on the device for debugging in the following ways:

The shortcut key for running is Ctrl+R. It can also be operated by mouse (note that the button for run in device in the figure below no longer exists in the new version, just click on the phone)
- Through "Run" to start menu

![](http://www.dcloud.io/docs/a/adebug/4.1.1.png)

- Launch via toolbar

![](http://www.dcloud.io/docs/a/adebug/4.1.2.png)
After the HBuilder application is installed on the device, the application resources will be synchronized and run automatically.


- Emulator

![](http://www.dcloud.io/docs/a/adebug/4.1.3.png)

- Real Device

![](http://www.dcloud.io/docs/a/adebug/4.1.4.png)
After the application is launched, you can connect to it for debugging through Chrome's DevTools.


### Use Chrome to debug
我们推荐开发者直接使用HBuilder的调试，详见上文。这样可以免翻墙。
如果你不使用HBuilder的调试，而要自己使用chrome调试，可以看这里的教程，注意要翻墙。
**检测Chrome版本号**
Chrome 30及以上版本才支持Android设备调试，打开Chrome的关于页面查看：

![](http://www.dcloud.io/docs/a/adebug/4.2.1.png)
要求最低Chrome30以上版本，如果版本太低则需更新版本，推荐使用最新版本。

**打开设备检查页面**
在Chrome地址栏，输入“chrome://inspect”或通过“菜单”->“工具”->“检查设备”打开设备检查页面：

![](http://www.dcloud.io/docs/a/adebug/4.2.2.png)
DevTools工具会自动检测已连接设备运行的可调试页面列表，点击对应页面的“inspect”链接打开调试页面。
如果上图界面没有显示可调试的手机，请重新根据上文提到的方法检查手机的usb调试模式或驱动安装情况。同时注意Android4.4以下的手机无法调试，注意海马玩等模拟器无法调试。
如果上图界面有手机，但没有可调试的app，可能的原因如下：
1. 手机端需要调试的HBuilder基座或其他app并没有启动或没有运行任何html页面；
2. 要调试的app拒绝了调试请求。HBuilder调试基座是默认开放调试请求的，但云打包或本地打包的app默认是关闭调试请求的。云打包是在manifest里配置是否允许调试，具体请查询[manifest配置指南](http://ask.dcloud.net.cn/article/94)，本地打包也要配置debug="true"，具体需要看本地打包配置环境。

**点击"inspect"时，如果遇到启动了一个白屏界面，说明被墙了。因为此服务需要连接google的服务器**
一般情况下，只在第一次使用"inspect"时需要翻墙，以后会缓存在本地。
开发者可以使用三方翻墙服务，但注意并不是可以访问google.com就可以使用chrome调试，有些翻墙软件支持的dns并不全。关键是要ping通chrometophone.appspot.com（此url可能随google调整服务而变化）。

还有一个简单易行的方法是修改本机host。这里提供一些host清单。[https://github.com/racaljk/hosts](https://github.com/racaljk/hosts)，注意及时更新。于2016年7月25日亲测可行，注意此host文件涉及的国外域名很多，不需要的dns解析可以删除）
注意host文件修改在window下需要管理员权限，具体方法本文不讲述请自行百度。

**页面调试**
打开调试页面后DevTools会自动加载相关资源，调试页面操作方式与普通html调试页面完全一致。
- 在Elements下查看DOM结构

![](http://www.dcloud.io/docs/a/adebug/4.2.3.png)

选中DOM元素后，在设备上会高亮显示，右侧Styles下修改CSS属性可即时生效：

![](http://www.dcloud.io/docs/a/adebug/4.2.4.png)

- 在Sources下断点调试JavaScript

![](http://www.dcloud.io/docs/a/adebug/4.2.5.png)

按F5可重新加载页面，重新开始调试。

**注意：每个Webview在chrome候选调试列表里是不同的列表，需要单独点inspect。当你inspect WebviewA时，点击了一个按钮，打开了WebviewB，此时若要调试B，需要返回chrome://inspect/#devices页面，找到WebviewB，然后点inspect。**
