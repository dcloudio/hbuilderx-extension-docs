## DocumentSelector

DocumentSelector: 文档选择器

语言选择器是一个或多个语言标识符和语言过滤器的组合。

请注意，文档选择器只是一个语言标识符，它会选择所有文档，甚至是那些没有保存在磁盘上的文档。仅当功能在没有进一步上下文的情况下工作时才使用此类选择器。

- example
    * ```ts let sel:DocumentSelector = { scheme: 'file', language: 'typescript' };```
    * ```ts let sel:DocumentSelector = { language: 'json', pattern: '**/package.json' };```
