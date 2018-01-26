//切换
var spa=document.querySelectorAll('.styASpan')
var th=document.querySelectorAll('.things')
// console.log(th)
change(0)
function change(a){
	for(var i=0;i<spa.length;i++){
		spa[i].className="styASpan"
		th[i].style.display="none"
	}
	spa[a].className="styASpan col"
	th[a].style.display="block"
}
for(var j=0;j<spa.length;j++){
	spa[j].index=j;
	spa[j].onclick=function(){
		change(this.index)
	}
}
// console.log(window.screen.height)

var xie=document.querySelector('.xie');
var t = 0;
window.onload = function(){
t = xie.offsetTop;
console.log(t)
}
window.onscroll = function(){

	var scro = document.documentElement.scrollTop||document.body.scrollTop;
	if(t <= scro){
		xie.style.position = "fixed";
		xie.style.left = "0";
		xie.style.top = "0";
		xie.style.zIndex="10"
	} else{
		xie.style.position = "static";
	}
	// console.log(t)
}

// // console.log(xie.offset())
// var t =xie.offsetTop
// // console.log(t)
// window.addEventListener("scroll",function(e){
// 	// var t =xie.offsetTop
// 	// var c;
// 	var w=document.documentElement.scrollTop||document.body.scrollTop;
// 		if(t<=w){
// 			xie.style.position="fixed"
// 			xie.style.top="0"
// 			xie.style.left="0"
// 		}else{
// 			xie.style.position="static"
// 		}
// 	console.log(t+" "+w)
// });
//侧边栏
var y=document.querySelectorAll('.zzc .y')
var y3=document.querySelector('.y1')
var back=document.querySelectorAll('.back')
var cover=document.querySelector('.cover')
var x=document.querySelector('.cha')
var y1=y[0];
var b1=back[0];
var b2=back[1];
var b3=back[2];
var b4=back[3];
// console.log(b1)
//点击出现遮罩层
y1.onclick=function(){
	cover.style.display="block"
	y1.style.display="none"
	x.style.display="block"
	// back.style="opacity:1"
	b1.style="top:-310%;opacity:1"
	b2.style="top:-230%;opacity:1"
	b3.style="top:-150%;opacity:1"
	b4.style="top:-70%;opacity:1"
	console.log(1)
}
//点击遮罩层消失
x.onclick=function(){
	cover.style.display="none"
	y1.style.display="block"
	x.style.display="none"
	b1.style="top:15%;opacity:0"
	b2.style="top:15%;opacity:0"
	b3.style="top:15%;opacity:0"
	b4.style="top:15%;opacity:0"
	// console.log(1)
}
var zzc=document.querySelector('.zzc')
window.addEventListener("scroll",function(e){
	var t =document.documentElement.scrollTop||document.body.scrollTop;
	// console.log(t)
	 if(t >= 300){
	    zzc.style.bottom="21%";
	    y3.style.opacity="0.7"
	}else{
		zzc.style.bottom="9%"
		y3.style.opacity="0"
	}
});