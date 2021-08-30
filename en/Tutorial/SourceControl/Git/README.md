# Git Introduce

## Introduce

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

> Since Git has been widely known, this article will not describe the Git tutorial in detail, only introduce some tools or learning materials.

Git tutorial: [Git Book](https://git-scm.com/doc)

Git GUI Client: [TortoiseGit（Windows）](https://tortoisegit.org/download/)

## Git Common commands

#### Repository

```
# Create an empty Git repository or reinitialize an existing one
$ git init
$ git init [project-name]

# Clone a repository into a new directory
$ git clone [url]
```

#### Config

```
# get git config list
$ git config --list

# edit git config file
$ git config -e [--global]

# set git user.name and user.email
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

#### add/rm File

```
#  Add file contents to the index
$ git add [file1] [file2] ...

#  Add Dir to the index
$ git add [dir]

# Add current Dir all Files to the index
$ git add .
$ git add -p

# git rm file
$ git rm [file1] [file2] ...
$ git rm --cached [file]

# git rename file
$ git mv [file-original] [file-renamed]
```

#### commit

```
# Record changes to the repository

$ git commit -m [message]
$ git commit [file1] [file2] ... -m [message]
$ git commit -a
$ git commit -v
$ git commit --amend -m [message]
$ git commit --amend [file1] [file2] ...
```

#### branch

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

# git cherry-pick commit to branch
$ git cherry-pick [commit]

# delete local branch
$ git branch -d [branch-name]

# delete remote branch
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

#### tags

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

#### Status and Log

```
# show project changes and project info
$ git status

# show git log
$ git log
$ git log --stat
$ git log -S [keyword]
$ git log [tag] HEAD --pretty=format:%s
$ git log [tag] HEAD --grep feature
$ git log --follow [file]
$ git whatchanged [file]
$ git log -p [file]
$ git log -5 --pretty --oneline
$ git shortlog -sn

$ git blame [file]

# git diff change
$ git diff
$ git diff --cached [file]
$ git diff HEAD
$ git diff [first-branch]...[second-branch]
$ git diff --shortstat "@{0 day ago}"

# git show change or other info
$ git show [commit]
$ git show --name-only [commit]
$ git show [commit]:[filename]

# show last commit
$ git reflog
```

#### pull-push-fetch

```
$ git fetch [remote]

# show remote url info
$ git remote -v

# show remote info
$ git remote show [remote]

$ git remote add [shortname] [url]

$ git pull [remote] [branch]

$ git push [remote] [branch]

$ git push [remote] --force

$ git push [remote] --all
```

#### reset

```
$ git checkout [file]

$ git checkout [commit] [file]

$ git checkout .

# Reset current HEAD to the specified state
$ git reset [file]
$ git reset --hard
$ git reset [commit]
$ git reset --hard [commit]
$ git reset --keep [commit]
$ git revert [commit]

$ git stash
$ git stash pop
```

#### other

```
# Generate a compressed package for publishing
$ git archive
```