## 4.71.2025061206-alpha
* Add AI Fix for uni-app x: When running on Android/iOS platforms, compilation errors can be automatically fixed through AI [Details](https://doc.dcloud.net.cn/uni-app-x/tutorial/bug_repair.html)
* Language Server: Added support for symbol renaming. [Details](https://hx.dcloud.net.cn/Tutorial/Language/refactor)
* Fixed a bug where HBuilderX would crash when closing an editor tab after using AI code completion. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18507)
* Fixed an issue introduced in version 4.62 where typing `(,` in certain situations caused the editor to freeze for 1–2 seconds. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* Language Server: Fixed an issue in uni-app x where conditional compilation code blocks were not grayed out when using the subpackage configuration in pages.json [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91%e4%bb%a3%e7%a0%81%e5%9d%97%e7%bd%ae%e7%81%b0)
* Language Server: Added error codes to the UTS error message popup, allowing users to click and navigate to the corresponding documentation. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18231)
* Language Server: Fixed an issue introduced in version 4.63 where the button descriptions in the Vue usage tips popup were incorrect.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17960)
* Language Server: Fixed an issue introduced in version 4.61 where validation could occasionally be inaccurate after switching the target.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17282)
* Language Server: Fixed an issue introduced in version 4.61 where "Go to Definition" returned redundant results. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17156)
* Language Server: Fixed an issue introduced in version 3.94 where certain JSON suggestion completions were inaccurate.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17157)
* Language Server: Fixed the bug where the underline for "Go to Definition" of CSS variables in inline styles was incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18328)
* Language Server: Fixed the bug where CSS properties did not provide code suggestions for CSS variables. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18334)
* Language Server: Fixed the bug in the language service where CSS variables in uni-app x were incorrectly reported as errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18233)
* Language Server: Fixed the bug in uni-app x where no variable suggestions were provided when using setProperty in the script section. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18324)
* Language Server: Fixed an issue in uni-app (x) where code completion for relative import paths in the script section was incorrect.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16816)
* Language Server: Fixed the bug where the uni ext api functionality would become unavailable when adding or removing uni_modules plugins. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18434)
* Fixed a bug in uni-app (x) UTS plugin where formatting Swift files without saving would cause code deletion. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17821)
* Fixed an issue in uni-app (x) UTS plugin where, under certain conditions, formatting Kotlin files would fail with a message saying "Formatting failed, please check for syntax errors in the code." [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17824)
* Fixed a macOS bug where pasting into the reproduction steps input box of the bug report sometimes pasted content directly into the underlying editor. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12911)
* Fixed a bug introduced in version 4.64 where copying an ordered list in Markdown, pressing Enter for a new line, and then pasting would cause a crash.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18002)
* Fixed an issue introduced in version 4.64 where the built-in file explorer's large icon view was not working on macOS (Intel) and Windows. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18188)
* Fixed a bug in version 4.55 where on macOS (Arm) the toolbar multi-file text search did not respond after entering content and clicking search. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18129)
* Fixed a bug in version 4.64 where on macOS (Arm), the editor’s favorite theme selection did not take effect on first installation. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18186)
* Fixed a bug in version 4.55 where on macOS (Arm), after the computer wakes from sleep, the editor’s main view became unclickable. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16829)
* manifest.json: Added a visual interface for uni-app manifest, supporting Android/iOS module configuration and Maps, including an entry for Baidu Maps configuration.
* manifest.json: Added visual configuration for iOS and Android in uni-app x manifest.json.  [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15976)
* manifest.json: Adjusted HarmonyOS platform run and build process so that if uni-push and one-click login modules are enabled but the services are not activated or configuration parameters are insufficient, only warnings are issued without blocking the process. [Details](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-harmony.html)
* manifest.json: Adjusted the dialog for configuring HarmonyOS signing certificates in manifest.json to include a certificate fingerprint display box, making it easier for users to fill in related information in the developer console. [Details](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#signing-configs)
* manifest.json: Fixed a bug where creating a new project with a duplicate name triggered a user selection dialog, and if the user clicked cancel, the original project's manifest would be unintentionally modified. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17850)
* Mobile App Playground: Added a prompt to install Rosetta 2 when running on Apple Silicon chips. [Details](https://hx.dcloud.net.cn/Tutorial/install/macosx-install-rosetta)
* Mobile App Playground: Added support for wireless device connection when running on Android. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16395)
* Mobile App Playground: Fixed a bug in uni-app 4.62 that caused compilation errors when running uni-app-cli Vue2 projects inside HBuilderX. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17535)
* Mobile App Playground: Adjusted uni-app x project running on HarmonyOS to support running on the x64 HarmonyOS emulator platform. [Details](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#env)
* Mobile App Playground: Adjusted the Harmony Meta Service platform to allow users to specify a custom public registry via the environment variable NPM_CONFIG_REGISTRY during runtime and packaging.
* Mobile App Playground: Fixed the log collection method during debugging and running of the Harmony Meta Service to resolve log collection failures caused by underlying changes in the HarmonyOS system. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18216)
* Mobile App Playground: Fixed the issue where subpackage pages showed blank screens by modifying the way the HarmonyOS toolchain is invoked during debugging and running of the Harmony Meta Service, addressing changes caused by the ascf plugin. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18218)
* Mobile App Playground: Adjusted so that when the push and one-click login modules are enabled in the project, if the services are not yet activated, it will not block the build and run processes.
* Mobile App Playground: Fixed a bug in uni-app 4.62 where the cache of the uts plugin was invalid on the first run with a custom base. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17904)
* Mobile App Playground: Fixed a bug where 5+ projects could not perform hot updates on Windows systems, caused by version 4.63. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18477)
* App Publish: Added uni-app x support for Web publishing and App packaging with Sourcemap generation.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18208)
* App Publish: HarmonyOS platform supports App resource packaging [Details](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#publish-resources)
* App Publish: Added CLI packaging support for the HarmonyOS platform. [Details](https://hx.dcloud.net.cn/cli/pack-app-harmony)
* App Publish: HarmonyOS platform supports CLI packaging of App resources [Details](https://hx.dcloud.net.cn/cli/publish-app-harmony)
* App Publish: Adjusted the uni-app x project's manifest.json editor interface for HarmonyOS app configuration to remove the checkboxes for Real-Name Authentication, uni-push, and One-Click Login modules; these modules are now automatically detected and enabled by the compiler. [Details](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-harmony.html)
* Added uni_modules plugin platform compatibility distinction between uni-app and uni-appx platforms, with added support for dark mode, multi-language, and widescreen options. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18241)


## 4.63.2025042307-alpha
* Fixed some bugs


## 4.62.2025041603-alpha
* Adjust secure packaging apktool update to solve 2.11.1, peace of mind when packaged ` android: foregroundServiceType Bug ` parameter values will be changed [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16895)
* Fixed the bug that Git plugin version 4.61 causes an extra terminal to open when using Git to commit on the Mac platform. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16952)
* Language Server: Fixed a Bug where language service prompts Could not find source file when quickly opening and closing files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* Language Server: Fixed the bug in the UniApp X project where the path to the Vue file cannot be navigated to its definition. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16879)
* Language Server: Added When hovering over the grayed-out code blocks in the UniApp X project due to conditional compilation, a prompt should be displayed. [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91%E4%BB%A3%E7%A0%81%E5%9D%97%E7%BD%AE%E7%81%B0)


