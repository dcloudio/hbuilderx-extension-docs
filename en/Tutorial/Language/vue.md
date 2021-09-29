# Vue

In HBuilderX, when you open a vue file, the vue syntax library will be automatically loaded.

If the vue framework is part of HTML file, you need to select vue in the "customer language association" in the lower right corner.

We recommend that developers use the vue single file components. It will automatically load the vue syntex.

> Notes: If a vue file is not in the opened project in the Project explorer section. Please create a new project, then open the vue file, the vue syntax library will be automatically loaded. 

## Vue3 Support
The HBuilderX Version 3.2.5 or older (included 3.2.5) provide the optimized support for vue3. Refer to [vue3 support](/Tutorial/Language/vue-next.md) for details.

## Syntax highlighting

In addition to vue's common syntax highlighting support, HBuilderX also supports various syntax highlightings: less、scss、stylus、typescript and so on. No need plugins.


## Code hint

### API hint and help

Hint is more complete and accurate. IDE can't list all guessed words in hint. Hint shall give you the related and accurate words. 

Better hint means code faster and more accurate.

In addition to the perfect hints, a clear help description is on the right side of the code assistant. It clearly explaining the api, and also give a link of the vue official website. Direct you to the specified page of the vue official website.
 
Great reference.

<img src="/static/snapshots/vue/1.png" style="zoom: 80%;border: 1px solid #eee;" />

### this Accurate recognition

<img src="/static/snapshots/vue/this.png" style="zoom: 70%;border: 1px solid #eee;" />

### Syntax hint

<img src="/static/snapshots/vue/hint_1.png" style="zoom: 60%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/hint_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### Function/properties hint

<img src="/static/snapshots/vue/hint_3.png" style="zoom: 80%;border: 1px solid #eee;" />

### Customer defined function hint

HBuilderX customer defined function hints is more powerful. The components of the label, attributes can be directly prompted out.

<img src="/static/snapshots/vue/hint_4.png" style="zoom: 50%;border: 1px solid #eee;" />

### doc

HBuilderX supports powerful vue doc, which is a powerful tool for vue component developers. Through the writing of jsdoc-like, your components can realize comprehensive code hints and help.

<img src="/static/snapshots/vue/hint_5.png" style="zoom: 50%;border: 1px solid #eee;" />

### Compatible with the vscode vetur plugin

Some vue component libraries have been produced according to the `vetur` specification, such as `Element UI`, `Onsen UI`, `Bootstrap Vue` and other frameworks.

These frameworks are installed in npm or installed in the new HBuilderX template, which can directly implement code prompts.

<img src="/static/snapshots/vue/hint_6.png" style="zoom: 50%;border: 1px solid #eee;" />

### Common code blocks / customized code block

Type `v`, you can see a large number of vue code blocks in hints.

You can also add more customized code blocks in menu [`Tools` - `Code Block Settings` -`Vue Code Block`].

<img src="/static/snapshots/vue/hint_7.gif" style="zoom: 50%;border: 1px solid #eee;" />

### vue router

All associated type and belong to in hints

<img src="/static/snapshots/vue/vue_router_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vue_router_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### vuex

hints on `State`, `Mutation`, `action`, etc. Support turn to a function.

<img src="/static/snapshots/vue/vuex_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vuex_2.gif" style="zoom: 80%;border: 1px solid #eee;" />


### Other

Also support `emmet`, `d.ts` as other development tools.

## Help Docs

Place the cursor on the `api` and press `F1` to open the corresponding help file directly in Web Explorer. Side-by-side you can changing the code while looking at the document.

<img src="/static/snapshots/vue/help_doc.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Go to definition

Press `alt+mouse click` to trace the source of references to `variables`, `style`, and `methods`, and jump back and forth among `template`, `script`, and `style`.

Press `ctrl+alt+click`, you can also open the definition in a column next to it, which is convenient for side-by-side viewing.

<img src="/static/snapshots/vue/goto.gif" style="zoom: 50%;border: 1px solid #eee;" />

## Reconstruct or search the same word

If you want to see where a variable is referenced, or select all variables to rename, Right click on the word [Select all occurrences (ctrl+shift+e)]

Example below: There are many "list" in the script, but only those exact variables are selected:

<img src="/static/snapshots/vue/select.png" style="zoom: 40%;border: 1px solid #eee;" />


## Syntax check

Firstly install the plug-in `eslint-plugin-vue`. Click [tools - Valicate documents], then vue document is automatically verify when saved.

Plug-in management settings, such as configuring shortcut keys, whether to automatically trigger when saving, are in the plug-in configuration in 【settings - plugin configuration - eslint-plugin-vue】

<img src="/static/snapshots/vue/check.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Outline

Select View -show outline. Or right-click anywhere in script, select tiggle outline.
 
Select in outline can bring cursor to the corresponding section of the script.

<img src="/static/snapshots/vue/outline_en.jpg" style="zoom: 40%;border: 1px solid #eee;border-radius: 20px;" />

## Use vue without command line

If you don't like command line environment, this will not affect you drive into the vue programming.

HBuilderX has built-in plug-ins and node environment.

You can create a new vue project without cli.

<img src="/static/snapshots/vue/project_create_en.png" style="zoom: 40%;border: 1px solid #eee;" />

Run - Terminal - npm run build/npm run serve/etc.

<img src="/static/snapshots/vue/project_create_ne.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;" />
