# Troubleshoot failure to startup language service
This document is used to solve the problem that some computers cannot startup the language service, causing the code prompt function and packaging function to be unavailable.

#### The known reasons for the failure to startup the language service are as follows:（Windows Platform Only）：
#### 1.JDK is not compatible

> **Solution：**Open [Oracle Download Page](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html) to find Windows x86，Download latest jdk installation packageAfter installation, find the installation directory of Java `C:\Program Files (x86)\Java` then copy `jre7` directory to the `plugins` directory under the HBuilderX installation directory and rename it to `jre`（delete old jre directory in plugins folder），then restart HBuilderX。

#### 2.Insufficient memory
> **Solution：**find `plugins/ls/ls.ini` file from HBuilderX installation directory and replace the content as follows：

```ini
-Xverify:none
-Xnoclassgc
-Dfile.encoding=utf-8
-Djna.nosys=true
-Xmx512m
-Xms256m
-Xmn128m
-XX:PermSize=64m
-XX:MaxPermSize=128m
-XX:+DisableExplicitGC
-XX:+UseConcMarkSweepGC
-XX:+UseParNewGC
-XX:CMSInitiatingOccupancyFraction=85
```
> Then, restart HBuilderX。
