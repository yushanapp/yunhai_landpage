/**
 * popup 自定义弹框插件 兼容PC和WAP
 * creater : seven
 * 2017/04/01
 */

//初始化参数,全局变量
var _init = {
    "count": 100
};
/**
 * 创建 html 层
 * @private
 */
var _create = {
    _init: function () {
        return {
            "win_top": window.innerHeight / 2,
            "win_left": window.innerWidth / 2
        };
    },
    _body_append: function (html) {
        $("body").append(html);
    },
    _add_count: function () {
        _init.count += 1;
        return "popup_count_" + _init.count;
    },
    _popup_cover_close: function (t) {
        $(t).parent("div").remove();
    },
    _msg_html: function (text, options) {
        var settings = $.extend({
            'time': 1
        }, options);
        if (!text || $("#popup_msg").size() > 0) {
            return;
        }
        var html = "<div class='popup popup_msg popup_common_top' id='popup_msg'><span>" + text + "</span></div>";
        _create._body_append(html);
        var msg_height = $(".popup_msg").innerHeight() / 2;
        $(".popup_msg").animate({
            top: _init.win_top - msg_height + "px"
        }, 120);
        setTimeout(function () {
            popup.close("popup_msg");
        }, settings.time);
    },
    _loding_html: function () {
        var new_class = _create._add_count();
        var html = "<div class='popup popup_loading " + new_class + "' ><div class='popup_cover'></div><div class='popup_loading_icon popup_common_top'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>";
        _create._body_append(html);
        $(".popup_loading_icon").css({
            top: _init.win_top - 60 / 2 + "px"
        });
        return new_class;
    },
    _open_html: function (options) {
        var new_class = _create._add_count();
        var html = "<div class='popup " + new_class + "' ><div class='popup_cover' onclick = '_create._popup_cover_close(this)'></div><div class='popup_open_html popup_common_top p_open_type1' style='"+ options.style +"'>" + options.content.html() + "</div></div>";
        _create._body_append(html);
        var open_height = $(".p_open_type1").innerHeight() / 2;
        $(".p_open_type1").animate({
            top: _init.win_top - open_height + "px"
        }, 200);
        return new_class;
    },
    _open_html_type2: function (options) {
        var new_class = _create._add_count();
        var html = "<div class='popup " + new_class + "' ><div class='popup_cover' onclick = '_create._popup_cover_close(this)'></div><div class='popup_open_html p_open_type2' style='height:" + options.height + "px'>" + options.content.html() + "</div></div>";
        _create._body_append(html);
        $(".p_open_type2").animate({
            bottom: 0
        }, 200);
        return new_class;
    }
};
/**
 * popup 调用方法
 */
var popup = {
    closeAll: function () {
        $(".popup").remove();
    },
    close: function (c) {
        $("." + c).remove();
    },
    msg: function (text, options) {
        var settings = $.extend({
            "time": 1000
        }, options);
        _create._msg_html(text, settings);
    },
    loding: function () {
        return _create._loding_html();
    },
    open: function (options) {
        var settings = $.extend({
            "type": 1,
            "content": "",
            "height": "200",
            "style" : ""
        }, options);
        if (settings.content == '') {
            return;
        }
        switch (settings.type) {
            case 1 :
                return _create._open_html(settings);
                break;
            case 2 :
                return _create._open_html_type2(settings);
                break;
        }

    }
};
//初始化继承参数
_init = $.extend(_init, _create._init());
//窗体改变时,重新初始化窗体参数
window.onresize = function () {
    _init = $.extend(_init, _create._init());
    $(".popup_common_top").each(function () {
        this.style.top = _init.win_top - $(this).innerHeight() / 2 + "px";
    });
};