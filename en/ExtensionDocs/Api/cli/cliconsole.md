## cliconsole Output Plugin Logs to Terminal

Output logs from within the plugin to the terminal

```js
await hx.cliconsole.log({ clientId: client_id, msg: `Welcome to HBuilderX CLI`, status: 'Info' });
```

### Parameter Description

|Parameter Name		|Parameter Type	|Description												|
|--			|--		|--													|
|clientId	|String	|Required, refer to the example code below for specific usage						|
|msg		|String	|The message to output													|
|status		|String	|Options: Info, Error. Usually don't use Error, as Error will terminate terminal output	|
|hideTime	|Boolean|Controls whether the terminal message shows date and time, default is true							|


### Example Code
```js
let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
    // Please note this clientID is very important, it can output logs from the plugin to the terminal
    let client_id = params.cliconsole.clientId;
    await hx.cliconsole.log({ clientId: client_id, msg: `Welcome to HBuilderX CLI`, status: 'Info' });
});
context.subscriptions.push(disposable);
```

Note the code above, first parse `client_id` from params, then call `hx.cliconsole.log` to print messages
