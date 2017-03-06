##任务三十六：听指令的小方块（四）
[查看DEMO]()<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=36)

###任务目的
* 练习JavaScript在DOM、字符串处理相关知识
* 利用JavaScript实践寻路相关算法

###任务描述
* [如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_36_1.jpg)，新增元素“墙”，墙是正方形不可进入、越过的区域
* 新增修墙的指令，BUILD，执行指令时，会在当前方块面对的方向前修建一格墙壁，如果被指定修墙的地方超过边界墙或者已经有墙了，则取消修墙操作，并调用浏览器的console.log方法打印一个错误日志
* 新增粉刷的指令，BRU color，color是一个字符串，保持和css中颜色编码一致。执行指令时，如果当前方块蓝色边面对方向有紧相邻的墙，则将这个墙颜色改为参数颜色，如果没有，则通过调用浏览器的console.log方法，打印一个错误日志
* 尝试写一段代码，实现在空间内修建一个长长的五颜六色的墙或者有趣的图形
* 新增一个按钮，可以在空间内随机生成一些墙
* 增加一个指令：MOV TO x, y，会使得方块从当前位置移动到坐标为x，y的地方，移动过程中不能进入墙所在的地方，寻路算法请自行选择并实现，不做具体要求

###在线学习参考资料
* [JavaScript入门篇](http://www.imooc.com/view/36)
* [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
* [各种寻路算法的可视化呈现](http://qiao.github.io/PathFinding.js/visual/)
