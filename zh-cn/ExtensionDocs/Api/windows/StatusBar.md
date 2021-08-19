# 状态栏消息

## setStatusBarMessage

设置HBuilderX底部状态栏消息

##### 参数说明

|参数名称			|参数类型	|描述															|
|--					|--			|--																|
|text				|String		|消息内容														|
|hideAfterTimeout	|Number		|[可选] 多长时间后自动隐藏,单位ms，默认值是0：不自动隐藏		|
|level				|String		|[可选] 消息级别,取值有['warn'，'info'，'error'],默认值：'info'	|

##### 返回值

|返回类型					|描述									|
|--							|--										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|销毁器,可调用dispose方法清理状态栏消息	|


##### 示例

``` javascript
    hx.window.setStatusBarMessage('正在校验xxx文档...',600,'info');
```


## clearStatusBarMessage

清空状态栏消息，此api没有参数也没有返回值。

#### 示例
``` javascript
    hx.window.clearStatusBarMessage();
```