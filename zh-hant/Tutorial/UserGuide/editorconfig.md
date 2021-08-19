> HBuilderX 2.0.3+起支持

## editorconfig是什麼？

很多公司都要求各開發成員使用相同的編碼風格，比如縮進是空格還是tab。

`editorconfig`是一套解決這個問題的業內通用規範，通過在項目下存放配置文件`.editorconfig`，並在這個配置文件中描述規則，然後把這個配置文件和其他代碼一起提交git/svn，所有項目成員，都會遵循相同的編碼規範。

`HBuilderX`直接支持該規範，無需下載插件，開箱即用。sublime、vscode支持該規範的話需要先下載插件。

`editorconfig`的官網是[https://editorconfig.org/](https://editorconfig.org/)
`editorconfig`可以幫助開發者在不同的編輯器和IDE之間定義和維護一致的代碼風格。
`editorconfig`包含一個用於定義代碼格式的文件和一批編輯器插件，這些插件可以讓編輯器讀取配置文件並依此格式化代碼。
`editorconfig`的配置文件十分易讀，並且可以在各個操作系統、編輯器下工作。

## editorconfig的配置文件是怎樣的？

以下是一個用於設置Python和JavaScript行尾和縮進風格的配置文件。

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

很多開源項目都用到了`editorconfig`

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

如上，可以看到，JQuery配置了：編碼格式、縮進風格等


## 在哪裏存放配置文件
當打開一個文件時，`editorconfig`插件會在打開文件的目錄和其每一級父目錄查找.`editorconfig`文件，直到有一個配置文件`root=true`。

如果一個工程中出現多個配置文件，EditorConfig配置文件的讀取層級是自上而下的，最深層的配置文件，最後讀取。配置規則也是 按照讀取的順序來生效，所以路徑上離代碼最近的配置規則，優先級最高。

相對於其他開發工具（如vscode），HBuilderX對editorconfig更完善。在其他工具中，項目外層如果有editorconfig文件，也會影響這個項目，經常讓人莫名其妙。HBuilderX沒有這個bug。


## 文件格式詳情
`editorconfig`文件使用INI格式（譯註：請參考維基百科），目的是可以與Python ConfigParser Library兼容，但是允許在分段名（譯註：原文是section names）中使用“and”。
分段名是全局的文件路徑，格式類似於`gitignore`。斜槓`/`作爲路徑分隔符，`#`或者`;`作爲註釋。註釋應該單獨佔一行。`editorconfig`文件使用`UTF-8`格式、`CRLF`或`LF`作爲換行符。

### 通配符
| 通配符     | 說明                                 |
| ---------- | ------------------------------------ |
| *          | 匹配除/之外的任意字符串              |
| **         | 匹配任意字符串                       |
| ？         | 匹配任意單個字符                     |
| [name]     | 匹配name字符                         |
| [!name]    | 匹配非name字符                       |
| {s1,s3,s3} | 匹配任意給定的字符串（0.11.0起支持） |

特殊字符可以用`\`轉義，以使其不被認爲是通配符。

### 支持的屬性

| 屬性說明                   | 說明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| indent_style             | tab爲hard-tabs，space爲soft-tabs                             |
| indent_size              | 設置整數表示規定每級縮進的列數和soft-tabs的寬度（譯註：空格數）。如果設定爲tab，則會使用tab_width的值（如果已指定） |
| tab_width                | 設置整數用於指定替代tab的列數。默認值就是indent_size的值，一般無需指定。 |
| end_of_line              | 定義換行符，支持lf、cr和crlf。                               |
| trim_trailing_whitespace | 設爲true表示會除去換行行首的任意空白字符，false反之          |
| insert_final_newline     | 設爲true表明使文件以一個空白行結尾，false反之                |
| root                     | 表明是最頂層的配置文件，發現設爲true時，纔會停止查找.`editorconfig`文件。 |

### 注意

1. 在HBuilderX內， 所有的屬性名和屬性值對`大小寫敏感`。通常，如果沒有明確指定某個屬性，則會使用編輯器的配置，而`editorconfig`不會處理。
2. 推薦不要指定某些`editorconfig`屬性。比如，tab_width不需要特別指定，除非它與`indent_size`不同。同樣的，當`indent_style`設爲`tab`時，不需要配置`indent_size`，這樣才方便閱讀者使用他們習慣的縮進格式。另外，如果某些屬性並沒有規範化（比如`end_of_line`），就最好不要設置它。
3. 如果你不需要editorconfig的功能，可以在工具-設置中關閉這個功能。

## 啓用或關閉editorconfig配置

在【設置】中，有個editorconfig開關，您可以自由選擇開啓與關閉`.editorconfig`

<img src="/static/snapshots/tutorial/editorconfig.png" />


