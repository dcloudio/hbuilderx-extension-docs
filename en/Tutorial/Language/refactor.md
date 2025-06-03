# Refactor@refactor

---

## Rename Symbol@renameSymbol

> Since version **`4.71+`**, HBuilderX has supported the operation of renaming symbols.

This feature aims to help developers quickly and safely modify symbols such as variable names, function names, and class names in a project, ensuring that all references to the symbol are updated synchronously.

**File types supporting symbol renaming:** `.js`, `.ts`, `.uts`, `.vue`, `.uvue`

**File types not supporting symbol renaming:** `CSS files (including .css, .scss, .less, and CSS code in Vue files)`, `HTML files (including tag labels in Vue files)`, `JSON files`, `Markdown files`

### Demo@demo

![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename.gif)

### Steps@steps

1. **Select a symbol:** In the editor, position the cursor on the symbol you want to rename or use the mouse to select the symbol.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-symbol.png)

2. **Trigger the rename:** You can trigger the rename operation via a shortcut key or a menu option.

  - Shortcut key: `Ctrl+Alt+R` (Windows/Mac)

  ***Note:*** If you are using the `VS Code` preset shortcut key scheme, the default shortcut key for renaming symbols is `F2`.

  - Menu operation: Right - click on the selected symbol and choose the `Rename Symbol` option.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-menu.png)

  ***Note:*** If you are in some unsupported file types, the symbol rename operation will be disabled.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-menu-disable.png)

3. **Enter a new name:** Enter the new symbol name you want to use, then press the `Enter` key to rename the symbol, or press `⌘+Enter` (`Ctrl+Enter` on the Windows platform) to preview the rename.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-input.png)

  ***Note:*** If input new name is the same as the current symbol name, application of the rename operation will not do anything.

4. **Apply rename:** If you choose to press `Enter` key, it will directly apply the rename operation, updating all references to the symbol to the new name.

5. **Preview:** If you choose to press `⌘+Enter` (Windows platform is `Ctrl+Enter`) key, it will open the preview window on the left, displaying all references to the symbol. You can view and select the reference to the symbol in the preview window, and finally click the `Apply` button to apply the rename operation or click the `Cancel` button to cancel the rename operation.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-preview.png)

  ***Tip:*** Click or double click on the item in the preview list, it will be redirected to the corresponding file corresponding location to check the context of the symbol reference.

  ***Note:*** If you uncheck the item reference, the subsequent application of this rename operation will not update this symbol reference.

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-filter.png)
