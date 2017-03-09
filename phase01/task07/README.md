##任务七：实现常见的技术产品官网的页面架构及样式布局
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase01/task07/task07.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=7)

###任务目的
* 通过实现一个常见的技术产品官网，加深对于HTML，CSS的实战能力
* 学习掌握如何在没有标注的情况下实现设计稿到页面的精确转变

###任务描述
* 通过HTML及CSS实现设计稿 设计稿PSD文件（[点击下载](http://7xrp04.com1.z0.glb.clouddn.com/task_1_7_1.psd)），效果如 效果图（[点击打开](http://7xrp04.com1.z0.glb.clouddn.com/task_1_7_2.jpg)）
* 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。

###遇到的问题
1.input 标签默认点击会出现蓝色边框，如果想去掉，需要设置outline：none;
2.如何去掉select的默认样式(右侧小箭头)：
  ```css
  select {
      border: solid 1px #f00;
      //很关键：将默认的select选择框样式清除
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      //在选择框的最右侧中间显示小箭头图片
      background: url('pic.jpg') no-repeat scroll right center transparent;
      //为下拉小箭头留出一点位置，避免被文字覆盖
      padding-right: 14px; 
  }
   //清除ie的默认选择框样式清除，隐藏下拉箭头
  select::-ms-expand { 
      display: none;
  }
```
本题运用input+ul列表来模拟select下拉列表，只做了一个样式，内部具体功能仍需要js来完善；
3.清除浮动：两个竖直排列的 div 已经设置了```css{margin：0;}``` 但是中间仍然有边距，主要是由于下面 div 浮动，而上面 div 没有浮动，造成了这个边距，只需要将上边 div 也浮动，之后下面 div 清除浮动即可，具体原理仍然不清楚，但是对于浮动元素后的元素清除浮动绝对很有必要！
4.只用CSS实现点击不同元素展现不同内容：
  用input的单选框(radio) + a 标签来获取点击的元素并设置样式（具体：[css3实现网页平滑过渡效果](http://www.imooc.com/learn/252)。
  主要注意几个选择器：
  * ```css :checked```选择被选中的元素 
  * ```css input + a ``` 选择input后面紧跟的兄弟元素a
  * ```css input ~ a ``` 选择input后面所有的兄弟元素a
  * ```css [title] ``` 选择有title属性的元素