## 4.61.2025040322-alpha
* Adjusted HBuilder for Windows to 64-bit, discontinuing support for 32-bit systems.[Details](https://hx.dcloud.net.cn/Tutorial/install/windows)
* Added a phone number and password login option to the HBuilderX user login window.
* Added support for character search in the console. [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/ConsoleViewSearch)
* Fixed a bug where the selected area was cleared when logs were printed in the run console. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15814)  
* Fixed a bug where the Select Same Variable option in the editor's right-click menu did not work. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16413)
* Fixed a bug where bulk closing projects in the project manager could cause freezes and crashes when too many projects were open. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16410)  
* Fixed a bug where opening a large compressed file with excessive error checks caused the editor to lag. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16411)  
* Fixed a bug where automatic conversion of Chinese punctuation was incorrect in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16220&ask_id=206467)  
* Fixed a bug on macOS where clicking "Restart Now" after upgrading HBuilderX sometimes failed to restart properly. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16399)  
* Fixed an issue on macOS ARM where the right-click menu did not display shortcut keys. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16414)
* Fixed a bug on macOS ARM where the Git commit interface would automatically go fullscreen. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15910)
* Fixed a bug in the Git/SVN plugin (version 4.52) where the download link for Tortoise Git/SVN tools was invalid during project import. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16407)  
* Fixed a bug in the Git plugin where using Git functions caused incorrect error messages in the console. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16408)  
* Added support for intelligent editing, smart pairing, and folding features for Swift, Kotlin, and other plugin marketplace extensions.  
* Language Server: Added uni-app x project conditional compilation support to gray out inactive platform code blocks [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* Language Server: Added multi-result support for "Go to Definition" in the language service. [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/goto?id=goto-definition)  
* Language Server: Added formatting support for Swift and Kotlin files in the UTS plugin within the language service. [Details](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)  
* Language Server: Added code hint support for Swift hybrid development in the UTS plugin. [Details](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)  
* Language Server: Fixed a bug in the language service where variables defined using `computed` in uvue files of uni-app x had incorrect hints in the template section. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15813)  
* Language Server: Optimized the language service in uni-app x projects to improve the performance of "Go to Definition" under conditional compilation.
* Added HarmonyOS debugging support for uni-app x, enabling debugging of UTS, UVue, and UTS plugin mixed ArkTS files. [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-harmony.html)  
* Added Android debugging support in uni-app x for UVue and UTS plugin mixed Kotlin file breakpoint debugging. [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)  
* Added support for running a custom base on an already installed base when running uni-app (x) on Android.  
* Adjusted the Android device list in uni-app (x) to display device brand and model.  
* Upgraded the built-in ADB in the real device running plugin from version 29.0.4 to 35.0.2.  
* Changed the installation method for installed bases from "Uninstall & Install" to "Overwrite Install." [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16397)


## 4.57.2025032014-alpha
* Fixed some bugs


## 4.54.2025030608-alpha
* Fixed some Bugs


## 4.53.2025022409-alpha
* Fixed some Bugs


## 4.52.2025020807-alpha
* Fixed some Bugs


## 4.51.2025012123-alpha
* Added support for the ARM version of macOS.
* Added user login interface, added mobile phone number verification code login method
* HBuilderX CLI: Adjusted the HBuilderX CLI for uni-app H5 distribution to extend the `--provider` parameter, now supporting more service providers: [aliyun | alipay | tcb]. [Details](https://hx.dcloud.net.cn/cli/publish-h5)
* HBuilderX CLI: Added `--ssrHost` and `--ssrProvider` parameters to the HBuilderX CLI for uni-app H5 distribution. [Details](https://hx.dcloud.net.cn/cli/publish-h5)
* Added a configuration option to control whether open editors under a project are automatically closed when the project is removed or closed. (Menu: [Settings - Commonly Used])
* Adjusted the language for .ets files from TypeScript to ArkTs, with syntax highlighting functionality migrated to a plugin implementation. [Details](https://ext.dcloud.net.cn/plugin?id=21741)
* Fixed a bug on macOS where pressing `Alt + Shift + Tab` for reverse selection in the tab switch panel inserted a `\t` character into the editor. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14977)
* Fixed a bug in version 3.99 where the code map could not be disabled for files when an `.editorconfig` file was present in the project.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14863)
* Fixed a bug in version 4.31 where pressing `Esc` after triggering the search bar with `Ctrl+F` caused HBuilderX to crash in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14978)
* Fixed a bug where incorrect encoding detection caused garbled text when opening certain files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12395)
* Fixed a bug where the file name was reset when selecting a template during file creation.
* Language Server: Fixed a bug in version 4.44 where custom code blocks did not work if the scope was not defined. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14982)
* Language Server: Fixed a bug in uni-app (x) Vue files where Emmet syntax completion for "implicit tag names" was incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14374)
* Fixed a bug in version 4.31 where, after the hover code hint appeared, double-clicking the hovered code would not select it. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15055)
* Language Server: Added support for code suggestions, "Go to Definition," and other features for imported Kotlin files in the uni-app (x) UTS plugin. [Details](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)
* Language Server: Optimized the initialization speed of uni-app x related features when the language service is first launched.
* Language Server: Fixed a bug in the language service for uni-app x where using variables defined with `ref` in templates caused errors.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14968)
* Language Server: Fixed a bug in the language service for uni-app `Vue3 + TypeScript` where global `globalProperties` attributes or methods were not suggested. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14972)
* Language Server: Fixed a bug in the uni-app (x) UTS plugin where overwriting properties in a class caused incorrect type validation errors for certain native platform types and TypeScript types. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15172)
* Language Server: Fixed a bug in the uni-app (x) UTS plugin where type validation errors were incorrectly reported in ternary expressions for certain native platform types and TypeScript types. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15173)
* Language Server: Adjust the uni-app x project to automatically fill in the object literal parameter braces when the uni api code prompts
* Language Server: Fixed a bug in Vue files where search results for references to `id` and `class` were incorrect in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=15171)
* Fixed a bug in the uni_modules plugin on macOS where canceling the file selection dialog for a screenshot in the "Publish Plugin to Plugin Market" dialog caused an issue with dialog layering. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14979)


