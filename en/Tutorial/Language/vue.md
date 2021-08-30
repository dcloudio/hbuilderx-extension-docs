# Vue

Vue is used in HBuilderX. If you open a vue file, the vue syntax library will be automatically mounted.

If the vue framework is referenced in the HTML file, you need to click the syntax prompt library in the lower right corner and select the vue syntax library.

We recommend that developers use the vue single file specification to open vue files directly.

> Notes: If the file is not under the project, but a separate file, and the grammar library cannot be mounted, please create a project in the project manager on the left and open the file in the project to experience it.

## Syntax highlighting

In addition to vue's common syntax highlighting support, HBuilderX also supports various expression syntax, as well as other languages supported by script and style such as less, scss, stylus, typescript and other highlighting, without the need to install plug-ins.


## Code hint

### API hint and help

The prompt is not only to be complete, but also to be accurate. You can't guess all the words and list them out, there will be what there should be, clear and trustworthy. 

Write fast and write well.

In addition to the perfect tips, you can also see a clear help description on the right side of the code assistant, explaining the api, and the api link of the vue official website. Click to go directly to the specified page of the vue official website.
 
Very suitable for learning reference.

<img src="/static/snapshots/vue/1.png" style="zoom: 80%;border: 1px solid #eee;" />

### this Accurate recognition

<img src="/static/snapshots/vue/this.png" style="zoom: 70%;border: 1px solid #eee;" />

### Grammar hint

<img src="/static/snapshots/vue/hint_1.png" style="zoom: 60%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/hint_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### Directives hint

<img src="/static/snapshots/vue/hint_3.png" style="zoom: 80%;border: 1px solid #eee;" />

### Component hint

HBuilderX components grammar tips more powerful than other tools, components of the label, attributes can be directly prompted out.

<img src="/static/snapshots/vue/hint_4.png" style="zoom: 50%;border: 1px solid #eee;" />

### doc

HBuilderX supports powerful vue doc, which is a powerful tool for vue component developers. Through the writing of jsdoc-like, your components can realize comprehensive code hints and help.

<img src="/static/snapshots/vue/hint_5.png" style="zoom: 50%;border: 1px solid #eee;" />

### Compatible with the vue specification in the vscode vetur plugin

Some vue component libraries have been produced according to the `vetur` specification, such as `Element UI`, `Onsen UI`, `Bootstrap Vue` and other frameworks.

These frameworks are installed in npm or installed in the new HBuilderX template, which can directly implement code prompts.

<img src="/static/snapshots/vue/hint_6.png" style="zoom: 50%;border: 1px solid #eee;" />

### Common code blocks / code block Custom

Enter `v`, you can see a large number of vue code blocks in the list of code assistants pulled out.

You can also add more code blocks, menu [`Tools` - `Code Block Settings` -`Vue Code Block`].

<img src="/static/snapshots/vue/hint_7.gif" style="zoom: 50%;border: 1px solid #eee;" />

### vue router

Support prompting all instance `methods` and `attributes` of `$router` and `$route`

<img src="/static/snapshots/vue/vue_router_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vue_router_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### vuex

Support prompting `State`, `Mutation`, `action`..., and support `go to definition`

<img src="/static/snapshots/vue/vuex_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vuex_2.gif" style="zoom: 80%;border: 1px solid #eee;" />


### Other

In addition, common `emmet`, `d.ts` and HBuilderX are also well supported by other development tools.

## Help Docs

Place the cursor on the `api` and press `F1` to open the corresponding help file directly on the right side, without cutting the screen, changing the code while looking at the document.

<img src="/static/snapshots/vue/help_doc.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Go to definition

Press `alt+mouse click` to trace the source of references to `variables`, `style`, and `methods`, and jump back and forth among `template`, `script`, and `style`.

Press `ctrl+alt+click`, you can also open the definition in a column next to it, which is convenient for side-by-side viewing.

<img src="/static/snapshots/vue/goto.gif" style="zoom: 50%;border: 1px solid #eee;" />

## Reconstruct or choose the same grammatical words

If you want to see where a variable is referenced, or select all variables to rename, Right click menu [select the same variable (ctrl+shift+e)]

Example: There are many identical words in "list" in the text, but only those exact variables are selected:

<img src="/static/snapshots/vue/select.png" style="zoom: 40%;border: 1px solid #eee;" />


## Syntax check

Install the plug-in `eslint-plugin-vue`, right-click menu [tools - Verification], or automatically verify when the vue document is saved.

Plug-in management settings, such as configuring shortcut keys, whether to automatically trigger when saving, are in the plug-in configuration in 【settings - plugin configuration - eslint-plugin-vue】

<img src="/static/snapshots/vue/check.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Outline

Select View menu-show document structure diagram, or select from the right-click menu, and the outline will appear on the left.
 
Click on the left to quickly read and jump to the right.

<img src="/static/snapshots/vue/outline_en.jpg" style="zoom: 40%;border: 1px solid #eee;border-radius: 20px;" />

## Use vue without command line

If you don't like to configure a complicated node environment, this will not affect your quick entry into the vue world.

HBuilderX has built-in terminal plug-ins and node environment.

In the new interface, you can visually create a new vue project without cli.

<img src="/static/snapshots/vue/project_create_en.png" style="zoom: 40%;border: 1px solid #eee;" />

In the run menu, you can run and build visually.

<img src="/static/snapshots/vue/project_create_ne.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;" />
