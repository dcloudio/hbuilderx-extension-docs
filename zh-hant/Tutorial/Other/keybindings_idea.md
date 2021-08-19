# HBuilderX的快捷鍵理念

HBuilderX的快捷鍵原則是：不定義記不住的快捷鍵
過去的很多工具都提供了太多abcd的快捷鍵，完全記不住
HBuilderX在定義每個快捷鍵時都經過了考量，記住如下原則，就可掌握大部分快捷鍵

> command是MacOSX按鍵，windows對應是的Ctrl

#### 儘可能保持與OS、瀏覽器接近

比如標籤卡管理，與瀏覽器完全相同，`command+t`新建標籤卡、`command+shift+t`恢復剛關閉的標籤卡、`command+w`關閉標籤卡、`command+alt+left/right`切換標籤卡

對於習慣eclipse體系`command+t`尋找文件的用戶，需記得尋找文件的快捷鍵已經調整爲command+p

#### command是操作、command+shift是反操作或更多操作、command+alt爲更多操作

`command+k`是格式化，那麼`command+shift+k`就是合併爲一行

`command+w`是關閉當前標籤卡，那麼`command+shift+w`是關閉所有標籤卡

`command+f`是搜索，`command+alt+f`是目錄內搜索

#### 符號化而不是單詞字母化

包圍的英文是surround，但從這個單詞裏選一個字母配合command等鍵定爲快捷鍵是很難記住的。

`command+]`是包圍，`command+shift+]`是反包圍，這樣好記多了

`command+shift+|`是給選中行每行設置光標，“|”就是光標的樣子，很形象

#### 強化和鼠標的配合，更易用

- `alt+鼠標滾輪`是橫向滾動
- `alt+鼠標單擊`是轉到定義
- `alt+鼠標拖動`是列選擇
- `command+鼠標單擊`是添加多光標
- `鼠標雙擊`可以智能選中，詳見選擇菜單

#### 老HBuilder用戶需注意的常見快捷鍵差異

- 尋找文件從`command+t`改爲`command+p`
- 刪除行從`command+d`改爲`ctrl+d`。`command+d`讓給了選擇相同詞
- 格式化從`command+shift+f`改爲`command+k`
- 合併行從`command+j`改爲`command+shift+k`
- ctrl+d爲刪除當前行

#### sublime用戶需注意常見快捷鍵差異

- 重複行內容的快捷鍵是`command+shift+r`
- 打開控制檯不是`command+~`而是`ctrl+x`
- 合併行不是`command+j`而是`command+shift+k`
- 在每行行首設置光標不是`command+shift+l`而是`command+shift+\`
- 選擇括號內容不是`command+shift+m`而是`command+[`
- `command+]`是加包圍。除了包圍tag還支持包圍if等函數塊。同時提供`command+shift+]`爲反包圍
- 調縮進是`tab`或`shift+tab`，不是command+[和]
- 選擇tag、相同縮進，可以雙擊tag首尾或縮進符號，不用背快捷鍵
- 擴大選區是`command+=`，更易用
- 複製行或選區是`command+shift+r`而不是`command+shift+d`
- 當然在右上角，你也可以點擊下拉菜單，切換其他工具的快捷鍵方案