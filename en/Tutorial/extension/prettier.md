# Formator-Prettier

## Introduction

This plugin is used to format `less`, `sass`, `vue`, `stylus`, `ts`, `yaml` code.

This plugin needs to be downloaded from [HBuilderX Plugin Market](https://ext.dcloud.net.cn/plugin?id=2025)

## Config File

Click the menu [Tools] -> [Settings] -> [Plugin Configuration] -> prettier -> prettier.config.js to open the configuration file.

<img src="/static/snapshots/plugins/plugin_prettier.png" style="zoom: 45%; border: 1px solid #eee;border-radius: 20px;"/>

## Format options

The formatting options configuration file is `prettier.config.js`, and the corresponding options are described as follows:

- printWidth： Specify the line length that the printer will wrap on.
- semi： Print semicolons at the ends of statements. options: true|false.
- tabWidth： Specify the number of spaces per indentation-level.
- useTabs： Indent lines with tabs instead of spaces.
- singleQuote：Use single quotes instead of double quotes.
- trailingComma： Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
- bracketSpacing： Print spaces between brackets in object literals. options: true|false.

Detailed configuration instructions can refer to [prettier options](https://prettier.io/docs/en/options.html)

## How to support new languages？
1. Modify the package.json configuration and add the file suffix of the new language to be supported
~~~
"contributes": {
    "formator": {
        "name": "Prettier",
        "class": "prettier_service.js",
        "filetypes": [
            "less",
            "sass",
            "scss",
            "vue",
            "ux",
            "ts",
            "foo"//File extension name
        ]
    }
}
~~~
2. Modify prettier.config.js to configure the newly added language to the corresponding formatting processor.
~~~
parsers: {
    ".jsx": "flow",
    ".scss": "scss",
    ".ts": "typescript",
    ".less": "css",
    ".vue": "vue",
    ".ux": "vue",
    ".yml": "yaml",
    ".foo":"flow"//文件后缀名对应的格式化处理器
}
~~~

## Example

<img src="/static/snapshots/tutorial/prettier.gif" style="zoom:80%; border: 1px solid #eee;" />