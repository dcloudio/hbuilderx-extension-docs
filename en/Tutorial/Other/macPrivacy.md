#MacOSX HBuilderX Project Manager no responding when clicking Solution @ Privacy

##Question

Recently, some users have encountered issues with the HBuilderX project manager project clicking 'not responding' and 'unable to expand the file list' after upgrading.

##Reason

MacOSX, some systems require authorization to access directories such as' Document ',' DownLoad ', and' Desktop '.

Note: When the operating system pops up and asks whether to run HBuilderX to access certain folders, be sure to click Allow.

<img src="/static/snapshots/tutorial/other/mac_privacy_ask. jpg" class="hd img" style="border radius: 25px;"/>

##Solution @ solution

Method 1: HBuilderX, Project Management, select the project, right-click on the menu [Remove Project], and then drag the project back into HBuilderX

Method 2: As shown in the following figure, open Operating System Settings ->Security and Privacy ->Privacy ->Files and folders, locate HBuilderX, and then check it.

<img src="/static/snapshots/tutorial/other/mac_privacy. jpg" class="hd img" style="border radius: 25px;"/>

Method 3:

HBuilderX official version: Close HBuilderX official version first, input following command and then enter on the command line:

```Shell

Tccutil reset All io.dcloud.HBuilderX

```



HBuilderX Alpha version: First close the HBuilderX Alpha version, input following command and then enter on the command line:

```Shell

Tccutil reset All io.dcloud.HBuilderXAlpha

```

Opening HBuilder again may cause a system inquiry box to pop up. At this time, please click Allow to authorize

<img src="/static/snapshots/tutorial/other/mac_privacy_ask. jpg" class="hd img" style="border radius: 25px;"/>

Method 3 is applicable to macOS versions before 13.0.1
