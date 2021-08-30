### 插件目錄名稱
插件的目錄名稱就是插件的唯一ID，不能和其他插件衝突，名稱只能用英文單詞，不支持用空格分割。

### package.json
所有的插件在根目錄都要有一個`package.json`文件，該文件繼承npm規範，並擴展了部分字段，以下列出各個字段的含義：

|字段名稱				|類型	|是否必須	|描述																																					|
|--						|--		|--			|--																																						|
|name					|String	|是			|插件名稱																																				|
|displayName			|String	|是			|用於展示在插件列表中的名稱																																|
|version				|String	|是			|插件版本號，檢查升級時會用到																															|
|engines				|Object	|是			|該Object的屬性至少要包含`HBuilderX`，屬性值爲兼容的主版本號，如果HBuilderX的版本低於該版本，將會提示用戶升級HBuilderX。例如:{"HBuilderX":"^2.7.0"}。	|
|description			|String	|是			|簡短的插件描述，不要超過30個字																															|
|main					|String	|否			|插件代碼入口文件，配置型插件可不填																														|
|activationEvents		|Array	|否			|激活事件的列表，如爲空，則表示該插件不會懶加載																											|
|contributes			|Object	|否			|插件的[配置擴展點](/ExtensionDocs/ContributionPoints/README.md)																						|
|extensionDependencies	|Array	|否			|該插件依賴的其他插件id																																	|


### 示例

``` json
{
    "name": "helloworld",
    "displayName":"簡單的插件示例",
    "description": "簡單的插件示例，用於測試插件API",
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