$(function(){
    
	$(".special").click(function () {
        $(".tc-form").fadeIn();
        $(".tc-bg").fadeIn();
    });
    $(".spe").click(function () {
        $(".tc-form").fadeIn();
        $(".tc-bg").fadeIn();
    })
    $(".close").click(function () {
        $(".tc-form").fadeOut();
		$(".tc-bg").fadeOut();
    });
    
//平台、设备和操作系统
        var system = {
            win: false,
            mac: false,
            xll: false,
            ipad:false
        };
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        // system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
        //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
        if (system.win || system.mac || system.xll) {
        	$(".tc-form").css("left","35%");
        } else {

            $(".tc-form").css("left","11%");
        }


    var time=new Date();
    var week=time.getDay();
    var times;
    if(week==0){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==1){
        times=new Date().getTime()+172800000;//2天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==2){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==3){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==4){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }else if(week==5){
        $(".month").html((time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1));
        $(".day").html((time.getDate() < 10 ? '0'+time.getDate() : time.getDate()));
    }else if(week==6){
        times=new Date().getTime()+86400000;//1天
        date=new Date(times);
        $(".month").html((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1));
        $(".day").html((date.getDate() <10 ? '0'+date.getDate() : date.getDate()));
    }
});