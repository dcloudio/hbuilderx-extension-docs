# 安心打包使用指南

過去，App雲端打包時需要將應用代碼、打包證書等提交到DCloud雲端打包機，在雲端打包機的原生開發環境中生成安裝包apk/ipa。
DCloud雲端服務器雖然不會保存開發者應用代碼和證書等信息，但開發者可能還是不放心，或者擔心在網絡傳輸過程中可能存在攔截泄漏的風險。

而離線打包，不但不方便，還有2個重要功能無法使用：
1. 原生混淆，保護js代碼（因爲祕鑰的安全問題，離線打包無法使用）
2. 插件市場的付費原生插件（因爲插件版權問題，離線打包無法使用）

> HBuilderX2.9.9版本新增Android平臺**安心打包**功能，不再提交應用代碼及打包證書到雲端服務器，同時也減輕雲端打包機壓力，縮短高峯期雲端打包等待時間。
> HBuilderX3.0.7版本新增iOS平臺支持**安心打包**功能（僅支持MacOS）


## 安心打包原理

- 首次打包
  1. HBuilderX會提交App的模塊配置信息到雲端，在雲端打包機生成原生代碼包（不包含應用代碼、證書信息）
  2. HBuilderX下載原生代碼包，在本地電腦上將應用代碼添加到原生代碼包中，生成未簽名安裝包
  3. 緩存原生代碼包，用於下次打包複用
  4. 在本地電腦上使用打包證書對未簽名安裝包進行簽名操作，生成安裝包
- 非首次打包
  1. HBuilderX判斷緩存的原生代碼包是否可以複用，如果沒有修改App模塊配置或影響原生代碼包配置操作繼續下一步，否則轉`首次打包`流程，以下情況也會觸發`首次打包`流程：
    + 使用了uni原生插件，本地無法判斷原生插件是否更新了，因此項目中只要包含uni原生插件都會走`首次打包`流程
    + HBuilderX更新，本地緩存原生代碼包需要更新，需要走`首次打包`流程生成新版本原生代碼包
  2. 將修改後的應用代碼添加到原生代碼包中，生成未簽名安裝包
  3. 在本地電腦上使用打包證書對未簽名安裝包進行簽名操作，生成安裝包

因爲大多數打包，並不改動原生部分（主要是manifest.json），只修改前端代碼。此時將無需從雲端打包機下載原生包，打包速度會非常快。

## 安心打包優勢

- 更安全：打包時不提交應用代碼、證書等信息
- 更快速：非首次打包時不用提交雲端打包機排隊等待，本地直接出包
- 省流量：減少了打包時提交打包資源，非首次打包時不用下載原生代碼包
- 更便宜：除非使用了體積很大的本地原生插件，否則將難以突破40M的免費打包體積閥值。開發者和DCloud的成本雙下降

## 使用安心打包
新版本HBuilderX雲端打包時無需額外操作，默認會勾選“安心打包”，如下圖所示：

<img src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/ask/pkg/sp.png" style="zoom: 80%;" /> 

如果沒有安裝安心打包插件，會彈出以下提示框，點擊“安裝”繼續

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/ask/pkg/sp_plugin.png)

插件安裝完成後需重新點擊“打包”按鈕提交打包

**打包完成後自動保存到項目的"unpackage/release/apk/"目錄**

如果清空了這個目錄，那麼下次打包將執行首次打包邏輯。

## 注意事項
- Windows環境：僅Android平臺支持安心打包，iOS暫不支持；MacOSX環境：Android和ios都支持安心打包。
- 自定義調試基座不支持安心打包
- 使用DCloud老版證書不支持安心打包
- 使用原生混淆時，配置的待加密js文件需要提交到雲端打包機（打包完成後自動清除這些js）
- 安心打包並非純離線打包，雖然證書和前端代碼不再提交雲端打包機，但項目的manifest中的模塊配置、本地原生插件、原生混淆配置的前端文件，仍需提交才能出包
- iOS平臺安心打包無法兼容swift，如果uni原生插件使用swift開發，提交appstore提示“ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.”錯誤時，請改用傳統打包

