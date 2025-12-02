# Solution for HBuilderX Node Extension Plugin Startup Failure

On some Windows 10 computers, after HBuilderX starts, there is no code hint, and uni-app cannot run normally on phones.

Click menu [Help] [View Run Log], if the log shows `The operation could not be completed successfully because the file contains a virus or potentially unwanted software`, and the computer has `reason cybersecurity` installed, please uninstall `reason cybersecurity`.

**Reason:** This is because `reason cybersecurity` installed on the computer blocked `Node.exe`, causing HBuilderX Node extension plugins to fail to start.

#### How to determine if reason cybersecurity is installed on the computer?

Open Windows Security Center, as shown in the figure below, the highlighted part is reason cybersecurity.

<img src="/static/snapshots/tutorial/question/reason.jpeg" style="zoom: 50%;" />

#### Uninstall reason cybersecurity

Open your computer's C drive, go to the `C:\Program Files\RAVAntivirus` directory, and find the `Uninstall.exe` program to uninstall.
