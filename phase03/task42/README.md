## 任务四十二：UI组件之日历组件（三）
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase03/task42/task42.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=42)

### 任务目的
* 练习综合运用HTML、CSS、JavaScript实现局部功能
* 练习对于代码的抽象与封装
* 为第四阶段的RIA任务做准备

### 任务描述
* 基于任务41，进行如下图中的升级<br>
![](https://github.com/cjlalala/2016-IFE/blob/master/phase03/task42/task42.jpg)
* 增加一个参数及相应接口方法，来决定这个日历组件是选择具体某天日期，还是选择一个时间段
* 当设置为选择时间段时，需要在日历面板上点击两个日期来完成一次选择，两个日期中，较早的为起始时间，较晚的为结束时间，选择的时间段用特殊样式标示
* 增加参数及响应接口方法，允许设置时间段选择的最小或最大跨度，并提供当不满足跨度设置时的默认处理及回调函数接口
* 在弹出的日期段选择面板中增加确认和取消按钮
