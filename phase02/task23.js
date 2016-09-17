var tree=document.getElementById("super"),
    list=[],
    a=undefined,
    timer=null,
    check=document.getElementById("check"),
    button=document.getElementById("button");
//深度优先遍历
function travel(node){
	if(node!=null){
		list.push(node);
		for(var i=0;i<node.children.length;i++){
			if(node.children[i].nodeType==1){
				travel(node.children[i]);
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
			if(input==content&&content&&a==1){
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
//深度优先遍历
button.addEventListener("click",function(){
	origin();
	travel(tree);
	show(0);
});
//查询函数
check.addEventListener("click",function(){
	origin();
	travel(tree);
	show(1);
});
//初始状态
function origin(){
	list=[];
	clearInterval(timer);
	var divs=document.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.backgroundColor="#fff";
	}
}
