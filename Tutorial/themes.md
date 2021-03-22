## 选择主题

1. 在HBuilderX中，您可以点击顶部菜单【工具】【主题】，选择切换您喜欢的主题颜色。
2. HBuilderX内置了3个主题, 分别为`绿柔` `雅蓝` `酷黑`

<img src="/static/snapshots/tutorial/themes.png" />

当前颜色主题，存储在用户设置（【设置】【源码视图】,即settings.json文件）中
```
"editor.colorScheme" : "Default"
```

## 自定义主题

> 自定义主题功能，仅适用于HBuilderX 1.8.8+版本

HBuilderX的窗体所有颜色都在配置文件中，并且可以复写以实现个性化。

在HBuilderX的设置文件`setting.json`的源码视图中，通过定义`"workbench.colorCustomizations"`字段来自定义您喜欢的主题颜色。

注意:

* 目前只能在现有的3个主题Default柔和、Monokai酷黑、Atom One Dark雅蓝的基础之上复写，不能完全更新新主题。
* 目前只能修改软件主题外观。代码区的颜色只有自带的三种风格。

<img src="/static/snapshots/tutorial/theme_set.png" style="zoom: 70%;" />

[自定义主题颜色相关参数](Tutorial/themes_param)

## 文件图标

菜单【工具】【项目管理器图标主题】，可以调整文件图标。

<img src="/static/snapshots/tutorial/icon.jpg" style="zoom: 50%; border: 1px solid #eee;border-radius: 5px; " />