## 4.45.2025010702-alpha
* Language Server: Fixed a bug in version 4.41 where opening Vue files in uni-app projects occasionally caused the language service to fail to find getOptionsDiagnostics [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14778)
* uni-app: Fixed a bug in macOS version 4.29 where exporting WGT with native obfuscation for JS/NVUE files failed. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14682)
* uni-app: Fixed a bug in macOS version 4.41 where uni-app CLI projects running on mobile devices would hang during compilation on some computers due to the inability to retrieve the system Node.js path. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14754) 
* uni-app: Added support for disabling the runtime log echo to the HBuilder console when running uni-app projects in WeChat, Baidu, Alipay, or Douyin Mini Program Developer Tools. [Details](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* uni-app: Fixed a bug in version 4.41 where running uni-app projects on WeChat Mini Programs failed to launch the developer tools in certain cases.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14830)
* uni-app: Fixed a bug in version 4.41 where the previously saved compilation mode was lost when running uni-app projects on WeChat Mini Programs.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14822)
* uni-app: Adjusted the default value of the Node.js startup memory parameter in the HBuilderX settings for Uni-app compiler configuration to 3072 MB.


## 4.43.2024122419-alpha
* Language Server: Optimize the language service uni-app x code hint performance


## 4.42.2024121808-alpha
* Language Server: Fixed the bug where setTimeout in UTS files is incorrectly marked with an error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14233)


## 4.41.2024121203-alpha
* Optimize the activation time of the Node plugin.
* Fixed the bug where the status bar height is abnormal on some computers when creating a new HBuilder window. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13755)
* Fixed the bug where rendering lags occur when opening large compressed files, especially when there are many errors during error checking. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13769)
* Language Server: Fixed the bug introduced in version 3.5.3, where the cursor position is incorrect in custom code blocks containing Chinese characters. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10900)
* Language Server: Fixed the bug introduced in version 3.94, where the code block area in markdown does not fold correctly. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12767)
* Language Server: Fixed the bug in UTS validation where errors are incorrectly reported for object literal types when they are used as optional parameters. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13734)
* Language Server: Fixed the bug where, in certain cases, string-type variables are incorrectly recognized as methods, leading to unwanted parentheses being added. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13763)
* Language Server: Fixed the bug in uni-app where incorrect error validation occurs due to caching of the `type` in `x`. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13752)
* Language Server: Fixed the bug where code suggestions are not provided when a `wxs` script is present. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13756)
* Language Server: Fixed the bug where code suggestions do not appear after opening a file ignored in `tsconfig.json` and then closing it. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13760)
* Language Server: Fixed the bug in the uni-app UTS plugin where code suggestions are not provided when writing `uvue`. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13759)
* Language Server: Fixed the bug in uni-app where an error is incorrectly reported for `this.globalData` not being found in the `App.uvue` file. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13915)
* Language Server: Fixed the bug that when this.xxx goes to definition multiple times in uni-app Vue file, subsequent failure may occur [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14082)
* Language Server: Fixed the bug introduced in version 4.29, where using "Find References" in markdown causes a language service error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13739)
* Language Server: Fixed the bug in version 4.29 where writing multiple link syntaxes on a single line in markdown causes code suggestions to appear in the description position. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13270)
* Language Server: Fixed the bug in version 4.31 where special i18n values in a domain of type String may cause TypeScript language service errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13561)
* Language Server: Fixed the bug in version 4.31 where project cache data is not deleted when closing a project. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13750)
* Language Server: Fixed the bug in version 3.5.3 where URI.parse causes language service errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13738)
* Language Server: Fixed the bug in version 3.5.3 where hovering over a component with multiple hyperlinks causes F1 to jump to the wrong hyperlink. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13841)
* Language Server: Fixed the bug in version 3.5.3 where JSON code suggestions continuously fetch data from the code assistant. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14030)
* Language Server: Fixed the bug in version 4.36 where the special String value domain and AttrString event property suggestions return incorrect autocomplete results. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14031)
* Language Server: Adjust the special value domains `FontURIString`, `ImageURIString`, `AudioURIString`, `VideoURIString`, `PageURIString`, `NPageURIString`, and `UPageURIString` in uni-app (x) projects so that code suggestions only support project-relative paths.
* uni-app: Added the feature to run or publish a uni-app x project to WeChat Mini Program. [Details](https://doc.dcloud.net.cn/uni-app-x/mp)
* uni-app: Added the feature to run a uni-app project on the WeChat, Baidu, Alipay, and Douyin Mini Program Developer Tools, with support for logging to the HBuilder console. [Details](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* uni-app: Added support for logging to the HBuilder console when running a uni-app project on HarmonyOS.
* uni-app: Added the feature to run or publish a uni-app project to Xiaohongshu Mini Program.
* uni-app: Added the feature to right-click on package.json in a uni-app project and use the built-in npm to install dependencies. [Details](https://hx.dcloud.net.cn/Tutorial/installDependencies)
* uni-app: Added support for configuring certificate library passwords in uni-app App cloud packaging.
* uni-app: Adjusted the uni-app toolbar to hide all Mini Program options by default in the "Run" menu group, except for WeChat and HarmonyOS services.
* uni-app: Adjusted the uni-app x toolbar to display only supported platforms in the "Run" menu.
* uni-app: Adjusted the uni-app CLI to use the node from the system environment variables for project run/publish, instead of defaulting to the built-in node. [Details](https://hx.dcloud.net.cn/Tutorial/configureEnvironmentVariables)
* uni-app: Fixed the bug introduced in uni-app version 3.5.3, where code suggestions for conditional compilation in pages.json incorrectly replace content when pressing Enter in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=13715)


## 4.36.2024112612-alpha
* Fixed some bugs.


## 4.35.2024112402-alpha
* Fixed some bugs.


## 4.34.2024112020-alpha
* Fixed some Bugs


## 4.33.2024111702-alpha
* Language Server: Fixed the bug in uni-app X where resources are not correctly released when opening multiple projects, causing language service errors.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11379)
* Language Server: Fixed the bug where executing `npm i` within a project could trigger language service errors, particularly when using features like "Go to Definition". [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10240)
* Language Server: Fixed the bug where language service reported an error: `No Project.` in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11395)
* Language Server: Fixed the bug where modifying the `script lang` in a referenced Vue file caused language service errors when hovering over the script section. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12187)
* Language Server: Fixed the bug where language service errors occurred when quickly navigating to a Vue file in a CLI project right after initialization. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11807)
* Language Server: Fixed the bug where language service errors occurred in HTML files when writing Vue code in certain cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9966)
* Language Server: Fixed the bug where file paths under the plugin could not be suggested in the UTS plugin development environment. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12200)
* Language Server: Fixed the bug where hovering over custom component properties could cause language service errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=12215)
* Language Server: Fixed the bug introduced in version 3.8.12 where the special value domain String, `cssSelectorString`, was not functioning correctly. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11764)
* Language Server: Fixed the bug introduced in version 3.8.12 where the special value domains `VideoIdString` and `WebviewIdString` were not being suggested correctly. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11766)
* Language Server: Fixed the bug introduced in version 3.8.12 where the suggestions for the special value domain `colorString` were displayed in the wrong order. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11769)
* Language Server: Fixed the bug introduced in version 3.8.12 where the suggestion items for the special value domain `cssPropertyString` were not sorted correctly. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11770)
* Language Server: Fixed the bug introduced in version 3.8.12 where, in certain cases, the autocompletion suggestions for the special value domain `ScriptImportURIString` were incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11773)


