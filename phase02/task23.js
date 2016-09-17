var tree=document.getElementById("super"),
    list=[],
    a=undefined,
    timer=null,
    check=document.getElementById("check");
//先序遍历
function preOrder(node){
	if(node!=null){
		list.push(node);
		var length=node.children.length;
		if(length>0){
			for(var i=0;i<length;i++){
				if(node.children[i].nodeType==1){
					preOrder(node.children[i]);
				}
			}
		}
	}
}
//依次改变数组list中的元素背景颜色
function show(a){
	var input=document.getElementById('input').value;
	i = 0;
	list[i].style.backgroundColor='blue';
	timer = setInterval(function () {
		i++;
		if (i < list.length) {
			var content=list[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") ;
			if(input==content&&content){
				clearInterval(timer);
				list[i].style.backgroundColor="red";
				list[i-1].style.backgroundColor="#fff";
			}
			else{
				list[i-1].style.backgroundColor = '#fff';
			    list[i].style.backgroundColor = 'blue';
			}
		} 
		else {
			clearInterval(timer);
			list[list.length-1].style.backgroundColor = '#fff';
			if(a==1) alert("未找到输入的值！");
		}
	},500);
}
document.getElementById("button").addEventListener("click",function(){
	origin();
	preOrder(tree);
	show(0);
});
//查询函数
function test(node){
	if(node!=null){
		list.push(node);
		var length=node.children.length;
		if(length>0){
			for(var i=0;i<length;i++){
				if(node.children[i].nodeType==1){
					preOrder(node.children[i]);
				}
			}
		}
	}
}
//查询函数
check.onclick=function(){
	origin();
	test(tree);
	show(1);
}
//初始状态
function origin(){
	list=[];
	clearInterval(timer);
	var divs=document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.backgroundColor="#fff";
	}
}
