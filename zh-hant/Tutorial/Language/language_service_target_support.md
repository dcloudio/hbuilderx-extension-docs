# 多平臺代碼提示和語法校驗

自 **`4.0+`** 版本起，uni-app x 項目支持按不同平臺切換語言服務，在不同平臺條件編譯下，將會使用各自平臺的代碼提示和語法校驗

> uni-app x支持將代碼編譯到不同平臺, 見[詳情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

*例如：*

**代碼提示**

```typescript
// xxx.uts

// #ifdef APP-ANDROID
// 在 android 平臺的條件編譯塊下，可以提示平臺下特有包名
import File from "java.io.File";
// #endif


// #ifdef WEB
// 在 web 平臺的條件編譯塊下，可以使用 dom api
document.getElementById("xxx");
// #endif

```

**語法校驗**

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4.jpg)

## 支持的平臺

- APP-ANDROID

- WEB

## 支持的文件類型

- ts

- uts

- vue

- uvue

- css

- pages.json

## 選擇目標平臺

**方式一**

在 `uni-app x` 項目上右鍵菜單 -> 選擇`語法提示和校驗平臺選擇...`菜單項

**方式二**

懸浮到多平臺的錯誤上，選擇`語法提示和校驗平臺選擇...`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5.jpg)

- 在彈出的窗口中選擇目標平臺

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2.jpg)

- 平臺支持多選

*註意：選擇多個平臺可能會導致語言服務性能下降*
