# macOS 切换用户后升级提示权限不足

在 macOS 多用户切换后，HBuilderX 安装目录可能出现权限不足的问题，导致升级过程中无法正常写入，从而出现升级失败或功能异常。

解决方法

请在终端执行以下命令修复目录权限（需将路径替换为你本机的实际安装路径）：

```bash
osascript -e 'do shell script "chmod 3777 \"/Applications/HBuilderX-Alpha.app/Contents/HBuilderX\"" with administrator privileges'
```

执行过程中，系统会弹出授权提示，需要输入管理员账号和密码进行授权。

请注意：示例路径为：/Applications/HBuilderX-Alpha.app/Contents/HBuilderX 如果你的 HBuilderX 安装在其他目录，请替换为对应实际路径。

修复完成后，请重新启动 HBuilderX 并再次尝试升级。
