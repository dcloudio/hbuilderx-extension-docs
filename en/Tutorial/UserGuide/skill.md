# Effective geek skills

Generally, ide and editor are two product categories.

IDE focuses on the grammatical analysis, prompting, transition to definition, and debugging of a certain language. Generally heavier.

The editor is for general text processing, providing more efficient general text processing capabilities, relatively lightweight, but insufficient grammatical analysis capabilities.

HBuilderX, positioning is the perfect combination of ide and editor, then HBuilderX will provide lightweight and world-class efficient word processing capabilities.

After reading these, you will be amazed, it turns out that geeks play like this.

### Drag-free selection

Dragging and selecting a piece of text with the mouse is an easy operation to make the index finger cramp. Especially the touchpad is more painful. But reciting many related shortcuts is just as painful.

HBuilderX provides a more friendly way: `smart double-click` and `Ctrl+ Enlarge selection`.

### Smart double-click

In HBuilderX, any characters with special points can be double-clicked intelligently.

- Double-click the inside of `quotation marks/brackets` to select the content in `quotation marks/brackets`
- Double-click on both sides of the `comma` to select a paragraph before or after the comma
- Double-click the `end of line` to select the line (without carriage return)
- Double-click the `conjunction symbol` (-_) to select the entire word
- Double-click the beginning of the content at the beginning of the collapsed line and select the collapsed paragraph
- Double-click `line beginning indentation` to select the same indented paragraph
- Double click `list symbol` to select the list paragraph
- Double-click the beginning or end of `Tag` to select the entire tag
- Double-click the attribute assignment equal sign `=`, select the Html attribute
- Double-click on keywords such as `if`, `function`, etc. to select the entire enclosing area
- Double click `semicolon`, select js and other languages; paragraph before semicolon
- Double-click on the left side of the `css` class name and select the Css class
- Double click `Comment symbol` to select the comment area
- Double click `#` to select markdown title paragraph
- Double-click the beginning of the grammar delimiter to select markdown images, hyperlinks, bold, italic, code and other grammatical areas
- [JSON smart double-click](/Tutorial/Language/json?id=Smart double-click, quickly select an array or key-value pair)

The following is a gif legend, double-click to select the tag and surround the parent tag

1. Double-click the beginning or end of `div tag` to select this `tag`, which is the left side of the beginning `<` or the right side of the end `>`. Of course, double-click `if`, double-click `indentation`, double-click `inside bracket quotation mark`...many positions can be selected by smart double-clicking. See the selection menu of HBuilder for details.
2. Press `Ctrl+]` to surround, you can add parent tags at the beginning and end of this selection, and the cursor blinks at the same time. If you are in js, pressing `Ctrl+]` does not enclose the tag, but encloses libraries such as `if`, `for`, etc., so that you can quickly put a piece of code into the `if` block.
3. Enter `div` to add surrounding tags at the beginning and end

<img src="/static/snapshots/tutorial/skill/dbclick.gif" />

### Multi-cursor

<img src="/static/snapshots/tutorial/skill/more_cursor_en.gif" />


### Expand the constituency

`=` is the default key position of `+`, so `Ctrl+=` is actually pressing the `Ctrl` key and the `+` sign together.

In HBuilderX, you can intelligently judge the selection area, continue to expand the selection area, and quickly select the selection area you need without the mouse.

<img src="/static/snapshots/tutorial/skill/selection_expand.gif" />


### Anti-encirclement

1. Double-click the beginning of tag p to select the tag.
2. Press "Ctrl+Shift+]" to remove the tag p and automatically process the indentation of the child nodes.

<img src="/static/snapshots/tutorial/skill/selection_1.gif" />

One more thing to mention here is HBuilderX's concept of shortcut keys, which is symbolization, not alphabetization. The shortcut keys of many tools are control keys + function a letter in English words, which is extremely difficult to remember.

Symbolization makes it easier to memorize shortcut keys, such as `Ctrl+]` for enclosing.

