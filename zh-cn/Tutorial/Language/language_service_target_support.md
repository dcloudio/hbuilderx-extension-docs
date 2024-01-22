# 多平台代码提示和语法校验

自 **`4.0+`** 版本起，uni-app x 项目支持按不同平台切换语言服务，在不同平台条件编译下，将会使用各自平台的代码提示和语法校验

> uni-app x支持将代码编译到不同平台, 见[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)

*例如：*

**代码提示**

```typescript
// xxx.uts

// #ifdef APP-ANDROID
// 在 android 平台的条件编译块下，可以提示平台下特有包名
import File from "java.io.File";
// #endif


// #ifdef WEB
// 在 web 平台的条件编译块下，可以使用 dom api
document.getElementById("xxx");
// #endif

```

**语法校验**

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/1.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/3.jpg)

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/4.jpg)

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

**方式一**

在 `uni-app x` 项目上右键菜单 -> 选择`语法提示和校验平台选择...`菜单项

**方式二**

悬浮到多平台的错误上，选择`语法提示和校验平台选择...`

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/5.jpg)

- 在弹出的窗口中选择目标平台

![](https://web-ext-storage.dcloud.net.cn/hx/language-service-target-support/2.jpg)

- 平台支持多选

*注意：选择多个平台可能会导致语言服务性能下降*
