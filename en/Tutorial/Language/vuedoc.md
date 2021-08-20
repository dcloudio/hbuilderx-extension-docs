> 仅支持HBuilderX 1.9.0+

### 什么是 vue doc ?

可以理解为，vue`组件`使用说明。

在其它文件，使用`组件`的时候，弹出代码提示。

什么是组件？组件是可复用的 Vue 实例，且带有一个名字。

### 语法

主要用在`script`部分，需要写在`export default上面`
```
/**
* 这里是一个组件描述，会在提示标签的时候显示
* @description 这里也是一个组件描述
* @tutorial https://uniapp.dcloud.io/api/media/image?id=chooseimage
* @property {String} type = [button|input|...值域] 这里是属性描述
* @event {Function} tap 这是是事件描述 
* @example 这里是示例代码
*/
```
其中@property和@event内`{` `}`中间的是类型，event的类型必须是**Function**。

### 示例


```javascript
<script>
  /**
   * 翻页组件
   * @description 翻页组件
   * @tutorial http://www.baidu.com
   * @property {Number} total 翻页数据总数
   * @property {String} size = [big|small] 组件大小
   * @event {Function} close 关闭事件
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

**组件提示，效果如下：**

<img src="/static/snapshots/tutorial/vuedoc_1.png" />

<img src="/static/snapshots/tutorial/vuedoc_2.png" />


**属性提示：**

<img src="/static/snapshots/tutorial/vuedoc_3.png" />


**事件提示：**

<img src="/static/snapshots/tutorial/vuedoc_4.png" />



