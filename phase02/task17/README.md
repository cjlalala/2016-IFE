## 任务十七：零基础JavaScript编码（五）
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase02/task17/task17.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=17)
### 具体思路
![](https://github.com/cjlalala/2016-IFE/blob/master/phase02/task17/task17.png)

### 任务目的
* 在上一任务基础上继续JavaScript的体验
* 接触更加复杂的表单对象
* 实现页面上的一个完整交互功能
* 用DOM实现一个柱状图图表

### 任务描述
    参考以下示例代码，原始数据包含几个城市的空气质量指数数据
    用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
    天：显示每天的空气质量指数
    周：以自然周（周一到周日）为粒度，统计一周的平均数为这一周的空气质量数值，如果数据中缺少一个周的几天，则按剩余天进行计算
    月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
    用户可以通过select切换城市
    通过在"aqi-chart-wrap"里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数， [参考图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_17_1.jpg)。 
    天、周、月的数据只根据用户的选择显示一种。
    天：每天的数据是一个很细的矩形
    周：每周的数据是一个矩形
    月：每周的数据是一个很粗的矩形
    鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子的具体日期和数据
    
### 遇到的问题

#### （1）title属性：
　　title 属性规定关于元素的额外信息。<br>
　　这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。

#### （2）onchange事件在数据变化时才会发生
　　为了得到用户选择查看的城市并处理对应数据，给select设置事件，当选项发生变化时调用函数citySelectChange，修改pageState.nowSelectCity（记录当前页面表单的城市选项）的值，由于题目中给的pageState.nowSelectCity:-1;与后续的数据处理函数没有绑定，所以页面被打开时并不会渲染柱状图，又因为这里用到onchange事件监听选项变化，而onchange事件必须在数据有变化的时候才会发生，所以一开始默认选择的是北京，接着再点北京是不会触发事件的，必须先点其他城市，再点回北京才会出现柱状图，这里有两种方法避免这种情况：<br>
　　A、将pageState.nowSelectCity 最初默认值设置为“北京”，这样页面打开时就会呈现北京市的柱状图，之后选择其他的城市，onchange事件就会发生。<br>
　　B、在北京前面加一个option，选项名可以为“城市名”，之后用户无论选择什么城市，都会触发事件渲染图表；<br>
　　支持onchange事件的 HTML 标签：<br>
　　```html<input type="text">, <select>, <textarea>```<br>
　　支持onchange事件的 JavaScript 对象：<br>
 　　select, text, textarea，fileUpload（FileUpload 控件显示一个文本框控件和一个浏览按钮，使用户可以选择客户端上的文件并将它上载到 Web 服务器。）
   
#### （3）自然周/月
　　题目中要求用户选择 “周” 时要以自然周（周一到周日）为粒度，开始做的方法是从第一个数据开始，每7个数据求一个平均数，后来发现第一个数据也就是2016-01-01并不一定是一周的第一天，所以这种方法行不通。具体可行的方法如下：<br>
   将所有的日期放在一个新的Date对象中，之后利用getDay()方法，该方法返回值是 0（周日） 到 6（周六） 之间的一个整数，<br>
所以当new Date.getDay()=6时就意味着一个自然周结束了，所以将每次new Date.getDay()=6之前的<=7个数据求平均即可，<br>
同时只要最后的求和！=0就说明最后一组不到7个数据，也应该求平均值。<br>
　　“月”要以自然月为粒度做法和上面类似，利用getMonth()方法，该方法返回值是 0（一月） 到 11（十二月） 之间的一个整数。<br>
  
### 在线学习参考资料
[JavaScript入门篇](http://www.imooc.com/learn/36)<br>
[MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
