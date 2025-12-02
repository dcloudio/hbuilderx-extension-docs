## CancellationToken

CancellationToken: A cancellation token is passed to asynchronous or long-running operations to request cancellation, like canceling a request for completion items because the user kept typing.

**Property List**

|Property Name					|Property Type	|Description								|
|--						|--			|--									|
|isCancellationRequested|Boolean	|True if the token has been cancelled, otherwise false.|
|onCancellationRequested|Event<any>	|Event that is fired when cancellation is requested					|
