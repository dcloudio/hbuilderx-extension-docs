## UTS混編原生文件語言服務支援

自`4.46+`版本起，uni-app x 專案支援混編原生文件的語言服務，提供在uts文件中代碼提示、轉到定義、查找引用等功能

> uni-app x支援原生文件混編，見[詳情](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin-hybrid.html)

### 如何使用

#### 編寫原生文件

*kotlin原生示例代碼*

```kotlin
package uts.sdk.modules.utsDemoMem

// 這裡是原生的包名引用
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

*Java原生示例代碼*

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

*Swift原生示例代碼*

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

#### 在uts檔案中引入原生檔案

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

**Swift原生檔案不需要在uts檔案中直接引入，在uts檔案中可以直接使用**

#### 代碼提示

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-1.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-6.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_completion.png)

#### 懸浮提示

*kotlin*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-2.png)

*java*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image-7.png)

*swift*

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/swift_hover.png)

#### 轉到定義

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

#### 安裝依賴插件

android平台需要安装HBuilderX核心插件 `uts开发扩展-Android`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/image.png)

ios平台需要安装HBuilderX核心插件 `uts开发扩展-iOS`

![alt text](https://web-ext-storage.dcloud.net.cn/hx/uts_hybrid/plugin_uts_dev_ios.png)