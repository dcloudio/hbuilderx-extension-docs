> Only supports HBuilderX 1.9.0+

### What is Vue Doc ?

It can be understood as vue `component` instructions.

When using `components` in other files, a code prompt will pop up.

What is a component? Components are reusable Vue instances with a name.

### Syntax

Mainly used in the `script` part, it needs to be written on the `export default`
```
/**
* Here is a component description, which will be displayed when the label is prompted
* @description Here is also a component description
* @tutorial https://uniapp.dcloud.io/api/media/image?id=chooseimage
* @property {String} type = [button|input|...] attribute description
* @event {Function} tap Event description 
* @example Sample code
*/
```

Among them, the type between the @property and @event `{` `}` is the type, and the type of event must be **Function**.

### Example


```javascript
<script>
  /**
   * Page turning component
   * @description Page turning component
   * @tutorial http://www.baidu.com
   * @property {Number} total Total number of page data
   * @property {String} size = [big|small] Component size
   * @event {Function} close Close event
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

**Component tips：**

<img src="/static/snapshots/tutorial/vuedoc_1.png" />

<img src="/static/snapshots/tutorial/vuedoc_2.png" />


**Attribute hints：**

<img src="/static/snapshots/tutorial/vuedoc_3.png" />


**Event reminder：**

<img src="/static/snapshots/tutorial/vuedoc_4.png" />



