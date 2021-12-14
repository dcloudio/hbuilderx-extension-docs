# Uri

A universal resource identifier representing either a file on disk or another resource, like untitled resources.

**Attribute list**

|Name		|Type	|Description				|
|--			|--			|--					|
|fsPath		|String		|The string representing the corresponding file system path of this Uri.		|
|authority	|String		|Authority is the www.msft.com part of http://www.msft.com/some/path?query#fragment. The part between the first double slashes and the next slash.	|
|fragment	|String		|Fragment is the fragment part of http://www.msft.com/some/path?query#fragment.	|
|path		|String		|Path is the /some/path part of http://www.msft.com/some/path?query#fragment.|
|query		|String		|Query is the query part of http://www.msft.com/some/path?query#fragment.|
|scheme		|String		|Scheme is the http part of http://www.msft.com/some/path?query#fragment. The part before the first colon.|
