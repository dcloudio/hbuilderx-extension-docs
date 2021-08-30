### 插件安裝

html語法校驗插件，需要到[插件市場](https://ext.dcloud.net.cn/plugin?name=validate-html)安裝。


### 如何配置選項？

安裝完成後，進入【設置】【插件配置】【htmlhintrc】，點擊`htmlhintrc`, 即可配置相關規則。

選項配置文件是.htmlhintrc，目前已有的選項對應說明如下：

| 選項                     | 說明                                                     |
| ------------------------ | -------------------------------------------------------- |
| tagname-lowercase        | 標籤名是否開啓小寫; true:啓用, false:禁用                |
| attr-lowercase           | 屬性名是否開啓小寫，true:啓用, false:禁用                |
| attr-value-double-quotes | 屬性值是否必須放在雙引號中，true:啓用, false:禁用        |
| doctype-first            | Doctype是否必須是HTML文檔的第一行，true:啓用, false:禁用 |
| tag-pair                 | 標籤是否必須成對，true:啓用, false:禁用                  |
| spec-char-escape         | 特殊字符是否必須轉義，true:啓用, false:禁用              |
| id-unique                | ID屬性是否必須唯一，true:啓用, false:禁用                |
| src-not-empty            | src屬性是否爲空，true:啓用, false:禁用                   |
| attr-no-duplication:     | 同一標籤中，屬性值是否不可重複, true:啓用, false:禁用    |
  
詳細的配置說明可以參考[options](https://github.com/htmlhint/HTMLHint/wiki/Usage)

## 如何增加其它選項？

修改.htmlhintrc文件，添加選項，比如: 

```json

  {
    "attr-value-not-empty": true,     //屬性值不可爲空
    "tag-self-close": true,           //標籤必須自封閉
    "title-require": true,            //title標籤必須出現在 head 標籤中
    "inline-style-disabled": false,   //可以使用行內樣式
    "id-class-ad-disabled": true,     //ID和 Class一定不可使用ad關鍵詞,使用ad關鍵詞的ID或Class，會被廣告攔截軟件屏蔽
    "attr-unsafe-chars": true,        //script標籤不該使用在head標籤
  }

```