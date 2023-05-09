# Formator-Prettier

<!--
keyword: format, prettier, 格式化
-->

## 简介

此插件用于格式化less、sass、vue、stylus、ts、yaml代码

此插件需要到[插件市场](https://ext.dcloud.net.cn/plugin?id=2025)下载。

如果您的Formator-Prettier插件版本是1.0.6，请参考[Formator-Prettier 1.0.6文档](/Tutorial/extension/prettier-1.0.6.md)

**2023年5月，HBuilderX更新formator-prettier插件到1.1.0版本，prettier库版本为2.8.4。**

**以下文档仅适用于1.1.0版本。**

### HBuilderX prettier配置项

- 是否`启用Prettier`格式化插件
- 当项目下存在Prettier配置时，优先使用项目下的配置
- 自定义Prettier的npm模块位置
- 更多见下图

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_setting.jpg" class="hd-img" />

### prettier格式化配置项

- printWidth： 控制单行最大长度
- semi： 控制每条语句是否加上分号
- tabWidth： 控制一个tab对应的空格数
- useTabs： 控制缩进用tab还是space
- singleQuote：控制字符串是用单引号还是双引号
- trailingComma： 是否去掉末尾的逗号
- bracketSpacing： 控制json对象括号前后是否加上空格
- jsxSingleQuote
- arrowParens
- htmlWhitespaceSensitivity
- vueIndentScriptAndStyle
- embeddedLanguageFormatting
- singleAttributePerLine
- .....

更多详细的配置说明可以参考[options](https://prettier.io/docs/en/options.html)

### 使用HBuilderX内置的prettier格式化规则并自定义

如果未勾选配置项【当项目下存在Prettier配置时，优先使用项目下的配置】，或项目下不存在`.prettierrc`或`.prettierrc.json`配置文件。

此时会使用HBuilderX内置的prettier格式化规则并自定义。如下图所示。

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_builtin_rules.jpg" class="hd-img" />

### 使用项目下的prettier配置文件进行格式化

1. HBuilderX【设置 - 插件配置】，勾选配置项【当项目下存在Prettier配置时，优先使用项目下的配置】
2. 在项目下配置`.prettierrc`或`.prettierrc.json`

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_project_config.jpg" class="hd-img" />

### 自定义Prettier的npm模块位置@custon-prettier-npm

[Prettier](https://prettier.io/)库，在不停的更新升级，HBuiderX formator-prettier插件不可能做到跟随Prettier库随时更新。

通过`自定义Prettier的npm模块位置`，当Prettier库更新后，您可以通过配置此项使用最新的Prettier。

注意：此配置项的有效值，必须是有效的目录，通常指向`node_modules/prettier`

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_custom_npm.jpg" class="hd-img" />

### 缩进说明@indent

如果您在prettier配置文件中，配置了useTabs、tabWidth没有生效，那是因为HBuilderX默认开启【使用编辑器缩进配置覆盖useTabs、tabWidth配置项】。

如果想使用prettier配置文件中的缩进规则，请关闭【使用编辑器缩进配置覆盖useTabs、tabWidth配置项】。

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_code_indent.jpg" class="hd-img" />

备注：`.editorconfig`文件中的缩进规则，高于Prettier缩进配置项。

### .prettierignore忽略文件@prettierignore

.prettierignore 用来配置哪些文件不需要被格式化

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/prettier_108_prettierignore.jpg" class="hd-img" />
