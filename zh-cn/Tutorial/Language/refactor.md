# 重构@refactor

---

## 重命名符号@renameSymbol

> 自 **`4.71+`** 版本起，HBuilderX 支持对符号进行重命名操作。

该功能旨在帮助开发者在项目中快速、安全地修改变量名、函数名、类名等符号，确保所有引用该符号的地方都能同步更新。

**支持重命名符号的文件类型：**`.js`、`.ts`、`.uts`、`.vue`、`.uvue`

**不支持重命名符号的文件类型：**`CSS文件（包括 .css、.scss、.less、vue文件中的css代码）`、`HTML文件（包括 vue文件中的tag标签）`、`JSON文件`、`Markdown文件`


### 演示@demo

![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename.gif)

### 操作步骤@steps

1. **选择符号：**在编辑器中，将光标定位到您想要重命名的符号上，或者使用鼠标选中该符号。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-symbol.png)

2. **触发重命名：**您可以通过快捷键或菜单选项来触发重命名操作。

  - 快捷键：`Ctrl+Alt+R`（Windows/Mac）

  ***注意：***如果您使用的是`VS Code`预设快捷键方案，重命名符号默认快捷键为`F2`

  - 菜单操作：在选中的符号上右键，选择 `重命名符号` 选项。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-menu.png)

  ***注意：***如果是在一些不支持的文件类型中，重命名符号操作将会被禁用。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-menu-disable.png)

3. **输入新名称：**输入您想要使用的新符号名称，然后按下`Enter`键进行重命名符号，或者按下`⌘+Enter`（Windows平台为`Ctrl+Enter`）键进行重命名预览。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-input.png)

  ***注意：***如果输入的新名称与现有符号名称相同，应用重命名操作时将什么也不会发生。

4. **应用重命名：**如果您选择按下`Enter`键，则会直接应用重命名操作，将所有引用该符号的地方都更新为新名称。

5. **预览：**如果您选择按下`⌘+Enter`（Windows平台为`Ctrl+Enter`）键，则会在左侧视图中打开预览窗口，显示所有引用该符号的地方。您可以在预览窗口中查看和选择该符号的引用，最后点击`应用`按钮来应用重命名操作或者点击`取消`按钮来取消重命名操作。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-preview.png)

  ***提示：***对预览列表中的项单击或双击时，将会跳转到对应文件的对应位置，以方便及时查看符号引用位置的上下文内容

  ***注意：***如果您取消勾选了某项引用，随后应用此次重命名符号操作时此处符号引用将不会被更新。

  ![alt text](https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-filter.png)
