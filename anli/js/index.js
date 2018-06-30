$(function(){
	/*nav导航背景跟随*/

	$(window).scroll(function(){

		if($(document).scrollTop()>920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
			$("#about_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>1920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#service_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>2920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#case_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>3920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#news_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>4920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#job_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>5920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#message_nav").addClass("active").find("span").css("color","#fff");
		}
		if($(document).scrollTop()>6920){
			$(".navtop").removeClass("active").find("span").css("color","#ccc");
		    $("#contact_nav").addClass("active").find("span").css("color","#fff");
		}

	})


	$(".header_right li").hover(function(){
		$(this).addClass("active").css("color","#fff");
		$(this).find("span").css("color","#fff");
		
		
	},function(){
		
		$(this).removeClass("active").css("color","#000");
		$(this).find("span").css("color","#999999");
	})

	/*新闻中心*/
	$(".news_li ul li").hover(function(){

		$(this).css("color","#9900FF");

	},function(){

		$(this).css("color","#ccc");

	})


	//在线留言
	var str = "abcd4re3i3y5i35n3hlrbhlefhfei";
	var str1 = "";	
	$(".message_yzm").add(".message_yzma").on("click",function(){
		str1 = "";
		for(var i =0;i<4;i++){

			str1 += str[ parseInt( Math.random()*str.length )]; 

		}
		$(".message_yzm").text(str1);
	})
	


	/*核心服务*/

	$(".service_item li").hover(function(){
		$(this).addClass("bg");
		$(this).find(".service_item_text").show();
	},function(){
		$(this).removeClass("bg");
		$(this).find(".service_item_text").hide();
	})
	
})
