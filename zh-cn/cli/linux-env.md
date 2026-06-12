# Linux CLI 下 UTS 插件的 Android 环境配置@linux-env

在 Linux 上使用 HBuilderX CLI 时，只有当项目包含**依赖第三方 Gradle 的 UTS 插件**时，才需要安装 **Android SDK**、**Gradle**，并将路径写入 HBuilderX 配置。若 UTS 插件**不包含第三方 Gradle 依赖**，则**无需**配置本文环境。

> 目前我们仅在 **Ubuntu** 系统上进行了测试，并未在其他 Linux 发行版上验证。如有问题，请及时反馈。

## 1. 安装基础依赖和 JDK

Android SDK 与 Gradle 均依赖 Java 环境。以下安装 OpenJDK 17：

```bash
# 更新系统软件包列表
sudo apt update && sudo apt upgrade -y

# 安装常用工具（wget、unzip、git 等）
sudo apt install -y wget unzip git curl

# 安装 OpenJDK 17
sudo apt install -y openjdk-17-jdk openjdk-17-jre

# 验证 Java 安装
java -version
```

## 2. 安装 Gradle

推荐使用官方二进制包安装较新版本（以 8.7 为例）：

```bash
# 下载并解压 Gradle
VERSION=8.7
wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp
sudo unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip

# 配置 Gradle 环境变量
echo "export GRADLE_HOME=/opt/gradle/gradle-${VERSION}" >> ~/.bashrc
echo 'export PATH=$GRADLE_HOME/bin:$PATH' >> ~/.bashrc

# 刷新环境变量
source ~/.bashrc

# 验证 Gradle 安装
gradle -v
```

## 3. 安装 Android SDK 命令行工具

在无图形界面的 Ubuntu 环境中，通过 `commandlinetools` 管理 SDK 组件：

```bash
# 创建 Android SDK 目录
mkdir -p ~/android-sdk/cmdline-tools

# 下载 Android 命令行工具（最新版 URL 见 Android 官网）
cd /tmp
wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip

# 解压（Google 要求 cmdline-tools 下须包含 latest 目录）
unzip commandlinetools-linux-11076708_latest.zip
mv cmdline-tools ~/android-sdk/cmdline-tools/latest

# 配置 Android SDK 环境变量
echo 'export ANDROID_HOME=$HOME/android-sdk' >> ~/.bashrc
echo 'export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH' >> ~/.bashrc

# 刷新环境变量
source ~/.bashrc
```

## 4. 安装 Android SDK 组件

```bash
# 接受 Android SDK 许可证书
sdkmanager --licenses

# 安装平台工具、构建工具与 SDK 版本（以 API 34 为例）
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"

# 验证 adb 是否可用
adb --version
```

## 5. 配置 HBuilderX

> `cli config set` 需 HBuilderX 5.14+ 版本

完成上述安装后，还需要将 Gradle 和 Android SDK 的路径写入 HBuilderX 配置。仅在 Shell 中设置环境变量并不够，因为 HBuilderX 不会自动读取当前终端中的这些变量。

配置前请先启动 HBuilderX，然后在 CLI 中执行以下命令更新配置：

```shell
cli config set --key uts-development-android.gradleHome --value /opt/gradle/gradle-8.7/bin/gradle
cli config set --key uts-development-android.sdkDir --value /home/your-user/android-sdk
```

请将命令中的路径替换为本机实际路径：

- `uts-development-android.gradleHome`：填写 Gradle **可执行文件的绝对路径**，如 `/opt/gradle/gradle-8.7/bin/gradle`
- `uts-development-android.sdkDir`：填写 Android SDK **根目录的绝对路径**，如 `/home/your-user/android-sdk`

如果后续升级了 Gradle，请同步更新 `uts-development-android.gradleHome`。

如果当前版本暂不支持 `cli config set`，也可以直接编辑用户配置文件：

```shell
~/.local/share/HBuilder\ X/user/settings.json
```

示例：

```json
{
  "uts-development-android.gradleHome": "/opt/gradle/gradle-8.7/bin/gradle",
  "uts-development-android.sdkDir": "/home/ubuntu/android-sdk",
}
```

配置完成后，HBuilderX 在执行 Android 本地编译相关任务时，会按上述路径查找 Gradle 和 Android SDK。
