var pageIndex;
var _quesNaire = JSON.parse(window.localStorage.getItem('_quesNaire'));
var pageHandle={
  //得到页面的哈希值，哈希值与问卷的id绑定
  getHash:function(){
    var thisId = window.location.hash;
    for(var item in _quesNaire){
      if('#'+_quesNaire[item].id == thisId){
        return item;
      }
    }
  },
  showQues:function(){
    var strList=[];
    $('#lookTitle').text(_quesNaire[pageIndex].name);
    $('#lookAbout').text(_quesNaire[pageIndex].about);
    for(var item in _quesNaire[pageIndex].problem){
      var thisProb = _quesNaire[pageIndex].problem[item],
          num = parseInt(item) +1;
      if(thisProb.type == 'radio'){
        strList.push("<div id='parent_"+item+"'><label><span class='must'>* </span>Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' value='"+thisProb.title+"'><br>");
        for(var key in thisProb.answer){
          strList.push("<input type='radio' name='radio_"+item+"'>"+
          "<input type='text' value='"+thisProb.answer[key]+"'><br>");
        }
        strList.push('</div>');
      }if(thisProb.type == 'checkbox'){
        strList.push("<div id='parent_"+item+"'><label><span class='must'>* </span>Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' value='"+thisProb.title+"'><br>");
          for(var key in thisProb.answer){
            strList.push("<input type='checkbox'>"+
            "<input type='text' value='"+thisProb.answer[key]+"'><br>");
          }
          strList.push('</div>');
      }else if(thisProb.type == 'textarea'){
        strList.push("<div id='parent_"+item+"'><label>");
        if(thisProb.isMust) strList.push("<span class='must'>* </span>");
        strList.push("Q"+num+"&nbsp;&nbsp;</label>"+
          "<input type='text' value='"+thisProb.title+"'><br>"+
          "<textarea>"+thisProb.answer+"</textarea></div>");
      }
    }
      $('#lookProb').html(strList.join(""));
  }
};
$(document).ready(function(){
  pageIndex = pageHandle.getHash();
  pageHandle.showQues();
});
