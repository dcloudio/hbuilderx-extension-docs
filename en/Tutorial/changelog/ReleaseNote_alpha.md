# HBuilder X - Release Notes
======================================
## 5.11.2026052520-alpha
### HBuilder
* Fixed language service support for easycom components using the `defineComponent` syntax
* Added cloud packaging support for querying build records via `CLI pack status` [Documentation](https://hx.dcloud.net.cn/cli/pack?id=pack-query) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29355)
* Added cloud packaging support for retrieving packaging console logs via `CLI logcat pack` [Documentation](https://hx.dcloud.net.cn/cli/logcat-pack) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29356)
* Added `CLI launch` support for running uni-app (x) projects, including the new `--ui` parameter for improved uni-agent integration [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29509)
* Added Vapor Mode support for running uni-app x projects on iOS [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29506)
* Added optional `uni-oauth` and `uni-share` module configuration support for uni-app x Android/iOS platforms in `manifest.json` [Documentation](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-ios.html#modulesoauth) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29135)
* Added a new “View Layer Compilation Target” option in the `manifest.json` editor [Documentation](https://uniapp.dcloud.net.cn/collocation/manifest.html) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29150)
* Increased the default compiler memory allocation to 5GB when running uni-app (x) projects [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29501)
* Improved the “AI Fix” and “Bug Report” interaction flow for uni-app (x) compilation errors [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29510)
* Fixed a false “Node.js not installed” prompt when running uni-app CLI projects [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29505)
* Fixed Android log link parsing issues for `Object` logs and incorrect source mapping offsets in error logs for uni-app [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29513)
* Optimized device wake-up and installation authorization workflows for uni-app (x) Android runtime [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29512)
* Optimized the runtime logging experience for uni-app (x) Web platform [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29511)

## 5.08.2026050815-alpha
### HBuilder
* Fixed an issue introduced in version 4.55 on macOS (Arm) where text entered with the Sogou Input Method disappeared after switching from Chinese to English input. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22901&ask_id=214698)
* Fixed an issue introduced in version 5.07 where the language service reported errors in component property hints after using specific syntax. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=29057)
* Added support for taking screenshots when running uni-app (x) on Web via the `CLI screencap` command, making it easier for AI to automatically fix issues. [Documentation](https://hx.dcloud.net.cn/cli/screencap-app) [https://issues.dcloud.net.cn/pages/issues/detail?id=27980](https://issues.dcloud.net.cn/pages/issues/detail?id=27980)
* Fixed an issue on Web where the `browser` parameter was removed when retrieving runtime logs via the `CLI logcat` command. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=28862)
* On macOS and Windows, added support in the Run menu and CLI for specifying a page when launching on the HarmonyOS platform. [Documentation](https://hx.dcloud.net.cn/cli/launch-app?id=launch-app-harmony) [https://issues.dcloud.net.cn/pages/issues/detail?id=27919](https://issues.dcloud.net.cn/pages/issues/detail?id=27919)
* On Windows, fixed a random crash issue introduced in version 5.01 where `uni-agent` could occasionally crash while viewing AI-generated modification comparison results. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27913)
* Added support for wireless debugging when running on the HarmonyOS platform. [Documentation](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#run) [https://issues.dcloud.net.cn/pages/issues/detail?id=28978](https://issues.dcloud.net.cn/pages/issues/detail?id=28978)
* Added display of device names in the Console tab when running on the HarmonyOS platform. [Documentation](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#run) [https://issues.dcloud.net.cn/pages/issues/detail?id=28096](https://issues.dcloud.net.cn/pages/issues/detail?id=28096)
* Added support for configuring style isolation strategies in the `manifest` of uni-app x projects. [Documentation](https://doc.dcloud.net.cn/uni-app-x/css/common/style-isolation.html) [https://issues.dcloud.net.cn/pages/issues/detail?id=28821](https://issues.dcloud.net.cn/pages/issues/detail?id=28821)

## 5.07.2026041610-alpha
### HBuilder
* Fixed the issue where the iOS icon for the Uni-app package did not take effect caused by version 5.0. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27902)

## 5.04.2026031906-alpha
### HBuilder
- Fixed an issue introduced in v5.0 where the window position was incorrect when using keyboard shortcuts to switch files/views. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27247)
- Fixed a performance regression introduced in v5.0 that caused slow code completion in Language Services. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27139)
- Windows: Fixed an issue introduced in v5.03 where HTML tag `class` attribute completion/IntelliSense was incorrect when multiple class values were present. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27097)
- Windows: Fixed an issue where opening `uni-agent` in certain cases (e.g., under restricted directories like `C:\Program Files`) could fail to load due to insufficient read/write permissions. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=27185)

## 5.03.2026031009-alpha
### HBuilder
* Fixed some bugs

## 5.02.2026030616-alpha
### HBuilder
* Windows platform: Fixed the issue where clicking a button in showQuickPick automatically closes the dialog without triggering the button callback when buttons are added [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26605)
* Fixed the issue where pressing Enter key closes the entire dialog when using textEditor in showFormDialog, preventing normal line breaks [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26603)
* Fixed the issue where the search input box does not automatically focus when clicking "Search for Characters (Multiple Files)" in the Windows top toolbar search dropdown list [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21247)
* Fixed the issue in markdown files where certain syntax causes incorrect syntax highlighting for characters following the kotlin keyword when the kotlin syntax coloring plugin is present [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21568)
* Fixed uni-agent permission dialog interaction issue where the last permission dialog overlays the previous one, causing authorization exceptions [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26750)
* Fixed uni-agent slash command misjudgment [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26751)
* Fixed uni-agent conversation message retry mechanism [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26752)
* Fixed the issue where uni-agent does not execute the next command after clicking the stop button [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26753)
* Fixed the issue where uni-agent still executes the previous command when asking again after clicking the stop button [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26754)
* Fixed uni-agent duplicate tool call display [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26755)
* Fixed uni-agent error when project path contains Chinese characters [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26756)
* Fixed the issue where uni-agent cannot save all files on some computers [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26757)
* Added uni-agent outline view feature [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26747)
* Added uni-agent automatic collapse when there are too many user messages [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26748)
* Added uni-agent plugin version number display in the lower left corner of the page [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26749)

