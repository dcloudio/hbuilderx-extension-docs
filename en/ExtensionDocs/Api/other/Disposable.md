# Disposable

Resource release interface, some API of HBuilderX will return this object. This object will be added to parameter `context.subscriptions` array when you activate extension. 
资源释放接口，HBuilderX开放的部分API返回了该对象，将该对象添加到插件激活时的参数`context.subscriptions`数组内，插件卸载时将自动释放对应的资源。

Resource release interface, some API of HBuilderX will return this object, the object is added to the `context.subscriptions` array when the extension is activated, and the related resource will be automatically released when the extension is uninstalled.

#### dispose

#### Parameter
None

#### Returns
None
