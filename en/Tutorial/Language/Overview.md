> HBuilderX's code prompt system is very large and supports multiple syntax prompt models.

## Built-in grammar library
- The web project has built-in `html`, `js`, `css` syntax library
- App project has a built-in `plus` extended syntax library
- The uni-app project has a built-in `uni-app` syntax library
- Projects such as WeChat applets and fast apps also have corresponding built-in grammar libraries

## js Framework grammar library（sdocml Format）

In HBuilderX, in files that can input js, such as `js`, `html`. (not including `vue`, `ts`), there is a "grammar prompt library" in the bottom status bar, and you can load the built-in framework grammar library.

<img src="/static/snapshots/tutorial/lang_1.png" />

Among them, node.js also exists as a framework grammar.

After checking the corresponding js framework grammar, the js area will prompt the corresponding grammar (the initial check will take a few seconds before it can be used)

The selection is project-level. Once checked, the places where js can be written under the entire project will be loaded.

If the file is opened separately and not in the project manager on the left side of HBuilderX, this function cannot be used.

If HBuilderX can detect that there are commonly used frameworks such as jquery or mui under the project, it will also automatically mount the syntax prompt library for this project. But sometimes the detection may be inaccurate and the developer needs to introduce it manually.

## d.ts

Many frameworks have built-in `d.ts` syntax hint library. HBuilderX fully supports `d.ts` syntax hints.

If there is a `d.ts` file of a certain framework under the project, HBuilderX can prompt the syntax hint of this framework.

## jsdoc+

jsdoc declares methods, parameters, and attributes in the form of comments. HBuilderX provides extended `jsdoc+`, which can realize powerful syntax prompts.

<img src="/static/snapshots/tutorial/lang_2.png" style="zoom:50%;" />

## vue doc

Vue component developers, if they want to provide component users with a better way to use them, they should write `vue doc` for the component.

Vue doc is a way similar to jsdoc, by describing component methods, parameters, and attributes in comments.

Details [vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)

## Compatible with the vue specification in the vscode vetur plugin

Some vue component libraries have been produced according to the vetur specification, such as `Element UI`, `Onsen UI`, `Bootstrap Vue` and other frameworks.

The npm installation of these frameworks will come with a json syntax library under node_module, or the element ui template installation will also include the library in the HBuilderX new template. With this grammar library, you can directly code hints.

<img src="/static/snapshots/tutorial/lang_3.png" style="zoom:50%;"/>

## Snippets

HBuilderX supports custom code blocks, which can be expanded in the menu [Tool - Snippets Setting].
The code block data format is compatible with vscode, and has expanded more rich settings. Great help to improve development efficiency.

<a href="/Tutorial/Language/Snippets">Custom Snippets tutorial</a>