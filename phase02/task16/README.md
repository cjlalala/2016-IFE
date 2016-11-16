##任务目的
在上一任务基础上继续JavaScript的体验<br>
深入学习JavaScript的事件机制及DOM操作<br>
学习事件代理机制<br>
学习简单的表单验证功能<br>
学习外部加载JavaScript文件<br>
##任务描述
参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示<br>
用户输入的城市名必须为中英文字符，空气质量指数必须为整数<br>
用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）<br>
用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）<br>
用户可以点击表格列中的“删除”按钮，删掉那一行的数据<br>
####task.html
```html
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
    <script src="task.js"></script>
  </head>
<body>
  <div>
    <label>城市名称：<input id="aqi-city-input" type="text"></label><br>
    <label>空气质量指数：<input id="aqi-value-input" type="text"></label><br>
    <button id="add-btn">确认添加</button>
  </div>
  <table id="aqi-table">
  <!-- 
    <tr>
      <td>城市</td><td>空气质量</td><td>操作</td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
   -->
  </table>
</body>
</html>
```
####task.js
```javascript
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  renderAqiList();
}
function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}
init();
```
##遇到的问题及解答
####（1）报错：Cannot call method ' addEventListener ' of null
      开始一直报错，后来发现是由于之前一直把js文件在<head>标签中引用，导致getElementById的时候Dom对象还未出现。
####（2）delete 注意：
　　可以删除对象属性；<br>
　　删除数组元素时，原来数组长度/索引不变，删除的元素变为undefined；<br>
　　不可以删除变量和函数；<br>
　　但Eval代码块中的变量和函数可以被删除（Firebug console中执行的代码会被当成是 Eval code来进行解析）。<br>
详见：[深入理解Delete（JavaScript）](http://www.cnblogs.com/enein/archive/2012/08/23/2651312.html)
