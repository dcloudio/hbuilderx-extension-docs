# 格式化

<!--
keyword:代码格式化,format
-->

> 很多人编写程序时不注意程序的版式结构，这样做虽然不会影响程序的功能，但是程序的可读性会大大降低。格式化操作，让代码按照特定的风格缩进或分开，使程序更加清晰易懂

在打开的文件上，右键菜单，点击【重排代码格式】，即可对当前文件进行格式化操作。

HBuilderX，格式化快捷键, win：`ctrl + K`； mac: `command + K`


### 格式化插件

> HBuilderX ，官方维护的格式化插件如下，当然，您也可以自行开发格式化插件。

| 插件名称         | 对应插件配置中的名称    | 是否内置         | 可格式化的文件                             |  插件市场 | 插件教程 |
| ---------------- | ----------------------- | ---------------- | ------------------------------------------ |-------------|-------------|
| js-beautify      | format                  | 内置插件        | vue、html、js、css、json                   |   | |
| prettier         | format-prettier         | 非内置，需要下载 | less、sass、vue、stylus(vue内嵌)、ts、yaml | [下载地址](https://ext.dcloud.net.cn/plugin?id=2025)| [文档](/Tutorial/extension/prettier) |
| stylus-supremacy | format-stylus-supremacy | 非内置，需要下载 | 格式化单独stylus文件                       | [下载地址](https://ext.dcloud.net.cn/plugin?id=2039) |  [文档](https://ext.dcloud.net.cn/plugin?id=2039) |

**特别说明：**

1. 当同时存在`js-beautify`和`format-prettier`插件是，格式化`vue`文件，调用的是`format-prettier`插件
2. `stylus-supremacy`只支持格式化独立的stylus文件，如需格式化vue文件内的stylus代码，需要同时安装prettier插件
3. 本地插件目录：HBuilderX所有的插件，都存放于本地`plugins`目录下

### 格式化插件配置

点击菜单【工具】【设置 -> 插件配置】，选择相应插件, 点击`配置文件`进行配置。

<img src="/static/snapshots/tutorial/format/format.png" />

| 插件配置中格式化插件		| 配置文件											| 插件官网															|
| -----------------------	| ------------------------------------------------	| ---------------													|
| format(即js-beautify)		| jsbeautifyrc.js									| [官网](https://github.com/beautify-web/js-beautify)				|
| format-prettier			| prettier.config.js								| [官网](https://prettier.io/docs/en/options.html)					|
| format-stylus-supremacy	| supremacy.config.js								| [官网](https://thisismanta.github.io/stylus-supremacy/#options)	|


### 格式化风格

格式化时， 使用的缩进方式，是读取的菜单【工具 --> 设置】中的配置

<img src="/static/snapshots/tutorial/format/indent.png" />

**特别说明：**
`editorconfig`配置会覆盖HBuilderX编辑器配置；当项目下存在`.editorconfig`文件时，格式化时，读取的是此配置文件。

[.editorconfig使用说明文档](/Tutorial/UserGuide/editorconfig)


### 自定义格式化快捷键

自定义格式化快捷键： 点击菜单【工具】【自定义快捷键】，在【用户设置】中，拷贝如下代码， `key`为您要定义的快捷键

```json
{"key":"ctrl+k","command":"editor.action.format"}
```

### 保存文件时，自动格式化

部分小伙伴反馈， 如何实现保存文件时，自动格式化？  答： 不支持。

1. 普通web项目`不支持`保存文件的同时，自动格式化。
2. vue-cli项目，可通过配置`eslint`，通过`eslint自动校验修复`的功能，来实现相同的效果。

例如：保存时，去除分号等。
