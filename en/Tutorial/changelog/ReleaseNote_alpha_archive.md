## 3.6.14.20221216-alpha
* Fixed the bug caused by HBuilderX 3.6.12 that in some cases, the cursor position is wrong after the editor is pressed.
* Fixed the bug caused by HBuilderX 3.6.9 that in some cases, where the project root generated a 1.text test file.
* Fixed the bug that the html file exported by HBuilderX 3.6.7 runs to Chrome and starts a new Chrome instance.
* Fixed the bug that the uni-app web platform starts or stops browser Debugging, and in some cases, the console button is repeatedly displayed

## 3.6.12.20221207-alpha
* Fixed the bug that the uts file cannot display the outline view
* Fixed uts file, the bug that the right-click menu rearranges the code format is invalid
* Mobile App Playground: Optimize the device selection window, standard base and custom base, display base information
* Mobile App Playground: Optimize the menu [Run - Mobile App Playground], remove the menu [Select Playground]

## 3.6.11.20221205-alpha
* Mobile App Playground: Added uts plug-in for running iOS standard base to iOS device
* Mobile App Playground: Added support for UDID display and replication in the iOS device selection window
* Mobile App Playground: iOS standard base installation package size, only supports arm64 architecture
* Mobile App Playground: Fixed the bug that the device selection window refreshes the device list and the radio at the bottom is changed
* Mobile App Playground: Fixed the bug that the Node process does not end in some cases when compiling and running the uts plugin
* uts plug-in: Added uts file Added conditional compilation, using //#ifdef APP-ANDROID and //#ifdef APP-IOS for platform conditional compilation
* uts plug-in: support for creating uts files and platform directories
* uts plug-in: Language service, improve code prompt speed, reduce memory usage
* uts plug-in: Compile cache is supported, no modification will not compile
* uts plug-in: Fixed language service, iOS platform, parameter tag name is the wrong keyword times Bug
* Language Server: Fixed the bug that the uni-app pages.json usingComponents code hints the typo [Details](https://ask.dcloud.net.cn/question/158601)
* HBuilderX: Fixed the bug that some plug-in functions will fail when closing the new HBuilder window or dragging the tab to create a new window.
* uniCloud: Fixed db_init.json to initialize the cloud database. When there are too many database tables, the bug of initializing the cloud database timeout.
* uniCloud: Added App packaging, console download link, one-click upload uniCloud, support to upload ipa or apk files to Aliyun official cloud storage.
* Fixed uni_modules plugin publish failed without category

## 3.6.10.20221121-alpha
* Fixed the bug that HBuilderX 3.6.9 cannot compile and run normally when the uni-app CLI project has uts plug-in
* Fixed the uni-app uts plugin language service `import x from '@/uni_modules/'` uts plugin path error bug
* Mobile App Playground: Fixed the bug that HBuilderX crashes when you click the Run button in some cases in the device selection window
* Optimize uts plug-in iOS platform local compilation and real machine running speed

## 3.6.9.20221114-alpha
* Added MarkDown, support for Mermaid diagrams, such as flow charts [Details](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=mermaid)
* Added MarkDown, code area, kotlin and uts with code highlighting support
* Added MarkDown, `! []()` and `[]()` syntax, support prompt file path [Details](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=PathHints)
* Language Server: Fixed a Bug where the image path prompt failed when an unsupported image format existed
* Language Server: Fixed a Bug where space was added to the first line of formatted ts files for MacOSX
* uts plug-in: Added iOS platform to support local compilation and real machine operation, need to configure Xcode environment. [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)
* uts plug-in: Added Android platform, real machine operation supports three-party Gradle repository. [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* uts plug-in: Support code hints for iOS system API and Android system API.
* uts plug-in: Android platform Improve code hints for R resources.
* uts plug-in: Android platform supports import-free use of classes under java.lang.*
* HBuilderX: Fixed a Bug where the language service process would not exit when HBuilderX exits abnormally
* HBuilderX: Fixed a Bug that caused the built-in browser border to blink after dragging on some models of windows computers
* Mobile App Playground: iOS standard base, support the use of Apple certificate signature, after signature can run the standard base to iOS real device [Details](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* Mobile App Playground: Fixed a Bug in the device selection window where HBuilderX was unable to perform any operations due to the error pop-up behind the device selection window in some cases
* Mobile App Playground: Fixed a Bug where the iOS offline SDK failed to synchronize files when the target was not HBuilder

## 3.6.8.20221027-alpha
* Mobile App Playground: Fixed, console, click on Object type log, after the editor is opened, the file content is not formatted bug

## 3.6.7.20221018-alpha
* Upgrade HBuilderX built-in Node version to 16.17.0 and built-in npm version to 6.14.12
* Git plug-in: git pull operation, Git message status bar, added log view function
* HBuilderX Settings: Aggregate language service-related configurations into the Language Service Configuration configuration item
* Added Node debugging, which supports attaching breakpoint debugging to the already started node process
* HBuilderX: Windows, pop-up prompts when the Node process is intercepted by security software, causing Node plug-ins such as language services to fail to start
* Language Server: Fixed a bug where when there were multiple CSS classes, quickly typing a space and then pressing the left button, causing the code prompt to replace the wrong position after carriage return
* Language Server: When entering a code block quickly, in some cases, the information on the right side of the code prompt window displays the bug of the results returned by other language services
* Language Server: Fixed the bug that the CSS code prompt speed is too slow for large CSS files
* Language Server: Fixed the bug of false positives in syntax verification in some cases when tsconfig.json exists in the uni-app project
* Language Server: Fixed the bug that in some cases, the language service frequently reported errors and crashed, and the bug of frequent pop-up errors in the lower right corner of the HBuilderX window
* Language Server: Fixed the bug that uni-app App.vue style introduced multiple files, and the class transfer definition only took effect on the last file
* Built-in browser: Fix the bug that HBuilderX crashes when dragging the built-in browser on some Windows computers
* Mobile App Playground: Fixed uni-app runs to the iOS simulator, modifies the nvue file, and cannot synchronize the modified bug
* Mobile App Playground: Fixed 5+App runs to iOS, in some cases, the log does not print the bug
* Added uni-app run to H5, debug, support to choose to use Chrome Debug, use the built-in browser to debug (click the bug icon in the console to pop up a selection menu)
* Fixed uni-app run to the Built-In Browser, In some cases, the bug of inconsistent cookies
* Added uni-app manifest.json, App module configuration, added "Secure Network"
* Fixed uniCloud Web Page Hosting, In some cases, the release fails and still performs the upload operation Bug
* Added uni_modules Supports configuration of module initialization scripts [Details](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)

## 3.6.3.20220919-alpha
* Fixed the bug that the editor closes the tab, and crashes in some cases
* Fixed the bug of Windows built-in browser, mobile device mode, unable to select elements
* Fixed the bug that when switching to other programs during the HBuilderX code prompt process, the code prompt window would cover other programs in some cases
* Language Server: Fixed the bug of invalid px to rpx in uni-app cli project
* Fixed console log, some types of log output bugs
* Fixed the bug that uni-app runs to the iOS simulator, the console log is truncated or the output is incomplete
* Fixed the bug that uni-app runs to the Android emulator, and some Android emulators fail to run on Windows
* Fixed the bug that when uni-app runs to Android, in some cases, the console prompts that the compilation is successful, but there is no response
* Fixed the bug of App packaging failure caused by the new version of Alipay SDK for Android

## 3.6.1.20220907-alpha
* Fixed the bug caused by HBuilderX 3.6.0, Windows, built-in browser, and network requests cannot be cross-domain
* Fixed the bug caused by HBuilderX 3.6.0, Windows, built-in browser, browser background color is wrong
* Fixed Editor, Close Tab, in some cases, the bug of not remembering the folded state
* Language Server: Fixed the bug of uni-app, pages.json, page field path prompting to complete the error after carriage return
* Language Server: Fixed uni-app, nvue file, css class, goto definition failed bug
* Language Server: Fixed the bug that uni-app, nvue files, script and style tags, could not prompt the lang attribute
* Language Server: Fixed JavaScript `Object.` does not prompt the bug of es6+ new methods
* Language Server: Fixed the bug that the stylus code in the Vue file has no prompts
* Language Server: Fixed `import xxx from 'XXX.vue'` without the vue suffix, prompting that the module cannot be found, and cannot go to the defined bug
* Language Server: Fixed the bug that the code prompt could not be automatically triggered when typing the character `.` in jsx and tsx files
* Language Server: Added built-in syntax check to support warning level
* Language Server: Fixed the bug that the `Script` node does not take effect in the Vue file when JavaScript verification is enabled
* Language Server: Fixed the bug that the error red wavy line still exists after the JavaScript verification function configuration is disabled in the html file
* Language Server: When there is a multi-line error, the mouse hovers over a non-first line, and the error message is not displayed.
* Mobile App - Cloud packaging: Fixed the bug that when the static resource file under the project is too large (over 100M), the packaged bug cannot be submitted
* Mobile App - Cloud packaging: Fixed the bug that HBuilderX crashed when submitting packaging in some cases on Windows

## 3.6.0.20220901-alpha
* Added UTS syntax support. Develop native using TypeScript [Details](https://en.uniapp.dcloud.io/tutorial/syntax-uts.html)
* Added the function of finding references, currently only supports js and ts
* Windows: Upgrade built-in browser, Upgrade Cef version to 90.6.7
* HBuilderX settings, plugin configuration, add configuration items, Enable JavaScript Validation, Enable TypeScript Validation
* Language Server: Added real-time verification of variable syntax in vue and js (js verification needs to be enabled in [Settings - Plugin Configuration])
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
* Added tabs Right-click menu Add menus Move tabs to the left, move tabs to the right
* Windows: Fixed the bug that when HBuilderX is not started, when importing the plugin market plugin, the UI view of the first import shows a blank bug
* Fixed the bug that the jump position is wrong in some cases of multi-file character search
* Fixed the bug that when going back to another file, the cursor jumps to the beginning of the file instead of going to the position before the definition
* Added new project, HBuilderX plugin, added internationalization example template
* uni-app: Fixed manifest.json After the application name is internationalized, the packaging interface, the application name displays `%%`
* uni-app: Adjust the H5 configuration on the left side of manifest.json to the Web configuration

## 3.5.5.20220825-alpha
* Fixed the bug that the Windows HBuilderX Cli command is invalid
* Added Mobile App Playground, Device selection window, added base selection function
* Fixed Mobile App Playground, When the project path exists in Chinese and runs to an iOS device, the App page displays an abnormal bug
* Fixed Mobile App Playground, a bug where custom base installation failed in some cases
* Fixed uni-app manifest.json, a bug that the uniPush field becomes null in some cases

## 3.5.4.20220805-alpha
* Fixed the bug that debug view, variable, Global node, UI display disorder
* Fixed the bug that HBuilderX saves files in utf-8 format without file header identification byte 0xEFBBBF

## 3.5.3.20220727-alpha
* Fixed some minor issues

## 3.5.2.20220719-alpha
* Git plugin, pull operation, the default option is changed to the fourth item, namely git pull --rebase --autostash

## 3.5.1.20220707-alpha
* Added HBuilderX status bar Upgrade added red dot prompt
* Fixed the bug that the editor selects the language association window position offset
* Fixed the bug that the plugin API hx.window.showQuickPick() window could not scroll after opening the terminal

## 3.5.0.20220623-alpha
* Added TypeScript support for syntax verification
* Added MarkDown code block to support language coloring and highlighting, you need to download and add the corresponding language coloring extension plug-in
* Fixed language service React jsx file no code hint bug

## 3.4.17.20220614-alpha
* Fixed the bug that plugin installation fails in some cases.

## 3.4.13.20220601-alpha
* Added language service JavaScript supports DOM type recognition of id selectors in Document. getElementById and Document. querySelector
* Added language service SCSS support for prompt `!global` and `!default`

## 3.4.12.20220523-alpha
* Fixed some minor issues

## 3.4.11.20220520-alpha
* HBuilderX improves startup speed

## 3.4.10.20220517-alpha
* Added support for running and debugging Node programs
* Added syntax highlighting that can be independently extended for new languages, and language highlighting plug-ins can be developed or downloaded
* Some of the built-in language syntax highlighting was migrated to the plug-in marketplace
* Fixed multi-file search, the right side of the display code coloring error Bug
* Fixed plug-in installation window, installed plug-in, version number display error Bug
* Added language services, VUE-CLI projects, code hints support element-UI, bootstrap-vue, etc
* Fixed Emmet syntax bug where pressing TAB did not respond correctly
* Fixed language service, input CSS code in the same line, press Enter, replace the wrong position Bug

## 3.4.9.20220508-alpha
* Fixed some minor issues

## 3.4.8.20220428-alpha
* Added HBuilderX Support for custom project Snippets

## 3.4.6.20220416-alpha
* Fixed some issues for language service

## 3.4.5.20220408-alpha
* Fixed some minor issues

## 3.4.4.20220403-alpha
* Fixed some minor issues

## 3.4.3.20220325-alpha
* Fixed some minor issues

## 3.4.2.20220310-alpha
* Fixed some minor issues

## 3.4.1.20220308-alpha
* Fixed some minor issues

## 3.4.0.20220304-alpha
* HBuilderX language service switched from Java to Node

## 3.3.12.20220222-alpha
* Fixed some minor issues

## 3.3.8.20220114-alpha
* Fixed some minor issues

## 3.3.7.20220112-alpha
* Fixed some minor issues

## 3.3.6.20211231-alpha
* Fixed some minor issues

## 3.3.2.20211218-alpha
* Fixed some minor issues

## 3.3.1.20211214-alpha
* Fixed a crash in the editor when Find Symbols by clicking on the search area or the built-in Explorer address bar.
* Fixed 3.3.0 for Windows HBuilderX maximization, editor window interface rendering exception.

## 3.3.0.20211130-alpha
* Adjust the UI of the new project window [Details](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)

## 3.2.15.20211120-alpha
* Fixed some minor issues

## 3.2.14.20211112-alpha
* Fixed some minor issues

## 3.2.13.20211110-alpha
* Added Files larger than 1M in size do not display hover code assist

## 3.2.12.20211028-alpha
* Fixed some minor issues

## 3.2.11.20211021-alpha
* Fixed some minor issues

## 3.2.10.20211013-alpha
* Added hover code assist [Details](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* Added Terminal supports clicking on the URL to jump to the browser [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* Fixed the bug that when the terminal input exceeds a certain length, the wrong line is displayed
* Fixed the bug that the editor window exceeds the screen area when creating multiple terminals

## 3.2.8.20210923-alpha
* Fixed some minor issues

## 3.2.7.20210919-alpha
* Added Configure whether you receive automatic updates.
* Fixed the bug that the editor crashes when a new project is created with / at the end of the storage path.
* Fixed Bug that HBuilderX editor cannot render Arabic
* Upgrade eslint-vue plugin.
* Fixed the bug of MacOSX system, open in terminal, the top content of the terminal is squeezed.