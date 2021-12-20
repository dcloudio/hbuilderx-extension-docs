# How to debug the extension?

> HBuilderX 3.2.11+, supports debugging extensions.

## Start debugging

In the left view, select the extension to be debugged, and click the run icon in the toolbar to open the run debug list.

<img src="/static/snapshots/Plug-in-development/debug/start_debug.png" class="hd-img" />

Click [Debug Extension] to open [Debug View](#DebugView)

## About node-debug extension

HBuilderX extension development relies on the node-debug extension. If the pop-up window prompts to install the [node-debug] extension during debugging, be sure to click install, otherwise the extension cannot be debugged.

<img src="/static/snapshots/Plug-in-development/debug/node-debug.png" class="hd-img" />

## Breakpoints

Open the file to be debugged, and right-click on the line number.

<img src="/static/snapshots/Plug-in-development/debug/add_breakpoint.png" class="hd-img" />

## Debug View @DebugView

After start debugging, you can see the debugging view in the left view of HBuilderX, as follows:

**5 parts of debug view：**
- [Debug Toolbar](#DebugActions)
- Variables (`Copy value`、`Copy expression`、`Add to watch`)
- Watchs（including `add`/`edit`/`delete` expressions, and `copy values`）
- Call stack
- breakpoints（including `delete`/`start`/`disable` breakpoint）

<img src="/static/snapshots/Plug-in-development/debug/debug_view.png" class="hd-img" />

## Debug Actions @DebugActions

<img src="/static/snapshots/Plug-in-development/debug/debug_toolbar.png" class="hd-img" />

- [Continue](#Continue) `F8`
- Next step `F10`
- Enter `F11`
- Return `Shift+F11`

### Continue @Continue

Continue (F8)：After clicking, run until the next breakpoint.

<img src="/static/snapshots/Plug-in-development/debug/continue.png" class="hd-img" />

## Data check and view variables

### Add to watch

In the [Variable Window], select the variable and right-click the menu to add the variable to the watch window.

<img src="/static/snapshots/Plug-in-development/debug/add_to_monitor.png" class="hd-img" />

### Hover show

During breakpoint debugging, hover the mouse over the variable to be viewed to open the hover window.

<img src="/static/snapshots/Plug-in-development/debug/hovering_window.png" class="hd-img" />

