# Vue支持

HBuilderX中使用vue，如果是打开vue文件，会自动挂载vue语法库。
如果是HTML文件里引用vue框架，需要点右下角的语法提示库，选择vue语法库。
我们更推荐开发者使用vue单文件规范，直接打开vue文件。

> 注意：如果文件不在项目下，而是单独的文件，无法挂载语法库，请在左侧项目管理器建个项目，打开项目里的文件进行体验。

## Vue3 支持
HBuilderX从v3.2.5(包含)开始优化了对vue3的支持，详见[Vue3支持](/Tutorial/Language/vue-next.md)

## 语法高亮

除了vue的普通语法高亮支持，HBuilderX还支持各种表达式语法，以及script和style支持的其他语言如less、scss、stylus、typescript等高亮，无需安装插件。


## 代码提示

### API提示及帮助

提示不止是要全，而且要准。不能把所有词都猜一遍列出来，该有什么就有什么，清晰可信赖。
既要写的快，又要写不错。

除了完善的提示，在代码助手右侧还能看到清晰的帮助描述，对api进行说明，还有vue官网的api链接，点击即可直达vue官网指定页面。非常适合学习参考。

<img src="/static/snapshots/vue/1.png" style="zoom: 80%;border: 1px solid #eee;" />

### this的精准识别

<img src="/static/snapshots/vue/this.png" style="zoom: 70%;border: 1px solid #eee;" />

### 语法提示

<img src="/static/snapshots/vue/hint_1.png" style="zoom: 60%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/hint_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### 指令提示

<img src="/static/snapshots/vue/hint_3.png" style="zoom: 80%;border: 1px solid #eee;" />

### 自定义组件提示

HBuilderX的组件语法提示比其他工具都要强大，组件的标签、属性都可以直接被提示出来。

<img src="/static/snapshots/vue/hint_4.png" style="zoom: 50%;border: 1px solid #eee;" />

### doc

HBuilderX支持强大的vue doc，是vue组件开发者的利器，通过类jsdoc的写法，可让你的组件实现全面的代码提示和帮助。

详见[vue-doc详情](/Tutorial/Language/vuedoc)

<img src="/static/snapshots/vue/hint_5.png" style="zoom: 50%;border: 1px solid #eee;" />

### 兼容vscode vetur插件中的vue规范

一些vue的组件库，已经按照vetur规范制作语法提示库，比如Element UI、Onsen UI、Bootstrap Vue等框架。

这些框架npm安装或在HBuilderX新建模板中选择安装，可以直接实现代码提示。如下图

<img src="/static/snapshots/vue/hint_6.png" style="zoom: 50%;border: 1px solid #eee;" />

### 常用代码块/自定义代码块

敲v，在拉出的代码助手列表里可以看到大量vue代码块。

你也可以在工具-代码块设置-vue代码块里自己添加更多代码块。

<img src="/static/snapshots/vue/hint_7.gif" style="zoom: 50%;border: 1px solid #eee;" />

### vue router

支持提示$router、$route 所有实例方法、属性

<img src="/static/snapshots/vue/vue_router_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vue_router_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### vuex

支持提示State、Mutation、action等，并支持转到定义

<img src="/static/snapshots/vue/vuex_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vuex_2.gif" style="zoom: 80%;border: 1px solid #eee;" />


### 其他

另外其他开发工具常见的emmet、d.ts，HBuilderX也均良好支持。

## 帮助文档

光标放到api处，按下F1，可直接在右侧打开对应的帮助文档，不用切屏，边看文档边改代码，见下图：

<img src="/static/snapshots/vue/help_doc.gif" style="zoom: 60%;border: 1px solid #eee;" />

## 转到定义

按下alt+鼠标单击，即可对各种变量、样式、方法的引用溯源，在template、script、style中来回跳转。非常强大而灵活。

按下ctrl+alt+单击，还可在旁边以分栏方式打开定义处，方便并排查看。

<img src="/static/snapshots/vue/goto.gif" style="zoom: 60%;border: 1px solid #eee;" />

## 重构或选择相同语法词

如果你想看某个变量在哪里被引用，或者选中所有变量进行改名，那么点右键->选择相同变量（ctrl+shift+e）。

如下图可见，“list”在文中出现很多相同单词，但只有那几个准确的变量被选中：

<img src="/static/snapshots/vue/select.png" style="zoom: 50%;border: 1px solid #eee;" />

详情参考：[https://ask.dcloud.net.cn/article/35732](https://ask.dcloud.net.cn/article/35732)

## 语法校验

首先需要在插件管理中安装eslint-plugin-vue，然后点工具-验证本文档语法，或在vue文档保存时也会自动验证。

插件的管理设置如配置快捷键、是否在保存时自动触发，在设置-插件设置-eslint-plugin-vue里的插件配置里，详见[eslint-vue配置](/Tutorial/extension/eslint-vue)

<img src="/static/snapshots/vue/check.gif" style="zoom: 80%;border: 1px solid #eee;" />

## 大纲

选择视图菜单-显示文档结构图，或右键菜单里选择，即可在左侧出现大纲。点击左侧即可快读跳转右侧。

<img src="/static/snapshots/vue/outline.jpeg" style="zoom: 50%;border: 1px solid #eee;" />

## 免命令行使用vue

如果你不喜欢配置复杂的node环境，这并不影响你快速进入vue世界。

HBuilderX内置了终端插件和node环境。

在新建界面，可以可视化新建vue项目，而不需要配cli。

<img src="/static/snapshots/vue/project_create.png" style="zoom: 40%;border: 1px solid #eee;" />

在运行菜单里，可以可视化的运行和build。

<img src="/static/snapshots/vue/project_run.png" style="zoom: 80%;border: 1px solid #eee;" />

在引入插件时也无需安装node模块，uni-app插件市场可以可视化的导入插件（仅适用于uni-app），详见[uni-app插件市场](https://ext.dcloud.net.cn/)
