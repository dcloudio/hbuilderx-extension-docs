# 多平台代码提示和语法校验

自 **`4.0+`** 版本起，uni-app x 项目支持按不同平台切换语言服务，在不同平台条件编译下，将会使用各自平台的代码提示和语法校验

> uni-app x支持将代码编译到不同平台, 见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

## 支持的平台

- APP-ANDROID

- WEB

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

- 在弹出的窗口中选择目标平台

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2.jpg)

- 平台支持多选

*注意：选择多个平台，会导致HBuilderX加载多套语言服务，影响HBuilderX的内存占用和运行速度。如果只开发一个平台，应去掉其他平台的勾选。*

- 默认开启全平台

*提示：在非条件编译内的代码区域，代码提示会提示出多个平台专用提示，语法校验会出现多个平台校验的结果*

## 语言服务生效范围的规则

默认情况下，我们不知道您的代码将要编译到哪个平台，我们视做全平台编译，也就是所有平台的语言服务都会生效

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

在非条件编译代码区域里，代码提示、语法校验则会以选择的平台为准（默认选择全部）

*注意：在多平台生效的情况下，写某一平台特定的代码，其它平台的语法校验可能会报错*

*例如：*

所有选择平台的代码提示都会生效

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/6.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/7.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/8.jpg)

所有选择平台的语法校验都会生效

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/9.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/10.jpg)

## `pages.json`的条件编译支持

> pages.json条件编译，见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

在`pages.json`中，写在条件编译中的页面，仅为其提供条件编译对应平台的语言服务，即使该项目选择了多平台的语言服务

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

那么在xxx.uvue文件中，将只会提供`web`平台相关的语言服务，`Android`平台的语言服务则不会生效
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
