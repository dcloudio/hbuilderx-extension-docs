# Multi-platform code completion and syntax checking

Since version **`4.0+`**, uni-app x projects support switching language services based on different platforms. When compiling under different platform conditions, the code completion and syntax checking of the respective platforms will be used.

> uni-app x supports compiling code to different platforms, see [details](https://en.uniapp.dcloud.io/tutorial/platform.html)

*For example:*

**Code completion**

```typescript
// xxx.uts

// #ifdef APP-ANDROID
// The platform-specific package name can be suggested in the Android platform conditional compilation block.
import File from "java.io.File";
// #endif


// #ifdef WEB
// The DOM API can be used in the Web platform conditional compilation block.
document.getElementById("xxx");
// #endif

```

**Syntax checking**

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4.jpg)

## Supported platforms

- APP-ANDROID

- WEB

## Supported file types

- ts

- uts

- vue

- uvue

- css

- pages.json

## Choosing the target platform

**Method 1**

Right-click on the `uni-app x` project -> select the `Syntax Completion and Type Check Seletion...` menu item.

**Method 2**

Hover over a multi-platform error and select`语法提示和校验平台选择...`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5.jpg)

- Select the target platform in the pop-up window

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2.jpg)

- Platforms support multiple selections

*NOTE：Selecting multiple platforms may cause a decrease in language service performance*
