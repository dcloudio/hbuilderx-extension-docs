# registerCustomEditorProvider
`从HBuilderX 2.9.2及以上版本开始支持`

## 简介

注册指定类型的CustomEditorProvider，当用户打开匹配的文件时，在编辑器区域创建自定义编辑器标签卡。自定义编辑器使用webview提供视图显示。

#### 参数说明

|参数名称	|参数类型					|描述											|
|--		|--							|--												|
|type	|String	|自定义编辑器类型，需要首先在配置扩展点`customEditors`中声明。	|
|provider|CustomEditorProvider |用户自定义CustomEditorProvider|


#### 示例
```javascript
hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
```

## CustomDocument

> 自定义文档，用户可以继承。

##### 属性列表

|属性名		|属性类型	|描述				|
|--			|--			|--					|
|uri		|String		|本地文件地址（file:///C:/abc/test.txt），通过构造函数初始化 |

## CustomEditorProvider

> 自定义编辑器数据提供接口，用户需要继承。

#### 属性列表

|属性名		|属性类型	|描述				|
|--			|--			|--					|
|onDidChangeCustomDocument | HBuilderX内置的EventEmitter	| 用于触发文件变化事件，编辑器置为未保存状态 |

#### 代码示例
``` javascript
provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```
[CustomDocumentEditEvent](#CustomDocumentEditEvent)

### openCustomDocument

> 当用户用户打开匹配的文件时，由HBuilderX调用，开发者创建并返回CustomDocument
> 。HBuilderX在这之后会创建WebViewPanel，并调用[resolveCustomEditor](#resolveCustomEditor)。

##### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|uri	|String		|本地文件地址（file:///C:/abc/test.txt） |

##### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise&lt;[CustomDocument](#CustomDocument)&gt;	|Promise对象|

### resolveCustomEditor

> HBuilderX使用WebViewPanel来作为自定义编辑器的视图，创建WebViewPanel并与document关联后，调用该方法。
> [WebViewPanel](#WebViewPanel)的用法也可以参考[视图扩展](/views.md#WebView)中部分示例。

##### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		|由开发者创建的CustomDocument|
|webViewPanel	|[WebViewPanel](/ExtensionDocs/Api/windows/createWebView?id=webviewpanel)		|与document关联的WebViewPanel|

### saveCustomDocument

> 用户执行“保存”操作时，HBuilderX调用该方法。

##### 参数说明

|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| 保存操作对应的CustomDocument |

##### 返回值

|返回类型	|描述		|
|--			|--			|
|Promise&lt;boolean&gt; 或 boolean	|true表示成功，编辑器标签卡会移除dirty状态|

### saveCustomDocumentAs

> 用户执行“另存为”操作，选择目标文件后，HBuilderX调用该方法。成功后，HBuilderX会重新关联document与目标文件。

##### 参数说明

|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| 保存操作对应的CustomDocument |
|destination	|String		| 目标文件地址（例如：file:///C:/abc/test.txt） |

##### 返回值

|返回类型	|描述		|
|--			|--			|
|Promise&lt;boolean&gt; 或 boolean	|true表示成功，编辑器标签卡会移除dirty状态|

### CustomDocumentEditEvent
用[CustomDocument](#CustomDocument)构造CustomDocumentEditEvent对象。[CustomEditorProvider](#CustomEditorProvider)可以向HBuilderX发送该事件，编辑器标签卡会置为未保存状态。