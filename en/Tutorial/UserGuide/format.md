# Format Document

> Many people ignore the formatting of the code when writing code. Although this will not affect the function of the program, it will reduce the readability of the program.

> "Format Document" allows the code to be indented or separated according to a specific style to make the program clearer.

On the opened file, right-click menu, and click [Format Document] to format the current file.

HBuilderX, formatting shortcut key, win: `ctrl + K`; mac: `command + K`


### Plugins

HBuilderX, officially maintained formatting plugins are as follows:

| Name         | DisplayName    | Whether built-in         | Supported file types                             |  marketplace | Plugin tutorial |
| ---------------- | ----------------------- | ---------------- | ------------------------------------------ |-------------|-------------|
| js-beautify      | format                  | Built-in        | vue、html、js、css、json                   |   | [Docs](/Tutorial/extension/js-beautify)|
| prettier         | format-prettier         | Not built-in, need to download | less、sass、vue、stylus(vue embedded)、ts、yaml | [Download](https://ext.dcloud.net.cn/plugin?id=2025)| [Docs](/Tutorial/extension/prettier) |
| stylus-supremacy | format-stylus-supremacy | Not built-in, need to download | stylus                     | [Download](https://ext.dcloud.net.cn/plugin?id=2039) |  [Docs](https://ext.dcloud.net.cn/plugin?id=2039) |

**Remarks:**

1. When there are both `js-beautify` and `format-prettier` plugins, the `format-prettier` plugin is called to format `vue` file.
2. `stylus-supremacy` only supports formatting independent stylus files. If you need to format the stylus code in the vue file, you need to install the prettier plugin at the same time.
3. Local plugin directory: all plugins of HBuilderX are stored in the `plugins` directory.

### Format plugin configuration

Click the menu [Tools] [Settings -> Plugins], select the corresponding plugin, and click `Configuration File` to configure.

<img src="/static/snapshots/tutorial/format/plugin_set_en.png" class="hd-img" />

| Name		| Config File											| Official website															|
| -----------------------	| ------------------------------------------------	| ---------------													|
| format(即js-beautify)		| jsbeautifyrc.js									| [site](https://github.com/beautify-web/js-beautify)				|
| format-prettier			| prettier.config.js								| [site](https://prettier.io/docs/en/options.html)					|
| format-stylus-supremacy	| supremacy.config.js								| [site](https://thisismanta.github.io/stylus-supremacy/#options)	|


### Format style

The indentation rule of "Format Document" is set in the configuration of the menu [Tools --> Settings].

<img src="/static/snapshots/tutorial/format/indent_en.png" class="hd-img"/>

**Remarks:**
The `editorconfig` configuration will override the HBuilderX editor configuration; when there is a `.editorconfig` file under the project, this configuration file is read when formatting.

[.editorconfig](/Tutorial/UserGuide/editorconfig)


### Custom formatting shortcuts

Click the menu [Tools] [Custom Keybingdings], in [User Settings], copy the following code, `key` is the shortcut key you want to define.

```json
{"key":"ctrl+k","command":"editor.action.format"}
```

### Whether to support automatic formatting when saving a file?

How to realize automatic formatting when saving a file?

Answer: Not supported.

1. Normal web projects `do not support` automatic formatting while saving a file.
2. For the vue-cli project, the same effect can be achieved by configuring `eslint` and using the function of `eslint automatic verification and repair`. For example, remove semicolon when saving the file.

### Choose a formatting plugin

For HBuilderX version 3.7+, when you install the `prettier` plug-in and format the vue or ts file, the following window will appear for you to select the formatting plug-in.

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/format_prompt.jpg" class="hd-img" />

After selecting and setting the default in the above pop-up window, if you want to use other formatting plug-ins, you need to find the element starting with `defaultFomat.` in HBuilderX [Settings - Source View], and delete it.

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/format_clear.jpg" class="hd-img" />
