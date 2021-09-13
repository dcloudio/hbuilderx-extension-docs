## 选择主题

1. 在HBuilderX中，您可以点击顶部菜单【工具】【主题】，选择切换您喜欢的主题颜色。
2. HBuilderX内置了3个主题, 分别为`绿柔` `雅蓝` `酷黑`

<img src="/static/snapshots/tutorial/menu_tool/themes.png" />

当前颜色主题，存储在用户设置（【设置】【源码视图】,即settings.json文件）中
```
"editor.colorScheme" : "Default"
```

## 自定义主题

> 自定义窗体主题功能，仅适用于HBuilderX 1.8.8+版本；

当前HBuilderX的自定义颜色都在配置文件`settings.json`中，并且可以复写以实现个性化。实现方式如下：

#### 自定义窗体主题

在文件`setting.json`的源码视图中，通过定义`"workbench.colorCustomizations"`字段来自定义您喜欢的主题颜色。[可自定义的相关参数](/Tutorial/Other/themes_param)

```json
"workbench.colorCustomizations": {
    "[Default]": {//绿柔
        "sideBar.background":"#faf6e6", //加深项目管理器颜色
        "editor.background":"#faf6e6" //加深编辑区域背景颜色
    },
    "[Monokai]": {//酷黑
        "toolBar.background": "#272822", //工具栏背景色设为黑色
        "sideBar.background":"#272822" //项目管理器背景色设为黑色
    },
    "[Atom One Dark]": {//雅蓝
        "sideBar.background": "#282c34", //项目管理器背景色设为与代码区背景色相同
        "editor.background":"#282c3f" //调亮编辑区域背景颜色
    }
}
```

#### 自定义编辑器代码颜色

> 自定义编辑器代码颜色功能，仅适用于HBuilderX 3.1.19+版本；

##### 支持自定义哪些代码区域？
自定义代码颜色支持`注释`、`字符串`、`关键字`、`变量`、`标签`等所有代码分区(token)颜色。

目前支持的语言包括：`JavaScript(ES6+)`、`HTML(ES6+)`、`Vue`、`CSS`、`Less`、`SCSS`、`Stylus`、`Typescript`、`Markdown`、`JSON`。

##### 如何自定义？
在文件`setting.json`的源码视图中，通过定义`"editor.tokenColorCustomizations"`字段来自定义您喜欢的主题颜色。将[可自定义代码颜色的相关参数](/Tutorial/Other/themes_code.md)中配置的规则复制到对应主题（`[Default]`、`[Monokai]`、`[Atom One Dark]`）的`rules`节点下，更改对应颜色即可。

> 注意：此方式相对比较复杂，适合对代码分区规则比较熟悉的同学，**我们建议您采用下面提供的[辅助功能](#自定义代码颜色辅助功能)进行自定义**。

示例如下：
```json
"editor.tokenColorCustomizations": {
    "[Default]": {//绿柔
        "rules":[
            {
                "scope": "comment",
                "settings": {
                    "fontStyle": "italic",
                    "foreground": "#248C85"
                }
            }
        ]
    },
    "[Monokai]": {//酷黑
      "rules":[
        //...
      ]
    },
    "[Atom One Dark]": {//雅蓝
      "rules":[
        //...
      ]
    }
}
```

完整的代码颜色列表参考：[可自定义代码颜色的相关参数](/Tutorial/Other/themes_code.md)

##### 自定义代码颜色辅助功能
为了简化自定义步骤，我们提供了以下步骤可以简便的自定义代码颜色：

1. 在`settings.json`源码视图中加入`"editor.tokenColorCustomizations"`设置（**必须执行该步骤才能看到后面步骤的菜单项**）
2. 将光标放到要改颜色的代码位置，选择菜单`工具`-`主题`-`Inspect Tokens And Colors`查看当前代码着色信息
3. 将上一步控制台输出的`Token Color Rule`内容拷贝到`settings.json`的`"editor.tokenColorCustomizations"`对应位置（**注意：要放到对应的主题下**）
4. 保存`settings.json`文件后即可看到修改后的效果

**完整的操作动画如下图**：

<img src="/static/snapshots/tutorial/custom_token_color.gif" style="border: 1px solid #eee;border-radius: 5px; "  />

注意:

* 目前只能在现有的3个主题Default柔和、Monokai酷黑、Atom One Dark雅蓝的基础之上复写，不能完全更新新主题。

## 文件图标

菜单【工具】【项目管理器图标主题】，可以调整文件图标。

<img src="/static/snapshots/tutorial/icon.jpg" style="zoom: 50%; border: 1px solid #eee;border-radius: 5px; " />