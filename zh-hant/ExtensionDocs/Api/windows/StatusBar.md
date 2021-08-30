# 狀態欄消息

## setStatusBarMessage

設置HBuilderX底部狀態欄消息

##### 參數說明

|參數名稱			|參數類型	|描述															|
|--					|--			|--																|
|text				|String		|消息內容														|
|hideAfterTimeout	|Number		|[可選] 多長時間後自動隱藏,單位ms，默認值是0：不自動隱藏		|
|level				|String		|[可選] 消息級別,取值有['warn'，'info'，'error'],默認值：'info'	|

##### 返回值

|返回類型					|描述									|
|--							|--										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|銷燬器,可調用dispose方法清理狀態欄消息	|


##### 示例

``` javascript
    hx.window.setStatusBarMessage('正在校驗xxx文檔...',600,'info');
```


## clearStatusBarMessage

清空狀態欄消息，此api沒有參數也沒有返回值。

#### 示例
``` javascript
    hx.window.clearStatusBarMessage();
```