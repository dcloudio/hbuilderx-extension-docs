# registerUriHandler

> 從HBuilderX 2.8.1及以上版本開始支持

註冊一個依賴hbuilderx協議的自定義網絡請求處理器(schema)，格式爲：
```
hbuilderx://requestExtension/exampleid/examplerequest/example?example1=example2&...
\________/  \_____________/ \________/ \__________________________________________/
    |              |             |                  ｜
   協議     自定義插件請求的標記  插件id          任意的自定義信息
```

當在瀏覽器地址欄中輸入以上格式的url時或者跳轉到以上格式的url，已安裝了HBuilderX的系統將會把該請求轉入HBuilderX, 由HBuilderX識別該請求並檢測對應插件(如上例子中名爲exampleid的插件)的配置信息(package.json)中是否聲明瞭
[onUri](/ExtensionDocs/activation_event.md#onUri), 此時如果當前的插件並沒有激活，那麼HBuilderX會先激活該插件並把對應請求轉發到由registerUriHandler方法註冊的處理器中。

如果exampleid對應插件並未安裝，則HBuilderX會彈框提示是否安裝該插件。

#### 適用的場景
- 需要通過瀏覽器等外部應用啓動HBuilderX，然後通過指定插件響應請求

#### 參數說明
|參數名稱	|參數類型					|描述											|
|--			|--							|--												|
|handler	|[UriHandler](#UriHandler)	|scheme的處理器									|
|context	|ExtensionContext			|插件激活方法activate中傳入的(context)參數對象	|

#### 返回值
|返回類型	|描述																											|
|--			|--																												|
|Disposable	|註冊的UriHandler的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該handler	|


#### 示例

```javascript
    hx.window.registerUriHandler({
        handleUri:function(uri){
            //處理scheme請求
            let path = uri.path;
            let params = uri.query;
            hx.window.showInformationMessage(uri.toString());
        }
    }, context);
```
上面的示例中，假設插件id爲foo，則在瀏覽器地址欄中輸入hbuilderx://requestExtension/foo?param=abc時，將自動激活該插件，並執行handleUri函數，uri的值即爲地址欄中輸入的地址，示例中uri.query的值爲param=abc。


#### UriHandler
uri處理器接口

#### handleUri

**參數說明**

|參數名稱	|參數類型	|描述																		|
|--			|--			|--																			|
|uri		|Uri		|scheme請求對應的uri，eg：hbuilderx://requestExtension/extensionId?foo=bar	|

**返回值**
無

