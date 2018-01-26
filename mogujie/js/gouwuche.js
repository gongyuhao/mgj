//编辑
var bj=document.querySelector('.bj')
var desc=document.querySelector('.desc')
var sc=document.querySelector('.sc')
var chat=document.querySelector('.chat')
var foot=document.querySelector('.foot')
// console.log(spa)
bj.onclick=function(){
	if(bj.innerHTML=="编辑"){
		desc.style.display="none"
		sc.style.display="block"
		chat.style.display="none"
		bj.innerHTML="完成"
		foot.style.display="block"
	}else{
		desc.style.display="block"
		sc.style.display="none"
		chat.style.display="block"
		bj.innerHTML="编辑"
		foot.style.display="none"
	}
}
//选择商品数量
var jian=document.querySelector('.jian')
var num=document.querySelector('.number')
var add=document.querySelector('.add')
var spa=document.querySelector('.many')
var a=1;
var b=1;
add.onclick=function(){
	a=a+1;
	// num.innerHTML=254.10*a
	num.innerHTML=a;
	if(num.innerHTML>1){
		jian.style.borderColor="#999";
		jian.style.background= "#fff";
	}
	spa.innerHTML="x"+a
    b=a;
}
jian.onclick=function(){
	if(num.innerHTML>=2){
	    b=b-1;
	// num.innerHTML=254.10*b
	}
	if(num.innerHTML<3){
		jian.style.borderColor="#e5e5e5";
		jian.style.background= "#f6f6f6";
	}
	num.innerHTML=b
	spa.innerHTML="x"+b
	a=b;
}
//选中和未选中商品
var inp=document.querySelectorAll('[type=checkbox]')
var shop=document.querySelectorAll('.shop')
var n=document.querySelector('.c-all .n')
var much=document.querySelector('.much')
for(var i=0;i<inp.length;i++){
	inp[i].index=i;
	inp[i].onclick=function(){
		var m=document.querySelector('.number')
		// console.log(m)
		if(inp[this.index].style.backgroundPosition=="0px 0px"){
			inp[this.index].style.backgroundPosition="0 100%"
		}else{
			inp[this.index].style.backgroundPosition="0 0"
		}
	// console.log(this.index)
		if(this.index==inp.length-1){
			for(var j=0;j<inp.length;j++){
				if(inp[this.index].style.backgroundPosition=="0px 0px"){
					inp[j].style.backgroundPosition="0 0"
				}
				else if(inp[this.index].style.backgroundPosition=="0px 100%"){
					inp[j].style.backgroundPosition="0 100%"
				}
			}
			if(inp[this.index].style.backgroundPosition=="0px 0px"){
			inp[this.index].style.backgroundPosition="0 0"
			n.innerHTML=shop.length
			much.innerHTML="￥"+(254*m.innerHTML)
			}else{
				inp[this.index].style.backgroundPosition="0 100%"
				n.innerHTML="0"
				much.innerHTML="￥0.00"
			}
		}else{
			if(this.index==0||this.index%2==0){
				if(inp[this.index].style.backgroundPosition=="0px 0px"){
					inp[this.index].style.backgroundPosition="0 0"
					inp[this.index+1].style.backgroundPosition="0 0"
					inp[inp.length-1].style.backgroundPosition="0 0"
					n.innerHTML=shop.length
				}else{
					inp[this.index].style.backgroundPosition="0 100%"
					inp[this.index+1].style.backgroundPosition="0 100%"
					inp[inp.length-1].style.backgroundPosition="0 100%"
					n.innerHTML="0"
					much.innerHTML="￥0.00"
				}
			}else if(this.index%2!=0){
				if(inp[this.index].style.backgroundPosition=="0px 0px"){
					inp[this.index].style.backgroundPosition="0 0"
					inp[this.index-1].style.backgroundPosition="0 0"
					inp[inp.length-1].style.backgroundPosition="0 0"
					n.innerHTML=shop.length
				}else{
					inp[this.index].style.backgroundPosition="0 100%"
					inp[this.index-1].style.backgroundPosition="0 100%"
					inp[inp.length-1].style.backgroundPosition="0 100%"
					n.innerHTML="0"
					much.innerHTML="￥0.00"
				}
			}
		}
	}
}
//确认是否删除
var del=document.querySelector('.del')
var cover=document.querySelector('.cover')
var choose=document.querySelector('.choose')
var fla=document.querySelector('.fla')
var check=document.querySelector('.check')
var tur=document.querySelector('.tur')
var floor=document.querySelector('.floor')
var ept=document.querySelector('.empty')
del.onclick=function(){
	for(var i=0;i<inp.length;i++){
		if(inp[i].style.backgroundPosition=="0px 0px"){
			cover.style.display="block"
			choose.style.transform="scale(1)";
		}else if(inp[i].style.backgroundPosition!="0px 0px"){
			check.className="check ani"
			setTimeout(function(){
				check.className="check"
			},2000)
		}
	}
}
fla.onclick=function(){
	choose.style.transform="scale(0)"
	setTimeout(function(){
		cover.style.display="none";
	},500)	
}
var sho=document.querySelector('.shop')
var htit=document.querySelector('.htit')
tur.onclick=function(){
	sho.remove(shop);
	floor.style.display="none";
	foot.style.display="none";
	choose.style.transform="scale(0)"
	setTimeout(function(){
		cover.style.display="none";
		ept.style.display="block"
		htit.innerHTML="购物车(0)"
		bj.innerHTML="编辑"
		chat.style.display="block"
	},500)	
}