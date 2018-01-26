//切换套餐
//获取.tc 和.gang
var tc=document.querySelectorAll(".tc")
var g=document.querySelector('.gang')
var zh1=document.querySelector('.zuhe')
var zh2=document.querySelector('.zuhe2')
console.log(zh2.style)
var tc1=tc[0];
var tc2=tc[1]
// console.log(tc1)
//点击套餐一,套餐一变色,滑块在套餐一下方
tc1.onclick=function(){
	tc1.className='tc cl';
	tc2.className="tc";
	g.style.transform= "translateX(5px)";
	zh1.style.transform="translateX(0)"
	zh2.style.transform="translateX(104.1%)"
}
//点击套餐二,套餐二变色,滑块在套餐二下方
tc2.onclick=function(){
	tc1.className='tc';
	tc2.className="tc cl";
	g.style.transform= "translateX(145%)";
	zh1.style.transform="translateX(-104.1%)"
	zh2.style.transform="translateX(0)"
}
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
	b1.style="top:-150%;opacity:1"
	b2.style="top:-110%;opacity:1"
	b3.style="top:-70%;opacity:1"
	b4.style="top:-30%;opacity:1"
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
//选购
var xz=document.querySelector('.xz')
var close=document.querySelector('.close')
var sty=document.querySelector('.sty')
var ys=document.querySelector('.size')
var num=document.querySelector('.money .num')
var jian=document.querySelector('.reduce')
var n=document.querySelector('.value')
var add=document.querySelector(".reduce2")
var ing=document.querySelector('.slz')
//加减
var a=1;
var b=1;
add.onclick=function(){
	a=a+1;
	num.innerHTML=254.10*a
	n.innerHTML=a;
	if(n.innerHTML>1){
		jian.style.color="#ed4566"
	}
    b=a;
}
jian.onclick=function(){
	if(n.innerHTML>1){
	    b=b-1;
	num.innerHTML=254.10*b
	}
	if(n.innerHTML==1){
		jian.style.color="#999"
	}
	n.innerHTML=b
	a=b;
}
close.onclick=function(){
	xz.style.bottom= "-200%"
	if(xz.style="bottom: -200%"){
		ing.style.display="none";
	}
	cover.style.display="none"
}
var gwc=document.querySelectorAll('.floor .big .son')[0]
// console.log(gwc)
gwc.onclick=function(){
	xz.style.bottom= "0"
	if(xz.style="bottom: 0"){
		ing.style.display="block";
	}
	cover.style.display="block"
}
var more=document.querySelector('.more')
more.onclick=function(){
	xz.style.bottom= "0"
	if(xz.style="bottom: 0"){
		ing.style.display="block";
	}
	cover.style.display="block"
}
//优惠券
var mj=document.querySelectorAll('.mj')
var fh1=document.querySelectorAll('.fh')
var get=document.querySelectorAll('.get')
var con=document.querySelectorAll('.content')
var tu=document.querySelectorAll('.mj .content .yl')
console.log(fh1)
for(var i=0;i<mj.length;i++){
	mj[i].index=i;
	mj[i].onclick=function(){
		tu[this.index].style.display="block"
		con[this.index].style.background="#cdcdcd"
		fh1[this.index].style.background="#cdcdcd"
		get[this.index].className="get ani"
	}
}
var zzc=document.querySelector('.zzc')
window.addEventListener("scroll",function(e){
	var t =document.documentElement.scrollTop||document.body.scrollTop;
	// console.log(t)
	 if(t >= 1000){
	    zzc.style.bottom="21%";
	    y3.style.opacity="0.7"
	}else{
		zzc.style.bottom="9%"
		y3.style.opacity="0"
	}
});