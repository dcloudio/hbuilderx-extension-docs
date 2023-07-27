Since HBuilderX 2.7+, the plug-in extension mechanism has been opened. 

Developers can write HBuilderX plug-ins through JavaScript language, customize and enhance HBuilderX, and create a more handy tool.

### What can extensions do?

HBuilderX plug-ins are based on nodejs, and all nodejs apis can be used, such as file operations and calling other node commands.

HBuilderX provides a large number of js APIs (compatible with vscode), which can customize many functions and interfaces of HBuilderX.

Here are some examples of what you can achieve with the Extension API:

- Add a new `menu`
- Add new `command` and shortcut keys
- Expand the new `code block`
- Add a new view `view`
- Make various edits to the document, add, delete and modify text content, manipulate cursors and selections
- Check the document
- Print logs on the console, operate status bar messages, pop up various prompt boxes and selection boxes

> Note: The plug-in runs in a separate `plug-in process`. The `plug-in process` is a node.js process that uses inter-process rpc communication and HBuilderX for interface calls. Therefore, the plug-in can use all the apis of node itself. The currently integrated node version is: v16.17.0.

### How to build extensions?

- [Get Started](/ExtensionTutorial/firstExtension.md) How to create and run a plug-in.
- [Extension Guides](/ExtensionTutorial/extension.md) Includes detailed plug-in capabilities tutorials.
- [Extension Publish](/ExtensionTutorial/HowToPublish.md) How to publish the developed plug-in to the plug-in market.
- [Extension API](/ExtensionDocs/Api/README.md) Contains the latest plug-in API and configuration extension point list.

