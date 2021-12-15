# 跳轉/轉到定義@goto

HBuilderX擁有強大的跳轉功能，如下:

- 光標跳轉
- 轉到行
- 轉到指定行列
- 轉到匹配的括號
- 跳轉到書籤
- 跳轉到滾動條信息點
- 轉到定義
- 轉到定義到分欄
- .....

### 上一個光標位置@goto-previous-location

在HBuilderX中，`Alt+Left` (MacOSX: `ctrl + -`)、點擊工具欄上的`<`, 即可回到上一個光標位置。

### 轉到行@goto-line

轉到行快捷鍵：`ctrl + G`

<img src="/static/snapshots/tutorial/goto_line.jpg" style="zoom: 50%;border:1px solid #eee;border-radius: 25px;" />

### 跳轉到指定行列@goto-line-column

> 僅支持HBuilderX 2.8.10+


<img src="/static/snapshots/tutorial/goto_lc.jpg" style="zoom: 50%;border:1px solid #eee;border-radius: 25px;" />

注意：HBuilderX 3.1.13+版本，支持輸入`0`跳轉到首行、輸入`$`跳轉到最後一行。

同時支持通過命令行打開指定文件，並跳轉到指定的行和列。

```
# 示例：
/Applications/HBuilderX-Alpha.app/Contents/MacOS/HBuilderX /Users/hx/filename.md:2:10
```

注意：文件，需要是絕對路徑

### 轉到定義@goto-definition

轉到定義是非常常用的功能，普通編輯器不長於此，只能猜單詞跳轉。

HBuilderX有強大的語法分析引擎，可以準確的跳轉定義位置。

轉到定義的快捷鍵是`Alt+d`，鼠標操作是alt+左鍵單擊（注意不是ctrl，因爲ctrl留給了多光標）

<img src="/static/snapshots/started_tutorial/3b6a921a9021ffa5ed54e7633afb7fd0.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

> 備註：支持切換【Ctrl+鼠標左鍵】或【Alt+鼠標左鍵】進行轉到定義 （菜單【選擇】，最後一個菜單）

### 轉到定義到分欄@goto-definition-to-column

而HBuilderX還有一個特色是`轉到定義到分欄`，`ctrl+alt+左鍵`，可以把一個定義處的代碼打開在另一側，方便共同查看

<img src="/static/snapshots/started_tutorial/c75ed6bdd5b6c5a9b8c827b2ee1262a9.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



