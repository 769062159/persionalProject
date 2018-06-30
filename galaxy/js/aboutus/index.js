$(function(){
	var item1H=$("#item1").height();
	var item3TH=document.getElementById("item3").offsetTop;
	$(window).scroll(function(){
		if($(document).scrollTop()>item1H){
			$("#header").addClass("on");
			console.log(item1H)
		}else{
			$("#header").removeClass("on");
		}
		if($(document).scrollTop()>=item3TH-650){
			if($(".item3box ul li .t1").html()==0){
				numadd(100,$(".item3box ul li .t1"),time1);
				numadd(230,$(".item3box ul li .t2"),time2);
	            numadd(360,$(".item3box ul li .t3"),time3);
	            numadd2(9900,$(".item3box ul li .t4"),time4);
			}
	    }
	})
	if(!!window.ActiveXObject || "ActiveXObject" in window){
		
	}
	else{
		var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true
		});
		wow.init();
	}
	var time1,time2,time3,time4;
	
//参数分别为数值最终要增加到的值，要操作的元素对象，
	function numadd(number,obj,timenum){
        stopinterval(timenum);
		var num=0;
		timenum=setInterval(function(){
			if(num<number){
				num++;
			    obj.html(num);
			}else{
				stopinterval(timenum)
				return;
			}
		},10);
	}
	function stopinterval(time){
		clearInterval(time);
	}
	
	function numadd2(number,obj,timenum){
        stopinterval(timenum);
		var num=0;
		timenum=setInterval(function(){
			if(num<number){
				num+=10;
			    obj.html(num);
			}else{
				stopinterval(timenum)
				return;
			}
		},1);
	}
	
	
})