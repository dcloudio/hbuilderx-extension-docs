# js-beautify

HBuilderX 3.7.6+, 内置format插件(即js-beautify)，支持项目下格式化配置.jsbeautifyrc文件

注意事项：只有项目下存在`.jsbeautifyrc`文件时才会生效。否则则采用HBuilderX内置的jsbeautifyrc格式化规则。

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/jsbeautifyrc-setting.jpg" class="hd-img" />

## 如何在项目下配置.jsbeautifyrc

在项目下，新建`.jsbeautifyrc`文件，配置相关格式化规则即可。

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/jsbeautifyrc-file.jpg" class="hd-img" />

## 缩进风格

格式化时， 使用的缩进方式，是读取的菜单【工具 --> 设置】中的配置

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/format/indent.png)

特别说明： editorconfig配置会覆盖HBuilderX编辑器配置；当项目下存在`.editorconfig`文件时，格式化时，读取的是此配置文件。

## js-beautify格式化规则

格式化规则，请查看官方[详情](https://github.com/beautify-web/js-beautify)
