Extension activation [manifest](/ExtensionDocs/manifest.md) is controlled by the `activationEvents` field in the `package.json` file. The extension will be activated when the event configured by `activationEvents` occurs. If `activationEvents` is empty, the extension will be automatically activated when HBuilderX startup.
> **We strongly recommend that you must configure `activationEvents`, activating the extension at startup will reduce the performance of HBuilderX.**

The following lists the currently available activation events:
- **onCommand**
- **onView**
- **workspaceContains**
- **onUri**
- ** \* **

### onCommand
The activation event will be generated when an extension `command` is to be triggered.

``` json
"activationEvents": [
    "onCommand:extension.firstExtension"
]
```

### onView
This activation event will be triggered when an extended view is about to open for display, usually when an extended view is selected through the menu [View]-[Show Extension View].

``` json
"activationEvents": [
    "onView:extension.demoview"
]
```

### workspaceContains
This activation event is triggered when a project contains a specified file, and the path of the file is relative to the path of the project.
> Note: This type of event is triggered when HBuilderX is started, and creating a new file after HBuilderX is started will not trigger this type of event.

``` json
"activationEvents": [
    //This event is triggered when there is a .ftp/ftp.json file under a project in the project manager.
    "workspaceContains:.ftp/ftp.json"
]
```
### onUri
The statement can respond to the scheme protocol request. When a scheme specifies that an extension is requested, if the extension declares the onUri event, the extension will be automatically activated, otherwise it will not be activated. API reference for extension processing custom scheme [here] (/ExtensionDocs/Api/windows/registerUriHandler)

``` json
"activationEvents": [
    //Declare that it can respond to scheme protocol requests
    "onUri"
]
```

### onCustomEditor
Declared that the custom editor type of the extension can be activated. When the user opens the file and a type is successfully matched, the extension will be automatically activated. Custom editor extension reference [here] (/ExtensionDocs\ContributionPoints\README.md#customEditors)

``` json
"activationEvents": [
    //The activation event is sent when a custom editor of catEdit.catScratch type is opened
    "onCustomEditor:catEdit.catScratch"
]
```

### *
The event `*` means that the extension will be activated immediately when HBuilderX is started, and the effect is the same as not configuring `activationEvents`.
> The best practice is to only listen to the events that need to be monitored, and try to make the extension `lazy loading`
