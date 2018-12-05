var config = {};
config["screenLen"] = 4;
config["curIdx"] = 0;
config["pageSlide"] = false;

var screen_item = $(".screen");
var _btns = $('.btns');
var screen_item_wrap = $(".wrap_list");
var footer_show = $(".footer-show")
var screen_bg = screen_item.find(".screen-bg");
var slide_page_item = $("#J-slide-page .trig");
var btn_page = $("#J-btn-page");
var go_to_top = $("#go-to-top");
var fn_point_item = $("#J-fn-point .item");
var img_rotation = $("#J-img-rotation");
var user_time_key = $("#J-user-time .user-time-item-key i");
var screen_2 = $("#J-screen-2");
var screen_bg_before = $("#J-screen-bg-before");
var slideA;
var word = $(".img-drift .word");

//公共元素绑定
function elbind(){
	slide_page_item.bind({
		click:function(){
			config["curIdx"] = $(this).index();
			goPage(config["curIdx"]);
		}
	});
	btn_page.bind({
		click:function(){
			if(config["curIdx"] < config["screenLen"] - 1){
				config["curIdx"]++;
				goPage(config["curIdx"]);
			}
		}
	});
	fn_point_item.bind({
		click:function(){
			var i = $(this).index() + 1;
			config["curIdx"] = i;
			goPage(config["curIdx"]);
		}
	});
}

//设置高度
function setBgsize(){
	var win_height;
	win_height = $(window).height() >=590 ? $(window).height() : 590;
	screen_item.css({
		"height" : win_height
	});
	screen_bg.css({
		"height" : win_height
	});
	$(".screen-4 > .wrap").css({
		"height" : win_height - 160
	});
}

//屏幕状态
function screenStatus(){
	var a;
	if(btn_page.css("display") == "none"){
		btn_page.css({
			"display":"block"
		});
	}
	if(config["curIdx"] < 1){
		go_to_top.hide();
	}
	if(config["curIdx"] == config["screenLen"] - 1){
		go_to_top.addClass("last");
	}
	else{
		go_to_top.show();
		go_to_top.removeClass("last");
	}
	if(config["curIdx"] == 0){
		$(".screen-0 .info,.screen-0 .down-btn").addClass("fadeInUp");
		$(".screen-1 .left,.screen-1 .right").removeClass("sfadeInUp");
		$(".screen-1 .gongju,.screen-1 .tijian").removeClass("sfadeInUp");
		go_to_top.hide();
	}
	if(config["curIdx"] == 1){
		$(".screen-0 .info,.screen-0 .down-btn").removeClass("fadeInUp");
		$(".screen-1 .gongju,.screen-1 .tijian").addClass("sfadeInUp");
		$(".screen-1 .left,.screen-1 .right").addClass("sfadeInUp");
		$(".screen-2 .left,.screen-2 .right").removeClass("sfadeInUp");
		$(".screen-2 .safe1,.screen-2 .safe2,.screen-2 .safe3").removeClass("sfadeInLeft");
		a = 570 + 330;
		img_rotation.animate({
			"bottom" : $(window).height() >= a ? 0 : ($(window).height() - a < -300 ? -300 : $(window).height() - a )
		},500,"linear");
		user_time_key.animate({
			"width":"20%"
		},300,"linear");
		// if(btn_page.css("display") == "block"){
		// 	btn_page.fadeOut('fast');
		// }
	}
	if(config["curIdx"] == 2){
		$(".screen-0 .info,.screen-0 .down-btn").removeClass("fadeInUp");
		$(".screen-1 .gongju,.screen-1 .tijian").removeClass("sfadeInUp");
		$(".screen-1 .left,.screen-1 .right").removeClass("sfadeInUp");
		$(".screen-2 .left,.screen-2 .right").addClass("sfadeInUp");
		$(".screen-2 .safe1,.screen-2 .safe2,.screen-2 .safe3").addClass("sfadeInLeft");
		$(".screen-3 .left,.screen-3 .right").removeClass("sfadeInUp");
		$(".screen-3 .tools-box").removeClass("sfadeInUp");
		// if(btn_page.css("display") == "block"){
		// 	btn_page.fadeOut('fast');
		// }
	}
	if(config["curIdx"] == 3){
		$(".screen-0 .info,.screen-0 .down-btn").removeClass("fadeInUp");
		$(".screen-1 .gongju,.screen-1 .tijian").removeClass("sfadeInUp");
		$(".screen-1 .left,.screen-1 .right").removeClass("sfadeInUp");
		$(".screen-2 .left,.screen-2 .right").removeClass("sfadeInUp");
		$(".screen-2 .safe1,.screen-2 .safe2,.screen-2 .safe3").removeClass("sfadeInLeft");
		$(".screen-3 .left,.screen-3 .right").addClass("sfadeInUp");
		$(".screen-3 .tools-box").addClass("sfadeInUp");
		$(".screen-4 .info,.screen-4 .down-btn").removeClass("fadeInUp");
		if(slideA == undefined){
			slideA = new slide_wall({
				wrap:"#J-slide",
				pic:".slide-cont .slide-item",
				trig:".slide-trigger .trig",
				isFade:true,
				effectTime:700,
				trigType:"mouse",
				playTime:1500
			});
		}
		word.each(function(i){
			word.eq(i).addClass("word-"+(i+1)+"-animate");
		});
		if(btn_page.css("display") == "block"){
			btn_page.fadeOut('fast');
		}
	}
}

