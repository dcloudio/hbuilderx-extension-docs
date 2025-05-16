## How to use the hbuilderx-language-services plugin in VS Code


### Installation
#### Search for online packages to install
* In VS Code, search for `hbuilderx-language-services` in the extensions view and install it.

#### Install using a VSIX file
1. Go to Extension Management
    * Click the Extensions icon in the sidebar, or use the shortcut:
        * Windows / Linux: Ctrl + Shift + X
        * macOS: Cmd + Shift + X  

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/1.png" style="zoom:80%" />

2. Install VSIX plugin
    * Drag the VSIX file into the extensions view.
3. After installation, a success prompt will appear in the lower right corner. The plugin should be visible in the installed list as shown below:

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/2.png" style="zoom:80%" />

### Usage
**Note: Currently, only language services for uniapp x projects are supported. For non-uniapp x projects, please continue to use the IDE's built-in plugins.**
* This plugin has built-in syntax highlighting and suggestions for uvue.
* Non-uvue files are no longer processed.
* There is no need to disable volar/vue or related plugins.

#### Target Configuration Instructions@setting
* Supports `Target` functionality.
    * In a uniappx project, open any file to see **Target information** in the **status bar**.
    * **Clicking the Target information in the status bar** will open the **Target configuration file** for the corresponding project, which can then be modified.
    * Currently, only manual modification of Target configuration information is supported.

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/3.png" style="zoom:80%" />

```json
{
    "targets": [
        "APP-ANDROID",
        "APP-IOS",
        "APP-HARMONY",
        "WEB",
        "MP-WEIXIN"
    ]
}
```

#### Associate File Types
* When you open a uniapp x project and open a .uvue/.uts file, the corresponding language will be automatically associated.
* If it's not automatically associated, click the file type in the lower right corner and choose to associate the file with uvue/uts.

  **File type in the lower right corner**
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/4.png" style="zoom:80%" />

  **Select corresponding configuration**
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/5.png" style="zoom:80%" />

  **Select language**
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/6.png" style="zoom:80%" />

#### Disable Plugin
* For non-uniapp x projects, you can directly disable this plugin:
    * Click Disable (Workspace)

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/7.png" style="zoom:80%" />
