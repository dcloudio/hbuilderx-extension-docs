# 插件国际化@localized


什么是插件国际化？即插件支持多国家、多语言。

HBuilderX优先查找`插件扩展中的对应的翻译文件`，然后再查找语言包中对应插件扩展的翻译文件。

大多数情况下，个人开发的插件，可能无需集成到HBuilderX语言包中，如有需要，请联系HBuilderX官方。

**插件扩展的目录结构：**
```shell
插件目录 /
    package.json
    package.nls.json			主语言翻译键值对应数据
    package.nls.[语言id].json	特定语言翻译键值对应关系
```

**特别说明：**

- 本文仅适用于package.json中的键值。
- `语言id`，必须规范。请参考：[语言id列表](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)

## 插件扩展package.json

插件扩展package.json中需要进行根据HBuilderX当前语言进行翻译的值使用`%键名%`来表达。

比如`%description%`,此时HBuilderX会优先查找`插件扩展目录`中(`package.nls.json`或`package.nls.[对应语言id].json`)的翻译文件


```json
// 插件扩展package.json
{
    "name": "xxxxx",
    "description": "%description%",
    "displayName": "%displayname%",
    "version": "x.x.x"
}
```

## 插件语言国际化示例

以【markdown-share】插件为例，目录结构如下：

```shell
markdown-share /
    package.json
    package.nls.json
    package.nls.en.json	  # 英语语言包
```

插件package.json内容如下:

```JSON
{
    "name": "markdown-share",
    "description": "%description%",
    "displayName": "%displayname%"
}
```

### package.nls.json

```JSON
{
    "description": "一键分享markdown"
}
```

### package.nls.en.json

> package.nls.[对应语言id].json, 优先于package.nls.json匹配

```JSON
{
    "description": "一键分享markdown"	,
    "displayname": "一键分享"
}
```

使用该文件，插件扩展中的package.json里有包含`%description%`字样的值时，该值将会被替换成翻译文件中对应的值(如:一键分享markdown,而%displayname%被替换为一键分享)
