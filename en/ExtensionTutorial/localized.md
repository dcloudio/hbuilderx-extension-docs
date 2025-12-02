# Plugin Internationalization@localized


What is plugin internationalization? It means that the plugin supports multiple countries and languages.

HBuilderX first looks for the `corresponding translation file in the plugin extension`, and then looks for the translation file of the corresponding plugin extension in the language pack.

In most cases, plugins developed by individuals may not need to be integrated into the HBuilderX language pack. If needed, please contact HBuilderX official.

**Directory structure of the plugin extension:**
```shell
Plugin directory /
    package.json
    package.nls.json              Main language translation key-value data
    package.nls.[language_id].json    Specific language translation key-value mapping
```

**Special Notes:**

- This article only applies to key values in package.json.
- `language_id` must be standardized. Please refer to: [Language ID List](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)

## Plugin Extension package.json

In the plugin extension package.json, values that need to be translated according to the current HBuilderX language are expressed using `%key_name%`.

For example, `%description%`, at this time HBuilderX will first look for the translation file in the `plugin extension directory` (`package.nls.json` or `package.nls.[corresponding_language_id].json`)


```json
// Plugin extension package.json
{
    "name": "xxxxx",
    "description": "%description%",
    "displayName": "%displayname%",
    "version": "x.x.x"
}
```

## Plugin Language Internationalization Example

Taking the [markdown-share] plugin as an example, the directory structure is as follows:

```shell
markdown-share /
    package.json
    package.nls.json
    package.nls.en.json    # English language pack
```

The plugin package.json content is as follows:

```JSON
{
    "name": "markdown-share",
    "description": "%description%",
    "displayName": "%displayname%"
}
```

### package.nls.json

```JSON
{
    "description": "One-click share markdown"
}
```

### package.nls.en.json

> package.nls.[corresponding_language_id].json takes precedence over package.nls.json

```JSON
{
    "description": "One-click share markdown",
    "displayname": "One-click share"
}
```

When using this file, if the package.json in the plugin extension contains a value with `%description%`, the value will be replaced with the corresponding value in the translation file (e.g., One-click share markdown, and %displayname% is replaced with One-click share)
