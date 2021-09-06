# StatusBar Message

## setStatusBarMessage

Set the status bar message at the bottom of HBuilderX

#### Parameter

|Name			|Type	|Description															|
|--					|--			|--																|
|text				|String		|Message content														|
|hideAfterTimeout	|Number		|[Optional] Timeout in milliseconds after which the message will be disposed. <br/><br/>The default value is 0: do not automatically hide		|
|level				|String		|[Optional] Message level, the values are ['warn','info','error'], default value:'info'	|

#### Returns

|Type					|Description									|
|--							|--										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|A disposable which hides the status bar message.	|


#### Example

``` javascript
hx.window.setStatusBarMessage('Verifying xxx document...', 600, 'info');
```


## clearStatusBarMessage

Clear the status bar message, this api has no parameters and no return value.

#### Example

``` javascript
hx.window.clearStatusBarMessage();
```