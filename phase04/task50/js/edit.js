var pageIndex;var aIssue=[];var maxNum=5;$(document).ready(function(){issueHandle.initData();issueHandle.firstOpen();calenHandle.renderHtml();calenHandle.showDate(DATE,null)});var issueHandle={initData:function(){_quesNaire=JSON.parse(window.localStorage.getItem("_quesNaire"));if(pageIndex=issueHandle.getHash()){aIssue=_quesNaire[pageIndex].problem}},getHash:function(){var thisId=window.location.hash;if(thisId==""){return false}for(var item in _quesNaire){if("#"+_quesNaire[item].id==thisId){return item}}},add:function(typeQues){if(typeQues=="Iradio"){var aQues={"type":"radio","title":"单选题","answer":{"answer1":"选项一","answer2":"选项二"}}}if(typeQues=="Icheckbox"){var aQues={"type":"checkbox","title":"多选题","answer":{"answer1":"选项一","answer2":"选项二"}}}else{if(typeQues=="Textarea"){var aQues={"type":"textarea","title":"文本题","answer":"","isMust":false}}}aIssue.push(aQues)},saveInfo:function(){$("#areaQ input[type='text']").each(function(){var val=this.value,key=this.name.split("_")[0],i=this.name.split("_")[1];key!="title"?aIssue[i].answer[key]=val:aIssue[i][key]=val});$("#areaQ textarea").each(function(){var val=this.value,key=this.name.split("_")[0],i=this.name.split("_")[1];aIssue[i][key]=val});$(".isMust").each(function(){var key=this.name.split("_")[0],i=this.name.split("_")[1];aIssue[i][key]=this.checked})},showIssue:function(){var strEdit=[];aIssue.length==0?$("#aboutArea").css("display","none"):$("#aboutArea").css("display","block");for(var item in aIssue){var num=parseInt(item)+1;if(aIssue[item].type=="radio"){strEdit.push("<div id='parent_"+item+"'><label>Q"+num+"&nbsp;&nbsp;</label>"+"<input type='text' maxlength='25' name='title_"+item+"' value='"+aIssue[item].title+"'><br>");for(var key in aIssue[item].answer){strEdit.push("<input type='radio' name='select_"+item+"'>"+"<input type='text' maxlength='20' name='"+key+"_"+item+"' value='"+aIssue[item].answer[key]+"'><br>")}strEdit.push("<button class='addSelect' name='addR_"+item+"'>+ 添加选项</button>"+"<span class='buttons'>"+"<button class='up' name='up_"+item+"'>上移</button>"+"<button class='down' name='down_"+item+"'>下移</button>"+"<button class='repeat' name='repeat_"+item+"'>复用</button>"+"<button class='deleteQ' name='delete_"+item+"'>删除</button>"+"</span></div>")}if(aIssue[item].type=="checkbox"){strEdit.push("<div id='parent_"+item+"'><label>Q"+num+"&nbsp;&nbsp;</label>"+"<input type='text' maxlength='25' name='title_"+item+"' value='"+aIssue[item].title+"'><br>");for(var key in aIssue[item].answer){strEdit.push("<input type='checkbox' name='select_"+item+"'>"+"<input type='text' maxlength='20' name='"+key+"_"+item+"' value='"+aIssue[item].answer[key]+"'><br>")}strEdit.push("<button class='addSelect' name='addC_"+item+"'>+ 添加选项</button>"+"<span class='buttons'>"+"<button class='up' name='up_"+item+"'>上移</button>"+"<button class='down' name='down_"+item+"'>下移</button>"+"<button class='repeat' name='repeat_"+item+"'>复用</button>"+"<button class='deleteQ' name='delete_"+item+"'>删除</button>"+"</span></div>")}else{if(aIssue[item].type=="textarea"){strEdit.push("<div><label>Q"+num+"&nbsp;&nbsp;</label>"+"<input type='text' maxlength='25' name='title_"+item+"' value='"+aIssue[item].title+"'><br>"+"<textarea name='answer_"+item+"'>"+aIssue[item].answer+"</textarea>"+"<span class='whether'>"+"<input type='checkbox' class='isMust' name='isMust_"+item+"'>此题是否必填</div>")}}}$("#areaQ").html(strEdit.join(""))},firstOpen:function(){if(pageIndex){$("#titleQ").val(_quesNaire[pageIndex].name);$("#about").text(_quesNaire[pageIndex].about);$("#chooseDay").val(_quesNaire[pageIndex].timeStop);issueHandle.showIssue()}else{$("#titleQ").val("这是问卷的标题")}},maxQues:function(){if(aIssue.length==maxNum){alert("问卷最多可添加"+maxNum+"个问题!");return false}else{return true}}};$("#typeQ").on("click",function(event){event=event||window.event;var target=event.target||event.srcElement;if(!issueHandle.maxQues()){return}else{issueHandle.saveInfo()}switch(target.id){case"radio":issueHandle.add("Iradio");issueHandle.showIssue();break;case"checkbox":issueHandle.add("Icheckbox");issueHandle.showIssue();break;case"textarea":issueHandle.add("Textarea");issueHandle.showIssue();break}});$("#areaQ").on("click",function(event){event=event||window.event;var target=event.target||event.srcElement;if(target.nodeName!="BUTTON"){return}var i=parseInt(target.name.split("_")[1]);switch(target.name.split("_")[0]){case"up":if(i==0){return}else{issueHandle.saveInfo();aIssue[i]=aIssue.splice(i-1,1,aIssue[i])[0]}issueHandle.showIssue();break;case"down":if(i==aIssue.length-1){return}else{issueHandle.saveInfo();aIssue[i]=aIssue.splice(i+1,1,aIssue[i])[0]}issueHandle.showIssue();break;case"repeat":if(issueHandle.maxQues()){issueHandle.saveInfo();aIssue.splice(i,0,aIssue[i]);issueHandle.showIssue()}break;case"delete":if(aIssue.length==0){return}issueHandle.saveInfo();aIssue.splice(i,1);issueHandle.showIssue();break;case"addR":case"addC":var divId="#parent_"+i,newLength=$(divId).children("[type='text']").length,newKey="answer"+newLength;
if(newLength==6){alert("一道题最多可有5个选项！");return}issueHandle.saveInfo();aIssue[i].answer[newKey]="新增选项";issueHandle.showIssue();break}});var chooseDate;var DATE=new Date();var ifExpand=1;$("#chooseDay").on("click",function(){ifExpand?$("#calendar").css("display","block"):$("#calendar").css("display","none");return ifExpand=!ifExpand});$("#table").on("click",function(event){event=event||window.event;var target=event.target||event.srcElement;if(target.tagName!="TD"){return}calenHandle.showDate(DATE,null,null);target.className="choose";var _year=DATE.getFullYear(),_month=DATE.getMonth()+1;$("#chooseDay").val(_year+"年"+_month+"月"+target.innerText+"日");$("#calendar").css("display","none");ifExpand=1;return chooseDate=new Date(_year,_month-1,target.innerText)});$("#pre").on("click",function(){DATE=new Date(DATE.getFullYear(),DATE.getMonth()-1,1);var firstD=new Date(new Date().getFullYear(),new Date().getMonth(),1);if(DATE.getTime()<firstD.getTime()){calenHandle.showDate(DATE,null,yes)}else{calenHandle.showDate(DATE,null,null)}});$("#next").on("click",function(){DATE=new Date(DATE.getFullYear(),DATE.getMonth()+1,1);var firstD=new Date(new Date().getFullYear(),new Date().getMonth(),1);if(DATE.getTime()<firstD.getTime()){calenHandle.showDate(DATE,null,yes)}else{calenHandle.showDate(DATE,null,null)}});var calenHandle={renderHtml:function(){var strTable=[];strTable.push("<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>");for(var i=0;i<6;i++){strTable.push("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")}$("#table").html(strTable)},showDate:function(DATE,num,isPast){var _year=DATE.getFullYear(),_month=DATE.getMonth()+1;$("#dateTitle").html(_year+"年"+_month+"月");var tds=$("td");if(isPast){for(var i=0;i<tds.length;i++){tds[i].className="notChoose"}}else{var firstDay=new Date(_year,_month-1,1).getDay(),lastDate=new Date(_year,_month,-1).getDate();var thisDayNum=1;if(_year==new Date().getFullYear()&&_month==new Date().getMonth()+1){thisDayNum=new Date().getDate()}for(var i=0;i<tds.length;i++){var thisDay=new Date(_year,_month-1,i+1-firstDay);if(i<firstDay){tds[i].className="notChoose"}if(i<thisDayNum+firstDay-1){tds[i].className="notChoose"}else{if(calenHandle.getDateStr(thisDay)==calenHandle.getDateStr(new Date())){tds[i].className="today"}else{if(i>lastDate+firstDay){tds[i].className="notChoose"}else{if(i+1-firstDay==num){tds[i].className="choose"}else{tds[i].className="canChoose"}}}}tds[i].innerText=thisDay.getDate()}}},getDateStr:function(date){var _year=date.getFullYear();var _month=date.getMonth()+1;var _date=date.getDate();_month=(_month>9)?(""+_month):("0"+_month);_date=(_date>9)?(""+_date):("0"+_date);return _year+_month+_date}};var isSaved=false;$("#saveOrPub").on("click",function(event){event=event||window.event;var target=event.target||event.srcElement;if(aIssue.length==0){alert("请添加问题后再执行该操作!");return}if(!$("#chooseDay").val()){alert("请选择问卷截止日期！");return}switch(target.id){case"save":maskHandle.showMask("该问卷已保存！",save);saveHandle.saveQues();saveHandle.localStory();isSaved=true;break;case"publish":var str="确认要发布该问卷？该问卷截止日期为"+$("#chooseDay").val();maskHandle.showMask(str,publish);break;case"yes":saveHandle.saveQues();isSaved=true;maskHandle.hideMask();maskHandle.showMask("问卷已发布！",save);pageIndex?_quesNaire[pageIndex].state="已发布":_quesNaire[_quesNaire.length-1].state="已发布";saveHandle.localStory();break;case"no":case"cover":case"close":maskHandle.hideMask();break}});var saveHandle={saveQues:function(){issueHandle.saveInfo();var name=$("#titleQ").val(),about=$("#about").val(),timePub=saveHandle.getTime(),timeStop=$("#chooseDay").val();if(pageIndex){_quesNaire[pageIndex].name=name;_quesNaire[pageIndex].about=about;_quesNaire[pageIndex].timePub=timePub;_quesNaire[pageIndex].timeStop=timeStop;_quesNaire[pageIndex].state="未发布";_quesNaire[pageIndex].problem=aIssue}else{if(isSaved){_quesNaire.pop()}var id="page"+parseInt(_quesNaire.length+1);_quesNaire.push({"id":id,"name":name,"about":about,"timePub":timePub,"timeStop":timeStop,"state":"未发布","problem":aIssue})}},localStory:function(){window.localStorage.setItem("_quesNaire",JSON.stringify(_quesNaire))},getTime:function(){var date=new Date(),_year=date.getFullYear(),_month=date.getMonth()+1,_date=date.getDate(),_hour=date.getHours(),_min=date.getMinutes(),_sec=date.getSeconds();_month=(_month>9)?(""+_month):("0"+_month);_date=(_date>9)?(""+_date):("0"+_date);_hour=(_hour>9)?(""+_hour):("0"+_hour);_min=(_min>9)?(""+_min):("0"+_min);_sec=(_sec>9)?(""+_sec):("0"+_sec);return _year+"-"+_month+"-"+_date+" "+_hour+":"+_min+":"+_sec}};var maskHandle={showMask:function(str,kind){if(kind==save){$("#noOryes").css("display","none")}else{$("#noOryes").css("display","block")}$("#alertCont").append(str);$("#cover").css("display","block");$("#saveCover").css("display","block")},hideMask:function(){$("#alertCont").empty();$("#cover").css("display","none");$("#saveCover").css("display","none")}};