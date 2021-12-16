# showInputBox

Opens an input box to ask the user for input.

#### Parameter

|Name	|Type							|Description			|
|--			|--									|--				|
|options	|[InputBoxOptions](#InputBoxOptions Attribute list)|Configures the behavior of the input box.	|

#### Returns

|Type				|Description			|
|--						|--				|
|Promise&lt;String&gt;	|A promise that resolves to a string the user provided or to undefined in case of dismissal.|

#### Example

```javascript
let inputPromise = hx.window.showInputBox({
    prompt: "Password",
    password: true
});
inputPromise.then((result)=>{
    console.log("Password: ",result);
});
```

#### InputBoxOptions Attribute list

> Options to configure the behavior of the input box UI.

|Name		|Type	|Description						|
|--			|--			|--							|
|prompt		|String		|The text to display underneath the input box.				|
|value		|String		|The value to prefill in the input box.			|
|placeHolder|String		|An optional string to show as placeholder in the input box to guide the user what to type.	|
|password	|Boolean	|Controls if a password input is shown. Password input hides the typed text.		|