## 5.01.2026021122-alpha
### HBuilder
* Added AI Chat support for uni-agent, an AI programming assistant specially designed for uni-app (x) developers [Details](https://hx.dcloud.net.cn/Tutorial/AI/uni-agent) <https://issues.dcloud.net.cn/pages/issues/detail?id=26435>
* Windows platform: Fixed the issue where the styles of all three themes display abnormally when the installation path contains special characters [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26353)
* Fixed the issue where F2 rename in the left explorer fails after expanding the secondary menu of Go to -> Bookmarks on Mac [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25854)
* Fixed the issue where uvue code blocks in md files have no syntax highlighting [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26341)
* Fixed the issue introduced in version 5.0 where md preview incorrectly renders content in parentheses [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26327)
* Fixed the language service performance issue introduced in version 5.0 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26199)
* Fixed the issue where commenting in Vue with specific syntax doesn't comment correctly [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25894)
* macOS (Apple Silicon) platform: Fixed the language service issue introduced in version 5.0 where easycom component tag attributes fail to prompt in certain cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26434)
* Added uni-app x run: Screenshot via `CLI screencap` to facilitate AI auto-fixing issues [Details](https://hx.dcloud.net.cn/cli/screencap-app) <https://issues.dcloud.net.cn/pages/issues/detail?id=26397>
* Added uni-app (x) run: Run via `CLI launch` with support for running to a specific page [Details](https://hx.dcloud.net.cn/cli/launch-app) <https://issues.dcloud.net.cn/pages/issues/detail?id=26399>
* Added uni-app (x) run/release: Add project directory to antivirus software monitoring exclusion list [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26400)
* macOS platform: Fixed the issue introduced in version 5.0 where application images configured in manifest do not take effect in APK generated by SafePack on macOS platform Details [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26437)

## 5.0.2026013113-alpha
### HBuilder
* 【Important】Added AI Chat plugin. Supports integration with Claude Code, Gemini, Copilot and other CLI tools [Documentation](https://hx.dcloud.net.cn/Tutorial/AI/AIChat) <https://issues.dcloud.net.cn/pages/issues/detail?id=25161>
* 【Important】Added Copilot for HBuilder plugin. Supports AI code completion [Documentation](https://hx.dcloud.net.cn/Tutorial/AI/github-copilot) <https://issues.dcloud.net.cn/pages/issues/detail?id=24781>
* Added uni-app (x) run via `CLI launch`, facilitating AI automatic problem fixing [Documentation](https://hx.dcloud.net.cn/cli/launch-app) <https://issues.dcloud.net.cn/pages/issues/detail?id=24793>
* Added Language Service uni-app x project style supports externalClasses [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25784)
* Added command(workbench.action.autoUpdate) supports user-configured shortcuts for automatic updates [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26043)
* Fixed macOS HBuilderX tooltip visibility issues in Cool Black and Elegant Blue themes at bottom console [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20959)
* Fixed UI state and actual debug state inconsistency when switching active breakpoints during plugin debugging [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21306)
* Fixed single project window (multi-window) causing project confusion in certain situations [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23011)
* Fixed debug view UI and actual state desynchronization, call stack node click breakpoint jump without highlighting, sometimes debug exit highlighting not cleared [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24773)
* Fixed uniapp-x project manifest.json unable to respond to view switching and tab switching when not in source view [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24780)
* Fixed version 3.87 issue where Windows plugins using font files would fail to uninstall [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24783)
* Fixed built-in file system switching to large icons, clicking any file then shaking mouse causes icon following, long-term mouse shaking causes program crash [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24868)
* Fixed plugin-registered shortcuts sometimes not working [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25346)
* Fixed switching user login, when password input is incorrect, occasionally a duplicate login page appears on the login page [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26041)
* Fixed version 4.81 issue where console link text selection triggers link jump, causing shortcut copy to copy unexpected content [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25094)
* Fixed project manager using esc to cancel folder rename causes current position collapse/expand failure [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23070)
* Fixed multi-file search results cannot be replaced with empty string [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24792)
* Fixed multi-file search Windows replacement not updating results timely [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24794)
* Fixed multi-file search Windows replacement text error popup consistency prompt [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24796)
* Fixed multi-file search Windows dirty files having duplicate search results [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24802)
* Fixed editor conditional compilation graying when folding code blocks, hover preview shows abnormal coloring [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23021)
* Fixed viewing local history of open files, history records contain other files with same name but different file types [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21079)
* Fixed multi-cursor selection minimap causing left partial position cancel multi-cursor selection failure [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23065)
* Fixed conditional compilation parentheses syntax highlighting error [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25443)
* Fixed js, ts, uts files missing partial syntax highlighting in Cool Black theme [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26037)
* Fixed version 4.66 issue where Language Service px to rpx completion items no longer prompt [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24340)
* Added Language Service UTS plugin root path files support conditional compilation [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20869)
* Added Language Service UTS plugin Harmony platform supports native file mixed compilation syntax hints [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21727)
* Added Language Service UTS plugin development environment supports conditional compilation [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22069)
* Fixed Language Service UTS plugin package name conditional compilation not compatible with app-js platform, causing errors [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21886)
* Fixed Language Service platform compatibility display error [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22520)
* Fixed Language Service hovering over conditional compilation comment text shows conditional compilation graying prompt [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22739)
* Added Language Service easycom supports withDefault+defineProps setting default values [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22763)
* Added Language Service vue slots support [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23696)
* Added Language Service Harmony platform enabling vapor mode supports referencing C++ files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24390)
* Fixed Language Service component bool type attributes, completion results incorrect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22771)
* Fixed Language Service css attribute values, hover results incorrect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23511)
* Fixed Language Service uni-app x project HTML files cannot prompt DOM API [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21429)
* Fixed Language Service special value domain String missing CSSString [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22425)
* Fixed Language Service in certain situations, causing projects unable to delete [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22526)
* Fixed Language Service pages.json subPackages root and path missing code hints [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22864)
* Fixed syntax highlighting vue files v-bind shorthand syntax causing incorrect syntax highlighting [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23004)
* Fixed mac dark theme opening built-in browser flashes white screen [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26039)
* Fixed opening built-in browser, dragging in external file automatically opens [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26042)
* Added AI plugin Android memory leak automatic analysis function [Documentation](https://ext.dcloud.net.cn/plugin?id=23720) <https://issues.dcloud.net.cn/pages/issues/detail?id=24785>
* Added adjustment new page cloud integration series built-in templates support uni_modules type [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26040)
* Fixed version 4.84 issue where new page window automatically caches all template files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=26038)
* Added pages.json page filtering, quick run to specified page [Documentation](https://uniapp.dcloud.net.cn/tutorial/run/pages-json-filter.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=25453>
* Fixed version 4.87 issue where creating uniCloud project prompts "missing appid, please set appid in manifest.json" [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=24935)
* Fixed version 4.76 issue where unable to download all public modules [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=25160)
### uniCloud
* Added Alipay Cloud support for custom request domain names in cloud functions [Details](https://doc.dcloud.net.cn/uniCloud/request-custom-domain.html)

## 4.87.2025112602-alpha
### HBuilder
* Added support for running uni-app (x) and obtaining runtime logs via the `CLI logcat` command, facilitating AI access to runtime logs for automatic problem fixing. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22250)
* Fixed an issue in version 4.84 where the app couldn't run on the iOS 26 simulator under certain circumstances. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=23348)

## 4.86.2025110715-alpha
### HBuilder
* Fixed an issue in version 4.84 in uni-app(x) projects where, after creating a new page under a subpackage and unchecking the "Register in pages.json" option, the selected file location and subpackage did not match when clicking "Create". [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22990)
* Fixed an issue where uni-app (x) projects were not automatically imported when running on certain versions of WeChat Developer Tools for WeChat Mini Programs.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22962)

## 4.84.2025102304-alpha
### HBuilder
* Fixed HBuilderX crashes in certain scenarios when running/releasing uni-app (x) projects, introduced in version 4.81 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22573)

## 4.83.2025101713-alpha
### HBuilder
* Fixed issue in version 4.81 where the app, when running on a real iOS device with a resigned base, wouldn't display a prompt. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22469)
* Fixed the issue where the application runs normally during development but reports "unpackage\dist\build\app-harmony\libs\UniAppRuntime.har does not exist" during the build process. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21877)

## 4.82.2025093004-alpha
### HBuilder
* Added HBuilder support for the macOS 26 icon style.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22025)
* Fixed missing debug button in iOS hybrid compilation caused by version 4.81 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22041)
* Fixed incorrect display of project aliases caused by version 4.81.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21920)
* Fixed the built-in browser in Vue3 CLI project that cannot be closed. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21471)
* Fixed failure to install the debug base when running on the iOS 26 simulator. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21734)
* Fixed automatic deletion of resource fork files in HarmonyOS project directories on non-mac file systems to prevent HarmonyOS toolchain execution exceptions. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20975)
* Fixed editor crash after selecting a plugin in manifest.json visualization -> native plugin configuration. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=22042)
* Fixed issue where setting initPrivacyAuthorization to disagree in manifest.json configuration was ineffective in version 4.71. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20236)
* Added support for uni_modules UTS API plugins and standard mode components for the HarmonyOS platform. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21997)

