#### The color style of code editor (including three themes: Green Soft - Default, Elegant Blue - Monokai, Cool Black - Atom One Dark)

- Default theme
```json
//Default
[
  {
      "scope": ["meta.embedded", "source.groovy.embedded"],
      "settings": {
          "foreground": "#657B83"
      }
  },
  {
      "scope": "meta.property-name",
      "settings": {
          "foreground": "#3c7a03"
      }
  },
  {
      "scope": "meta.image.inline.markdown",
      "settings": {
          "foreground": "#373224"
      }
  },
  {
      "scope": "markup.underline.link.image.markdown",
      "settings": {
          "foreground": "#1564E6"
      }
  },
  {
      "scope": "string.other.link.description.image.title.markdown",
      "settings": {
          "foreground": "#EA465C"
      }
  },
  {
      "scope": "text.html.markdown",
      "settings": {
          "foreground": "#373224"
      }
  },
  {
      "name": "Comment",
      "scope": "comment",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#93A1A1"
      }
  },
  {
      "name": "Comment",
      "scope": "punctuation.definition.comment",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#93A1A1"
      }
  },
  {
      "name": "Conditional Comment Keyword",
      "scope": "comment.conditional.keyword",
      "settings": {
          "foreground": "#859900"
      }
  },
  {
      "name": "Conditional Comment Defined",
      "scope": "comment.conditional.define",
      "settings": {
          "foreground": "#268BD2",
          "fontStyle": "bold"
      }
  },
  {
      "name": "String",
      "scope": "string",
      "settings": {
          "foreground": "#248C85"
      }
  },
  {
      "name": "String Other Link Description",
      "scope": "string.other.link.description.markdown",
      "settings": {
          "foreground": "#EA465C"
      }
  },
  {
      "name": "String Other Link Title",
      "scope": "string.other.link.title.markdown",
      "settings": {
          "foreground": "#1A9F00"
      }
  },
  {
      "name": "Regexp",
      "scope": "string.regexp",
      "settings": {
          "foreground": "#D30102"
      }
  },
  {
      "name": "Number",
      "scope": "constant.numeric",
      "settings": {
          "foreground": "#D33682"
      }
  },
  {
      "name": "Variable",
      "scope": [
          "variable.language",
          "variable.scss"
      ],
      "settings": {
          "foreground": "#268BD2"
      }
  },
  {
      "name": "Keyword",
      "scope": "keyword",
      "settings": {
          "foreground": "#859900"
      }
  },
  {
      "name": "Storage",
      "scope": "storage",
      "settings": {
          "foreground": "#073642"
      }
  },
  {
      "name": "Storage",
      "scope": "storage.type",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#364BC0"
      }
  },
  {
      "name": "Class name",
      "scope": [
          "entity.name.class",
          "entity.name.type"
      ],
      "settings": {
          "foreground": "#268BD2"
      }
  },
  {
      "name": "Function name",
      "scope": "entity.name.function",
      "settings": {
          "foreground": "#ae7a00"
      }
  },
  {
      "name": "Variable start",
      "scope": "punctuation.definition.variable",
      "settings": {
          "foreground": "#859900"
      }
  },
  {
      "name": "List Start",
      "scope": "beginning.punctuation.definition.list.markdown",
      "settings": {
          "foreground": "#4E3B00"
      }
  },
  {
      "name": "Todo",
      "scope": "punctuation.definition.todo.markdown",
      "settings": {
          "foreground": "#E60000"
      }
  },
  {
      "name": "List Start",
      "scope": "beginning.punctuation.definition.numbered.list.markdown",
      "settings": {
          "foreground": "#4E759D"
      }
  },
  {
      "name": "Embedded code markers",
      "scope": [
          "punctuation.section.embedded.begin",
          "punctuation.section.embedded.end"
      ],
      "settings": {
          "foreground": "#D30102"
      }
  },
  {
      "name": "Built-in constant",
      "scope": [
          "constant.language",
          "meta.preprocessor"
      ],
      "settings": {
          "foreground": "#B58900"
      }
  },
  {
      "name": "Support.construct",
      "scope": [
          "support.function.construct",
          "keyword.other.new"
      ],
      "settings": {
          "foreground": "#D30102"
      }
  },
  {
      "name": "User-defined constant",
      "scope": [
          "constant.character",
          "constant.other"
      ],
      "settings": {
          "foreground": "#CB4B16"
      }
  },
  {
      "name": "Inherited class",
      "scope": "entity.other.inherited-class",
      "settings": {}
  },
  {
      "name": "Function argument",
      "scope": "variable.parameter",
      "settings": {}
  },
  {
      "name": "Tag name",
      "scope": "entity.name.tag",
      "settings": {
          "foreground": "#2367C7"
      }
  },
  {
      "name": "Tag start/end",
      "scope": [
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag.end",
          "punctuation.definition.tag"
      ],
      "settings": {
          "foreground": "#2367C7"
      }
  },
  {
      "name": "Tag attribute",
      "scope": "entity.other.attribute-name",
      "settings": {
          "foreground": "#cb2d01"
      }
  },
  {
      "name": "Library function",
      "scope": "support.function",
      "settings": {
          "foreground": "#268BD2"
      }
  },
  {
      "name": "Continuation",
      "scope": "punctuation.separator.continuation",
      "settings": {
          "foreground": "#D30102"
      }
  },
  {
      "name": "Library constant",
      "scope": "support.constant",
      "settings": {}
  },
  {
      "name": "Library class/type",
      "scope": [
          "support.type",
          "support.class"
      ],
      "settings": {
          "foreground": "#3C7A03"
      }
  },
  {
      "name": "Library Exception",
      "scope": "support.type.exception",
      "settings": {
          "foreground": "#CB4B16"
      }
  },
  {
      "name": "Library variable",
      "scope": "support.other.variable",
      "settings": {}
  },
  {
      "name": "Invalid",
      "scope": "invalid",
      "settings": {}
  },
  {
      "name": "diff: header",
      "scope": [
          "meta.diff",
          "meta.diff.header"
      ],
      "settings": {
          "background": "#b58900",
          "fontStyle": "italic",
          "foreground": "#E0EDDD"
      }
  },
  {
      "name": "diff: deleted",
      "scope": "markup.deleted",
      "settings": {
          "background": "#eee8d5",
          "fontStyle": "",
          "foreground": "#dc322f"
      }
  },
  {
      "name": "Underline Link",
      "scope": "markup.underline.link.markdown",
      "settings": {
          "foreground": "#1564E6"
      }
  },
  {
      "name": "diff: changed",
      "scope": "markup.changed",
      "settings": {
          "background": "#eee8d5",
          "fontStyle": "",
          "foreground": "#cb4b16"
      }
  },
  {
      "name": "diff: inserted",
      "scope": "markup.inserted",
      "settings": {
          "background": "#eee8d5",
          "foreground": "#219186"
      }
  },
  {
      "name": "Markup Quote",
      "scope": "markup.quote.markdown",
      "settings": {
          "foreground": "#C05384",
          "fontStyle": "italic"
      }
  },
  {
      "name": "Markup Lists Numbered",
      "scope": "markup.list.numbered.markdown",
      "settings": {
          "foreground": "#35485c"
      }
  },
  {
      "name": "Markup Lists Unnumbered",
      "scope": "markup.list.unnumbered.markdown",
      "settings": {
          "foreground": "#8d634a"
      }
  },
  {
      "name": "Markup Fenced_code",
      "scope": "markup.fenced_code.block.markdown",
      "settings": {
          "foreground": "#325390",
          "background": "#FFFAE8",
          "fontStyle": "italic|filled"
      }
  },
  {
      "name": "Markup numbered list bold Styling",
      "scope": [
          "text.html.markdown markup.list.numbered.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.list.numbered.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "fontStyle": "bold",
          "foreground": "#35485c"
      }
  },
  {
      "name": "Markup txt bold Styling",
      "scope": [
          "text.html.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "fontStyle": "bold",
          "foreground": "#373224"
      }
  },
  {
      "name": "Markup h1 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h1.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h1.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#154431",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h2 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h2.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h2.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#10642c",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h3 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h3.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h3.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#09734f",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h4 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h4.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h4.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#15936d",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup quote bold Styling",
      "scope": [
          "text.html.markdown markup.quote.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.quote.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#C05384",
          "fontStyle": "bold|italic"
      }
  },
  {
      "name": "Markup unnumbered list bold Styling",
      "scope": [
          "text.html.markdown markup.list.unnumbered.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.list.unnumbered.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#8d634a",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Styling",
      "scope": "markup.bold.markdown",
      "settings": {
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Styling",
      "scope": "markup.italic.markdown",
      "settings": {
          "fontStyle": "italic"
      }
  },
  {
      "name": "Markup Dividingline",
      "scope": [
          "markup.dividingline.markdown"
      ],
      "settings": {
          "foreground": "#B7AF94"
      }
  },
  {
      "name": "Markup CommonDividingline",
      "scope": [
          "markup.commondividingline.markdown"
      ],
      "settings": {
          "foreground": "#2B2922"
      }
  },
  {
      "name": "Markup Inline",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
          "fontStyle": "",
          "foreground": "#db0eb7"
      }
  },
  {
      "name": "Markup Headings H1",
      "scope": "markup.heading.h1.markdown",
      "settings": {
          "foreground": "#154431",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H2",
      "scope": "markup.heading.h2.markdown",
      "settings": {
          "foreground": "#10642c",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H3",
      "scope": "markup.heading.h3.markdown",
      "settings": {
          "foreground": "#09734f",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H4",
      "scope": "markup.heading.h4.markdown",
      "settings": {
          "foreground": "#15936d",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Setext Header",
      "scope": "markup.heading.setext",
      "settings": {
          "fontStyle": "",
          "foreground": "#268BD2"
      }
  }
]
```


