### 插件目录名称
插件的目录名称就是插件的唯一ID，不能和其他插件冲突，名称只能用英文单词，不支持用空格分割。

### package.json
所有的插件在根目录都要有一个`package.json`文件，该文件继承npm规范，并扩展了部分字段，以下列出各个字段的含义：

|字段名称				|类型	|是否必须	|描述																																					|
|--						|--		|--			|--																																						|
|name					|String	|是			|插件名称。																																				|
|displayName			|String	|是			|用于展示在插件列表中的名称。																																|
|version				|String	|是			|插件版本号，检查升级时会用到。																															|
|engines				|Object	|是			|该Object的属性至少要包含`HBuilderX`，属性值为兼容的主版本号，如果HBuilderX的版本低于该版本，将会提示用户升级HBuilderX。例如:{"HBuilderX":"^2.7.0"}。	|
|description			|String	|是			|简短的插件描述，不要超过30个字。																															|
|main					|String	|否			|插件代码入口文件，配置型插件可不填。																														|
|activationEvents		|Array	|否			|激活事件的列表，如为空，则表示该插件不会懒加载。																											|
|contributes			|Object	|否			|插件的[配置扩展点](/ExtensionDocs/ContributionPoints/README.md)。																						|
|extensionDependencies	|Array	|否			|该插件依赖的其他插件id。																																	|


### 示例

``` json
{
    "name": "helloworld",
    "displayName":"简单的插件示例",
    "description": "简单的插件示例，用于测试插件API",
    "version": "1.0.0",
    "publisher": "coder",
    "engines": {
        "HBuilderX": "^2.7.0"
    },
    "categories": [
        "Other"
    ],
    "main": "./extension",
    "activationEvents": [
        "onCommand:extension.helloWorld",
        "onView:extensions.treedemo"
    ],
    "contributes": {},
    "extensionDependencies": [
        "foo1","bar1"
    ],
    "dependencies": {}
}

```