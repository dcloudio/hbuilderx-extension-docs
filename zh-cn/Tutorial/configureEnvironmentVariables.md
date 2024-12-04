
# 事由
> Hbuilder X 从4.41版本开始调整cli项目使用本地的node执行编译，如果用户未安装并正确配置Node.js会警告报错。

# Windows 系统
### 1. 确认 Node.js 是否已安装
1. 打开命令提示符：
按 `Win + R`，输入 `cmd`，回车。
2. 检查 Node.js：
```
node -v
```
如果配置正确，会显示 Node.js的版本号。

### 2. 手动添加 Node.js 到环境变量
> 步骤 1：找到 Node.js 的安装路径

默认情况下，Node.js 安装在以下目录之一：
```
C:\Program Files\nodejs\
```
确认该目录下存在 node.exe 和 npm 相关文件。
> 步骤 2：打开环境变量设置

- 右键点击“此电脑”或“计算机”图标，选择“属性”。
- 点击左侧的“高级系统设置”。
- 在弹出的“系统属性”窗口中，点击“环境变量”按钮。
- 在“系统变量”列表中找到 Path，选中后点击“编辑”。
- 在弹出的窗口中，点击“新建”按钮。
- 输入 Node.js 的安装路径，例如：
```
C:\Program Files\nodejs\
```
确保路径末尾有反斜杠 \。

> 步骤 3：验证配置

1. 打开命令提示符：
按 `Win + R`，输入 `cmd`，回车。
2. 检查 Node.js 和 npm 版本：
```
node -v
```
如果配置正确，分别会显示 Node.js 和 npm 的版本号。

# macOS 系统

### 1. 确认 Node.js 是否已安装
1. 打开终端：
2. 检查 Node.js：
```
node -v
```
如果配置正确，会显示 Node.js的版本号。

### 2. 手动添加 Node.js 到环境变量
> 步骤1：根据终端类型选择文件

- Bash：
```
 ~/.bashrc
```
- Zsh：
```
 ~/.zshrc
```

> 步骤 2：添加 Node.js 路径到 PATH

在打开的配置文件中，添加以下行（假设 Node.js 安装在 /path/nodejs）：
```
export PATH=$PATH:/path/nodejs
```
保存退出后执行命令
```
source ~/.bashrc
```
> 步骤 3：验证配置

```
node -v
```
如果配置正确，会显示 Node.js的版本号。
