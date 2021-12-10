# WorkspaceFolder

A workspace folder is one of potentially many roots opened by the editor. All workspace folders are equal which means there is no notion of an active or primary workspace folder.

**Attribute list**

|Name	|Type			|Description			|
|--		|--					|--				|
|uri	|String or [Uri](/ExtensionDocs/Api/other/Uri)|The associated uri for this workspace folder.	|
|name	|String				|The name of this workspace folder. Defaults to the basename of its uri-path	|
|nature	|String				|Project Type		|
|id		|String				|The ordinal number of this workspace folder.|
