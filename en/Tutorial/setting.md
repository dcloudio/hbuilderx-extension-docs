# Settings

You can easily configure HBuilderX through various settings.

# Settings Page

To open the settings, please do the following:

- Windows: Top menu [Tools -> Settings] (shortcut key: `ctrl` + `alt` + `,`)
- MacOSX: Top menu [HBuilderX -> Preferences] (shortcut key: `command` + `,`)

<img src="/static/snapshots/tutorial/settings/ui_settings_en.png" class="hd-img" />

Settings page include 5 tabs：

- Commonly Used：[Details](/Tutorial/setting?id=CommonlyUsed)
- Editor: [Details](/Tutorial/setting?id=Editor)
- Run：Mobile phone/emulator running configuration and browser running configuration
- Plugins：Installed plug-in extension configuration
- Source View：json file, Include the above customized configuration

## Commonly Used

- The Editor Font Size
- Editing Fonts，[Details](/Tutorial/settings/font)
- Tab Size
- Insert Spaces when Pressing Tab
- Auto Save when Focus Losed (default is off)
- Language Association
- Exclude Directories Pattern For Find
- Search For Directories That Are Not Included By Default：`.git`、`.cvs`、`.svn`、`node_modules`、`unpackage`
- Maximum Number of Terminals Allowed to be open：default value is 8
- Local History[Details](/Tutorial/UserGuide/LocalHistory)
- Expand/Collapse of Directory when Single Click (turn on is single click, turn off is double click)
- Open Built-in Resource Explorer when Single Click on the Directory (Open internal resource manager with single click or double click)

#### Update Settings

In HBuilderX, you can choose the update method.

"Check for updates at startup" means that HBuilderX will check for any updates when HBuilderX startup. If there are any new updates, a prompt will popup.

<img src="/static/snapshots/tutorial/settings/upgrade_en.png" class="hd-img" />

## Editor

- Word Wrap (default is off)
- Display Blank Characters when Highlighted  (default is on)
- Render End of Line Characters (EOL)
- The Default End of Line Characters (EOL)
- Maximum Pixel Width Of MiniMap: default value is 100
- Mini Map: Preview on Mouse Hover
- Remember Folding States when Document Close
- Enable .editorconfig support：(default is on)
- Render Indent Guide
- Render Long Line Indicator
- The Long Line Indicates Which Column The Vertical Line Is Displayed In： default value is 80
- Line Spacing Ratio：Document line spacing ration，default value is 1.2
- Highlight Occurrences Only when Select Whole Word
- Enable Code Completion：(default is on)
- Auto Insert the Selected Item in Code Completion when Pressing Tab
- Code Completion Widget Font Size：default value is 12
- Code Completion Trigger Characters
- Enable PX To Rem Prompt
- Enable PX To Rpx/Upx Prompt [Details](/Tutorial/settings/px-upx)
- Enable Automatic Character Matching
- Chinese Punctuation Interference-free Input
- Text Separator
- Insert Modifier Keys Used By Multiple Cursors
- Use Ctrl + Mouse Wheel to Zoom Editor
- Auto Guess of Tab Size
- Allows Scrolling One Page Below the Last Line


## Problem of Source View

The `settings.json` file will be loaded when HBuilderX startup. But if this file is damaged (wrong json format), HBuilderX will not startup.

So please be careful to modify "source view".
