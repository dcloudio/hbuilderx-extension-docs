# 如何创建语言语法高亮支持插件?

> HBuilderX 3.4.10版本起支持

* 插件只要在`package.json`文件中, 包含以下字段, 即可被识别为语言语法高亮插件
* 以下使用markdown语言做例子
```json
{
    "contributes": {
        "languages": [
            {
                "id": "markdown", //语言ID
                "firstLine?": "", //部分语言可以根据第一行文字来进行判断是否是需要的语言
                "extensions": [".md", ".markdown"], //文件后缀
                "filenames?": [], //文件名匹配, 特定的文件名直接识别为该文件
                "aliases": ["Python", "py"], //提供可供快捷搜索的项目, 第一项作为切换语言时显示的标签
            }
        ],
        "grammars": [
            {
                "language": "markdown", //语言ID
                "scopeName": "text.html.markdown", //语言top scope
                "path": "./syntaxes/markdown.tmLanguage.json", //grammar文件地址, 只支持本地文件, 支持后缀为.tmLanguage和.tmLanguage.json两种格式
                // grammar文件请参考[](https://macromates.com/manual/en/language_grammars)
            }
        ]
    }
}
```