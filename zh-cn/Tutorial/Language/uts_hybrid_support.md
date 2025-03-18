## UTS混编原生文件语言服务支持

自`4.46+`版本起，uni-app x 项目支持混编原生文件的语言服务，提供在uts文件中代码提示、转到定义、查找引用等功能

> uni-app x支持原生文件混编，见[详情](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin-hybrid.html)

### 如何使用

#### 编写原生文件

*kotlin原生示例代码*

```kotlin
package uts.sdk.modules.utsDemoMem

// 这里是原生的包名引用
import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
// UTS内置对象的包名引用
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.UTSArray
import io.dcloud.uts.console

object NativeCode {

    fun getMemInfo():Array<Number>{
    
        val activityManager = UTSAndroid.getUniActivity()?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
        val memoryInfo = ActivityManager.MemoryInfo()
        activityManager.getMemoryInfo(memoryInfo)
        val availMem = memoryInfo.availMem / 1024 / 1024
        val totalMem = memoryInfo.totalMem / 1024 / 1024
    
        // availMem 可用内存，单位MB
        // totalMem 设备内存，单位MB
        console.log(availMem,totalMem)
        return arrayOf(availMem,totalMem)
    }

}
```

*java原生示例代码*

```java
import java.io.File;

public class JavaUser {

    @Nullable
    public String name;
    public int age;

    public JavaUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "Name: " + name + ", Age: " + age;
    }
}
```

*swift原生示例代码*

```swift
class NativeCode {
    static func getNativeStr() -> String {
        return "iOS-code"
    }

    func getNativeNum() -> Number {
        return 123
    }
}
```

#### 在uts文件中引入原生文件

*kotlin*

```js
// 导入kotlin原生文件
import { NativeCode } from "./kotlinCode.kt"
```

*java*

```js
// 导入java原生文件
import JavaUser from "./JavaUser.java"
```

*swift*

**swift原生文件不需要在uts文件中直接引入，在uts文件中可以直接使用**

#### 代码提示

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-1.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-6.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_completion.png)

#### 悬浮提示

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-2.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-7.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_hover.png)

#### 转到定义

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-3.png)

<span style="color:green;">⬇︎⬇⬇</span>

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-4.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-8.png)

<span style="color:green;">⬇︎⬇⬇</span>

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-9.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_goto_def1.png)

<span style="color:green;">⬇︎⬇⬇</span>

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_goto_def2.png)

#### 查找引用

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-5.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-10.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_ref.png)

### 注意

#### 安装依赖插件

android平台需要安装HBuilderX核心插件 `uts开发扩展-Android`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image.png)

ios平台需要安装HBuilderX核心插件 `uts开发扩展-iOS`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/plugin_uts_dev_ios.png)