## FAQ
- 安心打包是否有免費打包次數限制？
  打包次數限制是爲了避免部分開發者過多佔用雲端打包資源而增加的限流措施，在使用`安心打包`時，由`非首次打包`機制生成的安裝包由於不佔用雲端打包資源，所以不會佔用**雲端免費打包次數**，也可以理解爲`安心打包`的`非首次打包`無打包次數限制。


## `Android 安心打包問題彙總`

### Q1: Windows：控制檯提示打包成功，相應目錄下沒有apk文件

** 問題：** 某些用戶反饋，windows電腦，控制檯提示Android安心打包成功，進入相應目錄(unpackage/release/apk)，目錄下找不到apk文件
** 原因** ：unpackage/release/apk目錄，沒有寫入權限，移動apk文件失敗了。

** 解決方法：** 
1. 賦予unpackage/release/apk目錄寫入權限
2. 重啓電腦試試

### Q2: fakeLogOpen(/dev/log_crash) failed

某些情況下，首次提交安心打包，您可能會遇到下列錯誤：
```
[Error] W: fakeLogOpen(/dev/log_crash) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Info] I: Copying libs... (/lib)
[Info] I: Building apk file...
[Info] I: Copying unknown files/dir...
[Info] I: Built apk...
[Error] Apk tool compile package to apk failed
[Info] 製作結果：Failed. Reason:
```

** 解決方法：** 重新提交安心打包

### Q3: 啓動圖.9.png格式問題

錯誤日誌中，出現如下日誌：
```
[Error] W: ERROR: 9-patch image C:\xxxxx\res\drawable-hdpi\splash.9.png malformed.
[Error] W: No marked region found along edge.
[Error] W: Found along top edge.
```

** 原因：**  ` 啓動圖xxx.9.png`不是`有效9.png`圖片，格式錯誤導致。
** 解決方法：** 重新生成有效的`9.png圖片`

** 備註：**  部分用戶可能會提問，同樣.9.png項目，爲什麼傳統打包成功，安心打包失敗呢？因爲：安心打包校驗機制更爲嚴格。
** 文檔：**  [.9.png圖片相關文檔](https://ask.dcloud.net.cn/article/35527)

### Q4: Error occurred during initialization of VM

錯誤日誌中，出現如下日誌：
```
[Info] Error occurred during initialization of VM
[Info] Could not reserve enough space for 1048576KB object heap
[Error] 製作結果：Failed.    Reason: 
```
** 解決方法：** 
1. 找到安心打包插件(app-safe-pack)目錄下app-safe-pack.ini文件
2. 將文件內容裏-Xmx1024M修改爲-Xmx512M
3. 重新提交打包

** 備註：**  HBuilderX 3.1.10及以上版本生效

## `ios 安心打包問題彙總`

### Q1: 打包失敗，簽名失敗errSecInternalComponent錯誤

錯誤日誌中，出現如下日誌：
```
[Error] HBuilder.xcarchive/Payload/HBuilder.app: replacing existing signature
[Error] Warning: unable to build chain to self-signed root for signer  "xxxxxxxxxx“”
[Error] HBuilder.xcarchive/Payload/HBuilder.app: errSecInternalComponent
```

** 原因：**  可能是用戶手動點擊安裝了證書導致打包簽名失敗。

** 解決方法：** 打開鑰匙串訪問刪除相關用戶手動安裝的證書後重新打包（下圖僅供參考，需開發者判斷哪些證書是手動安裝的證書）。

<img src="/static/snapshots/tutorial/iossafepackcertinstall.jpeg" style="zoom: 45%;"/>



## 安心打包問題反饋

如果您遇到安心打包問題，且無法解決，請加QQ羣827137391。

進羣需要提供`操作系統`和`HBuilderX版本號`信息，提問請提交`錯誤日誌`或`截圖`。

本羣僅限反饋安心打包問題，請勿發佈無關信息。