## 4.81.2025091909-alpha
### HBuilder
* Added a restart function to the HBuilder main menu. Menu location: 【File】-【Restart】 [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=20854) <https://issues.dcloud.net.cn/pages/issues/detail?id=20854>
* Added HBuilder core plugin version validation to ensure that the plugin version matches the HBuilder version. [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=20862) <https://issues.dcloud.net.cn/pages/issues/detail?id=20862>
* Fixed the issue where the console automatically scrolls to the bottom when new content is output while scrolling up to view logs. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20331)
* Fixed an issue where the breakpoint position did not match the expected location when double-clicking the line number to set a breakpoint. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20823)
* Fixed the issue where saving a file in UTF-8(BOM) encoding in version 4.66 resulted in blank file content. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21373)
* Fixed an issue where editing a file already open in HBuilder from another software might occasionally cause HBuilder to crash in version 4.73. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20825)
* Fixed an issue where the console search could cause crashes under certain circumstances in version 4.61. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20826)
* Fixed incorrect font size in the left-side explorer under specific scenarios. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21030)
* Fixed incorrect outline font size in specific scenarios. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21169)
* Fixed the issue where pressing the Enter key in the pages.json text box of uni-app (x) when creating a new page resulted in the insertion of \r and \t characters in the merged pages.json file, causing syntax errors.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17766)
* Fixed the issue in version 4.57 where new pages in uni-app (x) could not be created in subfolders of subpackages. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17947)
* Fixed potential software crash issues when creating new pages in uni-app (x). [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19888)
* Fixed an issue in uni-app (x) where deleting a page and clicking the status bar to sync to pages.json, then navigating to the pages.json editor, could cause the application to crash. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20936)
* Multi-file search: Fixed performance and stability optimization. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18860)
* Multi-file search: Fixed conflict between search result highlighting and current file search result highlighting. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20839)
* Multi-file search: Fixed issue where no document change prompt appears when continuing to edit the document after search completion and then replacing text. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20840)
* Multi-file search: Fixed Input fields are editable when in the current directory and when opening a directory. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20841)
* Multi-file search: Fixed issue where clicking replace directly without initiating a search resulted in no response or prompt. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20842)
* Multi-file search: Fixed incomplete character search history logging in the compiler. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21184)
* Multi-file search: Fixed misalignment in file search when UTF8 encoding includes a BOM header. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21244)
* Multi-file search: Fixed the issue where search history disappears after restarting the IDE on the Windows platform. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21500)
* Fixed issue with table paste functionality in macOS Markdown files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16419)
* Fixed garbled text when entering content after pressing Tab to switch to an unordered list in Markdown files under specific scenarios. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20689)
* Fixed issue where uncommenting does not take effect in specific scenarios in CSS files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21178)
* Fixed incorrect selection area during intelligent double-click on labels in specific scenarios. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18702)
* Fixed an issue in version 4.03 where the editor did not automatically close open files after their parent directories were deleted. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19394)
* Language Server: Added support for automatic display of platform compatibility for system APIs. [Doc](https://hx.dcloud.net.cn/Tutorial/Language/jsdoc?id=uniplatform) <https://issues.dcloud.net.cn/pages/issues/detail?id=18641>
* Language Server: Added UTS plugin HarmonyOS platform support for HAR package parsing, with features such as code hints after import. [Doc](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html#%E9%85%8D%E7%BD%AEuts%E6%8F%92%E4%BB%B6%E4%BE%9D%E8%B5%96) <https://issues.dcloud.net.cn/pages/issues/detail?id=20861>
* Language Server: Fixed Occasionally, clicking to jump to a definition does not respond when multiple "Go to Definition" items are present. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20793)
* Language Server: Fixed missing data when converting JSON to type in certain code patterns. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19806)
* Language Server: Fixed error at the reference location after closing the referenced Vue file. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19992)
* Language Server: Fixed unresponsive language service after repeatedly triggering \"Go to Definition\". [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20694)
* Language Server: Fixed the validation logic for IDs and classes, now only validating that defined IDs or classes are not used. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20843)
* Language Server: Fixed issue where uni-app(x) projects referencing UTS plugins did not support conditional compilation for platform differentiation. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20853)
* Language Server: Fixed issue where conditional compilation graying in uni-app x does not support uniVersion, VUE2, and VUE3. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20864)
* Language Server: Fixed issue where language service cache resources were not being cleaned up upon HBuilder exit in specific scenarios. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21179)
* Language Server: Fixed issue where assigning a string type to a union type in UTS files caused red error highlighting. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20846)
* Language Server: Fixed error when assigning optional parameters to union types in UTS files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20847)
* Language Server: Fixed issue where assigning a string value to a UTSJSONObject property that is null causes a red error highlight. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20850)
* Language Server: Fixed an error when using decorators in the root directory of the utssdk for uts files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20868)
* Language Server: Fixed error when adding @override to methods within anonymous classes in UTS files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20873)
* Language Server: Fixed an error where required parameters were placed after optional parameters in UTS files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20874)
* Language Server: Fixed an issue where the UTS plugin on the iOS platform reported an error for not finding the `contains` property when using `String.contains`. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20875)
* Language Server: Fixed incorrect validation of vueModifier during tag validation in Vue files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19669)
* Language Server: Fixed false positive yellow warnings for attribute definition syntax in scoped slot validation of Vue files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19713)
* Language Server: Fixed issue where variables defined under `defineMixin` in a `.uvue` file could not be found in the template. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20852)
* Language Server: Fixed error when assigning array types and arrays of type 'any' under props in uvue files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20855)
* Language Server: Fixed an issue where assigning values to variables under the data section of a uvue file would result in an error if the types were inconsistent.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20858)
* Language Server: Fixed error when using any property of an empty object defined under data in a uvue file within the template. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20867)
* Language Server: Fixed false error reporting for properties and methods when using multi-level nested mixins in uvue files. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20871)
* Language Server: Fixed issue where template area completion hints were unavailable when computed return values in uvue files contained `this`. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20876)
* Language Server: Fixed issue where computed properties in uvue files do not support setter and getter methods. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21128)
* Language Server: Fixed incorrect auto-import path for referenced Vue files in uni-app(x) projects. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21459)
* Fixed AI Repair When the pop-up prompts to download a plugin after clicking the repair link, text selection occurs when the mouse hovers over the console after canceling the plugin download. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20116)
* Fixed AI repair issues caused by version 4.72, where HBuilder crashes during the repair process under certain circumstances. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20838)
* Fixed AI repair caused by version 4.72: No code coloring for new content in the comparison interface. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20883)
* Fixed Linux HBuilder CLI login error for overseas accounts. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17471)
* manifest.json: Added support for visual configuration of WeChat login and WeChat sharing in 【HarmonyOS App Configuration】. [Doc](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19316>
* manifest.json: Added uni-app x Android platform now supports configuring dark mode colors for the splash screen background. [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=19668) <https://issues.dcloud.net.cn/pages/issues/detail?id=19668>
* manifest.json: Added support for certificate configuration for HarmonyOS Meta Services in manifest.json. [Doc](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19805>
* manifest.json: Added uni-app x Android platform optional module configuration uni-push. [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=18885) <https://issues.dcloud.net.cn/pages/issues/detail?id=20860>
* manifest.json: Added optional module configuration for uni-barcode-scanning on the uni-app x Android platform. [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=18903) <https://issues.dcloud.net.cn/pages/issues/detail?id=20865>
* manifest.json: Added support for visual configuration of the Huawei Login client_id in the HarmonyOS App configuration. [Doc](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=20974>
* manifest.json: Fixed issue where HTTPS was enabled by default in the visualization settings, even though it was not configured in the web settings. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19743)
* Mobile App Playground: Added a Bug reporting feature for uni-app x compilation and runtime errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20878)
* Mobile App Playground: Added support for running on Android with automatic detection of memory leaks, displaying data in the runtime console. [Doc](https://issues.dcloud.net.cn/pages/issues/detail?id=18528) <https://issues.dcloud.net.cn/pages/issues/detail?id=18528>
* Mobile App Playground: Fixed issue where debugging could not be used when running on Android while Android Studio was open. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21181)
* Mobile App Playground: Fixed issue where app fails to auto-start on iOS 17+ systems. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21183)
* Mobile App Playground: Added assembly of Weixin configuration from manifest.json into the HarmonyOS project during the build and packaging process for the HarmonyOS platform. [Doc](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19315>
* Mobile App Playground: Added integration of HarmonyOS Hot Reload capability to enable hot reloading. [Doc](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#hot-reload) <https://issues.dcloud.net.cn/pages/issues/detail?id=20972>
* Mobile App Playground: Added hot update capability for integrated HarmonyOS atomic services. [Doc](https://uniapp.dcloud.net.cn/tutorial/mp-harmony/intro.html#ascf-serve) <https://issues.dcloud.net.cn/pages/issues/detail?id=20980>
* Mobile App Playground: Fixed an issue in the Uni-App X HarmonyOS platform debug mode where the app might crash if expressions are present in the watch area. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21171)
* Mobile App Playground: Added support for native hybrid compilation and debugging for iOS. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19433)
* Mobile App Playground: Added support for breakpoint debugging on iOS 17+ systems. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=21182)
* Mobile App Playground: Fixed the bug where the debug process did not exit after iOS debugging was stopped. debug process did not exit after stopping iOS debugging. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20172)
* Fixed an issue where submitting an App cloud build for uni-app had a certain probability of causing HBuilder to crash. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20851)
* Added App Cloud Packaging for uni-app (x): New AppLovin Channel for Overseas Ads. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20877)
* Fixed issue where the "Build Custom Debug Base" option in the App cloud packaging interface was not automatically checked when selecting "Run to Phone or Emulator" → "Build Custom Base" during the "Run" process. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19745)
* Added support for CLI packaging of HarmonyOS atomic services. [Doc](https://hx.dcloud.net.cn/cli/pack-mp-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=21467>
* Fixed the bug where the cloud platform compatibility option in the uni_modules plugin was incorrectly selected by default. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=20781)

## 4.76.2025073103-alpha
### HBuilder
* Fixed Some Bugs

## 4.75.2025070414-alpha
### HBuilder
* Fixed a bug introduced in version 4.74-alpha where, in certain cases, running a uni-app x project and modifying code would cause the console to frequently display AI correction prompts.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19386)
* Fixed a bug introduced in version 4.61-alpha where the "Find corresponding DOM node in code" feature did not work in the built-in hx browser on MacOS (Intel). [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19165)
* Fixed a bug caused by version 4.41 where the project import dialog would appear blank when importing a project from issues. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19323)
* Language Server: Fixed a bug caused by version 4.28 where, in Vue Composition API scenarios, functions in the template were incorrectly displayed as properties. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19135)
* Language Server: Fixed a bug caused by version 4.71 where variables returned by computed properties could not be correctly displayed in the uvue template area. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19270)
* uniCloud: Adjust the sorting order of uniCloud service providers when creating a new uniCloud project. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19266)

## 4.74.2025063012-alpha
### HBuilder
* Fixed Some Bugs

## 4.73.2025062714-alpha
* Added Linux cli [Details](https://hx.dcloud.net.cn/Tutorial/install/linux-cli)
* Language Server: Fixed a bug where no code completion was provided when one of multiple overloaded APIs contained the internal tag. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19058)
* Language Server: Fixed a bug where reference search within Vue files stopped working due to changes introduced in version 4.71. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18927)
* Language Server: Fixed a bug where, due to changes introduced in version 4.44, easycom components in uni-app x projects had no code hints and were incorrectly marked as errors. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19040)
* Language Server: Fixed a bug where the error Cannot read properties of undefined (reading 'getSyntacticDiagnostics') could occur. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17048)
* Language Server: Fixed a bug that caused a crash in certain situations. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=17195)
* Language Server: Fixed the bug that the language service reported an error when opening and closing files quickly[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18499)
* Fixed a bug introduced in version 4.72 where the application of subsequent fix results by the HBuilderX AI plugin would replace incorrect positions in the document after editing. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19112)
* Fixed a bug introduced in version 4.64 where the Android console title displayed as "Undefined" during execution.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=19083)
* Fixed a bug introduced in version 4.71 where the version number was incorrect when generating an App wgt package for uni-app projects. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18893)
* Fixed a bug where breakpoints could not be set in UTS files during HarmonyOS collaborative debugging. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18977)
* Upgrade uni-app x AI repair plug-in [Details](https://ext.dcloud.net.cn/plugin?id=23720)

## 4.72.2025061803-alpha
### HBuilder
* Optimized the comparison interaction UI when replacing file contents in the HBuilderX AI plugin.[Details](https://doc.dcloud.net.cn/uni-app-x/tutorial/bug_repair.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18721>
* Fixed an issue where formatting code in Kotlin files of uni-app (x) uts plugins on Windows resulted in garbled Chinese characters. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18019)
* Fixed an issue where some class members were lost when parsing JAR files in the uni-app (x) uts plugin. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=18571)

