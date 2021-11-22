# Packaging Guidelines

Before we need to submit the source code and packaging certificate to DCloud for App packaging, and then generate the apk/ipa file in the cloud native development environment. Although the DCloud  server does not store information such as source code and certificates, the developer may still be uneasy or worry that there may be a risk of intercepting leakage during network transmission.

Offline packaging is inconvenient, and two important functions are lost.
1. Native-mixed, protect js code (Due to the security of the secret key, offline packaging cannot be used)
2. Paid native plug-ins in the market (Due to copyright issues, offline packaging cannot be used)

> The HBuilderX 2.9.9 version adds the Android platform **safe packaging** function, the developer does no longer submit source code and packaging certificate to the cloud server, but also reduce the pressure of packaging machine, shorten the peak period of cloud packaging waiting time.
> HBuilderX 3.0.7 version adds iOS platform to support **Safe Packaging** function (only supports MacOS)


## Safe Packing

- First Packing
  1. HBuilderX will submit App module configuration to the cloud, and generate native code packages on the cloud packager (not including application code and certificate).
  2. HBuilderX downloads the native code package, adds the source code to the native code package on the local computer, and generates an unsigned installation package.
  3. Cache native code packages for reuse in the next package.
  4. Use the packaging certificate to sign the unsigned installation package on the local computer to generate the installation package.

- Non-first Packing
  1. HBuilderX judges whether the cached native code package can be reused. If the App module configuration is not modified or the native code package configuration operation is affected, continue to the next step. Otherwise, switch to the `first packaging` process. The following conditions will also trigger the `first packaging` process:
    + The uni native plug-in is used, and it is impossible to determine whether the native plug-in has been updated locally, so as long as the uni native plug-in is included in the project, the process of `first packaging` will be taken.
    + HBuilderX is updated, the local cache native code package needs to be updated, you need to go through the `first packaging` process to generate a new version of the native code package.
  2. Add the modified source code to the native code package to generate an unsigned installation package
  3. Use the packaging certificate to sign the unsigned installation package on the local computer to generate the installation package

Most of the packages do not change the native part (mainly manifest.json), only the front-end code is modified. At this time, there is no need to download the native package from the cloud packaging machine, and the packaging speed will be very fast.

## Safe packaging advantage

- More Secure: Do not submit source code, certificates and other information when packaging
- Faster: No need to submit to the cloud when packaging is not the first time, and the package is directly delivered locally.
- Traffic saving: reduce the submission of packaging resources when packaging, no need to download native code packages when not packaging for the first time
- Cheaper: Unless a large local native plug-in is used, it will be difficult to break through the 40M free package volume threshold. Both the cost of developers and DCloud dropped.

## How to use safe packing
No additional operations are required for the new version of HBuilderX cloud packaging. By default, "Package with peace of mind" is checked, as shown in the following figure:

<img src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/ask/pkg/sp.png" style="zoom: 80%;" /> 

If the "Anxin Packing" plugin is not installed, the following prompt box will pop up, click "Install" to continue

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/ask/pkg/sp_plugin.png)

After the plug-in is installed, you need to click the "Package" button to submit the package again

**After the packaging is completed, it will be automatically saved to the "unpackage/release/apk/" directory of the project**

If this directory is emptied, the first packaging logic will be executed next time.

## Note:
- Windows: Only the Android platform supports safe packaging, and iOS does not support it; MacOSX: Android and iOS both support safe packaging.
- Custom debugging base does not support safe packaging.
- The old version of DCloud certificate does not support safe packaging.
- When using native-mixed, the configured js files to be encrypted need to be submitted to the cloud packaging machine (the js will be automatically cleared after the packaging is completed)
- Safe packaging is not 100% offline packaging. Although the certificate and front-end code are no longer submitted to the cloud, the module configuration, local native plug-in, and native-mixed configuration files in the project’s manifest still need to be submitted before the package can be released.
- The iOS platform cannot be compatible with swift. If the uni native plug-in is developed using swift, submit the appstore prompt “ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.” In case of error, please use traditional packaging instead.