## 4.32.2024110103-alpha
* Fixed the bug in version 4.31 that caused the cli package to prompt that the certificate alias cannot be empty [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11426)
* Fixed: The order of switching view files after restarting hx is inconsistent with that when shutting down [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11094)
* Language Server: Fixed the bug that the status bar reported an error when searching for files and triggering function signatures on Windows computers for the uts plug-in iOS platform [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11428)


## 4.31.2024102414-alpha
* uni-app directly runs and publishes Hongmeng applications in HBuilderX, and no longer needs to configure templates in Hongmeng development tools
* uni-app manifest visual interface, added Hongmeng visual settings, the original App settings were renamed Android/iOS settings
* Language Server: Added UTS plugin development support with prompts for HarmonyOS APIs.
* Added syntax highlighting for JSON5 files. [Details](https://ext.dcloud.net.cn/plugin?id=19383)
* Optimized the performance of highlighting selected identical words in large documents to prevent UI lag.
* Optimized resource and memory usage when managing a large number of projects in the project manager.
* Adjusted the priority of file associations in the macOS system. [Details](https://ask.dcloud.net.cn/question/90668)
* Adjusted the shortcut for removing the duplicate insertion of the currently selected word (`Ctrl+Insert`) to avoid conflicts with some AI tools. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7238)
* Fixed a bug where the `Alt+/` shortcut for triggering code suggestions occasionally triggered hover hints instead. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9955)
* Fixed a bug where switching focus to an external program and then back to the editor caused the code area to scroll incorrectly during character searches. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=6050)
* Fixed a bug in macOS where the function to highlight corresponding elements in the built-in browser when previewing HTML files was not working. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10011)
* Language Server: Added language service support for theme.json in uni-app (x). [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#themejson)
* Language Server: Added automatic import support for built-in packages: @dcloudio/uni-app, pinia, and vuex.
* Language Server: Optimized memory usage.
* Language Server: Optimized code hinting performance for Vue files.
* Language Server: uni-app Easycom component tag attributes and event prompts support the attributes and events defined in defineProps and defineEmits
* Language Server: Fixed a bug where the `$` symbol was lost after pressing Enter when the suggestion contained $ and was followed by parentheses. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10021)
* Language Server: Fixed a bug where JS files would report errors in certain cases within uni-app x projects. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10014)
* Language Server: Fixed a bug where the language service reported errors when defining properties with the same name in certain cases within uni-app projects. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10476)
* Language Server: Fixed a bug in version 3.8.0 where `document.getElementById()` did not provide type hints based on the actual DOM element type in HTML files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9588)
* Language Server: Fixed a bug in version 3.5.3 where attribute-related code blocks did not provide hints in HTML code blocks. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8959)
* Language Server: Fixed a bug in version 3.5.3 where the positions of attribute values in HTML code blocks were incorrectly suggested. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8956)
* Language Server: Fixed a bug in version 3.5.3 where incorrect suggestions were made in the attribute selectors of style code blocks. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8953)
* Language Server: Fixed a bug in version 3.5.3 where certain code blocks did not provide suggestions in the script area. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8949)
* Language Server: Fixed a bug in version 3.5.3 where HTML files in uni-app projects lacked conditional compilation. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8957)
* Language Server: Fixed a bug in version 3.5.3 where circular reference errors occurred with the `foreignKey` field in `*.schema.json` files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9797)
* Language Server: Fixed a bug in version 3.5.3 where path suggestions occasionally caused errors in the language service. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9800)
* Language Server: Fixed a bug in version 3.5.3 where jsDoc suggestions caused errors in the language service. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10075)
* Language Server: Fixed a bug in version 3.5.3 where `URI.parse` could potentially cause errors in the language service. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10108)
* Language Server: Fixed a bug in version 3.91 where style code blocks were duplicated in uni-app x projects. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8946)
* Language Server: Fixed a bug in version 3.5.3 where the completion results for jsDoc code blocks were incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8873)
* Language Server: Fixed a bug in version 4.08 where the right-click feature for "Find References" returned no results. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8022)
* Language Server: Fixed a bug in version 3.6.11 where manually specifying associated languages in the editor could lead to incorrect error highlighting. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7676)
* Language Server: Fixed a bug in version 3.98 where there were no code suggestions when typing in the middle of a key in `manifest.json` files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=5798)
* Language Server: Fixed a bug in version 3.99 where deprecated `upx` still provided suggestions. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=5331)
* Language Server: Fixed a bug in version 3.99 where the descriptions for style code suggestions were incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=5213)
* Language Server: Fixed a bug in version 3.94 where the JSON to type conversion function produced incorrect results in specific cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=3930)
* Language Server: Fixed a bug in version 3.6.5 where anchor link suggestions in Markdown were incorrect. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1788)
* Language Server: Fixed a bug in version 3.99 where jumping to the definition of class names led to the wrong file. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=861)
* Language Server: Fixed a bug in the UTS plugin where overriding methods of an interface when developing Android plugins incorrectly reported errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10034)
* Adjust the default value of Windows HBuilderX "Run Configuration" - "Kotlin compiler maximum heap memory size" to 2048
* Fixed a bug in uni-app where the WeChat Developer Tool occasionally crashed when closing the runtime console. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=10012)
* uni-app x: Added support for AAB, channel packages, and ad configurations in uni-app x cloud packaging.
* uni-app x: Added uvue breakpoint debugging support for uni-app x on iOS. [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* uni-app x: Create a new uni_modules plug-in and add a classified UTS plug-in-standard mode component
* Added the built-in `uni-im` message notification plugin, which flashes unread messages in the bottom right corner.


## 4.28.2024092105-alpha
* Harmony: Fixed a bug where the package generated by the release packaging function only contained template content but no application code [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8998)
* uni-app (x): Fixed the bug that the App content is not updated after switching projects when running uni-app (x) to iOS (18.0) simulator [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9027)


## 4.27.2024091308-alpha
* Adjusted the amazon-corretto plugin, upgraded from 11.0.14 to 17.0.12, and Windows from 32-bit to 64-bit [Details](https://hx.dcloud.net.cn/Tutorial/App/notsupportJava)
* Language Server: Fixed the bug caused by version 4.08, where the deleted id and class still exist in the code hint[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7293)
* Language Server: Fixed the bug of uts plugin reporting "Could not find source file" caused by version 4.25 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8029)
* Language Server: Fixed the bug of invalid reference search in uniapp x project caused by language service version 4.25 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8134)
* Adjust the uts plugin, uts Android plugin development configuration items to Settings-Run Configuration [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* uni-app (x): Fixed the bug that the Run menu does not respond after renaming the project in uni-app (x) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7700)


