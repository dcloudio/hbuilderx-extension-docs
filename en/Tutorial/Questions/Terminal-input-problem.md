# Solution for Blank Terminal or Unable to Input

### Problem

<img src="/static/snapshots/tutorial/terminal/BlankTerminal.png" />

### Windows Solution

1. Close HBuilderX.
2. In File Explorer, navigate to the HBuilderX installation directory
3. Open the file `HBuilderX\plugins\builtincef3terminal\script\main.js`
4. Between lines 17 to 44, change the shell value to an absolute path, for example, change shell="powershell.exe" to shell = 'C:/WINDOWS/System32/WindowsPowerShell/v1.0/powershell.exe';
5. Apply the same change for shell="cmd.exe";
6. Restart HBuilderX

### Mac Solution

1. Close HBuilderX.
2. Edit the file `/Applications/HBuilderX.app/Contents/HBuilderX/plugins/builtinterminal/script/main.js`
3. On line 39, change the shell value to an absolute path, for example `shell = "/bin/zsh"`
4. Restart HBuilderX
