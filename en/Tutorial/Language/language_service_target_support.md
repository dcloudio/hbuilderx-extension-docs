# Multi-platform code hinting and syntax checking.

Since **`4.0+`**, the uni-app x project supports switching language service by different platforms, and will use the code hints and syntax checking of different platforms when compiling under different platform conditions.

> uni-app x supports compiling code to different platforms, see [details](https://uniapp.dcloud.net.cn/tutorial/platform.html).

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

## Select the target platform

### Way one

Right-click on the `uni-app x` project -> select `Syntax Hints and Checksum Platform Selection... menu item.

### Way two

Hover over the multi-platform error and select the `Syntax Hints and Verification Platform Selection...' menu item. `

Translated with www.DeepL.com/Translator (free version)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1_new.jpg)

- Select the target platform in the pop-up window

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2.jpg)

- Platform supports multiple choice

*Note: Selecting multiple platforms will cause HBuilderX to load multiple sets of language services, which will affect HBuilderX's memory consumption and running speed. If you only develop one platform, you should uncheck the other platforms.*

- All platforms enabled by default

*Tip: In the code area within the non-conditional compilation, code hints will prompt multiple platform-specific hints, and syntax checks will appear as the result of multiple platform checks.*

## Rules for the scope of language services

By default, we don't know which platform your code will be compiled to, and we treat it as a full-platform build, meaning that the language service will work on all platforms.

### Conditionally compiled code regions

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

In the scope of each conditional compilation, only platform-specific and platform-common prompts can be prompted in each area.

*Example:*

The `Android System API` and `UNI API` can be prompted for in the `APP-ANDROID` conditional compilation.

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3_new.jpg)

You can prompt for `DOM API` and `UNI API` in `WEB` conditional compilation.

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5_new.jpg)

*Note: If a platform is unchecked, there will be no code hints in the conditional compilation code area for that platform.*

### Unconditionally compiled code areas

In the non-conditionally compiled code area, code hints and syntax checks will be based on the platform selected (all is selected by default).

*Note: In the case of multi-platform validation, writing code specific to one platform may result in an error in the syntax checking of other platforms.*

*Example:*

All code hints for selecting a platform will take effect

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/6.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/7.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/8.jpg)

All syntax checks for the selected platform take effect

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/9.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/10.jpg)

## Conditional compilation support for `pages.json`

> pages.json条件编译，见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

In `pages.json`, pages written in conditional compilation are only served with the language of the platform for which the conditional compilation is intended, even if the project chooses a multi-platform language service

*Example:*

In the `pages.json` file, write xxx.uvue in the conditional compilation `WEB` block

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

Then in the xxx.uvue file, only the language services related to the `web` platform will be provided, the language services for the `Android` platform will not take effect
```vue
// xxx.uvue

<script>
    // No code hints, redirection definitions, etc. will be provided for this style of writing.
    import File from "java.io.File";

    // It's possible to prompt for dom-related api's normally.
    document.getElementById("xxx");
</script>

<style>
    ...
</style>
```