## 4.71.2025061206-alpha
### HBuilder
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
### HBuilder
* Fixed some bugs

## 4.62.2025041603-alpha
### HBuilder
* Adjust secure packaging apktool update to solve 2.11.1, peace of mind when packaged ` android: foregroundServiceType Bug ` parameter values will be changed [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16895)
* Fixed the bug that Git plugin version 4.61 causes an extra terminal to open when using Git to commit on the Mac platform. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16952)
* Language Server: Fixed a Bug where language service prompts Could not find source file when quickly opening and closing files [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* Language Server: Fixed the bug in the UniApp X project where the path to the Vue file cannot be navigated to its definition. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=16879)
* Language Server: Added When hovering over the grayed-out code blocks in the UniApp X project due to conditional compilation, a prompt should be displayed. [Details](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91%E4%BB%A3%E7%A0%81%E5%9D%97%E7%BD%AE%E7%81%B0)

## 4.61.2025040322-alpha
### HBuilder
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
### HBuilder
* Fixed some bugs

## 4.54.2025030608-alpha
### HBuilder
* Fixed some Bugs

## 4.53.2025022409-alpha
### HBuilder
* Fixed some Bugs

## 4.52.2025020807-alpha
### HBuilder
* Fixed some Bugs

## 4.51.2025012123-alpha
### HBuilder
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
### HBuilder
* Language Server: Fixed a bug in version 4.41 where opening Vue files in uni-app projects occasionally caused the language service to fail to find getOptionsDiagnostics [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14778)
* uni-app: Fixed a bug in macOS version 4.29 where exporting WGT with native obfuscation for JS/NVUE files failed. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14682)
* uni-app: Fixed a bug in macOS version 4.41 where uni-app CLI projects running on mobile devices would hang during compilation on some computers due to the inability to retrieve the system Node.js path. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14754)
* uni-app: Added support for disabling the runtime log echo to the HBuilder console when running uni-app projects in WeChat, Baidu, Alipay, or Douyin Mini Program Developer Tools. [Details](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* uni-app: Fixed a bug in version 4.41 where running uni-app projects on WeChat Mini Programs failed to launch the developer tools in certain cases.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14830)
* uni-app: Fixed a bug in version 4.41 where the previously saved compilation mode was lost when running uni-app projects on WeChat Mini Programs.[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14822)
* uni-app: Adjusted the default value of the Node.js startup memory parameter in the HBuilderX settings for Uni-app compiler configuration to 3072 MB.

## 4.43.2024122419-alpha
### HBuilder
* Language Server: Optimize the language service uni-app x code hint performance

## 4.42.2024121808-alpha
### HBuilder
* Language Server: Fixed the bug where setTimeout in UTS files is incorrectly marked with an error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=14233)

## 4.41.2024121203-alpha
### HBuilder
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
### HBuilder
* Fixed some bugs.

## 4.35.2024112402-alpha
### HBuilder
* Fixed some bugs.

## 4.34.2024112020-alpha
### HBuilder
* Fixed some Bugs

## 4.33.2024111702-alpha
### HBuilder
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
### HBuilder
* Fixed the bug in version 4.31 that caused the cli package to prompt that the certificate alias cannot be empty [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11426)
* Fixed: The order of switching view files after restarting hx is inconsistent with that when shutting down [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11094)
* Language Server: Fixed the bug that the status bar reported an error when searching for files and triggering function signatures on Windows computers for the uts plug-in iOS platform [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=11428)

## 4.31.2024102414-alpha
### HBuilder
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
### HBuilder
* Harmony: Fixed a bug where the package generated by the release packaging function only contained template content but no application code [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8998)
* uni-app (x): Fixed the bug that the App content is not updated after switching projects when running uni-app (x) to iOS (18.0) simulator [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=9027)

## 4.27.2024091308-alpha
### HBuilder
* Adjusted the amazon-corretto plugin, upgraded from 11.0.14 to 17.0.12, and Windows from 32-bit to 64-bit [Details](https://hx.dcloud.net.cn/Tutorial/App/notsupportJava)
* Language Server: Fixed the bug caused by version 4.08, where the deleted id and class still exist in the code hint[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7293)
* Language Server: Fixed the bug of uts plugin reporting "Could not find source file" caused by version 4.25 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8029)
* Language Server: Fixed the bug of invalid reference search in uniapp x project caused by language service version 4.25 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=8134)
* Adjust the uts plugin, uts Android plugin development configuration items to Settings-Run Configuration [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* uni-app (x): Fixed the bug that the Run menu does not respond after renaming the project in uni-app (x) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7700)

## 4.26.2024082213-alpha
### HBuilder
* Fixed the bug caused by version 4.0 that in some cases, when uniapp is released to H5, clicking the menu does not respond. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7071)
* Language Server: Fixed a bug caused by version 3.5.3, in some cases, the style attribute selector completion item prompt was incorrect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=7072)

