# 語法校驗

一個校驗工具可以幫助我們在編寫代碼時避免一些愚蠢的錯誤。

一個好的校驗工具可以在我們浪費時間找BUG之前告訴我們存在的問題。

一個好的校驗工具可以確保一個項目遵循編碼規範。

HBuilderX 3.6.2+, 内置的语言服务插件，支持对js和ts进行语法校验，[查看](#builtInCheck)。

当然您也可以安装其它语法校验插件，比如：htmlhint, stylelint, eslint-plugin-vue, eslint-js。


## 語法校驗插件

HBuilderX，代碼語法校驗，需要安裝相應插件。

> 其中，json已內置校驗功能，無需下載任何插件。

|語言			|插件名稱			|插件地址																|插件文檔											|
|--				|--					|--																		|--													|
|html			|validate-html		|[下載地址](https://ext.dcloud.net.cn/plugin?name=validate-html)		|[文檔教程](/Tutorial/extension/validate-html)		|
|css/less/sass/scss	|validate-stylelint	| [下載地址](https://ext.dcloud.net.cn/plugin?name=validate-stylelint)	|[文檔教程](/Tutorial/extension/validate-stylelint)	|
|js				|eslint-js			|[下載地址](https://ext.dcloud.net.cn/plugin?name=eslint-js)			|[文檔教程](/Tutorial/extension/eslint-js)			|
|vue			|eslint-vue			|[下載地址](https://ext.dcloud.net.cn/plugin?name=eslint-vue)			|[文檔教程](/Tutorial/extension/eslint-vue)			|

**注意：**
- scss文件，如果代碼使用`@-rules`指令，stylelint校驗提示`at-rule-no-unknown`，請配置`@`相關的規則。[stylelint@規則參考](http://stylelint.cn/user-guide/rules/#at-rule)

## 使用方法

如下圖所示，在對應的文件上，右鍵菜單，點擊【驗證本文檔語法】，如未出現此菜單，請先安裝相關插件。

<img src="/static/snapshots/tutorial/syntaxcheck.png" style="zoom:90%;" />

校驗概要結果會顯示在`狀態欄`

比如有2個錯誤（如下圖），可以按`F4`切換到不同的錯誤處，畫有紅波浪線（如下圖），鼠標移到紅波浪線上會顯示具體的錯誤信息。（如下圖示例）

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

## 如何开启和关闭HBuilderX内置的js和ts语法校验？@builtInCheck

> 此功能仅适用于HBuilderX 3.6.2+

HBuilderX菜单【设置】【语言服务配置】，可以开启或关闭js、ts语法校验。具体如下图：

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/hx_settings_sytax_check.jpg" class="hd-img" />