## 4.26.2024082213-alpha
* Fixed the bug caused by version 4.0 that in some cases, when uniapp is released to H5, clicking the menu does not respond. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7071)
* Language Server: Fixed a bug caused by version 3.5.3, in some cases, the style attribute selector completion item prompt was incorrect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7072)


## 4.25.2024081703-alpha
* Language Server: Optimize code prompt speed
* Language Server: Optimize type inference performance in Vue files
* Language Server: Adjust uni-app x project syntax prompt and verification platform to support multiple selection [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* Language Server: Optimize the display of uni-app x project platform compatibility information [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2734)
* Language Server: Fixed the bug that the vue tag prompt still prompts the top-level tag in the sub-tag scope [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2419)
* Language Server: Fixed the bug that the vue tag prompt shows the Emmet code block under the text tag[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1791)
* Language Server: Fixed a bug in some cases where the code prompts an error after going to the definition in the HTML file [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=4126)
* Language Server: Fixed a bug in which when using easycom components in vue files, the component path was recognized as a folder in some cases, causing the language service to report an error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2589)
* Language Server: Fixed the bug that after the Vue file goes to the definition of a certain Easycom component tag, the script area of ​​the opened component file becomes invalid [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2527)
* Language Server: Fixed a bug in the vue file code that caused the language service to report an error when there was an automatic package guide prompt item [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2550)
* Language Server: Fixed a bug in which the detailed information on the right side of the code assistant was not displayed correctly in some cases in vue files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2573)
* Language Server: Fixed the bug that caused the language service to report an error when some variable boundaries were moved to definitions in the template area of ​​the vue file. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2529)
* Language Server: Fixed a bug in the uniCloud directory where, when file A is referenced by file B, if file B is opened first and then file A, the code prompt and other functions of file A will become invalid. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2698)
* Language Server: Fixed the bug that there is no uniCloud related prompt in uniCloud environment in uniapp x project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2853)
* Language Server: Fixed a bug that caused the language service to report an error in some cases when there was a tsconfig.json file in the cli project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2603)
* Language Server: Fixed the bug that when the i18n key floating prompt is triggered in the uni-app project, if the translation file is missing, the language service will report an error [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2914)
* Language Server: Fixed a bug that occasionally caused the language service to report an error when renaming files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=3089)
* Language Server: Fixed the bug that special value fields String, UPageURIString and ScriptImportURIString are not effective [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=5822)
* Language Server: Fixed the bug of missing CSS pseudo-class: before prompt item caused by version 3.6.5 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=6745)
* Language Server: Fixed the bug caused by version 4.11, where there were two duplicate items in the less and scss code hints [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=6685)
* Language Server: Fixed the bug of missing uvue file code prompt caused by version 4.14 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=4886)
* Language Server: Fixed the bug in version 4.14 where the order of language service queue messages was wrong, causing tsserver service errors [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2581)
* Language Server: Fixed the bug caused by version 4.18 that caused the uni ext api to not work in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2254)
* Fixed the bug that caused HBuilderX to crash under Chinese input method when switching language mode in the lower right corner of the editor [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=3729)
* Fixed a bug in Markdown preview where some images would not be rendered when the directory level was deep [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=4122)
* Adjustment: After HBuilderX is updated, if you do not choose to restart immediately, it will automatically update the next time you start the software after exiting it. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=4120)
* Fixed the bug that after HBuilderX upgrade successfully, clicking Restart Now did not restart successfully in some cases. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=4118)
* Fixed the bug that the file collection function needs to press the shortcut key twice to trigger [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2311)
* Fixed a bug where the drop-down menu would disappear automatically in some cases when switching between search categories in the toolbar, causing the mouse to not be able to select the item [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2076)
* Fixed a bug where the position of the pop-up interface was incorrect when clicking the arrow after the project name when the address bar displayed the Git branch name. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2196)
* New support for linking multiple uni-app (x) project pages, components, API and other directories to a specified project through soft links [Details](https://hx.dcloud.net.cn/Tutorial/App/softLink)
* Added uni-app x project to generate local packaged native iOS resources [Details](https://doc.dcloud.net.cn/uni-app-x/native/use/ios.html)
* Added uni-app project and ran it in Hongmeng DevEco Studio [Details](https://uniapp.dcloud.net.cn/tutorial/harmony/dev.html)
* Added uni-app cloud packaging, supports Android anti-re-signing [Details](https://uniapp.dcloud.net.cn/tutorial/app-android-antiresigne.html)
* Fixed the bug that when deleting the `ad` parameter in manifest.json of uni-app cloud packaging, `ad:{}` will be added again during packaging [Details](https://ask.dcloud.net.cn/question/194093)


## 4.23.2024070309-alpha
* Language Server: Fixed the bug introduced in version 4.18, when the uniapp x project uses object literals, the defined objects do not have UTSJSONObject type hints [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2781)
* uni-app (x): Fixed the bug that the log printed to the iOS console cannot be redirected[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1288)
* uni-app (x): Fixed the bug introduced in version 4.18, where the release/upload of the website to the server was stuck at the beginning of packaging [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2713)
* uni-app (x): Optimize the format of the log output in the console of the uts plugin when running on iOS

## 4.22.2024062415-alpha
* Language Server: Fixed the bug that an error message is reported when a literal object is assigned to the union type of UTSJSONObject and null in the language service uniapp x project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2584)
* Fixed the bug that when checking the old version of DCloud certificate in the uni-app old project's safe packaging, the prompt "Custom base does not support safe packaging, please switch to normal packaging" is incorrect

## 4.21.2024061818-alpha
* Language Server: Added support for code prompts when referencing plugins when type declaration files exist for encryption plugins
* Language Server: Added status bar prompts and quick bug reporting when serious errors occur
* Language Server: Fixed a bug that caused occasional language service errors when the referenced file path was inconsistent with the local real path in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2468)
* Language Server: Fixed the bug that the ext api is not prompted when there is only one uni. in the uni-app page [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2503)
* Fixed the bug that caused markdown preview hot update failure in version 4.18 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2467)

## 4.19.2024060704-alpha
* Language Server: Fixed the bug that there is no CSS hint in the markdown code area [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2230)

## 4.18.2024060311-alpha
* uni-app x: Added uni-app x project to generate local packaged native Android resources[Details](https://doc.dcloud.net.cn/uni-app-x/native/use/android.html)
* uni-app x: Added real machine running, iOS platform (iOS17 and below) uts plug-in breakpoint debugging [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* Language Server: Added support for displaying the language service status in the status bar, making it easier to modify the language service settings  [Details](https://hx.dcloud.net.cn/Tutorial/Language/lsStatus)
* Language Server: Adjust the uni-app x project to disable syntax checking of uts, uvue, and css files by default. You can turn it back on through the [Language Service Settings] in the settings interface.
* Language Server: Optimize the performance of uni-app x projects, code hints, syntax checking, etc.
* Language Server: Fixed the bug of uni-app x project, html has no tag hint [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1798)
* Language Server: Fixed the bug that component attribute verification in uni-app x project does not support recognition of upper and lower camel case writing[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2056)
* Language Server: Fixed the bug that uts reports an error when assigning a named type [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2050)
* Language Server: Fixed the bug that the uts plugin web client reported an error when referencing the package name[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2051)
* Language Server: Fixed the bug that scss and less use nested writing to report an error [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1451)
* Language Server: Fixed the bug that there is no code hint at the end of the closing tag [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1581)
* Language Server: Fixed a bug where after deleting a file, the contents of the deleted file still had code hints in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1564)
* Language Server: Fixed a bug that the mouse hover function of the imported package name does not work in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2052)
* Fixed the bug that when running an html file to a browser and modifying the css and js that the file depends on, it will not automatically refresh. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2008)
* Fixed the bug that double-clicking to open a uts encrypted file in the project manager would cause HBuilderX to start continuously [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1949)
* Fixed the bug that HBuilderX crashed when running the scripts command under package.json when the project has package.json [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1983)

## 4.17.2024051110-alpha
* Language Server: Fixed the bug that when the "@/" form is used to reference the default package name "index.ts" or "index.js" in the language service uni-app project, there is no code prompt and syntax verification error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1934)
* Fixed the bug that there is no running log in uni-app x, real machine, iOS simulator after modifying uts plug-in and re-signing the base console [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1963)
* Fixed the bug caused by uni-app (x) 4.13, Node upgrade, causing the UTS plug-in Android debug to be unusable [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1979)

## 4.16.2024051009-alpha
* Language Server: Fixed the bug that when an absolute path in the form of "@/" is used in the uni-app project, there is no code prompt and syntax verification error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1590)
* Language Server: Fixed the bug of duplicate search results in uni-app x project under certain circumstances [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1904)
* Language Server: Fixed the bug that the language service only takes effect on a single platform when conditional compilation specifies multiple platforms in the pages.json file of the uni-app x project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1905)
* Language Server: Fixed the bug that after the file is deleted, the symbol information defined in the file is still prompted in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1564)
* Language Server: Fixed the bug that the interface or type type cannot be prompted after the instanceof keyword in the uni-app x project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1906)
* Language Server: Fixed the bug that vue's built-in command v-bind does not prompt for existing attributes [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1637)
* Language Server: Fixed the bug that when an absolute path in the form of "@/" is used in the uni-app project, there is no code prompt and syntax verification error [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1590)
* Optimize uni ext api code prompt performance
* Optimize uni-app x error checking performance
* Fixed the uni-app x manifest.json Android startup interface setting. When the splash image is a relative path, the image resource is lost after submitting the cloud package [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1814)
* Fixed the bug that the output log color is wrong in some cases when running the console of uni-app x

