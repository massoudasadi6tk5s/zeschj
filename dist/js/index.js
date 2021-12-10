$(document).ready(function(){
	
	input_element()//点击搜索框时，去除里面的东西
	nav_title_mousenter()//鼠标放在标题栏会出现列表
	// display_category_right()//鼠标放在侧栏，显示产品
	hearder_lunbo()//轮播
	//下面是实现代码
	
	//点击搜索框时，去除里面的提示,包括下拉列表和边框颜色的改变
	function input_element(){
		var $input_shijian=$(".nav-title .container-self .search-box form input[type=text]");
		$input_shijian.focus(function(){
			$(this).addClass("serch-click-border");
			$(".submit-box").addClass("serch-click-border");
			$(".search-word-box").hide();
			$(".keydown-list").show();
		})
		$input_shijian.blur(function(){
			$(".search-word-box").show();
			$(this).removeClass("serch-click-border");
			$(".submit-box").removeClass("serch-click-border");
			$(".keydown-list").hide();
		})
	}
	//鼠标放在标题栏会出现列表
	function nav_title_mousenter(){
		let index_ul;
		$(".nav-title .conten-title-ul li.have-dis").mouseenter(function(){
			if(!$(".nav_menu").is(":animated"))
				$(".nav_menu").slideDown();
		})
		
		$(".nav-title .conten-title-ul li.have-dis").hover(function(){
			index_ul=$(this).index();
			index_ul;
			$(".nav_menu ul").eq(index_ul).show().siblings().hide();
			index_ul=0;
		});
		/*移除展示列表*/
		$(".nav-title .conten-title-ul li.none-dis").hover(function(){
			$(".nav_menu").slideUp();
			index_ul=0;
		});
		$("header nav").hover(function(){
			$(".nav_menu").slideUp();
			index_ul=0;
		});
		$("#rotation-photo-box").hover(function(){
			$(".nav_menu").slideUp();
			index_ul=0;
		});
		$(".header-logo ").hover(function(){
			$(".nav_menu").slideUp();
			index_ul=0;
		});
	}
	
	//鼠标放在侧栏，显示产品
	function display_category_right(){
		let index_li;
		$(".site-category ul .category-li").hover(function(){
			
			$("ul.site-category-list").find("a.category-right-disBox-dis").removeClass("category-right-disBox-dis");
			
			$(this).find("a.category-li-a").addClass("category-right-disBox-dis");
		})
		$(".site-category").mouseout(function(){
			
			$("a.category-right-disBox-dis").removeClass("category-right-disBox-dis");
			
		})
	}
	
	//轮播图
	function hearder_lunbo(){
		//自动播放

		var zidong= setInterval(function(){
			right_animate();
		},3000)
		
		// 先设置一下ul的宽度
		var lengths	=$("#rotation-photo-box .rotation-photo .rotation-photo-ul li").length;
		alllengths=lengths*1226+"px";
		$("#rotation-photo-box .rotation-photo .rotation-photo-ul").css("width",alllengths);
		 
		let index_li=-1;
		let shuzhi=0;
		
		function right_animate(){
			index_li++;
			shuzhi=-1226*index_li;
			if(index_li<4)
				$(".rotation-photo-ul").animate({left: shuzhi+"px"},600);
			else if(index_li=4)
			{
				$(".rotation-photo-ul").animate({left: shuzhi+"px"},600,function(){
					 $(".rotation-photo-ul").css("left",0);
				 });
				 index_li=0;
			}
			$(".ui-pager").find("li").removeClass("ui-pager-li-ho");
			$(".ui-pager li").eq(index_li).addClass("ui-pager-li-ho");
		}
		
			
		
		$(".ui-pager li").click(function(){
			clearInterval(zidong);
			index_li=$(this).index();
			shuzhi=-1226*index_li;
			//移动
			$(".rotation-photo-ul").stop().animate({left: shuzhi+"px"},600);
			//改变样式
			$(".ui-pager").find("li").removeClass("ui-pager-li-ho");
			$(".ui-pager li").eq(index_li).addClass("ui-pager-li-ho");
		})
		
		$(".rotation-photo .right").click(function(){
			clearInterval(zidong);
			if(!$(".rotation-photo-ul").is(":animated"))
			{
				right_animate();
			}
		})
		
		$(".rotation-photo .left").click(function(){
			clearInterval(zidong);
			if(!$(".rotation-photo-ul").is(":animated"))
			{
				index_li--;
				shuzhi=-1226*index_li;
				if(index_li > -1)
					$(".rotation-photo-ul").animate({left: shuzhi+"px"},600);
				else if(index_li <=-1)
				{
					 index_li=lengths-2;
					 shuzhi=-1226*index_li;
					$(".rotation-photo-ul").animate({left: shuzhi+"px"},500);
				}
				$(".ui-pager").find("li").removeClass("ui-pager-li-ho");
				$(".ui-pager li").eq(index_li).addClass("ui-pager-li-ho");
			}
		})
		
		$("#rotation-photo-box .rotation-photo").mouseenter(function(){
			clearInterval(zidong);
		})
		
		$(".rotation-photo").mouseleave(function(){
			zidong=setInterval(function(){
				 right_animate();
			},3000);
		})
	}
})