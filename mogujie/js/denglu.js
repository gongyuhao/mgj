var fla=document.querySelector('.fla')
var inp=document.querySelector('[type=text]')
var word=document.querySelector('[type=password]')
var chage=document.querySelector('.chage')
// console.log(inp)
//出现叉
inp.onkeyup=function(){
	if(inp.value!=''){
		fla.style.display="block"
	}else{
		fla.style.display='none'
	}
}
// word.onkeyup=function(){
// 	if(word.value!=''){
// 		chage.style.display="block"
// 	}else{
// 		chage.style.display='none'
// 	}
// }
fla.onclick=function(){
	inp.value=''
	inp.focus()
	fla.style.display="none"
	pd[0].style.display="none"
}
//改变input框属性
chage.onclick=function(){
	if(word.type=="text"){
		word.type="password"
	}else if(word.type=="password"){
		word.type="text"
	}
}
//正则
var pd=document.querySelectorAll('.pd')
var pat=/^[a-z0-9_-]{3,16}$|^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$|^1[3|4|5|8][0-9]\d{4,8}$/
inp.onblur=function(){
	if(pat.test(inp.value)){
		pd[0].style.display="block"
		pd[0].style.background="#18d54a"
		pd[0].innerHTML="√"
	}else{
		pd[0].style.display="block"
		pd[0].style.background="#ff5776"
		pd[0].innerHTML="x"
	}
}
// inp.onfocus=function(){
// 	pd[0].style.display="none"
// }
var pat2=/\s/ig
word.onblur=function(){
	if(word.value==""||pat2.test(word.value)){
		pd[1].style.display="block"
		pd[1].style.background="#ff5776"
		pd[1].innerHTML="x"
	}else{
		pd[1].style.display="block"
		pd[1].style.background="#18d54a"
		pd[1].innerHTML="√"
	}
}
// word.onfocus=function(){
// 	pd[1].style.display="none"
// }