The reverse operation or enhancement operation is generally to add `Shift`, for example, `Ctrl+Shift+]` is anti-enclosure.

### Select the same grammatical word and skip a word

1. In the figure below, using the normal selection of the same word `Ctrl+e` (MacOSX: `Cmd+d`), all divs will be selected. But using `Ctrl+Shift+e` (MacOSX: `Cmd+Shift+d`), it will intelligently recognize the grammar and eliminate irrelevant words.
2. In the following figure, press to select the same grammatical word, and at the same time select the `div` at the beginning and end of the `tag`, but not the div of the child node.
3. Then you can easily rename the original `div` to `p`

<img src="/static/snapshots/tutorial/skill/selection_2.gif" />

Remark:
-If you want to choose matching parentheses, you cannot rely on the same words. Selecting the same grammatical word will select the matching 2 left and right brackets
-Batch selection of all the same words is `Ctrl+Alt+e` (MacOSX: `ctrl+alt+d`)

### Select All Reference Symbols

Menu【Select】【Select All Reference Symbols】

MacOSX shortcut keys：`command+shift+d`

Windows shortcut keys：`ctrl+shift+e`

<img src="/static/snapshots/tutorial/skill/renameTag.gif" style="zoom: 50%;border: 1px solid #eee; border-radius: 5px;" >

### swap selection content

When you need to interact with the contents of two selection areas, select a, cut, click in front of b, paste, select b, find the position of a before, click, paste... Such a long operation is too inefficient.

Let’s take a look at HBuilderX’s `Ctrl+Shift+x` interactive selection, which is an enhanced version of Ctrl+x.

1. Double-click the inside of the quotation mark after the first style attribute to select the content of the quotation mark.
2. After pressing Ctrl, continue to double-click the inside of the quotation mark after the second style attribute to select the selection within the 2 quotation marks.
3. Press `Ctrl+Shift+x` to exchange the contents of the style attribute.

<img src="/static/snapshots/tutorial/skill/selection_swap_1.gif" />

If you don’t select the content, place the cursor on two lines, and you can directly exchange the content of these two lines

<img src="/static/snapshots/tutorial/skill/selection_swap_2.gif" />


### Undo the last multi-selection area or multi-cursor

If you have selected too many or wrong selections, don’t worry about re-selecting. `Ctrl+Shift+z` is not to undo the editing content, but to undo the last selection.

1. Double click to select class
2. Press `Ctrl+e` to select the same word
3. Press `Ctrl+Shift+z`, no longer select the last word.

<img src="/static/snapshots/tutorial/skill/selection_cancel.gif" />

If you select one more word, you can click `Ctrl+right mouse button` to cancel a selection.

Skip the current word and select the next word, `Alt+Shift+e` (mac is `ctrl+shift+d`)


### Join Lines

The example is a shortcut operation when combining css into one line

<img src="/static/snapshots/tutorial/skill/selection_merge.gif" />

1. Double-click inside `{` to select class
2. Press `Ctrl+double-click` to select another class
3. Press the reverse format `Ctrl+Shift+k` to merge each css block code into one line
4. `Ctrl+k` is the formatting code, then `Ctrl+Shift+k` is merged into one line.

### At the same time annotate the beginning and end of the if paragraph

The adjustment of if block is very common. In addition to enclosing and deenclosing, common operations include commenting out the beginning and end of if paragraphs at the same time.

1. Double-click `if` to select the `if` code block
2. Press `Ctrl+\` to add the cursor at the beginning and end of the selection to change to multi-cursor mode
3. Press `Ctrl+/` to comment out the first and last lines of the selection

<img src="/static/snapshots/tutorial/skill/selection_if.gif" />

### Other
- [Go to Definition](/Tutorial/UserGuide/goto?id=转到定义)
- [Fold](Tutorial/UserGuide/fold)
- [Outline](/Tutorial/userinterface?id=文档结构图)