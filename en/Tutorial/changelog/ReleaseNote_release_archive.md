## 3.99.2023122611
* Added bug feedback function, currently supports reporting bugs for HBuilder and uni-app x. (The entrance is in the menu Help-Report a bug, and the blue button in the upper right corner of the App running console.)
* Fixed the bug that the built-in browser, previewing html files and markdown files, failed to preview in some cases [Details](https://ask.dcloud.net.cn/question/182604)
* Fixed a Bug in windows when closing HBuilderX that the UI was stuck when creating a desktop shortcut [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=310)
* Fixed a bug in Windows where, in some cases, the address bar could not use shortcut keys to copy addresses. [Details](https://ask.dcloud.net.cn/question/180472)
* Fixed the bug that in some cases on MacOSX, text in the built-in browser devtools cannot be copied using shortcut keys [Details](https://ask.dcloud.net.cn/question/181819)
* Fixed multi-file search, double-click the search result item, the input focus is not automatically set to the bug in the open editor [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=309)
* Fixed the bug that the .editorconfig configuration `insert_final_newline` and `trim_trailing_whitespace` did not take effect when saving the file [Details](https://ask.dcloud.net.cn/question/165790)
* Language Server: Added uni-app x, uts automatic repair, support conversion between number type and kotlin number type
* Language Server: Added uni-app x, uts type checking, support function type checking [Details](https://uniapp.dcloud.net.cn/uni-app-x/uts/function.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B)
* Language Server: Added uni-app x, uts type checking, and adjusted the checking algorithm from structure verification to name verification [Details](https://uniapp.dcloud.net.cn/uni-app-x/uts/type-compatibility.html)
* Language Server: Adjust uni-app x, uvue file code prompts to only prompt built-in components that support uni-app x.
* Language Server: Fixed the bug that the global event does not take effect when verifying the event type of uni-app x and uvue components
* Language Server: Fixed a bug that caused the language service to crash when starting in some cases [Details](https://ask.dcloud.net.cn/question/182739)
* Language Server: Fixed the bug that the replacement position of @rule was incorrect in some cases when prompting the code of less and scss files. [Details](https://ask.dcloud.net.cn/question/182353)
* Language Server: Fixed the bug that field nesting syntax is not supported when unicloud-db component code prompts
* uni-app: Fixed a bug that caused the Alipay applet to fail when pages.json had duplicate keys due to conditional compilation. [Details](https://ask.dcloud.net.cn/question/182610)
* uni-app: Fixed the bug that the uni-app cli project cannot run to the Alipay applet.
* uni-app: Fixed the bug that MacOSX uni-app, when running to the Alipay applet, is not compatible with the tool path of the old Alipay applet.
* Mobile App Playground: Fixed a bug that caused the dock to be installed repeatedly on some Android models due to incorrect installation time of the dock. [Details](https://ask.dcloud.net.cn/question/182690)
* Mobile App Playground: Fixed the bug that after running Android to a custom debugging base and then running the standard base to the iOS simulator, a failure to install the debugging base was reported.[Details](https://ask.dcloud.net.cn/question/181703)
* 5+ App: Fixed the bug that the toolbar run menu has more menu items such as run to Chrome
* uni-app: Optimize the permission visual interface of manifest.json

## 3.98.2023112510
* Markdown: Added Markdown preview to support simultaneous bidirectional scrolling of the editor and preview view
* Markdown: Newly added: When copying code and pasting it into the Markdown editor in the editor opened in HBuilderX, the code block in the corresponding language will be automatically wrapped.
* Markdown: Fixed a bug that caused MarkDown file rendering to be extremely slow on some MacOSX computers with built-in browsers
* Fixed an issue where files opened in HBuilderX would occasionally not automatically refresh their content after being modified by an external program. [Details](https://ask.dcloud.net.cn/question/181222)
* Language Server: Fixed the bug that conditional compilation codes such as `#ifdef` in ts language are not highlighted
* Language Server: Fixed the bug that the id cannot be transferred to the definition
* Language Server: Fixed the bug that id and class prompts were not sorted according to file reference relationships
* Language Server: Fixed a bug in windows file monitoring that prevented renaming and deleting files
* Language Server: Fixed the bug that the data type of v-slot:default is deduced incorrectly when the DB Schema table specified by the unicloud-db component has no attributes.
* Language Server: Fixed the bug in uni-app x where some vue types were incorrect causing syntax errors.
* Language Server: Fixed the bug of TailwindCSS plug-in, no code prompt [Details](https://ask.dcloud.net.cn/question/181475)
* Language Server: Added uts type verification error prompt to support internationalization
* Language Server: Fixed the bug that some Android system APIs in the uts plug-in are not compatible with kotlin
* Language Server: Fixed the bug that the imported path is incorrect when the uts system library code prompt triggers automatic package import.
* Language Server: Fixed the bug that the imported path is incorrect when the uts system library automatically repairs and imports packages.
* Language Server: Fixed the bug that after the file is deleted, the class and id code defined under the file will still be prompted.
* Language Server: Fixed css code prompts. When the project is too large, some classes will not prompt.
* Language Server: Adjustment: Support string or number type assignment to the corresponding string or number literal union type during type verification.
* Language Service: Fixed When calling a function using a literal object to pass in parameters, add double (single) quotes within {} to prompt the attribute, and then press Enter to complete the incorrect bug.
* Fixed a bug that may cause a crash when quickly closing the editor when the editor variable is suspended
* Added support for automatically opening the project and entering preview mode when uni-app is run into the Alipay applet.
* Mobile App Playground: Optimize the Android custom runtime, the version number is the same but the installation time is different, will not cover the installation Bug
* Mobile App Playground: Fixed a Bug where Android devices connected through the LAN did not support reverse proxy when running Times [Details](https://ask.dcloud.net.cn/question/181431)

## 3.96.2023110403
* Fixed the bug that the login window is not visible in some cases on the computer extension screen of Windows.
* Fixed a bug introduced in 3.94 that caused wap2app project packaging failure due to plug-in path adjustment.


## 3.95.2023102806
* Fixed the bug of abnormal operation of uniCloud initialization wizard caused by 3.94


## 3.94.2023102613
* Added uni-app-x, no longer using js and webview, compiled into a pure native App, currently only supports Android. [Details](https://uniapp.dcloud.net.cn/uni-app-x/)
* Added HBuilderX version upgrade to support differential updates and improve update speed
* Added HBuilderX support for search setting items (shortcut key: `Alt+Shift+,`)
* Fixed the bug of switching the console back and forth in the menu [View], and then pressing `Alt+Tab`, a new blank console without title will appear.
* Added new project manager, mouse drag and drop to move files, added confirmation pop-up window
* Fixed the bug of falsely reporting a format error when the .editorconfig file contains extended setting items.
* Optimize the performance of large character replacement operations
* Optimize the operation performance of large files and comment thousands of lines of code
* Fixed MacOSX In some cases, HBuilderX crashes when clicking on the top view or help menu
* Fixed multi-file character search, activate the search view for the first time, the search input box does not automatically focus the bug
* Fixed the bug of incorrect indentation of conditional compilation after formatting when writing conditional compilation in template area of vue/uvue file.
* Fixed the bug that when formatting a TS file and selecting an area for formatting, the formatting result may be incorrect when the selected area is smaller than one line.
* Fixed the bug that the HBuilderX plugin-manager Node process cannot exit under certain circumstances
* Markdown: Fixed the bug of flickering in Markdown image floating preview.
* Markdown: Fixed a bug that required multiple undoes to restore after formatting the Markdown table
* uni-app: Added uni-app manifest.json App module configuration, Facebook login, added configuration item client_token
* uni-app: Fixed the bug in uni-app manifest.json, App module configuration->Positioning->Amap positioning, only check Android and verify appkey_ios
* uni-app: Fixed the bug that when uni-app creates a new page, the indentation and line breaks of the page when inserted into pages.json are inconsistent with the current editor settings.
* uni-app: Fixed the bug of uni-app manifest.json crashing occasionally when clicking on certain elements
* Adjust uni-app manifest.json uni-app and 5+ projects Adjust Android platform support CPU type Default value is `arm64-v8a`
* Mobile App Playground: Fixed the bug of slow device list refresh in the Android device selection window when the App is run on a real device
* Mobile App Playground: Fixed the bug in the Android device selection window when the App is running on a real device. Under Windows, the phone list sometimes displays abnormal data.
* Mobile App Playground: Fixed the bug in 5+ projects that when modifying js, css, pictures and other files, the pages that reference these resources will not be automatically refreshed.
* uni_modules: Fixed the bug that the uni_modules plug-in upload plug-in does not have uni-app x related categories
* uni_modules: Fixed the bug that caused HBuilderX to crash when the ${} special mark appeared in the update log when uploading the uni_modules plug-in to the plug-in market.

## 3.8.12.20230817
* Added Git plug-in In the address bar in the toolbar, add a Git branch name to the left of the project name, and you can easily perform Git-related operations after clicking
* Language Server: JS, TS supports automatic repair of error checking
* Language Server: Added support to type `/**` on the ts method to automatically extract method parameter information to tsdoc
* Language Server: Fixed the bug that the text in the floating frame does not support copying by `ctrl + c`
* Language Server: Fixed the bug that the editor floating frame occasionally floats to other application windows
* Language Server: Typing `@` in the TS file block comment does not prompt the bug of the comment label
* Language Server: Enter `@` in the JS block comment of the vue file to prompt the comment label, and replace the bug with incorrect content after pressing Enter
* Language Server: Fixed the bug that there is no code hint in the vue/nvue file tag event
* Language Server: Fixed the bug that this in the Vue arrow function cannot access the vue instance
* Language Server: Fixed the bug that Vue API description internationalization fails
* Language Server: In some cases, the file code in the uniCloud directory prompts a slow bug
* Language Server: After the js syntax check is enabled, the js error in the vue file is incorrect Bug
* Language Server: Fixed the bug that the uni-app project cannot recognize the pinia module
* Language Server: Fixed the bug that the built-in module `(eg: @dcloudio/uni-app)` will not be prompted when the module name of the uni-app project is prompted
* Language Server: Fixed the bug that the occasional outline of vue and html files does not take effect
* Language Server: Fixed the html file, some template syntax may cause the bug that the code cannot be prompted
* Fixed code assistant, the bug that the next page button is still not grayed out when the list cannot be turned to the next page in some cases
* Language Server: Fixed the bug that in some cases, after HBuilderX exits, some node processes cannot exit correctly with 100% CPU
* Fixed multi-file search After specifying the search range, switching the editor tab causes the bug that the search range changes
* Fixed single-line comments, when the cursor is at the beginning of the line, the bug that the anti-comment does not take effect
* Fixed the bug that when the uni-app is running on a real machine, unplug the phone and plug it in again, re-running will cause repeated console logs and multiple compilation processes
* Fixed the bug that the `Restart Application` button in the console toolbar does not take effect after being clicked in some cases when the uni-app is running on a real machine

## 3.8.7.20230703
* Added support for `Ctrl + Tab` to quickly switch between views(macOS:shortcut `Alt + Tab`).
* Added automatic filling of `clogvar` code block with the nearest variable.
* Added support for code folding in the code block region of Markdown editor.
* Added support for automatic uploading of uni-app Alipay releases. [Details](https://hx.dcloud.net.cn/cli/publish-mp-alipay)
* Fixed language service caused slow HTML tag and attribute suggestions in certain cases.
* Fixed language service caused high CPU usage in certain cases.
* Fixed language service global class and ID definitions were not able to navigate to local definitions. [Details](https://ask.dcloud.net.cn/question/170668)
* Fixed language service paths starting with @/ in Vue files were unable to navigate to their definitions.
* Fixed language service TypeScript files in Vue CLI projects were incorrectly reported as errors.
* Fixed triggering comment with `Ctrl + / `on multiple lines would also comment the last line if the cursor was at the beginning of the line.
* Fixed inserting a blank line above with `Ctrl + Shift + Enter` would result in incorrect indentation in certain cases.
* Fixed the console log where shortcuts like `Shift + Up` or `Shift + Down` couldn't be used to select text.
* Fixed multi-file character search where the highlighting in the editor was not cleared after clicking "Reset".
* Fixed the bug that HBuilderX crashed during the multi-file character search in some cases
* Improved multi-file character search by increasing the display area for search results on small screens.
* Fixed multi-file character search where the input for include/exclude directories was not taken into account when clicking the "Search" button.
* Fixed the built-in browser where occasional crashes occurred when switching between preview and closing multiple times.
* Fixed switching the left-side view (such as the project explorer) while having multiple running consoles would cause misalignment of the buttons at the top of the console.
* Added plugin API `languages.registerInlineCompletionItemProvider` to support inline code completion. [Details](https://hx.dcloud.net.cn/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)
* Added plugin API `window.createStatusbarItem` to create a status bar item. [Details](https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem)
* Optimized the performance of the plugin API `console.appendLine` for logging.

## 3.8.4.20230531
* Fixed the bug caused by 3.8.3 when the computer is connected to an external monitor and the multi-file character search function is activated, and the bug of switching to other screens [Details](https://ask.dcloud.net.cn/question/170787)
* Language Server: Fixed the bug that the class cannot be prompted for Vue files in some cases
* Language Server: Fixed In some cases, the language service is abnormal, prompting the bug of `The TypeScript language service died unexpectedly 5 times in the last 5 Minutes.`
* Language Server: Fixed the bug that in some cases, Node process takes up 100% of the CPU

## 3.8.3.20230526
* 【Important】Windows 64-bit system, HBuilderX built-in Node adjusted to 64-bit Node.exe.
* Optimize the multi-file character search from the toolbar to the left view of HBuilderX [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/node-multi-file-search).
* Optimize the left view of HBuilderX. The drop-down menu in the upper right corner of the top supports switching views of project manager, multi-file character search, debugging, etc.
* Language Server: Added "Find references" which codes the file is referenced by (right click on the file [File Find Reference]).
* Language Server: Added Vue and Html files to support ID and Class lookup references.
* Language Server: Added uni-app project component to support finding references.
* Language Server: Added Html file to introduce Vue.js support code Vue code prompt.
* Language Server: Optimize javascript/typescript function overload hints.
* Language Server: Fixed the bug that the prompt ratio of px to upx/rpx is set, and the code assistant prompts that the custom ratio does not take effect.
* Language Server: Fixed the js file. In some cases, require cannot prompt the bug of other js file paths.
* Language Server: Fixed the sorting rules of the code assistant, and fix the bug that the first item of typing unic under the uni-app project is not uniCloud.
* Language Server: Fixed the uni-app project, in some cases, the project does not exist in the uni_module directory, and the bug that the language service reports an error.
* Language Server: Fixed the bug that the path prompt at the beginning of uni-app/, the input completion item in the middle is incorrect.
* Language Server: Fixed the bug that the uts plug-in Android system API part of the type inheritance relationship error leads to the bug of syntax verification error.
* Language Server: Fixed the bug that some types of uts plug-in iOS are missing default constructors, which causes syntax verification errors.
* Language Server: Fixed the bug that the uts plug-in iOS String type method is incomplete and the syntax verification error is reported.
* Language Server: Fixed the bug that the template tag of the Vue file cannot prompt lang.
* Language Server: Fixed the bug that the template tag of the Vue file, when the lang attribute is empty, the html tag cannot prompt.
* Language Server: Fixed Vue file SCSS @ syntax, in some cases, the bug that the @ symbol replaces the wrong position after the code assistant enters.
* Language Server: Fixed Vue file SCSS, in some cases, !default and !global have no prompt Bug.
* Fixed Bug that cannot format files above 1M.
* Fixed formatting Format plug-in, when there is an indentation on the first line of the js file, the formatting will cause the indentation to be indented according to the first line as a whole Bug
* Fixed In some cases, when the project manager is always associated with the editor, opening a file under the sub-project or the parent project will cause the bug that the project manager scrolls incorrectly
* Optimize Alt+Tab to switch tabs, list item icons and project manager icons are consistent.
* Added MacOSX, App project, support to choose custom base to run to iOS Simulator [Details](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)
* Fixed the bug that when the uni-app project runs and downloads the compiler plug-in, in some cases, the console does not prompt to re-run.
* Added uni-app to support multiple projects to run to WeChat developer tools at the same time.
* Adjust the uts project, run it to the iOS simulator, the console shields the uts debugging entry, and does not support the uts debugging of the iOS simulator.
* Adjust uts project, uts Android development extension, increase gradle version limit, only support version 7.6.1 and below.
* Fixed uni-app when the project contains uts authorized version of the plug-in, submitting the bug that the server failed to make a custom debugging base.
* 【Important】Adjust the uni-app manifest.json and package window, delete the entrance of the interactive game (Cash Out Cat), this advertising business will be officially offline on May 31.
* Added uniCloud Aliyun, the front-end web page hosts a custom domain name, and automatically refreshes the CDN after uploading files.

## 3.7.11.20230427
* Fixed some minor issues

## 3.7.10.20230425
* Fixed some minor issues

## 3.7.9.20230324
* Language Server: Fixed the bug that 404 is displayed after the URL of the help document in the code assistant is redirected due to the change of the Vue domain name
* Fixed the bug that HBuilderX crashes when you right-click the schema.json file in 3.7.8 to download DB Schema
* Fixed js-beautify formatting plug-in, when the indentation is set to `tab`, the ts file formatting causes the bug that the indentation in the comment is wrong
* Fixed the bug caused by 3.7.8, some low-version MacOSX operating systems, no iOS mobile phone detected

## 3.7.8.20230323
* Added a built-in formatting plug-in, which supports the use of the .jsbeautifyrc configuration file under the project [Details](https://hx.dcloud.net.cn/Tutorial/extension/js-beautify)
* Fixed the bug that the built-in formatting plug-in does not support formatting the ts code in the Vue file.
* Language Server: Fixed Vue file `this.xxx = ...`, xxx cannot go to the defined bug.
* Language Server: Fixed the uni-app cli ts project, after using pnpm to install the module, opening the vue file under the project causes the language service to crash.
* Fixed the bug that the language service ts file in some cases, the ts grammar check does not take effect
* Optimize settings, language service configuration, enable code assistant, after modifying configuration items, it will take effect without restarting HBuilderX
* Fixed Enable .editorconfig support, when configuring `insert_final_newline`, accidentally touch the bug of the code assistant when saving
* Fixed Enable .editorconfig support, if the last line of the Vue file does not wrap, the bug that the file content will be wrong when saving
* Fixed MacOSX, run the App to iOS, the device selection window, in some cases, the bug that the iOS device is repeatedly displayed
* Added uni-app uts plug-in to run to iOS to support debugging (requires MacOSX) [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)

## 3.7.3.20230223
* Add code block surround, wrap code blocks such as if outside the selection area (menu Edit->Surround->Code block surround, shortcut key win: `Ctrl+Alt+T`, mac: `Command+Alt+T`). [Details](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=surround)
* Added project manager, font size adjustment (menu settings-> Commonly Used). [Details](https://hx.dcloud.net.cn/Tutorial/setting?id=project-explorer-font-size)
* Language Server: Fixed Vue3-ts project, the bug that the image src attribute reports an error [Details](https://ask.dcloud.net.cn/question/162064)
* Language Server: Fixed uni-app main.js, the Vue variable or method defined by Vue.prototype.xxx, in the vue file, `this.` cannot prompt Bug. [Details](https://ask.dcloud.net.cn/question/147190)
* Language Server: Fixed the Vue file, when there are only script and style nodes, but no template node, the document structure diagram shows a blank bug.
* Fixed the bug that multiple lines of content will be copied when copying or cutting when multiple cursors are on the same line.
* Fixed the bug that it may not be possible to go to the definition when it takes a long time to go to the definition.
* Fixed the bug that HBuilderX cannot be started due to abnormal editor theme configuration in some cases.
* Fixed the bug that blank characters cannot be highlighted in the Markdown code area.
* Fixed the bug that Markdown copied table data from WPS and pasted it as a Markdown table syntax conversion error.
* Fixed the bug that the editor will not automatically scroll to the original cursor position when you press the esc key to find symbol in Editor.
* Fixed the setting interface and manifest.json interface, clicking the blank area on the right side of the text on the check box control will also cause the bug to be selected/cancelled.
* uniCloud: Fixed the bug that the upload and run operation fails when there are Chinese files in the cloud function directory of uniCloud cloud function.
* Mobile App Playground: MacOSX run the project to the real iOS device, and automatically start the App (MacOSX needs to install Xcode that matches the iOS mobile phone system) [Details](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#ios-app-automatically-open)
* Mobile App Playground: Added Windows operating system, iOS standard base, supports signing with Apple certificate, after signing, it can run standard base to iOS real device [Details](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* Mobile App Playground: Added Windows device selection window, custom dock and standard dock support switching with & shortcut keys.
* uni-app: Added WeChat Build, automatically uploaded to the WeChat platform, and supports the configuration of WeChat ci robot numbers. [Details](https://uniapp.dcloud.net.cn/tutorial/build/publish-mp-weixin-cli.html)
* uni-app: uts plug-in run to Android support debug debugging. [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* uni-app: Optimize uts plugin, iOS compilation, improve compilation speed.
* uni-app: Fixed the bug that when uni-app runs to Chrome, it opens a new Chrome instance every time it runs.

## 3.6.18.20230117
* Fixed some minor issues

## 3.6.17.20230112
* Fixed HBuilderX green soft theme, select the terminal text, the bug that the selected color is not displayed.
* Optimize one-click sharing of Markdown, css and js resources required by the webpage, and upload them to uniCloud web page hosting.
* Fixed the bug that the uni-app runs to the iOS simulator, and the uni debugging is turned on. After opening, the window shows a blank bug

## 3.6.15.20221228
* Language Server: Fixed the bug that the uni-app Vue file cannot be prompted for conditional compilation in the script tag [Details](https://ask.dcloud.net.cn/question/159783)
* Fixed the bug that in some cases, the .hbuilderx/launch.json file in the project root directory repeatedly writes data and reads and writes frequently, causing the editor to freeze
* Fixed the bug that the uni-app Vue3 runs to the browser, the browser Devtools console, and the log path shows errors
* Fixed the bug that the directory is incorrect after the uni_modules plugin is right-clicked to update the cli project

## 3.6.14.20221215
* Fixed the bug caused by HBuilderX3.6.13 that in some cases, the cursor position is wrong after the editor is pressed.
* Fixed the bug that the html file exported by HBuilderX3.6.13 runs to Chrome and starts a new Chrome instance.
* Fixed the bug caused by HBuilderX3.6.13 that in some cases, where the project root generated a 1.text test file.

## 3.6.13.20221209
* Upgrade HBuilderX built-in Node version to 16.17.0 and built-in npm version to 6.14.12
* Git plug-in: git pull operation, Git message status bar, added log view function.
* HBuilderX Settings: Aggregate language service-related configurations into the Language Service Configuration configuration item.
* Added Node debugging, which supports attaching breakpoint debugging to the already started node process. [Details](https://hx.dcloud.net.cn/Tutorial/extension/node-development?id=attach)
* Added MarkDown, support for Mermaid diagrams, such as flow charts [Details](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=mermaid)
* Added MarkDown, code area, kotlin and uts with code highlighting support
* Added MarkDown, `! []()` and `[]()` syntax, support prompt file path [Details](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=PathHints)
* HBuilderX: Fixed a Bug where the language service process would not exit when HBuilderX exits abnormally
* HBuilderX: Windows, pop-up prompts when the Node process is intercepted by security software, causing Node plug-ins such as language services to fail to start.
* HBuilderX: Fixed the bug that some plug-in functions will fail when closing the new HBuilder window or dragging the tab to create a new window.
* Language Server: Fixed a Bug where the image path prompt failed when an unsupported image format existed
* Language Server: Fixed a Bug where space was added to the first line of formatted ts files for MacOSX
* Language Server: Fixed the bug that the uni-app pages.json usingComponents code hints the typo [Details](https://ask.dcloud.net.cn/question/158601)
* Language Server: Fixed the bug that the intermediate code is lost after the code assistant is displayed, dragged to the bottom of the editor, and press Enter at any cursor position
* Language Server: When entering a code block quickly, in some cases, the information on the right side of the code prompt window displays the bug of the results returned by other language services.
* Language Server: Fixed a bug where when there were multiple CSS classes, quickly typing a space and then pressing the left button, causing the code prompt to replace the wrong position after carriage return.
* Language Server: Fixed the bug that when there is a Chinese `,` at the end of the JSON file, the grammar check and the wavy line are not displayed when the error is reported.
* Language Server: Fixed the bug that uni-app App.vue style introduced multiple files, and the class transfer definition only took effect on the last file. [Details](https://ask.dcloud.net.cn/question/154824)
* Added uni-app run to H5, debug, support to choose to use Chrome Debug, use the built-in browser to debug (click the bug icon in the console to pop up a selection menu)
* Added uni-app manifest.json, App module configuration, added "Secure Network". [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
* uniCloud: Fixed Web Page Hosting, In some cases, the release fails and still performs the upload operation Bug.
* uniCloud: Fixed db_init.json to initialize the cloud database. When there are too many database tables, the bug of initializing the cloud database timeout.
* uniCloud: Added App packaging, console download link, one-click upload uniCloud, support to upload ipa or apk files to Aliyun official cloud storage.
* uni_modules: Added Supports configuration of module initialization scripts [Details](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)
* uni_modules: Fixed the bug that the plug-in market imports the plug-in, runs slowly and times out, prompting `The plug-in processing external application request failed to complete` Bug
* uni_modules: Fixed plugin publish failed without category
* Mobile App Playground: Added support for UDID display and replication in the iOS device selection window
* Mobile App Playground: Added uts plug-in for running iOS standard base to iOS device
* Mobile App Playground: Optimize the size of iOS standard base package, only support arm64 architecture. That is, devices prior to iPhone 5S and iPad Air (mini2) are not supported. This tweak does not affect packing and custom docks.
* Mobile App Playground: Optimize the device selection window, standard base and custom base, display base information
* Mobile App Playground: Optimize the menu [Run - Mobile App Playground], remove the menu [Select Playground]
* Mobile App Playground: Fixed the bug that the device selection window refreshes the device list and the radio at the bottom is changed
* Mobile App Playground: Fixed the bug that the Node process does not end in some cases when compiling and running the uts plugin
* Mobile App Playground: iOS standard base, supports signing with Apple certificate, after signing, it can run standard base to iOS real device [Details](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* Mobile App Playground: Fixed the bug that the content is not formatted after the log of Object type is opened in the console。
* Mobile App Playground: Fixed a Bug in the device selection window where HBuilderX was unable to perform any operations due to the error pop-up behind the device selection window in some cases
* Mobile App Playground: Fixed a Bug where the iOS offline SDK failed to synchronize files when the target was not HBuilder
* Mobile App Playground: Fixed the device selection window, in some cases, click the run button, the bug that HBuilderX crashes
* Mobile App Playground: Fixed the bug that the uni-app uts, Android plug-in needs to be manually downloaded and added to the lib directory when calling the API in the built-in dependency library. [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#tempnotice)
* uts plug-in: Added iOS platform to support local compilation and real machine operation, need to configure Xcode environment. [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)
* uts plug-in: Added Android platform, real machine operation supports three-party Gradle repository. [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* uts plug-in: Support code hints for iOS system API and Android system API.
* uts plug-in: Android platform Improve code hints for R resources.
* uts plug-in: Android platform supports import-free use of classes under java.lang.*
* uts plug-in: HBuilderX supports new uts files and platform directories.

## 3.6.5.20221121
* Fixed windows built-in browser, drag the built-in browser, HBuilderX crashes the bug
* Fixed the bug that uni-app runs to the built-in browser, and in some cases, the cookies are inconsistent

## 3.6.4.20220922
* Language Server: Fixed the bug that the CSS code prompt speed is too slow for large CSS files
* Language Server: Fixed the bug of false positives in syntax verification in some cases when tsconfig.json exists in the uni-app project
* Language Server: Fixed the bug that in some cases, the language service frequently reported errors and crashed, and the bug of frequent pop-up errors in the lower right corner of the HBuilderX window
* Mobile App Playground: Fixed the bug that the custom dock made by Android Studio, when running to Android devices, reported an error
* Mobile App Playground: Fixed the bug that uni-app runs to the iOS simulator, modifies the nvue file, and cannot synchronize the modification
* Mobile App Playground: Fixed the bug that when uni-app is run to the mobile phone, in some cases, the console displays `compiled successfully` and there is no response
* Mobile App Playground: Fixed the bug that uni-app runs to the Android 4.4 emulator and prompts that the base cannot be found

## 3.6.3.20220917
* Fixed the bug that the editor closes the tab, and crashes in some cases
* Fixed the bug of Windows built-in browser, mobile device mode, unable to select elements
* Fixed the bug that when switching to other programs during the HBuilderX code prompt process, the code prompt window would cover other programs in some cases
* Language Server: Fixed the bug of invalid px to rpx in uni-app cli project
* Fixed console log, some types of log output bugs
* Fixed the bug that uni-app runs to the iOS simulator, the console log is truncated or the output is incomplete

## 3.6.2.20220914
* Added UTS syntax support. Develop native using TypeScript [Details](https://en.uniapp.dcloud.io/tutorial/syntax-uts.html)
* Added the function of finding references, currently only supports js and ts
* Windows: Upgrade built-in browser, Upgrade Cef version to 90.6.7
* HBuilderX settings, plugin configuration, add configuration items, Enable JavaScript Validation, Enable TypeScript Validation
* Language Server: Added real-time verification of variable syntax in vue and js (js verification needs to be enabled in [Settings - Plugin Configuration])
* Language Server: Added built-in syntax check to support warning level
* Language Server: Added vue3 `style module` to support code hints
* Language Server: Added vue2&3 `slot` to support code hints
* Language Server: Added vue2&3 script area to support automatic package import
* Language Server: Fixed the bug that vuedoc does not take effect in script setup
* Language Server: Fixed The custom component of vue3 `script setup` import, the bug that cannot be prompted in the template area
* Language Server: Fixed the bug that `()` will be repeatedly generated when modifying the name of the function call
* Language Server: Fixed the bug that special String does not support `if(idstr === '|')`
* Language Server: Fixed the bug that the variable suspension in the vue template area does not take effect
* Language Server: Fixed `uniCloud.importObject()`, after the cloud object is modified, the code prompt and suspension cannot take effect in real time
* Language Server: Optimized `uniCloud.importObject()`, code hints for parameters and return values ​​when calling methods on cloud objects
* Language Server: Fixed the bug that the framework package of the vetur specification could not take effect in real time when it was installed and uninstalled
* Language Server: Fixed the bug that the suspension of variables and functions referencing other files in the html script did not take effect
* Language Server: Fixed the bug that the return value and parameter type are incorrect when parsing the function that references other files in the html script
* Language Server: Fixed the bug that the frame syntax library of the status bar at the bottom of HBuilderX did not take effect when removed
* Language Server: Fixed the vue-cli project, the script area in vue will not recognize the bug of tsconfig.json under the project
* Language Server: Optimization After setting `px` to `rem`, the conversion prompt is placed in the first item of the code prompt
* Language Server: Fixed JavaScript `Object.` does not prompt the bug of es6+ new methods
* Language Server: Fixed `import xxx from 'XXX.vue'` without the vue suffix, prompting that the module cannot be found, and cannot go to the defined bug
* Language Server: Fixed the bug that the code prompt could not be automatically triggered when typing the character `.` in jsx and tsx files
* Fixed Editor, Close Tab, in some cases, the bug of not remembering the folded state
* Added tabs Right-click menu Add menus Move tabs to the left, move tabs to the right
* Windows: Fixed the bug that when HBuilderX is not started, when importing the plugin market plugin, the UI view of the first import shows a blank bug
* Fixed the bug that the jump position is wrong in some cases of multi-file character search
* Fixed the bug that when going back to another file, the cursor jumps to the beginning of the file instead of going to the position before the definition
* Added new project, HBuilderX plugin, added internationalization example template
* Fixed the bug that debug view, variable, Global node, UI display disorder
* Fixed the bug that HBuilderX saves files in utf-8 format without file header identification byte 0xEFBBBF
* Mobile App - Cloud packaging: Fixed the bug that when the static resource file under the project is too large (over 100M), the packaged bug cannot be submitted
* Mobile App - Cloud packaging: Fixed the bug that HBuilderX crashed when submitting packaging in some cases on Windows
* Mobile App Playground, using Node to run, no longer relying on Java
* Added Mobile App Playground, Device selection window, added base selection function
* Fixed Mobile App Playground, When the project path exists in Chinese and runs to an iOS device, the App page displays an abnormal bug
* Fixed Mobile App Playground, a bug where custom base installation failed in some cases
* uni-app: Build, H5 and Mini-Programe, window UI text internationalization
* uni-app：Fixed manifest.json, a bug that the uniPush field becomes null in some cases
* uni-app: Fixed manifest.json After the application name is internationalized, the packaging interface, the application name displays `%%`
* uni-app: Adjust the H5 configuration on the left side of manifest.json to the Web configuration

## 3.5.3.20220729
* Added HBuilderX status bar Upgrade added red dot prompt
* Added MarkDown code block to support language coloring and highlighting, you need to download and add the corresponding language coloring extension plug-in
* Added Markdown support to go to `#title` or `@`alias of title across files
* Added TypeScript support for syntax verification
* Added language service to support tailwindcss, need to install tailwindcss plugin [Details](https://ext.dcloud.net.cn/plugin?id=8560)
* Fixed language service React, add `()` bug after `<App />` carriage return
* Fixed language service React jsx file no code hint bug
* Fixed language service CSS pointer-events missing auto attribute bug
* Fixed the bug of code block settings, custom other language code blocks, two JSON options appear in the window list
* Fixed the bug that the `$DATE_TIME` in the comment of the custom code block displays the wrong date
* Fixed the operating system environment variable, configuring `NODE_OPTIONS --openssl-legacy-provider`, HBuilderX loses response when it starts
* Fixed the bug that the plugin API `hx.window.showQuickPick()` window could not scroll after opening the terminal
* Fixed the bug that the cursor position is wrong after opening the document for the first time and editing it for the first time
* Fixed the bug that the editor selects the language association window position offset
* Fixed the bug of plugin installation try move failed in some cases
* Git plugin, pull operation, the default option is changed to the fourth item, namely `git pull --rebase --autostash`
* Fixed some issues for language service


## 3.4.18.20220630
* Fixed the bug that json file search index symbol causes crash.
* Fixed the bug that the closed tag does not have a dotted box after the html tag is selected.
* Fixed the bug that the hover list disappears automatically when Windows opens the terminal, searches for categories in the toolbar, and moves the mouse to it.


## 3.4.15.20220610
* Fixed PHP files, comment shortcuts, comment bugs


## 3.4.14.20220607
* Added HBuilderX Support for custom project Snippets
* Added support for running and debugging Node programs
* Some of the built-in language syntax highlighting was migrated to the plug-in marketplace
* Added syntax highlighting that can be independently extended for new languages, and language highlighting plug-ins can be developed or downloaded
* Added language service, JavaScript supports DOM type recognition of id selectors in Document. getElementById and Document. querySelector
* Added language service, SCSS support for prompt `!global` and `!default`
* Added language service, VUE-CLI projects, code hints support element-UI, bootstrap-vue, etc
* Fixed language service, input CSS code in the same line, press Enter, replace the wrong position Bug
* Fixed language service, jsdoc carriage return error Bug
* Fixed Emmet syntax bug where pressing TAB did not respond correctly
* Fixed multi-file search, the right side of the display code coloring error Bug
* Fixed plug-in installation window, installed plug-in, version number display error Bug


## 3.4.7.20220422
* Fixed some issues for language service


## 3.4.6.20220420
* HBuilderX language service switched from Java to Node
* Fixed a bug where files in the editor would not be automatically refreshed after Git updated files in some cases
* Adjust Share to Weblink, adjust code area code coloring


## 3.3.13.20220314
* Fixed some minor issues


## 3.3.11.20220210
* Fixed some minor issues


## 3.3.10.20220124
* Fixed some minor issues


## 3.3.9.20220121
* Fixed the bug that the project manager project cannot be expanded in some cases on MacOSX


## 3.3.5.20211229
* Fixed some minor issues


## 3.3.4.20211228
* Fixed some minor issues


## 3.3.3.20211225
* Adjust the UI of the new project window [Details](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)
* Added project manager view toolbar, added positioning and folding functions [Details](https://hx.dcloud.net.cn/Tutorial/project?id=toolbar)
* Fixed a crash in the editor when Find Symbols by clicking on the search area or the built-in Explorer address bar.
* Fixed the Bug where MacOSX failed to run projects to iOS emulator when the HBuilderX installation path had a space.


## 3.2.16.20211122
* Fixed the bug that the hover code assist the editor to crash


## 3.2.15.20211120
* Added Files larger than 1M in size do not display hover code assist
* Fixed the bug that caused the node process to fail to start when the max-old-space-size configured in the operating system environment variables was too large


## 3.2.12.20211029
* Added HBuilderX plug-in development breakpoint debugging
* Added hover code assist [Details](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* Added Terminal supports clicking on the URL to jump to the browser [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* Fixed the bug that when the terminal input exceeds a certain length, the wrong line is displayed
* Fixed the bug that the editor window exceeds the screen area when creating multiple terminals
* Fixed the bug that the editor bookmarks are lost due to code formatting


## 3.2.9.20210927
* Added HBuilderX supports localized language pack extension [Details](https://github.com/dcloudio/hbuilderx-language-packs)
* Vue3 improvements [Details](https://hx.dcloud.net.cn/Tutorial/Language/vue-next)
* Added Configure whether you receive automatic updates.