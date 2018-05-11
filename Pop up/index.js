window.onload = function(){
	/*获取页面元素*/
	var myBtn = document.getElementById("btn");
	var myBox = document.getElementById("box");
	var myIcon = document.getElementById("icon");
	
	/*监听弹窗打开事件*/
	myBtn.addEventListener("click" ,OpenBox);
	/*监听弹窗关闭事件*/
	myIcon.addEventListener("click" , CloseBox);
	/*监听window关闭事件*/
	window.addEventListener("click" ,CloseOutsite);
	function OpenBox(){
		myBox.style.display = "block";
	}
	function CloseBox(){
		myBox.style.display = "none";
	};
	function CloseOutsite(e){
		if(e.target == myBox){
			myBox.style.display = "none";
		}
	}
}
