## Select Color Theme

1. In HBuilderX, you can click on the top menu [Tool - Color Theme] to your favorite color theme.
2. HBuilderX has 3 built-in themes, `Default` `Monokai` `Atom one Dark`.

<img src="/static/snapshots/tutorial/menu_tool/themes_en.png" style="zoom: 45%; border-radius: 20px;"/>

The settings of the current color theme stored in the user settings ([Settings] [Source View], that is, the settings.json file)

```
"editor.colorScheme" : "Default"
```


## Custom theme

> Supported from HBuilderX 1.8.8+

The settings of the current color theme stored in `settings.json` file. You can customize the color theme by overriding related settings. The method is as follows:

#### 自定义窗体主题

In settings.json file of source view, you can customize the theme color you like by overriding the "workbench.colorCustomizations" field. [Custom theme parameters](/Tutorial/Other/themes_param)

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

> Custom editor code color function, supported from HBuilderX 3.1.19+;

### Which code areas can be customized?

Custom code color supports all code partition (token) colors such as `comment`, `string`, `keyword`, `variable`, and `tag` etc.

Currently supported languages include: `JavaScript(ES6+)`、`HTML(ES6+)`、`Vue`、`CSS`、`Less`、`SCSS`、`Stylus`、`Typescript`、`Markdown`、`JSON`。

### How to customize？

In settings.json file of source view, you can customize the theme color you like by overriding the "editor.tokenColorCustomizations" field.

You can copy the settings of [Custom theme parameters](/Tutorial/Other/themes_code.md) to override `rules` field of themes （`[Default]`、`[Monokai]`、`[Atom One Dark]`）, and then just change the color value.

> Note：This method is only suitable for people who are familiar with the rules of the "settings.json" file. We recommend that you use the "color assist function" to update the "settings.json" file.

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

Please follow our steps to customize code color:

1. In `settings.json` file of source view, add the configuration `"editor.tokenColorCustomizations"`. （**This step is required.**）
2. Place the cursor on the code position where you want to change the color, select the menu `Tools`-`Theme`-`Inspect Tokens And Colors` to view the current code coloring information
3. Copy the content of `Token Color Rule` output from the console in the previous step to `"editor.tokenColorCustomizations"` field of `settings.json` file. (**Note: Put it under the corresponding theme**)
4. After saving the `settings.json` file, you can see the modified theme.

**Complete steps**：

<img src="/static/snapshots/tutorial/custom_token_color.gif" style="border: 1px solid #eee;border-radius: 5px; "  />

Notes: Now, you can customize the theme based on the 3 built-in themes `Default`, `Monokai` and `Atom One Dark` by overriding the theme settings, but you cannot create new themes.

## File Icon Theme

Menu [Tools] [File Icon Theme], you can choose the file icon theme.

<img src="/static/snapshots/tutorial/menu_tool/file_icon_en.png" style="zoom: 50%; border: 1px solid #eee;border-radius: 15px; " />
