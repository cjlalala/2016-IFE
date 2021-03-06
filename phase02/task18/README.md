## 任务十八：基础JavaScript练习（一）
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase02/task18/task18.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=18)
### 任务目的
* 学习与实践JavaScript的基本语法、语言特性
* 初步了解JavaScript的事件是什么
* 初步了解JavaScript中的DOM是什么

### 任务描述
* [如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_18_1.jpg)，模拟一个队列，队列的每个元素是一个数字，初始队列为空
* 有一个input输入框，以及4个操作按钮
* 点击"左侧入"，将input中输入的数字从左侧插入队列中；
* 点击"右侧入"，将input中输入的数字从右侧插入队列中；
* 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
* 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
* 点击队列中任何一个元素，则该元素会被从队列中删除

### 遇到的问题
#### （1）对输入的数据进行验证
　　题目要求输入的数据是数字，所以用isNaN( )函数对输入的数据进行验证，后来发现没有输入数据以及输入空格时，返回值都是false，原来isNaN()是把空串或空格作0处理的，所以返回值是false，这样空串或空格就检验不出来，因此用正则表达式验证数据是否为数字。

#### （2）点击的元素被删除
　　给输出的结果添加事件委托，验证被点击元素是否是```<li>```元素，如果是，就获取被点击元素的index属性，之前每个```<li>```元素的index属性已经绑定了该元素在数组中的序号，所以直接在数组中删除这一元素，再重绘柱状图即可。

### 在线学习参考资料
[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](http://www.imooc.com/learn/36)
