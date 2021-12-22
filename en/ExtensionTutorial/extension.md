Plug-in extension is divided into two parts, `extension API` and `configuration contruibution point`.
### Extension API description
(/ExtensionDocs/Api/README.md)。The extension of HBuilderX runs in a separate node.js process. In addition to calling the API list, the APIs supported by node.js can also be called. For the list of extension APIs, please refer to [here](/ExtensionDocs/Api/README.md).

### Configuration contruibution points
 `Configuration contruibution points` are a set of JSON declarations that you make in the `contributes` field of the `package.json`. Here is a complete list of [Configuration Contruibution Points](/ExtensionDocs/ContributionPoints/README.md).

#### Why introduce the concept of `configuration contruibution points`?
HBuilderX has very high performance requirements, and the `configuration contruibution points` is also for performance considerations. When a user installs an extension, each additional extension installation will increase the startup and loading time of the main program. In order not to affect the startup time of the main program, HBuilderX adds the mechanism of the extension `lazy loading`, that is, HBuilderX will not be automatically activated when it starts. The installed extension only parses the `configuration contruibution point` in the configuration file package.json of the extension, and adds the `menu`, `command`, `configuration`, etc. which the extension wants to register through the `configuration contruibution point`. When the user actually activates a `menu` or `command`, the related extension is activated through the onXXX event. This not only satisfies the ability of plug-in expansion, but also reduces the impact on the performance of the main program. For detail of lazy loading, please refer to [extension activation mechanism]
(/ExtensionDocs/activation_event.md)
