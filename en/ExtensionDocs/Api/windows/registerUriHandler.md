# registerUriHandler

> 从HBuilderX 2.8.1及以上版本开始支持

注册一个依赖hbuilderx协议的自定义网络请求处理器(schema)，格式为：
```
hbuilderx://requestExtension/exampleid/examplerequest/example?example1=example2&...
\________/  \_____________/ \________/ \__________________________________________/
    |              |             |                  ｜
   协议     自定义插件请求的标记  插件id          任意的自定义信息
```

当在浏览器地址栏中输入以上格式的url时或者跳转到以上格式的url，已安装了HBuilderX的系统将会把该请求转入HBuilderX, 由HBuilderX识别该请求并检测对应插件(如上例子中名为exampleid的插件)的配置信息(package.json)中是否声明了
[onUri](/ExtensionDocs/activation_event.md#onUri), 此时如果当前的插件并没有激活，那么HBuilderX会先激活该插件并把对应请求转发到由registerUriHandler方法注册的处理器中。

如果exampleid对应插件并未安装，则HBuilderX会弹框提示是否安装该插件。

#### 适用的场景
- 需要通过浏览器等外部应用启动HBuilderX，然后通过指定插件响应请求

#### 参数说明
|参数名称	|参数类型					|描述											|
|--			|--							|--												|
|handler	|[UriHandler](#UriHandler)	|scheme的处理器									|
|context	|ExtensionContext			|插件激活方法activate中传入的(context)参数对象	|

#### 返回值
|返回类型	|描述																											|
|--			|--																												|
|Disposable	|注册的UriHandler的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该handler	|


#### 示例

```javascript
    hx.window.registerUriHandler({
        handleUri:function(uri){
            //处理scheme请求
            let path = uri.path;
            let params = uri.query;
            hx.window.showInformationMessage(uri.toString());
        }
    }, context);
```
上面的示例中，假设插件id为foo，则在浏览器地址栏中输入hbuilderx://requestExtension/foo?param=abc时，将自动激活该插件，并执行handleUri函数，uri的值即为地址栏中输入的地址，示例中uri.query的值为param=abc。


#### UriHandler
uri处理器接口

#### handleUri

**参数说明**

|参数名称	|参数类型	|描述																		|
|--			|--			|--																			|
|uri		|Uri		|scheme请求对应的uri，eg：hbuilderx://requestExtension/extensionId?foo=bar	|

**返回值**
无

