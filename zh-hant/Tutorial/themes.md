## 選擇主題@theme
-------
1. 在HBuilderX中，您可以點擊頂部菜單【工具】【主題】，選擇切換您喜歡的主題顏色。
2. HBuilderX內置了3個主題, 分別爲`綠柔` `雅藍` `酷黑`

<img src="/static/snapshots/tutorial/menu_tool/themes.png" />

當前顏色主題，存儲在用戶設置（【設置】【源碼視圖】,即settings.json文件）中
```
"editor.colorScheme" : "Default"
```

## 自定義主題@custom
-------
> 自定義窗體主題功能，僅適用於HBuilderX 1.8.8+版本；

當前HBuilderX的自定義顏色都在配置文件`settings.json`中，並且可以複寫以實現個性化。

### 自定義窗體主題@custom-window

在文件`setting.json`的源碼視圖中，通過定義`"workbench.colorCustomizations"`字段來自定義您喜歡的主題顏色。[可自定義的相關參數](/Tutorial/Other/themes_param)

```json
"workbench.colorCustomizations": {
    "[Default]": {//綠柔
        "sideBar.background":"#faf6e6", //加深項目管理器顏色
        "editor.background":"#faf6e6" //加深編輯區域背景顏色
    },
    "[Monokai]": {//酷黑
        "toolBar.background": "#272822", //工具欄背景色設爲黑色
        "sideBar.background":"#272822" //項目管理器背景色設爲黑色
    },
    "[Atom One Dark]": {//雅藍
        "sideBar.background": "#282c34", //項目管理器背景色設爲與代碼區背景色相同
        "editor.background":"#282c3f" //調亮編輯區域背景顏色
    }
}
```

### 自定義編輯器代碼顏色@custom-editor-code-style

> 自定義編輯器代碼顏色功能，僅適用於HBuilderX 3.1.19+版本；

#### - 支持自定義哪些代碼區域？
自定義代碼顏色支持`註釋`、`字符串`、`關鍵字`、`變量`、`標籤`等所有代碼分區(token)顏色。

目前支持的語言包括：`JavaScript(ES6+)`、`HTML(ES6+)`、`Vue`、`CSS`、`Less`、`SCSS`、`Stylus`、`Typescript`、`Markdown`、`JSON`。

#### - 如何自定義?@how-to-custom
在文件`setting.json`的源碼視圖中，通過定義`"editor.tokenColorCustomizations"`字段來自定義您喜歡的主題顏色。將[可自定義代碼顏色的相關參數](/Tutorial/Other/themes_code.md)中配置的規則複製到對應主題（`[Default]`、`[Monokai]`、`[Atom One Dark]`）的`rules`節點下，更改對應顏色即可。

> 注意：此方式相對比較複雜，適合對代碼分區規則比較熟悉的同學，**我們建議您採用下面提供的[輔助功能](#自定義代碼顏色輔助功能)進行自定義**。

示例如下：
```json
"editor.tokenColorCustomizations": {
    "[Default]": {//綠柔
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
    "[Atom One Dark]": {//雅藍
      "rules":[
        //...
      ]
    }
}
```

完整的代碼顏色列表參考：[可自定義代碼顏色的相關參數](/Tutorial/Other/themes_code.md)

#### - 自定義代碼顏色輔助功能@auxiliary
爲了簡化自定義步驟，我們提供了以下步驟可以簡便的自定義代碼顏色：

1. 在`settings.json`源碼視圖中加入`"editor.tokenColorCustomizations"`設置（**必須執行該步驟才能看到後面步驟的菜單項**）
2. 將光標放到要改顏色的代碼位置，選擇菜單`工具`-`主題`-`Inspect Tokens And Colors`查看當前代碼着色信息
3. 將上一步控制檯輸出的`Token Color Rule`內容拷貝到`settings.json`的`"editor.tokenColorCustomizations"`對應位置（**注意：要放到對應的主題下**）
4. 保存`settings.json`文件後即可看到修改後的效果

**完整的操作動畫如下圖**：

<img src="/static/snapshots/tutorial/custom_token_color.gif" style="border: 1px solid #eee;border-radius: 5px; "  />

注意:

* 目前只能在現有的3個主題Default柔和、Monokai酷黑、Atom One Dark雅藍的基礎之上覆寫，不能完全更新新主題。

## 文件圖標@file-icon
-------

菜單【工具】【項目管理器圖標主題】，可以調整文件圖標。

<img src="/static/snapshots/tutorial/icon.jpg" style="zoom: 50%; border: 1px solid #eee;border-radius: 5px; " />