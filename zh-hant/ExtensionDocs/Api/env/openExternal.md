# openExternal

打開一個外部鏈接，比如`https://www.dcloud.io`、`mailto:ide@dcloud.io`

#### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|uri		|String		|外部鏈接地址	|

#### 返回值

|返回類型				|描述				|
|--						|--					|
|Promise&lt;Boolean&gt;	|返回是否打開成功	|

#### 示例
``` javascript
    var openPromise = hx.env.openExternal("https://www.dcloud.io");
	openPromise.then(function(success) {
		console.log("打開鏈接結果：",success);
	});
```