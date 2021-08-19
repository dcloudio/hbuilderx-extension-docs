# Git Introduce

## Introduce

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

> Since Git has been widely known, this article will not describe the Git tutorial in detail, only introduce some tools or learning materials.

Git tutorial: [Git Book](https://git-scm.com/doc)

Git GUI Client: [TortoiseGit（Windows）](https://tortoisegit.org/download/)

## Git Common commands

### Repository

```
# Create an empty Git repository or reinitialize an existing one
$ git init
$ git init [project-name]

# Clone a repository into a new directory
$ git clone [url]
```

### Config

```
# get git config list
$ git config --list

# edit git config file
$ git config -e [--global]

# set git user.name and user.email
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

### add/rm File

```
#  Add file contents to the index
$ git add [file1] [file2] ...

#  Add Dir to the index
$ git add [dir]

# Add current Dir all Files to the index
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

### commit

```
# Record changes to the repository
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### branch

```
# List the local branch
$ git branch

# List the remote branch
$ git branch -r

# List the local and the remote branch
$ git branch -a

# create branch
$ git branch [branch-name]

# create branch and switch branch
$ git checkout -b [branch]

# create branch
$ git branch [branch] [commit]

# create branch
$ git branch --track [branch] [remote-branch]

# switch branch
$ git checkout [branch-name]

# switch last branch
$ git checkout -

# Establish a tracking relationship between the local branch and the remote branch
$ git branch --set-upstream [branch] [remote-branch]

# merge branch to current branch
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# delete local branch
$ git branch -d [branch-name]

# delete remote branch
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### tags

```
# List all tag
$ git tag

# create tag
$ git tag [tag]

# Create a new tag at the specified commit
$ git tag [tag] [commit]

# delete the local tag
$ git tag -d [tag]

# delete the remote tag
$ git push origin :refs/tags/[tagName]

# show tag info
$ git show [tag]

# push tag to remote
$ git push [remote] [tag]

# push all tags to remote
$ git push [remote] --tags

# create new branch at the tag
$ git checkout -b [branch] [tag]
```

### Status and Log

```
# show project changes and project info
$ git status

# show git log
$ git log

# show git log
$ git log --stat

# search log
$ git log -S [keyword]

# show the log in the specified format
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

### pull-push-fetch

```
# 下载远程仓库的所有变动
$ git fetch [remote]

# show remote url info
$ git remote -v

# show remote info
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

### reset

```
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

### other

```
# Generate a compressed package for publishing
$ git archive
```