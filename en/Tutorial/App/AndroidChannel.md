# Android Custom Channel Packages

## Cloud packaging how to set channel packages

Select project -->Publish->Mobile App - Cloud Packaging，open "Cloud Package" window.

<img src="/static/snapshots/tutorial/android_channel_1.png" style="zoom: 90%;" />

As the picture shows，

HBuilderX provides `7` channels by default (`Google`, `360`, `Xiaomi`, `Huawei`, `App Bao`, `vivo`, `oppo`), and more can be found in the `manifest.json` file [Source Code View] to configure.

| Default Channel     |  Channel ID |
| ------------ | -------- |
| GooglePlay   | google   |
| YYB       | yyb      |
| 360 Market  | 360      |
| Huawei App Store | huawei   |
| Ximi App Store | xiaomi   |
| Vivo App Store| vivo|
| Oppo App Store |  oppo  |

**When submitting App to Google Play, the channel identifier must be set to google, that is, the google channel in the packaging interface must be selected, otherwise it will not be submitted to the play store**

## How to custom channels?

The default number of channels is not enough, want more channels?
In manifest.json [source code view]， `Root node` adds `channel_list` field. 

Note that it is the root node.

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

For example：

```
{
	"channel_list":[
		{
			"id":"chuizi",
			"name":"Chuizi App Store"
		}，
               {
			"id":"meizu",
			"name":"Meizu App Store"
		}
	]
}
```
**After configuration, the custom channel will be displayed on the channels parkages, and you need to tick it on when submitting the cloud packaging to take effect.**

## Configuration of offline packaging

Download the latest SDK, and add the following content to the application node of Androidmanifest.xml in the Android project.
```
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL"  android:value="{applicationId}|{appid}|{adid}|{channel}"/>
```

android:The value value is composed of four fields, separated by the ‘|’ symbol, each field description：
- applicationId package，corresponds to the applicationId in build.gradle in the Android project
- appid application ID, corresponding to appid in 5+ or uni-app project manifest.json
- add DCloud's advertising logo, which can be obtained from dev.dcloud.net.cn after the advertisement is activated. If the advertisement is not activated, the value can be set
- channel，**Note: When submitting to Google Play, the channel ID must be set to google**

For Example：
```
<meta-data
            android:name="DCLOUD_STREAMAPP_CHANNEL"
            android:value="io.dcloud.HBuilder|HBuilder|0123456789|google" />
```

[Android platform local offline packaging channel related configuration](https://ask.dcloud.net.cn/article/508#channel)
[The relevant configuration of the local offline packaging channel on the iOS platform](https://ask.dcloud.net.cn/article/41#channel)

## Js api for obtaining channel information on mobile

[Promotion channel identification](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)

```
plus.runtime.channel 
```

Note: HBuilder 2.0 version of this API has bugs, please upgrade to the updated version.

This API is mainly used for custom statistics. If you use DCloud statistics, you don't need to write API specifically. See below for details

## How uni-app view channel data in uni statistics background

Log in to uni statistics official website [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

Click "Channel/Scene Value Analysis-Channel (app)" in the left navigation to view

<img src="/static/snapshots/tutorial/android_channel_2.png" style="zoom: 50%;" />

In reports such as retention statistics, you can also filter channels for viewing

## 5+App how to view channel data in DCloud statistics backend

If your App is not uni-app, but 5+ or wap2app. Then uni statistics cannot be used. You can log in [DCloud Developer Center](http://dev.dcloud.net.cn) to view 。

The homepage will display a list of all applications that have been created. Click the name of the application to view the "Daily Activity Trend" of the application.

<img src="/static/snapshots/tutorial/android_channel_3.png" style="zoom: 60%;" />


or applications that contain channel information, select the channel in the upper left corner to view the operating statistics of the corresponding channel.

<img src="/static/snapshots/tutorial/android_channel_4.png" style="zoom: 60%;" />

**Tips：**

- 5+App’s basic statistics, the data of the day will only show the statistical results the next day.Only when users have used and collected valid data can they be distinguished by corresponding channels.
- Only when users have used and collected valid data can they be distinguished by corresponding channels.
- Currently, one channel is required for packaging, and cloud packaging is temporarily unable to package multiple channels in batches.
- The channel tag in this article deals with the DCloud statistics background. If you use Youmeng statistics, you need to configure it separately in the sdk configuration of Youmeng.
