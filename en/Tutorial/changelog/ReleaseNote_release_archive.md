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

## 3.4.18.20220630
* Fixed the bug that json file search index symbol causes crash.
* Fixed the bug that the closed tag does not have a dotted box after the html tag is selected.

## 3.4.15.20220610
* Fixed some minor issues

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

## 3.4.7.20220422
* Fixed some minor issues

## 3.4.6.20220420
* HBuilderX language service switched from Java to Node
* Fixed a bug where files in the editor would not be automatically refreshed after Git updated files in some cases

## 3.3.13.20220314
* Fixed some minor issues

## 3.3.11.20220210
* Fixed some minor issues

## 3.3.10.20220124
* Fixed some minor issues

## 3.3.9.20220121
* Fixed some minor issues

## 3.3.5.20211229
* Fixed some minor issues

## 3.3.4.20211228
* Fixed some minor issues

## 3.3.3.20211225
* Adjust the UI of the new project window [Details](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)
* Added project manager view toolbar, added positioning and folding functions [Details](https://hx.dcloud.net.cn/Tutorial/project?id=toolbar)
* Fixed a crash in the editor when Find Symbols by clicking on the search area or the built-in Explorer address bar.

## 3.2.16.20211122
* Fixed some minor issues

## 3.2.15.20211120
* Added Files larger than 1M in size do not display hover code assist

## 3.2.12.20211029
* Added HBuilderX plug-in development breakpoint debugging
* Added hover code assist [Details](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* Added Terminal supports clicking on the URL to jump to the browser [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* Fixed the bug that when the terminal input exceeds a certain length, the wrong line is displayed
* Fixed the bug that the editor window exceeds the screen area when creating multiple terminals