var livePage = {
    downUrl_AN: '',
    downUrl_IOS:'https://itunes.apple.com/cn/app/id1441387142?mt=8',
    setTimer1: null,
    setTimer2: null,
    setTimer3: null,
    iosOffLine: false,
    qd: '',
    m: "",
    AN_m:"",
    ios: "",
    data: "",
    appKey: "jndr89",
    kfh:0,
    init: function() {
        FastClick.attach(document.body);
        var _this = this;
            _this.kfh = _this.getURLParameter('kfh') || 0;
            _this.getDownUrl();
            _this.setWindow();
            _this.resize();
            _this.getData();
            //_this.before_down();
            //_this.stopBack();
            $('.city').text(localAddress.city);
            $(document).on('click', '.js_down', function() {
                // _this.down();
                // $('.alertImgMask').show()
                $('.downBox').show()
            });
            $(document).on('click', '.footer_js_down', function() {
                _this.down();
            });
            $(document).on('click', '.close-icon', function() {
                $('.downBox').hide()
            });
            $('.goDown').click(function () {
                _this.down();
            })
            $('.downBox .mask').click(function () {
                $(".downBox").hide()
              })
            $(document).on('click', '#alertImg', function() {
                $('.alertImgMask').hide()
                // _this.down();
                $('.downBox').show()
            });
            $(document).on('click', '#yes', function() {
                $('.beforeClose').hide()
                if(_this.sysTemInfo() == 'ios'){
                    // _this.down();
                    $('.downBox').show()
                    var hiddenProperty = 'hidden' in document ? 'hidden' :
                    'webkitHidden' in document ? 'webkitHidden' :
                      'mozHidden' in document ? 'mozHidden' :
                        null;
                    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
                    var onVisibilityChange = function(){
                        if (!document[hiddenProperty]) {
                        console.log('页面非激活');
                        window.history.go(-1);
                        // window.location.reload();
                        }else{
                        console.log('页面激活')
                        window.history.go(-1);
                        }
                    }
                    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
                }else{
                    // _this.down();
                    $('.downBox').show()
                    var timer1 = setTimeout(function(){
                        window.history.go(-1);
                    },1000);
                    clearTimeout(timer1)
                }
            });
            $(document).on('click', '#no', function() {
                $('.beforeClose').hide()
                _this.pushHistory(); 
                window.addEventListener("popstate", function(e) {
                    $('.beforeClose').show()
                }, false); 
            });
            _this.pushHistory(); 
            window.addEventListener("popstate", function(e) {
                $('.beforeClose').show()
            }, false); 
            $('#js_closeBtn2').click(function() {
                $("#js_box2").hide();
                $(".now-download").html('“花友社交”安装中...');
                $(".top-bar").css("width", "0.1%");
                $('.alert-btn').show();
                clearTimeout(timer);
                loading = false;
            });
    },
    pushHistory: function() { 
        var state = { 
        title: "title", 
        url: "#"
        }; 
        window.history.pushState(state, "title", "#"); 
    },
    getDownUrl: function() {
        var _this = this;
        _this.qd = _this.getURLParameter('qd') || 'BDTG_1';
        _this.downUrl_AN = 'https://vapp.huayou.ink:19443/direct/' + _this.qd;
        if (_this.sysTemInfo() == 'ios') {
            _this.appKey = 'jndr89', _this.qd = 'ios' + _this.qd;
            $('footer a').addClass('ios');
            // $('title').html('花友社交-性感美女直播间');
          $('.appLogo').attr('src','images/logo2.png');
        }
        _this.m = new OpenInstall({
            appKey: this.appKey
        }, { "channel": _this.qd });
        _this.AN_m = new OpenInstall({
            appKey: 'jndr89'
        }, { "channel": _this.qd });
    },
    setWindow: function() {
        var winH = $(window).height(),
            winW = $(window).width();
        $('body').height(winH).width(winW);
    },
    resize: function() {
        var that = this;
        $(window).on('resize', function() {
            that.setWindow();
        });
    },
    lazyLoad: function() {
        $("img.lazy").lazyload({
            placeholder: 'images/place.jpg',
            effect: "fadeIn",
            threshold: 500
        });
    },
    getData: function() {
        var hList = '',
            vList = '';

        $.each(data.hot, function(i, o) {
            if (o.isPlay) {
                hList += '<li>' +
                    '    <a href="javascript:;">' +
                    '        <img class="lazy" data-original="' + o.cover + '">' +
                    '    </a>' +
                    '</li>';
            } else {
                hList += '<li>' +
                    '    <a href="javascript:;">' +
                    '        <img class="lazy" data-original="' + o.cover + '">' +
                    '        <span class="state">直播中</span>' +
                    '        <span class="city"></span>' +
                    '        <div class="des">' +
                    '            <p class="name">' + o.name + '</p>' +
                    '            <p><span>' + o.view + '</span>人在看</p>' +
                    '        </div>' +
                    '    </a>' +
                    '</li>';
            }
        })
        $('.hot ul').html(hList);
        $.each(data.video, function(i, o) {
            vList += '<li>' +
                '    <a href="javascript:;">' +
                '        <span class="pic">' +
                '            <img class="lazy" data-original="' + o.cover + '">' +
                '            <span class="state">空闲</span>' +
                '        <span class="city"></span>' +
                '            <p class="name">' + o.name + '</p>' +
                '        </span>' +
                '        <p class="des">视频看她</p>' +
                '    </a>' +
                '</li>';
        })
        $('.video ul').html(vList);
        this.lazyLoad();

        $(document).on('click', '.js_pop', function() {
            $('.cover,.layer').show();
        }).on('click', '.cover', function() {
            $('.cover,.layer').hide();
        })
    },
    before_down: function() {
        var _this = this;
        _this.setTimer1 = setTimeout(function() {
            // _this.down();
            $('.downBox').show()
        }, 15e3);
        _this.setTimer2 = setTimeout(function() {
            // _this.down();
            $('.downBox').show()
        }, 45e3);
        _this.setTimer3 = setTimeout(function() {
            // _this.down();
            $('.downBox').show()
        }, 60e3);
    },
    down: function() {
        var _this = this;
        if (_this.isWeChat()) {
            _this.sysTemInfo() == 'ios' ? _this.weChatRes('images/ios_wx.png') : _this.m.install();
        } else {
            if (_this.sysTemInfo() == 'ios') {
                _this.iosOffLine && _this.installByQYZS();
                _this.m.install();
            } else {
                // window.location.href = _this.downUrl_AN;
                _this.AN_m.install();
            }
        }
        if(typeof yr_track!=='undefined') yr_track.dolog(2);
    },
    weChatRes: function(n) {
        $('.wechat').length && $('.wechat').remove();
        var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
        $('body').append(html);
    },
    isWeChat: function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    sysTemInfo: function() {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            return 'android';
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            return 'ios';
        }
    },
    getQueryString: function(t) {
        var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            e = window.location.search.substr(1).match(n);
        return null != e ? decodeURI(e[2]) : null
    },
    getURLParameter: function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    },
    installByQYZS: function() {
        $('.cover,.layer').hide();
        $("#js_box2").show();
        $(".now-download").show();
        $(".change").hide();
        loading = true;
        $(".top-bar").css("width", "0.1%");
        timer = setTimeout(function() {
            $(".top-bar").animate({
                width: "100%"
            }, 60000, function() {
                $(".now-download").html('安装完成，请开始设置！');
                $('.alert-btn').hide();
                $(".change").show();
                loading = false;
            });
        }, 1000);
    },
    stopBack: function() {
        var that = this,_num=0;
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function() {
                _num++;
                if(Number(_num)<=that.kfh||that.kfh==0){
                    window.history.pushState('forward', null, document.URL);
                    window.history.forward(1);
                    setTimeout(function () {
                        that.down();
                    }, 5000);                    
                } else {
                    window.history.go(-1);
                }
            });
            window.history.pushState('forward', null, document.URL);
            window.history.forward(1);
        }
    }
}

$(function() {
    livePage.init();
})