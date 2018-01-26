var fla=document.querySelector('.fla')
var inp=document.querySelectorAll('[type=text]')
var pd=document.querySelector('.pd')
var inp1=inp[0];
inp1.onkeyup=function(){
	if(inp1.value!=''){
		fla.style.display="block"
	}else{
		fla.style.display='none'
	}
}
fla.onclick=function(){
	inp1.value=''
	inp1.focus()
	fla.style.display="none"
	pd.style.display="none"
}
var pat=/^1[3|4|5|8][0-9]\d{4,8}$/
inp1.onblur=function(){
	if(pat.test(inp1.value)){
		pd.style.display="block"
		pd.style.background="#18d54a"
		pd.innerHTML="√"
	}else{
		pd.style.display="block"
		pd.style.background="#ff5776"
		pd.innerHTML="x"
	}
}
//获取验证码
var tit=document.querySelector('.tit')
var inp2=inp[1]
var btn=document.querySelector('button')
// console.log(tit)
var timer;
tit.onclick=function(){
	var str=''
	for(i=0;i<4;i++){
		str+=parseInt(Math.random()*10);
	}
	if(pat.test(inp1.value)){
		inp2.value=str;
		console.log(str)
		var num = 60;
		timer = setInterval(function(){
			tit.innerHTML = "重新发送("+num+"s)";
			// inp2.value=str;
			num--;
			if(num < 0){
				clearInterval(timer);
				tit.innerHTML= '重新发送(0s)'
			}
		},1000)
	}
}
btn.onclick=function(){
	clearInterval(timer);
	tit.innerHTML = '验证成功'
}