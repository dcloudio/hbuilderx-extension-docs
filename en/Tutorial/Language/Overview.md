> HBuilderX has built-in richness language libraries and supports different syntax models.

## Built-in API Library
- Web： `html`, `js`, `css` api library
- App： `plus` extended api library
- Uni-app: `uni-app` api library
- WeChat Apps and quickapps: corresponding built-in api libraries

## Javascript Framework Library（.sdocml Format）

In HBuilderX, you can click on the "Javascript Libraries" in the bottom status bar and select the library for js and html files.

<img src="/static/snapshots/tutorial/lang_1.png" />

node.js is also one of the syntax list. After selecting a js syntax type, it will be loaded immediately. (Note: You need to wait a while for the first use.)

The selected syntax type can be used for the entire project. On the contrary, it does not apply to any individual file.

If HBuilderX can detect that there are common frameworks such as jquery or mui under the project, it will usually automatically mount the library. Otherwise, you have to manually load these libraries.

## d.ts

Many frameworks have built-in `d.ts` file. HBuilderX also fully supports the `d.ts` file. If there is a d.ts file in this framework, HBuilderX can display the code hints of this framework.

## JSDoc+

jsdoc declares methods, parameters and attributes via annotations. HBuilderX provides extended jsdoc+ which can realize powerful syntax prompts.

<img src="/static/snapshots/tutorial/lang_2.png" style="zoom:50%;" />

## Vue Doc

Vue component developers should write 'vue doc' if they want to provide a better way for component users to use.

Vue doc is similar to jsdoc, which describing component methods, parameters and attributes in annotations.

Details [vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)

## Compatible with the VSCode Vetur Plugin

Some vue component libraries have been produced according to the vetur specification, such as Element UI, Onsen UI, Bootstrap Vue and other frameworks.

These frameworks are installed in npm or installed in the new HBuilderX template, which can directly implement code prompts.

<img src="/static/snapshots/tutorial/lang_3.png" style="zoom:50%;"/>

## Snippets

HBuilderX supports customized snippets, which can be expanded in the menu [Tool - Snippets Setting].
These snippets are compatible with vscode and expanded with more settings. Great help to improve development efficiency.

<a href="/Tutorial/Language/Snippets">Custom Snippets tutorial</a>

## Hover Code Assist @hover-code-assist

> supported from HBuilderX 3.2.10+

As shown in the figure below, move the mouse to the code to be viewed, and a floating window will appear to provide code assistance.

Press F1 to open the help documents in the browser.

<img src="/static/snapshots/tutorial/language/hover_help_en.png" style="zoom:45%;border: 1px solid #eee;"/>

If you don't need it, you can turn off this feature manually in [Settings - Editor].

<img src="/static/snapshots/tutorial/language/settings_hover_help_en.png" style="zoom:50%;border: 1px solid #eee;"/>
