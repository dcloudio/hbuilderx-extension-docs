# Goto Definition@goto

HBuilderX has a powerful jump function, as follows:

- [Goto Previous Location](#Goto-Previous-Location)
- Cursor jump
- [Goto Line](#Goto-Line)
- Goto the specified rank
- Goto Matching Bracket
- Goto BookMarkets
- Goto Scroll Bar
- [Goto Definition](#Goto-Definition)
- [Goto Definition to New Column](#Goto-Definition-to-New-Column)
- .....

## Goto Previous Location@goto-previous-location

In HBuilderX, `Alt+Left` (MacOSX: `ctrl + -`) or click `<` on the toolbar, to return to the previous cursor position.

<img src="/static/snapshots/tutorial/goto/Previous_Location_en.png" class="hd-img" />

## Goto Line@goto-line

Go to line shortcut：`ctrl + G`

<img src="/static/snapshots/tutorial/goto/goto_line_en.png" class="hd-img" />

## Goto the specified rank@goto-line-column

> Supported from HBuilderX 2.8.10+

<img src="/static/snapshots/tutorial/goto/goto_lc_en.png" class="hd-img" />

- input `0` to jump to the first line (Supported from HBuilderX 3.1.13+)
- input `$` to jump to the last line. (Supported from HBuilderX 3.1.13+)

HBuilderX supports using the command line to jump to the specified row and column.

```
# Example：
# File path, must be an absolute path
/Applications/HBuilderX-Alpha.app/Contents/MacOS/HBuilderX /Users/hx/filename.md:2:10
```

## Goto Definition@goto-definition

Goto definition is an important part of what makes an editor useful. 

HBuilderX has a powerful syntax analysis engine that can accurately jump to the defined position.

The shortcut key to go to the definition is `Alt+D`, and the mouse operation is `Alt+left click`. 

<img src="/static/snapshots/started_tutorial/goto-definition-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

> Remarks: Support switching [Ctrl+left mouse button] or [Alt+left mouse button] to go to definition (menu [select], [switch to "Alt+Click" for Multi-Cursor] or [switch to "⌘+Click" for Multi-Cursor])

## Goto Definition to New Column@goto-definition-to-column

Another feature of HBuilderX is `Goto definition to column`.

`ctrl+alt+left click`, you can open the defined code on the other side for easy viewing.

<img src="/static/snapshots/started_tutorial/goto-definition-col-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



