# How to Create a Language Syntax Highlighting Plugin?

> Supported from HBuilderX 3.4.10+

* As long as the plugin contains the following fields in the `package.json` file, it can be recognized as a language syntax highlighting plugin
* The following uses markdown language as an example
```json
{
    "contributes": {
        "languages": [
            {
                "id": "markdown", //Language ID
                "firstLine?": "", //Some languages can be determined by the first line of text
                "extensions": [".md", ".markdown"], //File extensions
                "filenames?": [], //Filename matching, specific filenames are directly recognized as that file type
                "aliases": ["Python", "py"], //Provides items for quick search, the first item is displayed as a label when switching languages
            }
        ],
        "grammars": [
            {
                "language": "markdown", //Language ID
                "scopeName": "text.html.markdown", //Language top scope
                "path": "./syntaxes/markdown.tmLanguage.json", //Grammar file path, only supports local files, supports .tmLanguage and .tmLanguage.json formats
                // For grammar file reference, please see [](https://macromates.com/manual/en/language_grammars)
            }
        ]
    }
}
```