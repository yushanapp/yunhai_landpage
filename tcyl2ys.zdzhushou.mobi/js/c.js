function  f(app,k1,k2,k3){
    return strDec(app,k1,k2,k3);
}
function  fe(app,k){
    return decrypt(app,k);
}
function shouwDiv(){
    $(".boxPic").css({
        display : "block"
    });
}

function shouwDiv1(){
    $(".boxPic1").css({
        display : "block"
    });
}
function shouwDiv2(){
    $(".boxPic2").css({
        display : "block"
    });
}


function request(name) {
        new RegExp("(^|&)"+name+"=([^&]*)").exec(window.location.search.substr(1));
        return RegExp.$2
}
function getiprecord( basePath ,appChannel){
        $.ajax({
            type:"post",
            url:basePath +"/iprecord.do",
            data: { "fromchannel": appChannel},
            dataType:"json",
            success:function(data){
            },
        });
}

function getChannelStatistics( basePath ,behavior,appChannel,linkUrl){
        $.ajax({
            type:"post",
            url:basePath +"/ChannelStatistics.do",
            data: { "behavior": behavior,"fromchannel":appChannel,"linkUrl":linkUrl},
            dataType:"json",
            success:function(data){
            },
        });
    }
	
function getChannelStatisticsData(basePath,action_type,fromchannel,linkUrl,plat) {
        $.ajax({
            type:"post",
            url:basePath +"/ChannelStatistics.do",
            data: { "basePath": basePath,"behavior": action_type,"fromchannel": fromchannel,"linkUrl": linkUrl,"plat": plat},
            dataType:"json",
            success:function(data){
            },
        });
   }