## 前言@foreword

> 首先保證`iTunes`或`Android手機助手`（如360手機助手）可以正常連接手機。

> 如果仍有問題請查閱以下問題是否與自己遇到的情況相同

**特別注意**：
- `iOS13真機運行，需要升級至HBuilderX 2.2.5+以上版本。`
- itunes `12.10.9.3`版本，連接`ios 14+`的iphone手機，可能存在問題；請下載12.9.4.102之前的版本 
- Android 11部分手機真機運行文件同步失敗的問題，HBuilderX 3.1.19已解決此問題，請升級HBuilderX 到3.1.19+版本。

出現問題手機分析清楚問題在哪個環節。
從在HBuilder/HBuilderX菜單裏點真機運行，程序會執行如下幾個步驟：

1. 手機硬件通過usb線連接到HBuilder所在電腦，此時可能因爲`手機驅動`、usb口、數據線、手機硬件等多種問題造成連接失敗。
2. HBuilderX通過adb或itunes服務檢測手機。此時可能因爲手機渠道、usb連接設置、adb設置或adb衝突、itunes設置造成檢測不到。
3. HBuilderX安裝調試基座到手機。此時可能因爲手機禁止usb安裝、Android手機沒有sd卡、iOS手機沒有信任證書而安裝失敗。
4. HBuilderX將ide中的代碼同步到手機上並啓動調試基座。這一步一般不會出問題。


下面把各種常見FAQ列出，大家可按圖索驥。

## 1. 沒有運行到手機的菜單@no_menu
---
> 真機運行只能運行App項目，選中App項目或將焦點放在將要運行的App項目的文件編輯器上

HBuilderX支持web項目和app項目，項目前面是有圖標的，W表示web項目，A表示App項目。其中只有`App項目可以運行`。

HBuilderX支持項目類型較多，只有`uni-app`、`5+app`、`wap2app`可以真機運行。他們都會在項目根目錄下有個`manifest.json`文件（uni-cli項目會在src目錄下有manifest.json）。

## 2. 檢查手機設置@check
---
特別注意：Windows連接Android手機，一定要確保電腦已安裝相應的手機驅動。

1. 確保數據線或usb口正常，可替換不同的線或口來驗證。
2. 確認Android手機設置中`USB調試`模式已開啓。這個設置一般在【設置】【開發者選項】裏。有的手機在插上數據線後在push通知欄裏也可以設置。注意不能設置爲u盤模式，如果是充電模式則必須同時設置充電時`允許usb調試`。
3. 如手機屏幕彈出需信任本計算機的詢問，請`同意該授權`。並且最好是把始終同意該設備調試勾上。如不小心拒絕，需要重插手機或重啓電腦。
4. Android5.0及以上系統，不要使用訪客模式。這種模式下無法成功運行。
5. 部分手機如小米，有usb安裝應用的權限設置，需在手機上允許通過usb安裝應用。不同rom的界面不一樣，請自行百度你的手機打開usb安裝應用的方式。

## 3. Mac 連接手機/模擬器說明@macosx
---
分Android和iOS手機分別列出排查方式：

### 3.1 Mac: iOS真機@mac-iphone

1. 確認手機已通過數據線連接電腦
2. 確認iTunes能正常連接手機
3. 如手機屏幕彈出需信任本計算機的詢問，請同意該授權

### 3.2 Mac: iOS模擬器@mac-iOS-Simulator

1. Xcode必須安裝在應用程序（Application）中
2. 首先確認Xcode（版本必須是6.0及以上版本）已安裝並能正常啓動模擬器
3. 如果仍然無法檢測到，則打開Xcode，然後打開Xcode的 `Preferences --> Locations`，設置該界面中的 `Command Line Tools` 項，選擇正確的`Xcode`版本即可

<img src="/static/snapshots/tutorial/ios_simulator.png" />

### 3.2 Mac: 連接Android手機@mac-android

