$(function() {
	//导航滚动渐变显示（jquery） 
	var item1H = $(".lxtoppicbg").height() - 134;
	$(document).scroll(function() {
		if($(this).scrollTop() > item1H) {
			$("#header").addClass("on");
		} else {
			$("#header").removeClass("on");
		}
	});

	//弹出动画
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true,
	});
	wow.init();

	$(".hotzixun .contentlist").eq(0).show()
	$(".hotzhuanti .contentlist").eq(0).show()
	$(".hotzhuanti .title li").hover(function() {
		$(this).addClass("on").siblings().removeClass("on")
		$(this).closest(".hotzhuanti").find(".contentlist").hide();
		$(this).closest(".hotzhuanti").find(".contentlist").eq($(this).index()).show()
	}, function() {})
	$(".hotzixun .title li").hover(function() {
		$(this).addClass("on").siblings().removeClass("on")
		$(this).closest(".hotzixun").find(".contentlist").hide();
		$(this).closest(".hotzixun").find(".contentlist").eq($(this).index()).show()
	}, function() {})
	
	//此处判断是否有品牌资讯，没有则显示相应无咨询页面
	if($("#item2 .item2box .boxleft .boxleftbox .boxleftcentent .contentlist").length==0){
		$(".nocontentlist").show()
	}
	else{ $(".nocontentlist").hide() }
	
	$("#navbox .navlist").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	$("#huifutips .fabubtn").on("click",function(){
		$("#QA").append("<div class='QAlist'>+<div class='listtitle'><a href='#'>奔跑的蜗牛</a>&nbsp;&nbsp;</div><div class='listtext'>"
		+$('#huifutips .tipsbox textarea').val()
		+"<div class='QAtime'>2018-4-11 11:20:53</div><div class='listbox'><a href='#'>回复</a><span>|</span><a href='#'>评论</a></div></div></div>")
	})
})