# Formator-Prettier

## 簡介

此插件用於格式化less、sass、vue、stylus、ts、yaml代碼

此插件需要到[插件市場](https://ext.dcloud.net.cn/plugin?id=2025)下載

## 配置文件

點擊菜單【工具】 -> 【設置】 -> 【插件配置】 -> prettier -> prettier.config.js，即可打開配置文件。


## 如何配置格式化選項？

格式化選項配置文件是prettier.config.js,裏面對應的選項說明如下：

- printWidth： 控制單行最大長度
- semi： 控制每條語句是否加上分號
- tabWidth： 控制一個tab對應的空格數
- useTabs： 控制縮進用tab還是space
- singleQuote：控制字符串是用單引號還是雙引號
- trailingComma： 是否去掉末尾的逗號
- bracketSpacing： 控制json對象括號前後是否加上空格

詳細的配置說明可以參考[options](https://prettier.io/docs/en/options.html)

## 如何支持新的語言？
1. 修改package.json配置，添加要支持的新的語言的文件後綴
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
            "foo"//文件後綴名
        ]
    }
}
~~~
2. 修改prettier.config.js,將新添加的語言配置到對應的格式化處理器上。
~~~
parsers: {
    ".jsx": "flow",
    ".scss": "scss",
    ".ts": "typescript",
    ".less": "css",
    ".vue": "vue",
    ".ux": "vue",
    ".yml": "yaml",
    ".foo":"flow"//文件後綴名對應的格式化處理器
}
~~~

## 示例Gif

<img src="/static/snapshots/tutorial/prettier.gif" style="zoom:80%; border: 1px solid #eee;" />