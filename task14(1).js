<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
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

var chinese=["一","二","三","四","五","六"];
var newData=aqiData.sort(function(a,b){return b[1]-a[1];}); //用sort（）方法对原数据进行排序得到新的数组newData

for( var i=0;i<aqiData.length;i++){
   if(newData[i][1]>60){              //筛选出空气质量指数大于60的数据
      var li=document.createElement("li");             //创建新元素节点li
      li.appendChild(document.createTextNode("第"+chinese[i]+"名："+newData[i][0]+","+newData[i][1]; ))  //将文本节点追加至元素节点上
      document.getElementById("aqi-list").appendChild(li);             //将新元素添加到aqi-list列表中
   } 
} 
})();
//使用了array.sort、document.createElement、document.createTextNode、element.appendChild等方法；
</script>
</body>
</html>
