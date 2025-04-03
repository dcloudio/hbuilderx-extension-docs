# 多平台代码提示和语法校验

自 **`4.0+`** 版本起，uni-app x 项目支持按不同平台切换语言服务，在不同平台条件编译下，将会使用各自平台的代码提示和语法校验

> uni-app x支持将代码编译到不同平台, 见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

## 支持的平台

- APP-ANDROID

- APP-IOS

- APP-APP-HARMONY

- WEB

- MP-WEIXIN

## 支持的文件类型

- ts

- uts

- vue

- uvue

- css

- pages.json

## 选择目标平台

### 方式一

在 `uni-app x` 项目上右键菜单 -> 选择`语法提示和校验平台选择...`菜单项

### 方式二

悬浮到多平台的错误上，选择`语法提示和校验平台选择...`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1_new.jpg)

### 方式三

点击状态栏提示信息

![](https://web-ext-storage.dcloud.net.cn/hx/language_service_status_bar_message.png)

- 在弹出的窗口中选择目标平台

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_controler.png)

- 平台支持多选

*注意：选择多个平台，会导致HBuilderX加载多套语言服务，影响HBuilderX的内存占用和运行速度。如果只开发一个平台，应去掉其他平台的勾选。*

- 默认开启平台：APP-ANDROID


## 语言服务生效范围的规则

### 条件编译代码区域

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

在上述各条件编译的作用域中，各区域内只能提示各条件编译对应平台的专有提示项和各平台通用的提示项

*例如：*

在 `APP-ANDROID` 条件编译中可以提示`Android系统API`和`UNI API`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3_new.jpg)

在 `WEB` 条件编译中可以提示`DOM API`和`UNI API`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4_new.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5_new.jpg)

*注意：如果取消了某平台的勾选，在此平台对应的条件编译代码区域中将没有任何代码提示*

### 非条件编译代码区域

在非条件编译代码区域里，代码提示、语法校验则会以选择的平台为准（默认选择：APP-ANDROID）

## `pages.json`的条件编译支持

> pages.json条件编译，见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

在`pages.json`中，写在条件编译中的页面，仅为其提供条件编译对应平台的语言服务

*例如：*

在`pages.json`文件中，将xxx.uvue写在条件编译`WEB`块中

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

那么在xxx.uvue文件中，将只会提供`WEB`平台相关的语言服务，其它平台的语言服务则不会生效，如果项目没有勾选`WEB`平台，则整个文件将没有语言服务
```vue
// xxx.uvue

<script>
    // 不会提供此写法的代码提示、转到定义等
    import File from "java.io.File";

    // 可以正常提示dom相关的api
    document.getElementById("xxx");
</script>

<style>
    ...
</style>
```

## 条件编译代码块置灰

自 **`4.61+`** 版本起，条件编译代码非活动代码块支持置灰显示

当选择的平台与条件编译代码块不匹配时，条件编译代码块会以灰色显示，提示用户当前位置不可用

例如：

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/target_graying_example_3.png" />

*注意：*

当一个页面在`pages.json`中指定了条件编译平台时，如果选择的平台没有包含此页面指定的平台，此页面整个文件将被置灰，并弹窗提醒

例如：

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_conditional_compilation_example.png)

<span style="color:green;">⬇︎⬇︎⬇︎</span>

<img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/pages_json_graying_example.png" />