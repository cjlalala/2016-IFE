## 任务十三：零基础JavaScript编码（一）
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase02/task13/task13.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=13)
###任务目的
* JavaScript初体验
* 初步明白JavaScript的简单基本语法，如变量、函数
* 初步了解JavaScript的事件是什么
* 初步了解JavaScript中的DOM是什么

### 任务描述
   参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写
本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <label>请输入北京今天空气质量：<input id="aqi-input" type="text"></label>
  <button id="button">确认填写</button>

  <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

<script type="text/javascript">

(function() {
  /*	
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */

})();

</script>
</body>
</html>
```
### 在线学习参考资料

[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
