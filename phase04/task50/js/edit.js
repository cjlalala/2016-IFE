var pageIndex;
var aIssue = [];
var maxNum = 5;
$(document).ready(function(){
  issueHandle.initData();     //初始化数据
  issueHandle.firstOpen();    //根据是否是新建的问卷显示标题、提示信息、截止日期
  calenHandle.renderHtml();   //显示日历的表格
  calenHandle.showDate(DATE,null); //显示日历中的数字
});
//添加问题以及问题各种操作-----------
//保存问题的数组
var issueHandle={
  //localstorage中是否有缓存数据
  initData:function(){
      _quesNaire = JSON.parse(window.localStorage.getItem('_quesNaire'));
      if(pageIndex = issueHandle.getHash()){  //判断是否是新建的问卷
        aIssue = _quesNaire[pageIndex].problem;
      }
  },
  //得到页面的哈希值，哈希值与问卷的id绑定
  getHash:function(){
    var thisId = window.location.hash;
    if(thisId == '') return false;
    for(var item in _quesNaire){
      if('#'+_quesNaire[item].id == thisId){
        return item;
      }
    }
  },
  //根据类型添加问题到aIssue数组中
  add:function(typeQues){
    if(typeQues == 'Iradio'){
      var aQues={
        "type":"radio",
        "title":"单选题",
        "answer":{
          "answer1":"选项一",
          "answer2":"选项二"
        }
      };
    }if(typeQues == 'Icheckbox'){
      var aQues={
        "type":"checkbox",
        "title":"多选题",
        "answer":{
          "answer1":"选项一",
          "answer2":"选项二"
        }
      };
    }else if(typeQues == 'Textarea'){
      var aQues={
        "type":"textarea",
        "title":"文本题",
        "answer":"",
        "isMust":false
      };
    }
    aIssue.push(aQues);
  },
  //按钮点击后保存页面中已填入的所有内容
  saveInfo: function (){
    $("#areaQ input[type='text']").each(function(){
      var val = this.value,
          key = this.name.split("_")[0],
          i = this.name.split("_")[1];
          key != 'title'? aIssue[i].answer[key] = val : aIssue[i][key] = val;
    });
    $("#areaQ textarea").each(function(){
      var val = this.value,
          key = this.name.split("_")[0],
          i = this.name.split("_")[1];
          aIssue[i][key] = val;
    });
    $(".isMust").each(function(){
      var key = this.name.split("_")[0],
          i = this.name.split("_")[1];
          aIssue[i][key] = this.checked;
    });
  },
  //每次点击按钮后更新页面
  showIssue: function(){
    var strEdit = [];
    aIssue.length == 0 ? $('#aboutArea').css('display','none') : $('#aboutArea').css('display','block');
    for(var item in aIssue){
      var num = parseInt(item) + 1;
      if(aIssue[item].type == 'radio'){   //根据点击的按钮添加一部分内容至页面中
        strEdit.push("<div id='parent_"+item+"'><label>Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' name='title_"+item+"' value='"+aIssue[item].title+"'><br>");
        for(var key in aIssue[item].answer){
          strEdit.push("<input type='radio' name='select_"+item+"'>"+
          "<input type='text' name='"+key+"_"+item+"' value='"+aIssue[item].answer[key]+"'><br>");
        }
        strEdit.push("<button class='addSelect' name='addR_"+item+"'>+ 添加选项</button>"+
          "<span class='buttons'>"+
            "<button class='up' name='up_"+item+"'>上移</button>"+
            "<button class='down' name='down_"+item+"'>下移</button>"+
            "<button class='repeat' name='repeat_"+item+"'>复用</button>"+
            "<button class='deleteQ' name='delete_"+item+"'>删除</button>"+
          "</span></div>");
      }
      if(aIssue[item].type == 'checkbox'){
        strEdit.push("<div id='parent_"+item+"'><label>Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' name='title_"+item+"' value='"+aIssue[item].title+"'><br>");
          for(var key in aIssue[item].answer){
            strEdit.push("<input type='checkbox' name='select_"+item+"'>"+
            "<input type='text' name='"+key+"_"+item+"' value='"+aIssue[item].answer[key]+"'><br>");
          }
        strEdit.push("<button class='addSelect' name='addC_"+item+"'>+ 添加选项</button>"+
          "<span class='buttons'>"+
            "<button class='up' name='up_"+item+"'>上移</button>"+
            "<button class='down' name='down_"+item+"'>下移</button>"+
            "<button class='repeat' name='repeat_"+item+"'>复用</button>"+
            "<button class='deleteQ' name='delete_"+item+"'>删除</button>"+
          "</span></div>");
      }else if(aIssue[item].type == 'textarea'){
        strEdit.push("<div><label>Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' name='title_"+item+"' value='"+aIssue[item].title+"'><br>"+
          "<textarea name='answer_"+item+"'>"+aIssue[item].answer+"</textarea>"+
          "<span class='whether'>"+
            "<input type='checkbox' class='isMust' name='isMust_"+item+"'>此题是否必填</div>");
      }
    }
    $('#areaQ').html(strEdit.join(""));
  },
  //根据是否是新建的问卷显示标题、提示信息、截止日期
  firstOpen:function(){
    if(pageIndex){
      $('#titleQ').val(_quesNaire[pageIndex].name);
      $('#about').text(_quesNaire[pageIndex].about);
      $('#chooseDay').val(_quesNaire[pageIndex].timeStop);
      issueHandle.showIssue();
    }else{
      $('#titleQ').val('这是问卷的标题');
    }
  },
  //控制问卷问题上限
  maxQues: function(){
    if(aIssue.length == maxNum){
      alert('问卷最多可添加'+maxNum+'个问题!');
      return false;
    }else return true;
  }
}
//点击添加问题
$('#typeQ').on('click',function(event){
  event=event||window.event;
  var target=event.target||event.srcElement;
  if(!issueHandle.maxQues()) return;
  else issueHandle.saveInfo();
  switch(target.id){
    case 'radio':
          issueHandle.add('Iradio');
          issueHandle.showIssue();
      break;
    case 'checkbox':
        issueHandle.add('Icheckbox');
        issueHandle.showIssue();
      break;
    case 'textarea':
        issueHandle.add('Textarea');
        issueHandle.showIssue();
      break;
  }
});
//点击添加选项，上移，下移，复用，删除
$('#areaQ').on('click',function(event){
  event = event||window.event;
  var target = event.target||event.srcElement;
  if(target.nodeName!='BUTTON') return;
  var i = parseInt(target.name.split("_")[1]);
  switch(target.name.split("_")[0]){
    case 'up':   //点击上移
      if(i==0) return;
      else{
        issueHandle.saveInfo();
        aIssue[i] = aIssue.splice(i-1, 1, aIssue[i])[0];
      }
      issueHandle.showIssue();
      break;
    case 'down':  //点击下移
      if(i == aIssue.length-1) return;
      else{
        issueHandle.saveInfo();
        aIssue[i] = aIssue.splice(i+1, 1, aIssue[i])[0];
      }
      issueHandle.showIssue();
      break;
    case 'repeat':  //点击复用
      if(issueHandle.maxQues()){
        issueHandle.saveInfo();
        aIssue.splice(i, 0, aIssue[i]);
        issueHandle.showIssue();
      }
      break;
    case 'delete':  //点击删除
      if(aIssue.length == 0) return;
      issueHandle.saveInfo();
      aIssue.splice(i, 1);
      issueHandle.showIssue();
      break;
    case 'addR':case 'addC': //添加radio选项或checkbox选项
      var divId = '#parent_' + i,
          newLength = $(divId).children("[type='text']").length,
          newKey = 'answer' + newLength;
      if(newLength == 6){
        alert('一道题最多可有5个选项！');
        return;
      }
      issueHandle.saveInfo();
      aIssue[i].answer[newKey] = '新增选项';
      issueHandle.showIssue();
      break;
  }
});


