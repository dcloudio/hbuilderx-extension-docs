> HBuilderX's code provide command prompt for deverse languages and intellisense.

## Built-in grammar engine
- Web： `html`, `js`, `css` grammar library
- App： `plus` extended grammar library
- Uni-app: `uni-app` grammar library
- WeChat applets and fast apps: corresponding built-in grammer libraries

## js grammar engine（sdocml Format）

In HBuilderX, in JS file，for example js, HTML, select vue or ts in the "customer language association" in the lower right corner.

<img src="/static/snapshots/tutorial/lang_1.png" />

node.js is also one of the selections.

After select js language, the js syntax hints can be seen for js code. (Initially, wait for few seconds before it can be used after selection.)

The selection is implemented for entire file once selected

If user open a file which is not in in the Project explorer section, this function is disabled.

If HBuilderX can detect jquery or mui in the project, it will also automatically load the syntax prompt library for this project. But sometimes the detection may be inaccurate and it may need to be loaded manually.

## d.ts

Many frameworks have built-in `d.ts` syntax hint library. HBuilderX fully supports `d.ts` syntax hints.

If there is a `d.ts` file of a certain framework under the project, HBuilderX can prompt the syntax hint of this framework.

## jsdoc+

HBuilderX provides extended `jsdoc+` annotations, which can provide powerful syntax prompts.

<img src="/static/snapshots/tutorial/lang_2.png" style="zoom:50%;" />

## vue doc

For vue developers, vue doc provide assistant how to use it. `vue doc` is needed.

Vue doc is similar to jsdoc, by describing component methods, parameters, and attributes in annotations.

Details [vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)

## Compatible with the vscode vetur plugin

Some vue component libraries have been produced according to the vetur specification, such as Element UI, Onsen UI, Bootstrap Vue and other frameworks.

These frameworks are installed in npm or installed in the new HBuilderX template, which can directly implement code prompts.

<img src="/static/snapshots/tutorial/lang_3.png" style="zoom:50%;"/>

## Snippets

HBuilderX supports custom code blocks, which can be expanded in the menu [Tool - Snippets Setting].
The code block data format is compatible with vscode, and has expanded more rich settings. Great help to improve development efficiency.

<a href="/Tutorial/Language/Snippets">Custom Snippets tutorial</a>