//跳转到第N页
function goPage(num){
	
	slide_page_item.removeClass("trig-current").eq(num).addClass("trig-current");
	screen_item_wrap.removeClass("show-area").eq(num).addClass("show-area");
	
	// screen_item_wrap.fadeOut(400).eq(num).fadeIn(400);
	if (num == 3) {
		footer_show.fadeIn(400)
	}else{
		footer_show.fadeOut(400)
	}
	// screen_item.fadeOut(400).eq(num).fadeIn(400);
	// $.scrollTo('.screen-'+num,700,function(){
	// 	slide_page_item.removeClass("trig-current").eq(num).addClass("trig-current");
		config["pageSlide"] = false;
		screenStatus();
	// });
}

(function(){
	$.scrollTo('.screen-'+config["curIdx"],700);
	setBgsize();
	elbind();
})();

$(document).mousewheel(function(event,num){
	event = event|| window.event;
    event.preventDefault();
	if(config["pageSlide"]) return;
	var idx;
	
	if(num < 0 && config["curIdx"] < config["screenLen"] - 1){
		config["pageSlide"] = true;
		config["curIdx"]++;
		idx = config["curIdx"];
		goPage(idx);
	}
	if(num > 0 && config["curIdx"] > 0){
		if(num==1 && config["curIdx"]==1){
			go_to_top.hide();
		}
		config["pageSlide"] = true;
		config["curIdx"]--;
		idx = config["curIdx"];
		goPage(idx);
	}
});


$(window).resize(function(){
	setBgsize();
	$.scrollTo('.screen-'+config["curIdx"],0);
	adapt();
});

//头部tab
var headerTabArray = $(".nav-lists a"),
	headTabLine = $(".tabLine"),
	tabIndex,headerTabArrayLength = headerTabArray.length,
	headerTabWidthArray = [],
	headerTabPositonArray = [],
	defaultNum = 0;
for(i=0;i<headerTabArrayLength;i++){
	headerTabWidthArray[i] =  headerTabArray.eq(i).outerWidth();
	headerTabPositonArray[i] = headerTabArray.eq(i).position().left + 55;	
}
headTabLine.animate({width:headerTabWidthArray[defaultNum],left:headerTabPositonArray[defaultNum]},300);
headerTabArray.mouseover(function(){
	$(".nav-lists i:animated").stop();
	tabIndex = $(this).index();
	headTabLine.animate({width:headerTabWidthArray[tabIndex],left:headerTabPositonArray[tabIndex]},300);
})
headerTabArray.mouseout(function(){
	$(".nav-lists i:animated").stop();
	tabIndex = $(this).index();
	headTabLine.animate({width:headerTabWidthArray[defaultNum],left:headerTabPositonArray[defaultNum]},300);
})

//slide
function slide_wall(option){
	var that = this;
	that.wrap = $(option.wrap);
	that.pic = that.wrap.find(option.pic);
	that.trig = that.wrap.find(option.trig);
	that.len = that.trig.length;
	that.index = 0;
	that.effectTime = option.effectTime || 300;
	that.playTime = option.playTime || 3000;
	that.autoPlay = true;
	that.isFade = option.isFade || false;
	that.trigType = option.trigType || "click";
	that.trig.each(function(i){
		if(that.trigType == "mouse"){
			$(this).bind({
				mouseenter:function(){
					that.switchTo(i);
				}
			});
		}
		else if(that.trigType == "click"){
			$(this).bind({
				click:function(){
					that.switchTo(i);
					screenStatus();
				}
			});
		}
	});
	if(that.autoPlay){
		that.trig.bind({
			mouseenter:function(){
				clearInterval(that.intervalTimer);
			},
			mouseleave:function(){
				that.autoPlayFn();
			}
		});
		that.autoPlayFn();
		
	}
}
slide_wall.prototype = {
	switchTo:function(index){
		var that = this;
		if(index < that.len){
			if(index < 0){
				that.index = that.len - 1;
			}
			else{
				that.index = index;
			}
		}
		else{
			that.index = 0;
		}
		if(!that.isFade){
			that.pic.css({"display":"none"});
			that.trig.removeClass("current");
			that.pic.eq(that.index).css({"display":"block"});
			that.trig.eq(that.index).addClass("current");
		}
		else{
		that.trig.removeClass("current");
		that.trig.eq(that.index).addClass("current");
		that.pic.removeClass("current");
		that.pic.stop(true,true).animate({opacity:"hide"},that.effectTime);
		that.pic.eq(that.index).addClass("current").stop(true,true).animate({opacity:"show"},that.effectTime);
		}
	},
	autoPlayFn:function(){
		var that = this;
		that.intervalTimer = setInterval(function(){
			that.index++;
			that.switchTo(that.index);
		},that.playTime);
	}
}
// function adapt(){
// 	var oWidth=$(window).width();
// 	var oHeight=$(window).height();
// 	if(oWidth<=1500||oHeight<=900){
// 		$(document.body).addClass("small");
// 	}else{
// 		$(document.body).removeClass("small");
// 	}
// }
// adapt();
function adapt(){
	var oWidth=$(window).width();
	var oHeight=$(window).height();
	if(oWidth<=1366||oHeight<=768){
		$(document.body).removeClass("large_screen");
	}else{
		$(document.body).addClass("large_screen");
	}
}
adapt();

