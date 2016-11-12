##任务目的
在上一任务基础上继续JavaScript的体验<br>
接触一下JavaScript中的高级选择器<br>
学习JavaScript中的数组对象遍历、读写、排序等操作<br>
学习简单的字符串处理操作<br>
##任务描述
参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量<br>
将数据按照某种顺序排序后，在resort列表中按照顺序显示出来
```html
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 15</title>
  </head>
<body>
  <ul id="source">
    <li>北京空气质量：<b>90</b></li>
    <li>上海空气质量：<b>70</b></li>
    <li>天津空气质量：<b>80</b></li>
    <li>广州空气质量：<b>50</b></li>
    <li>深圳空气质量：<b>40</b></li>
    <li>福州空气质量：<b>32</b></li>
    <li>成都空气质量：<b>90</b></li>
  </ul>
  <ul id="resort">
    <!-- 
    <li>第一名：北京空气质量：<b>90</b></li>
    <li>第二名：北京空气质量：<b>90</b></li>
    <li>第三名：北京空气质量：<b>90</b></li>
     -->
  </ul>
  <button id="sort-btn">排序</button>
<script type="text/javascript">
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  return data;
}
/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {

}
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {

}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}
function init() {
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
}
init();
</script>
</body>
</html>
```
##遇到的问题
（1）截取字符串
    为得到source列表中的城市名使用了substring()方法截取字符串（如“北京空气质量”）的前两个字，如果存在城市名不是两个字，那么这个方法就不行了，因此      可以用name[i].innerHTML.split("空气")[0]截取城市名  (split()方法把字符串分割为字符串数组)。
（2）onclick调用函数
     ele.onclick=funcName 的意思就是在ele.onclick中保存了一个funcName方法的一个引用，类似于C语言中的函数指针。当click事件发生的时候，会调用        funcName函数;
    （注：ele.onclick=function(){ funcName();}也可达到相同目的，适用于需要传递参数的情况）
    如果函数加了()就是执行函数了，也就是当eleonclick=funcName()时，ele.onclick获得的就是函数的返回值，即不论click事件发生与否，都会直接调用       funcName函数。
##在线学习参考资料
[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](http://www.imooc.com/learn/36)
