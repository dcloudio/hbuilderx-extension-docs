# Android 自定義渠道包

## 雲打包如何打渠道包

選中項目 -->菜單發行-原生App-雲打包，進入打包窗口。

<img src="/static/snapshots/tutorial/android_channel_1.png" style="zoom: 90%;" />

如上圖所示，

HBuilderX默認提供 `7`  個渠道（`Google`、`360`、`小米`、`華爲`、`應用寶`、`vivo`、`oppo`），更多可以在`manifest.json`文件中【源碼視圖】進行配置。

| 默認渠道     | 渠道標識ID |
| ------------ | -------- |
| GooglePlay   | google   |
| 應用寶       | yyb      |
| 360應用市場  | 360      |
| 華爲應用商店 | huawei   |
| 小米應用商店 | xiaomi   |
| vivo應用商店 | vivo|
| oppo應用商店 |  oppo  |

**注意：提交谷歌應用市場（Google Play）時一定要將渠道標識設置爲google，即一定要選擇打包界面裏的google渠道，否則會無法提交到play store**

## 如何自定義渠道？

默認的渠道數量不夠使，想要更多渠道？
在manifest.json【源碼視圖】中， `根節點`增加`channel_list`字段. 

注意是根節點

```
{
	"channel_list":[
		{
			"id":"",
			"name":""
		}
	]
}
```

比如：

```
{
	"channel_list":[
		{
			"id":"chuizi",
			"name":"錘子應用市場"
		}，
               {
			"id":"meizu",
			"name":"魅族應用市場"
		}
	]
}
```
**配置後會在上面的雲端打包界面顯示自定義j渠道，提交雲端打包時需要勾選才能生效**

## 離線打包的配置方法

下載最新的sdk，在Android項目的Androidmanifest.xml中的application節點下添加如下內容
```
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL"  android:value="{applicationId}|{appid}|{adid}|{channel}"/>
```

android:value值由四個字段組成，使用‘|’符號分割，各字段說明：
- applicationId 包名，對應Android項目中build.gradle中的applicationId
- appid 應用標識，對應5+或uni-app項目manifest.json中appid
- adid DCloud的廣告標識，開通廣告後可在dev.dcloud.net.cn獲取，如果沒有開通廣告，設置值爲即可
- channel 渠道標識，**注意：提交谷歌應用市場（Google Play）時一定要將渠道標識設置爲google**

例如：
```
<meta-data
            android:name="DCLOUD_STREAMAPP_CHANNEL"
            android:value="io.dcloud.HBuilder|HBuilder|0123456789|google" />
```

[Android平臺本地離線打包渠道相關配置](https://ask.dcloud.net.cn/article/508#channel)
[iOS平臺本地離線打包渠道相關配置](https://ask.dcloud.net.cn/article/41#channel)

## 手機端獲取渠道信息的js api

[推廣渠道標識](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)

```
plus.runtime.channel 
```

注意：HBuilder 2.0版本此API有bug，請升級到更新版

這個API主要用於自定義統計，如果是使用DCloud的統計，無需專門寫API。具體見下。

## uni-app如何在uni統計後臺查看渠道數據

登錄uni統計官網[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

在左側導航點擊“渠道/場景值分析 - 渠道（app）”，即可查看。

<img src="/static/snapshots/tutorial/android_channel_2.png" style="zoom: 50%;" />

在留存統計等報表中，也可以篩選渠道查看。

## 5+App如何在DCloud統計後臺查看渠道數據

如果你的App不是uni-app，而是5+或wap2app。那麼無法使用uni統計。此時可登錄[DCloud開發者中心](http://dev.dcloud.net.cn)查看應用的基本統計數據。

首頁會展示所有已創建的應用列表，點擊應用名稱可以查看該應用的『日活趨勢』。

<img src="/static/snapshots/tutorial/android_channel_3.png" style="zoom: 60%;" />


包含渠道信息的應用，左上角選擇渠道，即可查看對應渠道的運營統計數據。

<img src="/static/snapshots/tutorial/android_channel_4.png" style="zoom: 60%;" />

**Tips：**

- 5+App的基本統計，當日的數據，次日纔會出統計結果。
- 有用戶使用且統計到有效數據，纔可以按相應的渠道區分。
- 目前需要一個渠道一個渠道打包，雲打包暫時無法批量打多個渠道包出來。
- 本文的渠道標記處理的是DCloud統計後臺，如使用友盟統計，需要在友盟的sdk配置裏單獨配