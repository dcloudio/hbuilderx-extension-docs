## Foreword

> First, make sure that `iTunes` or `Android Phone Assistant` (such as 360 Phone Assistant) can connect to the phone normally.

> If you still have problems, please check whether the following problems are the same with your problem.

**Note**：
- `You need to upgrade to HBuilderX 2.2.5+ or higher if you want to run on iOS13 device.`
- Itunes `12.10.9.3` connected to `ios 14+` iphone phones, there may be problems; please download the version before 12.9.4.102.
- Some Android 11 mobile phones fail to sync files on real devices. HBuilderX 3.1.19 has solved this problem. Please upgrade HBuilderX to 3.1.19+.

We need to analyze where the problem is. The program will perform the following steps after click the real device to run:

1. The mobile phone hardware is connected to the computer through the USB cable. The connection may fail due to various problems such as the `mobile phone driver`, USB port, data cable, and mobile phone hardware.

2. HBuilderX detects mobile phones through adb or itunes services. It may not be detected due to mobile phone channels, usb connection settings, adb settings or adb conflicts, or itunes settings.

3. HBuilderX installs and debugs the base to the mobile phone. The installation may fail because the mobile phone prohibits USB installation, the Android phone does not have an SD card, and the iOS phone does not have a trusted certificate.

4. HBuilderX sync the code in the IDE to the mobile phone and starts the debugging dock. This step is usually correct.


Below is a list of various common FAQs which you can check at any time during future use.

## 1. No menu "Run on real device"
---
> The real device can only run the App project, select the App project or focus on the file editor of the App project to be run.

HBuilderX supports web projects and app projects. There is an icon in front of the project. W stands for web project and A stands for App project. Only the `App project can run`.

HBuilderX supports more project types, only `uni-app`, `5+app`, and `wap2app` can run on real device. They will all have a `manifest.json` file in the project root directory (uni-cli projects will have manifest.json in the src directory).

## 2. Check phone settings
---
Note：To connect Windows OS to an Android phone, make sure that the computer has installed the corresponding phone driver.

1. Ensure that the data line or usb port is normal, and you can replace it with a different line or port to verify.
2. Make sure that the `USB debugging` mode is turned on in the Android phone settings. This setting is generally in [Settings] [Developer Options]. Some mobile phones can also be set in the push notification bar after plugging in the data cable. Note that it cannot be set to USB flash drive mode. If it is charging mode, you must also set the `allow usb debugging` when charging.
3. If a request to trust this computer pops up on the phone screen, please `Agree to this authorization`. And it is best to check the Always agree to debug the device. If you accidentally refuse, you need to replug the phone or restart the computer.
4. Android5.0 and above systems, do not use guest mode. It cannot run successfully in this mode.
5. a Some mobile phones, such as Xiaomi, have the permission to install applications via usb, and need to allow the installation of applications via usb on the mobile phone. The interface of different roms is different, please open the way to install the application by using the usb on your mobile phone on Baidu.

## 3. Mac Mac connection to mobile phone/emulator instructions
---
The troubleshooting methods are listed separately for Android and iOS phones:

### 3.1 Mac: iOS real device

1. Confirm that the phone is connected to the computer via the data cable;
2. Confirm that iTunes can connect to the phone normally;
3. If a request to trust this computer pops up on the phone screen, please agree to the authorizations;

### 3.2 Mac: iOS simulator

1. Xcode must be installed in the application (Application);
2. Confirm that Xcode (version must be 6.0 and above) has been installed and can start the simulator normally
3. If it still cannot be detected, open Xcode, then open Xcode's `Preferences --> Locations`, set the `Command Line Tools` item in this interface, and select the correct `Xcode` version..



<img src="/static/snapshots/tutorial/ios_simulator.png" />

### 3.2 Mac: Connect Android phone

1. About this machine (refers to Mac system about this machine, not mobile phone) --> system report -> usb -> the device you are connected to --> vendor ID or vendor ID (Vendor ID).
2. Echo xxxxxx >> ~/.android/adb_usb.ini ("xxxxxx" is the vendor ID or vendor ID (Vendor ID). Under some systems, the echo command cannot write the file correctly. You can use it in ~/ Modify or create adb_usb.ini under the .android/ directory and add xxxxxx).
3. Reboot HBuilderX.
4. If restarting HBuilderX still does not work, please use the command line (terminal.app) to switch to the adb directory that comes with HBuilderX.
5. /tools/adbs directory of the official version of HBuilderX（MAC: HBuilderX.app/Contents/tools/adbs directory）.
6. HBuilderX Alpha ：plugins/launcher/tools/adbs directory（MAC:`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs` directory）.
7. Run `./adb kill-server` in the adbs directory to try again.
8. Reboot computer.

## 4. Windows connection phone/emulator instructions
---
### 4.1 Windows: Connect Android phone

#### 4.1.1 Driver：

> Please confirm that the Android phone driver has been installed.

If the phone connection does not respond or prompts a driver problem, you can solve it in the following ways:
  1. Install `Driver Wizard` programs, install drivers through them
  2. The better way to install the driver is to use various mobile assistants, such as `360, Tencent's various mobile assistants`, if there is a problem, try to upgrade the version of the assistant.

