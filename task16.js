/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

 /* 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
　　var city=document.getElementById("aqi-city-input").value.trim();       //用户输入的去掉空格之后的城市名
　　var number=document.getElementById("aqi-value-input").value.trim();    //用户输入的去掉空格之后的空气质量指数
    　　if(!(/^[\u4e00-\u9fa5_a-zA-Z]+$/.test(city))){          //验证城市名是否合规
         　alert("城市名必须是中文或英文！");
       　　return;
    　　}
    　　if(!(/^-?[1-9]\d*$/.test(number))){                    //验证空气质量指数是否合规
          　alert("空气质量指数必须为整数！");
       　　 return;
   　　 }
    　　else{
      　　 return  aqiData[city]=number;
   　　 }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
　　var content="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
　　for( var city in aqiData){
        content+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
    }
    document.getElementById("aqi-table").innerHTML=city ? content:" ";  //如果删除所有数据（即city不存在），那么content为“ ”，也就是表头也会被删除掉
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
function delBtnHandle(target) {
　　 var city=target.parentNode.parentNode.firstChild.innerHTML;
　　 delete aqiData[city];
     renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
　　document.getElementById("add-btn").addEventListener("click", addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
　　var del=document.getElementById("aqi-table");
　　    del.addEventListener("click",function(e){       //使用事件委托，e.target即为我们点击的删除按钮
   　　 delBtnHandle(e.target);
    　　})
}

init();
