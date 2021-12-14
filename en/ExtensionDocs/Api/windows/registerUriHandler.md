# registerUriHandler

> Supported from HBuilderX 2.8.1+

Registers a uri handler capable of handling system-wide uris, format is:
```
hbuilderx://requestExtension/exampleid/examplerequest/example?example1=example2&...
\________/  \_____________/ \________/ \__________________________________________/
    |              |             |                  ｜
  product-name      uri-schema  extension id          custom information
```

When you enter the URL of the above format in the browser address bar or jump to the URL of the above format, the system that has installed HBuilderX will forward the request to HBuilderX, and HBuilderX will recognize the request and detect the corresponding extesnion (as in the above example) Is it declared in the configuration information (package.json) of the extension named exampleid? If the current extension is not activated at this time, HBuilderX will activate the extension first and forward the request to the processor registered by the registerUriHandler method. If the extension is not installed, HBuilderX will prompt whether to install the extension.

#### Scenes
- Start HBuilderX through an external application such as a browser, and then respond to the request through the specified extension.

#### Parameter
|Name	|Type					|Description											|
|--			|--							|--												|
|handler	|[UriHandler](#UriHandler)	|The uri handler to register for this extension.									|
|context	|ExtensionContext			|Context of extension	|

#### Returns
|Type	|Description																											|
|--			|--																												|
|Disposable	|The registered UriHandler destroyer can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the handler will be automatically deregistered.	|


#### Example

```javascript
    hx.window.registerUriHandler({
        handleUri:function(uri){
            //Processing scheme request
            let path = uri.path;
            let params = uri.query;
            hx.window.showInformationMessage(uri.toString());
        }
    }, context);
```

In the above example, assuming that the extension id is foo, when you enter hbuilderx://requestExtension/foo?param=abc in the browser, the extension will be automatically activated and the handleUri function will be executed. The value of uri is the address entered in the example, the value of uri.query in the example is param=abc.


#### UriHandler
A uri handler is responsible for handling system-wide uris.

#### handleUri

**Parameter**

|Name	|Type	|Description																		|
|--			|--			|--																			|
|uri		|Uri		|	|

**Returns**
No

