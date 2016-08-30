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

var content= " ";
var chinese=["一","二","三","四","五","六"];
aqiData.filter(function(element){return element[1]>60;})  //array.filter()方法筛选出大于60的数据
       .sort(function(a,b){return b[1]-a[1];})  //数据进行从大到小的排序，用array.sort()方法
       .forEach(function(element,index){                  //将新数组的每一项数据组织成要输出的格式
　　　　　　　　  content+="<li>第"+chinese[index]+"名："+element[0]+","+element[1]+"</li>";
        });

document.getElementById("aqi-list").innerHTML=content;  //通过innerHTML属性改变aqi-list列表中的内容
})();
//使用了array.filter、array.sort，使用了array.forEach方法来代替for循环遍历处理数组元素， 最后用element.innerHTML属性一次性改变元素的DOM结构


//由于filter本身就对数组进行了循环，所以可以不使用forEach（）方法，同时先sort排序可以省去缓存一个新数组的步骤 ，改进后的代码如下：
/*(function () {
var content= " ";
var chinese=["一","二","三","四","五","六"];
aqiData.sort(function(a,b){return b[1]-a[1];})      //排序
       .filter(function(element,index){
               if(element[1]>60){                  //筛选出大于60的数据
          content+="<li>第"+chinese[index]+"名："+element[0]+","+element[1]+"</li>";}
        }) 
document.getElementById("aqi-list").innerHTML=content; 
})();*/
</script>
</body>
</html>
