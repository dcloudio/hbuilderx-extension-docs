# 终端空白或无法输入的解决方案

### 问题

<img src="/static/snapshots/tutorial/terminal/BlankTerminal.png" />

### windows 解决方案

1. 关闭HBuilderX。
2. 资源管理器中，进入HbuilderX安装目录
3. 打开文件`HBuilderX\plugins\builtincef3terminal\script\main.js`
4. 从17行到44行之间，将shell中的值写成绝对路径，如将shell="powershell.exe"改为shell = 'C:/WINDOWS/System32/WindowsPowerShell/v1.0/powershell.exe'；
5. shell="cmd.exe"同等改法；
6. 重启HBuilderX

### mac解决方案

1. 关闭HBuilderX。
2. 编辑文件`/Applications/HBuilderX.app/Contents/HBuilderX/plugins/builtinterminal/script/main.js`
3. 39行，将shell中的值写成绝对路径，比如`shell = "/bin/zsh"`
4. 重启HBuilderX
