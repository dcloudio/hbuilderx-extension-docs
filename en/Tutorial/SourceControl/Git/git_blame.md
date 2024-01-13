# Git Blame

HBuilderX 4.0+ supports Git Blame feature, which is enabled by default after installing the Git plugin. The Git plugin utilizes the external Git tool, so it requires the installation of the command line tool for [Git](https://git-scm.com/).

The Git Blame feature provides a convenient way for users to quickly view the last commit information of a specific line of code in a Git project, including the commit time, author, email, and commit message. It also allows for version comparison.
### Basic Usage
Place the cursor on a line in the editor, and the last commit information for that line will be automatically displayed at the end of the line.
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame1.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Hover Popup
When hovering over text, a popup window will appear displaying more detailed information.
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame2.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Send Email
When hovering over the name on the first line, you can view the author's email for that line of code. Clicking on it allows you to send an email to the author.
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame3.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Version Comparison
Clicking on the text at the bottom of the popup window will open a version comparison page, where you can see the specific changes made in that commit for the file.
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame4.png" style="border:1px solid #eee; border-radius: 5px;"/>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame5.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Settings
Access the settings from:
* Windows: Top Menu Bar -> Tools -> Preferences -> Plugin Configuration -> Git
* macOS: Top Left Corner HBuilderX -> Preferences -> Plugin Configuration -> Git

<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame10.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

Currently, there are three available settings:
1. Show only on the line where the cursor is (default)
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame7.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

2. Show on the selected line
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame8.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

3. Don't show (disable the feature)
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame9.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>