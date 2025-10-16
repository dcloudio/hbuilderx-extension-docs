## cliconsole 将插件内的日志输出到终端

将插件内的日志输出到终端

```js
await hx.cliconsole.log({ clientId: client_id, msg: `欢迎使用HBuilderX CLI`, status: 'Info' });
```

### 参数说明

|参数名称		|参数类型	|描述												|
|--			|--		|--													|
|clientId	|String	|必填, 具体用法参考下面的示例代码						|
|msg		|String	|													|
|status		|String	|选项：Info、Error，通常不要用Error，Error代表终止终端输出	|
|hideTime	|Boolean|控制终端消息是否显示时间日期，默认为true							|


### 示例代码
```js
let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
    // 请注意这个clientID，非常重要，可以将插件内的日志输出到终端
    let client_id = params.cliconsole.clientId;
    await hx.cliconsole.log({ clientId: client_id, msg: `欢迎使用HBuilderX CLI`, status: 'Info' });
});
context.subscriptions.push(disposable);
```

注意上面的代码，先从params中解析中`client_id`，然后调用`hx.cliconsole.log`打印消息
