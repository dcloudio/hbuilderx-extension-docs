## Select Color Theme

1. In HBuilderX, you can click on the top menu [Tool - Color Theme] and choose to switch the theme color you like.
2. HBuilderX has 3 built-in themes, namely `Default` `Monokai` `Atom one Dark`

<img src="/static/snapshots/tutorial/menu_tool/themes_en.png" style="zoom: 45%; border-radius: 20px;"/>

The current color theme, stored in the user settings ([Settings] [Source View], that is, the settings.json file)

```
"editor.colorScheme" : "Default"
```


## Custom Window theme

> Custom form theme function, Only supports HBuilderX 1.8.8+ version

In the source view of the file setting.json, customize the theme colors you like by defining the "workbench.colorCustomizations" field.

[Custom theme parameters](/Tutorial/Other/themes_param)

```json
"workbench.colorCustomizations": {
    "[Default]": {//Default
        "sideBar.background":"#faf6e6",
        "editor.background":"#faf6e6"
    },
    "[Monokai]": {//Monokai
        "toolBar.background": "#272822",
        "sideBar.background":"#272822"
    },
    "[Atom One Dark]": {//Atom one Dark
        "sideBar.background": "#282c34",
        "editor.background":"#282c3f"
    }
}
```

## Custom editor code color

> Custom editor code color function, only applicable to HBuilderX 3.1.19+ version;

### Which code areas can be customized?

Custom code color supports all code partition (token) colors such as `comment`, `string`, `keyword`, `variable`, and `tag`.

Currently supported languages include: `JavaScript(ES6+)`、`HTML(ES6+)`、`Vue`、`CSS`、`Less`、`SCSS`、`Stylus`、`Typescript`、`Markdown`、`JSON`。

### How to customize？

在文件`setting.json`的源码视图中，通过定义`"editor.tokenColorCustomizations"`字段来自定义您喜欢的主题颜色。

将[可自定义代码颜色的相关参数](/Tutorial/Other/themes_code.md)中配置的规则复制到对应主题（`[Default]`、`[Monokai]`、`[Atom One Dark]`）的`rules`节点下，更改对应颜色即可。

> 注意：此方式相对比较复杂，适合对代码分区规则比较熟悉的同学，**我们建议您采用下面提供的[辅助功能](#自定义代码颜色辅助功能)进行自定义**。

Example:

```json
"editor.tokenColorCustomizations": {
    "[Default]": {//Default
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
    "[Monokai]": {//Monokai
      "rules":[
        //...
      ]
    },
    "[Atom One Dark]": {//Atom one Dark
      "rules":[
        //...
      ]
    }
}
```

Complete code color list：[Custom code color parameters](/Tutorial/Other/themes_code.md)

### Custom code color assist function

为了简化自定义步骤，我们提供了以下步骤可以简便的自定义代码颜色：

1. 在`settings.json`源码视图中加入`"editor.tokenColorCustomizations"`设置（**必须执行该步骤才能看到后面步骤的菜单项**）
2. 将光标放到要改颜色的代码位置，选择菜单`工具`-`主题`-`Inspect Tokens And Colors`查看当前代码着色信息
3. 将上一步控制台输出的`Token Color Rule`内容拷贝到`settings.json`的`"editor.tokenColorCustomizations"`对应位置（**注意：要放到对应的主题下**）
4. 保存`settings.json`文件后即可看到修改后的效果

**Complete operation animation**：

<img src="/static/snapshots/tutorial/custom_token_color.gif" style="border: 1px solid #eee;border-radius: 5px; "  />

Notes: At present, it can only be copied on the basis of the existing 3 themes `Default`, `Monokai`, and `Atom One Dark`, and cannot be completely updated with new themes.

## File Icon Theme

Menu [Tools] [File Icon Theme], you can adjust the file icon.

<img src="/static/snapshots/tutorial/menu_tool/file_icon_en.png" style="zoom: 50%; border: 1px solid #eee;border-radius: 15px; " />