//日历---------------------
var chooseDate;
var DATE=new Date();
var ifExpand = 1;
//是否显示日历
$('#chooseDay').on('click',function(){
  ifExpand ? $('#calendar').css("display","block") : $('#calendar').css("display","none");
  return ifExpand = !ifExpand;
});
//选中某一天
$('#table').on('click',function(event){
  event=event||window.event;
  var target=event.target||event.srcElement;
  if(target.tagName!='TD') return;
  calenHandle.showDate(DATE,null,null);
  target.className = 'choose';
  var _year = DATE.getFullYear(),
      _month = DATE.getMonth()+1;
  $('#chooseDay').val(_year+'年'+_month+'月'+target.innerText+'日');
  $('#calendar').css('display','none');
  ifExpand = 1;
  return chooseDate = new Date(_year,_month-1,target.innerText);
});
//上一个月
$('#pre').on('click',function(){
  DATE=new Date(DATE.getFullYear(),DATE.getMonth()-1,1);
  var firstD = new Date(new Date().getFullYear(),new Date().getMonth(),1);
  if(DATE.getTime() < firstD.getTime()) calenHandle.showDate(DATE,null,yes);
  else calenHandle.showDate(DATE,null,null);
});
//下一个月
$('#next').on('click',function(){
  DATE = new Date(DATE.getFullYear(),DATE.getMonth()+1,1);
  var firstD = new Date(new Date().getFullYear(),new Date().getMonth(),1);
  if(DATE.getTime() < firstD.getTime()) calenHandle.showDate(DATE,null,yes);
  else calenHandle.showDate(DATE,null,null);
});
//日历处理逻辑
var calenHandle={
  //显示表格
  renderHtml: function(){
    var strTable=[];
    strTable.push("<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>");
    for(var i=0; i<6; i++){
        strTable.push('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
    }
      $('#table').html(strTable);
  },
  //显示日历中的数字
  showDate: function(DATE,num,isPast){
    var _year = DATE.getFullYear(),//今天所在年份
        _month = DATE.getMonth()+1;//今天所在月份
    $('#dateTitle').html(_year+'年'+_month+'月');
    var tds=$('td');
    if(isPast){
      for(var i=0;i<tds.length;i++){
        tds[i].className='notChoose';
      }
    }
    else{
      var firstDay = new Date(_year,_month-1,1).getDay(),//这个月的第一天是周几0~6
          lastDate = new Date(_year,_month,-1).getDate();//这个月的最后一天1~31
      var thisDayNum = 1;
      if(_year==new Date().getFullYear() && _month==new Date().getMonth()+1){
        thisDayNum = new Date().getDate();
      }
      for(var i=0;i<tds.length;i++){
        var thisDay = new Date(_year,_month-1,i+1-firstDay);
        if(i<firstDay) tds[i].className='notChoose';
        if(i< thisDayNum + firstDay-1) tds[i].className='notChoose';
        else if(calenHandle.getDateStr(thisDay) == calenHandle.getDateStr(new Date())) tds[i].className='today';
        else if(i>lastDate+firstDay) tds[i].className='notChoose';
        else if(i+1-firstDay == num) tds[i].className='choose';
        else tds[i].className='canChoose';
        tds[i].innerText=thisDay.getDate();
      }
    }
  },
  //得到日期的字符串形式，如20160725
  getDateStr: function(date){
    var _year=date.getFullYear();
    var _month=date.getMonth()+1;
    var _date=date.getDate();
    _month=(_month>9)?(''+_month):('0'+_month);
    _date=(_date>9)?(''+_date):('0'+_date);
    return _year+_month+_date;
  }
}

//弹出框逻辑-------------------
var isSaved = false;
//为保存，发布，弹出框的按钮绑定事件
$('#saveOrPub').on('click',function(event){
  event=event||window.event;
  var target=event.target||event.srcElement;
  if(aIssue.length==0){
    alert('请添加问题后再执行该操作!');
    return;
  }
  switch(target.id){
    case 'save':
        maskHandle.showMask('该问卷已保存！',save);
        saveHandle.saveQues();  //保存数据到_quesNaire中
        saveHandle.localStory();  //保存数据到localStorage中
        isSaved = true;
      break;
    case 'publish':
        if(!$("#chooseDay").val()){
          alert('请选择问卷截止日期！');
          return;
        }
        var str = '确认要发布该问卷？该问卷截止日期为'+$("#chooseDay").val();
        maskHandle.showMask(str,publish);
      break;
    case 'yes':
        saveHandle.saveQues();  //保存数据到_quesNaire中
        isSaved = true;
        maskHandle.hideMask();
        maskHandle.showMask('问卷已发布！',save);
        pageIndex? _quesNaire[pageIndex].state = '已发布':_quesNaire[_quesNaire.length-1].state = '已发布';
        saveHandle.localStory();  //保存数据到localStorage中
      break;
    case 'no':case'cover':case'close':   //点击取消(遮罩层消失)
        maskHandle.hideMask();
      break;
  }
});
//保存问卷逻辑
var saveHandle = {
  //保存问卷
  saveQues:function() {
    issueHandle.saveInfo();
    var name = $('#titleQ').val(),
        about = $('#about').val(),
        timePub = saveHandle.getTime(),
        timeStop = $("#chooseDay").val();
    if(pageIndex){
      _quesNaire[pageIndex].name = name;
      _quesNaire[pageIndex].about = about;
      _quesNaire[pageIndex].timePub = timePub;
      _quesNaire[pageIndex].timeStop = timeStop;
      _quesNaire[pageIndex].state = '未发布';
      _quesNaire[pageIndex].problem = aIssue;
    }else{
      if(isSaved)  _quesNaire.pop();
      var id = 'page'+ parseInt(_quesNaire.length+1);
      _quesNaire.push({
        "id":id,
        "name":name,
        "about":about,
        "timePub":timePub,
        "timeStop":timeStop,
        "state":"未发布",
        "problem":aIssue
      });
    }
  },
  //将数据存在localstorage中
  localStory:function(){
    window.localStorage.setItem('_quesNaire',JSON.stringify(_quesNaire));
  },
  //得到现在的时间
  getTime:function(){
    var date = new Date(),
        _year=date.getFullYear(),
        _month=date.getMonth()+1,
        _date=date.getDate(),
        _hour=date.getHours(),
        _min=date.getMinutes(),
        _sec=date.getSeconds();
    _month=(_month>9)?(''+_month):('0'+_month);
    _date=(_date>9)?(''+_date):('0'+_date);
    _hour=(_hour>9)?(''+_hour):('0'+_hour);
    _min=(_min>9)?(''+_min):('0'+_min);
    _sec=(_sec>9)?(''+_sec):('0'+_sec);
    return _year+'-'+_month+'-'+_date+' '+_hour+':'+_min+':'+_sec;
  }
};
//遮罩层方法
var maskHandle={
    showMask:function(str,kind){
      if(kind == save) $("#noOryes").css('display','none');
      else $("#noOryes").css('display','block');
      $('#alertCont').append(str);
      $('#cover').css('display','block');
      $('#saveCover').css('display','block');
    },
    hideMask:function(){
      $('#alertCont').empty();
      $('#cover').css('display','none');
      $('#saveCover').css('display','none');
    }
};
