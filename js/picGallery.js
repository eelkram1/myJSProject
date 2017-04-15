function showPic(whichPic){
	debugger;
	//获取源照片属性
	var sourcePic = whichPic.getAttribute("href");
	//获取目标照片属性
	/*
	var destinationPic = document.getElementById("placeholder");
	destinationPic.setAttribute("src",sourcePic);
	*/
	var dest = document.getElementsByTagName("img");
	var proputy=dest[0].getAttribute("src");
	dest[0].setAttribute("src",sourcePic);
	
	var sourcetext = whichPic.getAttribute("title");
	var desttext =document.getElementById("holdertext");
	desttext.firstChild.nodeValue=sourcetext;
}

function pictureGallery(){
	debugger;
	var picturelist = document.getElementById("picturelist");
	var linklist = picturelist.getElementsByTagName("a");
	for(var i = 0;i <= linklist.length-1 ; i++){
	linklist[i].onclick = function(){
		showPic(this);
		return false;
	}
	}
}

addOnloadEvent(pictureGallery);