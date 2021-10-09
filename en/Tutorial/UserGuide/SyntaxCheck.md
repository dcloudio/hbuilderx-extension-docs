# Syntax Validation

A good validator can prevent syntax errors when we write codes.

A good validator can save your time to find bugs.

A good validator can ensure that the coding follows the standard.

HBuilderX includes 4 syntax validation plugins, `htmlhint`, `stylelint`,` eslint-plugin-vue`, `eslint-js`. These plugins are mainly used to html, css/less/sass/scss, vue, javascript.


## Syntax Validation Plugins

In HBuilderX, you should install the following plugins to implement code inspection.

> HBuilderX has a built-in validation function and does not require any plugins.

|Language			|Plugin-Name			|URL																|Docs											|
|--				|--					|--																		|--													|
|html			|validate-html		|[Download](https://ext.dcloud.net.cn/plugin?name=validate-html)		|[Docs](/Tutorial/extension/validate-html)		|
|css/less/sass/scss	|validate-stylelint	| [Download](https://ext.dcloud.net.cn/plugin?name=validate-stylelint)	|[Docs](/Tutorial/extension/validate-stylelint)	|
|js				|eslint-js			|[Download](https://ext.dcloud.net.cn/plugin?name=eslint-js)			|[Docs](/Tutorial/extension/eslint-js)			|
|vue			|eslint-vue			|[Download](https://ext.dcloud.net.cn/plugin?name=eslint-vue)			|[Docs](/Tutorial/extension/eslint-vue)			|

**Notice：**
- For scss files, if you receive the stylelint validation tip `at-rule-no-unknown` when the code calls the `@-rules` command, you should set `@` rules. [stylelint rules](http://stylelint.cn/user-guide/rules/#at-rule)

## How to use?

Right-click on the current file, and click [Validation]. Please install above plugins if you do not find this menu.

<img src="/static/snapshots/tutorial/syntaxcheck.png" style="zoom:90%;" />

The summary of syntax validation will be displayed on the `Status Bar`.

You can press "F4" to switch between multiple errors. Each error is accompanied by a red wavy line. When you move your mouse over the red wavy line, an error message will be displayed.

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01_en.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