#### 4.1.2 Other Problems：
  1. If you install the driver after starting HBuilderX and connect to the phone, you may need to restart HBuilderX.
  2. Run HBuilder with administrator privileges.
  3. Close the WebView debugging mode, restart HBuilderX and try again.
  4. If other software can connect to the phone, but HBuilderX cannot detect the phone, it may be that other software monopolizes Google's ADB service channel.
  5. Android's `ADB service` has been abused by a large number of software. In addition to various mobile phone assistants that come with adb, other software such as QQ, Sogou input method, Baofengyingyin, Kugou music, Ali Wangwang and many other software have their own `adb`. Some tools have a low version of `adb` and monopolize the phone channel, which will cause HBuilderX to fail to connect to the phone.
  6. Find the `adb.exe` related process (including `kadb.exe`, etc.) in the task manager, complete the process in the task management, open the file location, and check what software started the process.
  7. It is forbidden for these software to monitor the phone plug-in (usually in the software's settings), and forbid automatic startup.
  8. Some software will automatically start after finishing the adb process, so you have to rename the `adb.exe` file, it is impossible to uninstall these rogue software.
  9. Close all mobile assistants and various `adb.exe` (including `kadb.exe`, etc.) in the process, and try again.

#### 4.1.3 ADB occupancy problem

If you can't find who is occupied, you can also use the following methods to detect and find the problem:
1. Open Terminals
2. Confirm the startup process of adb:
Find the `tcp connection` whose port is `5037`, and enter in the command line: `netstat -ano | findstr 5037`
    
Find a line similar to the following in the output:
  
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *If the content is empty, there may be no program occupying the adb port.*
  
  Or use netstat -ano | findstr 5037>d:/1.txt to output to the file for search.
  According to the query result, it is confirmed that the connection with port 5037 is occupied by that process. The “5816” displayed in the result indicates the PID of the process occupying the adb port.

3. The specific process can be found according to the PID of the process.

  
Enter in the command line：`tasklist | findstr 5816`
  Find a line similar to the following in the output:
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（The name is generally not adb.exe, take adb.exe for example) as the started adb process。
  Or manually locate the process in the task manager, after opening the task manager, enter the process tab, if there is PID in the list, find it directly; if there is no PID in the list, click the menu to view-select column, and tick PID.

#### 4.1.4 Other questions

If the above methods still does not work, there is another possibility that the phone has specific requirements for the adb version (some meizu phones have this problem), and you have to change the adb of HBuilderX.
- There are multiple adb versions in installation directory of HBuilderX.
- Adb directory path of HBuilder: tools/adbs (Mac: HBuilder.app/Contents/tools/adbs)
- Adb directory path of HBuilderX: plugins/launcher/tools/adbs (Mac: `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`)
Please backup adb.exe of default version before replace it. Then copy adb.exe of version 1.0.31 to replace exe file in the main directory.

### 4.2 Windows: Connect iOS Phone

