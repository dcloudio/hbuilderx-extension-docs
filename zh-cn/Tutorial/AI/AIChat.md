# hbuilderx-ai-chat

> HBuilderX 需5.0+版本

hbuilderx-ai-chat 插件将对话式 AI 能力直接整合进 HBuilderX,允许开发者用自然语言与不同的 CLI 型 AI 助手(如 Claude、Copilot、Cursor、Gemini 等)交互。

你可以询问代码问题、要求生成功能、修复 bug、重构、补充注释、生成测试用例,AI 会基于你选择的项目上下文给出帮助。

## 插件具体可以做什么?

* 代码解释:逐行解释函数、复杂逻辑、第三方依赖的用途。
* 代码生成:创建新文件、组件、接口调用、表单等(可指定框架/语言/风格)。
* Bug 修复建议:定位错误,给出修复方案并附带示例补丁。
* 重构:建议并实施函数拆分、命名改进、性能优化等。
* 注释与文档:自动生成注释、README 段落、API 文档模板。
* 单元测试:生成或补全测试用例。
* 代码转换:例如转换为 TypeScript/ES6/更现代的 API。
* 样式与 UI 代码:生成页面布局、样式类、响应式适配建议。
* **智能代码理解(LSP集成)**:通过自然语言查询代码类型、定义位置、引用关系、错误诊断等,基于HBuilderX语言服务提供精准的代码分析能力。
* ......

## 安装插件

如下图所示,工具栏,点击最右侧的 `AI` 图标,即可安装AI chat插件。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-install.jpg" style="zoom: 35%;" />

## 启动插件

HBuilderX,可以通过以下方式打开聊天视图。

- 工具栏,点击最右侧的 `AI` 图标
- 菜单【视图】【插件扩展视图】【AI Code Chat】
- 快捷键: Windows `Ctrl+Alt+I` ;  MacOS `⌃⌘I`

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-entry.jpg?t=1" style="zoom: 35%;" />

## 聊天视图概览

如下图所示,AI聊天视图,提供了多个AI助手,以便大家选择。

