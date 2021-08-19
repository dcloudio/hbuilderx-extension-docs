# showInputBox

在窗口中间居中弹出一个输入框，获取用户输入。类似于浏览器的prompt方法。

#### 参数说明

|参数名称	|参数类型							|描述			|
|--			|--									|--				|
|options	|[InputBoxOptions](#InputBoxOptions属性列表)|输入框设置	|

#### 返回值

|返回类型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|用户输入的结果	|

#### 示例

```javascript
    let inputPromise = hx.window.showInputBox({
        prompt:"请输入密码",
        password:true
    });
    inputPromise.then((result)=>{
        console.log("输入的密码为：",result);
    });
```

#### InputBoxOptions属性列表

> 输入框设置

|属性名		|属性类型	|描述						|
|--			|--			|--							|
|prompt		|String		|输入框的描述				|
|value		|String		|输入框的默认值				|
|placeHolder|String		|输入框内容为空时的占位内容	|
|password	|Boolean	|是否是密码框				|