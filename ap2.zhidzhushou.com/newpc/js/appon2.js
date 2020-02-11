// JavaScript Document
! 
function(e, t) {
    "use strict";
    var i,
    a,
    o = {
        getPath: function() {
            var e = document.scripts,
            t = e[e.length - 1],
            i = t.src;
            return t.getAttribute("merge") ? void 0: i.substring(0, i.lastIndexOf("/") + 1)
        } (),
        config: {},
        end: {},
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"]
    };
    e.layer = {
        v: "1.9.3",
        ie6: !!e.ActiveXObject && !e.XMLHttpRequest,
        index: 0,
        path: o.getPath,
        config: function(e, t) {
            var a = 0;
            return e = e || {},
            layer.cache = o.config = i.extend(o.config, e),
            layer.path = o.config.path || layer.path,
            "string" == typeof e.extend && (e.extend = [e.extend]),
            layer.use(e.extend && e.extend.length > 0 ? 
            function n() {
                var i = e.extend;
                layer.use(i[i[a] ? a: a - 1], a < i.length ? 
                function() {
                    return++a,
                    n
                } () : t)
            } () : t),
            this
        },
        use: function(e, t, a) {
            var o = i("head")[0],
            e = e.replace(/\s/g, ""),
            n = /\.css$/.test(e),
            r = document.createElement(n ? "link": "script"),
            l = "layui_layer_" + e.replace(/\.|\//g, "");
            return layer.path ? (n && (r.rel = "stylesheet"), r[n ? "href": "src"] = /^http:\/\//.test(e) ? e: layer.path + e, r.id = l, i("#" + l)[0] || o.appendChild(r), 
            function s() { (n ? 1989 === parseInt(i("#" + l).css("width")) : layer[a || l]) ? 
                function() {
                    t && t();
                    try {
                        n || o.removeChild(r)
                    } catch(e) {}
                } () : setTimeout(s, 100)
            } (), this) : void 0
        },
        ready: function(e, t) {
            var a = "function" == typeof e;
            return a && (t = e),
            layer.config(i.extend(o.config, 
            function() {
                return a ? {}: {
                    path: e
                }
            } ()), t),
            this
        },
        alert: function(e, t, a) {
            var o = "function" == typeof t;
            return o && (a = t),
            layer.open(i.extend({
                content: e,
                yes: a
            },
            o ? {}: t))
        },
        confirm: function(e, t, a, n) {
            var r = "function" == typeof t;
            return r && (n = a, a = t),
            layer.open(i.extend({
                content: e,
                btn: o.btn,
                yes: a,
                cancel: n
            },
            r ? {}: t))
        },
        msg: function(e, a, n) {
            var l = "function" == typeof a,
            s = o.config.skin,
            f = (s ? s + " " + s + "-msg": "") || "layui-layer-msg",
            c = r.anim.length - 1;
            return l && (n = a),
            layer.open(i.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: f,
                title: !1,
                closeBtn: !1,
                btn: !1,
                end: n
            },
            l && !o.config.skin ? {
                skin: f + " layui-layer-hui",
                shift: c
            }: function() {
                return a = a || {},
                ( - 1 === a.icon || a.icon === t && !o.config.skin) && (a.skin = f + " " + (a.skin || "layui-layer-hui")),
                a
            } ()))
        },
        load: function(e, t) {
            return layer.open(i.extend({
                type: 3,
                icon: e || 0,
                shade: .01
            },
            t))
        },
        tips: function(e, t, a) {
            return layer.open(i.extend({
                type: 4,
                content: [e, t],
                closeBtn: !1,
                time: 3e3,
                maxWidth: 210
            },
            a))
        }
    };
    var n = function(e) {
        var t = this;
        t.index = ++layer.index,
        t.config = i.extend({},
        t.config, o.config, e),
        t.creat()
    };
    n.pt = n.prototype;
    var r = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    r.anim = ["layui-anim", "layui-anim-01", "layui-anim-02", "layui-anim-03", "layui-anim-04", "layui-anim-05", "layui-anim-06"],
    n.pt.config = {
        type: 0,
        shade: .3,
        fix: !0,
        move: r[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        shift: 0,
        icon: -1,
        scrollbar: !0,
        tips: 2
    },
    n.pt.vessel = function(e, t) {
        var i = this,
        a = i.index,
        n = i.config,
        l = n.zIndex + a,
        s = "object" == typeof n.title,
        f = n.maxmin && (1 === n.type || 2 === n.type),
       c = n.title ? '<div class="layui-layer-title" style="' + (s ? n.title[1] : "") + '">' + (s ? n.title[0] : n.title) + "</div>": "";
	   c = n.title ? '<div class="layui-layer-title" style="' + (s ? n.title[1] : "") + '">' + (s ? n.title[0] : n.title) + "</div>": "";
        return n.zIndex = l,
        t([n.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a + '" style="' + ("z-index:" + (l - 1) + "; background:" + (n.shade[1] || "") +  "; opacity:" + (n.shade[0] || n.shade) + "; filter:alpha(opacity=" + (100 * n.shade[0] || 100 * n.shade) + ");") + '"></div>': "", '<div class="' + r[0] + " " + (r.anim[n.shift] || "") + (" layui-layer-" + o.type[n.type]) + (0 != n.type && 2 != n.type || n.shade ? "": " layui-layer-border") + " " + (n.skin || "") + '" id="' + r[0] + a + '" type="' + o.type[n.type] + '" times="' + a + '" showtime="' + n.time + '" conType="' + (e ? "object": "string") + '" style="z-index: ' + l + "; width:" + n.area[0] + ";height:" + n.area[1] + (n.fix ? "": ";position:absolute;") + '">' + (e && 2 != n.type ? "": c) + '<div class="layui-layer-content' + (0 == n.type && -1 !== n.icon ? " layui-layer-padding": "") + (3 == n.type ? " layui-layer-loading" + n.icon: "") + '">' + (0 == n.type && -1 !== n.icon ? '<i class="layui-layer-ico layui-layer-ico' + n.icon + '"></i>': "") + (1 == n.type && e ? "": n.content || "") + '</div><span class="layui-layer-setwin">' + 
        function() {
            var e = f ? '<a class="layui-layer-min" href="javascript:(0);"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>': "";
            return n.closeBtn && (e += '<a class="layui-layer-ico ' + r[7] + " " + r[7] + (n.title ? n.closeBtn: 4 == n.type ? "1": "2") + '" href="javascript:;"></a>'),
            e
        } () + "</span>" + (n.btn ? 
        function() {
            var e = "";
            "string" == typeof n.btn && (n.btn = [n.btn]);
            for (var t = 0, i = n.btn.length; i > t; t++) e += '<a class="' + r[6] + t + '">' + n.btn[t] + "</a>";
            return '<div class="' + r[6] + '">' + e + "</div>"
        } () : "") + "</div>"], c),
        i
    },
    n.pt.creat = function() {
        var e = this,
        t = e.config,
        n = e.index,
        l = t.content,
        s = "object" == typeof l;
        switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.type) {
        case 0:
            t.btn = "btn" in t ? t.btn: o.btn[0],
            layer.closeAll("dialog");
            break;
        case 2:
            var l = t.content = s ? t.content: [t.content || "http://sentsin.com?from=layer", "auto"];
            t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + r[4] + n + '" name="' + r[4] + n + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
            break;
        case 3:
            t.title = !1,
            t.closeBtn = !1,
            -1 === t.icon && 0 === t.icon,
            layer.closeAll("loading");
            break;
        case 4:
            s || (t.content = [t.content, "body"]),
            t.follow = t.content[1],
            t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>',
            t.title = !1,
            t.shade = !1,
            t.fix = !1,
            t.tips = "object" == typeof t.tips ? t.tips: [t.tips, !0],
            t.tipsMore || layer.closeAll("tips")
        }
        e.vessel(s, 
        function(a, o) {
            i("body").append(a[0]),
            s ? 
            function() {
                2 == t.type || 4 == t.type ? 
                function() {
                    i("body").append(a[1])
                } () : function() {
                    l.parents("." + r[0])[0] || (l.show().addClass("layui-layer-wrap").wrap(a[1]), i("#" + r[0] + n).find("." + r[5]).before(o))
                } ()
            } () : i("body").append(a[1]),
            e.layero = i("#" + r[0] + n),
            t.scrollbar || r.html.css("overflow", "hidden").attr("layer-full", n)
        }).auto(n),
        2 == t.type && layer.ie6 && e.layero.find("iframe").attr("src", l[0]),
        4 == t.type ? e.tips() : e.offset(),
        t.fix && a.on("resize", 
        function() {
            e.offset(),
            (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(n),
            4 == t.type && e.tips()
        }),
        t.time <= 0 || setTimeout(function() {
            layer.close(e.index)
        },
        t.time),
        e.move().callback()
    },
    n.pt.auto = function(e) {
        function t(e) {
            e = l.find(e),
            e.height(s[1] - f - c - 2 * (0 | parseFloat(e.css("padding"))))
        }
        var o = this,
        n = o.config,
        l = i("#" + r[0] + e);
        "" === n.area[0] && n.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && n.btn && l.width(l.innerWidth()), l.outerWidth() > n.maxWidth && l.width(n.maxWidth));
        var s = [l.innerWidth(), l.innerHeight()],
        f = l.find(r[1]).outerHeight() || 0,
        c = l.find("." + r[6]).outerHeight() || 0;
        switch (n.type) {
        case 2:
            t("iframe");
            break;
        default:
            "" === n.area[1] ? n.fix && s[1] > a.height() && (s[1] = a.height(), t("." + r[5])) : t("." + r[5])
        }
        return o
    },
    n.pt.offset = function() {
        var e = this,
        t = e.config,
        i = e.layero,
        o = [i.outerWidth(), i.outerHeight()],
        n = "object" == typeof t.offset;
        e.offsetTop = (a.height() - o[1]) / 2,
        e.offsetLeft = (a.width() - o[0]) / 2,
        n ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && (e.offsetTop = t.offset, "rb" === t.offset && (e.offsetTop = a.height() - o[1], e.offsetLeft = a.width() - o[0])),
        t.fix || (e.offsetTop = /%$/.test(e.offsetTop) ? a.height() * parseFloat(e.offsetTop) / 100: parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? a.width() * parseFloat(e.offsetLeft) / 100: parseFloat(e.offsetLeft), e.offsetTop += a.scrollTop(), e.offsetLeft += a.scrollLeft()),
        i.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    },
    n.pt.tips = function() {
        var e = this,
        t = e.config,
        o = e.layero,
        n = [o.outerWidth(), o.outerHeight()],
        l = i(t.follow);
        l[0] || (l = i("body"));
        var s = {
            width: l.outerWidth(),
            height: l.outerHeight(),
            top: l.offset().top,
            left: l.offset().left
        },
        f = o.find(".layui-layer-TipsG"),
        c = t.tips[0];
        t.tips[1] || f.remove(),
        s.autoLeft = function() {
            s.left + n[0] - a.width() > 0 ? (s.tipLeft = s.left + s.width - n[0], f.css({
                right: 12,
                left: "auto"
            })) : s.tipLeft = s.left
        },
        s.where = [function() {
            s.autoLeft(),
            s.tipTop = s.top - n[1] - 10,
            f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left + s.width + 10,
            s.tipTop = s.top,
            f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        },
        function() {
            s.autoLeft(),
            s.tipTop = s.top + s.height + 10,
            f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left - n[0] - 10,
            s.tipTop = s.top,
            f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }],
        s.where[c - 1](),
        1 === c ? s.top - (a.scrollTop() + n[1] + 16) < 0 && s.where[2]() : 2 === c ? a.width() - (s.left + s.width + n[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - a.scrollTop() + s.height + n[1] + 16 - a.height() > 0 && s.where[0]() : 4 === c && n[0] + 16 - s.left > 0 && s.where[1](),
        o.find("." + r[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px": ""
        }),
        o.css({
            left: s.tipLeft,
            top: s.tipTop
        })
    },
    n.pt.move = function() {
        var e = this,
        t = e.config,
        o = {
            setY: 0,
            moveLayer: function() {
                var e = o.layero,
                t = parseInt(e.css("margin-left")),
                i = parseInt(o.move.css("left"));
                0 === t || (i -= t),
                "fixed" !== e.css("position") && (i -= e.parent().offset().left, o.setY = 0),
                e.css({
                    left: i,
                    top: parseInt(o.move.css("top")) - o.setY
                })
            }
        },
        n = e.layero.find(t.move);
        return t.move && n.attr("move", "ok"),
        n.css({
            cursor: t.move ? "move": "auto"
        }),
        i(t.move).on("mousedown", 
        function(e) {
            if (e.preventDefault(), "ok" === i(this).attr("move")) {
                o.ismove = !0,
                o.layero = i(this).parents("." + r[0]);
                var n = o.layero.offset().left,
                l = o.layero.offset().top,
                s = o.layero.outerWidth() - 6,
                f = o.layero.outerHeight() - 6;
                i("#layui-layer-moves")[0] || i("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + n + "px; top:" + l + "px; width:" + s + "px; height:" + f + 'px; z-index:2147483584"></div>'),
                o.move = i("#layui-layer-moves"),
                t.moveType && o.move.css({
                    visibility: "hidden"
                }),
                o.moveX = e.pageX - o.move.position().left,
                o.moveY = e.pageY - o.move.position().top,
                "fixed" !== o.layero.css("position") || (o.setY = a.scrollTop())
            }
        }),
        i(document).mousemove(function(e) {
            if (o.ismove) {
                var i = e.pageX - o.moveX,
                n = e.pageY - o.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    o.setY = a.scrollTop();
                    var r = a.width() - o.move.outerWidth(),
                    l = o.setY;
                    0 > i && (i = 0),
                    i > r && (i = r),
                    l > n && (n = l),
                    n > a.height() - o.move.outerHeight() + o.setY && (n = a.height() - o.move.outerHeight() + o.setY)
                }
                o.move.css({
                    left: i,
                    top: n
                }),
                t.moveType && o.moveLayer(),
                i = n = r = l = null
            }
        }).mouseup(function() {
            try {
                o.ismove && (o.moveLayer(), o.move.remove()),
                o.ismove = !1
            } catch(e) {
                o.ismove = !1
            }
            t.moveEnd && t.moveEnd()
        }),
        e
    },
    n.pt.callback = function() {
        function e() {
            var e = n.cancel && n.cancel(t.index);
            e === !1 || layer.close(t.index)
        }
        var t = this,
        a = t.layero,
        n = t.config;
        t.openLayer(),
        n.success && (2 == n.type ? a.find("iframe")[0].onload = function() {
            this.className = "",
            n.success(a, t.index)
        }: n.success(a, t.index)),
        layer.ie6 && t.IE6(a),
        a.find("." + r[6]).children("a").on("click", 
        function() {
            var o = i(this).index();
            0 === o ? n.yes ? n.yes(t.index, a) : layer.close(t.index) : 1 === o ? e() : n["btn" + (o + 1)] ? n["btn" + (o + 1)](t.index, a) : layer.close(t.index)
        }),
        a.find("." + r[7]).on("click", e),
        n.shadeClose && i("#layui-layer-shade" + t.index).on("click", 
        function() {
            layer.close(t.index)
        }),
        a.find(".layui-layer-min").on("click", 
        function() {
            layer.min(t.index, n),
            n.min && n.min(a)
        }),
        a.find(".layui-layer-max").on("click", 
        function() {
            i(this).hasClass("layui-layer-maxmin") ? (layer.restore(t.index), n.restore && n.restore(a)) : (layer.full(t.index, n), n.full && n.full(a))
        }),
        n.end && (o.end[t.index] = n.end)
    },
    o.reselect = function() {
        i.each(i("select"), 
        function(e, t) {
            var a = i(this);
            a.parents("." + r[0])[0] || 1 == a.attr("layer") && i("." + r[0]).length < 1 && a.removeAttr("layer").show(),
            a = null
        })
    },
    n.pt.IE6 = function(e) {
        function t() {
            e.css({
                top: n + (o.config.fix ? a.scrollTop() : 0)
            })
        }
        var o = this,
        n = e.offset().top;
        t(),
        a.scroll(t),
        i("select").each(function(e, t) {
            var a = i(this);
            a.parents("." + r[0])[0] || "none" === a.css("display") || a.attr({
                layer: "1"
            }).hide(),
            a = null
        })
    },
    n.pt.openLayer = function() {
        var e = this;
        layer.zIndex = e.config.zIndex,
        layer.setTop = function(e) {
            var t = function() {
                layer.zIndex++,
                e.css("z-index", layer.zIndex + 1)
            };
            return layer.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            layer.zIndex
        }
    },
    o.record = function(e) {
        var t = [e.outerWidth(), e.outerHeight(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"),
        e.attr({
            area: t
        })
    },
    o.rescollbar = function(e) {
        r.html.attr("layer-full") == e && (r.html[0].style.removeProperty ? r.html[0].style.removeProperty("overflow") : r.html[0].style.removeAttribute("overflow"), r.html.removeAttr("layer-full"))
    },
    layer.getChildFrame = function(e, t) {
        return t = t || i("." + r[4]).attr("times"),
        i("#" + r[0] + t).find("iframe").contents().find(e)
    },
    layer.getFrameIndex = function(e) {
        return i("#" + e).parents("." + r[4]).attr("times")
    },
    layer.iframeAuto = function(e) {
        if (e) {
            var t = layer.getChildFrame("body", e).outerHeight(),
            a = i("#" + r[0] + e),
            o = a.find(r[1]).outerHeight() || 0,
            n = a.find("." + r[6]).outerHeight() || 0;
            a.css({
                height: t + o + n
            }),
            a.find("iframe").css({
                height: t
            })
        }
    },
    layer.iframeSrc = function(e, t) {
        i("#" + r[0] + e).find("iframe").attr("src", t)
    },
    layer.style = function(e, t) {
        var a = i("#" + r[0] + e),
        n = a.attr("type"),
        l = a.find(r[1]).outerHeight() || 0,
        s = a.find("." + r[6]).outerHeight() || 0; (n === o.type[1] || n === o.type[2]) && (a.css(t), n === o.type[2] && a.find("iframe").css({
            height: parseFloat(t.height) - l - s
        }))
    },
    layer.min = function(e, t) {
        var a = i("#" + r[0] + e),
        n = a.find(r[1]).outerHeight() || 0;
        o.record(a),
        layer.style(e, {
            width: 180,
            height: n,
            overflow: "hidden"
        }),
        a.find(".layui-layer-min").hide(),
        "page" === a.attr("type") && a.find(r[4]).hide(),
        o.rescollbar(e)
    },
    layer.restore = function(e) {
        var t = i("#" + r[0] + e),
        a = t.attr("area").split(",");
        t.attr("type"),
        layer.style(e, {
            width: parseFloat(a[0]),
            height: parseFloat(a[1]),
            top: parseFloat(a[2]),
            left: parseFloat(a[3]),
            overflow: "visible"
        }),
        t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),
        t.find(".layui-layer-min").show(),
        "page" === t.attr("type") && t.find(r[4]).show(),
        o.rescollbar(e)
    },
    layer.full = function(e) {
        var t,
        n = i("#" + r[0] + e);
        o.record(n),
        r.html.attr("layer-full") || r.html.css("overflow", "hidden").attr("layer-full", e),
        clearTimeout(t),
        t = setTimeout(function() {
            var t = "fixed" === n.css("position");
            layer.style(e, {
                top: t ? 0: a.scrollTop(),
                left: t ? 0: a.scrollLeft(),
                width: a.width(),
                height: a.height()
            }),
            n.find(".layui-layer-min").hide()
        },
        100)
    },
    layer.title = function(e, t) {
        var a = i("#" + r[0] + (t || layer.index)).find(r[1]);
        a.html(e)
    },
    layer.close = function(e) {
        var t = i("#" + r[0] + e),
        a = t.attr("type");
        if (t[0]) {
            if (a === o.type[1] && "object" === t.attr("conType")) {
                t.children(":not(." + r[5] + ")").remove();
                for (var n = 0; 2 > n; n++) t.find(".layui-layer-wrap").unwrap().hide()
            } else {
                if (a === o.type[2]) try {
                    var l = i("#" + r[4] + e)[0];
                    l.contentWindow.document.write(""),
                    l.contentWindow.close(),
                    t.find("." + r[5])[0].removeChild(l)
                } catch(s) {}
                t[0].innerHTML = "",
                t.remove()
            }
            i("#layui-layer-moves, #layui-layer-shade" + e).remove(),
            layer.ie6 && o.reselect(),
            o.rescollbar(e),
            "function" == typeof o.end[e] && o.end[e](),
            delete o.end[e]
        }
    },
    layer.closeAll = function(e) {
        i.each(i("." + r[0]), 
        function() {
            var t = i(this),
            a = e ? t.attr("type") === e: 1;
            a && layer.close(t.attr("times")),
            a = null
        })
    },
    o.run = function() {
        i = jQuery,
        a = i(e),
        r.html = i("html"),
        layer.open = function(e) {
            var t = new n(e);
            return t.index
        }
    },
    "function" == typeof define ? define(function() {
        return o.run(),
        layer
    }) : function() {
        o.run()
    } ()
} (window);