## 4.14.2024042905-alpha
* Fixed In some cases, when closing a modified file, the pop-up box will crash when saving.  [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1648)
* Fixed a bug that would cause some plug-in installations to fail when package.json, package-lock.json, and node_modules exist in the upper-level directory of the HBuilderX installation directory. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1649)
* Language Server: Fixed a Bug in windows platform where the selection of syntax hints in uni-app x projects and the validation platform did not take effect in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1653)
* Fixed the App cloud packaging uni-app project, the bug is always stuck at 40% after submitting the package [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1630)
* Fixed the bug of upload failure when the `uni_modules` plug-in introduced in version 4.13 contains the uni_modules.config.json script

## 4.13.2024042321-alpha
* Adjust the built-in node version to be upgraded from v16.17.0 to v18.20.0
* Adjust the minimum supported version of macOS to 10.15
* Fixed the bug that closing all tabs will cause UI lag when there are too many tabs [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1348)
* Fixed the bug that when text search is already displayed in the search area, shortcut keys trigger replacement and the replacement area cannot be automatically displayed [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1207 )
* Fixed the bug that `ctrl+tab` cannot trigger view switching when there is no open file in the single project window [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1365)
* Language Server: Added uni-app x typeof operator return value to support platform-specific types [Details](https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
* Language Server: Added new language service. An error warning will appear when referencing iOS platform-related modules in a non-uts plug-in development environment.
* Language Server: Adjust the language service. The uts plug-in iOS platform language service no longer takes effect under the windows version of HBuilderX.
* Language Server: Fixed the bug that the language service cannot be recognized when importing custom uvue components [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1397)
* Language Server: Fixed the bug of language service uts syntax verification error: "undefined cannot be assigned to type null" [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1461)
* Language Server: Fixed the bug of language service uts syntax verification error: "number type cannot be assigned to number literal type" [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1460)
* Language Server: Fixed the bug that when a syntax error occurs in the language service scss, the prompt cannot be displayed normally in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1466)
* Added uni-app x running on iOS platform added the function of clearing build cache. The cache directory is unpackage/cache/.app-ios
* Adjust the Android platform build cache directory unpackage/cache/.kotlin to unpackage/cache/.app-android when uni-app
* Added uni-app (x) to publish to app, iOS icon configuration can only be 1024*1024 pixels
* Fixed the bug that the Webview debugging console introduced in version 3.94 could not load the debugging waiting page after clicking the debugging link [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1511)
* Fixed the bug that when uni-app x introduced in version 4.11 is released to the app, the packaging error cannot be displayed normally [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1588)