1. 關於本機(指Mac系統的關於本機，非手機) --> 系統報告 -> usb  -> 你所連接的device --> 廠商ID或者供應商ID(Vendor ID)
2. 在終端執行如下命令：echo xxxxxx >> ~/.android/adb_usb.ini （“xxxxxx”爲廠商ID或者供應商ID(Vendor ID)，有些系統下echo命令並不能正確寫入文件，可在~/.android/目錄下修改或新建adb_usb.ini添加xxxxxx）
3. 重啓HBuilderX。
4. 如重啓HBuilderX仍然不行，請使用命令行(終端.app)，切換到HBuilderX自帶的adb目錄。
5. HBuilderX正式版的adb目錄位置：tools/adbs目錄（MAC下爲HBuilderX.app/Contents/tools/adbs目錄）
6. HBuilderX Alpha版的adb目錄位置：plugins/launcher/tools/adbs目錄（MAC下爲`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目錄）
7. 在adbs目錄下運行`./adb kill-server`重試。
8. 重啓電腦重試。

## 4. Windows 連接手機/模擬器說明@windows
---
### 4.1 Windows: 連接Android手機@windows-android

#### 4.1.1 驅動：

> 請確認已安裝Android手機驅動。

如果手機連接沒有任何反應或提示驅動問題，可通過以下方式解決：
  1. 安裝`驅動精靈`類程序，通過它們來安裝驅動
  2. 裝驅動比較好的方式是使用各種手機助手，比如`360、騰訊的各種手機助手`，如果有問題，嘗試升級助手的版本。

#### 4.1.2 其它注意事項：
  1. 如果在啓動HBuilderX後才安裝驅動連接上手機，可能需要重啓HBuilderX。
  2. 使用管理員權限運行HBuilder。
  3. 關閉WebView調試模式，重啓HBuilderX重試。
  4. 如果其他軟件可以連接手機，而HBuilderX無法檢測到手機，可能是其他軟件獨佔了Google的ADB服務通道。
  5. Android的`ADB服務`已經被大量軟件濫用，除了各種手機助手自帶adb，其他如QQ、搜狗輸入法、暴風影音、酷狗音樂、阿里旺旺等衆多軟件都自帶`adb`。有些工具的`adb`版本低且獨佔手機通道，就會導致HBuilderX無法連接手機。
  6. 在任務管理器中找到`adb.exe`相關進程（包括`kadb.exe`等），在任務管理中右鍵該進程，打開文件位置，查看該進程是什麼軟件啓動的。
  7. 禁止這些軟件監聽手機插入（一般在該軟件的設置中）、禁止自動啓動。
  8. 有些軟件結束adb進程後又會自動啓動，所以得將`adb.exe`文件重命名一下，實在不行卸載了這些流氓軟件。
  9. 關閉所有手機助手及進程裏各種`adb.exe`（包括`kadb.exe`等），再試。

#### 4.1.3 adb佔用問題

如果你找不到被誰佔用，則還可以使用如下方式檢測，尋找幕後黑手：
1. 打開命令行窗口
2. 確認adb的啓動進程：
  尋找端口是`5037`的`tcp連接`，在命令行中輸入：`netstat -ano | findstr 5037`
  
  在輸出結果中找到類似下面的一行：
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *如果內容爲空，可能是沒有程序在佔用adb端口。*
  
  或者使用 netstat -ano | findstr 5037>d:/1.txt 輸出到文件中查找。
  根據查詢結果確認端口爲5037的連接被那個進程佔用，結果中顯示的“5816”表示佔用adb端口的進程PID。

3. 根據進程的PID可以找到具體進程。

  在命令行中輸入：`tasklist | findstr 5816`
  在輸出結果中找到類似下面的一行：
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（名稱一般不是adb.exe，以adb.exe舉例）爲啓動的adb進程。
  或者手工在任務管理器中定位這個進程，打開任務管理器後，進入進程選項卡，如果列表裏有PID，直接找；如果列表裏沒有PID，點菜單查看-選擇列，勾上PID。

#### 4.1.4 其它問題

如果以上方式仍然不行，還有一種可能是手機對adb的版本有特定要求（遇到一些魅族手機有此問題），此時需要更換HBuilder的adb版本。
- HBuilder安裝目錄下帶了多個版本的adb。
- HBuilder的adb目錄位置：tools/adbs目錄（MAC下爲HBuilder.app/Contents/tools/adbs目錄）
- HBuilderX的adb目錄位置：plugins/launcher/tools/adbs目錄（MAC下爲`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目錄）
替換版本前，將默認版本的adb.exe備份下。然後把1.0.31版的adb.exe拷貝出來替換主目錄下的exe。