- Monokai theme

```json
//Monokai
[
  {
      "name": "Comment",
      "scope": [
          "comment"
      ],
      "settings": {
          "foreground": "#5C6370",
          "fontStyle": "italic"
      }
  },
  {
      "name": "Conditional Comment Keyword",
      "scope": "comment.conditional.keyword",
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Conditional Comment Defined",
      "scope": "comment.conditional.define",
      "settings": {
          "foreground": "#E06963",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Comment Markup Link",
      "scope": [
          "comment markup.link"
      ],
      "settings": {
          "foreground": "#5C6370"
      }
  },
  {
      "name": "Entity Name Type",
      "scope": [
          "entity.name.type"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Entity Other Inherited Class",
      "scope": [
          "entity.other.inherited-class"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "Keyword",
      "scope": [
          "keyword"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Keyword Control",
      "scope": [
          "keyword.control"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Keyword Operator",
      "scope": [
          "keyword.operator"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Keyword Other Special Method",
      "scope": [
          "keyword.other.special-method"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Keyword Other Unit",
      "scope": [
          "keyword.other.unit"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Storage",
      "scope": [
          "storage"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Storage Type Annotation,storage Type Primitive",
      "scope": [
          "storage.type.annotation",
          "storage.type.primitive"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Storage Modifier Package,storage Modifier Import",
      "scope": [
          "storage.modifier.package",
          "storage.modifier.import"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Constant",
      "scope": [
          "constant"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Constant Variable",
      "scope": [
          "constant.variable"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Constant Character Escape",
      "scope": [
          "constant.character.escape"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Constant Numeric",
      "scope": [
          "constant.numeric"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Constant Other Color",
      "scope": [
          "constant.other.color"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Constant Other Symbol",
      "scope": [
          "constant.other.symbol"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Variable",
      "scope": [
          "variable"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Variable Interpolation",
      "scope": [
          "variable.interpolation"
      ],
      "settings": {
          "foreground": "#BE5046"
      }
  },
  {
      "name": "Variable Parameter",
      "scope": [
          "variable.parameter"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "String",
      "scope": [
          "string"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "String Regexp",
      "scope": [
          "string.regexp"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "String Regexp Source Ruby Embedded",
      "scope": [
          "string.regexp source.ruby.embedded"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "String Other Link",
      "scope": [
          "string.other.link"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Punctuation Definition Comment",
      "scope": [
          "punctuation.definition.comment"
      ],
      "settings": {
          "foreground": "#858c99"
      }
  },
  {
      "name": "Punctuation Definition Method Parameters,punctuation Definition Function Parameters,punctuation Definition Parameters,punctuation Definition Separator,punctuation Definition Seperator,punctuation Definition Array",
      "scope": [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
          "punctuation.definition.separator",
          "punctuation.definition.seperator",
          "punctuation.definition.array"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Punctuation Definition Heading,punctuation Definition Identity",
      "scope": [
          "punctuation.definition.identity"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Punctuation Section Embedded",
      "scope": [
          "punctuation.section.embedded"
      ],
      "settings": {
          "foreground": "#BE5046"
      }
  },
  {
      "name": "Punctuation Section Method,punctuation Section Class,punctuation Section Inner Class",
      "scope": [
          "punctuation.section.method",
          "punctuation.section.class",
          "punctuation.section.inner-class"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Support Class",
      "scope": [
          "support.class"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Support Type",
      "scope": [
          "support.type"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Support Function",
      "scope": [
          "support.function"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Support Function Any Method",
      "scope": [
          "support.function.any-method"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Entity Name Function",
      "scope": [
          "entity.name.function"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Entity Name Class,entity Name Type Class",
      "scope": [
          "entity.name.class",
          "entity.name.type.class"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Entity Name Tag",
      "scope": [
          "entity.name.tag"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Entity Other Attribute Name",
      "scope": [
          "entity.other.attribute-name"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Entity Other Attribute Name Id",
      "scope": [
          "entity.other.attribute-name.id"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Meta Class",
      "scope": [
          "meta.class"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Meta Class Body",
      "scope": [
          "meta.class.body"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Meta Method Call,meta Method",
      "scope": [
          "meta.method-call",
          "meta.method"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Meta Definition Variable",
      "scope": [
          "meta.definition.variable"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Meta Link",
      "scope": [
          "meta.link"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Meta Require",
      "scope": [
          "meta.require"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Meta Selector",
      "scope": [
          "meta.selector"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Meta Separator",
      "scope": [
          "meta.separator"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Meta Tag",
      "scope": [
          "meta.tag"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "code block Styling",
      "scope": "markup.fenced_code.block.markdown",
      "settings": {
          "foreground": "#ABB2BF",
          "fontStyle": "italic|filled"
      }
  },
  {
      "name": "Markup Inline",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
          "fontStyle": "",
          "foreground": "#62A95D"
      }
  },
  {
      "name": "Underline",
      "scope": [
          "underline"
      ],
      "settings": {
          "text-decoration": "underline"
      }
  },
  {
      "name": "None",
      "scope": [
          "none"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Invalid Deprecated",
      "scope": [
          "invalid.deprecated"
      ],
      "settings": {
          "foreground": "#523D14",
          "background": "#E0C285"
      }
  },
  {
      "name": "Invalid Illegal",
      "scope": [
          "invalid.illegal"
      ],
      "settings": {
          "foreground": "white",
          "background": "#E05252"
      }
  },
  {
      "name": "Markup Styling",
      "scope": "markup.bold.markdown",
      "settings": {
          "foreground": "#A6ACBC",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Changed",
      "scope": [
          "markup.changed"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Markup Deleted",
      "scope": [
          "markup.deleted"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Markup Styling",
      "scope": "markup.italic.markdown",
      "settings": {
          "foreground": "#A6ACBC",
          "fontStyle": "italic"
      }
  },
  {
      "name": "Markup Heading",
      "scope": [
          "markup.heading"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Markup h1 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h1.markdown punctuation.definition.heading.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h1.markdown punctuation.definition.heading.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#154431",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h2 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h2.markdown punctuation.definition.heading.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h2.markdown punctuation.definition.heading.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#DCB864",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h3 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h3.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h3.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#51ACCA",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup h4 bold Styling",
      "scope": [
          "text.html.markdown markup.heading.h4.markdown entity.name.section.markdown markup.bold.markdown",
          "text.html.markdown markup.heading.h4.markdown entity.name.section.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#15936d",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H1",
      "scope": "markup.heading.h1.markdown",
      "settings": {
          "foreground": "#E06C75",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H2",
      "scope": "markup.heading.h2.markdown",
      "settings": {
          "foreground": "#DCB864",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H3",
      "scope": "markup.heading.h3.markdown",
      "settings": {
          "foreground": "#51ACCA",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Headings H4",
      "scope": "markup.heading.h4.markdown",
      "settings": {
          "foreground": "#62C3CC",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup Link",
      "scope": [
          "markup.link"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Markup Inserted",
      "scope": [
          "markup.inserted"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "Markup Raw",
      "scope": [
          "markup.raw"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "List Start",
      "scope": "beginning.punctuation.definition.list.markdown",
      "settings": {
          "foreground": "#C2B178"
      }
  },
  {
      "name": "List Start",
      "scope": "beginning.punctuation.definition.numbered.list.markdown",
      "settings": {
          "foreground": "#D8839D"
      }
  },
  {
      "name": "Markup Lists Unnumbered",
      "scope": "markup.list.unnumbered.markdown",
      "settings": {
          "foreground": "#C2B178"
      }
  },
  {
      "name": "Markup Lists Numbered",
      "scope": "markup.list.numbered.markdown",
      "settings": {
          "foreground": "#D8839D"
      }
  },
  {
      "name": "Markup unnumbered list bold Styling",
      "scope": [
          "text.html.markdown markup.list.unnumbered.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.list.unnumbered.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#C2B178",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markup numbered list bold Styling",
      "scope": [
          "text.html.markdown markup.list.numbered.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.list.numbered.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "fontStyle": "bold",
          "foreground": "#D8839D"
      }
  },
  {
      "name": "Markup txt bold Styling",
      "scope": [
          "text.html.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "fontStyle": "bold",
          "foreground": "#D8839D"
      }
  },
  {
      "name": "Markup quote bold Styling",
      "scope": [
          "text.html.markdown markup.quote.markdown meta.paragraph.markdown markup.bold.markdown",
          "text.html.markdown markup.quote.markdown meta.paragraph.markdown markup.bold.markdown punctuation.definition.bold.markdown"
      ],
      "settings": {
          "foreground": "#D8839D",
          "fontStyle": "bold|italic"
      }
  },
  {
      "name": "Source C Keyword Operator",
      "scope": [
          "source.c keyword.operator"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Cpp Keyword Operator",
      "scope": [
          "source.cpp keyword.operator"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Cs Keyword Operator",
      "scope": [
          "source.cs keyword.operator"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Css Property Name,source Css Property Value",
      "scope": [
          "source.css property-name",
          "source.css property-value"
      ],
      "settings": {
          "foreground": "#828997"
      }
  },
  {
      "name": "Source Css Property Name Support,source Css Property Value Support",
      "scope": [
          "source.css property-name.support",
          "source.css property-value.support"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Source Gfm Markup",
      "scope": [
          "source.gfm markup"
      ],
      "settings": {
          "-webkit-font-smoothing": "auto"
      }
  },
  {
      "name": "Source Gfm Link Entity",
      "scope": [
          "source.gfm link entity"
      ],
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "Source Go Storage Type String",
      "scope": [
          "source.go storage.type.string"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Ini Keyword Other Definition Ini",
      "scope": [
          "source.ini keyword.other.definition.ini"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Source Java Storage Modifier Import",
      "scope": [
          "source.java storage.modifier.import"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Source Java Storage Type",
      "scope": [
          "source.java storage.type"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "Source Java Keyword Operator Instanceof",
      "scope": [
          "source.java keyword.operator.instanceof"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Java Properties Meta Key Pair",
      "scope": [
          "source.java-properties meta.key-pair"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Source Java Properties Meta Key Pair > Punctuation",
      "scope": [
          "source.java-properties meta.key-pair > punctuation"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Source Js Keyword Operator",
      "scope": [
          "source.js keyword.operator"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      "scope": [
          "source.js keyword.operator.delete",
          "source.js keyword.operator.in",
          "source.js keyword.operator.of",
          "source.js keyword.operator.instanceof",
          "source.js keyword.operator.new",
          "source.js keyword.operator.typeof",
          "source.js keyword.operator.void"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
      "scope": [
          "source.json meta.structure.dictionary.json > string.quoted.json"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      "scope": [
          "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      "scope": [
          "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
          "source.json meta.structure.array.json > value.json > string.quoted.json",
          "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
          "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      "scope": [
          "source.json meta.structure.dictionary.json > constant.language.json",
          "source.json meta.structure.array.json > constant.language.json"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "Source Ruby Constant Other Symbol > Punctuation",
      "scope": [
          "source.ruby constant.other.symbol > punctuation"
      ],
      "settings": {
          "foreground": "inherit"
      }
  },
  {
      "name": "Source Python Keyword Operator Logical Python",
      "scope": [
          "source.python keyword.operator.logical.python"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "Source Python Variable Parameter",
      "scope": [
          "source.python variable.parameter"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "Meta Attribute Rust",
      "scope": [
          "meta.attribute.rust"
      ],
      "settings": {
          "foreground": "#BCC199"
      }
  },
  {
      "name": "Storage Modifier Lifetime Rust,entity Name Lifetime Rust",
      "scope": [
          "storage.modifier.lifetime.rust",
          "entity.name.lifetime.rust"
      ],
      "settings": {
          "foreground": "#33E8EC"
      }
  },
  {
      "name": "Keyword Unsafe Rust",
      "scope": [
          "keyword.unsafe.rust"
      ],
      "settings": {
          "foreground": "#CC6B73"
      }
  },
  {
      "name": "customrule",
      "scope": "customrule",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Support Type Property Name",
      "scope": "support.type.property-name",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Punctuation for Quoted String",
      "scope": "string.quoted.double punctuation",
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Support Constant",
      "scope": "support.constant",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JSON Property Name",
      "scope": "support.type.property-name.json",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      "scope": "support.type.property-name.json punctuation",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation for key-value",
      "scope": [
          "punctuation.separator.key-value.ts",
          "punctuation.separator.key-value.js",
          "punctuation.separator.key-value.tsx"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Embedded Operator",
      "scope": [
          "source.js.embedded.html keyword.operator",
          "source.ts.embedded.html keyword.operator"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Variable Other Readwrite",
      "scope": [
          "variable.other.readwrite.js",
          "variable.other.readwrite.ts",
          "variable.other.readwrite.tsx"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Support Variable Dom",
      "scope": [
          "support.variable.dom.js",
          "support.variable.dom.ts"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Support Variable Property Dom",
      "scope": [
          "support.variable.property.dom.js",
          "support.variable.property.dom.ts"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Interpolation String Punctuation",
      "scope": [
          "meta.template.expression.js punctuation.definition",
          "meta.template.expression.ts punctuation.definition"
      ],
      "settings": {
          "foreground": "#BE5046"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation Type Parameters",
      "scope": [
          "source.ts punctuation.definition.typeparameters",
          "source.js punctuation.definition.typeparameters",
          "source.tsx punctuation.definition.typeparameters"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Definition Block",
      "scope": [
          "source.ts punctuation.definition.block",
          "source.js punctuation.definition.block",
          "source.tsx punctuation.definition.block"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation Separator Comma",
      "scope": [
          "source.ts punctuation.separator.comma",
          "source.js punctuation.separator.comma",
          "source.tsx punctuation.separator.comma"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Variable Property",
      "scope": [
          "support.variable.property.js",
          "support.variable.property.ts",
          "support.variable.property.tsx"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Default Keyword",
      "scope": [
          "keyword.control.default.js",
          "keyword.control.default.ts",
          "keyword.control.default.tsx"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Instanceof Keyword",
      "scope": [
          "keyword.operator.expression.instanceof.js",
          "keyword.operator.expression.instanceof.ts",
          "keyword.operator.expression.instanceof.tsx"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Of Keyword",
      "scope": [
          "keyword.operator.expression.of.js",
          "keyword.operator.expression.of.ts",
          "keyword.operator.expression.of.tsx"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Braces/Brackets",
      "scope": [
          "meta.brace.round.js",
          "meta.array-binding-pattern-variable.js",
          "meta.brace.square.js",
          "meta.brace.round.ts",
          "meta.array-binding-pattern-variable.ts",
          "meta.brace.square.ts",
          "meta.brace.round.tsx",
          "meta.array-binding-pattern-variable.tsx",
          "meta.brace.square.tsx"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation Accessor",
      "scope": [
          "source.js punctuation.accessor",
          "source.ts punctuation.accessor",
          "source.tsx punctuation.accessor"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation Terminator Statement",
      "scope": [
          "punctuation.terminator.statement.js",
          "punctuation.terminator.statement.ts",
          "punctuation.terminator.statement.tsx"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Array variables",
      "scope": [
          "meta.array-binding-pattern-variable.js variable.other.readwrite.js",
          "meta.array-binding-pattern-variable.ts variable.other.readwrite.ts",
          "meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Support Variables",
      "scope": [
          "source.js support.variable",
          "source.ts support.variable",
          "source.tsx support.variable"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Support Variables",
      "scope": [
          "variable.other.constant.property.js",
          "variable.other.constant.property.ts",
          "variable.other.constant.property.tsx"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Keyword New",
      "scope": [
          "keyword.operator.new.ts",
          "keyword.operator.new.j",
          "keyword.operator.new.tsx"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] TS Keyword Operator",
      "scope": [
          "source.ts keyword.operator",
          "source.tsx keyword.operator"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Punctuation Parameter Separator",
      "scope": [
          "punctuation.separator.parameter.js",
          "punctuation.separator.parameter.ts",
          "punctuation.separator.parameter.tsx "
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Import",
      "scope": [
          "constant.language.import-export-all.js",
          "constant.language.import-export-all.ts"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JSX/TSX Import",
      "scope": [
          "constant.language.import-export-all.jsx",
          "constant.language.import-export-all.tsx"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Keyword Control As",
      "scope": [
          "keyword.control.as.js",
          "keyword.control.as.ts",
          "keyword.control.as.jsx",
          "keyword.control.as.tsx"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Variable Alias",
      "scope": [
          "variable.other.readwrite.alias.js",
          "variable.other.readwrite.alias.ts",
          "variable.other.readwrite.alias.jsx",
          "variable.other.readwrite.alias.tsx"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Constants",
      "scope": [
          "variable.other.constant.js",
          "variable.other.constant.ts",
          "variable.other.constant.jsx",
          "variable.other.constant.tsx"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Export Variable",
      "scope": [
          "meta.export.default.js variable.other.readwrite.js",
          "meta.export.default.ts variable.other.readwrite.ts"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Template Strings Punctuation Accessor",
      "scope": [
          "source.js meta.template.expression.js punctuation.accessor",
          "source.ts meta.template.expression.ts punctuation.accessor",
          "source.tsx meta.template.expression.tsx punctuation.accessor"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Import equals",
      "scope": [
          "source.js meta.import-equals.external.js keyword.operator",
          "source.jsx meta.import-equals.external.jsx keyword.operator",
          "source.ts meta.import-equals.external.ts keyword.operator",
          "source.tsx meta.import-equals.external.tsx keyword.operator"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Type Module",
      "scope": "entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx",
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Meta Class",
      "scope": "meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Property Definition Variable",
      "scope": [
          "meta.definition.property.js variable",
          "meta.definition.property.ts variable",
          "meta.definition.property.jsx variable",
          "meta.definition.property.tsx variable"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Meta Type Parameters Type",
      "scope": [
          "meta.type.parameters.js support.type",
          "meta.type.parameters.jsx support.type",
          "meta.type.parameters.ts support.type",
          "meta.type.parameters.tsx support.type"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Meta Tag Keyword Operator",
      "scope": [
          "source.js meta.tag.js keyword.operator",
          "source.jsx meta.tag.jsx keyword.operator",
          "source.ts meta.tag.ts keyword.operator",
          "source.tsx meta.tag.tsx keyword.operator"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Meta Tag Punctuation",
      "scope": [
          "meta.tag.js punctuation.section.embedded",
          "meta.tag.jsx punctuation.section.embedded",
          "meta.tag.ts punctuation.section.embedded",
          "meta.tag.tsx punctuation.section.embedded"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Meta Array Literal Variable",
      "scope": [
          "meta.array.literal.js variable",
          "meta.array.literal.jsx variable",
          "meta.array.literal.ts variable",
          "meta.array.literal.tsx variable"
      ],
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Module Exports",
      "scope": [
          "support.type.object.module.js",
          "support.type.object.module.jsx",
          "support.type.object.module.ts",
          "support.type.object.module.tsx"
      ],
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JSON Constants",
      "scope": [
          "constant.language.json"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Object Constants",
      "scope": [
          "variable.other.constant.object.js",
          "variable.other.constant.object.jsx",
          "variable.other.constant.object.ts",
          "variable.other.constant.object.tsx"
      ],
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Properties Keyword",
      "scope": [
          "storage.type.property.js",
          "storage.type.property.jsx",
          "storage.type.property.ts",
          "storage.type.property.tsx"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Single Quote Inside Templated String",
      "scope": [
          "meta.template.expression.js string.quoted punctuation.definition",
          "meta.template.expression.jsx string.quoted punctuation.definition",
          "meta.template.expression.ts string.quoted punctuation.definition",
          "meta.template.expression.tsx string.quoted punctuation.definition"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS Backtick inside Templated String",
      "scope": [
          "meta.template.expression.js string.template punctuation.definition.string.template",
          "meta.template.expression.jsx string.template punctuation.definition.string.template",
          "meta.template.expression.ts string.template punctuation.definition.string.template",
          "meta.template.expression.tsx string.template punctuation.definition.string.template"
      ],
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] JS/TS In Keyword for Loops",
      "scope": [
          "keyword.operator.expression.in.js",
          "keyword.operator.expression.in.jsx",
          "keyword.operator.expression.in.ts",
          "keyword.operator.expression.in.tsx"
      ],
      "settings": {
          "foreground": "#C678DD"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Constants Other",
      "scope": "source.python constant.other",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Constants",
      "scope": "source.python constant",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Placeholder Character",
      "scope": "constant.character.format.placeholder.other.python storage",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Magic",
      "scope": "support.variable.magic.python",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Meta Function Parameters",
      "scope": "meta.function.parameters.python",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Function Separator Annotation",
      "scope": "punctuation.separator.annotation.python",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Python Function Separator Punctuation",
      "scope": "punctuation.separator.parameters.python",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Fields",
      "scope": "entity.name.variable.field.cs",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Keyword Operators",
      "scope": "source.cs keyword.operator",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Variables",
      "scope": "variable.other.readwrite.cs",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Variables Other",
      "scope": "variable.other.object.cs",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Property Other",
      "scope": "variable.other.object.property.cs",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Property",
      "scope": "entity.name.variable.property.cs",
      "settings": {
          "foreground": "#61AFEF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] CSharp Storage Type",
      "scope": "storage.type.cs",
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Rust Unsafe Keyword",
      "scope": "keyword.other.unsafe.rust",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Markdown Raw Block",
      "scope": "markup.raw.block.markdown",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Shell Variables Punctuation Definition",
      "scope": "punctuation.definition.variable.shell",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Css Support Constant Value",
      "scope": "support.constant.property-value.css",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Css Punctuation Definition Constant",
      "scope": "punctuation.definition.constant.css",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Sass Punctuation for key-value",
      "scope": "punctuation.separator.key-value.scss",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Sass Punctuation for constants",
      "scope": "punctuation.definition.constant.scss",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Sass Punctuation for key-value",
      "scope": "meta.property-list.scss punctuation.separator.key-value.scss",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Java Storage Type Primitive Array",
      "scope": "storage.type.primitive.array.java",
      "settings": {
          "foreground": "#E5C07B"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Markdown heading setext",
      "scope": "markup.heading.setext",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Markup Fenced_code",
      "scope": "markup.fenced_code.block.markdown",
      "settings": {
          "foreground": "#7388C1",
          "background": "#282C35",
          "fontStyle": "italic|filled"
      }
  },
  {
      "scope": ["meta.embedded", "source.groovy.embedded"],
      "settings": {
          "foreground": "#7388C1"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.markdown",
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "Markup Quote",
      "scope": "markup.quote.markdown",
      "settings": {
          "foreground": "#B975D8",
          "fontStyle": "italic"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      "scope": [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "punctuation.definition.metadata.markdown"
      ],
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Underline Link",
      "scope": "markup.underline.link.markdown",
      "settings": {
          "foreground": "#42B0DA"
      }
  },
  {
      "scope": "markup.underline.link.image.markdown",
      "settings": {
          "foreground": "#F1A36C"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
      "scope": [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown"
      ],
      "settings": {
          "foreground": "#56B6C2"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Ruby Punctuation Separator Variable",
      "scope": "punctuation.separator.variable.ruby",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Ruby Other Constant Variable",
      "scope": "variable.other.constant.ruby",
      "settings": {
          "foreground": "#D19A66"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] Ruby Keyword Operator Other",
      "scope": "keyword.operator.other.ruby",
      "settings": {
          "foreground": "#98C379"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] PHP Punctuation Variable Definition",
      "scope": "punctuation.definition.variable.php",
      "settings": {
          "foreground": "#E06C75"
      }
  },
  {
      "name": "[VSCODE-CUSTOM] PHP Meta Class",
      "scope": "meta.class.php",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "unquoted",
      "scope": "string.unquoted.label",
      "settings": {
          "foreground": "#ABB2BF"
      }
  },
  {
      "name": "Text Styling Vue",
      "scope": [
          "text.html.vue"
      ],
      "settings": {
          "foreground": "#9FB2BF"
      }
  },
  {
      "name": "Text Styling Vue Comment",
      "scope": [
          "comment.block"
      ],
      "settings": {
          "foreground": "#858c99"
      }
  },
  {
      "name": "Text Styling Vue Comment Line",
      "scope": [
          "comment.line.double-slash"
      ],
      "settings": {
          "foreground": "#858c99"
      }
  }
  
]
```