## 4.12.2024041009-alpha
* Added bug feedback plug-in uni-app x classification, supports web and iOS platform, and allows multiple selections
* Language Server: Adjust the language service and upgrade the d.ts version of the built-in vue framework from 3.2.26 to 3.4.21
* Language Server: Fixed language service uvue tag syntax verification bug that falsely reports that v-slot and v-bind are not recognized
* Fixed a bug that may cause HBuilderX to crash in some cases when right-clicking on the editor and `Find References` [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1246)
* Fixed the bug of unsaved tag cards, in the inactive state, the modified content is not restored correctly after exiting and reopening HBuilderX [Details](https://issues.dcloud.net.cn/pages/issues/detail?id =1317)
* Fixed a bug in the editor floating prompt, where the link color in the prompt message is not clearly visible under dark themes [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1094)

## 4.11.2024040401-alpha
* [Important] uni-app x supports iOS
* Language Server: Added new language service uni-app x to support css syntax verification [Details](https://hx.dcloud.net.cn/Tutorial/Language/cssValidate)
* Language Server: Added new language service uni-app x to support uvue tag syntax verification [Details](https://hx.dcloud.net.cn/Tutorial/Language/vueValidate)
* Language Server: Newly added language service uts plug-in iOS platform supports the api of the third-party framework used by prompts (only supported by Mac version)
* Language Server: Fixed the bug of using inner class in language service uts syntax verification to incorrectly report errors when defining generics
* Language Server: Fixed the bug of language service uts syntax verification when the special value range string and string type variables are assigned to each other.
* Language Server: Fixed the bug that when the language service uni-app x platform verification error prompts, the platform error order is inconsistent with the order when setting the platform.
* Fixed the bug that the F11 shortcut key does not take effect in the default shortcut key scheme when switching windows to do not disturb mode
* Fixed the bug that Chinese ￥ cannot be input after vue file `{{}}` [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=924)
* Fixed the bug of inserting a blank line upward when the cursor is on the first line, inserting incorrect content
* Fixed the bug where go to a newly opened file defined when the file is relatively large may cause the cursor to return to the beginning of the file when it rolls back.
* Fixed the bug that after uninstalling and reinstalling the Prettier plug-in, if there is a formatting conflict, the plug-in name will appear repeatedly in the pop-up box [Details](https://issues.dcloud.net.cn/pages/issues/detail?id =849)
* Fixed the problem when uni-app prints multiple object type parameters, clicking a hyperlink will jump to the last [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=890)
* Fixed the bug that the uni-app cli project vue3 cannot run when using vite [Details](https://ask.dcloud.net.cn/question/188578)

## 4.07.2024032807-alpha
* Fixed the bug that when uni-app is run on a real machine and the simulator supports multi-cpu architecture, the standard base falsely reports that it is not supported [Details](https://ask.dcloud.net.cn/question/186863)
* Fixed the bug that when the built-in browser of uni-app is opened, switching files causes unrunning projects to run automatically [Details](https://ask.dcloud.net.cn/question/188432)
* Fixed the bug that the release directory prompt of the uni-app cli project is that the web is actually packaged into h5 [Details](https://ask.dcloud.net.cn/question/188468)
* Fixed the bug that the custom running of uni-app to web package.json does not take effect when running to the built-in browser [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1084)

## 4.06.2024032403-alpha
* Fixed the bug caused by version 4.05 when importing project templates from the plug-in market and incorrectly prompting that the project template is invalid
* Fixed the bug introduced in version 4.02, uni-app console, the printed log jump cannot use the json to type function after opening the file [Details](https://issues.dcloud.net.cn/pages/issues/detail ?id=999)


## 4.05.2024032021-alpha
* Fixed the bug that the uni-app (x) project may falsely report that the `uniapp-extension` plug-in has been tampered with when HBuilderX is first started.

## 4.04.2024031519-alpha
* Fixed the issue where when uni-app is released to the web and tree-shaking optimization is turned on, it prompts that the compilation is successful but there is no file. [Details](https://ask.dcloud.net.cn/question/187418)
* Plug-in: New im-notifier plug-in Receive new message notifications from uni-im and prompt users [Details](https://ext.dcloud.net.cn/plugin?name=im-notifier)

## 4.03.2024031101-alpha
* Language Server: UTS plugin, Auto-importing packages without a newline after the first line when no other import nodes exist in the current file.
* Language Server: uts syntax check, When the function parameter type is `UTSJSONObject`, when calling the function and using a literal object to pass parameters, a false positive type mismatch bug occurs
* Language Server: uts syntax check `instanceof` does not allow the type defined by type to be used as a value.
* Mobile App Playground: Fixed uni-app, after the iOS standard base is signed, it will not be automatically deleted during the next upgrade, causing the re-signed base that runs after the upgrade to be a bug in the previous version
* Mobile App Playground: Fixed the bug of uni-app x custom debugging base. After upgrading HBuilderX, the base version mismatch was not prompted.

## 4.02.2024030621-alpha
* Language Server: Fixed the bug of importing vue type error when using vue3+ts in uni-app project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=720)
* Language Server: Fixed the bug where the pinia module search error caused false alarms when using ts in the uni-app project [Details](https://ask.dcloud.net.cn/question/185148)
* Language Server: Fixed uts Android, automatically fix the bug that when there are multiple import package options, the import result of selecting an option other than the first one is incorrect.
* Fixed a bug that caused memory leaks when part of the memory was not recycled properly when the editor was opened or closed.
* Fixed a bug where a certain position may be lost when returning to the previous cursor position when quickly going to the definition continuously.
* Fixed the bug that may cause the interface to become unresponsive in a weak network environment when creating a new project
* Fixed the bug that the preview interface cannot disappear when the folded line in the code folding preview is at the last line of the screen
* Fixed the bug that the Prettier plug-in does not recognize the embedded uts code when formatting uvue [Details](https://ext.dcloud.net.cn/plugin?id=2025)
* Fixed a bug in the MacOSX project manager & built-in resource management that uses shortcut keys to rename file names. When entering the editing state, triggering the shortcut keys again will not automatically commit the changes. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=795)
* Fixed the bug that the Html preview sub-menu item `Save and automatically refresh the browser` is not displayed in the run menu [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=721)
* Fixed the bug of 404 reported when previewing html files when the project directory name contains the character '.'
* Added uts plug-in uts Android plug-in development, supporting Gradle 8.x [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html#%E9%85%8D%E7%BD%AE-gradle-jdk)
* Adjust uni-app (x) to run on the web, adjust the console log output format
* Adjust uni-app x to run on Android, adjust console log output format
* Fixed uni-app x, project contains uts plugin, run to custom base, Bug in running error when `Clean build cache` is checked [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=781)

## 4.01.2024020211-alpha
* Adjust the Git plug-in and separate the Git Blame function into a separate plug-in, which can be downloaded from the plug-in market.[Details](https://ext.dcloud.net.cn/plugin?id=16568)
* Language Server: Fixed the bug that causes performance degradation when uni-app x uts code imports too many Android platform libraries
* Language Server: Fixed the bug that the globalProperties attribute defined in uni-app x main.uts cannot be prompted in other uvue pages
* Language Server: Fixed the bug that when uni-app x import imports uvue files, the path cannot go to the defined bug
* Language Server: Fixed the bug that when opening multiple html files, switching to the previous html, variables floating, going to definition, etc. may not be correct if it is not modified.
* Language Server: Fixed the bug that uni api is not prompted under uni_modules utssdk
* Language Server: Fixed the bug that caused the code prompts to become slower and slower when developing uniCloud cloud functions and cloud objects.
* Fixed the bug of hbuilderx object reporting undefined in plug-in API custom webview view introduced in version 4.0 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=670)
* Fixed the bug caused by version 4.0, when the uni_modules plug-in is uploaded to the plug-in market and the interface keeps loading when opening it
* Fixed the bug introduced in version 4.0 that the schema2code plug-in right-clicked to trigger the Schema2Code menu and the interface kept loading when opening it.
* Fixed the bug that uni-app (x) HBuilderX may falsely report that the `uniapp-extension` plug-in has been tampered with when it is started and click Run immediately.
* Fixed a bug in uni-app (x) that caused HBuilderX to crash when clicking preview after opening an image file in the editor.

## 4.0.2024012711-alpha
* Language Server: Added uni-app x to support multi-platform code prompts and grammar verification, and can switch language services by platform [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* Language Server: Added uni ext api, supporting interface.uts specification [Details](https://uniapp.dcloud.net.cn/api/extapi.html#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91uni-ext-api)
* Language Server: Upgrade the built-in typescript library from `4.5.5` to `5.2.2`
* Language Server: Fixed the bug of $ appearing in tag code completion when opening a file in a shared directory [Details](https://ask.dcloud.net.cn/question/182857)
* Language Server: Fix: In some cases, css cannot be transferred to the defined bug [Details](https://ask.dcloud.net.cn/question/184780)
* Language Server: Fix the bug that pages.json, path prompts incorrect page path [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=466)
* Language Server: Fix the bug that caused the file to be occupied and unable to be renamed after displaying the reference results after searching for references.
* Plug-in: New Git plug-in supports blame and displays git log at the end of the code line [Details](https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/git_blame)
* Plug-in: Adjust the bug reporting plug-in. The HBuilder running logs, uni-app console logs, etc. that are checked when reporting bugs are uploaded to be visible only to administrators.
* Plug-in: Optimize the bug reporting plug-in. After submitting a bug, click the details to jump to the issues system to support automatic login.
* Plug-in: Repair bug reporting plug-in macOSX cannot paste pictures when reporting bugs [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=372)
* Fixed AI virtual row style exception when switching themes. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=360)
* Optimize network error prompts in HBuilderX login interface
* Added support for system associated icons for windows uts and uvue files
* Fixed the bug that prompts HBuilderX to prevent shutdown when Windows computer is shut down
* Fixed the bug that when a menu pops up in a certain window in MacOSX multi-window situation, and then the mouse clicks on another window, the focus state and activated window are incorrect.
* Fixed the bug that when the console file link is clicked to jump to the editor, if the target line is collapsed, it will not automatically expand.
* Fixed the bug of incorrect coloring of jsdoc @ tag under vue file script.
* MarkDown: Fixed a bug that caused the preview to fail when the markdown preview file name contained a + sign or other special symbols. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=463)
* MarkDown: Fixed a bug in markdown preview that caused the preview to fail if the file name was modified after previewing. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=369)
* MarkDown: Fixed the bug that markdown preview cannot be parsed and rendered normally when embedded html code [Details](https://ask.dcloud.net.cn/question/184421)
* Html preview: Fixed the bug in html preview where external html files cannot be run into the browser [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=411)
* Html preview: Fixed the bug that the reference to relative path resources in html preview does not take effect
* Html preview: Fixed the bug that the built-in browser log cannot be output to the console when the html file path of the html preview contains Chinese characters.
* Fixed a bug that may cause the interface to freeze when the plug-in process crashes abnormally
* Fixed a bug in the plug-in API that uses font icon extension plug-ins. After installation and use, the plug-in cannot be uninstalled due to font occupation.
* Fixed the bug that the plug-in API window.getActiveTextEditor does not return when there is no open tab card.
* Fixed the bug of running multiple html to chrome and modifying one of them, causing the rest of html pages to refresh. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=313)
* Fixed the bug that caused 5+ projects to disappear when running the menu bar until the browser entrance disappears [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=447)
* uni-app: Adjust the uni-app running unpackage compilation directory and change the `h5` directory name to `web`
* uni-app: Fixed the bug that uni-app runs and runs to Alipay applet and custom run does not take effect [Details](https://ask.dcloud.net.cn/question/183790)
* uni-app: Fixed the bug that causes HBuilderX memory usage to increase in some cases when running uni-app [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=438)
* uni-app: Fixed the bug that the uni-app(-x) pages.json file, uts file, menu `Edit`-`Comment`-`Conditional Compilation` function does not take effect
* uni-app: Added uts plug-in for uni-app x project to support debugging [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* uni-app: Fixed the bug that the format of manifest.json is incorrect when copying permissions to the Android permission configuration interface [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=370)
* uni-app: Fixed the bug that when the plug-in market imports a project and the project only supports vue2, the vue3 button on the import interface can still be clicked.