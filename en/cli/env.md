# cli environment variables

In addition, you can add cli to environment variables, so that you can call cli anytime and anywhere, without having to enter the absolute path of cli.

## MacOSX

The following examples use the installation path of the official version of HBuilderX as an example. If you use alpha cli, please replace the path.

Before modifying, please confirm your shell type.

How to check the shell type, open the terminal and enter `echo $SHELL`

### Method 1: Add Environment Variables

> **Warning：** When modifying environment variables, please **`Caution`** **`Careful`**. If you have no experience, don't do it.

If your shell is `bash`, enter the terminal, edit the environment variable file `~/.bash_profile`, enter the following

If your shell is `zsh`, enter the terminal, edit the environment variable file `~/.zprofile`, and enter the following

```shell
export HX_HOME=/Applications/HBuilderX.app/Contents/MacOS/
export PATH=$HX_HOME:$PATH:.
```

### Method 2: Create Alias

Open the terminal and execute the following commands according to the shell type:
```shell
# shell type: bash
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.bashrc && source ~/.bashrc

# shell type:zsh
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.zshrc && source ~/.zshrc
```

### Method 3：Create link

Open the terminal and execute the following command:
```shell
ln -s /Applications/HBuilderX.app/Contents/MacOS/cli /usr/local/bin/cli
```


## Windows

1. Copy the path of the HBuilderX installation directory (the parent directory of the location where the HBuilderX.exe program is located)
2. Right click on Computers -> Properties -> Advanced system settings -> Environment Variables
3. [User Variables], click [Edit], find path, and enter the HBuilderX path.

<img src="/static/snapshots/cli/cli_env.png"/>
