var downUrlIos = 'http://m.sdgflh.cn/ios/d';
var downUrl = 'https://baiduapp.cdn.bcebos.com/bd/b5260.apk';
var isture = true;

$(function(){
	$(".mtop a,.nav li a,.main a").click(function(){
		
		var url = geturl();
		$(".debox").fadeIn("fast",function(){
			$("#down").click(function(){
				window.location.href=url;
			});
			$("#close").click(function(){
				$(".debox").fadeOut();
			});
		});
		
	});

	
	$("#download").click(function(){
			var url= geturl();
			self.location.href=url;
	})
	$(".topnav a,.container a,.morem a").click(function(){
		$(".ewm").fadeIn();		
	});
	if($("#ucenter a")){
		$("#ucenter a").addClass("cur");
	}
})



function geturl(){
	var u = navigator.userAgent; 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios«¯
	if(isiOS)
	{
		url="http://m.sdgflh.cn/ios/d";
	}
	else
	{
		url="https://baiduapp.cdn.bcebos.com/bd/b5260.apk";
	}
	return url;		
}


function jump(url) {
	window.location.href = url
}

function clickEvent() {
	$(".look,.load_more,.avatar,#banner,.people").click(function() {
		$(".h_mask").show();
	});

	$(".hclose").click(function() {
		isture = false;
		$(".h_mask").hide();
	})

	$(".aboutus").click(function() {
		isture = false;
		jump("about.html");
	})

	$("#back").click(function() {
		jump("index.html");
	})

}
