this._yushan = this._yushan || {};
var _dlserver = "https://tech.myushan.com/rdc";
var _app_info_url = "https://tech.myushan.com/rapp";
(function (window, document) {
    var dl_info = function (config) {
        this.config = config;
        this.tag = true;
        this.firstRun = true;
        this.init()
    };
    var p = dl_info.prototype;
    p.init = function () {
        var _this = this;
        var tag_array = _this.config.trace_tag;
        if ((tag_array instanceof Array)) {
            if (tag_array[0] != 0) {
                _this.initGA(tag_array[0])
            } else {
                if (tag_array[1] != 0) {
                    console.log(tag_array[1]);
                    _this.initBaiDu(tag_array[1])
                }
            }
        }
        _this.addEvtListener();
        $(document).ready(function () {
            if (_this.config.autoDownload) {
                setTimeout(function () {
                    if (_this.tag) {
                        _this.tag = false;
                        _this.downloadAndWriteLog("passive", "auto")
                    }
                }, 1000 * _this.config.autoDownloadDelayTime)
            }
        });
        var appinfo_data = {
            baidu_sem: _getQueryString("baidu_sem"),
            c1: _getQueryString("c1"),
            c2: _getQueryString("c2"),
            brand: location.hostname,
            referer: document.referrer,
            agent: navigator.userAgent
        };
        $.ajax({
            type: "get",
            async: true,
            url: _app_info_url,
            data: appinfo_data,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "r_info",
            success: function (data) {
                console.log(data)
            },
            error: function (XMLHttpRequest, einfo, err) {
                console.log(err)
            }
        })
    };
    p.addEvtListener = function () {
        var _this = this;
        if (_this.config.dlbutton instanceof Array) {
            _this.config.dlbutton.forEach(function (item) {
                $(document).on("click ", item, function () {
                    if (_this.firstRun && _this.tag) {
                        _this.firstRun = false;
                        _this.tag = false;
                        _this.downloadAndWriteLog("active", this.className)
                    } else {
                        _this.download_r(this.className)
                    }
                })
            })
        }
        if (_this.config.longp instanceof Array) {
            _this.config.longp.forEach(function (item) {
                $(item).on({
                    touchstart: function () {
                        _timeOutEvent = setTimeout(function () {
                            if (_this.firstRun && _this.tag) {
                                _this.firstRun = false;
                                _this.tag = false;
                                _this.downloadAndWriteLog("long_press", this.className)
                            }
                        }, 300)
                    },
                    touchmove: function () {
                        clearTimeout(_timeOutEvent)
                    },
                    touchend: function () {
                        clearTimeout(_timeOutEvent);
                        return false
                    }
                })
            })
        }
    };
    p.downloadAndWriteLog = function (dl_type, dl_class) {
        var _this = this;
        var sdata = this.get_query();
        sdata["c5"] = this.get_mobile_type();
        sdata["dl_tag"] = dl_class;
        sdata["referrer"] = document.referrer;
        sdata["baidu_sem"] = _getQueryString("baidu_sem");
        $.ajax({
            type: "get",
            async: true,
            url: _dlserver,
            data: sdata,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "dlinfo",
            success: function (json) {
                console.log("succeeded")
            },
            error: function (XMLHttpRequest, einfo, err) {
                console.log(err)
            }
        });
        if (_this.config.url) {
            _this.download_r(dl_class)
        }
    };
    p.download_r = function (dl_class) {
        if (this.config.url != "") {
            window.location.href = this.config.url
        }
    };
    p.initGA = function (viewid) {
        (function (i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
        ga("create", viewid, "auto");
        ga("send", "pageview");
        var lp = (location.pathname.substring((location.pathname.length - 1))) % 5;
        ga("set", "contentGroup" + lp, "lp" + lp)
    };
    p.initBaiDu = function (baiduid) {
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?" + baiduid;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s)
        })()
    };
    p.gaSendEvent = function (dl_class) {
        if (typeof ga != "undefined" && ga instanceof Function) {
            ga("send", "event", "button", dl_class, "dl-button")
        }
    };
    p.get_mobile_type = function () {
        var u = navigator.userAgent;
        var type = u.substring(u.indexOf("(") + 1, u.indexOf(")"));
        if (u.indexOf("Android") > -1) {
            type = "Android:" + type
        }
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            type = "iOS:" + type
        }
        return type
    };
    p.get_query = function () {
        var url = location.search;
        var req = {};
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                req[strs[i].split("=")[0]] = (strs[i].split("=")[1])
            }
        }
        return req
    };
    _yushan.dl_info = dl_info
})(window, document);

function _getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return r[2]
    }
    return null
};
var locked = false;

window.addEventListener('click', function (ev) {
    locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
}, true);

function stopTouchendPropagation(ev) {
    ev.stopPropagation();
    window.removeEventListener('touchend', stopTouchendPropagation, true);
    locked = false;
}