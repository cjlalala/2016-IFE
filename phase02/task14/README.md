# 任务十四：零基础JavaScript编码（二）
[查看](http://ife.baidu.com/2016/task/detail?taskId=13)
##任务目的
在上一任务基础上继续JavaScript的体验<br>
学习JavaScript中的if判断语法，for循环语法<br>
学习JavaScript中的数组对象<br>
学习如何读取、处理数据，并动态创建、修改DOM中的内容

##任务描述
参考以下示例代码，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE Task 14——零基础JavaScript编码（二）</title>
  </head>
<body>
  <h3>污染城市列表</h3>
  <ul id="aqi-list">
<!--   
    <li>第一名：福州（样例），10</li>
  	<li>第二名：福州（样例），10</li> -->
  </ul>
<script type="text/javascript">
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {
/*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
 */
})();
</script>
</body>
</html>
```
##遇到的问题：
####（1）sort()方法：

　　sort() 方法用于对数组的元素进行排序，排序过程是在原数组上进行的，不生成副本。

　　A、如果调用该方法时没有使用参数，将按照字符编码的顺序进行排序。也就是说' [5,10,2].sort(); '的结果是[10,2,5]；

　　B、如果提供的有比较函数compareFunction()，那么数组会按照比较函数的返回值进行排序。

　　　　记 a 和 b 是两个将要被比较的元素，compareFunction(a,b)为比较函数的返回值

           若compareFunction(a,b)小于0，a前b后；
           若compareFunction(a,b)等于0， a 和 b 的位置不变;
           若compareFunction(a,b)大于0，b前a后。
　　    简化一下：比较函数中‘ return a-b; ’从小到大排序，‘ return b-a; ’从大到小排序。

####（2）array.filter()  &  array.forEach()方法

　　array.filter在数组中的每个项上运行一个函数，并将函数返回真值的项作为数组返回。简单的说就是用一个条件过滤掉不符合的数组元素，剩下的符合条件的元素组合成新的数组返回。

　　array.forEach在数组中的每个项上运行一个函数。

　　具体请看：[Javascript数组对象的方法（含jQuery 转载)](http://www.cnblogs.com/cjlalala/p/5804509.html)

####（3）性能问题

　　 appendChild 和innerHTML的性能网上说法不一，有待测试！

 　  HTML DOM插入内容请看：[HTML DOM](http://www.cnblogs.com/cjlalala/p/5804349.html)

##在线学习参考资料
[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
