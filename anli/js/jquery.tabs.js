;(function($){

	$.fn.tabs = function(option){


		var obj ={
			"ck":"click",
			"lis":".contact_urls li",
			"t1":".contact_t1",
			"t2":".contact_t2",
			"findChild":"div",
			"parents":".contact_li",
			"titleEl":".contact_title",
			"titleC":"CONTACT",
			"titleZ":"联系我们",
			"titleC1":"LINKS",
			"titleZ1":"友情链接",
			"list1":".contact_contact2",
			"list2":".contact_contact",
			"list3":".job_list2"
		} 

		var fn = $.extend(obj,option);

		$(fn.lis).on(fn.ck,function(){
			
			$(this).find(fn.findChild).addClass("contact_blue").attr("style","color:#fff").parents(fn.parents).siblings().find(fn.findChild).addClass("contact_ccc");
			$(this).find(fn.findChild).removeClass("contact_ccc").parents(fn.parents).siblings().find(fn.findChild).removeClass("contact_blue");

			if( $(this).index() == "0" ){

				
				$(this).parents(fn.titleEl).find(fn.t1).text(fn.titleC);
	 			$(this).parents(fn.titleEl).find(fn.t2).text(fn.titleZ);
				$(fn.list1).hide();
				$(fn.list3).hide();
				$(fn.list2).show();
				 
			}else if($(this).index() == "1" ){
				$(fn.list3).hide();
				$(fn.list2).hide();
				$(fn.list1).show();
				$(this).parents(fn.titleEl).find(fn.t1).text(fn.titleC1);
	 			$(this).parents(fn.titleEl).find(fn.t2).text(fn.titleZ1);
			}else if($(this).index() == "2" ){
				$(fn.list1).hide();
				$(fn.list2).hide();
				$(fn.list3).show();
				$(this).parents(fn.titleEl).find(fn.t1).text(fn.titleC2);
	 			$(this).parents(fn.titleEl).find(fn.t2).text(fn.titleZ2);
			}
		})


		$(".link_right").on("click",function(){
			$(".link_box").stop(false,true).animate({"marginLeft":"-730px"},500,function(){
				$(this).find(".link_ul").first().appendTo(".link_box");
				$(this).css("marginLeft","0px");
			})
		})

		$(".link_left").on("click",function(){
			$(".link_box").css("marginLeft","-730px");
			$(".link_box").find(".link_ul").last().prependTo(".link_box");
			$(".link_box").stop(false,true).animate({"marginLeft":"0px"},500);
		})

	}


})(jQuery);