# Vue
In HBuilderX, the vue syntax library will be automatically mounted when you open a vue file. When adding vue code to the html file, you can click on the "Javascript Libraries" in the bottom right corner and select the vue syntax library. We recommend that developers use the vue single-file method to open vue files directly.

> Notes: If a vue file does not belong to any project. Please create a new project from the project explorer on the left, then open the vue file, the vue syntax library will be loaded automatically.

## Vue3 Support
HBuilderX 3.2.5 or later (including 3.2.5) provides Vue3 support. Refer to [Vue3 Support](/Tutorial/Language/vue-next.md) for details.

## Syntax Highlight
In addition to the common syntax highlighting support of Vue, HBuilderX also supports various expressions and syntax, as well as the highlighting of other languages supported by scripts and styles such as less, scss, stylus, and typescript, without installing any plugins.


## Code Completions

### API Hint and Help
HbuilderX provides intelligent code completion based on language semantics and source code analysis. HbuilderX knows possible completions, and IntelliSense suggestions will pop up when you type codes.

In addition to the perfect prompt, there are clear instructions on the right side of the code assistant. The api is explained clearly, and the link to the official website is attached. Click the link to jump to the specified page of the vue official website.
 
<img src="/static/snapshots/vue/1.png" style="zoom: 80%;border: 1px solid #eee;" />

### Identify 'this' Type

<img src="/static/snapshots/vue/this.png" style="zoom: 70%;border: 1px solid #eee;" />

### Syntax Hint

<img src="/static/snapshots/vue/hint_1.png" style="zoom: 60%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/hint_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### Vue Methods Hint

<img src="/static/snapshots/vue/hint_3.png" style="zoom: 80%;border: 1px solid #eee;" />

### Customized Components Hint

Based on powerful component syntax analysis, HBuilderX can directly prompt component tags and attributes.

<img src="/static/snapshots/vue/hint_4.png" style="zoom: 50%;border: 1px solid #eee;" />

### Vue Doc

Vue doc is a powerful tool for vue component developers. By writing the jsdoc class, your component can implement comprehensive code hints and help.

<img src="/static/snapshots/vue/hint_5.png" style="zoom: 50%;border: 1px solid #eee;" />

### Compatible with the VSCode Vetur Plugin

Some vue component libraries have been produced according to the `vetur` specification, such as `Element UI`, `Onsen UI`, `Bootstrap Vue` and other frameworks.

These frameworks are installed in npm or installed in the new HBuilderX template, which can implement code prompts.

<img src="/static/snapshots/vue/hint_6.png" style="zoom: 50%;border: 1px solid #eee;" />

### Built-in Snippets / Custom Snippets

Type `v`, you can see a large number of vue snippets in hints.

You can also add more customized snippets in menu [`Tools` - `Snippets Settings` -`Vue Snippet`].

<img src="/static/snapshots/vue/hint_7.gif" style="zoom: 50%;border: 1px solid #eee;" />

### Vue Router

Support $router and $route objects.

<img src="/static/snapshots/vue/vue_router_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vue_router_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### Vuex

Support Objects:`State`, `Mutation`, `action` and go to definition.

<img src="/static/snapshots/vue/vuex_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vuex_2.gif" style="zoom: 80%;border: 1px solid #eee;" />


### Other

Also support `emmet`, `d.ts`.

## Help Docs

Place the cursor on the `api` and press `F1` to open the corresponding help file directly in Web Explorer.You can change the code side by side while viewing the documentation.

<img src="/static/snapshots/vue/help_doc.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Go to Definition

Press `alt+mouse click` to trace the source of various `variables`, `style`, and `methods`, and switch to related files between `templates`, `scripts` and `styles`. Very powerful and flexible.

<img src="/static/snapshots/vue/goto.gif" style="zoom: 50%;border: 1px solid #eee;" />

## Refactoring or Select Same Variable

If you want to know where a variable is referenced, or select all variables to rename. Right click on the word [Select all occurrences (ctrl+shift+e)]

Example below: There are many "list" in the script, but only exact variables are selected:

<img src="/static/snapshots/vue/select.png" style="zoom: 40%;border: 1px solid #eee;" />


## ESLint Check

Firstly, please install the plugin `eslint-plugin-vue`. Then there are 2 ways to check syntax, click [Tool - Validate Document], or save the vue document as it will be verified automatically when saving.

HbuilderX provides shortcuts settings and whether to automatically trigger when saving. Location is【Perferences - plugins - eslint-plugin-vue】.

<img src="/static/snapshots/vue/check.gif" style="zoom: 60%;border: 1px solid #eee;" />

## Outline

Select View -show outline. Or right-click anywhere in script, select toggle outline.
 
Select any tag in outline will bring cursor to the corresponding section of the script.

<img src="/static/snapshots/vue/outline_en.jpg" style="zoom: 40%;border: 1px solid #eee;border-radius: 20px;" />

## Use Vue without Command Line

If you don't like node development environment, this will not affect you drive into the vue programming.

HBuilderX has built-in plugins and node environment.

You can create a new vue project through the new project wizard without cli.

<img src="/static/snapshots/vue/project_create_en.png" style="zoom: 40%;border: 1px solid #eee;" />

In the run menu, you can visually run and build the project.

<img src="/static/snapshots/vue/project_create_ne.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;" />

You don’t need to install node modules, you can import plugins through uni-app market (only for uni-app), more details [uni-app markets](https://ext.dcloud.net.cn/)
