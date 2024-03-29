# onWillSaveTextDocument

文档即将要保存的事件,注意该事件是同步调用,会阻塞用户界面,为了避免长时间阻塞界面，目前设置了超时机制，超时时间为2s。

> 注意你在该事件回调中执行的逻辑不应该占用太长的时间，如果超时将会出现一些不可预测的问题。

## 介绍

**参数说明**

|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentWillSaveEvent](#TextDocumentWillSaveEvent))	|事件回调	|

**返回值**

|返回类型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**示例**

``` javascript
    let willSaveTextDocumentEventDispose = hx.workspace.onWillSaveTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentWillSaveEvent

**属性列表**

|属性名		|属性类型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|该事件关联的文档			|