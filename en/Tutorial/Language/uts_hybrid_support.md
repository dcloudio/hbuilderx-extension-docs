## Language Service Support for UTS Hybrid Native Files

Since version `4.46+`, uni-app x projects support the language service for hybrid native files, providing features such as code hints, go to definition, and find references in uts files.

> uni-app x supports native file hybridization. See [Details](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin-hybrid.html).

### How to Use

#### Write Native Files

*Kotlin Native Example Code*

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

*Java Native Example Code*

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

*Swift Native Example Code*

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

#### Import Native Files in UTS Files

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

**Swift native files do not need to be directly imported in UTS files and can be used directly in UTS files.**

#### Code Completion

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-1.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-6.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_completion.png)

#### Hover Tips

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-2.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-7.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_hover.png)

#### Go to Definition

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

#### Find References

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-5.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-10.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_ref.png)

### Notes

#### Install Dependent Plugins

For the Android platform, you need to install the HBuilderX core plugin `uts开发扩展-Android`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image.png)

For the iOS platform, you need to install the HBuilderX core plugin `uts开发扩展-iOS`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/plugin_uts_dev_ios.png)