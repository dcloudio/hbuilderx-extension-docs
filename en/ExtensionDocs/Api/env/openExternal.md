# openExternal

打开一个外部链接，比如`https://www.dcloud.io`、`mailto:ide@dcloud.io`

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|uri		|String		|外部链接地址	|

#### 返回值

|返回类型				|描述				|
|--						|--					|
|Promise&lt;Boolean&gt;	|返回是否打开成功	|

#### 示例
``` javascript
    var openPromise = hx.env.openExternal("https://www.dcloud.io");
	openPromise.then(function(success) {
		console.log("打开链接结果：",success);
	});
```