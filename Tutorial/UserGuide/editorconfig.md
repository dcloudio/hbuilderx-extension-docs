> HBuilderX 2.0.3+起支持

## editorconfig是什么？

很多公司都要求各开发成员使用相同的编码风格，比如缩进是空格还是tab。

`editorconfig`是一套解决这个问题的业内通用规范，通过在项目下存放配置文件`.editorconfig`，并在这个配置文件中描述规则，然后把这个配置文件和其他代码一起提交git/svn，所有项目成员，都会遵循相同的编码规范。

`HBuilderX`直接支持该规范，无需下载插件，开箱即用。sublime、vscode支持该规范的话需要先下载插件。

`editorconfig`的官网是[https://editorconfig.org/](https://editorconfig.org/)
`editorconfig`可以帮助开发者在不同的编辑器和IDE之间定义和维护一致的代码风格。
`editorconfig`包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码。
`editorconfig`的配置文件十分易读，并且可以在各个操作系统、编辑器下工作。

## editorconfig的配置文件是怎样的？

以下是一个用于设置Python和JavaScript行尾和缩进风格的配置文件。

```
# EditorConfig is awesome: http://EditorConfig.org
 
# top-most EditorConfig file
root = true
 
# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
 
# 4 space indentation
[*.py]
indent_style = space
indent_size = 4
 
# Tab indentation (no size specified)
[*.js]
indent_style = tab
 
# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2
 
# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

## 案例

很多开源项目都用到了`editorconfig`

比如[jQuery](https://github.com/jquery/jquery/blob/master/.editorconfig), `jQuery`在`Github`上的`.editorconfig`配置文件如下：

```ini
root = true

[*]
indent_style = tab
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[package.json]
indent_style = space
indent_size = 2
```

如上，可以看到，JQuery配置了：编码格式、缩进风格等


## 在哪里存放配置文件
当打开一个文件时，`editorconfig`插件会在打开文件的目录和其每一级父目录查找.`editorconfig`文件，直到有一个配置文件`root=true`。

如果一个工程中出现多个配置文件，EditorConfig配置文件的读取层级是自上而下的，最深层的配置文件，最后读取。配置规则也是 按照读取的顺序来生效，所以路径上离代码最近的配置规则，优先级最高。

相对于其他开发工具（如vscode），HBuilderX对editorconfig更完善。在其他工具中，项目外层如果有editorconfig文件，也会影响这个项目，经常让人莫名其妙。HBuilderX没有这个bug。


## 文件格式详情
`editorconfig`文件使用INI格式（译注：请参考维基百科），目的是可以与Python ConfigParser Library兼容，但是允许在分段名（译注：原文是section names）中使用“and”。
分段名是全局的文件路径，格式类似于`gitignore`。斜杠`/`作为路径分隔符，`#`或者`;`作为注释。注释应该单独占一行。`editorconfig`文件使用`UTF-8`格式、`CRLF`或`LF`作为换行符。

### 通配符
| 通配符     | 说明                                 |
| ---------- | ------------------------------------ |
| *          | 匹配除/之外的任意字符串              |
| **         | 匹配任意字符串                       |
| ？         | 匹配任意单个字符                     |
| [name]     | 匹配name字符                         |
| [!name]    | 匹配非name字符                       |
| {s1,s3,s3} | 匹配任意给定的字符串（0.11.0起支持） |

特殊字符可以用`\`转义，以使其不被认为是通配符。

### 支持的属性

| 属性说明                   | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| indent_style             | tab为hard-tabs，space为soft-tabs                             |
| indent_size              | 设置整数表示规定每级缩进的列数和soft-tabs的宽度（译注：空格数）。如果设定为tab，则会使用tab_width的值（如果已指定） |
| tab_width                | 设置整数用于指定替代tab的列数。默认值就是indent_size的值，一般无需指定。 |
| end_of_line              | 定义换行符，支持lf、cr和crlf。                               |
| trim_trailing_whitespace | 设为true表示会除去换行行首的任意空白字符，false反之          |
| insert_final_newline     | 设为true表明使文件以一个空白行结尾，false反之                |
| root                     | 表明是最顶层的配置文件，发现设为true时，才会停止查找.`editorconfig`文件。 |

### 注意

1. 在HBuilderX内， 所有的属性名和属性值对`大小写敏感`。通常，如果没有明确指定某个属性，则会使用编辑器的配置，而`editorconfig`不会处理。
2. 推荐不要指定某些`editorconfig`属性。比如，tab_width不需要特别指定，除非它与`indent_size`不同。同样的，当`indent_style`设为`tab`时，不需要配置`indent_size`，这样才方便阅读者使用他们习惯的缩进格式。另外，如果某些属性并没有规范化（比如`end_of_line`），就最好不要设置它。
3. 如果你不需要editorconfig的功能，可以在工具-设置中关闭这个功能。

## 启用或关闭editorconfig配置

在【设置】中，有个editorconfig开关，您可以自由选择开启与关闭`.editorconfig`

<img src="/static/snapshots/tutorial/editorconfig.png" />