您可以根据自己的需要,选择合适的AI助手。各 CLI 助手需要手动在命令行中安装,详见 [CLI AI 助手管理](#AI-CLI助手管理)。

- [CLI AI 助手管理(安装、切换、更新)](#AI-CLI助手管理)
- 切换项目
- 顶部会话:
    - 切换项目
    - 历史会话
    - 新会话
- [聊天对话框:引用文件](#上下文-引用特定文件)
- [聊天对话框:上传图片](#上传图片)
- MCP服务

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ui-overview.jpg" style="zoom: 30%" />

## AI-CLI助手管理

### 助手选择与切换

在 HBuilderX AI Chat 插件的聊天视图中,提供了多个 AI 助手供您选择:

* 在中央卡片列表中选择助手。每个卡片显示:
    - CLI 助手名称与版本(例如:Claude Code CLI 2.0.53)
    - 安装状态:已安装、未安装、需要更新
* **切换 CLI 助手**:在会话中切换助手会影响后续回答。建议在长会话需要不同能力时,开始 新会话 再切换。

### CLI 助手手动安装

> **重要提示**:HBuilderX AI Chat 插件不提供自动安装功能,您需要在命令行中手动安装各个 AI CLI 助手。

以下是各主流 AI CLI 助手的官方安装方式:

---

#### 1. Claude Code CLI

**官方网站**:[https://claude.com/claude-code](https://claude.com/claude-code)

**安装方式**:

**macOS / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**npm 安装(跨平台):**
```bash
npm install -g @anthropic-ai/claude-code
```

**验证安装**:
```bash
claude --version
```


---

#### 2. Qoder CLI

**官方网站**:[https://docs.qoder.com/](https://docs.qoder.com/)

**安装方式**:

**macOS / Linux:**
```bash
brew install qoderai/qoder/qodercli --cask
```

**Windows:**
```powershell
curl -fsSL https://qoder.com/install | bash
```

**npm 安装(跨平台):**
```bash
npm install -g @qoder-ai/qodercli
```

**验证安装**:
```bash
qodercli --version
```


---

#### 3. Cursor CLI

**官方网站**:[https://cursor.com/cn/cli](https://cursor.com/cn/cli)

**安装方式**:

**macOS / Windows:**
```bash
curl https://cursor.com/install -fsS | bash
```


**验证安装**:
```bash
cursor-agent --version
```

---

#### 4. Copilot CLI

**官方网站**:[https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)

**前置要求**:需要有 GitHub Copilot 订阅

**安装方式**:

```bash
npm install -g @github/copilot
```

**验证安装**:
```bash
copilot --version
```


---



#### 5. Gemini CLI

**官方网站**:[https://geminicli.com/](https://geminicli.com/)

**安装方式**:

```bash
npm install -g @google/gemini-cli
```


**验证安装**:
```bash
gemini --version
```

---


### 安装后刷新

安装完成后,请执行以下操作:

1. **重启 HBuilderX**:确保 HBuilderX 能够检测到新安装的 CLI 工具
2. **重新打开 AI Chat 视图**:检查助手是否显示版本号
3. **验证路径**:确保 CLI 工具已添加到系统 PATH 环境变量中


### 常见安装问题

**Q: 安装后 HBuilderX 仍显示"未安装"状态?**

A: 请检查:
1. CLI 工具是否已正确添加到系统 PATH 环境变量
2. 在命令行中运行 `which <cli-name>`(macOS/Linux)或 `where <cli-name>`(Windows)验证安装路径
3. 重启 HBuilderX

**Q: 权限不足无法安装?**

A:
- macOS/Linux:在命令前添加 `sudo`
- Windows:以管理员身份运行终端
- npm 全局安装权限问题:参考 [npm 权限修复指南](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

**Q: 网络问题导致安装失败?**

A:
- 使用国内镜像源(npm、pip)
- 配置代理:`npm config set proxy http://your-proxy:port`
- 直接从 GitHub Releases 下载预编译包


## 开启聊天
-----------------------------------
### 开启第一次聊天
在聊天对话框输入`hello`, 回车试试。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/first-chat-1.jpg" style="zoom: 35%" />

如上,提示错误:`错误: No workspace folder found. Please open a folder first.` 因为:开启聊天,必须`选择一个项目`。

### 选择项目开启聊天

开启聊天,必须`选择一个项目`。如果没有项目,在HBuilderX内`新建或拖入一个项目`,然后`重新`打开聊天视图。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/first-chat-2.jpg?t=3" style="zoom: 35%" />

## 向提示加上下文
-----------------------------------

通过提供正确的上下文,您可以获得更相关、更准确的回复。

为了获得最佳聊天效果,编写聊天提示时,可以添加上下文:

- 引用特定文件
- 获取控制台内容 (比如获取uni-app运行控制台错误信息)
- 获取当前打开的文件
- 获取鼠标选中内容

### 上下文-引用特定文件

- 在聊天对话框中,输入`@`符号,会自动打开文件选择窗口。
- 聊天对话框,右下角点击`@`图标,也会自动打开文件选择窗口

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-select-project-file.jpg" style="zoom: 35%" />

### 上下文-当前选中的代码

如下图所示:您可以告诉AI,操作当前选中的代码,比如

```md
删除当前被选中的代码
```

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/al-currently-selected-code.jpg" style="zoom: 35%" />


### 上下文-获取HBuilderX控制台信息

如下图所示:当你运行uni-app的时候,控制台出现错误信息,您可以告诉AI

```md
获取控制台错误信息,然后进行修复
```
<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-select-console.jpg" style="zoom: 35%;" />

## 上传图片

如下图所示,聊天对话框,右下角,点击图片icon,可以上传图片,让AI实现相应功能。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/ai-upload-img.jpg" style="zoom: 35%" />


## LSP 语言服务集成(MCP)
-----------------------------------

### 功能概述

基于 HBuilderX 强大的语言服务(Language Server Protocol),AI Chat 插件支持通过 **MCP(Model Context Protocol)** 调用语言服务能力,让 AI 助手能够深度理解您的代码。

您只需用自然语言提问,AI 就会自动调用相应的语言服务工具来获取精准的代码信息,包括:

- **代码类型查询**: 了解函数、变量、类的类型定义
- **定义跳转**: 快速定位符号的定义位置
- **引用查找**: 查看代码在项目中的所有使用位置
- **错误诊断**: 自动检测代码中的错误和警告
- **签名帮助**: 获取函数参数信息和调用方式

### 支持的 LSP 能力

#### 1. 悬浮提示(Hover)

**使用场景**: 查询代码符号的类型信息和文档说明

**示例问题**:
```
- "lsp-test.js 第4行的 hello 函数是什么类型?"
- "这个变量的类型是什么?"
- "解释一下这个方法的作用"
```

**AI 会自动调用**: `mcp__hbuilderx__lsp_hover`

---

#### 2. 转到定义(Definition)

**使用场景**: 查找符号的定义位置

**示例问题**:
```
- "hello 函数在哪里定义的?"
- "这个类定义在哪个文件?"
- "ChatManager 的定义位置是什么?"
```

**AI 会自动调用**: `mcp__hbuilderx__lsp_definition`

---

#### 3. 查找引用(References)

**使用场景**: 查找符号在代码库中的所有使用位置

**示例问题**:
```
- "hello 函数在哪些地方被调用?"
- "这个变量在项目中有哪些引用?"
- "ChatManager 类被哪些文件使用?"
```

**AI 会自动调用**: `mcp__hbuilderx__lsp_references`

---

#### 4. 诊断信息(Diagnostics)

**使用场景**: 获取文件的错误、警告和提示信息

**示例问题**:
```
- "这个文件有什么错误吗?"
- "检查一下 extension.js 有没有问题"
- "帮我诊断一下代码问题"
```

**AI 会自动调用**: `mcp__hbuilderx__lsp_diagnostics`

---

#### 5. 函数签名帮助(Signature Help)

**使用场景**: 获取函数的参数信息和签名

**示例问题**:
```
- "这个函数需要什么参数?"
- "console.log 的参数是什么?"
- "这个方法怎么调用?需要传什么参数?"
```

**AI 会自动调用**: `mcp__hbuilderx__lsp_signature_help`

---

### 使用示例

#### 示例 1: 理解代码类型

**用户**: "lsp-test.js 第4行的 hello 函数是什么类型?"

**AI 触发**: `mcp__hbuilderx__lsp_hover`

**AI 回答**:
```
根据LSP悬浮信息,hello 函数的类型是:
function hello(name: any): string

这是一个接受任意类型参数 name 并返回字符串的函数。
```

---

#### 示例 2: 查找错误

**用户**: "extension.js 有什么错误吗?"

**AI 触发**: `mcp__hbuilderx__lsp_diagnostics`

**AI 回答**:
```
检查发现 extension.js 有以下问题:

1. [Error] 第156行,第15列: 变量 'chatManger' 未定义(可能是拼写错误)
2. [Warning] 第203行,第5列: 未使用的变量 'result'

建议:
- 第156行的 'chatManger' 应该改为 'chatManager'
- 第203行如果不需要 result 变量可以删除
```

---

#### 示例 3: 追踪引用

**用户**: "ChatManager 类在项目中哪些地方使用了?"

**AI 触发**: `mcp__hbuilderx__lsp_references`

**AI 回答**:
```
ChatManager 类在项目中有8处引用:

extension.js:
- 第6行: 导入语句
- 第231行: 创建实例
- 第450行: 调用方法

managers/AIProvider.js:
- 第12行: 导入语句
- 第89行: 类型注解

test/chat.test.js:
- 第5行: 导入用于测试
- 第23行: 创建mock对象
- 第45行: 断言检查
```

---

### 最佳实践

#### 1. 提供清晰的文件信息

在询问时最好提供文件路径或确保当前正在编辑该文件:

```
✅ 好的问题:
- "extension.js 第42行的 hello 函数是什么类型?"
- "当前文件的第10行有什么错误?"

❌ 模糊的问题:
- "这个函数是什么类型?"(不清楚是哪个文件的哪个函数)
```

#### 2. 指定具体位置

对于需要位置信息的查询,尽量提供行号:

```
✅ 好的问题:
- "第15行的 chatManager 变量定义在哪里?"
- "第23行调用的 sendMessage 函数有什么参数?"
```

#### 3. 明确查询意图

清楚表达你想要什么信息:

```
✅ 好的问题:
- "这个文件有哪些错误和警告?"(诊断)
- "BridgeClient 类在哪里定义的?"(定义)
- "hello 函数在哪些地方被使用?"(引用)
```

---

### 使用限制

1. **文件必须已打开**: LSP 需要文件已在编辑器中打开才能提供准确信息
2. **语言服务支持**: 只支持已安装语言服务的文件类型(JavaScript、TypeScript、UTS 等)
3. **初始化时间**: LSP 服务启动需要一些时间,过早调用可能返回空结果

---



## 常见问题
--------------------------------

### Q1:未选择项目

**错误消息:**`No workspace folder found. Please open a folder first.`

**解决方案:**

开启聊天,必须`选择一个项目`。如果没有项目,在HBuilderX内`新建或拖入一个项目`,然后`重新`打开聊天视图。

## Prompts: 推荐提示语模板
--------------------------------

#### P1. 登录页面(手机号 + 验证码)生成模板

```js
请为 uni-app x 项目生成一个登录页面(pages/login/login.uvue)。要求:
1. 输入手机号(格式校验)
2. 验证码输入框 + "获取验证码"按钮同一行
3. 登录按钮在下方
4. 生成完整 .uvue 代码,包括 script、template、style。
```

#### P2. Bug定位并修复

```js
@pages/index/index.uvue,请你根据其中的报错或潜在问题进行定位,并给出修复方案。

输出结构:

- Bug 列表
- Bug 产生原因
- 修复代码(只修改必要部分)
```
