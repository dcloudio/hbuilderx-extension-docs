# cli 打包

> HBuilderX cli命令行工具, 僅適用於HBuilderX 3.1.5+版本

### 前言

1. 首先, 需要啓動HBuilderX. (進入HBuilderX安裝目錄根目錄, 終端輸入`cli.exe open`)
2. 編輯App打包配置文件(json文件), [App打包配置文件](/cli/README?id=cli打包配置文件)
3. cli運行, 終端輸入
```shell
cli pack --config 配置文件
```
4. 打包過程中如果有錯誤會給出相應的錯誤信息並中斷操作，打包成功後傳統打包會輸出打包成功的下載地址，安心打包會輸出打包成功後的路徑。
5. cli打包命令行輸出
```
localhost:MacOS hx$ ./cli pack --config /Users/hx/Documents/HBuilderProjects/測試項目/pca/configure.json
16:42:37.575 檢查雲端打包狀態...
16:42:38.016 檢查打包資源...
16:42:38.689 正在編譯打包資源...
16:42:43.570 壓縮打包資源...
16:42:43.678 向雲端發送打包請求...
16:42:45.518 項目 pca [__UNI__EB87FB4]的打包狀態：時間: 2021-03-08 16:42:45    類型: iOS Appstore    		隊列中    當前應用 IDFA 已經開啓，在提交 AppStore 審覈時需要在後臺開啓 IDFA，[詳細操作查看](https://ask.dcloud.net.cn/article/36107)時間: 2021-03-08 16:42:45    類型: Android自有證書    	隊列中    
打包成功後會自動返回下載鏈接。打包過程查詢請點菜單發行-查看雲打包狀態。週五傍晚等高峯期打包排隊較長，請耐心等待。如果是爲了三方SDK調試，請使用自定義調試基座（菜單運行-手機或模擬器-製作自定義調試基座），不要反覆打包。
16:42:45.529 項目 pca [__UNI__EB87FB4]的打包狀態：時間: 2021-03-08 16:42:45    類型: iOS Appstore    隊列中    當前應用 IDFA 已經開啓，在提交 AppStore 審覈時需要在後臺開啓 IDFA，[詳細操作查看](https://ask.dcloud.net.cn/article/36107)
16:43:42.881 項目 pca [__UNI__EB87FB4]打包成功：
    類型: Android自有證書 下載地址: https://service.dcloud.net.cn/build/download/40dc5910-7fea-11eb-b149-2bda895b13a3 （注意該地址爲臨時下載地址，只能下載5次）
16:43:48.232 項目 pca [__UNI__EB87FB4]的打包狀態：時間: 2021-03-08 16:42:45    類型: iOS Appstore    正在雲端打包    當前應用 IDFA 已經開啓，在提交 AppStore 審覈時需要在後臺開啓 IDFA，[詳細操作查看](https://ask.dcloud.net.cn/article/36107)
16:44:46.579 項目 pca [__UNI__EB87FB4]打包成功：
    類型: iOS Appstore 下載地址: https://service.dcloud.net.cn/build/download/40c60580-7fea-11eb-af55-b9c5ccd8a1ee （注意該地址爲臨時下載地址，只能下載5次）當前應用 IDFA 已經開啓，在提交 AppStore 審覈時需要在後臺開啓 IDFA，[詳細操作查看](https://ask.dcloud.net.cn/article/36107)
```

### 打包配置文件

配置文件格式爲json,將下面內容保存在文件json文件，編碼爲utf-8，根據說明配置所需參數