- Atom One Dark theme

```json
//Atom One Dark
[
  {
      "settings": {
          "background": "#272822",
          "foreground": "#F8F8F2"
      }
  },
  {
      "scope": [
          "meta.embedded",
          "source.groovy.embedded"
      ],
      "settings": {
          "foreground": "#F8F8F2"
      }
  },
  {
      "name": "Comment",
      "scope": "comment",
      "settings": {
          "foreground": "#75715E"
      }
  },
  {
      "name": "Comment",
      "scope": "punctuation.definition.comment",
      "settings": {
          "foreground": "#75715E"
      }
  },
  {
      "name": "Conditional Comment Keyword",
      "scope": "comment.conditional.keyword",
      "settings": {
          "foreground": "#F92672"
      }
  },
  {
      "name": "Conditional Comment Defined",
      "scope": "comment.conditional.define",
      "settings": {
          "foreground": "#F8F8F2",
          "fontStyle": "bold"
      }
  },
  {
      "name": "String",
      "scope": "string",
      "settings": {
          "foreground": "#E6DB74"
      }
  },
  {
      "name": "Template Definition",
      "scope": [
          "punctuation.definition.template-expression",
          "punctuation.section.embedded"
      ],
      "settings": {
          "foreground": "#F92672"
      }
  },
  {
      "name": "Reset JavaScript string interpolation expression",
      "scope": [
          "meta.template.expression"
      ],
      "settings": {
          "foreground": "#F8F8F2"
      }
  },
  {
      "name": "Number",
      "scope": "constant.numeric",
      "settings": {
          "foreground": "#AE81FF"
      }
  },
  {
      "name": "Built-in constant",
      "scope": "constant.language",
      "settings": {
          "foreground": "#AE81FF"
      }
  },
  {
      "name": "User-defined constant",
      "scope": "constant.character, constant.other",
      "settings": {
          "foreground": "#AE81FF"
      }
  },
  {
      "name": "Variable",
      "scope": "variable",
      "settings": {
          "fontStyle": "",
          "foreground": "#F8F8F2"
      }
  },
  {
      "name": "Keyword",
      "scope": "keyword",
      "settings": {
          "foreground": "#F92672"
      }
  },
  {
      "name": "PropertyName",
      "scope": "support.type.property-name",
      "settings": {
          "foreground": "#9cdcfe"
      }
  },
  {
      "name": "Storage",
      "scope": "storage",
      "settings": {
          "fontStyle": "",
          "foreground": "#F92672"
      }
  },
  {
      "name": "Storage type",
      "scope": "storage.type",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#66D9EF"
      }
  },
  {
      "name": "Class name",
      "scope": "entity.name.type, entity.name.class",
      "settings": {
          "fontStyle": "underline",
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "Inherited class",
      "scope": "entity.other.inherited-class",
      "settings": {
          "fontStyle": "italic underline",
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "Function name",
      "scope": "entity.name.function",
      "settings": {
          "fontStyle": "",
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "Function argument",
      "scope": "variable.parameter",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#FD971F"
      }
  },
  {
      "name": "Tag name",
      "scope": "entity.name.tag",
      "settings": {
          "fontStyle": "",
          "foreground": "#F92672"
      }
  },
  {
      "name": "Tag attribute",
      "scope": "entity.other.attribute-name",
      "settings": {
          "fontStyle": "",
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "Library function",
      "scope": "support.function",
      "settings": {
          "fontStyle": "",
          "foreground": "#66D9EF"
      }
  },
  {
      "name": "Library constant",
      "scope": "support.constant",
      "settings": {
          "fontStyle": "",
          "foreground": "#66D9EF"
      }
  },
  {
      "name": "Library class/type",
      "scope": "support.type, support.class",
      "settings": {
          "fontStyle": "italic",
          "foreground": "#66D9EF"
      }
  },
  {
      "name": "Library variable",
      "scope": "support.other.variable",
      "settings": {
          "fontStyle": ""
      }
  },
  {
      "name": "Invalid",
      "scope": "invalid",
      "settings": {
          "background": "#F92672",
          "fontStyle": "",
          "foreground": "#F8F8F0"
      }
  },
  {
      "name": "Invalid deprecated",
      "scope": "invalid.deprecated",
      "settings": {
          "background": "#AE81FF",
          "foreground": "#F8F8F0"
      }
  },
  {
      "name": "JSON String",
      "scope": "meta.structure.dictionary.json string.quoted.double.json",
      "settings": {
          "foreground": "#CFCFC2"
      }
  },
  {
      "name": "diff.header",
      "scope": "meta.diff, meta.diff.header",
      "settings": {
          "foreground": "#75715E"
      }
  },
  {
      "name": "diff.deleted",
      "scope": "markup.deleted",
      "settings": {
          "foreground": "#F92672"
      }
  },
  {
      "name": "diff.inserted",
      "scope": "markup.inserted",
      "settings": {
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "diff.changed",
      "scope": "markup.changed",
      "settings": {
          "foreground": "#E6DB74"
      }
  },
  {
      "scope": "constant.numeric.line-number.find-in-files - match",
      "settings": {
          "foreground": "#AE81FFA0"
      }
  },
  {
      "scope": "entity.name.filename.find-in-files",
      "settings": {
          "foreground": "#E6DB74"
      }
  },
  {
      "name": "Markup Quote",
      "scope": "markup.quote",
      "settings": {
          "foreground": "#F92672"
      }
  },
  {
      "name": "Markup Lists",
      "scope": "markup.list",
      "settings": {
          "foreground": "#E6DB74"
      }
  },
  {
      "name": "Markup Styling",
      "scope": "markup.bold, markup.italic",
      "settings": {
          "foreground": "#66D9EF"
      }
  },
  {
      "name": "Markup Inline",
      "scope": "markup.inline.raw",
      "settings": {
          "fontStyle": "",
          "foreground": "#FD971F"
      }
  },
  {
      "name": "Markup Headings",
      "scope": "markup.heading",
      "settings": {
          "foreground": "#A6E22E"
      }
  },
  {
      "name": "Markup Setext Header",
      "scope": "markup.heading.setext",
      "settings": {
          "fontStyle": "",
          "foreground": "#A6E22E"
      }
  },
  {
      "scope": "token.info-token",
      "settings": {
          "foreground": "#6796e6"
      }
  },
  {
      "scope": "token.warn-token",
      "settings": {
          "foreground": "#cd9731"
      }
  },
  {
      "scope": "token.error-token",
      "settings": {
          "foreground": "#f44747"
      }
  },
  {
      "scope": "token.debug-token",
      "settings": {
          "foreground": "#b267e6"
      }
  },
  {
      "name": "this.self",
      "scope": "variable.language",
      "settings": {
          "foreground": "#FD971F"
      }
  },
  {
      "name": "Markdown h1 bold Styling",
      "scope": [
          "markup.heading.h1.markdown"
      ],
      "settings": {
          "foreground": "#39F689",
          "fontStyle": "bold"
      }
  }, {
      "name": "Markdown h2 bold Styling",
      "scope": [
          "markup.heading.h2.markdown"
      ],
      "settings": {
          "foreground": "#5AE6FF",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markdown h3 bold Styling",
      "scope": [
          "markup.heading.h3.markdown"
      ],
      "settings": {
          "foreground": "#FFF284",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Markdown h4 bold Styling",
      "scope": [
          "markup.heading.h4.markdown"
      ],
      "settings": {
          "foreground": "#FF7A51",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Text Styling",
      "scope": [
          "text.html.markdown"
      ],
      "settings": {
          "foreground": "#E6E6E6"
      }
  },
  {
      "name": "Bold Styling",
      "scope": [
          "markup.bold.markdown"
      ],
      "settings": {
          "foreground": "#f778bd",
          "fontStyle": "bold"
      }
  },
  {
      "name": "Italic Styling",
      "scope": [
          "markup.italic.markdown"
      ],
      "settings": {
          "foreground": "#F6FF00",
          "fontStyle": "italic"
      }
  },
  {
      "name": "Unnumbered List Styling",
      "scope": [
          "markup.list.unnumbered.markdown"
      ],
      "settings": {
          "foreground": "#F3C089"
      }
  },
  {
      "name": "Numbered List Styling",
      "scope": [
          "markup.list.numbered.markdown"
      ],
      "settings": {
          "foreground": "#E2FFBC"
      }
  },
  {
      "name": "quote Styling",
      "scope": [
          "markup.quote.markdown"
      ],
      "settings": {
          "foreground": "#FF7CBF"
      }
  },
  {
      "name": "link inline Styling",
      "scope": [
          "meta.link.inline.markdown"
      ],
      "settings": {
          "foreground": "#C9C9C9"
      }
  },
  {
      "name": "other link title Styling",
      "scope": [
          "string.other.link.title.markdown"
      ],
      "settings": {
          "foreground": "#1A9F00"
      }
  },
  {
      "name": "markup underline link Styling",
      "scope": [
          "markup.underline.link.markdown"
      ],
      "settings": {
          "foreground": "#5193FF"
      }
  },
  {
      "name": "link inline Styling",
      "scope": [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown"
      ],
      "settings": {
          "foreground": "#C9C9C9"
      }
  },
  {
      "name": "link underline Styling",
      "scope": "markup.underline.link.image.markdown",
      "settings": {
          "foreground": "#5193FF"
      }
  },
  {
      "name": "link title Styling",
      "scope": "string.other.link.description.markdown",
      "settings": {
          "foreground": "#FF7800"
      }
  },
  {
      "name": "code inline string Styling",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
          "foreground": "#FA00D2"
      }
  },
  {
      "name": "code block Styling",
      "scope": "markup.fenced_code.block.markdown",
      "settings": {
          "foreground": "#B082FF",
          "background": "#272822",
          "fontStyle": "italic|filled"
      }
  },
  {
      "name": "dividingline Styling",
      "scope": "markup.dividingline.markdown",
      "settings": {
          "foreground": "#9E9E9E"
      }
  }
  
]
```
