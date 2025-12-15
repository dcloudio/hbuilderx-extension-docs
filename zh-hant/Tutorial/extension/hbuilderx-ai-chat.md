# hbuilderx-ai-chat

> HBuilderX 需5.0+版本

hbuilderx-ai-chat 插件将对话式 AI 能力直接整合进 HBuilderX，允许开发者用自然语言与不同的 CLI 型 AI 助手（如 Claude、Copilot、Cursor、Gemini 等）交互。

你可以询问代码问题、要求生成功能、修复 bug、重构、补充注释、生成测试用例，AI 会基于你选择的项目上下文给出帮助。

## 插件具体可以做什么？

* 代码解释：逐行解释函数、复杂逻辑、第三方依赖的用途。
* 代码生成：创建新文件、组件、接口调用、表单等（可指定框架/语言/风格）。
* Bug 修复建议：定位错误，给出修复方案并附带示例补丁。
* 重构：建议并实施函数拆分、命名改进、性能优化等。
* 注释与文档：自动生成注释、README 段落、API 文档模板。
* 单元测试：生成或补全测试用例。
* 代码转换：例如转换为 TypeScript/ES6/更现代的 API。
* 样式与 UI 代码：生成页面布局、样式类、响应式适配建议。
* ......

## 安装插件

如下图所示，工具栏，点击最右侧的 `AI` 图标，即可安装AI chat插件。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-install.jpg" style="zoom: 35%;" />

## 启动插件

HBuilderX，可以通过以下方式打开聊天视图。

- 工具栏，点击最右侧的 `AI` 图标
- 菜单【视图】【插件扩展视图】【AI Code Chat】
- 快捷键: Windows `Ctrl+Alt+I` ;  MacOS `⌃⌘I`

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-entry.jpg?t=1" style="zoom: 35%;" />

## 聊天视图概览

如下图所示，AI聊天视图，提供了5个AI助手，以便大家选择。

您可以根据自己的需要，选择合适的AI助手。如图所示，您可以在视图内 `安装` 和 `更新` AI助手。

- [CLI AI 助手管理（安装、切换、更新）](#AI-CLI助手管理)
- 切换项目
- 顶部会话:
    - 切换项目
    - 历史会话
    - 新会话
- [聊天对话框：引用文件](#上下文-引用特定文件)
- [聊天对话框：上传图片](#上传图片)
- MCP服务

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ui-overview.jpg" style="zoom: 30%" />

## AI-CLI助手管理

* 在中央卡片列表中选择助手。每个卡片显示：
    - CLI助手名称与版本（例如：Claude Code CLI 2.0.53）
    - 状态：已安装、未安装、需要更新（对应 UI 上的“安装”、“更新”按钮）。
* 安装：对于标记为 未安装 的助手，点击 安装，插件会负责下载安装 CLI 依赖（或引导你到安装步骤）。
* 更新：当有更新按钮时，点击即可更新到最新版本以获得新能力或修复。
* 切换CLI助手：在会话中切换助手会影响后续回答。建议在长会话需要不同能力时，开始 新会话 再切换。


## 开启聊天
-----------------------------------
### 开启第一次聊天
在聊天对话框输入`hello`, 回车试试。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/first-chat-1.jpg" style="zoom: 35%" />

如上，提示错误：`错误: No workspace folder found. Please open a folder first.` 因为：开启聊天，必须`选择一个项目`。

### 选择项目开启聊天

开启聊天，必须`选择一个项目`。如果没有项目，在HBuilderX内`新建或拖入一个项目`，然后`重新`打开聊天视图。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/first-chat-2.jpg?t=3" style="zoom: 35%" />

## 向提示加上下文
-----------------------------------

通过提供正确的上下文，您可以获得更相关、更准确的回复。

为了获得最佳聊天效果，编写聊天提示时，可以添加上下文：

- 引用特定文件
- 获取控制台内容 （比如获取uni-app运行控制台错误信息）
- 获取当前打开的文件
- 获取鼠标选中内容

### 上下文-引用特定文件

- 在聊天对话框中，输入`@`符号，会自动打开文件选择窗口。
- 聊天对话框，右下角点击`@`图标，也会自动打开文件选择窗口

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-select-project-file.jpg" style="zoom: 35%" />

### 上下文-当前选中的代码

如下图所示：您可以告诉AI，操作当前选中的代码，比如

```md
删除当前被选中的代码
```

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/al-currently-selected-code.jpg" style="zoom: 35%" />


### 上下文-获取HBuilderX控制台信息

如下图所示：当你运行uni-app的时候，控制台出现错误信息，您可以告诉AI

```md
获取控制台错误信息，然后进行修复
```
<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-select-console.jpg" style="zoom: 35%;" />

## 上传图片

如下图所示，聊天对话框，右下角，点击图片icon，可以上传图片，让AI实现相应功能。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-upload-img.jpg" style="zoom: 35%" />


## 常见问题
--------------------------------

### Q1:未选择项目

**错误消息：**`No workspace folder found. Please open a folder first.`

**解决方案：**

开启聊天，必须`选择一个项目`。如果没有项目，在HBuilderX内`新建或拖入一个项目`，然后`重新`打开聊天视图。

## Prompts: 推荐提示语模板
--------------------------------

#### P1. 登录页面（手机号 + 验证码）生成模板

```js
请为 uni-app x 项目生成一个登录页面（pages/login/login.uvue）。要求：
1. 输入手机号（格式校验）
2. 验证码输入框 + “获取验证码”按钮同一行
3. 登录按钮在下方
4. 生成完整 .uvue 代码，包括 script、template、style。
```

#### P2. Bug定位并修复

```js
@pages/index/index.uvue，请你根据其中的报错或潜在问题进行定位，并给出修复方案。

输出结构：

- Bug 列表
- Bug 产生原因
- 修复代码（只修改必要部分）
```
