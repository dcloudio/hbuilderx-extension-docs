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

格式化规则，请查看js-beautify官方文档[详情](https://github.com/beautify-web/js-beautify)。

下面简单的罗列一些js-beautify格式化规则:

```json
{
    "eol": "\r\n",                      //行结束符
    "end_with_newline": false,          //使用换行结束输出
    "indent_level": 0,                  //起始代码缩进数
    "preserve_newlines": true,          //保留空行
    "max_preserve_newlines": null,      //最大连续保留换行符个数。比如设为2，则会将2行以上的空行删除为只保留1行
    "space_in_paren": true,             //括弧添加空格 示例 f( a, b )
    "space_in_empty_paren": false,      //函数的括弧内没有参数时插入空格 示例 f( )
    "jslint_happy": false,              //启用jslint-strict模式
    "space_after_anon_function": false, //匿名函数的括号前加空格
    "brace_style": "collapse",          //代码样式，可选值 [collapse|expand|end-expand|none][,preserve-inline] [collapse,preserve-inline
    "unindent_chained_methods": false,  //不缩进链式方法调用
    "break_chained_methods": false,     //在随后的行中断开链式方法调用
    "keep_array_indentation": false,    //保持数组缩进
    "unescape_strings": false,          //使用xNN符号编码解码可显示的字符
    "wrap_line_length": 120
}
```