# AGENTS Guidelines for This Repository

## 概述
----
本文件为 dcloudio/hbuilderx-extension-docs 仓库定制的 Copilot CLI Agents 使用说明。

hbuilderx-extension-docs 是HBuilderX软件使用文档。

文档包含3种语言：
- zh-cn 中文简体，对应zh-cn目录
- zh-hant 中文繁体，对应zh-hant目录
- en 英文，对应en目录

en目录（英文）、zh-hant目录（中文繁体），均由 zh-cn 翻译而来。

## 仓库特点与约束
----------------

- 默认作用域（默认行为）：在本仓库中，所有 agent 的默认处理范围仅限于 git 变更（staged/committed/branch diff）中位于 zh-cn 目录下的 Markdown 文件（*.md）。换言之，除非在命令或配置中明确指定覆盖行为，agent 只会检测并处理当前分支相对于主分支（或远端基线）发生变更并且路径以 `zh-cn/` 开头的文件。

## 输出格式与规范
----------------

- 所有修改应保存为 UTF-8 编码的 Markdown 文件
- 文件路径：翻译后的文件应遵循原结构，例如：
  - zh-cn: zh-cn/cli/env.md
  - en: en/cli/env.md
  - zh-hant: zh-hant/cli/env.md
- 翻译占位符：保留形如 {{variable}}、<component />、[]() 等占位符和内嵌代码不翻译

## 常用prompt

```md
同步并翻译zh-cn目录下git变更文件到en、zh-hant目录
```

```
优化与扩充zh-cn目录下的git变更文件（包含内容质量提升、补充示例、补全步骤、修正错误等）
```