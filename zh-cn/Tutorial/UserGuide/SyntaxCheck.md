# 语法校验

<!--
keyword:syntax,语法检查
-->

一个校验工具可以帮助我们在编写代码时避免一些愚蠢的错误。

一个好的校验工具可以在我们浪费时间找BUG之前告诉我们存在的问题。

一个好的校验工具可以确保一个项目遵循编码规范。

HBuilderX 包含4款语法校验插件，htmlhint, stylelint, eslint-plugin-vue, eslint-js。主要用于校验html,css/less/sass/scss,vue, javascript


## 语法校验插件

HBuilderX，代码语法校验，需要安装相应插件。

> 其中，json已内置校验功能，无需下载任何插件。

|语言			|插件名称			|插件地址																|插件文档											|
|--				|--					|--																		|--													|
|html			|validate-html		|[下载地址](https://ext.dcloud.net.cn/plugin?name=validate-html)		|[文档教程](/Tutorial/extension/validate-html)		|
|css/less/sass/scss	|validate-stylelint	| [下载地址](https://ext.dcloud.net.cn/plugin?name=validate-stylelint)	|[文档教程](/Tutorial/extension/validate-stylelint)	|
|js				|eslint-js			|[下载地址](https://ext.dcloud.net.cn/plugin?name=eslint-js)			|[文档教程](/Tutorial/extension/eslint-js)			|
|vue			|eslint-vue			|[下载地址](https://ext.dcloud.net.cn/plugin?name=eslint-vue)			|[文档教程](/Tutorial/extension/eslint-vue)			|

**注意：**
- scss文件，如果代码使用`@-rules`指令，stylelint校验提示`at-rule-no-unknown`，请配置`@`相关的规则。[stylelint@规则参考](http://stylelint.cn/user-guide/rules/#at-rule)

## 使用方法

如下图所示，在对应的文件上，右键菜单，点击【验证本文档语法】，如未出现此菜单，请先安装相关插件。

<img src="/static/snapshots/tutorial/syntaxcheck.png" style="zoom:90%;" />

校验概要结果会显示在`状态栏`

比如有2个错误（如下图），可以按`F4`切换到不同的错误处，画有红波浪线（如下图），鼠标移到红波浪线上会显示具体的错误信息。（如下图示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