1. Confirm that the phone is connected to the computer via the cable.
2. Confirm that iTunes is installed, if not, click[Itunes historical version download](https://mydown.yesky.com/pcsoft/33491427/versions/), Please download the version before 12.9.4.102.
3. Confirm that iTunes can connect with the phone.
4. If a request popup about trust this computer, please agree to the authorization.
5. If it is the first time to install itunes, it is recommended to restart HBuilderX.
6. If none of the above solutions can be solved, it may be because the local library conflicts with the library brought by iTunes. Usually the dll file of the iTunes library directory has same name with the dll file of system library. You can copy the dll file with the same name in the iTunes library directory to the system library directory, or rename or delete the dll file with the same name in the system directory, and then restart HBuilder or retry on the real device.
(
32-bit system - iTune direcotry path: C:\Program Files\Common Files\Apple\Apple Application Support; 
32-bit system - System library directory path: C:\WINDOWS\system32;
64-bit system - iTune direcotry path: C:\Program Files (x86)\Common Files\Apple\Apple Application Support; 
64-bit system - System library directory path: C:\WINDOWS\SysWOW64;
)
11. It is possible that the dependent library was lost when iTunes was installed. Try to reinstall iTunes to solve the problem. 
12. iTools provides a tool and tutorial to repair the driver, you can refer to [http://bbs.itools.cn/thread-129390-1-1.html](http://bbs.itools.cn/thread-129390-1-1.html)

**Note 1：**

There is a problem when linking itunes `12.10.9.3` to `ios 14+` iphone.

If you can't connect, please download the historical version of itunes. [
Itunes historical version download] (https://mydown.yesky.com/pcsoft/33491427/versions/)


**Note 2：**

Since iTunes 12.1, the interface has been changed, which will cause the connection to be unavailable：
  ①、HBuilderX menu：[Tools] - [Plug-in Installation]，Open the "Plugin Install" window, select [iOS connection plugin] (HBuilderX is called the real device running plugin) and install it. After installation, restart HBuilderX, and try to solve it;
  ②、Install the latest version of iTools and restart HBuilderX.

## 5. Other questions
---
#### Q1: The phone can be detected, but it is grayed out (disabled) and cannot be clicked

This situation usually occurs after the mobile phone is detected, and the connection to other software is disconnected in the middle, and the mobile phone needs to be plugged in or unplugged or HBuilderX restarted.

#### Q2: The mobile phone can be detected, but the installation and debugging fails when the HBuilder is running on the real device.

1. Some Android roms such as Xiaomi have the permission to install apk by usb, which may be closed. You have to find the permission to install apk by usb in the settings of the phone manager, and then turn it on.

2. When some Android phones install apk on usb, they will pop up warning message on the phone. The installation will fail due to timeout if you can not click it. Please pay attention to the display on the phone screen. The case is when the HBuilder console prompts `"Failed to install the HBuilder Base App, please manually install xxx\android_base.apk with mobile assistant."`.
   
3. The iOS will occasionally report an error. You need to manually install iPhone_base.ipa according to the prompts. The installation method recommends itools, and you can use itunes without itools. After installation, there will be a HBuilder application on the phone. 

Then the project will be deployed to mobile phone after you click "run on real device". Then click HBuilder application manually, you will see the results of the project.

#### Q3: Solution to the problem that the HBuilder console does not output logs

Refer to [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

#### Q4: The Android phone prompts the application has been installed successfully, but there is no HBuilder application on the phone.

1. Confirm whether the USB debugging mode is turned on. If it is not turned on, please turn on the USB debugging mode to re-run the real device debugging.
2. If HBuilder has detected the mobile phone, there may be a conflict with the mobile assistant. Please close all mobile assistants and run the real-device debugging again. 
3. Use the phone assistant to manually install android_base.apk on the phone, and then re-run the real device debugging.

#### Q5: Android real device joint debugging report file operation Permission denied

Please try the following methods：
1. Unplug the cable
2. Reopen`the USB debugging mode`
3. 重新插上数据线，此时手机上可能需要授权确认，点击确认
4. 重新运行真机调试看看是否还有问题
5. 重启手机，再重新运行真机调试，看看问题是否解决
6. 如果还有问题，重新启动HBuilder，重复1-4步骤，再重新运行真机调试，看看问题是否解决
7. 如果问题仍然没有解决，则重新安装手机驱动：
   1）我的电脑---右键--属性--硬件---设备管理器--删除USB驱动
   2）打开手机助手重新安装驱动; 此时手机上可能需要授权确认，点击确认，然后再重新运行真机调试
8. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题

#### Q6: Android真机联调报：open '/dev/hwlog_switch' fail -1, 13. Permission denied

请尝试以下方法解决：

1. 参考 [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
2. 拔插数据线重试
3. 重新打开USB调试模式重试
4. 重启手机重试
5. 重新启动HBuilder重试
6. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题


#### Q7: 为什么Android手机没有SDCard就不能真机调试？

Android没有root的手机只有SDCard才有权限。不过此SDCard并不是非得外插一张实体sd卡，是手机里一个叫SDCard的根目录。
如果是使用Android模拟器，在模拟器里可以配置SDCard是否存在及大小。
此情况已过期，目前正常手机都有SDCard目录。

#### Q8: 控制台显示手机应用已启动，但手机屏幕上没有出现？

Android手机第一次安装基座应用时，手机端大多有各种杀毒软件要检测一会才会放行，需要等一会。

#### Q9: 5+App运行后手机端一直在启动画面停留，不停转圈不能进入

这是应用的js代码的问题，启动画面的关闭是可配置的。参考 [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)


#### Q10: 为什么我电脑没有插iphone，但HBuilder检测到iOS设备？

iTunes支持wifi同步，如果iOS设备启动了wifi同步，电脑端的iTunes就可以检测到，进而HBuilder也可以检测到。

#### Q11: 真机运行成功启动，但手机端软件启动后显示的不是正在运行的项目。

这种情况是adb连接手机成功，但copy项目文件到手机上失败了。重新运行真机调试。
或者检查待运行工程的目录名文件名是不是有特殊符号或超长导致Android不识别。

#### Q12: 真机运行启动后显示HBuilder真机运行（log）界面 {#synchronous}

1. 重新运行真机调试尝试解决问题
2. Android设备可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试
3. 如果步骤2无法解决，请更换别的手机助手，重新运行真机调试尝试解决问题
4. 确认手机上HBuilder应用安装位置，如果手机上有外置sdcard，不要把HBuilder基座App安装在外置sdcard上，如果是安装在外置sdcard上，卸载外置sdcard上的HBuilder基座App，并在设置中将应用的默认安装位置不要设置为外置的sdcard上，或者将应用转移至手机内存或内置sdcard上，并重新运行真机调试

#### Q13: 使用genymotion模拟器真机运行，安装apk时报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE

参见[genymotion模拟器报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解决办法](http://blog.csdn.net/wjr2012/article/details/16359113)
其他模拟器的适配在论坛中搜索即可。

#### Q14: 如何通过wifi真机运行，不插数据线？

参考[http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)



