## CancellationToken

CancellationToken: 取消令牌被传递给异步或长时间运行的操作以请求取消，就像由于用户继续键入而取消对完成项的请求一样。

**属性列表**

|属性名					|属性类型	|描述								|
|--						|--			|--									|
|isCancellationRequested|Boolean	|当令牌被取消时为true，否则为false。|
|onCancellationRequested|Event<any>	|取消时触发的事件					|
