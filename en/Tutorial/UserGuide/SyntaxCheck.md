# Validate Syntax

A verification tool can help us avoid some stupid mistakes when writing code.

A good verification tool can tell us the problems before we waste time looking for bugs.

A good verification tool can ensure that a project follows coding standards.

HBuilderX includes 4 syntax verification plug-ins, `htmlhint`, `stylelint`,` eslint-plugin-vue`, `eslint-js`. Mainly used to verify html, css/less/sass/scss, vue, javascript


## Validate plugins

HBuilderX, code syntax Validate, need to install the corresponding plug-in.

> The json file has built-in verification function, no need to download any plug-ins.

|Language			|Plugin-Name			|URL																|Docs											|
|--				|--					|--																		|--													|
|html			|validate-html		|[Download](https://ext.dcloud.net.cn/plugin?name=validate-html)		|[Docs](/Tutorial/extension/validate-html)		|
|css/less/sass/scss	|validate-stylelint	| [Download](https://ext.dcloud.net.cn/plugin?name=validate-stylelint)	|[Docs](/Tutorial/extension/validate-stylelint)	|
|js				|eslint-js			|[Download](https://ext.dcloud.net.cn/plugin?name=eslint-js)			|[Docs](/Tutorial/extension/eslint-js)			|
|vue			|eslint-vue			|[Download](https://ext.dcloud.net.cn/plugin?name=eslint-vue)			|[Docs](/Tutorial/extension/eslint-vue)			|

**注意：**
- For scss files, if the code uses the `@-rules` command, and the stylelint check prompts `at-rule-no-unknown`, please configure the rules related to `@`.[stylelint rules](http://stylelint.cn/user-guide/rules/#at-rule)

## How to use?

Right-click the current file, and click [Validation].

<img src="/static/snapshots/tutorial/validate/right_menu_en.png" class="hd-img" />

The summary result of the verification will be displayed in the `Status Bar`.

For example, if there are two errors, you can press `F4` to switch to different errors. A red wavy line is drawn. When the mouse moves over the red wavy line, a specific error message will be displayed.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
