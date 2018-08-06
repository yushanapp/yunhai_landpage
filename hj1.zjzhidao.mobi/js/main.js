/**
 * Created by yonrun1042 on 2018/6/6.
 */
$(function(){
    //浏览器禁止返回
    //function stopBack() {
    //    var that = this;
    //    if (window.history && window.history.pushState) {
    //        $(window).on('popstate', function () {
    //            window.history.pushState('forward', null, document.URL);
    //            window.history.forward(1);
    //        });
    //    }
    //    window.history.pushState('forward', null, document.URL);
    //    window.history.forward(1);
    //}
    //stopBack();
    var us=navigator.userAgent.toLowerCase();
    var appName='花间';
    if(us.indexOf('iphone') >-1 || us.indexOf('ipad') > -1){
        appName='蜜友';
        $('.footer-logo').attr('src','images/logo3.png');
        $('.appName').html(appName)
    }
    //视频聊天点击
    $(".goDownBtn").on('click',function(){
        var _this=$(this);
        showTip(_this);
    });
    //同城约会聊天
    $(".cityWideDown").on('click',function(){
        var _this=$(this);
        cityWideTip(_this);
    });
    //附近动态视频
    $(".onVideoDown").on('click',function(){
        var _this=$(this);
        videoTip(_this);
    });
    //附近动态私聊
    $(".privateChatDown").on('click',function(){
        var _this=$(this);
        PrivateChatTip(_this);
    });
    //直接点击下载
    $(".directDown").on('click',function(){
        before_down();
    });

    //地址栏获取参数
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    //获取渠道号
    var qd = getURLParameter('qd') || 'BDSJ_1';
    var downUrl_AN = 'http://app.ercy.vip/direct/' + qd;
    var downUrl_IOS = 'https://itunes.apple.com/cn/app/id1398171383?mt=8';
    var ios = 'ios'+qd;
    var m;
    var data = {"channel": ios};
    new OpenInstall({
        appKey : "jndr89",
        onready : function() {
            m= this;
            // m.schemeWakeup();
        }
    }, data);

    var beautyLand={
        iosOffLine:true,
        timer:null,
    }
    //动态设置跳转地址
    $('#js_navLink a').each(function(i,o){
        var old=$(this).attr('href');
        $(this).attr('href',old+'?qd='+qd);
    });
    //下载选择
    function before_down(){
        if(us.indexOf('iphone') >-1 || us.indexOf('ipad') > -1){
            //IOS地址跳转
            if(beautyLand.iosOffLine){
               //location.href=downUrl_IOS;
                m.install();
                if(/MicroMessenger/i.test(us)){
                    //微信浏览器
                    return ;
                }else{
                    downPop();
                    return ;
                }
            }else{
            }
            return false;
        }
        if((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1){
            //安卓地址跳转
            location.href=downUrl_AN;
            return false;
        }
    }
    //显示视频聊天提示框
    function showTip(_this){
        //$("#tipRow").show();
       var imgSrc= _this.find('.nearby-img').attr('src');
        var tipStr='<div class="mask maskTip">' +
            '<div class="alert-box tipRow">' +
            '<div class="close-btn" id="tipRow-close"></div>' +
            '<div class="tipRowImg">' +
            '<img src='+ imgSrc +' alt="">' +
            '</div>' +
            '<h4 class="tipRow-title">下载'+appName+'app和我一对一视频吧！</h4>' +
            '<button class="tipRow-btn">去下载</button>' +
            '</div></div>';
        $("body").append(tipStr);
        $(".tipRow-btn").on("click",function(){
            $("body").children(".maskTip").remove();
            before_down();
        });
        $("#tipRow-close").on("click",function(){
            //$("#tipRow").hide();
            $("body").children(".maskTip").remove();
        })
    }
    //显示同城约会提示框
    function cityWideTip(_this){
        var imgSrc= _this.prevAll().find('.cityWideImg').attr('src');
        var tipStr='<div class="mask maskTip">' +
            '<div class="alert-box tipRow">' +
            '<div class="close-btn" id="tipRow-close"></div>' +
            '<div class="tipRowImg">' +
            '<img src='+ imgSrc +' alt="">' +
            '</div>' +
            '<h4 class="tipRow-title">下载'+appName+'app赴约</h4>' +
            '<button class="tipRow-btn">去下载</button>' +
            '</div></div>';
        $("body").append(tipStr);
        $(".tipRow-btn").on("click",function(){
            $("body").children(".maskTip").remove();
            before_down();
        });
        $("#tipRow-close").on("click",function(){
            //$("#tipRow").hide();
            $("body").children(".maskTip").remove();
        })
    }
    //显示附近动态视频提示框
    function videoTip(_this){
        var imgSrc= _this.prevAll().find('.cityWideImg').attr('src');
        var tipStr='<div class="mask maskTip">' +
            '<div class="alert-box tipRow">' +
            '<div class="close-btn" id="tipRow-close"></div>' +
            '<div class="tipRowImg">' +
            '<img src='+ imgSrc +' alt="">' +
            '</div>' +
            '<h4 class="tipRow-title">下载'+appName+'app和我视频吧！</h4>' +
            '<button class="tipRow-btn">去下载</button>' +
            '</div></div>';
        $("body").append(tipStr);
        $(".tipRow-btn").on("click",function(){
            $("body").children(".maskTip").remove();
            before_down();
        });
        $("#tipRow-close").on("click",function(){
            //$("#tipRow").hide();
            $("body").children(".maskTip").remove();
        })
    }
    //显示附近动态私聊提示框
    function PrivateChatTip(_this){
        var imgSrc= _this.prevAll().find('.cityWideImg').attr('src');
        var tipStr='<div class="mask maskTip">' +
            '<div class="alert-box tipRow">' +
            '<div class="close-btn" id="tipRow-close"></div>' +
            '<div class="tipRowImg">' +
            '<img src='+ imgSrc +' alt="">' +
            '</div>' +
            '<h4 class="tipRow-title">下载'+appName+'app和我私聊吧！</h4>' +
            '<button class="tipRow-btn">去下载</button>' +
            '</div></div>';
        $("body").append(tipStr);
        $(".tipRow-btn").on("click",function(){
            $("body").children(".maskTip").remove();
            before_down();
        });
        $("#tipRow-close").on("click",function(){
            //$("#tipRow").hide();
            $("body").children(".maskTip").remove();
        })
    }


    //ios下载弹窗
    //function downPop(){
//        $("#tipRow").hide();
//        $("#js_box2").show();
//        $(".now-download").show();
//        $(".change").hide();
//        loading = true;
//        clearTimeout(beautyLand.timer);
//        $(".top-bar").css("width", "0.1%");
//        beautyLand.timer = setTimeout(function(){
//            $(".top-bar").animate({
//                width: "100%"
//            },30000,function(){
//                $(".now-download").html('安装完成，请开始设置！');
//                $('.alert-btn').hide();
//                $(".change").show();
//                loading = false;
//            });
//        },1000);
//        $('#js_closeBtn2').click(function () {
//            $("#js_box2").hide();
//            $(".now-download").html('“花间”安装中...');
//            $(".top-bar").stop().css("width", "0.1%");
//            $('.alert-btn').show();
//            loading = false;
//            return false;
//        });
//    }
    //随机数
    //var randNumb=5;
    //$("#randNumb").text(randNumb);
    //randomNumb(randNumb);
    //function randomNumb(numb){
    //    if(numb<1){
    //        numb=0;
    //    }
    //    else{
    //        setTimeout(function(){
    //            numb--;
    //            randomNumb(numb);
    //            $("#randNumb").text(numb);
    //        },1000);
    //
    //    }
    //}
    //定位地址
    $(".locationIP").text(lc);

});