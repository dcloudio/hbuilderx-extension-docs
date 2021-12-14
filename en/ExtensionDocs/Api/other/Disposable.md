# Disposable

Represents a type which can release resources, such as event listening or a timer. Some API of HBuilderX will return this object, the object is added to the `context.subscriptions` array when the extension is activated, and the related resource will be automatically released when the extension is uninstalled.

#### dispose

#### Parameter
None

#### Returns
None