```json
{
    //項目名字或項目絕對路徑
    "project": "test-pack",
    //打包平臺 默認值android  值有"android","ios" 如果要打多個逗號隔開打包平臺
    "platform":"ios,android",
    //是否使用自定義基座 默認值false  true自定義基座 false自定義證書
    "iscustom": false,
    //打包方式是否爲安心打包默認值false,true安心打包,false傳統打包
    "safemode": false,
    //android打包參數
    "android": {
      //安卓包名
      "packagename":"com.test.android",
      //安卓打包類型 默認值0 0 使用自有證書 1 使用公共證書 2 使用老版證書
      "androidpacktype":"1",
      //安卓使用自有證書自有打包證書參數
      //安卓打包證書別名,自有證書打包填寫的參數
      "certalias":"",
      //安卓打包證書文件路徑,自有證書打包填寫的參數
      "certfile":"",
      //安卓打包證書密碼,自有證書打包填寫的參數
      "certpassword":"",
      //安卓平臺要打的渠道包 取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多個逗號隔開
      "channels":""
      },
    //ios打包參數
    "ios": {
       //ios appid
       "bundle":"com.test.ios",
       //ios打包支持的設備類型 默認值iPhone 值有"iPhone","iPad" 如果要打多個逗號隔開打包平臺
       "supporteddevice":"iPhone,iPad",
       //iOS打包是否打越獄包,只有值爲true時打越獄包,false打正式包
       "isprisonbreak":true,
       //iOS使用自定義證書打包的profile文件路徑
       "profile":"",
       //iOS使用自定義證書打包的p12文件路徑
       "certfile":"",
       //iOS使用自定義證書打包的證書密碼
       "certpassword":"123"
     },
    //是否混淆 true混淆 false關閉
    "isconfusion":false,
    //開屏廣告 true打開 false關閉
    "splashads":false,
    //懸浮紅包廣告true打開 false關閉
    "rpads":false,
    //push廣告 true打開 false關閉
    "pushads":false,
    //加入換量聯盟 true加入 false不加入
    "exchange":false
}
```

### cli pack 參數

> 以下參數選項, 均爲`cli pack`的選項.

|參數名稱	    |描述	    |
|--			|--			|
|--help	|打包命令幫助		|
|--config	|配置文件絕對路徑，配置文件配置，參考[配置文件](/cli/README?id=cli打包配置文件)	|
|--project	|HBuilder X裏導入的項目名或絕對路徑		|
|--platform	|配打包平臺,默認值android,取值有"android","ios"如果要打多個逗號隔開		|
|--iscustom	|是否使用自定義基座 默認值false, true自定義基座 false自定義證書		|
|--safemode	|打包方式是否爲安心打包,默認值false,true安心打包,false傳統打包		|
|--isconfusion	|配置文件絕對路徑，配置文件配置，參考configure.json		|
|--isconfusion  | 是否對配置的js/nvue文件進行原生混淆，true打開 false關閉|
|--splashads	|開屏廣告,默認值false, true打開 false關閉		|
|--rpads	|懸浮紅包廣告,默認值false, true打開 false關閉		|
|--pushads	|push廣告,默認值false, true打開 false關閉		|
|--exchange	|加入換量聯盟,默認值false, true加入 false不加入		|
|--android.packagename	|安卓包名，打安卓包填寫		|
|--android.androidpacktype	|安卓打包類型 默認值0,0 使用自有證書 1 使用公共證書 2 使用DCloud老版證書	|
|--android.certalias	|安卓打包證書別名,自有證書打包填寫的參數		|
|--android.certfile	|安卓打包證書文件路徑,自有證書打包填寫的參數		|
|--android.certpassword	|安卓打包證書密碼,自有證書打包填寫的參數		|
|--android.channels	|安卓平臺要打的渠道包,取值有"google","yyb","360","huawei","xiaomi","oppo","vivo"，如果要打多個逗號隔開		|
|--ios.bundle	|iOS appid 打ios包填寫		|
|--ios.supporteddevice	|iOS打包支持的設備類型,默認值iPhone 值有"iPhone","iPad" 如果要打多個逗號隔開打包平臺		|
|--ios.isprisonbreak	|iOS打包是否打越獄包,true打越獄包,false正式包		|
|--ios.profile	|iOS使用自定義證書打包的profile文件路徑		|
|--ios.certfile	|iOS使用自定義證書打包的p12文件路徑		|
|--ios.certpassword 	|iOS使用自定義證書打包的證書密碼		|

> 注 如果配置文件與配置參數都配置了相同參數，以命令行參數爲準

### 命令行傳參示例

**示例**

```shell

# android打包： 項目名稱（apps）、傳統打包、包名（io.test)、打包證書（自有證書、別名：testalias、密碼123456）
cli pack --project apps --platform android --safemode false --android.packagename io.test --android.androidpacktype 0 --android.certalias testalias --android.certfile /Users/hx/Desktop/cert/jdk13/test.key --android.certpassword 123456

# ios打包
cli pack --project <projectname> --platform iOS --safemode false --iscustom true --ios.bundle <bundle> --ios.supporteddevice iPhone,iPad --ios.isprisonbreak false --ios.profile <profile> --ios.certfile <p12 file> --ios.certpassword <passwd>
```