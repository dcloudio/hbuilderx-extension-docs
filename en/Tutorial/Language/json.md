# Deep optimization of json in HBuilderX

Json does not improve human readability, although it does make it easier to write and implement for machines.

In the past, the server generated json, and front-end programmers rarely wrote json manually.

Nowadays, JSON is everywhere on the web, such as configuration files, js export, etc. But it is really not easy to write a json file because of strict specifications.

HBuilderX provides a number of optimization techniques to achieve the best json editing experience.

### Undisturbed Chinese symbols input

HBuilderX will automatically change "fullwidth form" symbols to "halfwidth form" symbols except "fullwidth form" symbol is in a string.

The undisturbed input of Chinese symbols is the advantage of HBuilderX. Support json, html, js, css, vue and other file types.

### Add comma at the end of the line

Don’t worry about when to enter a comma at the end of the line.

HBuilderX will automatically recognize whether a comma is needed, and automatically fill in the missing comma when you press "Enter".

### Automatically delete extra commas

When we copy some json code, some "commas" at the end of the line are also copied.
HbuilderX will automatically remove illegal "commas" when saving files.

### KeyValue snippet

KeyValue snippet will be added when you enter "kv" in a js file.

<img src="/static/snapshots/tutorial/json/json_1.jpeg" style="zoom:50%" />

You will get "Key:Value" after press "enter" key.

<img src="/static/snapshots/tutorial/json/json_2.jpeg" style="zoom:50%" />

After typing the text "Key", then press "tab". The cursor will focus on "Value", and then you can type in the contents of "Value". This operation can help you focus on the content of "Key:Value" and similar like Excel.

Remark：This feature is only applicable to json in js files, not to json files.

### Intelligent double-clicks

When frequently dragging and selecting a code block with the mouse is not an easy task.

HBuilderX provides a more friendly way: `intelligent double-clicks`.

- Double-click on both sides of the `comma` to select a code block before or after the comma
- Double-click the `end of line` to select the entire line
- Double-click the inside of `brackets` to select the content in `brackets`
- Press `Alt` and double-click the inside of `brackets` to select the content in `brackets` (include brackets)
- Double-click the inside of `quotation marks` to select the content in `quotation marks`
- Press `Alt` and double-click the inside of `quotation marks` to select the content in `quotation marks` (include quotation marks)

> For more intelligent double-clicks, please check "select" menu. You can use "Ctrl" and double-clicks to achieve multiple selection.

### Fast repeat insertion

When you want to repeatedly insert key-value pairs or arrays, the fastest way is not to copy and paste, but to use the repeat insert function.
Windows shortcut: Ctrl+Insert or Ctrl+Shift+r，mac shortcut: Command+Shift+r。

### Syntax Hint

Many js methods combine multiple parameters into a json object. What about the syntax hints for these parameters?
HBuilderX also has complete json parameter syntax prompt support.

<img src="/static/snapshots/tutorial/json/json_3.jpeg" style="zoom:50%" />

If there is a callback function in the parameter, an anonymous function can also be automatically generated during input, as follows:

<img src="/static/snapshots/tutorial/json/json_4.jpeg" style="zoom:50%" />

In some special configuration files that support syntax prompts, such as uni-app's pages.json.

### Automatically validate syntax when saving

HBuilderX has built-in validation functions for json and js files. You will receive an error warning when saving the file. Press F4 to view the next error.
