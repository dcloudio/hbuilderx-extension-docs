# 選擇

用鼠標拖着選中一片文本，是一個很容易讓食指抽筋的操作。尤其是觸摸板更痛苦。但是背誦很多相關的快捷鍵也一樣痛苦。

HBuilderX提供了更友好方式：`智能雙擊`和`Ctrl+擴大選區`。

### 智能雙擊

在HBuilderX中，但凡特殊點的字符，都能智能雙擊。

- 雙擊引號/括號內側，是選中引號/括號內的內容
- 雙擊逗號兩側，是選擇逗號前一段或後一段
- 雙擊行尾，是選中該行(不含回車符)
- 雙擊連詞符（-_）選中整個詞
- 雙擊摺疊行首內容開頭，選擇摺疊段落
- 雙擊行首縮進，選擇相同縮進的段落
- 雙擊列表符號，選擇列表段落
- 雙擊Tag開頭或結尾，選擇整段Tag
- 雙擊屬性賦值等號=，選擇Html屬性
- 雙擊if、function等關鍵字，選擇整段包圍區域
- 雙擊分號，選擇js等語言的;分號前段落
- 雙擊css類名左側，選擇Css類
- 雙擊註釋符選擇註釋區域
- 雙擊#選擇markdown標題段落
- 雙擊語法定義符開頭選擇markdown圖片、超鏈接、加粗、傾斜、代碼等語法區
- [瞭解JSON智能雙擊](/Tutorial/Language/json?id=智能雙擊，快速選中數組或鍵值對)

下面是一個gif圖例，雙擊選中tag和包圍父tag

1. 雙擊div tag的首或尾可以選中這個tag，即開頭的<左側或結尾的>右側。當然雙擊if、雙擊縮進符、雙擊括號引號內側...很多位置都可以通過智能雙擊選中。具體見HBuilder的選擇菜單。
2. 按Ctrl+]包圍，就可以在這個選區首尾加父標籤，同時閃爍光標。如果在js裏，按下Ctrl+]不是包圍tag，而是包圍if、for等函數庫，方便快速把一段代碼放入if塊中。
3. 輸入div即可在首尾添加包圍標籤

<img src="/static/snapshots/tutorial/dbclick.gif" />

### 多光標

<img src="/static/snapshots/tutorial/more_cursor.gif" />


### 擴大選區

`=`是`+`的默認鍵位置，所以`Ctrl+=`其實就是`Ctrl`鍵和`+`號一起按下。

在HBuilderX裏可以智能的判斷選區範圍，持續擴大選區，無鼠標快速選中你需要的選區。

<img src="/static/snapshots/tutorial/selection_expand.gif" />


### 反包圍

1. 雙擊tag p開頭，選中該tag。
2. 按反包圍`Ctrl+Shift+]`，可去掉tag p並自動處理子節點的縮進。

<img src="/static/snapshots/tutorial/selection_1.gif" />

這裏多提一句HBuilderX的快捷鍵理念，就是符號化，而不是字母化。很多工具的快捷鍵都是控制鍵+功能英文單詞中的一個字母，這個是極難記憶的。

符號化讓快捷鍵的記憶變簡單，比如`Ctrl+]`是包圍。

而反操作或增強操作一般是加Shift，比如Ctrl+Shift+]是反包圍。

### 選中相同語法詞及跳過某詞

1. 下圖中，使用普通的選擇相同詞Ctrl+e(mac是Cmd+d)，會把所有div都選中。但使用Ctrl+Shift+e（mac是Cmd+Shift+d），會智能識別語法，剔除不相干的詞。
2. 下圖按下選擇相同語法詞，同時選中tag首尾的div，而不會選中子節點的div。
3. 然後就可以方便的將原div改名爲p

<img src="/static/snapshots/tutorial/selection_2.gif" />

備註：
- 如果想選擇配對括號，靠相同詞是不行的。選中相同語法詞會選中匹配的2個左右括號
- 批量選中所有相同詞是Ctrl+Alt+e(mac是ctrl+alt+d)

### 選擇相同語法詞或配對符號

菜單【選擇】【選擇相同語法詞或配對符號】

MacOSX快捷鍵：command+shift+d；Windows快捷鍵：ctrl+shift+e

<img src="/static/snapshots/tutorial/renameTag.gif" style="zoom: 50%;border: 1px solid #eee; border-radius: 5px;" >

### 交換選區內容

當需要交互2個選區的內容時，選中a、剪切、點b前面、粘貼、選中b、找到之前a的位置點擊、粘貼...這麼長的操作太低效。

來看HBuilderX的`Ctrl+Shift+x`交互選區，也就是Ctrl+x的增強版。

1. 雙擊第1個style屬性後的引號內側，可選中引號內容。
2. 按下Ctrl後繼續雙擊第2個style屬性後的引號內側，可選中2個引號內的選區。
3. 按下Ctrl+Shift+x，交換style屬性的內容。

<img src="/static/snapshots/tutorial/selection_swap_1.gif" />

如果不選擇內容，光標放置到2行，可直接交換這2行的內容，如下圖

<img src="/static/snapshots/tutorial/selection_swap_2.gif" />


### 撤銷最後一個多選區或多光標

選區選多了或選錯了，不用擔心要重頭選，Ctrl+Shift+z不是撤銷編輯內容，而是撤銷最後一個選區。

1. 雙擊選中class
2. 按`Ctrl+e`選中相同詞
3. 按`Ctrl+Shift+z`，不再選中最後一個詞。

<img src="/static/snapshots/tutorial/selection_cancel.gif" />

如果多選了一個詞，還可以點`Ctrl+鼠標右鍵`取消一個選區。

跳過當前詞選下一個詞,`Alt+Shift+e`(mac是`ctrl+shift+d`)


### 批量合併行

下圖示例，是把css合併爲一行時的快捷操作

<img src="/static/snapshots/tutorial/selection_merge.gif" />

1. 雙擊`{`內側選中class
2. 按`Ctrl+雙擊`選中另一個class
3. 按反格式化`Ctrl+Shift+k`，可以把每個css的區塊代碼都合併爲一行
4. `Ctrl+k`是格式化代碼，那麼`Ctrl+Shift+k`就是合併爲一行。

### 同時註釋if段首尾

if塊的調整很常見，除了包圍、反包圍外，常用操作還有同時註釋掉if段首尾。

1. 雙擊if選中if代碼塊
2. 按`Ctrl+\`在選區首尾加光標，變成多光標模式
3. 按`Ctrl+/`註釋掉選區首尾行

<img src="/static/snapshots/tutorial/selection_if.gif" />