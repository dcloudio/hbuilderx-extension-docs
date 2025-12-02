# registerInlineCompletionItemProvider
> `Supported from HBuilderX 3.8.5 and above`

Register an inline completion provider. Multiple providers can be registered for a language. In this case, providers are queried in parallel, and the results are merged. A failing provider (rejected promise or exception) will not cause the entire operation to fail.

##### Parameter Description

|Parameter Name	|Parameter Type														|Description									|
|--			|--																|--										|
|selector	|[DocumentSelector](/ExtensionDocs/Api/other/DocumentSelector)	|A selector that defines the documents this provider applies to.	|
|provider	|[InlineCompletionItemProvider](#InlineCompletionItemProvider)	|Provider of inline completion content.				|

##### Return Value

|Return Type											|Description																										|
|--													|--																											|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The disposable for this event callback. You can add this object to the plugin's context.subscriptions array, and it will be automatically unregistered when the plugin is uninstalled.|


#### InlineCompletionItemProvider

The inline completion provider interface defines the contract between extensions and inline completion functionality.

##### Methods
provideInlineCompletionItems

###### Parameter Description
|Parameter Name	|Parameter Type														|Description					|
|--			|--																|--						|
|document	|[TextDocument](/ExtensionDocs/Api/other/TextDocument)			|The requested document.				|
|position	|[Position](/ExtensionDocs/Api/other/Position)					|The position in the requested document.		|
|context	|[InlineCompletionContext](#InlineCompletionContext)			|A context object with additional information.	|
|token		|[CancellationToken](/ExtensionDocs/Api/other/CancellationToken)|A cancellation token.				|


###### Return Value

|Return Type										|Description						|
|--												|--							|
|[InlineCompletionList](#InlineCompletionList)	|Data returned by the inline completion provider	|


#### InlineCompletionList

|Property Name	|Property Type										|Description							|
|--			|--												|--								|
|items		|[InlineCompletionItem[]](#InlineCompletionItem)|Array of text to be displayed as inline virtual text.	|


#### InlineCompletionContext

|Property Name				|Description						|
|--						|--							|
|selectedCompletionInfo	|							|
|triggerKind			|Describes how inline completion was triggered	|


#### InlineCompletionItem

|Property Name	|Property Type									|Description												|
|--			|--											|--													|
|insertText	|String										|The text to be displayed as inline virtual text.							|
|range?		|[Range](/ExtensionDocs/Api/other/Range)	|The range to replace. If not set, the word at the requested position will be used.	|
|command?	|[Command](/ExtensionDocs/Api/other/Command)|The command to execute after inserting the text.							|


##### Example

``` javascript
const inlineProvider = (document, position, context, token) => {
    // Determine context based on document and position.
    // Pass to language analysis tool, get return value
    // Format return value to the format required by the plugin and return.
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


