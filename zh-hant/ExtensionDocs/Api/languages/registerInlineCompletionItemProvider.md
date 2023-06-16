# registerInlineCompletionItemProvider
> `从HBuilderX 3.8.5及以上版本开始支持`

注册行内代码提示程序。一种语言可以注册多个程序。在这种情况下，并行询问提供者，并合并结果。失败的提供程序（拒绝的承诺或异常）不会导致整个操作失败。

##### 参数说明

|参数名称	|参数类型														|描述									|
|--			|--																|--										|
|selector	|[DocumentSelector](/ExtensionDocs/Api/other/DocumentSelector)	|一个选择器，用于定义此程序适用的文档。	|
|provider	|[InlineCompletionItemProvider](#InlineCompletionItemProvider)	|行内代码提示内容的提供者。				|

##### 返回值

|返回类型											|描述																										|
|--													|--																											|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`|


#### InlineCompletionItemProvider

行内代码提示程序提供者接口定义了扩展和内联完成功能之间的约定。

##### 方法
provideInlineCompletionItems

###### 参数说明
|参数名称	|参数类型														|描述					|
|--			|--																|--						|
|document	|[TextDocument](/ExtensionDocs/Api/other/TextDocument)			|请求文档。				|
|position	|[Position](/ExtensionDocs/Api/other/Position)					|请求文档的位置。		|
|context	|[InlineCompletionContext](#InlineCompletionContext)			|附加信息的上下文对象。	|
|token		|[CancellationToken](/ExtensionDocs/Api/other/CancellationToken)|取消令牌。				|


###### 返回值

|返回类型										|描述						|
|--												|--							|
|[InlineCompletionList](#InlineCompletionList)	|行内代码提示程序返回的数据	|


#### InlineCompletionList

|属性名称	|属性类型										|描述							|
|--			|--												|--								|
|items		|[InlineCompletionItem[]](#InlineCompletionItem)|行内虚拟文本要展示的文本数组。	|


#### InlineCompletionContext

|属性名称				|描述						|
|--						|--							|
|selectedCompletionInfo	|							|
|triggerKind			|描述如何触发行内代码提示	|


#### InlineCompletionItem

|属性名称	|属性类型									|描述												|
|--			|--											|--													|
|insertText	|String										|行内虚拟文本要展示的文本。							|
|range?		|[Range](/ExtensionDocs/Api/other/Range)	|要替换的范围。如果未设置，将使用所请求位置的单词。	|
|command？	|[Command](/ExtensionDocs/Api/other/Command)|插入词文本后要执行的命令。							|


##### 示例

``` javascript
const inlineProvider = (document, position, context, token) => {
    // 根据document和position确定上下文。
    // 传递给语言分析工具，获取返回值
    // 将返回值格式化成插件所需格式后返回。
    return {
        items: [{
            insertText: 'insertText'
        }]
    }
}
const disposable = hx.languages.registerInlineCompletionItemProvider(
    [{
        language: 'javascript'
    }], {
        provideInlineCompletionItems: inlineProvider
    },
)
context.subscriptions.push(disposable)
```


