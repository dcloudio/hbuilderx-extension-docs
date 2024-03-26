## 4.06.2024032513
* Language Server: Added uni-app x to support multi-platform code prompts and grammar verification, and can switch language services by platform [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* Language Server: Added uni ext api, supporting interface.uts specification [Details](https://uniapp.dcloud.net.cn/api/extapi.html#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91uni-ext-api)
* Language Server: Upgrade the built-in typescript library from `4.5.5` to `5.2.2`
* Language Server: Fixed the bug of $ appearing in tag code completion when opening a file in a shared directory [Details](https://ask.dcloud.net.cn/question/182857)
* Language Server: Fix: In some cases, css cannot be transferred to the defined bug [Details](https://ask.dcloud.net.cn/question/184780)
* Language Server: Fix the bug that pages.json, path prompts incorrect page path [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=466)
* Language Server: Fix the bug that caused the file to be occupied and unable to be renamed after displaying the reference results after searching for references.
* Language Server: Fixed the bug that causes performance degradation when uni-app x uts code imports too many Android platform libraries
* Language Server: Fixed the bug that the globalProperties attribute defined in uni-app x main.uts cannot be prompted in other uvue pages
* Language Server: Fixed the bug that when uni-app x import imports uvue files, the path cannot go to the defined bug
* Language Server: Fixed the bug that when opening multiple html files, switching to the previous html, variables floating, going to definition, etc. may not be correct if it is not modified.
* Language Server: Fixed the bug that uni api is not prompted under uni_modules utssdk
* Language Server: Fixed the bug that caused the code prompts to become slower and slower when developing uniCloud cloud functions and cloud objects.
* Language Server: Fixed the bug of importing vue type error when using vue3+ts in uni-app project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=720)
* Language Server: Fixed the bug where the pinia module search error caused false alarms when using ts in the uni-app project [Details](https://ask.dcloud.net.cn/question/185148)
* Language Server: Fixed uts Android, automatically fix the bug that when there are multiple import package options, the import result of selecting an option other than the first one is incorrect.
* Language Server: UTS plugin, Auto-importing packages without a newline after the first line when no other import nodes exist in the current file.
* Language Server: uts syntax check, When the function parameter type is `UTSJSONObject`, when calling the function and using a literal object to pass parameters, a false positive type mismatch bug occurs
* Language Server: uts syntax check `instanceof` does not allow the type defined by type to be used as a value.
* Added Git-blame plug-in to display git log at the end of the code line, which needs to be downloaded from the plug-in market. [Details](https://ext.dcloud.net.cn/plugin?id=16568) [Details](https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/git_blame)
* Plug-in: New im-notifier plug-in Receive new message notifications from uni-im and prompt users [Details](https://ext.dcloud.net.cn/plugin?name=im-notifier)
* Plug-in: Adjust the bug reporting plug-in. The HBuilder running logs, uni-app console logs, etc. that are checked when reporting bugs are uploaded to be visible only to administrators.
* Plug-in: Optimize the bug reporting plug-in. After submitting a bug, click the details to jump to the issues system to support automatic login.
* Plug-in: Repair bug reporting plug-in macOSX cannot paste pictures when reporting bugs [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=372)
* Fixed AI virtual row style exception when switching themes. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=360)
* Optimize network error prompts in HBuilderX login interface
* Added support for system associated icons for windows uts and uvue files
* Fixed the bug that prompts HBuilderX to prevent shutdown when Windows computer is shut down
* Fixed the bug that when a menu pops up in a certain window in MacOSX multi-window situation, and then the mouse clicks on another window, the focus state and activated window are incorrect.
* Fixed a bug in the MacOSX project manager & built-in resource management that uses shortcut keys to rename file names. When entering the editing state, triggering the shortcut keys again will not automatically commit the changes. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=795)
* Fixed a bug that caused memory leaks when part of the memory was not recycled properly when the editor was opened or closed.
* Fixed a bug where a certain position may be lost when returning to the previous cursor position when quickly going to the definition continuously.
* Fixed the bug that may cause the interface to become unresponsive in a weak network environment when creating a new project
* Fixed the bug that the preview interface cannot disappear when the folded line in the code folding preview is at the last line of the screen
* Fixed the bug that the Prettier plug-in does not recognize the embedded uts code when formatting uvue [Details](https://ext.dcloud.net.cn/plugin?id=2025)
* Fixed the bug that when the console file link is clicked to jump to the editor, if the target line is collapsed, it will not automatically expand.
* Fixed the bug of incorrect coloring of jsdoc @tag under vue file script.
* MarkDown: Fixed a bug that caused the preview to fail when the markdown preview file name contained a + sign or other special symbols. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=463)
* MarkDown: Fixed a bug in markdown preview that caused the preview to fail if the file name was modified after previewing. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=369)
* MarkDown: Fixed the bug that markdown preview cannot be parsed and rendered normally when embedded html code [Details](https://ask.dcloud.net.cn/question/184421)
* Html preview: Fixed the bug in html preview where external html files cannot be run into the browser [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=411)
* Html preview: Fixed the bug that the reference to relative path resources in html preview does not take effect
* Html preview: Fixed the bug that the built-in browser log cannot be output to the console when the html file path of the html preview contains Chinese characters.
* Html preview: Fixed the bug that the Html preview sub-menu item `Save and automatically refresh the browser` is not displayed in the run menu [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=721)
* Html preview: Fixed the bug of 404 reported when previewing html files when the project directory name contains the character '.'
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
* Fixed the bug that uni-app (x) HBuilderX may falsely report that the `uniapp-extension` plug-in has been tampered with when it is started and click Run immediately.
* Fixed a bug in uni-app (x) that caused HBuilderX to crash when clicking preview after opening an image file in the editor.
* Adjust uni-app (x) to run on the web, adjust the console log output format
* Adjust uni-app x to run on Android, adjust console log output format
* Fixed uni-app x, project contains uts plugin, run to custom base, Bug in running error when `Clean build cache` is checked [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=781)
* Mobile App Playground: Fixed uni-app, after the iOS standard base is signed, it will not be automatically deleted during the next upgrade, causing the re-signed base that runs after the upgrade to be a bug in the previous version
* Mobile App Playground: Fixed the bug of uni-app x custom debugging base. After upgrading HBuilderX, the base version mismatch was not prompted.
* Added uts plug-in uts Android plug-in development, supporting Gradle 8.x [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html#%E9%85%8D%E7%BD%AE-gradle-jdk)
* uni-app: Fixed the bug that the format of manifest.json is incorrect when copying permissions to the Android permission configuration interface [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=370)
* uni-app: Fixed the bug that when the plug-in market imports a project and the project only supports vue2, the vue3 button on the import interface can still be clicked.

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

## 3.95.2023102806

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