## 4.25.2024081703-alpha
### HBuilder
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
### HBuilder
* Language Server: Fixed the bug introduced in version 4.18, when the uniapp x project uses object literals, the defined objects do not have UTSJSONObject type hints [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2781)
* uni-app (x): Fixed the bug that the log printed to the iOS console cannot be redirected[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1288)
* uni-app (x): Fixed the bug introduced in version 4.18, where the release/upload of the website to the server was stuck at the beginning of packaging [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2713)
* uni-app (x): Optimize the format of the log output in the console of the uts plugin when running on iOS
### uni-app-x
* Web: Fixed the bug of built-in browser white screen in the development stage caused by version 4.22 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2722)
* Web: Fixed the bug that canvas API provided by version 4.21 lacks toDataURL/toBlob methods [Details](https://doc.dcloud.net.cn/uni-app-x/component/canvas.html)
* Apb: Adjust the devicePixelRatio attribute type in the returned data of API uni.getDeviceInfo to number [Details](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC)
### uts
* App-iOS: Added UTSJSONObject to support static methods such as assign and keys [Details](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
* App-iOS: Fixed a bug that may cause a crash if UTSJSONObject contains Map type data [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2047)
### uniCloud
* Fixed the bug in version 4.22 that the default connection address of Alipay Cloud WebSocket is not the wss protocol [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2725)
* Optimize the upload speed and upload stability of the upload web front-end hosting to reduce the number of upload failures

## 4.22.2024062415-alpha
### HBuilder
* Language Server: Fixed the bug that an error message is reported when a literal object is assigned to the union type of UTSJSONObject and null in the language service uniapp x project [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2584)
* Fixed the bug that when checking the old version of DCloud certificate in the uni-app old project's safe packaging, the prompt "Custom base does not support safe packaging, please switch to normal packaging" is incorrect
### uni-app
* Web, App-vue: Fixed input in type= "digit". Enter the empty Bug when entering the decimal point with the initial value. [Details](https://ask.dcloud.net.cn/question/193171)
* Web: Fixed the bug that the scroll position could not be remembered when switching TabBar [Details](https://ask.dcloud.net.cn/question/193400)
### uni-app-x
* Web: Fixed input in type= "digit". Enter the empty Bug when entering the decimal point with the initial value. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2601)
* Web: Fixed the bug that the scroll position cannot be remembered when switching TabBar [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2516)
* App-Android: Fixed a possible memory leak in the responsive API [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2543)
* App-Android: Fixed the bug that the display state of component switch may be incorrect in list-view component [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2482)
* App-iOS: Added uni-ad splash screen ads [Details](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
* App-iOS: Added uni-ad rewarded video ads [Details](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html)
* App-iOS: Fixed the bug that the text of the component button is displayed repeatedly when the text is set dynamically [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2507)
* App-iOS: Fixed the API uni.setTabBarStyle parameter backgroundImage invalid bug [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2523)
* App-iOS: Fixed the bug of custom component style pollution [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2592)

## 4.21.2024061818-alpha
### HBuilder
* Language Server: Added support for code prompts when referencing plugins when type declaration files exist for encryption plugins
* Language Server: Added status bar prompts and quick bug reporting when serious errors occur
* Language Server: Fixed a bug that caused occasional language service errors when the referenced file path was inconsistent with the local real path in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2468)
* Language Server: Fixed the bug that the ext api is not prompted when there is only one uni. in the uni-app page [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2503)
* Fixed the bug that caused markdown preview hot update failure in version 4.18 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2467)
### uni-app
* Web: Fixed the bug that in Vue3 project dark mode, if the path of the tabbar iconPath or selectedIconPath or midButton -> backgroundImage configured in theme.json does not start with /, the image 404 will not be displayed in the release mode[Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2472)
* Web: Fixed Bug of decimal point cannot be deleted when input type= "digit" in iOS 16 system [details] (https://ask.dcloud.net.cn/question/193171)
* Mini Program: Fixed the bug that the user project route ended with App.vue and was incorrectly identified as the main entrance [Details](https://ask.dcloud.net.cn/question/192513)
* Mini Program: Fixed the bug that does not support users passing `transformAssetUrls.tags` [Details](https://github.com/dcloudio/uni-app/pull/4980)
* WeChat Mini Program: Fixed the bug that caused errors when using `uni://form-field` [Details](https://github.com/dcloudio/uni-app/issues/4960)
* Bytedance Mini Program: Fixed a bug that the relevant life cycle did not take effect when virtualHost was enabled [Details](https://ask.dcloud.net.cn/question/192502)
* App-iOS: Fixed Bug of decimal point cannot be deleted when input type= "digit" in iOS 16 system [details] (https://ask.dcloud.net.cn/question/193171)
### uni-app-x
* Web: Fixed a bug in dark mode where the image 404 is not displayed in release mode when the path of the tabbar iconPath or selectedIconPath or midButton -> backgroundImage configured in theme.json does not start with / [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2472)
* App-Android: Adjust the background color of the system bottom bar to be consistent with the backgroundColorContent color of the page [Details](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-tips)
* App-Android: Fixed the bug that the offline packaging number type judgment may be inconsistent with the cloud packaging result [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2422)
### uts
* App-Android: Fixed the bug that the result of judging equality of optional number type may be incorrect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2439)
* App-Android: Fixed the bug that the object property returned by UTSJSONObject through getXXX method is not a reference [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2340)
* App-Android: Fixed a bug where the numeric type returned by JSON.parse was printed incorrectly via console.log [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2427)
* App-iOS: Fixed the bug introduced in version 4.18 that the style set when using the uts component plug-in may be overwritten by the default style [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2411)
### uniCloud Plugins
* Adjustment: Only some fields are retained in the clientInfo of the client requesting cloud functions and cloud objects, and information such as oaid and safeAreaInsets are removed to avoid alarms in vivo stores. [Details](https://doc.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
### App Plugins
* Android platform: updated the statistics module Google channel Umeng statistics SDK to version 9.6.8 to solve the problem that it may not pass the GooglePlay review [Details](https://ask.dcloud.net.cn/question/189922)
* iOS platform: Fixed a bug that may cause occasional crashes in certain scenarios [Details](https://ask.dcloud.net.cn/question/191578)

## 4.19.2024060704-alpha
### HBuilder
* Language Server: Fixed the bug that there is no CSS hint in the markdown code area [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2230)
### uni-app-x
* App platform Added uniCloud.chooseAndUploadFile support for choosing video and uploading [Details](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/storage.html#chooseanduploadfile)

## 4.18.2024060311-alpha
### HBuilder
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
### uni-app-x
* Adjust the vue framework validateProp function, no warning when required prop has default value [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1600)
* Web Platform Added Support for server-side rendering (ssr) [details](https://doc.dcloud.net.cn/uni-app-x/web/ssr.html)
* Web platform Adjust Remove the `color: black` style from the root nodes of the uni-text, uni-input, uni-textarea, and uni-view components
* Web Platform Fixed the bug that default background colour of pages.json dropdown refresh is not transparent [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1726)
* Web Platform Fixed a bug in component input/textarea where setting modelValue and value at the same time does not show the same effect [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
* Web Platform Fixed a bug that the component list-item is not displayed in list-view when it is included in a custom component [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2199)
* Web Platform Fixed bug that some properties are missing in API uni.getAppBaseInfo, uni.getSystemInfo [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1917)
* Web Platform Fixed the bug that the size attribute returned by API uni.getVideoInfo is not in KB [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2250)
* Web Platform Fixed the bug that the object obtained by API $getPageStyle is not UTSJSONObject [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1916)
* App-iOS Platform Fixed The onShow life cycle is fixed to trigger after onCreate instead of triggering when the page is animated. [Details](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
### uts
* Web Platform App-iOS Platform Adjust uts compiled to js any type adjusted to include null type [Details](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#any%E7%B1%BB%E5%9E%8B)
* Web platform App-iOS platform Fixed the bug when JSON.parse passes generic type as Map [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1985)
### uniCloud
* Adjust Client calling local cloud function automatically switches to connect to cloud cloud function if it cannot connect to local debugging service.
* Optimize Extended storage adds new console interfaces getDomains, getCdnTop, which can be used to listen to cdn traffic in real time [Details](https://doc.dcloud.net.cn/uniCloud/ext-storage/dev.html#getdomains)
* Optimize Extended storage adds CDN traffic monitoring alarm timed task templates [Details](https://doc.dcloud.net.cn/uniCloud/ext-storage/dev.html#cdnsecurewarn)
* Fixed the bug that ip anti-scrubbing does not work under some conditions [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2063)
* Fixed the bug of npm install error when uploading cloud functions [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2180)
* Fixed the bug that the initialization wizard did not upload the configuration of schema extension js [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2289)
* Fixed the bug that Alipay Cloud is not supported when importing plugins [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=2290)

## 4.17.2024051110-alpha
### HBuilder
* Language Server: Fixed the bug that when the "@/" form is used to reference the default package name "index.ts" or "index.js" in the language service uni-app project, there is no code prompt and syntax verification error. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1934)
* Fixed the bug that there is no running log in uni-app x, real machine, iOS simulator after modifying uts plug-in and re-signing the base console [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1963)
* Fixed the bug caused by uni-app (x) 4.13, Node upgrade, causing the UTS plug-in Android debug to be unusable [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1979)
### uni-app
* Fixed the bug that the input event cannot be triggered when the input component type="number" introduced in 4.16 [Details](https://ask.dcloud.net.cn/question/190631)
* JD Mini Program fix the bug that the @input method of the input component of the Vue3 project does not trigger [Details](https://ask.dcloud.net.cn/question/190631)
### uni-app-x
* Web platform Fixed the bug that the input event cannot be triggered when the input component type="number" introduced in 4.16 [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1960)

## 4.16.2024051009-alpha
### HBuilder
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
### uni-app plugin
* Web Platform Fix The bug that some event listener report an error in version 4.11. [Details](https://ask.dcloud.net.cn/question/190670)
* Web Platform Fix The bug that using v-bind in css and the value contains rpx is invalid in version 4.11. [Details](https://ask.dcloud.net.cn/question/190828)
* Web Platform Fix The bug that running ssr project report an error in version 4.14. [Details](https://ask.dcloud.net.cn/question/190830)
* App Platform Fix The bug that scroll-view refresher style loss in version 4.11. [Details](https://ask.dcloud.net.cn/question/190805)
* Fixed the bug that decimal point cannot be input on Web and App when input component type="digit" [Details](https://ask.dcloud.net.cn/question/190763)
### uni-app x plugin
* Web Platform Add New API UniResizeObserver to monitor size changes of UniElement elements [details] (https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
* Web Platform Add setPageStyle, getPageStyle support backgroundColorContent property [details](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
* Web Platform Fix The bug that using v-bind in css and the value contains rpx is invalid in version 4.11. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1830)
* App-iOS Fixed The number of onShow triggers is incorrect when the Tab page is created. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1809)
* App-iOS Fixed Call uni.createWebViewContext print warning. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1902)
### uniCloud插件
* Fix Bugs where cloud functions call other cloud functions and report errors when calling local cloud functions in version 4.13. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1708)
* Add The uni-app-x project supports multiSend [Details](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/database.html#multisend)

## 4.14.2024042905-alpha
### HBuilder
* Fixed In some cases, when closing a modified file, the pop-up box will crash when saving.  [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1648)
* Fixed a bug that would cause some plug-in installations to fail when package.json, package-lock.json, and node_modules exist in the upper-level directory of the HBuilderX installation directory. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1649)
* Language Server: Fixed a Bug in windows platform where the selection of syntax hints in uni-app x projects and the validation platform did not take effect in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1653)
* Fixed the App cloud packaging uni-app project, the bug is always stuck at 40% after submitting the package [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1630)
* Fixed the bug of upload failure when the `uni_modules` plug-in introduced in version 4.13 contains the uni_modules.config.json script
### uni-app
* Mini Program platform fixes the Bug of Pinia compilation errors caused by version 4.13 [details] (https://ask.dcloud.net.cn/question/190295)
* Alipay Mini Program platform adds support for join-group-chat and other open components [details] (https://ask.dcloud.net.cn/question/190053)
### uni-app x plugin
* Web platform Fix The Bug that using $setPageStyle to dynamically modify enablePullDownRefresh to true is invalid. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1632)
* App.uvue, a new entry to App-iOS platform, supports multiple style tags.
* App-iOS platform repair component scroll-view custom drop-down refresh may cause some elements not to display Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1669).
* App-iOS platform repair component swiper Bug where the first swiper-item content is not displayed in some cases [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1618).
* App-iOS platform fixes Bug that crashes abnormally when API uni.uploadFile uploads multiple files [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1625).
* App-iOS platform fixes CSS background-image invalid Bug in some cases [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1667).
* App-iOS platform fixes Bug where CSS border-radius dynamic settings may not take effect [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1619).
* App-iOS platform fixes the transform animation of CSS transition. If the translate value is set to a percentage, the animation effect is incorrect Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1633).
* App-iOS platform fixes Bug with incorrect deployment style when CSS border-color is running [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1537).
* App-iOS platform fixes Bug with incorrect keep-alive rendering results [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1627).
* App-iOS platform fixed Bug where some of the components written below iOS15 will cause page initialization error [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1671))

## 4.13.2024042321-alpha
### HBuilder
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
### uni-app
* The Vue3 project upgraded the compiler dependent vite version to 5.2.8
* The WeChat mini program platform has added support for Skyline built-in components: drag sheet, grid builder, list builder, nested scroll body, nested scroll header, open container, share element, snapshot, span [details](https://ask.dcloud.net.cn/question/178372)
* Baidu Mini Program Platform Fixes the Issue of Icons Not Displaying Due to Incorrect Path for Introducing Public Static Resources [Details](https://ask.dcloud.net.cn/question/189033)
* Web platform Fix A bug in onNavigationBarSearchInputClicked lifecycle that does not trigger in some browsers [Details](https://ask.dcloud.net.cn/question/189465)
### uni-app x plugin
* Add API $getPageStyle and $setPageStyle, get and set the page style for pages.json [Details](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html)
* Adjust Cloud objects and functions can be invoked with generics. [Cloud object API](https://doc.dcloud.net.cn/uni-app-x/api/uniCloud/object.html), [Cloud function API](https://doc.dcloud.net.cn/uni-app-x/api/uniCloud/function.html)
* vue Added Web platform, App-iOS platform Complementing $callMethod supports calling defineExpose export methods. [Details](https://doc.dcloud.net.cn/uni-app-x/component/#callmethod)
* Web platform, App-iOS platform Fix The bug that with no parameters and one parameter are not supported when constructing UniError [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1455)
* Web platform Fix The use of v-bind in CSS is invalid. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1370)
* Web platform Fix backgroundColorContent displays an incorrect height. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1427)
* Web platform Fix The dynamic switching of autoHeight property of textarea component does not take effect in real time [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1502)
* Web platform Fix The bug that cursor style is invalid when textarea and input component is disabled.
* Web platform Fix The request api returns UTSJSONObject when response data is an array [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1582)
* Web platform Adjust The style of UI APIs (showLoading, showToast, showModal, and showActionSheet) align to the app side.
* App-Android platform Fix A bug occurs during build project on cloud when the project contains cloud objects but uniCloud is not used on the project.
* App-Android platform after repair the uts packaging custom plugin base, compile error depends on can't find the Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1379)
* App-Android platform repair ref type data interpolation shown on the template is not correct the Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1344)
* App-Android platform fixed when script setup defined ref type binding v-model, Compile possible error Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1338)
* App-Android platform repair script function declarations under setup cannot recursive call Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1312)
* App-Android platform fixed a Bug where component view set overflow to visible outside the parent element area could not respond to click and touch events [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=157)
* App-Android platform fixed a Bug where the scroll-view subelement setting overflow to visible did not take effect [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1175)
* App-Android platform fixed a Bug that the sticky header component might overlap with the list-view drop-down refresh area after petting [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1242)
* App-Android platform fixes bugs that may be overwritten by list-view in some scenes after sticky-header capping [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1241)
* App-Android platform fixed a Bug where a drop-down refresh after swiper nested scroll-view could prevent swiper from sliding left and right [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1231)
* App-Android platform repair component input, textarea in some cases may be input method keep out bugs [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=947)
* App-Android platform repair component textarea set auto - height resulting in abnormal high Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
* App-Android platform width of the slider to change or repair components after the change of the parent container size display confusion of Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=296)
* App-Android platform fixed a bug in the 4.11 release of CSS transition-duration that the transform might not execute when set to 0ms [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1473)
* New API UniResizeObserver for App-Android platform to monitor size changes of UniElement elements [details] (https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
* App-Android API FileSystemManager supports file operation methods such as appendFile and readCompressedFile [details] (https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
* App-Android platform repair exit when the application may have temporarily show bad Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=896)
* App - iOS new onPageScroll life cycle [details] (https://doc.dcloud.net.cn/uni-app-x/page.html)
* The filePath attribute of API uni.downloadFile added to the App-iOS platform supports uni.env
* App - iOS new CSS transition - property support all | none [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1381)
* App - click on the iOS platform to repair the slider component slides will not trigger a change event Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1485)
* App - iOS repair component scroll - view because calculation accuracy problems may lead to vertical and horizontal sliding Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1463)
* App-iOS platform fixed the Bug that the height of the text component was not normal when it set the value of line-height without unit through class [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1458)
* App - iOS repair components switch parent element has a click event cannot respond click gesture Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1475)
* App - iOS repair component textarea set cursor attributes will trigger the Bug of focus [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1465)
* App-iOS platform fixed a Bug where the cursor color turned white when textarea set CURSOR-color to null [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1469)
* App - iOS repair component textarea set auto - height resulting in abnormal high Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
* web App - iOS repair components - the view does not trigger the load event of Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1322)
* web App - iOS repair components - the view does not trigger the load event of Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1322)
* App-iOS platform fixed a Bug where the progress component was initialized incorrectly
* App-iOS platform fixes a Bug where component nested child component styles cannot inherit parent component styles
* App-iOS platform fixed a Bug where the picker-view initialization assignment could not be performed immediately
* App - iOS repair CSS element width or height of 0 when set the background gradient leads to the application of flash back Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1471)
* - iOS App to repair the CSS box - shadow set to none may show the white shadow Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1467)
* App-iOS platform fixed the Bug that the CSS backgroundColor lacked transparency when doing transition animation, causing the color to be incorrect [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1468)
* App-iOS fixed a Bug where border-radius was invalid when CSS border-style was solid and border-width was set [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1470)
* App-iOS platform fixed a Bug where the DrawableContext set font failed when the font information (such as "13px Arial") was present [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1472)
* App-iOS platform fixes Bug where event bubbling may stop automatically in some cases
* App-iOS platform fixed a Bug where v-modol was invalid when input component type attribute was dynamically assigned
* App-iOS platform fixes Bug where selectorQuery.in passed component instances are invalid
### uts plugin
* App platform to repair the regular expression contains double quotation marks when the compiler error Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1428)
* App - iOS repair if the else empty statement compiling error Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1351)
* App - iOS to repair the class definition a no-parameter constructor when compile error Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1342)
* App - iOS to repair the class definition of the Boolean type getters, setters when compile error Bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=1332)
### App plug-in (including 5+App and uni-app App)
* [important] iOS support new privacy listing, meet Appstore from May 1 new compliance requirements [documents] (https://uniapp.dcloud.net.cn/tutorial/app-ios-privacyinfo.html)
* Update uni-AD module Kuaishou Advertising and Kuaishou Integration Alliance SDK for Android version 4.14.32; Google AdMob SDK for iOS is version 11.2.0
* iOS platform update push module FCM SDK is version 10.23.1
* iOS platform updated statistics module Google Statistics SDK for version 10.23.1
* iOS platform updates the login module Facebook SDK to version 17.0.0; The Google SDK is version 7.1.0
* iOS platform fixed the Bug that the offline SDK integrated PDFNet.framework runtime flashed
* iOS platform fixed one-click login mobile phone card after changing the card to call one-click login again, the login information is still the previous mobile phone card Bug

## 4.12.2024041009-alpha
### HBuilder
* Added bug feedback plug-in uni-app x classification, supports web and iOS platform, and allows multiple selections
* Language Server: Adjust the language service and upgrade the d.ts version of the built-in vue framework from 3.2.26 to 3.4.21
* Language Server: Fixed language service uvue tag syntax verification bug that falsely reports that v-slot and v-bind are not recognized
* Fixed a bug that may cause HBuilderX to crash in some cases when right-clicking on the editor and `Find References` [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1246)
* Fixed the bug of unsaved tag cards, in the inactive state, the modified content is not restored correctly after exiting and reopening HBuilderX [Details](https://issues.dcloud.net.cn/pages/issues/detail?id =1317)
* Fixed a bug in the editor floating prompt, where the link color in the prompt message is not clearly visible under dark themes [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1094)
### uni-app x plugin
* Web platform Adjust Roll back the adjustment that HBuilderX 4.11 sets the default value of z-index to 0 [Details](https://doc.dcloud.net.cn/uni-app-x/css/z-index.html)
### uts plugin
* iOS platform Fix The bug that the object literal cannot be converted to a specified type when the type is imported from uni-module app-js [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1314)

## 4.11.2024040401-alpha
### HBuilder
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
### uni-app plugin
* Web platform Adjust The vue version has been upgraded from 3.2.47 to 3.4.21, which supports new features such as defineOptions, defineModel, and toValue.
* Web platform Fix The bug that vue3 version scroll-view cannot use custom refresher.
### uni-app x plugin
* Added Compiled to iOS platform
* Web platform Adjust The vue version has been upgraded from 3.2.47 to 3.4.21, which supports new features such as defineOptions, defineModel, and toValue.
* Web platform Add Page style and globalStyle support the backgroundColorContent property. [Details](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle)
* Web platform Add scroll-view and list view support custom dropdown refresh. [Details](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* Web platform Add list-view supports dropdown refresh of related properties and events. [Details](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
* Web platform Fix Bug with missing dy attribute for scroll-view component dropdown refresh related events. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=932)
* Web platform Fix Bug with invalid style for child elements within the navigator component. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1025)
* Web platform Fix Bug where maxlength in input and textarea components cannot limit the value set in uts. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1204)
* Web platform Adjust The textarea and input maxlength attributes are adjusted to not limit the length when illegal values are passed in, and the default adjustment is to not limit the length.
* Web platform Adjust When the percentage attribute of the progress component passes in an illegal value, it shows 0%, which was previously NaN.
* Web platform Adjust The default z-index for built-in components and page containers has been adjusted from auto to 0.
* Web platform Adjust Adjust the font family of the body to `'-apply-system', HelveticaNeue;`, Consistent with system fonts on iOS.
### uts plugin
* Web platform Fix Default value cannot overwrite null bugs during destructuring. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1076)
### uniCloud plugin
* Fixed the bug caused by version 4.07 that cannot be uploaded to front-end web hosting [Details](https://ask.dcloud.net.cn/question/188503)

## 4.07.2024032807-alpha
### HBuilder
* Fixed the bug that when uni-app is run on a real machine and the simulator supports multi-cpu architecture, the standard base falsely reports that it is not supported [Details](https://ask.dcloud.net.cn/question/186863)
* Fixed the bug that when the built-in browser of uni-app is opened, switching files causes unrunning projects to run automatically [Details](https://ask.dcloud.net.cn/question/188432)
* Fixed the bug that the release directory prompt of the uni-app cli project is that the web is actually packaged into h5 [Details](https://ask.dcloud.net.cn/question/188468)
* Fixed the bug that the custom running of uni-app to web package.json does not take effect when running to the built-in browser [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1084)
### uni-app plugin
* Web, App platform, Fixed the bug in version 4.06 where the border style was incorrect after changing the button's border-radius [Details](https://ask.dcloud.net.cn/question/188417)
### uni-app x plugin
* Web platform, Fixed the bug in version 4.06 where the border style was incorrect after changing the button's border-radius

## 4.06.2024032403-alpha
### HBuilder
* Fixed the bug caused by version 4.05 when importing project templates from the plug-in market and incorrectly prompting that the project template is invalid
* Fixed the bug introduced in version 4.02, uni-app console, the printed log jump cannot use the json to type function after opening the file [Details](https://issues.dcloud.net.cn/pages/issues/detail ?id=999)

## 4.05.2024032021-alpha
### HBuilder
* Fixed the bug that the uni-app (x) project may falsely report that the `uniapp-extension` plug-in has been tampered with when HBuilderX is first started.
### uni-app x plugin
* Web platform Fixed In some cases, the picker-view and picker-view-column values are displayed incorrectly, and the change event is triggered. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=1009)

## 4.04.2024031519-alpha
### HBuilder
* Fixed the issue where when uni-app is released to the web and tree-shaking optimization is turned on, it prompts that the compilation is successful but there is no file. [Details](https://ask.dcloud.net.cn/question/187418)
* Plug-in: New im-notifier plug-in Receive new message notifications from uni-im and prompt users [Details](https://ext.dcloud.net.cn/plugin?name=im-notifier)
### uni-app plugin
* Web platform Fixed The previous page is blank during iOS safari gesture back [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=941)
* Weixin Mini Program Added uni.requestVirtualPayment API [Details](https://uniapp.dcloud.net.cn/api/plugins/virtualPayment.html)
### uni-app x plugin
* Web platform Optimized Reduce compilation time
* Web platform Fixed Api uni.rpx2px report an error after the project is released [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=930)
* Web platform Fixed An error is reported by using instanceof UniXXXElement [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=940)
### uniCloud Plugin
* Plug-in: uni-pay supports virtual payments for WeChat mini programs [Details](https://doc.dcloud.net.cn/uniCloud/uni-pay/wxpay-virtual.html)
* Added uni-pay-x, uni-app x version of uni-pay [Details](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app-x.html)

## 4.03.2024031101-alpha
### HBuilder
* Language Server: UTS plugin, Auto-importing packages without a newline after the first line when no other import nodes exist in the current file.
* Language Server: uts syntax check, When the function parameter type is `UTSJSONObject`, when calling the function and using a literal object to pass parameters, a false positive type mismatch bug occurs
* Language Server: uts syntax check `instanceof` does not allow the type defined by type to be used as a value.
* Mobile App Playground: Fixed uni-app, after the iOS standard base is signed, it will not be automatically deleted during the next upgrade, causing the re-signed base that runs after the upgrade to be a bug in the previous version
* Mobile App Playground: Fixed the bug of uni-app x custom debugging base. After upgrading HBuilderX, the base version mismatch was not prompted.
### uni-app plugin
* Web platform Fix the bug of conditional compilation failure for .scss files in Vue3 project.
### uni-app x plugin
* Fixed the bug where conditional compilation was not effective during pre-check in pages.json. [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=909)
* Web platform Adjust When running to the browser, compile the code in the script tag into compatible code that can be run in earlier browsers
* Fixed the bug on the App-Android platform where conditional compilation in APP-PLUS was effective.  [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=910)
### uniCloud plugin
* Fixed the bug caused by version 3.98 that caused the cli project to be unable to download to the specified location when downloading cloud functions or public modules
* Fixed the bug caused by version 4.02 that dependencies are not automatically installed when uploading public modules
* Fixed the bug caused by version 4.02 that the uni_modules.platforms.cloud field in the package.json file of the uni_modules plug-in is not configured with a cloud vendor, resulting in the uniCloud directory of the plug-in not being displayed in the uniCloud virtual directory [Details](https://ask .dcloud.net.cn/question/187371)

## 4.02.2024030621-alpha
### HBuilder
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
### uni-app plugin
* App platform Fixed the bug of compile error in nvue page of Vue2 Cli project [Details](https://ask.dcloud.net.cn/question/186784)
* App-Android platform Added API uni.getChannelManager to get the notification channel manager [Details](https://uniapp.dcloud.net.cn/api/plugins/push.html#getChannelManager)
* App-Android platform, fix the first installation call uni.scanCode may have a black screen bug [details](https://ask.dcloud.net.cn/question/185913)
* Web Fixed the bug of Vue3 project automation testing element.input method error [Details](https://ask.dcloud.net.cn/question/184815)
* TikTok Mini Program Added The component supports virtualHost configuration [Details](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#其他配置)
* TikTok Mini Program Fixed the bug of attribute loss when Vue3 project uses plug-in [Details](https://ask.dcloud.net.cn/question/185513)
* TikTok Mini Program Fixed the bug in Vue2 project using internationalization error [Details](https://ask.dcloud.net.cn/question/161008)
### uni-app x plugin
* Web, App-Android platform, Fixed UniElement The tagName and nodeName is not consistent with the component name [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=766)
* Web, App-Android platform, Fixed The bug that $parent does not skip the built-in components [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=773)
* Web, App-Android platform, Added API uni.rpx2px [Details](https://doc.dcloud.net.cn/uni-app-x/api/rpx2px.html)
* Web platform, Added The list-view and list-item components are supported [Details](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
* Web platform, Added The sticky-section and sticky-header components are supported [Details](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
* Web platform, Fixed In some scenarios, the type inference does not use the object literal as UTSJSONObject [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=819)
* Web platform, Fixed The bug that prevents instances from being created correctly when any[] is included in the type literal [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=767)
* Web platform, Fixed The bug that does not automatically create an instance when a variable is declared as non-globally declared type [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=782)
* Web platform, Fixed The bug that $forceUpdate failed to update the contents of the built-in component slot [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=776)
* Web platform, Fixed The bug that the exported type cannot be found when the newly exported type in the hot-update UTS file is used [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=823)
* Web platform, Fixed The request, uploadFile, and downloadFile APIs timeout immediately when timeout parameter is null [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=805)
* App-Android platform, add API uni.requestPayment, support Alipay payment [details](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
* App-Android platform, adjustment, component button is a native implementation, which solves the problem that the actual rendering width and height are inconsistent with the web side [details](https://doc.dcloud.net.cn/uni-app-x/component/button.html)
* App-Android Fixed An error is reported when you associate a unicloud space with another project and use a cloud object in it [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=817)
* App-Android platform, fix the bug that the component width is incorrect when the component text has no text content [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=777)
* App-Android platform, fix, component text subcomponent setting background-color style invalid bug [details](https://issues.dcloud.net.cn/pages/issues/detail?id=276)
* App-Android platform, fix the bug that the component text subcomponent cannot modify the text content [details](https://issues.dcloud.net.cn/pages/issues/detail?id=562)
* App-Android platform, fix the bug that the component image request network picture cannot share cookies [details](https://issues.dcloud.net.cn/pages/issues/detail?id=820)
* App-Android platform, fix the bug that the dynamic adjustment of the width and height of the component list-item does not take effect [Details](https://ask.dcloud.net.cn/question/185517)
* App-Android platform, fix, component list-view part of the scene modification refresher-triggered attribute value may not take effect Bug [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=796)
* App-Android platform, fix The component list-view reports an error when deleting slot sub-elements in some cases [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=769)
* App-Android platform, fix the bug that API uni. setNavigationBarColor cannot set the background color of the system status bar when customizing the navigation bar [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=821)
* App-Android platform, fix the bug that the z-index property is invalid after the position property is set to fixed in the CSS 4.0 version [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=726)
* App-Android platform, updated, cloud packaging environment compileSdkVersion is 34
* App-Android platform, fix the bug that clicking tab switch crashes when tabBar configures pagePath incorrectly [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=779)
* App-Android platform, fix the bug that may compile an error when using UTSAndroid.getJavaClass to get imported classes [details](https://issues.dcloud.net.cn/pages/issues/detail?id=809)
* App-Android platform, fix unicloud-db component, use setup syntax, the bug that data cannot be used in the scope slot [details](https://issues.dcloud.net.cn/pages/issues/detail?id=761)
* App-Android platform  fix A bug occurs when a numeric error code is returned by a cloud object [details](https://issues.dcloud.net.cn/pages/issues/detail?id=840)
* App-Android platform, optimize the construction of type-type responsive objects, avoid the use of reflection, and optimize performance
### uts plugin
* Android platform, add'typeof 'operator to support platform-specific character type'Char' [Details] (https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
* App-Android platform, fix the bug that the constructor uses super to report an error when locally defining a class [Details] (https://issues.dcloud.net.cn/pages/issues/detail?id=802)
* App-Android platform, add interface.uts file to support export declare syntax [Details] (https://issues.dcloud.net.cn/pages/issues/detail?id=744)
* App-Android platform, fix import * as Types from'xxx 'import type compilation error bug [details] (https://issues.dcloud.net.cn/pages/issues/detail?id=696)
* App-iOS platform, add @UTSiOS.keyword ('fileprivate') annotation to solve the access control of custom swift classes and properties
### uniCloud plugin
* Added `uniCloud.httpProxyForEip.get` API to support headers field
* Fixed the bug that the cloud function will still be uploaded after failure to install dependencies when uploading cloud functions
* Fixed the bug that the node_modules directory would not be removed when uploading public modules
* Fixed the bug that the geographical location query/index API cannot be used when running locally
* Fixed the bug that the associated service space is not displayed when opening the cloud space again after the project is closed [Details](https://ask.dcloud.net.cn/question/186741)
* Fixed the bug that the unicloud directory is incorrectly recognized when running associated with other projects
* Fixed the bug of no response when clicking the associated service space when not logged in
* Fixed the bug that the virtual directory cannot be displayed correctly when Alipay Mini Program Cloud, Alibaba Cloud, and Tencent Cloud spaces exist at the same time
* Adjust Aliyun The size limit of URL request body is adjusted from 1 MB to 2 MB, and the size limit of response body is adjusted from 1 MB to 2 MB

## 4.01.2024020211-alpha
### HBuilder
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
### uni-app plugin
* Web Fixed the bug of Vue3 project ssr running error [Details](https://ask.dcloud.net.cn/question/185205)
* Web Fixed the bug of Vue3 project ssr packaging error [Details](https://ask.dcloud.net.cn/question/184125)
* Web Adjust The A label in the node rendered by the navigator component is moved from the outside of the uni-navigator label to the inside of the uni-navigator label.
* App Fixed the bug that the nvue page of the Vue2 project cannot reference static resources in non-static directories.
### uni-app x plugin
* Web Adjust The A label in the node rendered by the navigator component is moved from the outside of the uni-navigator label to the inside of the uni-navigator label.
* Web Adjust When the getStorage and getStorageSync operations return data of the object type, it is converted to the UTSJSONObject type
* Web Adjust The data returned by the request operation is converted to the UTSJSONObject type
* Web Fixed Unused easycom components contain errors or unsupported usage on the web side that cause compilation errors
* Web Fixed In some scenarios, an error occurs when using the literal value of an object as a specified type.
* Web Fixed When referencing a .uvue file, the module cannot be found without a suffix.
* Web Fixed In some scenarios, the conditional compilation in the uts file is invalid.
* Web Adjust Type validation failures are adjusted from an error to a warning without interrupting compilation.
* Web Added Map types are supported when binding classes and styles.
* App-Android platform, fix the bug that occurs when deleting child elements inside slots of special elements (list-view, etc.) [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=388)
### uniCloud Plugin
* Fixed The security network client verification function cannot be used caused by version 3.97.

## 4.0.2024012711-alpha
### HBuilder
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
### uni-app Plugin
* App-Android platform, fix the bug that the location list cannot be obtained after the first call of uni.chooseLocation after installation [details](https://ask.dcloud.net.cn/question/183239)
* App-Android platform, fix the bug that the outer swiper cannot slide when the nvue swiper component is embedded in the swiper setting disable-touch
* Web platform, new vue3 scroll-view component supports show-scrollbar attribute
* Web App-Vue Added input component supports cursor-color attribute. [Details](https://uniapp.dcloud.net.cn/component/input.html#input)
* Web App-Vue Added textarea component supports cursor-color attribute. [Details](https://uniapp.dcloud.net.cn/component/textarea.html#textarea)
* Web Fixed the bug of duplicate static resources after packaging the Vue2 project. [Details](https://ask.dcloud.net.cn/question/184480)
* Web Optimize the vue3 project getCurrentPages() returns the options property. [Details](https://ask.dcloud.net.cn/question/183580)
* Mini Program Fixed the bug of slow compilation when there are large base64 characters on the page. [Details](https://ask.dcloud.net.cn/question/4661)
* Weixin Mini Program Fixed the bug in the vue2 project where workers are configured as objects. [Details](https://github.com/dcloudio/uni-app/issues/4589)
* Weixin Mini Program Fixed a bug in Vue2 project where class line breaks cause errors in mini program compilation. [Details](https://ask.dcloud.net.cn/question/184192)
* TikTok Mini Program Fixed the bug with invalid rtc room component properties. [Details](https://github.com/dcloudio/uni-app/issues/4627)
* Alipay Mini Program platform, fix the bug that globalObjectMode is configured to enable compilation error [details](https://ask.dcloud.net.cn/question/183499)
* Alipay Mini Program platform, fix, native Mini Program component delivery props invalid bug [details](https://github.com/dcloudio/uni-app/issues/4376)
### uni-app x plugin
* [Important] Added, compiled to web platform [Details](https://doc.dcloud.net.cn/uni-app-x/web/)
* 【[Important] Adjust, add the Uni prefix to the component event type name to avoid conflicts with the browser global event [Details](https://doc.dcloud.net.cn/uni-app-x/component/common.html#rename-event-type)
* Added vue composite API [details](https://doc.dcloud.net.cn/uni-app-x/vue/#composition-api)
* Added vue built-in component KeepAlive [details](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
* Added vue built-in component Teleport [details](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
* Added vue watch to support deep and immediate configuration [details](https://doc.dcloud.net.cn/uni-app-x/vue/#options-api-compatibility)
* Added vue component props to support string array declaration, at this time all prop types are any | null [details](https://doc.dcloud.net.cn/uni-app-x/component/#props)
* Added css variable [details](https://doc.dcloud.net.cn/uni-app-x/css/#variable)
* Fix the bug that some components are nested, which makes it impossible to recycle when the page is closed [details](https://issues.dcloud.net.cn/pages/issues/detail?id=535)
* Compiler, fix the bug that APP-ANDROID and APP-IOS do not take effect in pages.json [details](https://issues.dcloud.net.cn/pages/issues/detail?id=523)
* App-Android platform, Fixed the bug where the template unexpectedly compiles an object into a map. [details](https://issues.dcloud.net.cn/pages/issues/detail?id=244)
### uts plugin
* Fixed An error was reported when compiling the array type of the special value field string.
### uniCloud Plugin
* Added Alipay Mini Program Cloud Database to support geographical location query
* Added: When running a cloud function, the console can click on the cloud function name to jump to the corresponding cloud function.
* Added: When the local node version of the cloud function is inconsistent with the cloud node version, uploading the cloud function will prompt the local node version and the cloud node version.
* Fixed the bug that the selected statement will not be executed in the JQL manager [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=534)
* Fix the bug that Alipay applet cloud Redis local debugging cannot run
* Fixed the bug that the front-end web hosting upload did not automatically select the service space bound to the current project
* Fixed a bug where associated projects can still be switched when switching cloud vendors in the associated service space
* Fixed the bug that the "upload schema extension js configuration" timeout was too short, causing the upload to fail.
* Fix the bug that projects created by cli cannot upload schema [Details](https://issues.dcloud.net.cn/pages/issues/detail?id=592)
* Fix the bug of invalid query using native MongoDB $ in Alipay Mini Program Cloud Database [Details](https://ask.dcloud.net.cn/question/183811)
* Fix the bug of JQL connection table query in Alipay Mini Program Cloud Database [Details](https://ask.dcloud.net.cn/question/185177)
* Fixed the bug that cloud functions can only be associated with public functions under uni_modules [Details](https://ask.dcloud.net.cn/question/184434)


## ReleaseNote
[https://download1.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_alpha_archive_en_2023.html](https://download1.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_alpha_archive_en_2023.html)
