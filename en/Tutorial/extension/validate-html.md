# validate-html

### Plugin Install

The html syntax verification plug-in needs to be installed in [HBuilderX Plugin Market](https://ext.dcloud.net.cn/plugin?name=validate-html).


### configure options

After the installation is complete, enter [Settings] [Plugin Configuration] [htmlhintrc], and click `htmlhintrc` to configure related rules.

The option configuration file is `.htmlhintrc`, and the corresponding descriptions of the existing options are as follows:

| Option | Description |
| ------------------------ | ------------------------ -------------------------------- |
| tagname-lowercase | Whether to enable lowercase for tag names; `true: enable, false: disable` |
| attr-lowercase | Whether lowercase is enabled for attribute names, `true: enable, false: disable` |
| attr-value-double-quotes | Whether the attribute value must be enclosed in double quotes, `true: enable, false: disable` |
| doctype-first | Whether Doctype must be the first line of the HTML document, `true: enable, false: disable` |
| tag-pair | Whether tags must be paired, `true: enable, false: disable` |
| spec-char-escape | Whether special characters must be escaped, `true: enable, false: disable` |
| id-unique | Whether the ID attribute must be unique, `true: enable, false: disable` |
| src-not-empty | Whether the src attribute is empty, `true: enable, false: disable` |
| attr-no-duplication: | In the same tag, whether the attribute value cannot be repeated, `true: enable, false: disable` |
  
Detailed configuration instructions can refer to [htmlhint options](https://github.com/htmlhint/HTMLHint/wiki/Usage)

## How to add other options？

Modify the .htmlhintrc file and add options, such as:

```json

  {
    "attr-value-not-empty": true,     //Property value cannot be empty
    "tag-self-close": true,           //The label must be self-sealing
    "title-require": true,            //The title tag must appear in the head tag
    "inline-style-disabled": false,   //Can use inline style
    "id-class-ad-disabled": true,     //ID and Class must not use ad keywords. ID or Class using ad keywords will be blocked by ad blocking software
  }

```