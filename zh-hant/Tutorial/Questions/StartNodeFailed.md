# 啟動node失敗問題檢查
此文件用於解決某些機器無法正常啟動node導致語言服務導致無法使用代碼提示功能和打包功能。

#### 目前已知的引發node啟動失敗的原因（僅適用於Windows平台）：
#### 1.某些windows 7系統無法啟動node

<img src="/static/snapshots/tutorial/question/nodeerror.png" style="zoom:60%;" />

> **解決方法：**需要下載 [KB3080149的系統補丁](https://www.microsoft.com/zh-CN/download/confirmation.aspx?id=48636)，安裝成功後重新啟動電腦，再開啟HBuilderX