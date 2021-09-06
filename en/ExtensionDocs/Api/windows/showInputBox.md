# showInputBox

An input box pops up in the middle of the window to get user input. Similar to the prompt method of the browser.

#### Parameter

|Name	|Type							|Description			|
|--			|--									|--				|
|options	|[InputBoxOptions](#InputBoxOptions Attribute list)|Input box settings	|

#### Returns

|Type				|Description			|
|--						|--				|
|Promise&lt;String&gt;	|User input result	|

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

> Input box settings

|Name		|Type	|Description						|
|--			|--			|--							|
|prompt		|String		|Description of the input box				|
|value		|String		|The default value of the input box				|
|placeHolder|String		|Placeholder content when the content of the input box is empty	|
|password	|Boolean	|Is it a password box				|