## 3.99.2023121601-alpha
### HBuilder
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
* Language Server: Fixed the bug that the global event does not take effect when verifying the event type of uni-app x and uvue components.
* Language Server: Fixed a bug that caused the language service to crash when starting in some cases. [Details](https://ask.dcloud.net.cn/question/182739)
* Language Server: Fixed the bug that the replacement position of @rule was incorrect in some cases when prompting the code of less and scss files. [Details](https://ask.dcloud.net.cn/question/182353)
* Language Server: Fixed the bug that field nesting syntax is not supported when unicloud-db component code prompts
* uni-app: Fixed a bug that caused the Alipay applet to fail when pages.json had duplicate keys due to conditional compilation. [Details](https://ask.dcloud.net.cn/question/182610)
* uni-app: Fixed the bug that the uni-app cli project cannot run to the Alipay applet.
* uni-app: Fixed the bug that MacOSX uni-app, when running to the Alipay applet, is not compatible with the tool path of the old Alipay applet.
* Mobile App Playground: Fixed a bug that caused the dock to be installed repeatedly on some Android models due to incorrect installation time of the dock. [Details](https://ask.dcloud.net.cn/question/182690)
* Mobile App Playground: Fixed the bug that after running Android to a custom debugging base and then running the standard base to the iOS simulator, a failure to install the debugging base was reported.[Details](https://ask.dcloud.net.cn/question/181703)
* 5+ App: Fixed the bug that the toolbar run menu has more menu items such as run to Chrome
* uni-app: Optimize the permission visual interface of manifest.json
### uni-app plugin
* Mini Program Fixed onError invalid in the Vue3 project script setup. [Details](https://github.com/dcloudio/uni-app/issues/4276)
* Mini Program Fixed the bug that v-if is invalid when the slot content of the Vue3 project is a single root node. [Details](https://github.com/dcloudio/uni-app/issues/4486)
* Lark Mini Program Fixed the bug that Vue3 project scope slot does not display content. [Details](https://ask.dcloud.net.cn/question/181927)
* Alipay Mini Program Added component styleIsolation configuration, default value apply-shared. [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-alipay)
* WEB Fixed the bug that the properties of multi-root node components are lost after the Vue3 CLi project is packaged. [Details](https://ask.dcloud.net.cn/question/182569)
* WEB Fixed the bug that the map component uses the fillColor and color properties of circles on the Gaode to set transparency invalidly. [Details](https://ask.dcloud.net.cn/question/159809)
* App Fixed the bug of nvue page error when vite.config.js configures target as esnext. [Details](https://ask.dcloud.net.cn/question/183180)
* WEB Added Vue3 project to support Baidu Maps. [Details](https://uniapp.dcloud.net.cn/collocation/manifest#h5sdkconfig)
* WEB, App-Vue Added radio component to support backgroundColor, borderColor, activeBackgroundColor, activeBorderColor, iconColor attributes. [Details](https://uniapp.dcloud.net.cn/component/radio.html#radio)
* WEB, App-Vue Added checkbox component to support backgroundColor, borderColor, activeBackgroundColor, activeBorderColor, iconColor attributes. [Details](https://uniapp.dcloud.net.cn/component/checkbox.html#checkbox)
### uni-app x plugin
* Added Vue support app.use register vue plugins [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* Added Vue app.config.globalProperties register global properties [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* Added Vue dynamic component [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#special-elements)
* Added Vue provide/inject for component communication [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* Added Vue mixin [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* Added Vue v-html [Details](https://uniapp.dcloud.net.cn/uni-app-x/component/index.html#directives)
* Added Vue v-once、v-memo、v-pre [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#directives)
* Added Vue $forceUpdate [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#component-instance)
* Added Vue support render function [Details](https://uniapp.dcloud.net.cn/uni-app-x/vue/index.html#rendering-options)
* Added global variable globalData [Details](https://uniapp.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata)
* Added uni-cms client plugin uni-cms-article [Details](https://ext.dcloud.net.cn/plugin?id=11701)
* Fixed the bug where calling the route API in the onLaunch lifecycle of the application was abnormal
### uts plugin
* Fixed a bug where multiple destructuring statements could lead to compilation errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=217)
* Fixed a bug on the App-iOS platform where property override errors occurred when inheriting classes. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=207)
* Fixed a bug on the App-Android platform where UTSJSONObject object-defined methods couldn't be accessed via indexing. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=234)
* Fixed a bug on the App-Android platform where top-level variables, type attributes, class instance properties, and class static properties caused compilation errors when differentiated solely by the capitalization of the first letter. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=286)
### uniCloud plugin
* Added Qiniu cloud extend storage, better pricing and more flexible. [Details](https://uniapp.dcloud.net.cn/uniCloud/ext-storage/intro.html)
* Added The uni-app-x project supports uniIdRouter. [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#uni-id-router)
* Added Alipay Mini Program Cloud to support cloud function URL
* Added Alipay Mini Program Cloud supports running JQL files.
* Fixed the bug that Alipay Mini Program Cloud doc get is not compatible and the return value is null [Details](https://ask.dcloud.net.cn/question/182457)
* Fix the bug of incorrect results when querying objects in the Alipay Mini Program Cloud database where and match
* Fixed the bug where the failure reason is not displayed on the front end when uploading to Alipay Mini Program Cloud cloud storage fails.
* Fixed the bug that when the project has multiple cloud vendors, the uploaded cloud function identifies the wrong cloud vendor.
* Fixed the bug of "Upload Schema extension Js configuration" prompt "Please bind service space" in the right-click menu of database directory [Details](https://ask.dcloud.net.cn/question/182971)
* Fix the bug that when creating Schema, the existence of init_data.json with a large amount of data will cause it to not be downloaded correctly
* Fix the bug that uploading the uni-clientDB-actions file separately will overwrite the previously uploaded action [Details](https://ask.dcloud.net.cn/question/182598)
* Fixed the bug that when uploading cloud functions, creating schema, uploading/downloading verification functions, if you select skip in the pop-up window if they exist, all bugs will be skipped
* Fixed the bug in the initialization wizard deleting the db_init.json copy
* Fix the bug that Alipay Mini Program Cloud uni.getTempFileURL API returns only the file name
* Optimize the ability to switch service spaces of different cloud vendors when associating service spaces

## 3.98.2023112011-alpha
### HBuilder
* Fixed an issue where files opened in HBuilderX would occasionally not automatically refresh their content after being modified by an external program. [Details](https://ask.dcloud.net.cn/question/181222)
* Fixed a bug that caused MarkDown file rendering to be extremely slow on some MacOSX computers with built-in browsers
* Fixed the bug that conditional compilation codes such as `#ifdef` in ts language are not highlighted
* Language Server: Fixed the bug that the id cannot be transferred to the definition
* Language Server: Fixed the bug that id and class prompts were not sorted according to file reference relationships
* Language Server: Fixed a bug in windows file monitoring that prevented renaming and deleting files
* Language Server: Fixed the bug that the data type of v-slot:default is deduced incorrectly when the DB Schema table specified by the unicloud-db component has no attributes.
* Language Server: Fixed the bug that some Android system APIs in the uts plug-in are not compatible with kotlin
* Language Server: Added uts type verification error prompt to support internationalization
* Language Server: Fixed the bug in uni-app x where some vue types were incorrect causing syntax errors.
* Fixed the bug of non-uniCloud projects introduced in 3.97. After running, a uniCloud console is still opened.
* Fixed a Bug in 3.97 where a non-unicloud project would still open a uniCloud console after running.
* Mobile App Playground: Optimize the Android custom runtime, the version number is the same but the installation time is different, will not cover the installation Bug
* Mobile App Playground: Fixed a Bug where Android devices connected through the LAN did not support reverse proxy when running Times [Details](https://ask.dcloud.net.cn/question/181431)
### uni-app plugin
* Enhanced compile-time warnings for directories under `static` that are ignored for the current platform. [Details](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* Fixed this bug of when a project use the uni ext API and cloud packaging is selected for both Android and iOS, the installation package does not correctly include the uni ext API plugin. [Details](https://ask.dcloud.net.cn/question/181295)
### uni-app x plugin
* Added sticky-section component, support sectional sticky[Details](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky.html#sticky-section)
* Added uni-push API[Details](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
* Added When the CSS position attribute is absolute, the margin attribute supports auto value
* Adjust uni.downloadFile API, the download directory adjust to uniDownloads directory at app's cache directory
* Fixed the bug on App-Android platform, some events callback of video component have no attribute values[Details](https://ask.dcloud.net.cn/question/180748)
* Fixed the bug on App-Android platform, the current attribute of swiper component may have no effect[Details](https://ask.dcloud.net.cn/question/181396)
* Fixed a bug where text component nesting may flash back when reusing component list-item
* Fixed a bug in the onLoad lifecycle call to uni.showLoading on the homepage caused by 3.97 that may crash
* Fixed the bug where using easycom component types in non-uvue pages error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=177)
* Fix the bug that prevents the successful referencing of static resources from a non-static directory in the CSS code. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=231)
* Optimized Improved the compilation speed for projects with a substantial amount of CSS code.
### uts plugin
* Optimized Asynchronous functions run in the same thread as the framework by default when used in uni-app x
* Fixed the bug where the priority of bitwise operations was incorrect when used in combination.
* Fixed the bug on App-Android Array join return value is inconsistent with web
* Fixed the bug on the hooksClass related callbacks are repeatedly called when the custom dock is running on the real machine.
* Fixed a Bug that may affect App listing review due to the underlying reliance on uni-getDeviceInfo to read IDFA code after using uts plug-in for App-iOS platform
* Fixed the bug result of an operation involving Number may overflow as an integer
* Fixed the bug divisor of the division operation in which Number participates cannot be 0
### uniCloud plugin
* Added Alipay Mini Program Cloud Initialization Wizard
* Added uni-app-x now support alipay cloud as unicloud service provider
* Optimization: When creating a new schema/new schemajs based on a template, if the template is composed of multiple files, the user will be prompted which files to create.
* Optimization: When "Initializing Cloud Database", if a collection already exists in the cloud, a pop-up window will appear. The first collection in the pop-up window is not selected by default.
* Fixed the problem that after opening the db_init.json file, right-clicking "Initialize Database" in the editing area cannot be initialized.
* Fixed the issue where the uniCloud folder alias would not be updated after renaming the uniCloud folder
* Fixed the issue where the uni_modules directory does not exist in the project directory when uploading public modules, resulting in failure to upload
* Fixed The weixin mini program upload file to alipay cloud report an error
* Fixed the issue that the return value of the Alipay Mini Program cloud database update operation did not return the updated parameter

## 3.97.2023110504-alpha
### HBuilder
* Fixed the bug that the HBuilderX login window is not visible in some cases on the computer extension screen in Windows
* Fixed a bug introduced in 3.94 that caused wap2app project packaging failure due to plug-in path adjustment.
* Language Server: Fixed the bug that the imported path is incorrect when the uts system library code prompt triggers automatic package import.
* Language Server: Fixed the bug that the imported path is incorrect when the uts system library automatically repairs and imports packages.
* Language Server: Fixed the bug that after the file is deleted, the class and id code defined under the file will still be prompted.
* Language Server: Fix css code prompts. When the project is too large, some classes will not prompt.
* Language Server: Adjustment: Support string or number type assignment to the corresponding string or number literal union type during type verification.
* Language Server: Fix the bug of `uni.request({ "url" })` when typing the url code prompt and pressing Enter to complete the error bug.
* Markdown: Added Markdown preview to support simultaneous bidirectional scrolling of the editor and preview view
* Markdown: Newly added: When copying code and pasting it into the Markdown editor in the editor opened in HBuilderX, the code block in the corresponding language will be automatically wrapped.
* Fixed a bug that may cause a crash when quickly closing the editor when the editor variable is suspended
* Added support for automatically opening the project and entering preview mode when uni-app is run into the Alipay applet.
* Fixed the bug that the uniCloud initialization wizard cannot be used
* Fixed the bug that after uniCloud uploaded the first cloud function, there was no response when uploading it again.
* Fixed the bug that when uniCloud first runs the cloud function locally and then uploads the cloud function, the upload log will not be output to the console.
### uni-app plugin
* Fixed the bug where the target configuration in vite.config.js for Vue 3 projects was not affecting the renderjs. [Details](https://ask.dcloud.net.cn/question/180135)
* Fixed a bug when using uts for development, upgrading and updating the wgt may result in errors. [Details](https://ask.dcloud.net.cn/question/180309)
### uni-app x plugin
* Added Some API support interceptors [Details](https://uniapp.dcloud.net.cn/uni-app-x/api/interceptor.html)
* Added uni.setNavigationBarTitle [Details](https://uniapp.dcloud.net.cn/uni-app-x/api/set-navigation-bar-title.html)
* Added support for image and video components to use static resources from non-static directories as src.
* Added support for importing files with a .ts extension in uvue files, equivalent to .uts extension.
* Fixed the dynamically created root node loses its class styles
* Fixed wrapping the expression bound to v-model with parentheses results in a failure
* Fixed using the class to customize the root node style of another custom component within a custom component does not take effect
* Fixed a bug where changes made to UTSJSONObject defined in the data of uvue files did not trigger rendering.
* Fixed a bug where rendering was incorrect when the uvue page file name matched an easycom component.
### uts plugin
* App-Android native component definitions in uni-app x projects support returning values for external methods.
* Fixed a bug where on the App-Android and App-iOS platforms, if the same interface or class defined different properties, method calls would fail.
* Fixed a bug where developing uts plugins in a uni-app project under Vue 2 might not point to the source code.
* Fixed a bug related to bitwise assignment operators where the result was incorrect when the right-hand side was a complex expression.
### uniCloud plugin
* Added uniCloud now support alipay cloud as service provider
* Split `db_init.json` into collections. Each collection is described by schema.json, index.json, and init_data.json files [Details](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#init-db)

## 3.94.2023102311-alpha
* Fixed the bug caused by 3.91-alpha. When switching themes, click on a file to open. If the file has been opened before, the theme will not switch normally.
* Language Server: Fixed uni.getElementById(""), the parameter cannot be prompted and transferred to the definition bug
* Language Server: Fixed the bug of unused variables being falsely reported during syntax verification in uvue files and optional API internal scopes.
* Language Server: Fixed the easycom component label. If the component suffix is uvue, it cannot go to the defined bug.
* Language Server: Fixed the undefined bug when using Element and ComponentPublicInterface types in uni-app x project.
* Language Server: Fixed the language service and missing bugs in some iOS system library APIs
* Language Server: Fixed the bug caused by 3.93-alpha in the uni-app project. When pages.json has a syntax error, the vue file will falsely report an error.
* Fixed the bug of `undefined base location not found` reported when running uni-app x project on real machine in some cases
### uni-app plugin
* Fixed when there are multiple root nodes, uni.getElementById fails to retrieve

## 3.93.2023101913-alpha
### HBuilder
* Fixed a bug that required multiple undoes to restore after formatting the Markdown table
* Language Server: Fixed the bug of not prompting for path when referencing uts plug-in and being unable to define the path to the definition
* Language Server: Fixed the bug of not prompting the uts plug-in to export content after referencing the uts plug-in.
* Fixed a bug that caused the file synchronization to fail when the file path under the project contained special characters caused by version 3.91 of the App running on a real machine.
* Fixed the bug in 5+ projects that when modifying js, css, pictures and other files, the pages that reference these resources will not be automatically refreshed.
* Adjust uni-app manifest.json uni-app and 5+ projects Adjust Android platform support CPU type Default value is `arm64-v8a`
* Added uni-app x project to support uniCloud debugging
* Added uni-app x running configuration to support setting kotlin compiler memory parameters
* Fixed the bug that the uni_modules plug-in upload plug-in does not have uni-app x related categories
### uni-app plugin
* Weixin Mini Program Fixed subscrip component attribute is invalid [Details](https://ask.dcloud.net.cn/question/178893)
* Alipay Mini Program Fixed lottie component attribute is invalid [Details](https://github.com/dcloudio/uni-app/issues/4510)
* TikTok Mini Program Fixed Vue2 project refs invalid in TikTok App 27.2.0 [Details](https://github.com/dcloudio/uni-app/pull/4555)
* Optimize uni.getElementById Support generics
* App-Android fixed uni-app-x project list-view component where the positions of some child nodes are abnormal in certain cases
* Fixed when a ref-bound node is removed, the $refs data is not updated
### App plugin (5+ App & uni-app)
* Android Adjustment The default supported CPU type is arm64-v8a [Details](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#default)
### uts plugin
* App-Android Updated await supports it with Promise [Details](https://uniapp.dcloud.net.cn/uts/operator.html#await)
### uniCloud plugin
* Update Aliyun The maximum timeout period for function excution has been adjusted from 60 seconds to 120 seconds

## 3.92.2023101106-alpha
### HBuilder
* Fixed the bug of flickering in Markdown image floating preview
* Fixed the bug of falsely reporting a format error when the .editorconfig file contains extended setting items.
* Language Server: Fixed the bug of false reporting in uvue files and optional API props
* Language Server: Fixed uni-app x, conditional compilation, duplicate prompts and incorrect content bugs
* Fixed the bug that caused HBuilderX to crash when the ${} special mark appeared in the update log when uploading the uni_modules plug-in to the plug-in market.
* Fixed the bug that when uni-app creates a new page, the indentation and line breaks of the page when inserted into pages.json are inconsistent with the current editor settings.
* Fixed the bug of uni-app manifest.json crashing occasionally when clicking on certain elements
### uni-app plugin
* App Fixed Cloud packaging Storage related interface settings and content acquisition exceptions. [Details](https://github.com/dcloudio/uni-app/issues/4556)
* App-Android fixed uni-app-x project onLoad lifecycle calls route API interaction exception.
* App-Android fixed uni-app-x project calling uni.switchTab on a non-tabBar home page causes the application to crash.
### App plugin (5+ App & uni-app)
* Android Update the Google Analytics for Firebase SDK to 21.3.0; Update the Firebase Cloud Push SDK to 23.2.1
### uniCloud plugin
* Fixed Invoke uniCloud api report an error when running uni-app-x project on android 6.0

## 3.91.2023092719-alpha
### HBuilder
* Added uni-app-x, no longer using js and webview, compiled into a pure native App, currently only supports Android. [Details](https://uniapp.dcloud.net.cn/uni-app-x/)
* Added HBuilderX version upgrade to support differential updates and improve update speed
* Added HBuilderX support for search setting items (shortcut key: `Alt+Shift+,`)
* Fixed the bug of switching the console back and forth in the menu [View], and then pressing `Alt+Tab`, a new blank console without title will appear.
* Added new project manager, mouse drag and drop to move files, added confirmation pop-up window
* Optimize the performance of large character replacement operations
* Optimize the operation performance of large files and comment thousands of lines of code
* Fixed MacOSX In some cases, HBuilderX crashes when clicking on the top view or help menu
* Fixed multi-file character search, activate the search view for the first time, the search input box does not automatically focus the bug
* Fixed the bug of incorrect indentation of conditional compilation after formatting when writing conditional compilation in template area of vue/uvue file.
* Fixed the bug that when formatting a TS file and selecting an area for formatting, the formatting result may be incorrect when the selected area is smaller than one line.
* Fixed the bug that the HBuilderX plugin-manager Node process cannot exit under certain circumstances
* Fixed the bug of slow device list refresh in the Android device selection window when the App is run on a real device
* Fixed the bug in the Android device selection window when the App is running on a real device. Under Windows, the phone list sometimes displays abnormal data.
* Added uni-app manifest.json App module configuration, Facebook login, added configuration item client_token
* Fixed the bug in uni-app manifest.json, App module configuration->Positioning->Amap positioning, only check Android and verify appkey_ios
### uni-app plugin
* Added Conditional compilation provides universion to distinguish the compiler version. Can be used for plug-in to adapt to different versions of uni-app [Details](https://uniapp.dcloud.net.cn/tutorial/platform.html#uniVersion)
* Added Conditional compilation static directory supports APP and Web sub -directory [Details](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* App-Android Fixed uni.downloadFile download wgt files may not have a file suffix [Details](https://ask.dcloud.net.cn/question/176447)
* App-iOS Fixed When the app language is set to English, the nvue map component still displays Chinese [Details](https://ask.dcloud.net.cn/question/178833)
### uts plugin
* Fixed When the for loop contains complex Continue and Break, the execution is incorrect
* Fixed Unable to access external definitions in the class definition of internal attributes and methods of the same name
### App plugin (5+ App & uni-app)
* Android Update Facebook Login SDK to version 16.1.3, resolve sign-in exceptions [Details](https://ask.dcloud.net.cn/question/175402)
### uniCloud plugin
* Added Some interfaces support calls in uni-app x projects [Details](https://uniapp.dcloud.net.cn/uni-app-x/unicloud/)

## 3.8.12.20230802-alpha
### HBuilder
* Fixed the bug that in some cases, after HBuilderX exits, some node processes cannot exit correctly with 100% CPU
* Fixed multi-file search After specifying the search range, switching the editor tab causes the bug that the search range changes
* Fixed single-line comments, when the cursor is at the beginning of the line, the bug that the anti-comment does not take effect
* Language Server: Fixed the bug that the code prompt of the file in the uniCloud directory is slow in some cases
* Language Server: Fixed the bug that the js error in the vue file is incorrect after the js grammar check is turned on
* Language Server: Fixed the bug that the uni-app project cannot recognize the pinia module
* Language Server: Fixed the bug that the built-in module `(eg: @dcloudio/uni-app)` will not be prompted when the module name of the uni-app project is prompted
* Language Server: Fixed the bug that the occasional outline of vue and html files does not take effect
* Language Server: Fixed the html file, some template syntax may cause the bug that the code cannot be prompted
* Fixed the bug that when the uni-app is running on a real machine, unplug the phone and plug it in again, re-running will cause repeated console logs and multiple compilation processes
* Fixed the bug that the `Restart Application` button in the console toolbar does not take effect after being clicked in some cases when the uni-app is running on a real machine
* Added conditional compilation support for the "static" directory in uni-app projects for "app" and "web" directories. [Details](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* Added conditional compilation support for uni-app projects, providing "uniVersion" to distinguish compiler versions. [Details](https://uniapp.dcloud.net.cn/tutorial/platform.html#uniVersion)
### uni-app plugin
* uts plugin App-Android Added support Promise [Details](https://uniapp.dcloud.net.cn/uts/buildin-object-api/promise.html)
### uniCloud plugin
* Adjust uni-ai The Baidu LLM api s adjusted to [wenxin workshop](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11)
* Added uni-map-common A common module for aggregating cloud capabilities from multiple map providers [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-map-common.html)
* Added unicloud-map The cloud integrated component is mainly used to display custom POIs in the database and render them on the map [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map.html)
* Added unicloud-map Map management plugin, providing POI management, which can visually mark POIs on the management side [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map-admin.html)
* Added unicloud-city-select City selection component, making it convenient for users to quickly select the components of the target city in the application [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html)
### App plugin (5+ App & uni-app)
* Android Adapts to support Android 14
* Android Update the cloud packaging compileSdkVersion to 33

## 3.8.11.20230719-alpha
### HBuilder
* Language Server: Fixed the bug that there is no code hint in the vue/nvue file tag event

## 3.8.10.20230714-alpha
### HBuilder
* Language Server: JS, TS supports automatic repair of error checking
* Language Server: Fixed the bug that this in the Vue arrow function cannot access the vue instance
* Language Server: Fixed the bug that Vue API description internationalization fails
* Language Server: Fixed the bug that the text in the floating frame does not support copying by `ctrl + c`
* Added support to type `/**` on the ts method to automatically extract method parameter information to tsdoc
* Fixed the bug that the editor floating frame occasionally floats to other application windows
* Fixed code assistant, the bug that the next page button is still not grayed out when the list cannot be turned to the next page in some cases
* Fixed uni-app manifest.json uncheck the Push module, the bug that the push code will still be compiled in when exporting wgt
### uni-app plugin
* App-iOS Fixed The tabBar styles are abnormal when using font icons [Details](https://ask.dcloud.net.cn/question/173375)
* Douyin Added Support for running to specified pages
### uniCloud plugin
* Added The parameter of Aliyun timing triggered function is align with Tencent cloud function [Details](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#trigger-param)
* Added The _timing function of cloudobject add input parameters [Details](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
* Added uni-ai supports calling the iFly spark model through the developer's own key [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* Added Http request method uniCloud.request is available [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-request)
* Added Websocket client method uniCloud.connectSocket is available [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#websocket-client)
### App plugin (5+ App & uni-app)
* Android Fixed The default language of the permission denied prompt text on the QR code scanning interface is incorrect [Details](https://ask.dcloud.net.cn/question/174032)
* iOS Fixed After update with wgt, installing the app without removing it cause white screen [Details](https://ask.dcloud.net.cn/question/163393)

## 3.8.7.20230628-alpha
### HBuilder
* Fixed the bug that HBuilderX crashed during the multi-file character search in some cases
### uni-app plugin
* App Fixed The issue of calling `uni.getPushClientId` and getting the error `getPushClientId:fail init am error: no api impl found` when only enabling online push and not enabling offline push in the 3.8.5 update of uni-push2.0 [Details](https://ask.dcloud.net.cn/question/172659)
* App-iOS Fixed The tabBar icon is distorted when the width and height are inconsistent [Details](https://ask.dcloud.net.cn/question/172418)
### uniCloud plugin
* Fixed jql The geoNear method returns incorrect results when it does not pass the query parameter [Details](https://ask.dcloud.net.cn/question/172404)
* Added uni-ai The chatCompletion method supports optimizedMessage events to optimize the frequency of message triggering and reduce client stuttering [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
### App plugin (5+ App & uni-app)
* Android Optimize The plus.runtime.install function as an independent module, it's not included when the Google Play channel, solve the problem that the Google Play report DCloud SDK contains downloading or installing applications from unknown sources [Details](https://ask.dcloud.net.cn/question/172533)
* Android Update the AndroidX library to version 1.1.0, solve the problem that the Google Play report androidx.fragment:fragment:1.0.0 SDK is obsolete
* iOS Fixed setTitleNViewButtonStyle Styling title bar buttons may prevent them from displaying properly [Details](https://ask.dcloud.net.cn/question/172191)

## 3.8.6.20230621-alpha
### HBuilder
* Fixed the bug caused by 3.8.5, the file find reference function fails
### uni-app plugin
* Fixed the issue of socket legitimate domain name errors in uni-push2.0 updated on 3.8.5

## 3.8.5.20230616-alpha
### HBuilder
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
* Improved multi-file character search by increasing the display area for search results on small screens.
* Fixed multi-file character search where the input for include/exclude directories was not taken into account when clicking the "Search" button.
* Fixed the built-in browser where occasional crashes occurred when switching between preview and closing multiple times.
* Fixed switching the left-side view (such as the project explorer) while having multiple running consoles would cause misalignment of the buttons at the top of the console.
* Added plugin API `languages.registerInlineCompletionItemProvider` to support inline code completion. [Details](https://hx.dcloud.net.cn/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)
* Added plugin API `window.createStatusbarItem` to create a status bar item. [Details](https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem) 
* Optimized the performance of the plugin API `console.appendLine` for logging.
### uni-app plugin
* App、Web Fixed Vue page textarea component height rendering exception [Details](https://ask.dcloud.net.cn/question/169380)
* App Updated Vue2 project nvue file event compilation [Details](https://ask.dcloud.net.cn/question/170516)
* App Fixed Text nodes in nvue files cannot use \n to wrap [Details](https://github.com/dcloudio/uni-app/issues/4215)
* App Fixed Some prompts for fingerprint authentication do not support internationalization [Details](https://ask.dcloud.net.cn/question/168473	)
* App Fixed The VideoContext method fails in some cases of the Vue3 project [Details](https://ask.dcloud.net.cn/question/168476)
* App-iOS Fixed uni.setTabBarItem dynamically sets gif images not to take effect [Details](https://ask.dcloud.net.cn/question/171342)
* App-iOS Fixed The nvue rich-text component may randomly appear on a white background when the text is rendered in a loop [Details](https://ask.dcloud.net.cn/question/171090)
* App-iOS Fixed The nvue video component height is set rpx may cause Controls not to appear [Details](https://ask.dcloud.net.cn/question/171037)
* Web Updated uni.showToast text wrapping style [Details](https://github.com/dcloudio/uni-app/pull/4373)
* Web Fixed In some cases, the location selection interface displays abnormally [Details](https://ask.dcloud.net.cn/question/167071)
* Web Fixed Gaode map address name is missing [Details](https://ask.dcloud.net.cn/question/171013)
* Web Fixed darkmode configuration does not take effect [Details](https://github.com/dcloudio/uni-app/issues/4317)
* Mini Program Fixed Event compilation errors in some cases of nested lists [Details](https://ask.dcloud.net.cn/question/171043)
* Mini Program Fixed eventChannel disorder in some cases
* Mini Program Fixed Custom attribute names cannot use name, value  [Details](https://github.com/dcloudio/uni-app/pull/4257)
* Weixin Mini Program Fixed Report an error using requirePlugin [Details](https://github.com/dcloudio/uni-app/issues/4301)
* Douyin Mini Program Added Support consume-card, pay-button, rate-button, member-button components [Details](https://ask.dcloud.net.cn/question/167927)
* Douyin Mini Program Added showToast supports mask configuration [Details](https://ask.dcloud.net.cn/question/154332)
* Web platform, mini-program platform, App platform online push: Fixed uni-push2.0, which used to cause high-frequency push calls, leading to insufficient client memory and causing the client to get stuck (for mini-program platform, you need to add a new socket legal domain wshzn.getui.net:5223 to the whitelist, [Details](https://uniapp.dcloud.net.cn/unipush-v2.html#useinmp))
### uniCloud plugin
* [Important] Added uni-ai support making calls through the uni-ai billing gateway [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#api)
* Fixed The multi method of redis does not return results correctly when calling from local cloudfunction [Details](https://ask.dcloud.net.cn/question/171188)
* Added Extension uni-cloud-push can be used in local cloudfunction
* Optimized Aliyun The timeout period of invoke cloudfunction by cloudfunction is adjusted from 10 seconds to 60 seconds
* Added Aliyun Cloud Storage support directory [Details](https://uniapp.dcloud.net.cn/uniCloud/storage.html#storage-dir)
### App plugin (5+ App & uni-app)
* Android Fixed The input box may be blocked when the soft keyboard pops up with version 3.8.4 [Details](https://ask.dcloud.net.cn/question/172135)
* iOS Adjust allowsInlineMediaPlayback defaults to ture, allow videos to play in full screen [Details](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS Adjust mediaPlaybackRequiresUserAction defaults to false, allows audio and video to control automatic playback through APIs [Details](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS Fixed The orientation of the video may be incorrect [Details](https://ask.dcloud.net.cn/question/171484)

## 3.8.4.20230602-alpha
### HBuilder
* Optimize the left view of HBuilderX. The drop-down menu in the upper right corner of the top supports switching views of project manager, multi-file character search, debugging, etc.
* Optimize the HBuilderX multi-file character search view, optimize the stop function and UI on the top status bar.
* Fixed the uni-app introduced in 3.8.0. When the project contains the uts authorized version plug-in, submitting the bug that the server fails to make a custom debugging base
### uni-app plugin
* App Fixed Vue2 project is not parsed accurately using the border-radius style in the nvue page style [Details](https://ask.dcloud.net.cn/question/168877)
* App-Android Fixed Some devices may report `Uncaught SyntaxError: Invalid or unexpected token at __uniappview.html:2` error cause white screen [Details](https://ask.dcloud.net.cn/question/170588)
* Mini Program Fixed Vue2 project compiles with errors when using global variables like JSON.stringify in templates [Details](https://ask.dcloud.net.cn/question/170722)
### App plugin (5+ App & uni-app)
* Android Fixed The input box focus switch may cause the page to display abnormally caused by version 3.8.3 [Details](https://ask.dcloud.net.cn/question/170689)

## 3.8.3.20230523-alpha
### HBuilder
* Optimize the left view of HBuilderX. The drop-down menu in the upper right corner of the top supports switching views of project manager, multi-file character search, debugging, etc.
* Optimize the HBuilderX multi-file character search view, optimize the stop function and UI on the top status bar.
* Fixed the uni-app introduced in 3.8.0. When the project contains the uts authorized version plug-in, submitting the bug that the server fails to make a custom debugging base
### uni-app plugin
* App Platform Fixed the bug that clicked the error after configuring type="checkbox" on the nvue page switch component [Details](https://ask.dcloud.net.cn/question/168894)
* uni-ad manages background page adjustments, adjusts the basic ads of the app, and enhances the classification concept of advertisements [Details](https://uniapp.dcloud.net.cn/uni-ad/release.html)
* App, Web optimize navigationBarBackgroundColor, navigationBarTextStyle default [Details](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
### uniCloud plugin
* Added uni-ai Support azure chatCompletion api [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* Fixed jql Some requests execute slowly in some situation [Details](https://ask.dcloud.net.cn/question/170035)

## 3.8.2.20230511-alpha
### HBuilder
* Fixed the bug that HBuilderX crashes in some cases when searching characters in multiple files.
* Language Server: Fixed the bug that the code prompt of the nvue file introduced by 3.8.0, and the language service crashes
* Language Server: Fixed the bug that the template tag of the Vue file cannot prompt lang
* Language Server: Fixed the bug that the template tag of the Vue file, when the lang attribute is empty, the html tag cannot prompt
* Language Server: Fixed Vue file SCSS @ syntax, in some cases, the bug that the @ symbol replaces the wrong position after the code assistant enters
* Language Server: Fixed Vue file SCSS, in some cases, !default and !global have no prompt Bug
### uniCloud plugin
* Added uni-ai Add text to image api [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#ai-media)
### App plugin (5+ App & uni-app)
* Android Fixed The playground may fail to synchronize files [Details](https://ask.dcloud.net.cn/question/169374)
* Android Fixed The prompt text for permission denied on the Scan Code page does not support internationalization [Details](https://ask.dcloud.net.cn/question/169217)

## 3.8.1.20230428-alpha
### uni-app plugin
* App-Android Fixed The map component in the nvue page is not automatically destroyed in certain scenarios and may cause a black screen [Details](https://ask.dcloud.net.cn/question/168133)
### uniCloud plugin
* Fixed When using the vue3 project to publish to the web, uniCloud.SSEChannel's open method reported an error

## 3.8.0.20230425-alpha
### HBuilder
* Optimize the application icon of HBuilder Alpha version to supplement the α corner mark in the lower right corner.
* Language Server: Added Html file to introduce Vue.js support code Vue code prompt
* Added project manager to add file search reference function (select the file, right-click menu [file search reference])
* Language Server: Added Vue and Html files to support ID and Class lookup references
* Language Server: Added uni-app project component to support finding references
* Language Server: Fixed the code assistant sorting rules, the bug that the first item of typing unic under the uni-app project is not uniCloud
* Language Server: Fixed the bug that the path prompt at the beginning of uni-app/, input completion items in the middle are incorrect
* Language Server: Fixed the uts plug-in, the Android system API part type inheritance error caused the bug of syntax verification error
* Fixed Bug that cannot format files above 1M
* Fixed formatting Format plug-in, when there is an indentation on the first line of the js file, the formatting will cause the indentation to be indented according to the first line as a whole Bug
* Fixed the bug that HBuilderX crashes when switching themes in some cases
* Fixed In some cases, when the project manager is always associated with the editor, opening a file under the sub-project or the parent project will cause the bug that the project manager scrolls incorrectly
* Optimize Alt+Tab to switch tabs, list item icons and project manager icons are consistent.
* Fixed the bug that when the uni-app project runs and downloads the compiler plug-in, in some cases, the console does not prompt to re-run.
### uni-app plugin
* App-iOS Fixed uni.scanCode may cause the application to freeze after scanning the code [Details](https://ask.dcloud.net.cn/question/160090)
### uniCloud
* Added uni-ai response in stream format [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
* Added Server sent event channel between cloudfunction and client [Details](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)
* Updated HBuilderX automatically pulls schemas and schema extension js with the same name in opendb when creating a schema or schema extension js from opendb

## 3.7.13.20230411-alpha
### HBuilder
* Fixed the bug caused by 3.7.13, multi-file character search, under certain circumstances, the bug that HBuilderX crashes during the search process
* Language Server: Fixed function overload prompts occasional crash bug
* Fixed the bug that uts plugin, language service, some types of iOS missing default constructors lead to grammar verification errors.
* Fixed the bug that uts plugin, language service, Incomplete methods of iOS String type lead to grammar verification error.
* Added MacOSX, App project, support to choose custom base to run to iOS Simulator [Details](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)
* Added uni-app to support multiple projects to run to WeChat developer tools at the same time.
* Added uniCloud Aliyun, the front-end web page hosts a custom domain name, and automatically refreshes the CDN after uploading files.
### uni-app plugin
* Added uni.addInterceptor callback added the second parameter params [Details](https://ask.dcloud.net.cn/question/129195)
* App Fixed Vue3 project picker-view component using v-if toggle error [Details](https://ask.dcloud.net.cn/question/166884)
* App-Vue Fixed Vue3 project text component nest text component show abnormality [Details](https://github.com/dcloudio/uni-app/issues/4215)
* Web Updated Cancel coordinate system conversion when using IP positioning [Details](https://github.com/dcloudio/uni-app/issues/4248)
* Web Fixed Vue3 project input component uses v-model when input is out of focus too fast [Details](https://ask.dcloud.net.cn/question/166821)
* Mini Program Fixed Vue2 project compiles invalidly with static directory condition when using high version CopyWebpackPlugin [Details](https://github.com/dcloudio/uni-app/issues/4181)
### uniCloud plugin
* [Important] Added uni-cloud-ai extension, provide AI conversation capabilities [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
* Updated The dynamic enum configured in schema removes the enumeration limit of only 500 entries when validating data
* Added The primaryCollection parameter is added to the subtable read event in the trigger, and the value is the table name of the primary table in this contingency query
### App plugin (5+ App & uni-app)
* Android Fixed The advertisData field of BluetoothDeviceInfo may lose data [Details](https://ask.dcloud.net.cn/question/165119)
* Android Fixed After the app switches languages, the restart may flash the screen [Details](https://ask.dcloud.net.cn/question/166730)
* iOS Fixed Apple in-app payments are unresponsive after plus.runtime.restart

## 3.7.12.20230331-alpha
### HBuilder
* Windows 64-bit system, HBuilderX built-in Node adjusted to 64-bit Node.exe.
* Optimize the multi-file character search from the toolbar to the left view of HBuilderX [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/node-multi-file-search).
* Language Server: Fixed the bug that the prompt ratio of px to upx/rpx is set, and the code assistant prompts that the custom ratio does not take effect
* Language Server: Fixed the bug that 404 is displayed after the URL of the help document in the code assistant is redirected due to the change of the Vue domain name.
* Language Server: Fixed the js file. In some cases, require cannot prompt the bug of other js file paths.
* Language Server: Fixed the uni-app project, in some cases, the project does not exist in the uni_module directory, and the bug that the language service reports an error.
* Fixed the bug that attach fails in some cases of Node debugging.
* Fixed js-beautify formatting plug-in, when the indentation is set to `tab`, the ts file formatting causes the bug that the indentation in the comment is wrong
* Fixed the bug that HBuilderX crashes when you right-click the schema.json file in 3.7.6 to download DB Schema.
* Fixed the bug caused by 3.7.6, some low-version MacOSX operating systems, no iOS mobile phone detected.
* Adjust the uts project, run it to the iOS simulator, the console shields the uts debugging entry, and does not support the uts debugging of the iOS simulator.
* Adjust uts project, uts Android development extension, increase gradle version limit, only support version 7.6.1 and below.
### uni-app plugin
* App, Web Updated Socket connection onClose event information increases Code and Reason attributes
* App Fixed Vue3 project uses pure NVue development to turn to the homepage when the heat load jumps to the homepage [Details](https://ask.dcloud.net.cn/question/164673)
* App Fixed The new language of international configuration is not good [Details](https://ask.dcloud.net.cn/question/165884)
* App Fixed Vue3 project nvue page configuration flex-direction default value invalid [Details](https://ask.dcloud.net.cn/question/165497)
* App-Android Fixed The WebSocket closure with a code value of 1001 that is being listened to by uni.onSocketClose may not trigger the callback
* App-Android Fixed The existence of special characters in nvue pages may cause crashes [Details](https://ask.dcloud.net.cn/question/166447)
* App-Android Fixed The nvue pages may render abnormally when in App floating window mode [Details](https://ask.dcloud.net.cn/question/156014)
* App-Android Fiexd Special characters in the text component of nvue pages will not be displayed [Details](https://ask.dcloud.net.cn/question/166014)
* Web Fixed onError invalid in the Vue3 project script setup [Details](https://ask.dcloud.net.cn/question/164798)
* Web Fixed Gaode navigation destination name display exception [Details](https://ask.dcloud.net.cn/question/165669)
* Web Fixed Gaode no locate permission did not trigger fail callback [Details](https://ask.dcloud.net.cn/question/166298)
* Web Fixed Gaode map callout layout exception [Details](https://github.com/dcloudio/uni-app/issues/4230)
* Mini Program Updated Vue2 project adds slotMultipleInstance configuration to support scoped slot rendering of multiple instances [Details](https://github.com/dcloudio/uni-app/issues/3503)
* Mini Program Updated Vue2 project v-for supports index parameter when traversing objects [Details](https://ask.dcloud.net.cn/question/163685)
* Mini Program Fixed Vue2 project event expressions containing multiple function statements compiled invalid [Details](https://ask.dcloud.net.cn/question/147342)
* Mini Program Fixed Vue3 project page style file is missing after compilation [Details](https://ask.dcloud.net.cn/question/163867)
* Baidu Mini Program, Alipay Mini Program Added Support for running to specified pages
* Weixin Mini Program Fixed Support for enterprise applets onNFCReadMessage life cycle [Details](https://ask.dcloud.net.cn/question/166024)
* Weixin Mini Program Fixed Vue3 project mixed subcontracting part of the case of interface calls reported error [Details](https://github.com/dcloudio/uni-app/issues/4175)
* Alipay Mini Program Fixed The component styleIsolation is configured to apply-shared by default.
* Alipay Mini Program Fixed Vue3 project page - meta component foot-font-size attribute is invalid
* ByteDance Mini Program Fixed Fix aweme-data component not rendering properly
### App plugin (5+ App & uni-app)
* Android Fixed In certain situations, the software keyboard may pop up and immediately collapse [Details](https://ask.dcloud.net.cn/question/161957)
* Android Fixed plus.navigator.updateSplashscreen may not take effect [Details](https://ask.dcloud.net.cn/question/164023)
* iOS Fixed Entering a video page that contains video playback controls interrupts music playback [Details](https://ask.dcloud.net.cn/question/165329)
* iOS Fixed The navigation bar titleNView setting splitLine style may not display correctly [Details](https://ask.dcloud.net.cn/question/164906)

## 3.7.7.20230316-alpha
### HBuilder
* Fixed the ts file exported by HBuilderX 3.7.6, select a specific area code for formatting, and the bug that the formatting operation fails
* Fixed After .editconfig is enabled, if the last line of the Vue file does not wrap, the bug that the file content will be wrong when saving
* Fixed the bug that the language service ts file in some cases, the ts grammar check does not take effect
### uni-app plugin
* Weixin Mini Program Fixed Some attributes of components such as share-element are invalid. [Details](https://ask.dcloud.net.cn/question/163926)
* Alipay Mini Program Fixed Vue3 project page-meta component page-style attribute is invalid. [Details](https://ask.dcloud.net.cn/question/163563)
* ByteDance Mini Program Fixed uni.chooseImage does not support sizeType configuration. [Details](https://ask.dcloud.net.cn/question/163986)
* App-iOS Fixed The nvue page component may occasionally crash when setting the border style [Details](https://ask.dcloud.net.cn/question/164236)
* App-iOS Fixed The nvue page loading component event does not fire properly [Details](https://ask.dcloud.net.cn/question/163143)
### uniCloud plugin
* Added The uni-cloud-s2s public module is added to solve the problem of mutual trust between the uniCloud and the traditional server [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)
* Fixed uniCloud HBuilderX plugin In some cases, modifying a JS file does not take effect in real time
* Fixed uniCloud HBuilderX plugin In some cases, modifying dependencies of cloudfunction causes package.json content error [Details](https://ask.dcloud.net.cn/question/165273)
* Updated Secure Network The WeChat Mini Program allows secure network handshake without calling the uni-id-co method [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#mp-weixin-without-uni-id-pages)
* Updated uniCloud HBuilderX plugin When you call a local cloudfunction, each project fixes 4 cloudfunction instances to a minimum of 2 instances and a maximum of 8 instances
* Updated uniCloud HBuilderX plugin Call local cloudfunction stop waiting for instances to be idle when all instances are occupied, and directly reject the call request
* Updated Aliyun The maximum timeout for client connection to cloudfunction is adjusted from 20 seconds to 40 seconds
* Updated Aliyun The QPS limit of http trigger through default domain is adjusted from 100 to 1000
* Updated Aliyun The limit for CDN refreshes for front-end web hosting has been adjusted from 3/h to 10/h
* Fixed Aliyun The limit of collection number cannot be refreshed in real time after collection is removed
* Fixed Aliyun Some transaction errors are not clearly reported
### App plugin (5+ App & uni-app)
* Android Fixed The readAsDataURL of plus.io.FileReader returns base64 characters containing line breaks [Details](https://ask.dcloud.net.cn/question/164955)
* iOS Fixed The video controls setting to false does not hide the title bar when displayed in full screen [Details](https://ask.dcloud.net.cn/question/160712)

## 3.7.6.20230227-alpha
### HBuilder
* Added a built-in formatting plug-in, which supports the use of the .jsbeautifyrc configuration file under the project [Details](https://hx.dcloud.net.cn/Tutorial/extension/js-beautify)
* Fixed the bug that the built-in formatting plug-in does not support formatting the ts code in the Vue file.
* Language Server: Fixed Vue file `this.xxx = ...`, xxx cannot go to the defined bug.
* Language Server: Fixed the uni-app cli ts project, after using pnpm to install the module, opening the vue file under the project causes the language service to crash.
* Optimize settings, language service configuration, enable code assistant, after modifying configuration items, it will take effect without restarting HBuilderX
* Fixed Enable .editorconfig support, when configuring `insert_final_newline`, accidentally touch the bug of the code assistant when saving
* Fixed MacOSX, run the App to iOS, the device selection window, in some cases, the bug that the iOS device is repeatedly displayed
* Added uni-app uts plug-in to run to iOS to support debugging (requires MacOSX) [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* Fixed the bug caused by 3.7.1, uni-app Vue3, run to the iOS simulator, after the modified file is saved, the iOS simulator will not automatically refresh the bug
## uni-app plugin
* Web、App Fixed NodesRef cannot get properties [Details](https://ask.dcloud.net.cn/question/163535)
* Web Fixed The markertap event will be triggered when the Gaode map is zoomed [Details](https://ask.dcloud.net.cn/question/162763)
* App Updated The video component supports the isLive property
* App Fixed uni.uploadFile interface timeout configuration is invalid [Details](https://ask.dcloud.net.cn/question/163747)
* App Fixed onPageScroll and onReachBottom are invalid when the Vue2 project uses the composition API [Details](https://ask.dcloud.net.cn/question/162503)
* App-Android Fixed Using Secure Network may cause a crash on some devices
* Mini Program Fixed In some cases of Vue2 projects, v-for nested v-model is invalid after compilation
* JingDong Mini Program Added Support compiling Vue3 projects [Details](https://github.com/dcloudio/uni-app/pull/4023)
* Weixin Mini Program Added Support Skyline gesture [Details](https://ask.dcloud.net.cn/question/162700)
### uniCloud plugin
* Added uni facial recognition verify. All-in-one financial-grade security in the cloud [Details](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* [Important] uni-id-pages adds real-name authentication function [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#frv)
* [Important] Added uni-frv-external cloud-integrated template for non-uniCloud business to use the real-name authentication function [Details](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html#uni-frv-external)
* Updated When the client SDK is developing and debugging, the time of connecting to the local network is adjusted from the connection when the application is started to the connection when the local SCF is accessed
* Fixed The client sdk uniCloud.init and uniCloud.database methods still use the public beta endpoint by default when associating with the official version of aliyun space
### App plugin (5+ App & uni-app)
* Android Fixed tabbar page switching may be unexpected in dark mode [Details](https://ask.dcloud.net.cn/question/163416)
* Android Fixed In Xiaomi Android 13 devices, selecting pictures from the album may be abnormal caused by version 3.7.1 [Details](https://ask.dcloud.net.cn/question/163903)

## 3.7.2.20230217-alpha
### HBuilder
* Fixed the manifest.json interface, in some cases, check the check box, HBuilderX crashes the bug
* Fixed the bug that the uni-app uts project runs to the mobile phone. In some cases, after re-running the project, the console debug button disappears.
### uni-app plugin
* App-Android Fixed uni.getSystemInfo may get the same deviedId value on some devices [Details](https://ask.dcloud.net.cn/question/163174)

## 3.7.1.20230210-alpha
### HBuilder
* Add code block surround, wrap code blocks such as if outside the selection area. (menu Edit->Surround->Code block surround, shortcut key win: `Ctrl+Alt+T`, mac: `Command+Alt+T`)[Details](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=surround)
* Added project manager, font size adjustment (menu settings-> Commonly Used). [Details](https://hx.dcloud.net.cn/Tutorial/setting?id=project-explorer-font-size)
* Fixed the bug that multiple lines of content will be copied when copying or cutting when multiple cursors are on the same line.
* Language Server: Fixed Vue3-ts project, the bug that the image src attribute reports an error [Details](https://ask.dcloud.net.cn/question/162064)
* Language Server: Fixed uni-app main.js, the Vue variable or method defined by Vue.prototype.xxx, in the vue file, `this.` cannot prompt Bug. [Details](https://ask.dcloud.net.cn/question/147190)
* Fixed the bug that it may not be possible to go to the definition when it takes a long time to go to the definition.
* Fixed the setting interface and manifest.json interface, clicking the blank area on the right side of the text on the check box control will also cause the bug to be selected/cancelled.
* Fixed the bug caused by 3.7.0, 5+App and Wap2App projects, in some cases, the synchronization file fails.
* Fixed the bug that when uni-app runs to Chrome, it opens a new Chrome instance every time it runs.
* Added uni-app manifest.json, App module configuration, added real person authentication [Details](https://uniapp.dcloud.net.cn/uniCloud/frv.html)
### uni-app plugin
* App-Android Fixed The uni.sendSocketMessage introduced by the 3.6.16 upgrade fastjson cannot send ArrayBuffer data [Details](https://ask.dcloud.net.cn/question/161872)
* App-Android Fixed The height of the cell component of the nvue page exceeds the height of the list itself, and the loadmore event is frequently fired [Details](https://ask.dcloud.net.cn/question/161972)
* App-Android Fixed After the placeholder attribute of the input component of the nvue page is changed, the placeholder-style and placeholder-class properties are invalidated [Details](https://ask.dcloud.net.cn/question/161678)
* App-Android Fixed The bubble displays abnormally when the marker of the nvue page map component sets the anchor [Details](https://ask.dcloud.net.cn/question/161180)
* App-Android Fixed The cover-view is not displayed when the nvue page map component updates the marker [Details](https://ask.dcloud.net.cn/question/161998)
### uniCloud plugin
* Fixed Using array which contains negative value in parameter of where method report an error [Details](https://ask.dcloud.net.cn/question/161852)
* Fixed Calling cloud object method without return value report an error [Details](https://ask.dcloud.net.cn/question/161852)
* Updated Deprecate subCollection property of JQL triggr parameter, please use secondaryCollection instead [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* Added New JQL trigger timing "beforeReadAsSecondaryCollection" and "afterReadAsSecondaryCollection" [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-timing)
* Aliyun Fixed No error message was returned when deleting file encounter error
* HBuilderX Plugin Fixed Using console.warn output message to console panel in cloud functions was not colored properly
### App plugin (5+ App & uni-app)
* Android Update PayPal SDK to version 0.8.8 to fix the bug that payment cannot be made normally [Details](https://ask.dcloud.net.cn/question/154976)
* Android Fixed plus.downloader.clear cannot clear persistent storage downloads [Details](https://ask.dcloud.net.cn/question/162099)
* iOS Fixed AudioPlayer seekTo does not support milliseconds to jump to the specified position

## 3.7.0.20230118-alpha
### HBuilder
* Fixed the bug that HBuilderX cannot be started due to abnormal editor theme configuration in some cases.
* Fixed the bug that blank characters cannot be highlighted in the Markdown code area.
* Fixed the bug that Markdown copied table data from WPS and pasted it as a Markdown table syntax conversion error.
* Fixed the bug that the editor will not automatically scroll to the original cursor position when you press the esc key to find symbol in Editor.
* Language Server: Fixed the Vue file, when there are only script and style nodes, but no template node, the document structure diagram shows a blank bug.
* uniCloud: Fixed the bug that the upload and run operation fails when there are Chinese files in the cloud function directory of uniCloud cloud function.
* Mobile App Playground: MacOSX run the project to the real iOS device, and automatically start the App (MacOSX needs to install Xcode that matches the iOS mobile phone system) [Details](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#ios-app-automatically-open)
* Mobile App Playground: Added Windows operating system, iOS standard base, supports signing with Apple certificate, after signing, it can run standard base to iOS real device [Details](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* Mobile App Playground: Added Windows device selection window, custom dock and standard dock support switching with & shortcut keys.
* uni-app: Added WeChat Build, automatically uploaded to the WeChat platform, and supports the configuration of WeChat ci robot numbers. [Details](https://uniapp.dcloud.net.cn/tutorial/build/publish-mp-weixin-cli.html)
* uni-app: uts plug-in run to Android support debug debugging [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
### uni-app plugin
* [Important] Added uts components. Native extensions can be developed using the uts language [Details](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
* Added uni-vue-devtools plugin. Easy to view, modify data and review custom components [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
* Web, App Added The page-meta component supports the scroll-top property
* Web Fixed The Vue3 project scroll-view component slot introduced in version 3.6.16 renders abnormally in some cases [Details](https://ask.dcloud.net.cn/question/149557)
* Web Fixed The show-progress attribute of the video component does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3908)
* Web Fixed When the input component type=digit, the placeholder is not displayed after clearing the input box [Details](https://ask.dcloud.net.cn/question/160726)
* Web Fixed Vue3 project onNavigationBarSearchInputConfirmed not working [Details](https://ask.dcloud.net.cn/question/154740)
* Web Fixed Vue3 project switching tabbar page does not trigger onTabItemTap
* App Added [ext component] animation-view component [Details](https://uniapp.dcloud.net.cn/component/animation-view.html)
* App Fixed When the native navigation bar type in the Vue3 project is transparent, the color of the custom buttons does not change when sliding to the top on the navigation bar [Details](https://ask.dcloud.net.cn/question/154074)
* Weixin Mini Program Added pages.json supports configuring the entryPagePath property [Details](https://ask.dcloud.net.cn/question/126216)
* Weixin Mini Program Fixed An error is reported when running the enterprise version of WeChat introduced by version 3.6.16
* Weixin Mini Program Fixed Version 3.6.16 introduced Vue2 project partially in the scope slot access length property reported an error
* Weixin Mini Program Fixed Incorrect return value when using uni.env in Vue2 project [Details](https://ask.dcloud.net.cn/question/159865)
* Alipay Mini Program Fixed The DingTalk mini program uses uni.saveImageToPhotosAlbum to report an error [Details](https://ask.dcloud.net.cn/question/159183)
* Alipay Mini Program Fixed The platform property returned by uni.getSystemInfo was incorrect in the simulator
* QQ Mini Program Fixed The ended event of the video component of the Vue3 project does not trigger on the real machine [Details](https://ask.dcloud.net.cn/question/155602)
### uniCloud plugin
* Added Manage dependencies of schema extension [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* Added JQL Trigger method add new parameters [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
### App plugin (5+ App & uni-app)
* Android Fixed The system navigation bar button color is the same as the background color caused by version 3.6.17 [Details](https://ask.dcloud.net.cn/question/161501)
* Android Fixed Picture selection on Android 13 devices prompts no permission [Details](https://ask.dcloud.net.cn/question/160879)
* Android Fixed plus.io.FileReader's readAsDataURL reads data without splitting by slice position [Details](https://ask.dcloud.net.cn/question/160467)
* Android Fixed The VideoPlayer fires the timeupdate event when the video is buffered

## 3.6.17.20230111-alpha
### uni-app plugin
* App Fixed 3.6.16 The Vue3 project in the vue page in the inner style of the rpx rendering error [Details](https://ask.dcloud.net.cn/question/161256)
* Weixin Mini Program Fixed 3.6.16 The VUE2 project part of the template uses multiple logical expressions in the template to run an error [Details](https://ask.dcloud.net.cn/question/161190)
### App plugin (5+ App & uni-app)
* Android Fixed After using the record module, the wgt upgrade prompt that the record module is not configured caused by version 3.6.11 [Details](https://ask.dcloud.net.cn/question/161167)
* Android Fixed The immersive status bar fails on some devices caused by version 3.6.16 [Details](https://ask.dcloud.net.cn/question/161277)

## 3.6.16.20230109-alpha
### HBuilder
* Language Server: Fixed the bug that the uni-app Vue file cannot be prompted for conditional compilation in the script tag [Details](https://ask.dcloud.net.cn/question/159783)
* Fixed HBuilderX green soft theme, select the terminal text, the bug that the selected color is not displayed.
* Optimize one-click sharing of Markdown, css and js resources required by the webpage, and upload them to uniCloud web page hosting.
* Fixed the bug that uni-app Vue3 runs to the browser, the browser Devtools console, and the log path shows errors.
* Fixed the bug that the uni-app runs to the iOS simulator, and the uni debugging is turned on. After opening, the window shows a blank bug
* Fixed the bug that in some cases, the .hbuilderx/launch.json file in the project root directory repeatedly writes data and reads and writes frequently, causing the editor to freeze
### uni-app plugin
* App-Vue, Web Updated The input component supports the inputmode property [Details](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
* App Fixed The Vue3 project nvue page webview component onPostMessage event is invalid [Details](https://ask.dcloud.net.cn/question/158925)
* App Fixed The Vue3 project image component uses base64 to display exceptions [Details](https://ask.dcloud.net.cn/question/158368)
* App-Android Fixed The live-pusher component of the nvue page refuses the camera permission and then manually opens it. After returning to the application, the camera preview may not be called [Details](https://ask.dcloud.net.cn/question/158518)
* App-iOS Fixed The ad-content-page component of the nvue page cannot be re-pulled after failing to pull the advertisement configuration
* App-iOS Fixed After the nvue page map component uses a custom map style, switching satellite images is invalid [Details](https://ask.dcloud.net.cn/question/159316)
* App-iOS Fixed Start the application with a white screen after using the simulator to enable debugging [Details](https://ask.dcloud.net.cn/question/160363)
* Web Fixed, Mini Program Fixed Unstable Bug in uni-push2.0 [Details](https://ask.dcloud.net.cn/question/159690?item_id=224222&rf=false)
* Web Fixed The input component enters a negative number to bring out the last result [Details](https://ask.dcloud.net.cn/question/159447)
* Web Fixed Using uni.navigateTo eventChannel in Vue3 project will only be called once [Details](https://ask.dcloud.net.cn/question/155922)
* Web Fixed Vue3 project scroll-view component scrolling frequently triggers view updates [Details](https://ask.dcloud.net.cn/question/149557)
* Web Fixed The Vue3 project uses the picker component end attribute to read errors [Details](https://github.com/dcloudio/uni-app/issues/4075)
* Web Fixed uni.setTabBarItem causes tab switching life cycle exception [Details](https://ask.dcloud.net.cn/question/160739)
* Weixin Mini Program Fixed Array length changes cannot be observed in the Vue2 project template [Details](https://github.com/dcloudio/uni-app/issues/1827)
* Alipay Mini Program Fixed Vue3 project use inline styles running error report [Details](https://ask.dcloud.net.cn/question/159362)
### uniCloud plugin
* JQL Fixed Trigger report an error when using setUser without permission parameter
* JQL Fixed Add method report an error when using null in child object
* JQL Added Add triggerContext parameter to share variable between before trigger and after trigger [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
* Aliyun Updated Single file size limit was changed from 100MB to 5GB
### App plugin (5+ App & uni-app)
* Android Fixed Selecting files from system album may crash on some Harmony devices caused by version 3.6.12 [Details](https://ask.dcloud.net.cn/question/159556)
* Android Fixed Setting the targetSdkVersion value greater than or equal to 30 causes the app to crash when using AMap [Details](https://ask.dcloud.net.cn/question/159801)
* Android Fixed Multiple calls to createBLEConnection to connect to a Bluetooth device, failure to connect the device may also trigger a success callback [Details](https://ask.dcloud.net.cn/question/113070)
* iOS Fixed The iconWidth/iconHeight property is disabled when plus.nativeUI.toast sets style to inline [Details](https://ask.dcloud.net.cn/question/160192)
* iOS Fixed startBluetoothDevicesDiscovery Search for nearby Bluetooth devices returns data without an advertisData field [Details](https://ask.dcloud.net.cn/question/160178)

## 3.6.14.20221216-alpha
### HBuilder
* Fixed the bug caused by HBuilderX 3.6.12 that in some cases, the cursor position is wrong after the editor is pressed.
* Fixed the bug caused by HBuilderX 3.6.9 that in some cases, where the project root generated a 1.text test file.
* Fixed the bug that the html file exported by HBuilderX 3.6.7 runs to Chrome and starts a new Chrome instance.
* Fixed the bug that the uni-app web platform starts or stops browser Debugging, and in some cases, the console button is repeatedly displayed
### uni-app plugin
* App-Android Fixed After using the canvas module, the wgt upgrade prompt that the canvas module is not configured [Details](https://ask.dcloud.net.cn/question/159283)
* Mini Program Fixed Version 3.6.11 introduces an error after using async/await to run [Details](https://ask.dcloud.net.cn/question/159413)
### uniCloud plugin
* JQL Added `userInfo` and `result` to trigger parameter [userInfo](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info)、[result](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#result)
* JQL Added `isEqualToJql` method to compare jql command [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to-jql)
* JQL Updated Ignore null value of complex type (file, array, object) field
* HBuilderX Plugin Fixed Local cloud function server failed to start in some old operating systems [Details](https://ask.dcloud.net.cn/question/159343)
* HBuilderX Plugin Fixed the bug caused by HBuilderX 3.6.12, the debugging and running of cloud functions, and the Bug that cannot be debugged by Debug breakpoint.
* HBuilderX Plugin Fixed Aliyun business version cloud storage file is not visible in uniCloud web which was upload by local cloud function [Details](https://ask.dcloud.net.cn/question/159109)

## 3.6.12.20221207-alpha
* Fixed the bug that the uts file cannot display the outline view
* Fixed uts file, the bug that the right-click menu rearranges the code format is invalid
* Mobile App Playground: Optimize the device selection window, standard base and custom base, display base information
* Mobile App Playground: Optimize the menu [Run - Mobile App Playground], remove the menu [Select Playground]
* [uniCloud plugin]
  + HBuilderX Plugin Fixed The called function return noting causes error when call function by function

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
* [uni-app plugin]
  + App Updated uts plugin supports compile cache
  + App Updated Vue2 project component.is support ComponentDefinition / ComponentConstructor [Details](https://ask.dcloud.net.cn/question/140044)
  + App Fixed The position calculation of nvue page slider component is inaccurate in some cases [Details](https://ask.dcloud.net.cn/question/152714)
  + Web Fixed The Vue3 project canvas component listens to the event and reports an error [Details](https://ask.dcloud.net.cn/question/158252)
  + Mini Program Updated The vue3 project uses import to import resources in non-static directories. After generation, the name is added to the hash by default. [Details](https://github.com/dcloudio/uni-app/issues/4011)
  + Weixin Mini Program Fixed Vue3 project v-for loop events may be messed up [Details](https://github.com/dcloudio/uni-app/issues/4015)
  + Weixin Mini Program Fixed Vue3 project wxs hot update fails [Details](https://ask.dcloud.net.cn/question/158252)
  + uni-im Full support for Vue3 [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
* [uniCloud plugin]
  + JQL Added Trigger is supported, which can be used to excute some logic before or after database operation. Using jql syntax in trigger is supported. [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + JQL Fixed Using negative value as literal in where or permission cause error [Details](https://ask.dcloud.net.cn/question/157993)
  + JQL Added Using jql syntax in schema.ext is supported [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#using-jql-syntax)
  + HBuilderX Plugin Fixed Action not found when call local clientDB or jql extension [Details](https://ask.dcloud.net.cn/question/157997)
  + uniIdRouter Fixed Router api error in vue3 project [Details](https://ask.dcloud.net.cn/question/158015)
  + uni-id-co Added password setting API [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co Added external system joint login API, which can create an account corresponding to uni-id for the external system, so that the account can use the system and functions that depend on uniId [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + uni-id-co Added authentication signature verification when HTTP requests [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co Added error code `uni-id-account-not-exists-in-current-app` when the matched user cannot login in the current app  [Error Code Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#errcode)
  + uni-id-co Fixed error that the user did not set the avatar when logging in on WeChat
  + uni-id-co Fixed Unable to get uniIdToken from clientInfo
  + uni-id-pages Added Jump to set password page configuration item `setPasswordAfterLogin` after login [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd-after-login)
  + uni-id-pages Added setting password page
  + uni-id-pages Optimize toast error prompt time to 3 seconds
  + uni-admin Optimize schema file naming convention of the bulk SMS function, change `batch-sms-template` `batch-sms-task` `batch-sms-result` to `opendb-sms-temlate` `opendb-sms-task` `opendb-sms-log` conforms to the opendb specification.
* [App plugin (5+ App & uni-app)]
  + Added Record, Camera, Barcode, Orientation modules [Details](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
  + iOS Fixed Third-party login authorization does not trigger callback caused by version 3.6.10 [Details](https://ask.dcloud.net.cn/question/158380)

## 3.6.10.20221121-alpha
* Fixed the bug that HBuilderX 3.6.9 cannot compile and run normally when the uni-app CLI project has uts plug-in
* Fixed the uni-app uts plugin language service `import x from '@/uni_modules/'` uts plugin path error bug
* Mobile App Playground: Fixed the bug that HBuilderX crashes when you click the Run button in some cases in the device selection window
* Optimize uts plug-in iOS platform local compilation and real machine running speed
* [uni-app plugin]
  + App Fixed Vue2 project editing uts plugin code hot update invalid
  + uni-im supports projects that are not uniCloud or based on uni-id-pages [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + App Fixed Vue2 project nvue page does not support the uts plugin [Details](https://ask.dcloud.net.cn/question/157435)
  + App Fixed Setting the statusBar color in darkmode is not normal
  + App Fixed nvue homepage setting navigationBarTextStyle is invalid [Details](https://ask.dcloud.net.cn/question/150485)
  + App Fixed that there is no text prompt for loading when uni.startSoterAuthentication (biometric identification) is wrong [Details](https://ask.dcloud.net.cn/question/157353)
  + App-Android Fixed uni.request does not support head requests [Details](https://ask.dcloud.net.cn/question/136717)
  + App-Android Fixed Getting focus cursor position may be incorrect when there are multiple input components in the page
  + App-Android Fiexed The nvue live-pusher component cannot be previewed on Android11+ devices using mobile networks [Details](https://ask.dcloud.net.cn/question/156532)
  + Web Fixed Vue3 project --window-top calculation error [Details](https://ask.dcloud.net.cn/question/157164)
  + Web Fixed Vue3 project configuration global loading and error components are invalid [Details](https://ask.dcloud.net.cn/question/157122)
  + Alipay Mini Program Fixed page-meta component root-font-size property invalid [Details](https://ask.dcloud.net.cn/question/157168)
* [uniCloud plugin]
  + [Important] Aliyun business version is avaliable [Details](https://ask.dcloud.net.cn/article/40144)
  + JQL Added "geoNear" stage is supported [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#geo-near)
  + JQL Fixed Some legal jql requests falsely report permission errors
* [App plugin (5+ App & uni-app)]
  + Android Fixed Listen for the system dark mode theme switching event may be invalid [Details](https://ask.dcloud.net.cn/question/157497)
  + Android Fixed Cloud package using your owned certificates may report an 'Invalid keystore format' error [Details](https://ask.dcloud.net.cn/question/157057)
  + Android Fixed Cloud package fails when the package property value of AndroidManifest.xml is the same as the package name
  + iOS Fixed plus.screen.lockOrientation/plus.screen.unlockOrientation invalid on iOS16 devices [Details](https://ask.dcloud.net.cn/question/155357)
  + iOS Fixed Recording does not work when playing audio [Details](https://ask.dcloud.net.cn/question/157408)
  + iOS Fixed Setting DarkMode to follow the system theme may not work

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
* [uni-app plugin]
  + App, Web Add Support DarkMode [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
  + App, Web Fixed Radio component disabled state style exception
  + App Add nvue page MapContext supports setLocMarkerIcon method  [Details](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
  + App Fixed When Vue2 project uses composite API, onReady declaration cycle template ref is not bound
  + App Fixed Vue3 project template ref will be proxied
  + App Fixed Vue3 project setting the background color of the navigation bar to rgba is invalid [Details](https://ask.dcloud.net.cn/question/135111)
  + App Fixed Vue3 project root node height: 100% is invalid [Details](https://ask.dcloud.net.cn/question/156564)
  + App-iOS Fixed Vue3 project recording playback is invalid [Details](https://ask.dcloud.net.cn/question/155741)
  + Weixin Mini Program Fixed The Vue3 project defines global constants for compilation injection in vite.config.js, resulting in errors for clients using uniCloud introduced by version 3.6.8
  + Alipay Mini Program Fixed uni.showLoading prompts that the mask parameter is invalid [Details](https://ask.dcloud.net.cn/question/156944)
  + Alipay Mini Program Fixed Vue3 project eventChannel communication failed [Details](https://github.com/dcloudio/uni-app/issues/3945)
  + ByteDance Mini Program Updated component2 is enabled by default [Details](https://ask.dcloud.net.cn/question/156550)
* [uniCloud plugin]
  + [Important] Added uni-im cloud integrated, full platform, free, open source instant messaging system [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + JQL Fixed Using add aggregate operator report an error [Details](https://ask.dcloud.net.cn/question/156261)
  + JQL Fixed Using some reserved js keywords in where or field report an error
  + JQL Fixed When querying a joined table with getTemp, an error bug is reported if the associated field of the main table is of array type in the schema but the actual data does not have this field
  + Cloud Object Added Call cloud object with url support mulit segment path [Details](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co-url)
  + HBuilderX Plugin Fixed The breakpoint entered the nodejs built-in module introduced by version 3.6.7
  + Secure Network Upgrade Uniform error code specification [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + uni-id-co Upgrade Using hmac-sha256 as password hash method [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id-co Added Support custom password hash/encrypt method [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id-co Added Invoke uni-id-co using HTTP request [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
* [App plugin (5+ App & uni-app)]
  + Added Stripe supports setting up billing information [Details](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
  + iOS Fixed TitleNView setting the default navigation bar color can cause inconsistencies with the status bar color
  + iOS Fixed setUIStyle setting dark mode may not work

## 3.6.8.20221027-alpha
* Mobile App Playground: Fixed, console, click on Object type log, after the editor is opened, the file content is not formatted bug
* [uni-app plugin]
  + Added Vue2 project Support for the use of composite APIs [Details](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)
  + Fixed Some objects inaccessible after using TypeScript in the Vue3 project derived from version 3.6.7 [Details](https://github.com/dcloudio/uni-app/issues/3930)
  + App, Web Added Location updates event [Details](https://uniapp.dcloud.net.cn/api/location/location-change.html)
  + App Updated Vue3 project Set minUserAgentVersion to 49 [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App Fixed The nvue page global style of the Vue3 project is invalid from version 3.6.7 [Details](https://ask.dcloud.net.cn/question/155639)
  + App Fixed Vue2 project Event exception caused by remove page root node [Details](https://ask.dcloud.net.cn/question/155057)
  + App Fixed Vue2 project Updating data when the list does not use index as the key results in an event exception [Details](https://ask.dcloud.net.cn/question/155238)
  + App-Android Fixed uni.getStorageSync may report a 'SyntaxError' error in some cases [Details](https://ask.dcloud.net.cn/question/154284)
  + App-iOS Fixed The nvue page occasionally crashes when turning off or on the pull-down refresh on iOS16 devices
  + Web Fixed Vue2 project Using the page selector in CSS media queries does not take effect
  + Weixin Mini Program Added uni-AD rewarded video add secured callback [Details](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + Alipay Mini Program Added Supports monitoring keyboard height changes using uni.onKeyboardHeightChange [Details](https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange)
  + Alipay Mini Program Fixed Events in the Mini Program component are triggered earlier and cannot be listened to in the Vue component
* [uniCloud plugin]
  + Added Secure Network, Added client verification to check client authenticity [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + Added HBuilderX Plugin, Add [OpenDB Check for Updates] to the right-click menu of schema file which starts with 'uni-'
  + Added `uni-clear-temp-data` expired data and temporary file cleaning plugin [Details](https://ext.dcloud.net.cn/plugin?id=9826)
  + Fixed HBuilderX Plugin, Local cloudfuntion calls the redis interface report an error when transferring large data [Details](https://ask.dcloud.net.cn/question/155804)
  + Fixed uniIdRouter, Fix bug with incorrect uniIdRedirectUrl parameter when jumping using relative paths [Details](https://ask.dcloud.net.cn/question/155904)
  + uni-id-co Upgrade password encryption algorithm, support hmac-sha256 encryption [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id-co Added Developers can customize password encryption rules [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id-co Added support for migrating other system users to uni-id [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#move-users-to-uni-id)
  + uni-id-co Support http requests [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
* [App plugin (5+ App & uni-app)]
  + Android Fixed chooseVideo Using the camera to capture video may fail on Android 10 and above devices [Details](https://ask.dcloud.net.cn/question/155877)
  + iOS Fixed When sharing to WeChat favorites, jump to the moments [Details](https://ask.dcloud.net.cn/question/155362)

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
* [uni-app plugin]
  + [Important] Added uts iOS plugin [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + [Important] Added `uni ext api`. Dipped the unusual API to the uni_modules plugin, but still use the uni. [Details](https://uniapp.dcloud.net.cn/api/extapi.html)
  + [Important] App-Android Fix the bug that the deviceId property of getSystemInfo occasionally fails to obtain and multiple devices are repeatedly obtained (note the backward compatibility problem caused by this modification) [Details](https://uniapp.dcloud.net.cn/api/system/info.html)
  + Vue3 project vite dependencies upgrade to the latest 3.1.8
  + App, Web Added Support uni.getBatteryInfo [Details](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
  + App, Web Fixed Picker component date type cannot be used by the default year range [Details](https://ask.dcloud.net.cn/question/131332)
  + App, Web Fixed that the decimal point cannot be input on the numeric keyboard in iOS 16 [Details](https://ask.dcloud.net.cn/question/154584)
  + App, Web Fixed Editor component insertImage triggers input event does not have alt attributes [Details](https://ask.dcloud.net.cn/question/155163)
  + App, Web Fixed Vue3 project Editor component reloaded can not get EditorContext [Details](https://ask.dcloud.net.cn/question/154702)
  + App Added nvue page picker-view component adds mask-top-style, mask-bottom-style attributes [Details](https://uniapp.dcloud.net.cn/component/picker-view.html)
  + App Updated Video component supports the title attribute [Details](https://uniapp.dcloud.net.cn/component/video.html)
  + App Fixed hover-class attribute does not support multiple class [Details](https://ask.dcloud.net.cn/question/152506)
  + App Fixed Vue3 project ust plug-in export default class does not take effect [Details](https://ask.dcloud.net.cn/question/154164)
  + App Fixed Vue3 project v-for may rendering failure [Details](https://ask.dcloud.net.cn/question/154836)
  + App Fixed Vue3 project tabbar.broderStyle custom color value invalid [Details](https://ask.dcloud.net.cn/question/150718)
  + App Fixed Vue3 project nvue page switch component disabled attribute is invalid [Details](https://ask.dcloud.net.cn/question/154577)
  + App-Android Fixed in version 3.5.5 that caused the input component to automatically get the focus may fail [Details](https://ask.dcloud.net.cn/question/153481)
  + App-iOS Fixed nvue swiper component uses rpx may not slide properly to switch on some devices [Details](https://ask.dcloud.net.cn/question/149260)
  + Web Updated uni.preViewImage adds switching and closing buttons on the PC
  + Web Fixed Tabbar shows the duplicate Badge in some cases [Details](https://ask.dcloud.net.cn/question/153336)
  + Web Fixed uni.openLocation navigation does not automatically obtain the current position [Details](https://ask.dcloud.net.cn/question/155066)
  + Web Fixed Vue3 project titlenView's selection is not displayed when select is true [Details](https://ask.dcloud.net.cn/question/153179)
  + Web Fixed Vue3 project enters tabbar repeatedly trigger onLoad event [Details](https://ask.dcloud.net.cn/question/154066)
  + Web Fixed v-bind in the Vue3 project CSS does not take effect with rpx [Details](https://github.com/dcloudio/uni-app/issues/3884)
  + Mini Program Fixed When changing the data, setdata calls abnormalities [Details](https://github.com/dcloudio/uni-app/issues/3787)
  + Mini Program Fixed v-bind in the Vue3 project CSS does not take effect in the data in non-setup [Details](https://github.com/dcloudio/uni-app/issues/3887)
  + Mini Program Fixed Vue3 project action domain slot nesting may render failed when used [Details](https://github.com/dcloudio/uni-app/issues/3886)
  + Mini Program Fixed Vue3 project the static data rendering of the scoped slot is failed [Details](https://ask.dcloud.net.cn/question/153150)
  + Mini Program Fixed Vue3 project static data rendering errors in the role of the field slot [Details](https://ask.dcloud.net.cn/question/155008)
  + Mini Program Fixed The Vue3 project is issued to a mixed subcontract, and the page return may be reported to an error [Details](https://github.com/dcloudio/uni-app/issues/3923)
  + Weixin Mini Program Fixed drag-related events of the Vue3 project in scroll-view do not trigger [Details](https://github.com/dcloudio/uni-app/issues/3921)
  + Weixin Mini Program Fixed uni://form-field invalid in Vue3 project [Details](https://ask.dcloud.net.cn/question/155373)
  + Baidu Mini Program Fixed uni.createIntersectionObServer cannot listen to multiple nodes [Details](https://github.com/dcloudio/uni-app/issues/3835)
  + Baidu Mini Program Fixed Static resources in node_modules directory build error [Details](https://ask.dcloud.net.cn/question/154595)
  + Baidu Mini Program Fixed OnInit lifetimes is not triggered [Details](https://ask.dcloud.net.cn/question/154352)
  + Baidu Mini Program Fixed The Vue2 project uses usingSwanComponents to configure the event in the dynamic library component that cannot get parameters [Details](https://ask.dcloud.net.cn/question/155281)
  + Baidu Mini Program Fixed Vue3 project cannot use dynamic library components normally [Details](https://github.com/dcloudio/uni-app/issues/3864)
  + Alipay Mini Program Fixed After compiled into a mini program plug-in, uni.hideloading and other interfaces cannot be accessed [Details](https://github.com/dcloudio/uni-app/issues/2974)
  + Alipay Mini Program Fixed page-container component is compiled as a custom component [Details](https://ask.dcloud.net.cn/question/154028)
  + Alipay Mini Program Fixed invalid duration attribute in uni.showToast [Details](https://ask.dcloud.net.cn/question/147279)
  + Alipay Mini Program Fixed The component without events in the plug-in report an error [Details](https://github.com/dcloudio/uni-app/pull/3903)
  + QQ Mini Program Fixed Vue3 uni.createCanvasContext passing this returns an error [Details](https://ask.dcloud.net.cn/question/154223)
  + ByteDance Mini Program Added Support the use of mini program plugins [Details](https://github.com/dcloudio/uni-app/issues/3917)
  + ByteDance Mini Program Fixed Vue3 project uses mini program custom components that may report an error [Details](https://github.com/dcloudio/uni-app/issues/3915)
  + Kuaishou Mini Program Added Pages support subPackages [Details](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)
  + Kuaishou Mini Program Update uni.requestPayment payment interface is compatible with calling ks.pay [Details](https://ask.dcloud.net.cn/question/152948)
  + uni-statistics Fixed The bug of inaccurate deviceId acquisition method caused by version 3.4.9, resulting in inaccurate statistics of unistatistics 2.0 App-Android platform [details](https://ask.dcloud.net.cn/article/40097)
* [uniCloud plugin]
  + Added Secure network, For secure communication between clients and cloud functions and cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
  + Added uniCloud client sdk, Add uniCloud.databaseForJQL api to get database reference [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb.html#jssdk)
  + Added uniCloud client sdk, uniCloud.importObject add options.parseSystemError to parse uncaught exception for auto ui [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + Fixed UniCloud HBuilderX plugin, Require error is only reported once when connect to local cloud function
  + uni-id-co Added support for WeChat authorized mobile phone number login method [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin-mobile)
  + uni-id-co Added Unbind third-party platform account [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#unbind-third-account)
  + uni-id-co Added WeChat binding mobile phone number to support `code` binding via `getPhoneNumber` event callback [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#bind-mobile-by-mp-weixin)
  + uni-admin Added bulk SMS function [Details](https://uniapp.dcloud.net.cn//uniCloud/admin.html#batch-sms)
  + uni-admin Fixed a bug where some statistics of the uni-statistics App-Android platform were inaccurate
  + uni-admin Fixed uni-statistics2 Bug where the week/month data is inaccurate
* [App plugin (5+ App & uni-app)]
  + Android Update the Paypal SDK to version 0.6.2, fixed the issue that setting targetSdkVersion to 31 packaging failed [Details](https://ask.dcloud.net.cn/question/154976)
  + Android Fixed plus.device.uuid may be getting same unique identity on different devices
  + Android Fixed App settings only support portrait when on some Android 8 devices may cause crash
  + Android Fixed LivePusher may cause the app to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/147593)
  + Android Fixed The mute state of VideoPlayer may not work after switching video resources [Details](https://ask.dcloud.net.cn/question/153257)
  + Android Fixed VideoPlayer may cause stuttering when destroyed [Details](https://ask.dcloud.net.cn/question/153483)
  + Android Fixed VideoPlayer does not display the title bar in some cases
  + Android Fixed App does not work properly on Android 4.4 devices caused by version 3.6.2 [Details](https://ask.dcloud.net.cn/question/153910)
  + iOS Fixed VideoPlayer's title bar and progress bar style are incorrect [Details](https://ask.dcloud.net.cn/question/153945)
  + iOS Fixed Uni native language plugin Hook does not have applicationWillEnterForeground/applicationDidEnterBackground event caused by version 3.6.0

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
* [uni-app plugin]
  + Mini Program Fixed onReady lifecycle fires twice [Details](https://ask.dcloud.net.cn/question/153422)

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
* [uni-app plugin]
  + App-Android Fixed uts plugin missing imported classes after compilation in some cases [Details](https://ask.dcloud.net.cn/question/152597)
  + App-Android Fixed When the uts plugin uses a kotlin basic type (such as Int) when defining a type, a compilation error is reported
  + App-Android Fixed uts plugin cloud package does not include AndroidManifest.xml
  + App-Android Fixed bindingx may cause exceptions when executing evaluatecolor [Details](https://ask.dcloud.net.cn/question/151759)
  + App-Android Fixed uni.reLaunch opens non-tabbar nvue pages may still show tabbar [Details](https://ask.dcloud.net.cn/question/143792)
  + App-Android Fixed AutoNavi Maps not working properly when setting GooglePlay channel [Details](https://ask.dcloud.net.cn/question/152668)
  + App-Android Fixed using the picker in nvue as homepage may cause the app to become unresponsive [Details](https://ask.dcloud.net.cn/question/151819)
  + App-iOS Fixed Nvue Tabbar page uni.reLaunch could not triggered onUnload lifetimes [Details](https://ask.dcloud.net.cn/question/152738)
  + Web Fixed Calling uni.setClipboardData will bring up the keyboard [Details](https://github.com/dcloudio/uni-app/issues/3569)
  + Mini Program Fixed Updated The Mini Program component supports the use of kebab-case event names [Details](https://github.com/dcloudio/uni-app/issues/1802)
  + Weixin Mini Program Fixed Calling triggerEvent in wxs cannot carry event parameters [Details](https://github.com/dcloudio/uni-app/issues/3829)
* [App plugin (5+ App & uni-app)]
  + Android Fixed Get the opposite width and height of a vertical video file with getVideoInfo [Details](https://ask.dcloud.net.cn/question/151205)
  + Android Fixed Offset may appear when previewing images with previewImage [Details](https://ask.dcloud.net.cn/question/151966)
  + iOS Fixed The uploadedSize value obtained by uploading a file using uploader is inaccurate

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
* [uni-app plugin]
  + [Important] Added uts Android plugin [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + App-iOS Fixed uni.openLocation bottom safe area adaptation problem [Details](https://ask.dcloud.net.cn/question/150074)
  + App-iOS Fixed That uni.chooseLocation may cause the app to crash [Details](https://ask.dcloud.net.cn/question/152367)
  + Web Added Support for configuring and using AutoNavi maps [Details](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + Alipay Mini Program Fixed Compiling error after configuring global Mini Program components [Details](https://github.com/dcloudio/uni-app/issues/3619)
  + Alipay Mini Program Fixed Accessing $slots after enabling Mini Program Basic Library 2.0 configuration [Details](https://github.com/dcloudio/uni-app/issues/3529)
  + ByteDance Mini Program Added vue2 project to support onUploadDouyinVideo lifetimes [Details](https://ask.dcloud.net.cn/question/151113)
* [uniCloud plugin]
  + Updated UniCloud HBuilderX plugin, Change parameter of running cloud object by HBuilderX [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + Fixed UniCloud HBuilderX plugin, Using push extension raise error which was triggered by HBuilderX 3.5.5
  + Fixed UniCloud HBuilderX plugin, Error "SIGN_PARAM_INVALID" occured occasionally which was triggered by HBuilderX 3.5.5
* [App plugin (5+ App & uni-app)]
  + iOS Fixed submit to App Store Connect report warning 'ITMS-90078: Missing Push Notification Entitlement' without push module

## 3.5.5.20220825-alpha
* Fixed the bug that the Windows HBuilderX Cli command is invalid
* Added Mobile App Playground, Device selection window, added base selection function
* Fixed Mobile App Playground, When the project path exists in Chinese and runs to an iOS device, the App page displays an abnormal bug
* Fixed Mobile App Playground, a bug where custom base installation failed in some cases
* Fixed uni-app manifest.json, a bug that the uniPush field becomes null in some cases
* [uni-app plugin]
  + Fixed Compile exception when project path contains parentheses. [Details](https://ask.dcloud.net.cn/question/150173)
  + App Fixed Vue page cover-view component flex layout is invalid. [Details](https://ask.dcloud.net.cn/question/151697)
  + App Fixed Vue3 project uni.getSystemInfo gets windowHeight value is inaccurate. [Details](https://ask.dcloud.net.cn/question/150862)
  + App Fixed Vue3 project vue page map component shows error after updating center coordinates. [Details](https://ask.dcloud.net.cn/question/151438)
  + App-Android Fixed uni.saveImageToPhotosAlbum saving network pictures may overwrite the last saved picture. [Details](https://ask.dcloud.net.cn/question/125357)
  + App-Android Fixed Picker component focus acquisition exception. [Details](https://ask.dcloud.net.cn/question/150454)
  + App-Android Fixed Nvue page map component customCallout setting image may cause application crash. [Details](https://ask.dcloud.net.cn/question/150166)
  + App-iOS Fixed The values of bluetoothEnabled and locationEnabled obtained by uni.getSystemSetting are inaccurate.
  + App-iOS Fixed The nvue page map component marker calls the moveAlong method without interrupting the previous animation. [Details](https://ask.dcloud.net.cn/question/151411)
  + App-iOS Fixed The nvue page ad-content-page component may cause the app to crash in some scenarios. [Details](https://ask.dcloud.net.cn/question/151778)
  + Web Fixed Vue3 project css environment variable --window-top calculation error. [Details](https://ask.dcloud.net.cn/question/150842)
  + Web Fixed Vue3 project release mode showLoading icon size display error. [Details](https://ask.dcloud.net.cn/question/149819)
  + Web Fixed custom-tab-bar component using uni.setTabBarItem to set visible is invalid. [Details](https://ask.dcloud.net.cn/question/132947)
  + Mini Program Fixed v-model fails after complex expressions are used in v-for. [Details](https://github.com/dcloudio/uni-app/issues/3173)
  + Alipay Mini Program, Baidu Mini Program, Kuaishou Mini Program, ByteDance Mini Program Updated Support automatic copying of ext.json files.
  + Alipay Mini Program Updated The uni.saveImageToPhotosAlbum interface no longer uses the legacy saveImage interface.
  + ByteDance Mini Program Fixed Component fails to render when repeatedly creating and destroying pages quickly.
* [uniCloud plugin]
  + Updated Aliyun Extend the timeout of database request from 3s to 5s
  + Added Aliyun Implement eip with http proxy provided by aliyun [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + Added CloudFunction Add context.requestId to get current request id in cloudfunction [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
  + Added CloudObject Add this.getUniCloudRequestId() to get current request id in cloudobject [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + Added CloudSdk Add uniCloud.getRequestList to get the list of request id being processed by current cloudfunction instance [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
  + Added CloudSdk Add uniCloud.getCloudInfos to get the list of cloud info being processed by current cloudfunction instance [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + Added CloudSdk Add uniCloud.getClientInfos to get the list of client info being processed by current cloudfunction instance [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + Fixed ClientSdk Using uniCloud object cause error when uniCloud space was not bound to project [Details](https://github.com/dcloudio/uni-app/issues/3758)
  + Fixed JQL Multi parentKey in schema is unable to query with getTree [Details](https://ask.dcloud.net.cn/question/151834)
  + Fixed UniCloudDebugger Extension is not loaded properly in some situation [Details](https://ask.dcloud.net.cn/question/150357)
  + Fixed UniCloudDebugger Memory leak of dev server which cause slow responding
  + Updated uniIdRouter It's able to intercept home page or launch page loading now
  + Updated uni-id-co Password rule updated, password strength is configurable. [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-strength)
  + Updated uni-id-co Save user openid into `wx_openid.${mp|h5|app|web}` and `wx_openid.${mp|h5|app|web}_${DCloudAppId}` of user record [Login by weixin](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[Login by QQ](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + Updated uni-id-co Save user session_key, access_token with uni-open-bridge-common [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
  + Added uni-id-co Add beforeRegister hook to manipulate user record before register [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before-register)
  + Added uni-id-pages Support login by weixin official account web page and wechat's qrcode of web page [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + Added uni-id-pages Support password strength (whether it must contain upper and lower case letters, numbers, special symbols and length) configuration [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + Added uni-id-pages Add global login success event: `uni-id-pages-login-success`, listen this event by [uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)
* [App plugin (5+ App & uni-app)]
  + Android Update the version of QQ login and sharing SDK to 3.5.12, the version of Baidu positioning SDK to 9.3.5, and the version of Baidu map SDK to 7.5.3
  + Android Fixed the payload field of vendor channel does not support non JSON strings in UniPush 2.0
  + Android Fixed the option parameter setting when field of creating local message with plus.push.createMessage is invalid
  + Android Fixed upgrade APK with plus.runtime.install may report null pointer
  + iOS Fixed use baidu location module needs enable IDFA caused by version 3.5.0
  + iOS Fixed the token value returned by univerify in the playground is incorrect caused by version 3.5.0
  + iOS Fixed the display time of slow motion video when select it from album is not accurate [Details](https://ask.dcloud.net.cn/question/150531)

## 3.5.4.20220805-alpha
* Fixed the bug that debug view, variable, Global node, UI display disorder
* Fixed the bug that HBuilderX saves files in utf-8 format without file header identification byte 0xEFBBBF
* [uni-app plugin]
  + App Updated The web-view for Vue2 project can use webviewStyles set more style. [Details](https://ask.dcloud.net.cn/question/149212)
  + App Updated The web-view for Vue page can drawn outside of safe area by default. [Details](https://ask.dcloud.net.cn/question/149472)
  + App-Android Fixed the bug that the overlapping coordinates of the nvue map marker points cannot be displayed [Details](https://ask.dcloud.net.cn/question/149665)
  + App-Android Fixed the bug that the nvue map component does not take effect when the polyline and polygon data are cleared
  + App-iOS Fixed the bug that uni.setTabBarItem dynamic update icon may not take effect [Details](https://ask.dcloud.net.cn/question/149955)
  + App-iOS Fixed the bug that the nvue map component may not be loaded properly in multiple pages when use Google map moudle [Details](https://ask.dcloud.net.cn/question/150080)
  + Web Updated The web-view component support props of fullscreen. [Details](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web Fixed The touch envet stop and prevent for canvas component are invalid. [Details](https://ask.dcloud.net.cn/question/148195)
  + Alipay Mini Program Fixed The project for Vue3 $slots is invalid. [Details](https://ask.dcloud.net.cn/question/150373)
* [uniCloud plugin]
  + Added IP anti-brushing for cloudfunction and clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + Fixed use uniCloud inside main.js cause error in some situation
  + Fixed uni-admin vue3 The value of showLeftWindow is incorrect after uni.showLeftWindow was called [Details](https://ask.dcloud.net.cn/question/149618)
  + Added uni-statistics2 Add config item to set the duration of periodic reporting of data [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* [App plugin (5+ App & uni-app)]
  + iOS Fixed the bug of cloud packaging error when use baidu map or geolocation modules without check `use IDFA` caused by version 3.5.0
  + iOS Fixed the bug of page fall back abnormally when app switches to the foreground and use splashscreen AD caused by version 3.5.3 [Details](https://ask.dcloud.net.cn/question/150053)
  + iOS Fixed the bug of chosse iCloud picture display black screen when setting the crop attribute [Details](https://ask.dcloud.net.cn/question/149219)

## 3.5.3.20220727-alpha
* Fixed the operating system environment variable, configuring `NODE_OPTIONS --openssl-legacy-provider`, HBuilderX loses response when it starts

## 3.5.2.20220719-alpha
* Git plugin, pull operation, the default option is changed to the fourth item, namely git pull --rebase --autostash
* Fixed the bug of plugin installation try move failed in some cases

## 3.5.1.20220707-alpha
* Added HBuilderX status bar Upgrade added red dot prompt
* Fixed the bug that the editor selects the language association window position offset
* Fixed the bug that the plugin API hx.window.showQuickPick() window could not scroll after opening the terminal
* Fixed some issues for language service

## 3.5.0.20220623-alpha
* Added TypeScript support for syntax verification
* Added MarkDown code block to support language coloring and highlighting, you need to download and add the corresponding language coloring extension plug-in
* Fixed language service React jsx file no code hint bug
* Fixed some minor issues

## 3.4.17.20220614-alpha
* Fixed the bug that plugin installation fails in some cases.
* Fixed the bug that the hover list disappears automatically when Windows opens the terminal, searches for categories in the toolbar, and moves the mouse to it.

## 3.4.13.20220601-alpha
* Added language service JavaScript supports DOM type recognition of id selectors in Document. getElementById and Document. querySelector
* Added language service SCSS support for prompt `!global` and `!default`
* Fixed some issues for language service

## 3.4.12.20220523-alpha
* Fixed a Bug where the left view project name does not show Git branch information

## 3.4.11.20220520-alpha
* HBuilderX improves startup speed
* Fixed some minor issues

## 3.4.10.20220517-alpha
* Added support for running and debugging Node programs
* Added syntax highlighting that can be independently extended for new languages, and language highlighting plug-ins can be developed or downloaded
* Some of the built-in language syntax highlighting was migrated to the plug-in marketplace
* Fixed multi-file search, the right side of the display code coloring error Bug
* Fixed plug-in installation window, installed plug-in, version number display error Bug
* Added language services, VUE-CLI projects, code hints support element-UI, bootstrap-vue, etc
* Fixed Emmet syntax bug where pressing TAB did not respond correctly
* Fixed language service, input CSS code in the same line, press Enter, replace the wrong position Bug
* Fixed language service,jsdoc carriage return error Bug

## 3.4.9.20220508-alpha
* Fixed some issues for language service

## 3.4.8.20220428-alpha
* Added HBuilderX Support for custom project Snippets
* Fixed some issues for language service

## 3.4.6.20220416-alpha
* Fixed some issues for language service
* Adjust Share to Weblink, adjust code area code coloring

## 3.4.5.20220408-alpha
* Fixed some issues for language service

## 3.4.4.20220403-alpha
* Fixed some issues for language service

## 3.4.3.20220325-alpha
* Fixed some minor issues

## 3.4.2.20220310-alpha
* Fixed some minor issues

## 3.4.1.20220308-alpha
* Fixed some minor issues

## 3.4.0.20220304-alpha
* HBuilderX language service switched from Java to Node
* Fixed a bug where files in the editor would not be automatically refreshed after Git updated files in some cases

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
* Fixed the Bug where MacOSX failed to run projects to iOS emulator when the HBuilderX installation path had a space.

## 3.3.0.20211130-alpha
* Adjust the UI of the new project window [Details](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)
* Added project manager view toolbar, added positioning and folding functions [Details](https://hx.dcloud.net.cn/Tutorial/project?id=toolbar)

## 3.2.15.20211120-alpha
* Fixed some minor issues

## 3.2.14.20211112-alpha
* Fixed some minor issues

## 3.2.13.20211110-alpha
* Added Files larger than 1M in size do not display hover code assist
* Fixed the bug that caused the node process to fail to start when the max-old-space-size configured in the operating system environment variables was too large

## 3.2.12.20211028-alpha
* Fixed some minor issues

## 3.2.11.20211021-alpha
* Added HBuilderX plug-in development breakpoint debugging

## 3.2.10.20211013-alpha
* Added hover code assist [Details](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* Added Terminal supports clicking on the URL to jump to the browser [Details](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* Fixed the bug that when the terminal input exceeds a certain length, the wrong line is displayed
* Fixed the bug that the editor window exceeds the screen area when creating multiple terminals
* Fixed the bug that the editor bookmarks are lost due to code formatting

## 3.2.8.20210923-alpha
* Fixed the bug that the EOL of the editor file is rendered incorrectly when the EOL is set to be displayed

## 3.2.7.20210919-alpha
* Added Configure whether you receive automatic updates.
* Fixed the bug that the editor crashes when a new project is created with / at the end of the storage path.
* Fixed Bug that HBuilderX editor cannot render Arabic
* Upgrade eslint-vue plugin.
* Fixed the bug of MacOSX system, open in terminal, the top content of the terminal is squeezed.
* The menu at the top of the HBuilderX editor [Help-License Agreement], adjusted to an online link, click to jump to the browser to open.

## 3.2.6.20210901-alpha
* Added HBuilderX supports localized language pack extension [Details](https://github.com/dcloudio/hbuilderx-language-packs)
* Vue3 improvements [Details](https://hx.dcloud.net.cn/Tutorial/Language/vue-next)
