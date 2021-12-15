# openExternal

Opens a link externally using the default application. Depending on the used scheme this can be: a browser (http:, https:) or a mail client (mailto:). Such as `https://www.dcloud.io`、`mailto:ide@dcloud.io`.

#### Parameters

|parameter name	|Type	|Description			|
|--			|--			|--				|
|uri		|String		| External link address	|

#### Returns

|Type				|Description				|
|--						|--					|
|Promise&lt;Boolean&gt;	|A promise indicating if open was successful.	|

#### Example
``` javascript
var openPromise = hx.env.openExternal("https://www.dcloud.io");
openPromise.then(function(success) {
	console.log("Open link result：",success);
});
```
