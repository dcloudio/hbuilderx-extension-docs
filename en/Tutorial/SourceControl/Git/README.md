# About Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

> Since Git has been widely known, this article will not describe the Git tutorial in detail, only introduce some tools or learning materials.

Git tutorial: [Git Book](https://git-scm.com/doc)

Git GUI Client: [TortoiseGit（Windows）](https://tortoisegit.org/download/)

## Git Common commands

#### Repository

```
# Create a new Git repository
$ git init

# Initialize a Git repository for project
$ git init [project-name]

# Clone a repository into a directory
$ git clone [url]
```

#### Configuration

```
# Display git configuration of current repository 
$ git config --list

# Edit git configuration file
$ git config -e [--global]

# Set git user.name and user.email
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

#### Add/Remove File

```
#  Add file contents to the index
$ git add [file1] [file2] ...

# Add whole directory to the index
$ git add [dir]

# Add all files of current directory to the index
$ git add .

# Before adding each change, it will ask for confirmation
# For multiple changes of the same file, it can be submitted in stages
$ git add -p

# Git will remove files from repository
$ git rm [file1] [file2] ...

# Git remove the file's contents from the index
$ git rm --cached [file]

# Git move or rename file, a directory, or a symlink
$ git mv [file-original] [file-renamed]
```

#### Commit

```
# Record changes to the repository
$ git commit -m [message]

# Record multiple files changes to the repository
$ git commit [file1] [file2] ... -m [message]

# Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.
$ git commit -a

# Show unified diff between the HEAD commit and committing file
$ git commit -v

# Replace the tip of the current branch by creating a new commit
$ git commit --amend -m [message]

# Redo last commit with selected files
$ git commit --amend [file1] [file2] ...
```

#### Branch

```
# List the local branch
$ git branch

# List the remote branch
$ git branch -r

# List the local and the remote branch
$ git branch -a

# Create new branch
$ git branch [branch-name]

# Create new branch and switch this branch
$ git checkout -b [branch]

# Create new branch and point to this commit
$ git branch [branch] [commit]

# Create a new branch and establish a tracking with remote branch
$ git branch --track [branch] [remote-branch]

# Switch to branch
$ git checkout [branch-name]

# Switch to last branch
$ git checkout -

# Establish a tracking relationship between the local branch and the remote branch
$ git branch --set-upstream [branch] [remote-branch]

# Merge branch to current branch
$ git merge [branch]

# Select a commit and merge to main branch
$ git cherry-pick [commit]

# Delete local branch
$ git branch -d [branch-name]

# Delete remote branch
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

#### tags

```
# List all tag
$ git tag

# Create a tag for current commit
$ git tag [tag]

# Create a new tag at the specified commit
$ git tag [tag] [commit]

# Delete the local tag
$ git tag -d [tag]

# Delete the remote tag
$ git push origin :refs/tags/[tagName]

# Show tag info
$ git show [tag]

# PUsh tag to remote
$ git push [remote] [tag]

# Push all tags to remote
$ git push [remote] --tags

# Create new branch and point to the tag
$ git checkout -b [branch] [tag]
```

#### Status and Log

```
# Show project changes and project info
$ git status

# Sshow git log of current branch
$ git log

# Show git commit records
$ git log --stat

# Show git commit records with keyword
$ git log -S [keyword]

# Show git commit records with format lines
$ git log [tag] HEAD --pretty=format:%s

# Show git commit records with matched search
$ git log [tag] HEAD --grep feature

# Show git commit records of file
$ git log --follow [file]
$ git whatchanged [file]

# Show every commit diff of specified file
$ git log -p [file]

# Show last 5 commit
$ git log -5 --pretty --oneline

# Show all submitted users, sorted by the number of submissions
$ git shortlog -sn

# Show who and when modified file
$ git blame [file]

# Show the diff between head and cached
$ git diff

# Show the diff between cached and last commit 
$ git diff --cached [file]|

# Show the diff between Head and current branch
$ git diff HEAD

# Show the diff between 2 commits
$ git diff [first-branch]...[second-branch]

# Output total number of modified files, as well as number of added and deleted lines.
$ git diff --shortstat "@{0 day ago}"

# Show change of a commit
$ git show [commit]

# Show the changed file name in a commit
$ git show --name-only [commit]

# Show the file content in a commit
$ git show [commit]:[filename]

# Show last commit
$ git reflog
```

#### Remote Sync

```
# Get all changed files from remote repository and merge with local files
$ git fetch [remote]

# List all remote repositories
$ git remote -v

# Show info of a remote repository
$ git remote show [remote]

# Add a new remote repository and rename it
$ git remote add [shortname] [url]

# Get all changed files from remote repository and merge with local branch
$ git pull [remote] [branch]

# Push local changed files to remote repository
$ git push [remote] [branch]

# Push local changed files to remote repository, even if there are conflicts
$ git push [remote] --force

# Push all local changed files to remote repository
$ git push [remote] --all
```

#### reset

```
# Restore the specified files from the temporary storage area to the workspace
$ git checkout [file]

# Restore the specified file of a commit to the workspace
$ git checkout [commit] [file]

# Restore all file of a commit to the workspace
$ git checkout .

# Reset current HEAD to the specified state
$ git reset [file]

# Reset the staging area and workspace to be consistent with the last commit
$ git reset --hard

# Reset the pointer of the current branch to the specified commit, and reset staging area, but the workspace remains unchanged
$ git reset [commit]

# Reset the HEAD of the current branch to the specified commit, and reset staging area and workspace at the same time, consistent with the specified commit
$ git reset --hard [commit]

# Reset the current HEAD to the specified commit, but keep staging area and the workspace are unchanged
$ git reset --keep [commit]

# Create a new commit to revoke the specified commit
# All changes in the latter will be offset by the former and applied to the current branch
$ git revert [commit]

# Temporarily remove uncommitted changes and move them in later
$ git stash
$ git stash pop
```

#### other

```
# Generate a compressed package for publishing
$ git archive
```
