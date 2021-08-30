# Vue3支持
> HBuilderX对vue3的支持仍然兼容vue2，也就是我们之前对vue2的强化在vue3中依然可以使用。vue2支持详见[vue支持](/Tutorial/Language/vue.md)

## vue3.x 基础API提示及帮助

提示不止是要全，而且要准。不能把所有词都猜一遍列出来，该有什么就有什么，清晰可信赖。
既要写的快，又要写不错。

除了完善的提示，在代码助手右侧还能看到清晰的帮助描述，对api进行说明，还有vue官网的api链接，点击即可直达vue官网指定页面。非常适合学习参考。

<img src="/static/snapshots/vue_next/1.jpg" style="zoom: 30%;border: 1px solid #eee;" />
## Composition API的支持
准确的ref和reactive等响应式函数的类型推导，同时也支持转到定义(Alt+click)。

<img src="/static/snapshots/vue_next/2.jpg" style="zoom: 30%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue_next/3.jpg" style="zoom: 30%;border: 1px solid #eee;" />

## CSS变量绑定
支持在css中使用v-bind函数提示，并支持在参数中的变量提示及转到定义(Alt+click)。

<img src="/static/snapshots/vue_next/4.jpg" style="zoom: 30%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue_next/5.jpg" style="zoom: 30%;border: 1px solid #eee;" />

## script setup支持
vue3推荐使用的setup语法糖支持也完全支持

<img src="/static/snapshots/vue_next/6.jpg" style="zoom: 30%;border: 1px solid #eee;" />

## template内的变量、方法
在data、props和setup中定义的变量以及methods和setup内定义的函数都能在template中提示和转到定义。

<img src="/static/snapshots/vue_next/7.jpg" style="zoom: 30%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue_next/8.jpg" style="zoom: 30%;border: 1px solid #eee;" />