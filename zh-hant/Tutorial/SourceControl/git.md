# Git重大更新

HBuilderX 3.1.23+ 支持在項目管理上對Git項目進行一些快捷操作。

在Git項目名稱後面顯示該Git倉庫的當前分支，樣式如圖所示：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch.png" style="border:1px solid #eee; border-radius: 5px;"/>

備註：在HBuilderX內，使用Git，需要先安裝Git插件，Git插件調用的是`外部Git工具`，因此需要安裝的Git命令行工具；同時windows也需要安裝[TortoiseGit](https://tortoisegit.org/download/)。

### Git快捷操作菜單

該標籤可以點擊，打開Git快捷操作菜單，在Git插件裏“scm/file/branchlabel”擴展點配置了該菜單列表。該功能默認開啓：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_menu.png" style="border:1px solid #eee; border-radius: 5px;"/>

同時，對舊版本的Git插件以下命令做了升級：

### 切換分支（checkout）

點擊“切換分支”菜單，彈出分支選擇列表，選擇本地分支或遠程分支執行簽出：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout.png" style="border:1px solid #eee; border-radius: 5px;"/>

執行簽出時會在狀態欄提示狀態：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout_tips.png" style="border:1px solid #eee; border-radius: 5px;"/>

### 獲取（fetch）

點擊“獲取”菜單，在當前項目執行git fetch命令

### 拉取（pull）

點擊“拉取”菜單，默認提供了幾個拉取選項（目前不能自定義）：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_pull.png" style="border:1px solid #eee; border-radius: 5px;"/>

```
# git pull和git pull --rebase的區別
git pull = git fetch + git merge
git pull --rebase = git fetch + git rebase
```

### 推送（push）

點擊“推送”菜單，默認提供了幾個推送選項（目前不能自定義），當選擇“force”選項是，會進行二次確認是否繼續執行：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_push.png" style="border:1px solid #eee; border-radius: 5px;"/>

特別說明： `git push --force` 強制推送，會覆蓋遠端內容，請謹慎操作。