## FAQ
- There is a limit on the number of times of free packaging
  The limit of packaging times is to prevent some developers from occupying too much cloud packaging resources and increase the current limiting measures. When using the `safe packaging`, the installation package generated by the `non-first packaging` mechanism does not occupy cloud packaging resources, so it is not It will take up **cloud free packaging times**, which can also be understood as the `non-first packaging` of `safe packaging` without a limit on the number of packaging times.


## `Android packaging problem summary`

### Q1: Windows：The console prompts that the packaging is successful, and there is no apk file in the corresponding directory.

** Question：** Some users reported that on Windows, the console prompts that Android Anxin has been successfully packaged. Enter the corresponding directory (unpackage/release/apk), and the apk file cannot be found in the directory.(unpackage/release/apk)
** Reason** ：unpackage/release/apk directory，no write permission, failed to move the apk file。

** Solution：** 
1. Set unpackage/release/apk write permission
2. Restart computer

### Q2: fakeLogOpen(/dev/log_crash) failed

In some cases, you may encounter the following errors when submitting the peace of mind package for the first time：
```
[Error] W: fakeLogOpen(/dev/log_crash) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Info] I: Copying libs... (/lib)
[Info] I: Building apk file...
[Info] I: Copying unknown files/dir...
[Info] I: Built apk...
[Error] Apk tool compile package to apk failed
[Info] Result：Failed. Reason:
```

** Solution：** Resubmit safe packing

### Q3: Startup Fig. 9.png format problem

In the error log, the following log appears：
```
[Error] W: ERROR: 9-patch image C:\xxxxx\res\drawable-hdpi\splash.9.png malformed.
[Error] W: No marked region found along edge.
[Error] W: Found along top edge.
```

** Reason：**  `Startup image xxx.9.png` is not a `valid 9.png` image, which is caused by a wrong format

** Solution：** Regenerate a valid `9.png picture`

** Note：**  Some users may ask questions, for the same .9.png project, why did traditional packaging succeed, but safe packaging failed? Because: "Anxin packaging" verification mechanism is more strict.

** Document：**  [.9.png images and documents](https://ask.dcloud.net.cn/article/35527)

### Q4: Error occurred during initialization of VM

In the error log, the following log appears：
```
[Info] Error occurred during initialization of VM
[Info] Could not reserve enough space for 1048576KB object heap
[Error] Result：Failed.    Reason: 
```
** Solution：** 
1. Find the app-safe-pack.ini file in the app-safe-pack directory
2. Modify -Xmx1024M in the file content to -Xmx512M
3. Resubmit

** Note：** Valid for HBuilderX 3.1.10+

## `ios safe packing problem summary`

### Q1: Packaging failed, signature failed errSecInternalComponent error

In the error log, the following log appears:
```
[Error] HBuilder.xcarchive/Payload/HBuilder.app: replacing existing signature
[Error] Warning: unable to build chain to self-signed root for signer  "xxxxxxxxxx“”
[Error] HBuilder.xcarchive/Payload/HBuilder.app: errSecInternalComponent
```

** Reason：**  It may be that the user manually clicked and installed the certificate, which caused the packaging and signing to fail.

** Solution：** Open the keychain to access, delete the certificate manually installed by the relevant user, and repackage it (the picture below is for reference only, the developer needs to determine which certificates are manually installed).

<img src="/static/snapshots/tutorial/iossafepackcertinstall.jpeg" style="zoom: 45%;"/>


## Feedback

If you encounter an issue with safe packaging and cannot be resolved, please add QQ group 827137391.

The group needs to provide the information of `operating system` and `HBuilderX version number`. For questions, please submit `error log` or `screenshot`.

This group is only for feedback on safe packaging, please do not post irrelevant information.
