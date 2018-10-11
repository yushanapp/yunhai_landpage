$(function(){
	var t = new Date().getDay();
	function gettime(a){
	var time = new Date().getTime(); // 获得电脑当前秒数;
	a = a || 0;
	var t = new Date(time+a*86400000);
		return {
			year:t.getFullYear(),
			month:t.getMonth()+1,
			day: t.getDate()
		}
	}
	if(t == 3 || t == 5 || t==0){
		$(".banner-month").html(gettime().month);
		$(".banner-day").html(gettime().day);
		$(".t1").html(gettime().month);
		$(".t2").html(gettime().day);
	}
	if(t == 2 || t == 4 || t == 6){
		$(".banner-month").html(gettime(1).month);
		$(".banner-day").html(gettime(1).day);
		$(".t1").html(gettime(1).month);
		$(".t2").html(gettime(1).day);
	}
	if(t == 1){
		$(".banner-month").html(gettime(2).month);
		$(".banner-day").html(gettime(2).day);
		$(".t1").html(gettime(2).month);
		$(".t2").html(gettime(2).day);
	}
});

$(function(){
	clearInterval(timer);
	var i =1;
	var timer = setInterval(function(){
		i++;
		$(".win-left ul").animate({
			"margin-top": -50*i+"px"
		},500,function(){
			if(i == 8){
				i =1;
				$(".win-left ul").css("margin-top","-50px")
			}
		});
	},1000)
	
})