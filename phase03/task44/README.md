## 任务四十四：多功能相册之瀑布布局
[查看DEMO]()<br>
[查看题目]()

### 任务目的
* 练习综合运用HTML、CSS、JavaScript实现局部功能
* 为第四阶段的相册任务做准备
* 结合CSS，JavaScript掌握瀑布布局方式

### 任务描述
* 参考如下设计图，使用JavaScript、CSS，实现如图的瀑布布局
* ![](https://github.com/cjlalala/2016-IFE/master/phase03/task44/task44_1.jpg)
* 实现封装为一个JavaScript的库
* 在瀑布式布局中，每一栏的宽度是相同的，下图中的黑色数字表示图片被添加的顺序
* 每次添加新的图片时，都将其放在高度最小的一栏，以保证每一栏的高度尽可能相近。
* 点击一张图片后，全屏显示该图（有能力的同学可以适当增加动画效果）。黑色遮罩的不透明度是 80%，点击黑色部分退出全屏浏览。
* ![](https://github.com/cjlalala/2016-IFE/master/phase03/task44/task44_2.jpg)
*有能力的同学可以实现，当页面滚动到瀑布图最下方后，通过Ajax动态加载下一批图片
