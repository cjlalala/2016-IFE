## 任务三十二：表单（四）实现表单自动生成工厂
[查看DEMO](https://rawgit.com/cjlalala/2016-IFE/master/phase02/task32/task32.html)<br>
[查看题目](http://ife.baidu.com/2016/task/detail?taskId=32)

### 任务目的
* 加强对JavaScript的掌握
* 熟悉常用表单处理逻辑
* 学习如何模块如何设计，不同模块间如何尽量解耦

### 任务描述
* 实现以JavaScript对象的方式定义表单及验证规则
* 表单配置参考示例如下：（不需要一致，仅为参考）
```javascript
 {
        label: '名称',                    // 表单标签
        type: 'input',                   // 表单类型
        validator: function () {...},    // 表单验证规
        rules: '必填，长度为4-16个字符',    // 填写规则提示
        success: '格式正确',              // 验证通过提示
        fail: '名称不能为空'               // 验证失败提示
    }
```
* 基于该配置项，实现一套逻辑，可以自动生成表单的展现、交互、验证
* 使用你制作的表单工厂，在一个页面上创建两套样式不同的表单

### 在线学习参考资料
* [Web相关名词通俗解释](https://www.zhihu.com/question/22689579)
* [MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)
* [慕课HTML+CSS基础教程视频](http://www.imooc.com/learn/9)
* [JavaScript 表单验证](http://www.w3school.com.cn/js/js_form_validation.asp)
* [HTML表单指南](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms)
