# HBuilderX plug-in installation failure solution

There may be various reasons for the plug-in installation failure. When the plug-in installation fails and there is no any indication of errors, click the menu [Help] [View Running Logs] to check the error in the log. Then solve the problem by specific error details.

## Question：npm installation failed
---

For some nodejs plugins, such as `less` and `eslint-js` plugins, the plugin zip package does not come with node_modules.

After importing plug-ins from the plug-in market, HBuilderX will automatically install node_modules. If the node_modules installation fails, the plug-in installation will fail.

#### Solution

Take the `less` plugin as an example: open the HBuilderX installation directory，enter `plugins/compile-less` directory，check if there is `node_modules` in the directory。

If it does not exist, open this directory in the terminal and manually execute `npm install`

<img src="/static/snapshots/faq/npminstall_en.jpeg" class="hd-img" style="border-radius: 25px;"/>

**Extension**

What is `npm`? npm is a package management tool installed with [NodeJS](https://nodejs.org/en/). HBuilderX has built-in `npm` and `node` tools, path: HBuilderX installation directory, under the `plugins` directory, you can see npm.
