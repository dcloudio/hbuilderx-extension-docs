# onWillSaveTextDocument

文檔即將要保存的事件,注意該事件是同步調用,會阻塞用戶界面,爲了避免長時間阻塞界面，目前設置了超時機制，超時時間爲2s。

> 注意你在該事件回調中執行的邏輯不應該佔用太長的時間，如果超時將會出現一些不可預測的問題。

## 介紹

**參數說明**

|參數名稱	|參數類型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentWillSaveEvent](#TextDocumentWillSaveEvent))	|事件回調	|

**返回值**

|返回類型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該事件回調的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`事件回調`	|

**示例**

``` javascript
    let willSaveTextDocumentEventDispose = hx.workspace.onWillSaveTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentWillSaveEvent

**屬性列表**

|屬性名		|屬性類型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|該事件關聯的文檔			|