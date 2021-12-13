# registerCustomEditorProvider
`Supported from HBuilderX 2.9.2+`

A complete custom editor example: <a href="/ExtensionTutorial/customeditor" target="_blank">how to extend a custom editor?</a>

## Introduction

Register a provider for custom editors for the viewType contributed by the customEditors extension point.

#### Parameter

|Name	|Type					|Description											|
|--		|--							|--												|
|type	|String	|	Unique identifier for the custom editor provider. This should match the viewType from the customEditors contribution point.	|
|provider|CustomEditorProvider |Provider that resolves custom editors.|


#### Example
```javascript
hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
```

## CustomDocument

> Represents a custom document used by a CustomEditorProvider.

##### Attribute list

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|uri		|String		|The associated uri for this document. (File:///C:/abc/test.txt)|

## CustomEditorProvider

> Provider for editable custom editors that use a custom document model.

#### Attribute list

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|onDidChangeCustomDocument | HBuilderX built-in EventEmitter	| Signal that an edit has occurred inside a custom editor. This event must be fired by your extension whenever an edit happens in a custom editor. |

#### Example
``` javascript
provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```
[CustomDocumentEditEvent](#CustomDocumentEditEvent)

### openCustomDocument

> Create a new document for a given resource. openCustomDocument is called when the first time an editor for a given resource is opened. The opened document is then passed to resolveCustomEditor so that the editor can be shown to the user.

##### Parameter
|Name	    |Type	    |Description			|
|--			|--			|--				|
|uri	|String		|Uri of the document to open. (File:///C:/abc/test.txt) |

##### Returns
|Type	|Description		|
|--			|--			|
|Promise&lt;[CustomDocument](#CustomDocument)&gt;	|The custom document.|

### resolveCustomEditor

> Resolve a custom editor for a given resource. This is called whenever the user opens a new editor for this CustomEditorProvider.
> The usage of [WebViewPanel](#WebViewPanel) can also refer to some examples in [View Extension](/views.md#WebView).

##### Parameter
|Name	    |Type	    |Description			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		|Document for the resource being resolved.|
|webViewPanel	|[WebViewPanel](/ExtensionDocs/Api/windows/createWebView?id=webviewpanel)		|The webview panel used to display the editor UI for this resource.

|

### saveCustomDocument

> Save a custom document. This method is invoked by the editor when the user saves a custom editor. This can happen when the user triggers save while the custom editor is active, by commands such as save all, or by auto save if enabled.

##### Parameter

|Name	    |Type	    |Description			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| Document to save. |

##### Returns

|Type	|Description		|
|--			|--			|
|Promise&lt;boolean&gt; 或 boolean	|Promise signaling that saving has completed.|

### saveCustomDocumentAs

> Save a custom document to a different location. This method is invoked by the editor when the user triggers 'save as' on a custom editor. The implementer must persist the custom editor to destination.

##### Parameter

|Name	    |Type	    |Description			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| Document to save. |
|destination	|String		| Location to save to. (For example: file:///C:/abc/test.txt) |

##### Returns

|Type	|Description		|
|--			|--			|
|Promise&lt;boolean&gt; or boolean	|Promise signaling that saving has completed|

### CustomDocumentEditEvent
Event triggered by extensions to signal to the editor that an edit has occurred on an CustomDocument.
