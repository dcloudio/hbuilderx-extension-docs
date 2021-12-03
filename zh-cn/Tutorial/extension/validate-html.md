### 安装validate-html插件@install

<!--
keyword: 语法校验,语法检查
-->

html语法校验插件，需要到[插件市场](https://ext.dcloud.net.cn/plugin?name=validate-html)安装。


### 如何配置选项？

安装完成后，进入【设置】【插件配置】【htmlhintrc】，点击`htmlhintrc`, 即可配置相关规则。

选项配置文件是.htmlhintrc，目前已有的选项对应说明如下：

| 选项                     | 说明                                                     |
| ------------------------ | -------------------------------------------------------- |
| tagname-lowercase        | 标签名是否开启小写; true:启用, false:禁用                |
| attr-lowercase           | 属性名是否开启小写，true:启用, false:禁用                |
| attr-value-double-quotes | 属性值是否必须放在双引号中，true:启用, false:禁用        |
| doctype-first            | Doctype是否必须是HTML文档的第一行，true:启用, false:禁用 |
| tag-pair                 | 标签是否必须成对，true:启用, false:禁用                  |
| spec-char-escape         | 特殊字符是否必须转义，true:启用, false:禁用              |
| id-unique                | ID属性是否必须唯一，true:启用, false:禁用                |
| src-not-empty            | src属性是否为空，true:启用, false:禁用                   |
| attr-no-duplication:     | 同一标签中，属性值是否不可重复, true:启用, false:禁用    |
  
详细的配置说明可以参考[options](https://github.com/htmlhint/HTMLHint/wiki/Usage)

## 如何增加其它选项？

修改.htmlhintrc文件，添加选项，比如: 

```json

  {
    "attr-value-not-empty": true,     //属性值不可为空
    "tag-self-close": true,           //标签必须自封闭
    "title-require": true,            //title标签必须出现在 head 标签中
    "inline-style-disabled": false,   //可以使用行内样式
    "id-class-ad-disabled": true,     //ID和 Class一定不可使用ad关键词,使用ad关键词的ID或Class，会被广告拦截软件屏蔽
    "attr-unsafe-chars": true,        //script标签不该使用在head标签
  }

```