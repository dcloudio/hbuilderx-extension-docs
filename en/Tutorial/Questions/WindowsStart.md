# HBuilderX Windows startup troubleshooting guide

## Summary

This document is `windows` platform solution，Mac please refer to:[mac solution](http://hx.dcloud.net.cn/Tutorial/install/macosx?id=启动问题)
  
The `zip` package of `windows` takes a long time to decompress, please do not interrupt! If the decompression is interrupted, please decompress again.

** HBuilderX cannot startup on Windows, maybe two reasons: **

- New installation，please see `Chapter 1`.
- If HBuilderX can startup before, but it can’t startup now, the configuration file should be damaged, please see `Chapter 4.1`.


## 1.  The latest downloaded HBuilderX cannot be startuped
-------------------------------

> The latest downloaded HBuilderX could not be startuped on Windows System after being decompressed, it did not respond evenif you click it, and the xxx.dll error was reported when it startuped.

`Note：HBuilderX requires the minimum Windows version to be win7, and does not support xp`.

Note：If your computer has an AMD graphics card, please see Chapter 6.

### 1.0 Wrong way to open

Someone download zip package from `DCloud.io`, double click `HBuilderX.exe` directly from decompress software.

`zip package needs to be decompressed before it can be used`.

<img src="/static/snapshots/tutorial/install_windows_en.png" class="hd-img" />


### 1.1 Shortcuts problems

On Windows, clicking exe file and HBuilderX cannot be startuped if you drag `HBuilderX.exe` to desktop from decompressed zip folder.

How to setup `Desktop shortcut`: 

1. Select `HBuilderX.exe`, click the right mouse button, and a menu appears
2. Click on the menu item: `Send to`
3. Click on `Desktop (Create Shortcut)`


### 1.2. Nothing happens

- After unzipping, click HBuilderX.exe, nothing happens.
- After decompression, click HBuilderX.exe, the HBuilderX process starts and then closes immediately.

**Try the following solutions**

1. After closing all the `anti-virus software`, try again.
2. Use `super administrator` role to try again.
3. Follow solution 1 to try again.
4. Select `HBuilderX.exe`, right-click and click Properties. Operate as shown in the figure below:

<img src="/static/snapshots/tutorial/windows_install/compatible_mode_en.png" class="hd-img" />


> Note: If above method does not solve your problem, please see the error in the [Event Viewer](#EventViewer)


### 1.3 Memory cannot be read

> If you encounter the problem of `memory cannot be read`, please search related methods on google.


## 2. Problems caused by Qt
-------------------------------

> You may encounter the following problems if you installed Qt application in your computer.

### 2.1 Problem 1: qt* library is missing

- After decompression, click HBuilderX.exe, it prompts that `qt5*.dll` library is missing.
- After decompression, click HBuilderX.exe, it prompts `Cannot locate xxxxxxx on library xxx.dll`.

<img src="/static/snapshots/tutorial/windows_install/qt_error_1.png" style="border: 1px solid #eee;"/>


**Solutions**

Method 1: After decompression, enter the bin directory of HBuilderX, cut all `dll files beginning without api` to the upper level directory. Note that it is `cut`, not `copy`.

Method 2: Enter `bin` directory of `HBuilderX` and copy all `dll` files to `System32` or `SysWOW64` folder.

Method 3: Check if `qt` is installed on your computer, please remove qt environment variables if it has been installed before.

### 2.2 Problem 2

As shown below:

<img src="/static/snapshots/tutorial/windows_install/qt_error_2.png" style="zoom: 80%;border: 1px solid #eee; padding: 10px;"/>

Solution: Check if `qt` is installed on your computer, please remove qt environment variables if it has been installed before.

<img src="/static/snapshots/tutorial/windows_install/env_en.png"  class="hd-img" />



## 3. Troubleshoot issues with Event Viewer@EventViewer
-------------------------------

### 3.1 Event viewer

If none of the above solutions solve your problems, we can troubleshoot through the event viewer.

Method: Click “Start→Run”, enter eventvwr, Click "Confirm" and open "Event Viewer". 

<img src="/static/snapshots/tutorial/windows_install/eventvwr_1_en.png" class="hd-img" />

As shown below: Click[Windows Log]--[Application], find records of "error" level and try to fix these problems.

<img src="/static/snapshots/tutorial/windows_install/eventvwr_2_en.png" class="hd-img" />

Note: If the record of event viewer displays `unKnown`, please download [opengl32sw.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), and put it to the root directory of HBuilderX, then try again.

Listed below, the errors that may be encountered in the [Event Viewer]


### 3.2 Graphics card error: ig9icd32.dll

** `ig9icd32.dll error` solution **

<img src="/static/snapshots/tutorial/windows_install/eventvwr_3.png" style="zoom: 80%;" />

Method 1: Upgrade graphic card driver.

Method 2: Download [opengl32sw.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), put it to the root directory of HBuilderX.


### 3.3 Graphics card error: dbgcore.dll

** `dbgcore.dll error` solution**

Downlnoad [dbgcore.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/dbgcore.dll), put it to the root directory of HBuilderX.

> Note: Please refer to Chapter 4 if the configuration file of HBuilderX is damaged.


### 3.4 AMD graphics card error： atioglxx.dll

If your computer is equipped with AMD graphics card abd you encounter startup problems ( atioglxx.dll error in event viewer), atioglxx.dll is a file required by the ati graphics card driver.

Solution:

1. Start menu, search [Computer Management]
2. Click [Device Management]-->[Display adapter]
3. Diabled AMD graphic card if you have two graphic cards. Please don't disable it if you have one graphic card only.

<img src="/static/snapshots/tutorial/windows_install/amd.png" />

### 3.5 [Device Management] An exclamation mark appears on the graphics card

Some types of graphics cards may be due to

1. Start menu, search [Computer Management].
2. Click [Device Management]-->[Display adapter].
3. If there is exclamation mark on graphic card, please upgrade to latest version.


### 3.6 Problems occurred after updating the graphics card driver

If HBuilderx cannot startup after updated the graphic driver, that is the problem of the graphics card driver. Please restore the graphics card driver, or upgrade the driver to the latest version or the stable version.


## 4. The configuration file is damaged
--------------

> Sometimes, HBuilderX ran well yesterday, but it cannot startup today. Someone also encountered this problem in the latest HBuilderX.

It may be that the configuration file is damaged and HBuilderX cannot be startuped.

### 4.1 Method 1: Delete .lock file

Enter `%appdata%` in the address bar of Windows resource manager and press enter; in this directory, open HBuilderX directory.

Delete `.lock` file and try to restart HBuilder X again.

<img src="/static/snapshots/tutorial/windows_install/lock_en.png" class="hd-img" />

### 4.2 Method 2: Reset configuration file directory

1. Click `reset.bat` file in HBuilderX directory.
2. If step1 not work, then try the following method. As shown below, enter `%appdata%` in the address bar and press enter; find the HBuilder X directory and rename it. Note: Rename this directory with any name or delete it.

<img src="/static/snapshots/tutorial/windows_install/appdata_en.png" class="hd-img" />


## 5. After startup, the top toolbar is not fully displayed
-----------------

Reason: On some laptops, the top menu of HBuilderX is not fully displayed due to resolution or scaling.

Solution:

1. Maximize HBuilderX with shortcut key `alt + space + x`.
2. On the desktop, click the right-click menu [Display Settings] to adjust the resolution and zoom.


## 6. Remark

### 6.1 Contact us

If you have tried all of the above and have not resolved it, please contact us:

1. Email: ide@dcloud.io
2. QQ: search keyword HBuilderX and find our QQ account, join our qq group and our administrator will help you to fix problems。
3. Post question on our forum。Forum url：http://ask.dcloud.net.cn

### 6.2 How to ask questions?

If you encounter startup problems, send an email or add QQ for help, please provide the following information, so that you can get faster help!

Information to be provided:

- Operating system information (Windows or Mac)
- This is the first download and cannot startup? Or can it be opened before, but cannot be opened now?
- Windows OS：If you encounter display problems, please provide resolution and zoom. (Desktop, right-click menu [Display Settings])
