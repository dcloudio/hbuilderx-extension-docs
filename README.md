# README

HBuilderX文档官网: [https://hx.dcloud.net.cn/](https://hx.dcloud.net.cn/)

## Repository overview
```md
.
├── zh-cn          # 中文简体
├── zh-hant        # 中文繁体
├── en             # 英文
├── static         # js、css、图片等静态文件存储目录
├── index.html     # 入口文件
├── package.json
├── AGENTS.md      # AI
├── README.md
```

### 文档新增与编辑

- 添加《新文档.md》，请在zh-cn目录下增加，然后将增加的文件复制到en和zh-hant目录。
- 如截图的是高清屏，请压缩图片。并设置图片大小。图片压缩网站：https://tinypng.com/
- 图片存储在[uniCloud](https://unicloud.dcloud.net.cn/)上，如需上传图片，请联系相关人员。
- markdown文件，中文标题，请在标题后通过@的方式指定。示例：

```md
标题为: ## 下载
正确应为: ##：下载@Download
```

### 本地预览文档

```shell
npm run serve
```

**输出:**

```shell
hxdeMac-mini:hbuilderx-extension-docs hx$ npm run serve

> hbuilderx-extension-docs@1.0.0 serve
> node ./scripts/preview.js

server running at http://localhost:3000
```

### 部署

提交文档后，服务器会自动部署，预计10分钟左右生效。


## 常用prompt

以下仅适用于Github copilot cli等AI工具

```md
同步并翻译zh-cn目录下git变更文件到en、zh-hant目录
```

```
优化与扩充zh-cn目录下的git变更文件（包含内容质量提升、补充示例、补全步骤、修正错误等）
```
