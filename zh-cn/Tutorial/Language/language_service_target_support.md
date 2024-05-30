# 多平台代码提示和语法校验

自 **`4.0+`** 版本起，uni-app x 项目支持按不同平台切换语言服务，在不同平台条件编译下，将会使用各自平台的代码提示和语法校验

> uni-app x支持将代码编译到不同平台, 见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

## 支持的平台

- APP-ANDROID

- APP-IOS

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

![](https://web-ext-storage.dcloud.net.cn/hx/systax_1.jpg)

- 平台仅支持单选

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
