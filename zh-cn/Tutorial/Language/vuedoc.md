> 仅支持HBuilderX 1.9.0+

### 什么是 vue doc ?

可以理解为，vue`组件`使用说明。

在其它文件，使用`组件`的时候，弹出代码提示。

什么是组件？组件是可复用的 Vue 实例，且带有一个名字。

### 支持的标签

**主要用在`script`部分，需要写在`export default`上面**

| 标签        | 用法                                                                    | 说明                                                                                                 |
| :---------- | :---------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| description | @description 这是一个描述信息                                           | 一个组件描述。                                                                                       |
| tutorial    | @tutorial <https://www.dcloud.io>                                       | 用于引用其他文档或教程。                                                                             |
| property    | @property {type} name                                                   | 用于描述组件的属性。                                                                                 |
| value       | @value 描述属性能够使用的值                                             | 值域，用于限定属性能够使用的值。它紧跟在property后面使用。                                           |
| event       | @event {(e:MouseEvent)=>void} 事件名称 </br> @event {Function} 事件名称 | 用于提示事件说明。 有两种使用方式, 可写死Function, 也可以写箭头函数。                                |
| example     | @example `<Pagination @total="50" @close=""></Pagination>`              | 用于提供示例代码。它可以包含一段代码片段，用于演示如何使用注释的代码。可以多行，支持 markdown 语法。 |
| uniPlatform | @uniPlatform {"web": {"uniVer": "3.6.2+", "unixVer": "x" }}             | 仅用于提供uniapp兼容性信息。 `uniPlatform`需要参考详细规范。**`3.9.0+版本后支持`**                   |

### 示例

```javascript

/**
 * 翻页组件
 * @description 翻页组件
 * @tutorial http://www.baidu.com
 * @property {Number} total 翻页数据总数
 * @property {String} size  组件大小
 * @value big 大
 * @value small 小
 * @event {(e:MouseEvent)=>void} open 事件名称
 * @event {Function} close 关闭事件
 * @example <Pagination @total="50" @close=""></Pagination>
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "3.9.0"
 *     },
 *     "ios": {
 *       "osVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "3.9.0"
 *     }
 *   },
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "x"
 *     },
 *     "kuaishou": {
 *       "hostVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "x"
 *     }
 *   },
 *   "web": {
 *     "uniVer": "3.6.2+",
 *     "unixVer": "x"
 *   }
 * }
 */
export default {
    props: {
        total: Number,
        size: String,
    },
    data() {
        return {
            pageSize: 10,
            pageNumber: 0,
        };
    },
    methods: {
        handleChange(data, event) {
            this.$emit('PsPn', this.pageSize, this.pageNumber);
        },
    },
};

```

**组件提示，效果如下：**

<img src="/static/snapshots/tutorial/vuedoc_1.png" />

<img src="/static/snapshots/tutorial/vuedoc_2.png" />


**属性提示：**

<img src="/static/snapshots/tutorial/vuedoc_3.png" />


**事件提示：**

<img src="/static/snapshots/tutorial/vuedoc_4.png" />


### 特殊值域string@spec-types
在vue Doc中也可以使用特殊值域string，用于限定属性能够使用的值。它紧跟在property后面使用。
```javascript
/**
 * @property {IDString} id
 */
```

详情请参考 [特殊值域string](https://uniapp.dcloud.net.cn/uts/data-type.html#ide-string)
