      $(function () {
            if (typeof WeixinJSBridge !== "undefined") {
                $('.weixin').show();
            } else {
                down();
            }
            $('.anbtn-box').on('click', function () {
                window.location.href = "https://download.taoshuzaixian.com/android/mtyd_baidu.apk";
            })                         
        });   

        function down() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                //ƻ�����ص�ַ
                window.location.href ="itms-services://?action=download-manifest&url=https://download.taoshuzaixian.com/ios/mtyd_baidu.plist";
                $('.step').show();     
                $('.an-pc').hide();
            } else if (/(Android)/i.test(navigator.userAgent)) {
                //��׿���ص�ַ
                $('body').css('background', '#fff');
                window.location.href = "https://download.taoshuzaixian.com/android/mtyd_baidu.apk";
            } /*else {
                //pc���ص�ַ��Ĭ�Ͽ���Ϊ��׿�汾
                $('body').css('background', '#fff');
                window.location.href = "https://download.taoshuzaixian.com/android/mtyd_baidu.apk";
            }*/
        }