> 僅支持HBuilderX 1.9.0+

### 什麼是 vue doc ?

可以理解爲，vue`組件`使用說明。

在其它文件，使用`組件`的時候，彈出代碼提示。

什麼是組件？組件是可複用的 Vue 實例，且帶有一個名字。

### 語法

主要用在`script`部分，需要寫在`export default上面`
```
/**
* 這裏是一個組件描述，會在提示標籤的時候顯示
* @description 這裏也是一個組件描述
* @tutorial https://uniapp.dcloud.io/api/media/image?id=chooseimage
* @property {String} type = [button|input|...值域] 這裏是屬性描述
* @event {Function} tap 這是是事件描述 
* @example 這裏是示例代碼
*/
```
其中@property和@event內`{` `}`中間的是類型，event的類型必須是**Function**。

### 示例


```javascript
<script>
  /**
   * 翻頁組件
   * @description 翻頁組件
   * @tutorial http://www.baidu.com
   * @property {Number} total 翻頁數據總數
   * @property {String} size = [big|small] 組件大小
   * @event {Function} close 關閉事件
   * @example <Pagination @total="50" @close=""></Pagination>
   */
  export default {
    props: {
      "total": Number,
      "size": String
    },
    data () {
      return {
        pageSize: 10,
        pageNumber: 0
      }
    },
    methods: {
      handleChange(data, event) {
        this.$emit('PsPn', this.pageSize, this.pageNumber)
      }
    }
  }
</script>
```

**組件提示，效果如下：**

<img src="/static/snapshots/tutorial/vuedoc_1.png" />

<img src="/static/snapshots/tutorial/vuedoc_2.png" />


**屬性提示：**

<img src="/static/snapshots/tutorial/vuedoc_3.png" />


**事件提示：**

<img src="/static/snapshots/tutorial/vuedoc_4.png" />



