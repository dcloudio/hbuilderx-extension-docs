## Foreword

> First, make sure that `iTunes` or `Android Phone Assistant` (such as 360 Phone Assistant) can connect to the phone normally.

> If you still have problems, please check whether the following problems are the same with your problem.

**Note**：
- `You need to upgrade to HBuilderX 2.2.5+ or higher if you want to run on iOS13 device.`
- Itunes `12.10.9.3` connected to `ios 14+` iphone phones, there may be problems; please download the version before 12.9.4.102
- Some Android 11 mobile phones fail to sync files on real devices. HBuilderX 3.1.19 has solved this problem. Please upgrade HBuilderX to 3.1.19+.

We need to analyze where the problem is. The program will perform the following steps after click the real device to run:

1. The mobile phone hardware is connected to the computer through the USB cable. The connection may fail due to various problems such as the `mobile phone driver`, USB port, data cable, and mobile phone hardware.

2. HBuilderX detects mobile phones through adb or itunes services. It may not be detected due to mobile phone channels, usb connection settings, adb settings or adb conflicts, or itunes settings.

3. HBuilderX installs and debugs the base to the mobile phone. The installation may fail because the mobile phone prohibits USB installation, the Android phone does not have an SD card, and the iOS phone does not have a trusted certificate.

4. HBuilderX sync the code in the IDE to the mobile phone and starts the debugging dock. This step is usually correct.


Below is a list of various common FAQs which you can check at any time during future use.

## 1. No menu running to the phone
---
> The real machine can only run the App project, select the App project or focus on the file editor of the App project to be run.

HBuilderX supports web projects and app projects. There is an icon in front of the project. W stands for web project and A stands for App project. Only the `App project can run`.

HBuilderX supports more project types, only `uni-app`, `5+app`, and `wap2app` can run on real machine. They will all have a `manifest.json` file in the project root directory (uni-cli projects will have manifest.json in the src directory).

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

### 3.1 Mac: iOS real machine

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

If you can't find who is occupied, you can also use the following methods to detect and find the  behind the scenes:
1. 打开命令行窗口
2. 确认adb的启动进程：
  寻找端口是`5037`的`tcp连接`，在命令行中输入：`netstat -ano | findstr 5037`
  
  在输出结果中找到类似下面的一行：
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *如果内容为空，可能是没有程序在占用adb端口。*
  
  或者使用 netstat -ano | findstr 5037>d:/1.txt 输出到文件中查找。
  根据查询结果确认端口为5037的连接被那个进程占用，结果中显示的“5816”表示占用adb端口的进程PID。

3. 根据进程的PID可以找到具体进程。

  在命令行中输入：`tasklist | findstr 5816`
  在输出结果中找到类似下面的一行：
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（名称一般不是adb.exe，以adb.exe举例）为启动的adb进程。
  或者手工在任务管理器中定位这个进程，打开任务管理器后，进入进程选项卡，如果列表里有PID，直接找；如果列表里没有PID，点菜单查看-选择列，勾上PID。

#### 4.1.4 其它问题

如果以上方式仍然不行，还有一种可能是手机对adb的版本有特定要求（遇到一些魅族手机有此问题），此时需要更换HBuilder的adb版本。
- HBuilder安装目录下带了多个版本的adb。
- HBuilder的adb目录位置：tools/adbs目录（MAC下为HBuilder.app/Contents/tools/adbs目录）
- HBuilderX的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
替换版本前，将默认版本的adb.exe备份下。然后把1.0.31版的adb.exe拷贝出来替换主目录下的exe。

### 4.2 Windows: 连接iOS手机

1. 确认手机已通过数据线连接电脑
2. 确认已安装iTunes，若未安装点击[itunes历史版本下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/), 请下载12.9.4.102之前的版本
3. 确认iTunes能正常连接手机
4. 如手机屏幕弹出需信任本计算机的询问，请同意该授权
5. 如果是第一次安装完itunes，建议重新启动HBuilderX
6. 如果以上方案都无法解决，有可能是因为本地库与iTunes带的库冲突了，一般是iTunes库目录（32位系统目录为：C:\Program Files\Common Files\Apple\Apple Application Support，64位系统目录为：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件和系统库目录（32位系统目录为：C:\WINDOWS\system32，64位系统目录为：C:\Windows\SysWOW64）下的dll重名，可将iTunes库目录下的同名dll文件拷贝到系统库目录下，或者将系统目录下的同名dll文件重命名或删除，然后再重启HBuilder或者重试真机运行
7. 有可能是iTunes安装时依赖库丢失，尝试重装iTunes解决问题 
8. iTools提供了一个修复驱动的工具和教程，可以参考[http://bbs.itools.cn/thread-129390-1-1.html](http://bbs.itools.cn/thread-129390-1-1.html)

**注意1：**

itunes `12.10.9.3`版本，连接`ios 14+`的iphone手机，可能存在问题。

如无法连接，请下载itunes历史版本。 [itunes历史版本下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/)


**注意2：**

iTunes12.1起更改了接口，会造成无法连接：
  ①、HBuilderX菜单：工具 - 插件安装，打开插件安装界面，选择【iOS连接插件】（HBuilderX叫做真机运行插件）并安装，安装完并重启HBuilderX，尝试是否解决；
  ②、安装最新版本的iTools，重启HBuilderX。

## 5. 其它问题
---
#### Q1: 能检测到手机，但处于置灰状态无法点击

发生此情况一般为检测到手机后，中间因为其他软件连接断开了，需要重新插拔手机或重启HBuilderX。

#### Q2: 能检测到手机，但点HBuilder的真机运行，安装调试基座失败

1. 部分Android rom如小米有usb安装apk的权限，可能是关闭状态，此时需要在手机管家等设置里寻找usb安装apk的权限，将其打开。
2. 部分Android手机在usb安装apk时，会在手机界面上弹框，如果不能及时点弹框，会因为超时而安装失败。请注意手机屏幕的显示。
   当HBuilder控制台提示`“安装HBuilder基座App失败，请使用手机助手手动安装xxx\android_base.apk。”`时，基本都属于这种情况。
3. iOS版本偶发也会报错。同样需要根据提示手动安装iPhone_base.ipa。安装方式推荐itools，没有itools使用itunes也可以。
安装完毕后，会在手机上有一个HBuilder的应用。
以后再点真机运行，就可以把项目部署到手机上，然后手动点击HBuilder应用，就能看到项目的结果。

#### Q3: HBuilder控制台不输出日志问题的解决办法

参考[http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

#### Q4: Android手机真机运行提示应用安装成功，但是其实手机上并没有HBuilder应用

1. 确认USB调试模式是否打开。如果未打开，请打开USB调试模式重新运行真机调试。
2. 如果HBuilder已经检测到手机，可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试。 
3. 利用手机助手手动安装android_base.apk到手机上，然后重新运行真机调试。

#### Q5: Android真机联调报文件操作Permission denied

请尝试以下方法解决：
1. 拔出数据线
2. 重新`打开USB调试模式`
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



