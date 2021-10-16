# Efficient Geek skills

Generally, IDE and editor are different product categories. IDE focuses on the syntax analysis, prompting, goto definition and debugging of a programming language. The editor focus on text processing and provides more powerful text processing than IDE. The latest HBuilderX provides lightweight and world-class text processing. After reading the following content, you will be amazed by the powerful functions of HBuilderX.

### Drag-free selection

When frequently dragging and selecting a block of code with the mouse is not an easy task. It is also painful to use the touchpad and remember many shortcuts.

HBuilderX provides a more friendly way: `intelligent double-clicking` and `Ctrl+ Enlarge selection`.

### Intelligent double-clicking

In HBuilderX, many special symbols support intelligent double-clicking.

- Double-click the inside of `quotation marks/brackets` to select the content in `quotation marks/brackets`
- Double-click on both sides of the `comma` to select a block of code before or after the comma
- Double-click the `end of line` to select the entire line (without carriage return)
- Double-click the `conjunction symbol` (-_) to select the entire word
- Double-click the beginning of the content at the beginning of the collapsed line and select the collapsed section
- Double-click the beginning of the indent to select the entire section with the same indent
- Double click `list symbol` to select the entire list block
- Double-click the beginning or end of any `tag` to select the entire tag block
- Double-click equal sign `=` in the html attribute, select the entire html attribute
- Double-click on keywords such as `if`, `function`, etc. to select the entire enclosing area
- Double-click `semicolon`, select entire block before semicolon
- Double-click on the left side of the `css` class name and select the entire css class
- Double-click `comment symbol` to select comment block
- Double-click `#` to select entire markdown section
- Double-click the beginning of the grammar delimiter to select markdown images, hyperlinks, bold, italic, code and other grammatical areas
- [JSON intelligent double-click](/Tutorial/Language/json?id=Smart double-click, quickly select an array or key-value pair)

The following is an example. Double-click to select the tag and surround the parent tag

1. Double-click the beginning or end of `div tag` to select entire `tag` and click position is the left side of the beginning `<` or the right side of the end `>`. In addition to, many positions can be selected by intelligent double-clicking, such as double-click `if`, double-click `indentation`, double-click `inside bracket quotation mark`, etc. See the `select` menu of HBuilderX for more details.
2. Press `Ctrl+]` to surround, you can add parent tags at the beginning and end of this selection, the cursor blinks at the same time. If you are in js file, pressing `Ctrl+]` does not enclose the tag, but encloses code block such as `if`, `for`, etc., then you can quickly add a block of code into the `if` bracket.
3. Enter `div` to add surrounding tags at the beginning and end of block.

<img src="/static/snapshots/tutorial/dbclick.gif" />

### Multi-cursor

<img src="/static/snapshots/tutorial/more_cursor.gif" />


### Expand the selection

`Ctrl+=` is pressing the `Ctrl` key and the `+` key together.

HBuilderX can intelligently judge the selected area, and use the shortcut key `Ctrl+=` to continue to expand the area without using the mouse.

<img src="/static/snapshots/tutorial/selection_expand.gif" />


### Remove tag

1. Double-click the beginning of tag p and select the block of tag p.
2. Press "Ctrl+Shift+]" to remove the tag p and automatically process the indentation of the child nodes.

<img src="/static/snapshots/tutorial/selection_1.gif" />

HBuilderX uses symbolization to improve the memory of shortcut keys. Because of the alphabetization, it is more difficult to remember.

Symbolization makes it easier to memorize shortcut keys, for example `Ctrl+]` is to add tag.

The reverse operation or enhancement operation is generally to add `Shift`, for example, `Ctrl+Shift+]` is to remove tag.

### Select words and skip a word

1. In the figure below, all 'div' words will be selected with shortcut key `Ctrl+e` (MacOSX: `Cmd+d`). But using `Ctrl+Shift+e` (MacOSX: `Cmd+Shift+d`), HBuilderX will skip irrelevant word through intellisense syntax analysis.
2. In the following figure, press `Ctrl+Shift+e` (MacOSX: `Cmd+Shift+d`), then only select pairs of `div` tags, and exclude tags of the same type in child nodes.
3. Then you can easily rename the original `div` to `p`

<img src="/static/snapshots/tutorial/selection_2.gif" />

Remark:
-If you want to choose a paried tag only, you cannot rely on the same words. Selecting the same grammatical word will select the matching 2 left and right brackets
-Batch selection of all the same words is `Ctrl+Alt+e` (MacOSX: `ctrl+alt+d`)

### Select All Reference Symbols

Menu【Select】【Select All Reference Symbols】

MacOSX shortcut keys：`command+shift+d`

Windows shortcut keys：`ctrl+shift+e`

<img src="/static/snapshots/tutorial/renameTag.gif" style="zoom: 50%;border: 1px solid #eee; border-radius: 5px;" >

### swap selection content

When you need to interact with the contents of two selection areas, select a, cut, click in front of b, paste, select b, find the position of a before, click, paste... Such a long operation is too inefficient.

Let’s take a look at HBuilderX’s `Ctrl+Shift+x` interactive selection, which is an enhanced version of Ctrl+x.

1. Double-click the inside of the quotation mark after the first style attribute to select the content of the quotation mark.
2. After pressing Ctrl, continue to double-click the inside of the quotation mark after the second style attribute to select the selection within the 2 quotation marks.
3. Press `Ctrl+Shift+x` to exchange the contents of the style attribute.

<img src="/static/snapshots/tutorial/selection_swap_1.gif" />

If you don’t select the content, place the cursor on two lines, and you can directly exchange the content of these two lines

<img src="/static/snapshots/tutorial/selection_swap_2.gif" />


### Undo the last multi-selection area or multi-cursor

If you have selected too many or wrong selections, don’t worry about re-selecting. `Ctrl+Shift+z` is not to undo the editing content, but to undo the last selection.

1. Double click to select class
2. Press `Ctrl+e` to select the same word
3. Press `Ctrl+Shift+z`, no longer select the last word.

<img src="/static/snapshots/tutorial/selection_cancel.gif" />

If you select one more word, you can click `Ctrl+right mouse button` to cancel a selection.

Skip the current word and select the next word, `Alt+Shift+e` (mac is `ctrl+shift+d`)


### Join Lines

The example is a shortcut operation when combining css into one line

<img src="/static/snapshots/tutorial/selection_merge.gif" />

1. Double-click inside `{` to select class
2. Press `Ctrl+double-click` to select another class
3. Press the reverse format `Ctrl+Shift+k` to merge each css block code into one line
4. `Ctrl+k` is the formatting code, then `Ctrl+Shift+k` is merged into one line.

### At the same time annotate the beginning and end of the if paragraph

The adjustment of if block is very common. In addition to enclosing and deenclosing, common operations include commenting out the beginning and end of if paragraphs at the same time.

1. Double-click `if` to select the `if` code block
2. Press `Ctrl+\` to add the cursor at the beginning and end of the selection to change to multi-cursor mode
3. Press `Ctrl+/` to comment out the first and last lines of the selection

<img src="/static/snapshots/tutorial/selection_if.gif" />

### Other
- [Go to Definition](/Tutorial/UserGuide/goto?id=转到定义)
- [Fold](Tutorial/UserGuide/fold)
- [Outline](/Tutorial/userinterface?id=文档结构图)
