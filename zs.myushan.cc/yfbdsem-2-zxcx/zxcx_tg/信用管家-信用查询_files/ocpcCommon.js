
    function getQueryString(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var l = decodeURI(window.location.search);
        var r = l.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    function btnOcPc(){
        var device = ''
        var appName = ''
        if (browserRedirect() === 'Phone') {
            if(navigator.userAgent.match(/android/i)){
                device = 'A'
                appName = 'zhengxindaikuan'
            }else if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
                device = 'I'
                appName = 'xinniuCredit'
            } else{
                device = 'A'
                appName = 'zhengxindaikuan'
            }
        }
        if(!getQueryString('bd_vid') || browserRedirect() === 'Pc'){
            return
        }
        $.ajax({
            url: host + 'api.51nbapi.com/xnadchannel/xnocpca/webclick.json',
            dataType:'json',
            data:{
                'clickId': location.href.split('bd_vid=')[1] ,
                'clickUrl': location.href,
                'platform': 'baidu_ocpc',
                'userAgent':navigator.userAgent,
                'uid':'22193145',
                'appName': appName,
                'phoneSystem':device,
            },
            type:'get',
            success:function(data){
                if(data.result.status == 'success'){

                }

            },error:function(){
                layer.closeAll();
                layer.open({
                    content: '网络异常，请稍后重试'
                    ,skin: 'msg'
                    ,time: 3
                });
            }
        });
    }
    function browserRedirect() {
        var type = '';
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
            type = 'Pc'
        } else {
            type = 'Phone'
        }
        return type
    }
