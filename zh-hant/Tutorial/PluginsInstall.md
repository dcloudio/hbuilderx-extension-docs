# 插件安裝@install

<!--
keyword: 安裝插件,插件安裝,install
-->

## 安裝插件@install
HBuilderX啓動後，點擊菜單【工具】【插件安裝】，即可打開插件安裝窗口。

除下圖所示插件外，其它插件，需要到[插件市場](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)進行下載。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 已安裝插件@installed

如下圖，HBuilderX已安裝的插件，會顯示在【已安裝插件】中。

當服務器存在高版本插件時，相應插件會顯示`升級`字樣。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_2.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 插件市場安裝插件@market

如下圖所示，在[插件市場](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)，進入插件詳情頁，點擊【導入插件】，會自動拉起本地安裝的HBuilderX。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 離線安裝插件@OfflineInstall

> `nodejs`插件，如果插件內，沒有`node_modules`，需要手動執行`npm install`

#### windows

1. 打開資源管理器，進入HBuilderX安裝目錄
2. 進入`plugins`目錄
3. 將插件文件夾, 放置到此目錄。（如是zip包，解壓即可）
4. 重啓HBuilderX編輯器

#### Mac

1. 打開系統終端，輸入如下命令，打開HBuilderX插件目錄 （注意：mac上，正式版和alpha目錄不一樣）
2. 將插件文件夾, 如是zip包，解壓即可），放置到`plugins`目錄下
3. 重啓HBuilderX編輯器

```shell
# 正式版
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

# Alpha版
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

## 插件安裝失敗問題彙總@install-Fail

最近，小部分用戶遇到`插件安裝`失敗的問題，如下:

<img src="/static/snapshots/tutorial/plugins_install/plugin_install_fail.png" class="hd-img" />

插件安裝失敗時，點擊頂部菜單【幫助】【查看運行日誌】，即可看到相關錯誤，根據相關錯誤解決問題。

備註：HBuilderX插件在服務器都是zip包，先下載到本地update目錄，下載成功後，會自動解壓拷貝到HBuilderX.exe 同級`plugins`目錄下。

### Q1: 網絡問題導致插件下載失敗

- 可能您所在的城市，所用寬帶，訪問HBuilderX更新服務器失敗。
- 電腦開了全局代理，無法連接HBuilderX更新服務器。
- 打開操作系統命令行工具，輸入`ping update.liuyingyong.cn`，檢查網路是否暢通。
- 電腦換個其它網絡試試，比如連接手機4G/5G熱點

### Q2: move fail

在日誌中，您可能會看到如下日誌:

```
[info] try move "xxxxx" to "xxxx"
[info] move result: false
```

在HBuilderX 3.5.2-alpha+版本，您可能會看到如下彈窗：

<img src="/static/snapshots/tutorial/plugins_install/plugin-install-fail-message-box.jpg" class="hd-img" />

這些信息代表，插件下載後，拷貝到指定目錄失敗了。

解決方法：
- 嘗試重新安裝此插件
- windows電腦：關閉HBuilderX，HBuilderX.exe右鍵菜單【以管理員身份運行】
- 進入HBuilderX安裝目錄，在update/plugins目錄下，找到插件zip包，手動將zip包解壓到HBuilderX.exe 同級`plugins`目錄下。

### 03: 本地目錄權限問題

HBuilderX 插件解壓移動到指定目錄，需要權限，如果沒有權限，插件就會下載、或移動失敗。

### Q4: 解壓失敗

在日誌中，您可能會看到如下日誌:
```
[info] Unpack plugin "xxxx"
[info] unzip "xxxx" failed
```
這些信息代表，插件下載後，解壓失敗了。

可能的原因：
- 解壓到指定目錄時，沒有權限。
- zip包被加密，需要解密後才能解壓。某些公司對從網絡下載的帶有可執行程序的zip包，自動加密了。遇到此種文件，請先解密，然後手動將zip解壓到plugins目錄下。

### Q5: 磁盤空間不夠

HBuilderX所在的磁盤，空間不夠，導致插件安裝失敗。遇到此種情況，請檢查磁盤。

### Q6: MD5值校驗不通過

HBuilderX會校驗下載的zip插件的md5值，只有md5值一致時，纔會安裝。防止插件被篡改。

如果遇到md5值問題，請聯繫HBuilderX官方人員。

## 插件安裝成功，運行項目提示插件未安裝@installFail

某些node插件，比如`sass`、`less`, 安裝成功，項目運行時，卻提示安裝失敗。

通常可能出現問題的插件：`compile-node-sass`、`compile-dart-sass`、`compile-less`

可能的原因：node_modules安裝失敗了。進入插件目錄，手動執行`npm install --save`
