# Format Document

> Many people do not pay attention to the layout structure of the program when writing a program. Although this will not affect the function of the program, the readability of the program will be greatly reduced.

> Formatting operation allows the code to be indented or separated according to a specific style to make the program clearer.

On the opened file, right-click menu, and click [Format Document] to format the current file.

HBuilderX, formatting shortcut key, win: `ctrl + K`; mac: `command + K`


### Plugins

HBuilderX, officially maintained formatting plugins are as follows:

| Name         | DisplayName    | Whether built-in         | Supported file types                             |  marketplace | Plugin tutorial |
| ---------------- | ----------------------- | ---------------- | ------------------------------------------ |-------------|-------------|
| js-beautify      | format                  | Built-in        | vue、html、js、css、json                   |   | |
| prettier         | format-prettier         | Not built-in, need to download | less、sass、vue、stylus(vue embedded)、ts、yaml | [Download](https://ext.dcloud.net.cn/plugin?id=2025)| [Docs](/Tutorial/extension/prettier) |
| stylus-supremacy | format-stylus-supremacy | Not built-in, need to download | stylus                     | [Download](https://ext.dcloud.net.cn/plugin?id=2039) |  [Docs](https://ext.dcloud.net.cn/plugin?id=2039) |

**Remarks:**

1. When there are both `js-beautify` and `format-prettier` plugins, the `vue` file is formatted and the `format-prettier` plugin is called。
2. `stylus-supremacy` only supports formatting independent stylus files. If you need to format the stylus code in the vue file, you need to install the prettier plugin at the same time.
3. Local plug-in directory: all plug-ins of HBuilderX are stored in the local `plugins` directory

### Format plugin configuration

Click the menu [Tools] [Settings -> Plugins], select the corresponding plug-in, and click `Configuration File` to configure.

<img src="/static/snapshots/tutorial/format/plugin_set_en.png" class="hd-img" />

| Name		| Config File											| Official website															|
| -----------------------	| ------------------------------------------------	| ---------------													|
| format(即js-beautify)		| jsbeautifyrc.js									| [site](https://github.com/beautify-web/js-beautify)				|
| format-prettier			| prettier.config.js								| [site](https://prettier.io/docs/en/options.html)					|
| format-stylus-supremacy	| supremacy.config.js								| [site](https://thisismanta.github.io/stylus-supremacy/#options)	|


### Format style

Format, indent, read the configuration in the menu [Tools --> Settings].

<img src="/static/snapshots/tutorial/format/indent_en.png" class="hd-img"/>

**Remarks:**
The `editorconfig` configuration will override the HBuilderX editor configuration; when there is a `.editorconfig` file under the project, this configuration file is read when formatting.

[.editorconfig](/Tutorial/UserGuide/editorconfig)


### Custom format shortcuts

Click the menu [Tools] [Custom Keybingdings], in [User Settings], copy the following code, `key` is the shortcut key you want to define.

```json
{"key":"ctrl+k","command":"editor.action.format"}
```

### Automatically format when saving files

How to realize automatic formatting when saving files?
 
Answer: Not supported.

1. Normal web projects `do not support` automatic formatting while saving files.
2. For the vue-cli project, the same effect can be achieved by configuring `eslint` and using the function of `eslint automatic verification and repair`.
