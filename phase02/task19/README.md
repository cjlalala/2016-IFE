##任务十九：基础JavaScript练习（二）
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase02/task19/task19.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=19)
###任务目的
* 学习与实践JavaScript的基本语法、语言特性
* 练习使用JavaScript实现简单的排序算法

###任务描述
* 基于任务18
* 限制输入的数字在10-100
* 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
* 队列展现方式变化[如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_19_1.jpg)，直接用高度表示数字大小
* 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料

###遇到的问题
　　这一问相比较17、18问，主要添加的任务就是要把数据的排序过程一步一步的展现出来<br>
  
　　这里采用的排序方法是先将第一个数和第二个数比较，如果第一个数大于第二个数就交换两个数的位置（将小的数排在前<br>
  面），再依次比较第一个数和第三个数。。。。以此类推，那么这一轮下来就可以将最小的数排在第一位，第二轮就拿第二个<br>
  数和后面的依次比较，得到第二小的数排在第二位，经过number.length轮就可以把所有的数按从小排好了。<br>
  
　　至于如何用可视化的方式将过程展现出来，这里要用到setInterval()方法，该方法可按照指定的周期（以毫秒计）来调用函<br>
  数或计算表达式，所以我们只要以一定的周期调用排序的每一步，也就是将每一次数据交换之后得到的柱状图以一定的<br>
  时间间隔展现出来，那么排序的过程看起来就是一步一步进行的，而不是一瞬间就结束了。<br>
  
　　注意：setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值<br>
可用作 clearInterval() 方法的参数。<br>

###在线学习参考资料
[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)<br>
[归并排序算法可视化](http://v.youku.com/v_show/id_XNTM1NTQxMDMy.html)<br>
[15种排序算法可视化展示](http://v.youku.com/v_show/id_XNjIwNTEzMTA0.html?from=y1.2-1-176.3.3-2.1-1-1-2-0)
