# Multi-platform code hinting and syntax checking.

Since **`4.0+`**, the uni-app x project supports switching language service by different platforms, and will use the code hints and syntax checking of different platforms when compiling under different platform conditions.

> uni-app x supports compiling code to different platforms, see [details](https://uniapp.dcloud.net.cn/tutorial/platform.html).

## Supported platforms

- APP-ANDROID

- APP-IOS

- APP-APP-HARMONY

- WEB

- MP-WEIXIN

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

### Way three

Click the status bar notification

![](https://web-ext-storage.dcloud.net.cn/hx/language_service_status_bar_message.png)

- Select the target platform in the pop-up window

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_controler.png)

- Platform supports multiple choice

*Note: Selecting multiple platforms will cause HBuilderX to load multiple sets of language services, which will affect HBuilderX's memory consumption and running speed. If you only develop one platform, you should uncheck the other platforms.*

- `APP-ANDROID` platforms enabled by default


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

In the non-conditionally compiled code area, code hints and syntax checks will be based on the platform selected.

## Conditional compilation support for `pages.json`

> pages.json条件编译，见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

In `pages.json`, pages written in conditional compilation are only served with the language of the platform for which the conditional compilation is intended

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

Then in the xxx.uvue file, only the language services related to the 'WEB' platform will be provided, and the language services of other platforms will not take effect. If the project does not check the 'WEB' platform, the entire file will have no language services
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

## Graying out of conditionally compiled code blocks

Since **`4.61+`**, conditionally compiled inactive code blocks support graying display.

When the selected platform does not match the conditionally compiled code block, the code block will be grayed out to indicate that the current location is unavailable.

Example:

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_graying_and_tip_example_1.png" />

*Note:*

When a page specifies a conditionally compiled platform in `pages.json`, if the selected platform does not include the platform specified for this page, the entire file will be grayed out with a pop-up reminder.

Example:

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_conditional_compilation_example.png)

<span style="color:green;">⬇︎⬇︎⬇︎</span>

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_graying_example.png" />