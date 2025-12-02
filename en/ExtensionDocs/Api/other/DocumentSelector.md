## DocumentSelector

DocumentSelector: Document selector

A language selector is a combination of one or more language identifiers and language filters.

Note that a document selector that is just a language identifier will select all documents, even those that are not saved on disk. Only use such selectors when the feature works without further context.

- example
    * ```ts let sel:DocumentSelector = { scheme: 'file', language: 'typescript' };```
    * ```ts let sel:DocumentSelector = { language: 'json', pattern: '**/package.json' };```
