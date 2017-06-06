var operId,operIds = [];
var operType;//'update'发布 ‘delete’ 删除单个问卷  ‘deletes’ 批量删除
var _quesNaire;
$(document).ready(function(){
   initHandle.initData();
   initHandle.showList();
});
var initHandle={
  //localstorage中是否有缓存数据
  initData:function(){
    if(localStorage._quesNaire != null){
      _quesNaire = JSON.parse(window.localStorage.getItem('_quesNaire'));
    }else{
      _quesNaire = DataQ;
    }
  },
  //根据数据显示表格
  showList:function(){
      var strTbody = [];
      if(_quesNaire.length == 0){
        $('#new_list').css('display','block');
        $('#btnNew').css('visibility','hidden');
        $('#table_list').css('display','none');
        return;
      }
      for(var item in _quesNaire){
        strTbody.push("<tr><td><input type='checkbox' class='selectMem' value='"+_quesNaire[item].id+"'></td><td>"+_quesNaire[item].name+"</td><td>"+_quesNaire[item].timePub+"</td>");
          if(_quesNaire[item].state == '未发布'){
            strTbody.push("<td class='loading'>"+_quesNaire[item].state+"</td><td><a href='edit.html#"+_quesNaire[item].id+"'><button>编辑</button></a><button class='deleteThis' value='"+_quesNaire[item].id+"'>删除</button><button class='upDateThis' value='"+_quesNaire[item].id+"'>发布</button></td></tr>");
          }else{
            strTbody.push("<td>"+_quesNaire[item].state+"</td><td><a  href='look.html#"+_quesNaire[item].id+"'><button>查看问卷</button></a><a href='check.html#"+_quesNaire[item].id+"'><button>查看数据</button></a></td></tr>");
          }
      }
      $('#tBody').html(strTbody.join(""));
  }
}

//为table上的多选框、删除、发布按钮绑定事件
$('#table').bind('click',function(event){
  event=event||window.event;
  var target=event.target||event.srcElement;
  var checkedDel = $('.selectMem:checked');
  switch(target.className){
    case 'selectAll':  //点击全选框
        $('.selectMem').prop('checked',target.checked);
        break;
    case 'selectMem':  //点击每个问卷前面的勾选框
        if (target.checked) {
          if (checkedDel.length == $('.selectMem').length) {
              $('#selectAll').prop('checked', true);
            }
        } else {
          $('#selectAll').prop('checked', false);
        }
        break;
    case 'upDateThis':  //将未发布的问卷发布
        maskHandle.showMask('确认要发布此问卷？'); //显示遮罩层
        operType = 'update';
        operId = target.value; //被删除问卷的id
        break;
    case 'deleteList':  //删除所有勾选的问卷
        if(checkedDel.length == 0) {
          alert('请勾选要删除的问卷！');
          return;
        }
        maskHandle.showMask('确认要删除所有勾选的问卷？'); //显示遮罩层
        operType = 'deletes';
        operIds = [];
        for(var i=0; i<checkedDel.length;i++){
          operIds.push(checkedDel[i].value); //将被勾选问卷的id存入operIndexs中
        }
        break;
    case 'deleteThis': //点击未发布问卷后面的删除按钮
        maskHandle.showMask('确认要删除此问卷？'); //显示遮罩层
        operType = 'delete';
        operId = target.value; //被删除问卷的id
        break;
  }
});
//为弹出框绑定点击事件
$('#parent').bind('click',function(event){
        event=event||window.event;
        var target=event.target||event.srcElement;
        event.preventDefault();
        switch(target.id){
          case 'yes':   //点击确认
              maskHandle.hideMask();
              if(operType == 'delete'){   //删除相应问卷
                listHandle.delete();
              }
              if(operType == 'update'){    //发布相应问卷
                listHandle.update();
              }
              if(operType == 'deletes'){   //删除勾选的问卷
                listHandle.deletes();
              }
              initHandle.showList();
              break;
          case 'no':case'cover':case'close':   //点击取消(遮罩层消失)
              maskHandle.hideMask();
              break;
        }
});
//找到对应的 _quesNaire中的元素并做相应的操作
var listHandle={
  delete:function(){   //删除相应问卷
    for(var item in _quesNaire){
      if(_quesNaire[item].id == operId){
         _quesNaire.splice(item,1);
         break;
      }
    }
    listHandle.localStory();
  },
  update:function(){   //发布相应问卷
    for(var item in _quesNaire){
      if(_quesNaire[item].id == operId){
         _quesNaire[item].state = '已发布';
         break;
      }
    }
    listHandle.localStory();
  },
  deletes:function(){   //删除勾选的问卷
    for(var i = operIds.length-1; i>=0; i--){
      for(var j = _quesNaire.length-1; j>=0; j--){
        if(operIds[i] == _quesNaire[j].id){
          _quesNaire.splice(j,1);
          break;
        }
      }
    }
    listHandle.localStory();
  },
  //将数据存在localstorage中
  localStory:function(){
    window.localStorage.setItem('_quesNaire',JSON.stringify(_quesNaire));
  },
}
//遮罩层方法
var maskHandle={
    showMask:function(str){
      $('#alertCont').append(str);
      $('#cover').css('display','block');
      $('#deleteCover').css('display','block');
    },
    hideMask:function(){
      $('#alertCont').empty();
      $('#cover').css('display','none');
      $('#deleteCover').css('display','none');
    }
}
