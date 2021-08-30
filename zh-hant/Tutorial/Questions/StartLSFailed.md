# 啓動語言服務失敗問題排查
此文檔用於解決某些機器無法正常啓動語言服務導致無法使用代碼提示功能和打包功能。

#### 目前已知的引發語言服務啓動失敗的原因有以下幾條（僅適用於Windows平臺）：
#### 1.Java環境不兼容導致

> **解決方法：**需要到[Oracle下載頁面](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html)找到Windows x86，下載新的jdk安裝包。安裝到本地後,找到Java的安裝目錄默認爲`C:\Program Files (x86)\Java`然後將`jre7`目錄整個拷貝到HBuilderX的安裝目錄下的`plugins`目錄下並重命名爲`jre`（需將plugins目錄下原來的jre刪除），然後重啓HBuilderX即可。

#### 2.內存不足導致
> **解決方法：**找到HBuilderX安裝目錄下的`plugins/ls/ls.ini`文件，將內容替換如下：

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
> 替換完成後重啓HBuilderX。