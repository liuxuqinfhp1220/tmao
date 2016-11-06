$(function(){
    //顶部开始
        var tb=$(".tb")[0];
        var tbl=$(".tb-list",tb)[0];
        hover(tb,function(){
            tbl.style.display="block";
            tb.style.background="#fff";
            tb.style.border="1px solid #ccc";
            tbl.style.border="1px solid #ccc";
            tbl.style.borderTop="";
        },function(){
            tbl.style.display="none";
            tb.style.background="";
            tb.style.border="";
            tb.style.border="";
        })
        var coll=$(".coll")[0];
        var cl=$(".coll-list",coll)[0];
        hover(coll,function(){
              cl.style.display="block";
              coll.style.background="#fff";
              coll.style.border="1px solid #ccc";
              cl.style.border="1px solid #ccc";
              cl.style.borderTop="";
        },function(){
              cl.style.display="none";
              coll.style.background="";
               coll.style.border="";
        })
        var phone=$(".phone")[0];
        var ewm=$(".erweima",phone)[0];
        hover(phone,function(){
            ewm.style.display="block";
            ewm.style.border="1px solid #ccc";
            ewm.style.borderTop="";
        },function(){
            ewm.style.display="none";
        })
        var buy=$(".buy")[0];
        var buyl=$(".buy-list",buy)[0];
        hover(buy,function(){
            buyl.style.display="block"; 
            buyl.style.border="1px solid #ccc";
            buyl.style.borderTop="";
            buy.style.border="1px solid #ccc";
            buy.style.background="#fff";
        },function(){
            buyl.style.display="none";
            buy.style.border=""; 
             buy.style.background="";
        })
    //顶部结束
    // banner开始
	var banner=$(".banner")[0];
	var box=$(".box")[0];
	var bannertotal=$(".banner-total",box);
	var bannercircle=$(".banner-circle",banner)[0];
	var circles=$(".circle",bannercircle);
    circles[0].style.backgroundColor="#fff";
	bannertotal[0].style.opacity=1;
	var index=0;
	var next=0;
	var t=setInterval(wheel,1500);
		function wheel(){
		next++;
		if(next==bannertotal.length){
			next=0;
		}
		for(var i=0;i<circles.length;i++){
			circles[i].style.backgroundColor="#6A908E";
		}
        animate(bannertotal[index],{opacity:0},500);
        circles[next].style.backgroundColor="#fff";
        animate(bannertotal[next],{opacity:1},500);
        index=next;
	}
    banner.onmouseover=function(){
    	clearInterval(t);
    }
     banner.onmouseout=function(){
    	t=setInterval(wheel,1500)
    }
    for(var i=0;i<circles.length;i++){
    	circles[i].index=i;
    	circles[i].onclick=function(){
    		for(var j=0;j<circles.length;j++){
    			circles[j].style.backgroundColor="#6A908E";
    		}
        animate(bannertotal[index],{opacity:0},500);
        this.style.backgroundColor="#fff";
        animate(bannertotal[this.index],{opacity:1},500);
        index=this.index;
    	}
    }
    // banner结束
    // 品牌开始
    var hbm1=$(".hb-b-m-1")[0];
    var hbbrand=$(".hb-brand",hbm1);
    for(var i=0;i<hbbrand.length;i++){
        var mask=$(".mask",hbbrand[i]);
        for(var j=0;j<mask.length;j++){
            mask[j].onmouseover=function(){
                this.style.opacity=0.9;
            }
            mask[j].onmouseout=function(){
                this.style.opacity=0;
            }
        }
        
    }
    // 品牌结束
    //左侧栏开始
    var qz=$(".qz");
    var leftedge=$(".leftedge")[0];
    var as=$("a",leftedge);
    as[0].style.background="#DD2727";
    var tops=[800];
    var arr=["#DD2727","#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#ccc"];
    for(var i=0;i<qz.length;i++){
        var tt=qz[i].offsetTop;
        tops.push(tt);
    }
    tops.push(4900);
    for(var i=0;i<as.length-1;i++){
        as[i].index=i;
        as[i].onclick=function(){
            animate(document.body,{scrollTop:tops[this.index]},100);
            animate(document.documentElement,{scrollTop:tops[this.index]},100);
        }
        as[i].onmouseover=function(){
            this.style.backgroundColor=arr[this.index];
        }
        as[i].onmouseout=function(){
            this.style.background="";
        }
    }
    as[7].onclick=function(){
         animate(document.body,{scrollTop:-400},100);
         animate(document.documentElement,{scrollTop:-400},100);
    }
    as[7].onmouseover=function(){
            this.style.backgroundColor=arr[7];
        }
    as[7].onmouseout=function(){
            this.style.background="";
        }
    // 左侧栏结束
    //图片懒加载开始
   /* var yh=$(".youhua");
    var ttt=[];
    var h=document.documentElement.clientHeight;
    for(var i=0;i<yh.length;i++){
        var tops=yh[i].offsetTop;
        ttt.push(tops);
    }*/
    // 图片懒加载结束
    // 跳动搜索开始
    var search=$(".search")[0];
    var flag=true;
    window.onscroll=function(){
        var stop=document.body.scrollTop||document.documentElement.scrollTop;
        if(stop>600&&flag){
            animate(search,{top:0},200);
            flag=false;
        }else if(!flag&&stop<600){
            animate(search,{top:-50},200);
            flag=true;
        }
        if(stop>800){
            leftedge.style.display="block";
        }
        else if(stop<800){
            leftedge.style.display="none";
        }
        for(var i=0;i<tops.length;i++){
            if(tops[i]<stop+550){
                for(var j=0;j<as.length;j++){
                    as[j].style.backgroundColor="";
                }
                as[i].style.backgroundColor=arr[i];
            }
        }
        /*for(var i=0;i<ttt.length;i++){
                if(ttt[i]<stop+h){
                   var imgs=$("img",yh[i]);
                   // console.log(imgs.length)
                   for(var j=0;j<imgs.length;i++){
                    imgs[j].src=imgs[j].getAttribute('asrc');
                   }  
                }
                
        }*/
    }
    window.onscroll();
    // 跳动搜索结束
    var ce1=$(".ce1-img")[0];
    var tequan=$(".tequan")[0];
    ce1.onmouseover=function(){
        tequan.style.display="block";
        animate(tequan,{right:35},100);
    }
    ce1.onmouseout=function(){
        tequan.style.display="none";
        animate(tequan,{right:50},100);
    }
    var ce3=$(".ce3");
    var cc=$(".cc");
    for(var i=0;i<ce3.length;i++){
        ce3[i].index=i;
        ce3[i].onmouseover=function(){
            cc[this.index].style.display="block";
            animate(cc[this.index],{right:35},100);
        }
         ce3[i].onmouseout=function(){
            cc[this.index].style.display="none";
            animate(cc[this.index],{right:50},100);
        }
    }
    
})
