# Git介紹

## 前言

Git，是一個開源的分佈式版本控制系統，用以有效、高速的處理從很小到非常大的項目版本管理。支持克隆/下載。

> 介於Git已廣爲人知，本文不再詳細描述Git使用教程，只介紹一些工具或學習資料。

Git教程: [Git Book 官方中文文檔](https://git-scm.com/book/zh/v2)

Git GUI客戶端: [TortoiseGit（Windows）](https://tortoisegit.org/download/)

## Git常用命令

### 倉庫

```
# 在當前目錄新建一個Git代碼庫
$ git init

# 新建一個目錄，將其初始化爲Git代碼庫
$ git init [project-name]

# 下載一個項目和它的整個代碼歷史
$ git clone [url]
```

### 配置

```
# 顯示當前的Git配置
$ git config --list

# 編輯Git配置文件
$ git config -e [--global]

# 設置提交代碼時的用戶信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

### 增加/刪除文件

```
# 添加指定文件到暫存區
$ git add [file1] [file2] ...

# 添加指定目錄到暫存區，包括子目錄
$ git add [dir]

# 添加當前目錄的所有文件到暫存區
$ git add .

# 添加每個變化前，都會要求確認
# 對於同一個文件的多處變化，可以實現分次提交
$ git add -p

# 刪除工作區文件，並且將這次刪除放入暫存區
$ git rm [file1] [file2] ...

# 停止追蹤指定文件，但該文件會保留在工作區
$ git rm --cached [file]

# 改名文件，並且將這個改名放入暫存區
$ git mv [file-original] [file-renamed]
```

### 代碼提交

```
# 提交暫存區到倉庫區
$ git commit -m [message]

# 提交暫存區的指定文件到倉庫區
$ git commit [file1] [file2] ... -m [message]

# 提交工作區自上次commit之後的變化，直接到倉庫區
$ git commit -a

# 提交時顯示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代碼沒有任何新變化，則用來改寫上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，幷包括指定文件的新變化
$ git commit --amend [file1] [file2] ...
```

### 分支

```
# 列出所有本地分支
$ git branch

# 列出所有遠程分支
$ git branch -r

# 列出所有本地分支和遠程分支
$ git branch -a

# 新建一個分支，但依然停留在當前分支
$ git branch [branch-name]

# 新建一個分支，並切換到該分支
$ git checkout -b [branch]

# 新建一個分支，指向指定commit
$ git branch [branch] [commit]

# 新建一個分支，與指定的遠程分支建立追蹤關係
$ git branch --track [branch] [remote-branch]

# 切換到指定分支，並更新工作區
$ git checkout [branch-name]

# 切換到上一個分支
$ git checkout -

# 建立追蹤關係，在現有分支與指定的遠程分支之間
$ git branch --set-upstream [branch] [remote-branch]

# 合併指定分支到當前分支
$ git merge [branch]

# 選擇一個commit，合併進當前分支
$ git cherry-pick [commit]

# 刪除分支
$ git branch -d [branch-name]

# 刪除遠程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### 標籤

```
# 列出所有tag
$ git tag

# 新建一個tag在當前commit
$ git tag [tag]

# 新建一個tag在指定commit
$ git tag [tag] [commit]

# 刪除本地tag
$ git tag -d [tag]

# 刪除遠程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一個分支，指向某個tag
$ git checkout -b [branch] [tag]
```

### 查看信息

```
# 顯示有變更的文件
$ git status

# 顯示當前分支的版本歷史
$ git log

# 顯示commit歷史，以及每次commit發生變更的文件
$ git log --stat

# 搜索提交歷史，根據關鍵詞
$ git log -S [keyword]

# 顯示某個commit之後的所有變動，每個commit佔據一行
$ git log [tag] HEAD --pretty=format:%s

# 顯示某個commit之後的所有變動，其"提交說明"必須符合搜索條件
$ git log [tag] HEAD --grep feature

# 顯示某個文件的版本歷史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 顯示指定文件相關的每一次diff
$ git log -p [file]

# 顯示過去5次提交
$ git log -5 --pretty --oneline

# 顯示所有提交過的用戶，按提交次數排序
$ git shortlog -sn

# 顯示指定文件是什麼人在什麼時間修改過
$ git blame [file]

# 顯示暫存區和工作區的差異
$ git diff

# 顯示暫存區和上一個commit的差異
$ git diff --cached [file]

# 顯示工作區與當前分支最新commit之間的差異
$ git diff HEAD

# 顯示兩次提交之間的差異
$ git diff [first-branch]...[second-branch]

# 顯示今天你寫了多少行代碼
$ git diff --shortstat "@{0 day ago}"

# 顯示某次提交的元數據和內容變化
$ git show [commit]

# 顯示某次提交發生變化的文件
$ git show --name-only [commit]

# 顯示某次提交時，某個文件的內容
$ git show [commit]:[filename]

# 顯示當前分支的最近幾次提交
$ git reflog
```

### 遠程同步

```
# 下載遠程倉庫的所有變動
$ git fetch [remote]

# 顯示所有遠程倉庫
$ git remote -v

# 顯示某個遠程倉庫的信息
$ git remote show [remote]

# 增加一個新的遠程倉庫，並命名
$ git remote add [shortname] [url]

# 取回遠程倉庫的變化，並與本地分支合併
$ git pull [remote] [branch]

# 上傳本地指定分支到遠程倉庫
$ git push [remote] [branch]

# 強行推送當前分支到遠程倉庫，即使有衝突
$ git push [remote] --force

# 推送所有分支到遠程倉庫
$ git push [remote] --all
```

### 撤銷

```
# 恢復暫存區的指定文件到工作區
$ git checkout [file]

# 恢復某個commit的指定文件到暫存區和工作區
$ git checkout [commit] [file]

# 恢復暫存區的所有文件到工作區
$ git checkout .

# 重置暫存區的指定文件，與上一次commit保持一致，但工作區不變
$ git reset [file]

# 重置暫存區與工作區，與上一次commit保持一致
$ git reset --hard

# 重置當前分支的指針爲指定commit，同時重置暫存區，但工作區不變
$ git reset [commit]

# 重置當前分支的HEAD爲指定commit，同時重置暫存區和工作區，與指定commit一致
$ git reset --hard [commit]

# 重置當前HEAD爲指定commit，但保持暫存區和工作區不變
$ git reset --keep [commit]

# 新建一個commit，用來撤銷指定commit
# 後者的所有變化都將被前者抵消，並且應用到當前分支
$ git revert [commit]

暫時將未提交的變化移除，稍後再移入
$ git stash
$ git stash pop
```

### 其他

```
# 生成一個可供發佈的壓縮包
$ git archive
```