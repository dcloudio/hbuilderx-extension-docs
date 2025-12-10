
# GitHub Copilot For HBuilderX Plugin User Guide

## Introduction

This plugin aims to integrate GitHub Copilot's code auto-completion feature into HBuilderX IDE, providing developers with inline code suggestions to improve coding efficiency.  
This plugin leverages the SDK `@vscode/chat-lib` extracted from VS Code Copilot Chat to retrieve code completion suggestions in real time.  
To learn more about GitHub Copilot, please visit [https://github.com/features/copilot](https://github.com/features/copilot).  
To learn more about @vscode/chat-lib, please visit [https://github.com/microsoft/vscode-copilot-chat](https://github.com/microsoft/vscode-copilot-chat).  

## Environment Requirements

- **HBuilderX**: Version `4.71` or higher.
- **Node.js**: Version `22.14` or higher. The @vscode/chat-lib language server requires a separate Node.js environment to run.  

## How to Use

### 1. Installation and Activation
#### Install via Plugin Market
- Visit the [HBuilderX Plugin Market](https://ext.dcloud.net.cn/plugin?name=copilot-for-hbuilder) and click `Download Plugin and Import to HBuilderX`.
- The browser will automatically launch the `HBuilderX` IDE and start downloading and importing this plugin.
- The plugin will be automatically activated after import is complete.

#### Install via HBuilderX IDE
- After opening HBuilderX, click `Tools -> Plugin Installation` in the menu bar to open the plugin installation panel.
- In the plugin installation panel, switch to the `Install New Plugin` tab, find `Github Copilot for HBuilder` and click the `Install` button.
- The plugin will be automatically activated after installation.  

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-install.png" />

### 2. First-time Configuration

- When the plugin starts for the first time, it will check the Node.js environment. If the plugin cannot automatically find a Node.js version that meets the requirements (≥22.14), HBuilderX will display a prompt asking you to configure it.
- You need to fill in your local Node.js executable path in `Settings -> Plugin Configuration -> Github Copilot -> Specify the node executable path for Copilot language server runtime`.
- After correct configuration, the plugin will try to start the Copilot language service.  

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-conf-node-path.png" />

### 3. Login to GitHub Copilot
> Note: Before starting the login, you need to have an active Github account and subscribe to GitHub Copilot to use this plugin. You can check your subscription status via this link: [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features).

- **Status Bar Icon**: The Copilot icon will be displayed in the status bar at the bottom right of HBuilderX. Click this icon to open the Copilot status panel.  
- **Start Login**: In the status panel, click the `Sign in to Github` button. The plugin will send a login request to Github and return a `device code` for device authorization upon successful request.  
<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-signin.png" />
- **Device Authorization**: The panel will display a device code and provide a GitHub authorization link. Click `Copy and Visit` to copy the device code to the clipboard and automatically open the authorization page in the system browser.  
<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-device-code.png" />

- **Complete Authorization**: On the page opened in the browser, paste the device code and authorize. After successful authorization, the plugin will automatically verify and complete the login.  
<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-signin-ok.png" />

### 4. Get Code Suggestions

- After successful login and activation, when you write code (in supported language files), Copilot will automatically provide inline code suggestions.  
- Press `Tab` to accept the suggestion.  

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/copilot-working.png" />

### 5. Status Management

- Click the status bar icon to open the status panel and perform the following operations:
  - **Sign In/Sign Out**: Manage your GitHub account login status.
  - **Enable/Disable**: Globally enable or disable Copilot functionality.
  - **Language Settings**: Modify language enable configuration directly in the panel.
  - **View Quota**: View the remaining usage quota for code auto-completion in your account in the bottom right corner of the panel.

## Configuration Options

You can find the following configuration options in `Settings -> Plugin Configuration -> GitHub Copilot`:

- **`Copilot Status Display`**: Controls how the status bar icon is displayed.
  - `Auto`: Automatic mode.
  - `Icon Only`: Display icon only.
  - `Icon + Text`: Display icon and text "Copilot".
- **`Enable or Disable Copilot Inline Auto-completion`**: Globally enable or disable this plugin's code auto-completion feature.
  - `Checked`: Enabled (default).
  - `Unchecked`: Disabled.
- **`Configure Auto-completion for Specific Languages`**: Configure which languages to enable code completion for.
  - Format is `languageId=true/false`, multiple configurations separated by commas `,`.
  - For example: `*=true,markdown=false` means enable for all languages, except markdown files.
- **`Specify the Node Executable Path for Copilot Language Server Runtime`**: Specify the Node.js executable file path required to run the Copilot language service.
  - **Important**: Please ensure the Node.js version pointed to by this path is not lower than 22.14.

## Notes

- **GitHub Copilot Subscription**: You need to have an active Github account and subscribe to GitHub Copilot to use this plugin. You can view your GitHub Copilot subscription status via this link: [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features).
- **Network Connection**: The plugin requires a stable network connection to access GitHub Copilot services. If your network environment requires a proxy, please ensure the network proxy is correctly configured.
- **Login Timeout**: The device authorization process has a time limit (usually 15 minutes). Please complete the authorization before the device code expires.
- **Error Troubleshooting**: If you encounter problems, you can open the HBuilderX development log (`Help -> View Run Log`) to view output related to "copilot-for-hbuilder" for detailed error information.
- **Manual Installation**: If you install the plugin by extracting the plugin zip package to the HBuilderX plugins directory, please ensure that the plugin root directory name is consistent with the `id` content in `package.json`, otherwise the plugin activation will fail.

## FAQ

**Q: What if login fails or there is no response for a long time after clicking login?**

A: This is usually caused by the following reasons:
1.  **Network Issues**: This is the most common reason. The plugin cannot connect to GitHub's authorization server (may require a VPN). Please check your network connection, firewall, or proxy settings to ensure you can normally access `https://github.com`. The log may show errors like "Unable to access https://github.com/" or "request timed out".
2.  **Device Code Expired or Authorization Denied**: The web authorization process has a time limit, and the device code will become invalid if the operation times out. Also, if you manually deny authorization on the GitHub page, the login will fail. Please try the login process again.

**Q: Why can't I see any code suggestions?**

A: Please follow these steps to troubleshoot:
1.  Check the status bar icon to ensure you have successfully logged in and Copilot is enabled.
2.  Confirm that the current file's language is enabled in the `Configure Auto-completion for Specific Languages` configuration.
3.  Check if your network connection is normal.
4.  View the HBuilderX development log to confirm if there are any error messages from the Copilot service.

**Q: The status bar icon shows disabled or warning status. What does this mean?**

A:
- **Disabled Icon**: Indicates the plugin is globally disabled, or the language of the current file is disabled.
- **Warning Icon**: Usually indicates a problem communicating with the Copilot service, such as a network error or request failure.
- Click the icon to open the status panel for more detailed status information.

**Q: Plugin startup failed with "node" related errors.**

A: This is because the plugin failed to find a suitable Node.js runtime environment. Please ensure you have installed **Node.js v22.14 or higher**, and correctly filled in its executable file path in the plugin setting `GithubCopilot.node.path`.

**Q: How do I log out of my GitHub account?**

A: Click the Copilot icon in the status bar to open the status panel, then click the "Sign Out" link.
