//添加onload事件
function addOnloadEvent(func){
	var oldfunc = window.onload;
	if(typeof oldfunc !='function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldfunc();
			func();
		}
	}
}