### 4.2 Windows: 連接iOS手機@windows-ios

1. 確認手機已通過數據線連接電腦
2. 確認已安裝iTunes，若未安裝點擊[itunes歷史版本下載地址](https://mydown.yesky.com/pcsoft/33491427/versions/), 請下載12.9.4.102之前的版本
3. 確認iTunes能正常連接手機
4. 如手機屏幕彈出需信任本計算機的詢問，請同意該授權
5. 如果是第一次安裝完itunes，建議重新啓動HBuilderX
6. 如果以上方案都無法解決，有可能是因爲本地庫與iTunes帶的庫衝突了，一般是iTunes庫目錄（32位系統目錄爲：C:\Program Files\Common Files\Apple\Apple Application Support，64位系統目錄爲：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件和系統庫目錄（32位系統目錄爲：C:\WINDOWS\system32，64位系統目錄爲：C:\Windows\SysWOW64）下的dll重名，可將iTunes庫目錄下的同名dll文件拷貝到系統庫目錄下，或者將系統目錄下的同名dll文件重命名或刪除，然後再重啓HBuilder或者重試真機運行
7. 有可能是iTunes安裝時依賴庫丟失，嘗試重裝iTunes解決問題 
8. iTools提供了一個修復驅動的工具和教程，可以參考[http://bbs.itools.cn/thread-129390-1-1.html](http://bbs.itools.cn/thread-129390-1-1.html)

**注意1：**

itunes `12.10.9.3`版本，連接`ios 14+`的iphone手機，可能存在問題。

如無法連接，請下載itunes歷史版本。 [itunes歷史版本下載地址](https://mydown.yesky.com/pcsoft/33491427/versions/)


**注意2：**

iTunes12.1起更改了接口，會造成無法連接：
  ①、HBuilderX菜單：工具 - 插件安裝，打開插件安裝界面，選擇【iOS連接插件】（HBuilderX叫做真機運行插件）並安裝，安裝完並重啓HBuilderX，嘗試是否解決；
  ②、安裝最新版本的iTools，重啓HBuilderX。

## 5. 其它問題@other
---
#### Q1: 能檢測到手機，但處於置灰狀態無法點擊

發生此情況一般爲檢測到手機後，中間因爲其他軟件連接斷開了，需要重新插拔手機或重啓HBuilderX。

#### Q2: 能檢測到手機，但點HBuilder的真機運行，安裝調試基座失敗

1. 部分Android rom如小米有usb安裝apk的權限，可能是關閉狀態，此時需要在手機管家等設置裏尋找usb安裝apk的權限，將其打開。
2. 部分Android手機在usb安裝apk時，會在手機界面上彈框，如果不能及時點彈框，會因爲超時而安裝失敗。請注意手機屏幕的顯示。
   當HBuilder控制檯提示`“安裝HBuilder基座App失敗，請使用手機助手手動安裝xxx\android_base.apk。”`時，基本都屬於這種情況。
3. iOS版本偶發也會報錯。同樣需要根據提示手動安裝iPhone_base.ipa。安裝方式推薦itools，沒有itools使用itunes也可以。
安裝完畢後，會在手機上有一個HBuilder的應用。
以後再點真機運行，就可以把項目部署到手機上，然後手動點擊HBuilder應用，就能看到項目的結果。

#### Q3: HBuilder控制檯不輸出日誌問題的解決辦法

參考[http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

#### Q4: Android手機真機運行提示應用安裝成功，但是其實手機上並沒有HBuilder應用

1. 確認USB調試模式是否打開。如果未打開，請打開USB調試模式重新運行真機調試。
2. 如果HBuilder已經檢測到手機，可能存在與手機助手衝突的情況，請關閉所有的手機助手重新運行真機調試。 
3. 利用手機助手手動安裝android_base.apk到手機上，然後重新運行真機調試。

#### Q5: Android真機聯調報文件操作Permission denied

請嘗試以下方法解決：
1. 拔出數據線
2. 重新`打開USB調試模式`
3. 重新插上數據線，此時手機上可能需要授權確認，點擊確認
4. 重新運行真機調試看看是否還有問題
5. 重啓手機，再重新運行真機調試，看看問題是否解決
6. 如果還有問題，重新啓動HBuilder，重複1-4步驟，再重新運行真機調試，看看問題是否解決
7. 如果問題仍然沒有解決，則重新安裝手機驅動：
   1）我的電腦---右鍵--屬性--硬件---設備管理器--刪除USB驅動
   2）打開手機助手重新安裝驅動; 此時手機上可能需要授權確認，點擊確認，然後再重新運行真機調試
8. 如果以上方案均無法解決，則有可能是手機root的時候，把sdcard目錄的權限搞錯了，導致無法真機運行，此時可以恢復出廠設置，或者重新root，或者刷機解決此問題

#### Q6: Android真機聯調報：open '/dev/hwlog_switch' fail -1, 13. Permission denied

請嘗試以下方法解決：

1. 參考 [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
2. 拔插數據線重試
3. 重新打開USB調試模式重試
4. 重啓手機重試
5. 重新啓動HBuilder重試
6. 如果以上方案均無法解決，則有可能是手機root的時候，把sdcard目錄的權限搞錯了，導致無法真機運行，此時可以恢復出廠設置，或者重新root，或者刷機解決此問題


#### Q7: 爲什麼Android手機沒有SDCard就不能真機調試？

Android沒有root的手機只有SDCard纔有權限。不過此SDCard並不是非得外插一張實體sd卡，是手機裏一個叫SDCard的根目錄。
如果是使用Android模擬器，在模擬器裏可以配置SDCard是否存在及大小。
此情況已過期，目前正常手機都有SDCard目錄。

#### Q8: 控制檯顯示手機應用已啓動，但手機屏幕上沒有出現？

Android手機第一次安裝基座應用時，手機端大多有各種殺毒軟件要檢測一會纔會放行，需要等一會。

#### Q9: 5+App運行後手機端一直在啓動畫面停留，不停轉圈不能進入

這是應用的js代碼的問題，啓動畫面的關閉是可配置的。參考 [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)


#### Q10: 爲什麼我電腦沒有插iphone，但HBuilder檢測到iOS設備？

iTunes支持wifi同步，如果iOS設備啓動了wifi同步，電腦端的iTunes就可以檢測到，進而HBuilder也可以檢測到。

#### Q11: 真機運行成功啓動，但手機端軟件啓動後顯示的不是正在運行的項目。

這種情況是adb連接手機成功，但copy項目文件到手機上失敗了。重新運行真機調試。
或者檢查待運行工程的目錄名文件名是不是有特殊符號或超長導致Android不識別。

#### Q12: 真機運行啓動後顯示HBuilder真機運行（log）界面 {#synchronous}

1. 重新運行真機調試嘗試解決問題
2. Android設備可能存在與手機助手衝突的情況，請關閉所有的手機助手重新運行真機調試
3. 如果步驟2無法解決，請更換別的手機助手，重新運行真機調試嘗試解決問題
4. 確認手機上HBuilder應用安裝位置，如果手機上有外置sdcard，不要把HBuilder基座App安裝在外置sdcard上，如果是安裝在外置sdcard上，卸載外置sdcard上的HBuilder基座App，並在設置中將應用的默認安裝位置不要設置爲外置的sdcard上，或者將應用轉移至手機內存或內置sdcard上，並重新運行真機調試

#### Q13: 使用genymotion模擬器真機運行，安裝apk時報INSTALL_FAILED_CPU_ABI_INCOMPATIBLE

參見[genymotion模擬器報INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解決辦法](http://blog.csdn.net/wjr2012/article/details/16359113)
其他模擬器的適配在論壇中搜索即可。

#### Q14: 如何通過wifi真機運行，不插數據線？

參考[http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)



