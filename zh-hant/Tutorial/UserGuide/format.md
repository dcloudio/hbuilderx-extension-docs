# 格式化

> 很多人編寫程序時不注意程序的版式結構，這樣做雖然不會影響程序的功能，但是程序的可讀性會大大降低。格式化操作，讓代碼按照特定的風格縮進或分開，使程序更加清晰易懂

在打開的文件上，右鍵菜單，點擊【重排代碼格式】，即可對當前文件進行格式化操作。

HBuilderX，格式化快捷鍵, win：`ctrl + K`； mac: `command + K`


### 格式化插件

> HBuilderX ，官方維護的格式化插件如下，當然，您也可以自行開發格式化插件。

| 插件名稱         | 對應插件配置中的名稱    | 是否內置         | 可格式化的文件                             |  插件市場 | 插件教程 |
| ---------------- | ----------------------- | ---------------- | ------------------------------------------ |-------------|-------------|
| js-beautify      | format                  | 內置插件        | vue、html、js、css、json                   |   | |
| prettier         | format-prettier         | 非內置，需要下載 | less、sass、vue、stylus(vue內嵌)、ts、yaml | [下載地址](https://ext.dcloud.net.cn/plugin?id=2025)| [文檔](/Tutorial/extension/prettier) |
| stylus-supremacy | format-stylus-supremacy | 非內置，需要下載 | 格式化單獨stylus文件                       | [下載地址](https://ext.dcloud.net.cn/plugin?id=2039) |  [文檔](https://ext.dcloud.net.cn/plugin?id=2039) |

**特別說明：**

1. 當同時存在`js-beautify`和`format-prettier`插件是，格式化`vue`文件，調用的是`format-prettier`插件
2. `stylus-supremacy`只支持格式化獨立的stylus文件，如需格式化vue文件內的stylus代碼，需要同時安裝prettier插件
3. 本地插件目錄：HBuilderX所有的插件，都存放於本地`plugins`目錄下

### 格式化插件配置

點擊菜單【工具】【設置 -> 插件配置】，選擇相應插件, 點擊`配置文件`進行配置。

<img src="/static/snapshots/tutorial/format/format.png" />

| 插件配置中格式化插件		| 配置文件											| 插件官網															|
| -----------------------	| ------------------------------------------------	| ---------------													|
| format(即js-beautify)		| jsbeautifyrc.js									| [官網](https://github.com/beautify-web/js-beautify)				|
| format-prettier			| prettier.config.js								| [官網](https://prettier.io/docs/en/options.html)					|
| format-stylus-supremacy	| supremacy.config.js								| [官網](https://thisismanta.github.io/stylus-supremacy/#options)	|


### 格式化風格

格式化時， 使用的縮進方式，是讀取的菜單【工具 --> 設置】中的配置

<img src="/static/snapshots/tutorial/format/indent.png" />

**特別說明：**
`editorconfig`配置會覆蓋HBuilderX編輯器配置；當項目下存在`.editorconfig`文件時，格式化時，讀取的是此配置文件。

[.editorconfig使用說明文檔](/Tutorial/UserGuide/editorconfig)


### 自定義格式化快捷鍵

自定義格式化快捷鍵： 點擊菜單【工具】【自定義快捷鍵】，在【用戶設置】中，拷貝如下代碼， `key`爲您要定義的快捷鍵

```json
{"key":"ctrl+k","command":"editor.action.format"}
```

### 保存文件時，自動格式化

部分小夥伴反饋， 如何實現保存文件時，自動格式化？  答： 不支持。

1. 普通web項目`不支持`保存文件的同時，自動格式化。
2. vue-cli項目，可通過配置`eslint`，通過`eslint自動校驗修復`的功能，來實現相同的效果。

例如：保存時，去除分號等。
