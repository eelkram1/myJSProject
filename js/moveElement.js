debugger;
function positionMessage(){
	if(!(document.getElementById && document.getElementById("message"))) return false;
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="100px";
	elem.style.top = "100px";
	moveMessage("message",500,500,20);
}

function addEvent(func){
	var oldEvent = window.onload;
	if(typeof oldEvent != 'function'){
		window.onload=func;
	}
	else{
		window.onload = function(){
			oldEvent();
			func();
		}
	}
}

addEvent(positionMessage);

function moveMessage(elementId,finel_x,finel_y,times){
	debugger;
	var elem=document.getElementById(elementId);
	var left_x = parseInt(elem.style.left);
	var top_y = parseInt(elem.style.top);
	if(left_x == finel_x && top_y == finel_y){
		return true;
	}
	if(left_x<finel_x){
		left_x++;
	}
	if(left_x>finel_x){
		left_x--;
	}
	if(top_y<finel_y){
		top_y++;
	}
	if(top_y>finel_y){
		top_y--;
	}
	elem.style.left=left_x +"px" ;
	elem.style.top=top_y + "px" ;
	var v_func="moveMessage('"+elementId+"',"+finel_x+","+finel_y+","+times+")";
	var movement=setTimeout(v_func,times);
}