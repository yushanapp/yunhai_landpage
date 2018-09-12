var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var ismobile = !!u.match(/AppleWebKit.*Mobile.*/);

//下载微信微博处理
function downYd(downdz){
	if (ismobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if(isAndroid){
            if(ua.match(/MicroMessenger/i) == "micromessenger") {
	            //在微信中打开
            	window.location = "http://wx.iyuedan.com/wx/download/android";
	        }else if(ua.match(/WeiBo/i) == "weibo") {
	            //在新浪微博客户端打开
	            $('body').append('<div id="down_ydts"></div>');
	        }else{
	        	window.location = downdz.android;
	        }
        }else if(isiOS){
            //在IOS浏览器打开
        	if(ua.match(/MicroMessenger/i) == "micromessenger") {
	            //在微信中打开
            	window.location = "http://wx.iyuedan.com/wx/download/ios";
	        }else if(ua.match(/WeiBo/i) == "weibo") {
	            //在新浪微博客户端打开
	            $('body').append('<div id="down_ydts"></div>');
	        }else{
	        	window.location = downdz.ios;
	        }
        }
	}else{
		//pc默认不下载
//	    window.location = downdz.android;
	}
	$("#down_ydts").on('click',function(){
		$(this).remove();
	});
}
