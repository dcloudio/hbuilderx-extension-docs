# Troubleshooting of Node Startup Failure
This document is used to solve the problem that some machines cannot start node normally, resulting in the language service and the inability to use the code prompt function and packaging function.

#### Currently known causes of node startup failure (only for Windows platforms)：
#### 1.Some Windows 7 systems cannot start node

<img src="/static/snapshots/tutorial/question/nodeerror.png" style="zoom:60%;" />

> **Solution：**Requires download [KB3080149 system patch](https://www.microsoft.com/zh-CN/download/confirmation.aspx?id=48636)，After successful installation, restart the computer and open HBuilderX