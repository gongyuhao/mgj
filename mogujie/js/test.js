//轮播图
//获取图片和圆点
var lb=document.querySelectorAll('.lb img')
var li=document.querySelectorAll(".lb li")
var index=0;
hideDiv(0)
//封装函数
function hideDiv(b){
	// for(var i=0;i<lb.length;i++){
	//  	if(lb[i].style.transform=="translateX(db(0))"){
	//  		lb[0].style.transform="translateX(db(-320rem))"
	//  		lb[1].style.transform="translateX(db(320rem))"
	//  		lb[2].style.transform="translateX(db(0))"
	//  	}else if(lb[i].style.transform=="translateX(db(320rem))"){
	//  		lb[0].style.transform="translateX(db(320rem))"
	//  		lb[1].style.transform="translateX(db(0))"
	//  		lb[2].style.transform="translateX(db(-320rem))"
	//  	}else if(lb[i].style.transform=="translateX(db(-320rem))"){
	//  		lb[0].style.transform="translateX(db(0))"
	//  		lb[1].style.transform="translateX(db(-320rem))"
	//  		lb[2].style.transform="translateX(db(320rem))"
	//  	}
 //    }
 //    if(lb[b].style.transform=="translateX(db(0))"){
	//  		lb[0].style.transform="translateX(db(-320rem))"
	//  		lb[1].style.transform="translateX(db(320rem))"
	//  		lb[2].style.transform="translateX(db(0))"
	//  	}else if(lb[b].style.transform=="translateX(db(320rem))"){
	//  		lb[0].style.transform="translateX(db(320rem))"
	//  		lb[1].style.transform="translateX(db(0))"
	//  		lb[2].style.transform="translateX(db(-320rem))"
	//  	}else if(lb[b].style.transform=="translateX(db(-320rem))"){
	//  		lb[0].style.transform="translateX(db(0))"
	//  		lb[1].style.transform="translateX(db(-320rem))"
	//  		lb[2].style.transform="translateX(db(320rem))"
	//  	}
	for(var j=0;j<lb.length;j++){
		lb[j].style.display="none";
		li[j].style.background="#fff";
 	}
   lb[b].style.display="block";
   li[b].style.background="#d43e2e";
}
time()
//设置定时器
function time(){
	 	setInterval(function(){
	 	index++;
	 	if(index>2){
	 		index=0;
	 	}
	 	hideDiv(index)
	},1500)
}
//获取时间
var sj=document.querySelector('.sj')
//倒计时
var span=document.querySelectorAll('.sp span')
text()
function text(){
	var myDate1=new Date("2222/2/9")
	var myDate=new Date()
	// console.log(myDate1)
	var ts=myDate.getTime();
	var ts1=myDate1.getTime();
    var h=myDate.getHours();
	// console.log(myDate1.getTime())
	// console.log(myDate2.getTime())
	var res=ts1-ts;
	var a=1000;
	var ma=60*a;
	var ha=60*ma;
	var da=24*ha;
	var day=parseInt(res/da);
	var h1=parseInt(res%da/ha);
	var m=parseInt(res%da%ha/ma);
	var s=parseInt(res%da%ha%ma/a)
	if(s<10&&s>=0){
  	s="0"+s
  }
  if(m<10&&m>=0){
  	m="0"+m
  }
	span[1].innerHTML=m
	span[2].innerHTML=s
    sj.innerHTML=h+'点快抢&nbsp●&nbsp距结束'
}
setInterval(text,1000);

//搜索
//获取两个input框
var inp1=document.querySelector(".form input")
var inp2=document.querySelector(".ss input")
//获取返回图标
var bac=document.querySelector('.back')
//获取被隐藏的div
var top1=document.querySelector(".top")
//获取被隐藏的div中下面的模块
var msc=document.querySelector('.msc')
//创建随机数组
var arr=['雪地靴','帽子','围巾','连衣裙','棉服','袜子','羽绒服','外套','卫衣','毛衣'];
console.log(top1.style)
//点击输入框跳转到top;产生一个热词
inp1.onclick=function(){
	top1.style.display="block";
	inp2.placeholder=arr[parseInt(Math.random()*arr.length)];
	inp1.value=inp2.placeholder;
	inp2.focus()
}
//点击被隐藏的div中下面的模块,被隐藏的div的position=fixed
msc.onclick=function(){
	top1.style.display="block";
	top1.style.position="fixed"
}
//点击返回影藏top,top.style.position=absolute
bac.onclick=function(){
	top1.style.display="none"
	top1.style.position="absolute"
}
var ser=document.querySelector('.ss a')
var ls=document.querySelector('.mshi')
var ls1=document.querySelector('.mshi .ls')
// console.log(ls1)
//获取光标
inp2.onfocus=function(){
	inp2.style.border='1px solid #ff949c';
}
//失去光标
inp2.onblur=function(){
	inp2.style.border='1px solid #aaa';
}
//点击添加历史记录,ls1影藏
ser.onclick=function(){
	var pat=/\S/;
	var span=document.createElement('span');
	var res1=pat.test(inp2.value);
	var res2=pat.test(inp2.placeholder);
	// console.log(res)
	//判断什么时候添加span标签
	if(res1&&inp2.value!=''){
	    ls1.style.display="none";
		ls.appendChild(span);
		ls.insertBefore(span,ls.firstChild);
		span.innerHTML=inp2.value||inp2.placeholder;
		inp2.placeholder=inp2.value;	
	    inp2.value='';
	    // console.log(ls.lastChild)
		// console.log(ls.childNodes);
	}else if(res2&&res1){
		ls1.style.display="none";
		ls.appendChild(span);
		ls.insertBefore(span,ls.firstChild);
		span.innerHTML=inp2.value||inp2.placeholder;
		inp2.placeholder=inp2.value;		
	    inp2.value='';
	}else if(res2&&inp2.value==''){
		ls1.style.display="none";
		ls.appendChild(span);
		ls.insertBefore(span,ls.firstChild);
		span.innerHTML=inp2.value||inp2.placeholder;
		// inp2.placeholder=inp2.value;		
	    inp2.value='';
	}
	var spans=document.querySelectorAll('.mshi span');
	var len=ls.childNodes.length;
	if(spans.length>10){
		ls.removeChild(ls.childNodes[len-2]);
	}
	inp2.focus();
	inp2.value='';
}
var del=document.querySelector(".del")
// console.log(ls.childNodes)
//删除添加的span标签,ls1出现
del.onclick=function(){
	var spans=document.querySelectorAll('.mshi span');
	console.log(spans)
	for(var i=0;i<spans.length;i++){
	  spans[i].remove(ls)
	}
	ls1.style.display="block";
	inp2.value=""
}
//跳转页面
var hov1=document.querySelectorAll('.hov')[2]
var hov2=document.querySelectorAll('.hov')[3]
// var hov3=document.querySelectorAll('.hov')[1]
hov1.onclick=function(){
	window.location.href="gouwuche.html"
}
hov2.onclick=function(){
	window.location.href="denglu.html"
}