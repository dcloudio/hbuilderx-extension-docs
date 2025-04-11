# 多平臺代碼提示和語法校驗

自 **`4.0+`** 版本起，uni-app x 項目支持按不同平臺切換語言服務，在不同平臺條件編譯下，將會使用各自平臺的代碼提示和語法校驗

> uni-app x支持將代碼編譯到不同平臺, 見[詳情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

## 支持的平臺

- APP-ANDROID

- APP-IOS

- APP-APP-HARMONY

- WEB

- MP-WEIXIN

## 支持的文件類型

- ts

- uts

- vue

- uvue

- css

- pages.json

## 選擇目標平臺

### 方式一

在 `uni-app x` 項目上右鍵菜單 -> 選擇`語法提示和校驗平臺選擇...`菜單項

### 方式二

懸浮到多平臺的錯誤上，選擇`語法提示和校驗平臺選擇...`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1_new.jpg)

### 方式三

點擊狀態列提示訊息

![](https://web-ext-storage.dcloud.net.cn/hx/language_service_status_bar_message.png)

- 在彈出的窗口中選擇目標平臺

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_controler.png)

- 平臺支持多選

*註意：選擇多個平臺，會導致HBuilderX加載多套語言服務，影響HBuilderX的內存占用和運行速度。如果只開發一個平臺，應去掉其他平臺的勾選。*

- 默認開啟平臺：APP-ANDROID


## 語言服務生效範圍的規則

默認情況下，我們不知道您的代碼將要編譯到哪個平臺，我們視做全平臺編譯，也就是所有平臺的語言服務都會生效

### 條件編譯代碼區域

```js
// #ifdef APP-ANDROID
...
// #endif
```

```js
// #ifdef WEB
...
// #endif
```

在上述各條件編譯的作用域中，各區域內只能提示各條件編譯對應平臺的專有提示項和各平臺通用的提示項

*例如：*

在 `APP-ANDROID` 條件編譯中可以提示`Android系統API`和`UNI API`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3_new.jpg)

在 `WEB` 條件編譯中可以提示`DOM API`和`UNI API`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5_new.jpg)

*註意：如果取消了某平臺的勾選，在此平臺對應的條件編譯代碼區域中將沒有任何代碼提示*

### 非條件編譯代碼區域

在非條件編譯代碼區域裏，代碼提示、語法校驗則會以選擇的平臺為準（默認選擇：APP-ANDROID）

## `pages.json`的條件編譯支持

> pages.json條件編譯，見[詳情](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

在`pages.json`中，寫在條件編譯中的頁面，僅為其提供條件編譯對應平臺的語言服務

*例如：*

在`pages.json`文件中，將xxx.uvue寫在條件編譯`WEB`塊中

```json
// pages.json

{
    "pages":[
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app x"
			}
		}
        // #ifdef WEB
        ,
        {
            "path": "pages/xxx/xxx",
            "style": {
            	"navigationBarTitleText": "uni-app x"
            }
        }
        // #endif
    ]
}
```

那麼在xxx.uvue文件中，將只會提供`WEB`平臺相關的語言服務，其它平臺的語言服務則不會生效，如果項目沒有勾選`WEB`平臺，則整個文件將沒有語言服務
```vue
// xxx.uvue

<script>
    // 不會提供此寫法的代碼提示、轉到定義等
    import File from "java.io.File";

    // 可以正常提示dom相關的api
    document.getElementById("xxx");
</script>

<style>
    ...
</style>
```

## 條件編譯代碼塊置灰

自 **`4.61+`** 版本起，條件編譯代碼非活動代碼塊支援置灰顯示

當選擇的平台與條件編譯代碼塊不匹配時，條件編譯代碼塊會以灰色顯示，提示用戶當前位置不可用

例如：

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_graying_and_tip_example_1.png" />

*注意：*

當一個頁面在`pages.json`中指定了條件編譯平台時，如果選擇的平台沒有包含此頁面指定的平台，此頁面整個文件將被置灰，並彈窗提醒

例如：`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_conditional_compilation_example.png)

<span style="color:green;">⬇︎⬇︎⬇︎</span>

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_graying_example.png" />