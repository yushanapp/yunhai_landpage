!function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t;
    }, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, "a", n), n;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 8);
}([ function(t, e, n) {
    "use strict";
    function i(t, e) {
        var n = t.documentElement, r = "orientationchange" in window ? "orientationchange" : "resize", o = function() {
            var t = n.clientWidth;
            t && (n.style.fontSize = t / 640 * 100 + "px");
        };
        if (t.addEventListener) return e.addEventListener(r, o, !1), t.addEventListener("DOMContentLoaded", o, !1), 
        i;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i(document, window);
}, function(t, e, n) {
    "use strict";
    function i() {
        var t = !1, e = !1, n = !1, i = {
            versions: function() {
                var t = navigator.userAgent;
                return {
                    trident: t.indexOf("Trident") > -1,
                    presto: t.indexOf("Presto") > -1,
                    webKit: t.indexOf("AppleWebKit") > -1,
                    gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"),
                    mobile: !!t.match(/AppleWebKit.*Mobile.*/),
                    webApp: -1 == t.indexOf("Safari"),
                    android: t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                    uc: t.indexOf("Linux") > -1,
                    ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    iPhone: t.indexOf("iPhone") > -1,
                    iPad: t.indexOf("iPad") > -1
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
        return i.versions.ios || i.versions.iPhone || i.versions.iPad ? t = !0 : i.versions.android ? e = !0 : n = !0, 
        {
            iosFlag: t,
            androidFlag: e,
            pcFlag: n
        };
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
}, function(t, e, n) {
    "use strict";
    function i(t) {
        var e = {
            data: {},
            Initial: function() {
                var t, e, n = location.search;
                n = n.substr(1, n.length), t = n.split("&");
                for (var i = 0; i < t.length; i++) e = t[i].split("="), this.data[e[0]] = e[1];
            },
            GetValue: function(t) {
                return e.data[t];
            }
        };
        return e.Initial(), e.data;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
}, function(t, e, n) {
    "use strict";
    function i() {
        var t = document.createElement("script");
        t.src = "//ip.ws.126.net/ipquery";
        var e = {
            ready: !1,
            Isp: "北京"
        };
        return t.onload = function() {
            e.ready = !0, e.Isp = localAddress;
        }, document.querySelector("body").appendChild(t), e;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
}, function(t, e, n) {
    "use strict";
    function i() {
        function t(t) {
            if (navigator && navigator.sendBeacon) navigator.sendBeacon(t); else {
                var e = document.createElement("img");
                e.onload = e.onerror = function() {
                    e = e.onload = e.onerror = null;
                }, e.src = t;
            }
        }
        function e(e, n) {
            var r = "", o = "";
            e && e.tjtype && e.tjuid && e.tjtag || (e = e || {}, e.tjtype = e.tjtype || "undefined", 
            e.tjuid = e.tjuid || "undefined", e.tjtag = e.tjtag || "undefined");
            var a = parseInt(1e4 * Math.random());
            for (var s in e) r += "&" + s + "=" + encodeURIComponent(e[s]);
            r += "&rdm=" + a, o = n ? "//stj.youyuan.com/tj/tj.gif?" + r.substr(1) + "&" + i : "//x.youyuan.com/tj/tj.gif?" + r.substr(1) + "&" + i, 
            t(o);
        }
        var n = {};
        document && (n.domain = document.domain || "", n.url = document.URL || "", n.title = document.title || "", 
        n.referrer = document.referrer || ""), window && window.screen && (n.sh = window.screen.height || 0, 
        n.sw = window.screen.width || 0, n.cd = window.screen.colorDepth || 0), navigator && (n.lang = navigator.language || ""), 
        n.url && 0 === n.url.indexOf("file:///") && (n.url = "localhost");
        var i = "";
        for (var r in n) "" !== i && (i += "&"), i += r + "=" + encodeURIComponent(n[r]);
        return e;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i;
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, r = function() {
        function t(t) {
            return null == t ? String(t) : W[G.call(t)] || "object";
        }
        function e(e) {
            return "function" == t(e);
        }
        function n(t) {
            return null != t && t == t.window;
        }
        function r(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE;
        }
        function o(e) {
            return "object" == t(e);
        }
        function a(t) {
            return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype;
        }
        function s(t) {
            return "number" == typeof t.length;
        }
        function c(t) {
            return k.call(t, function(t) {
                return null != t;
            });
        }
        function u(t) {
            return t.length > 0 ? S.fn.concat.apply([], t) : t;
        }
        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function f(t) {
            return t in A ? A[t] : A[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
        }
        function p(t, e) {
            return "number" != typeof e || I[l(t)] ? e : e + "px";
        }
        function d(t) {
            var e, n;
            return _[t] || (e = q.createElement(t), q.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), 
            e.parentNode.removeChild(e), "none" == n && (n = "block"), _[t] = n), _[t];
        }
        function h(t) {
            return "children" in t ? N.call(t.children) : S.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0;
            });
        }
        function m(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || "";
        }
        function y(t, e, n) {
            for (E in e) n && (a(e[E]) || tt(e[E])) ? (a(e[E]) && !a(t[E]) && (t[E] = {}), tt(e[E]) && !tt(t[E]) && (t[E] = []), 
            y(t[E], e[E], n)) : e[E] !== T && (t[E] = e[E]);
        }
        function g(t, e) {
            return null == e ? S(t) : S(t).filter(e);
        }
        function v(t, n, i, r) {
            return e(n) ? n.call(t, i, r) : n;
        }
        function w(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
        }
        function b(t, e) {
            var n = t.className || "", i = n && n.baseVal !== T;
            return e === T ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e);
        }
        function x(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t;
            } catch (e) {
                return t;
            }
        }
        function j(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) j(t.childNodes[n], e);
        }
        var T, E, S, P, O, C, L = [], M = L.concat, k = L.filter, N = L.slice, q = window.document, _ = {}, A = {}, I = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, D = /^\s*<(\w+|!)[^>]*>/, H = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, $ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, R = /^(?:body|html)$/i, z = /([A-Z])/g, F = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], Z = [ "after", "prepend", "before", "append" ], U = q.createElement("table"), B = q.createElement("tr"), X = {
            tr: q.createElement("tbody"),
            tbody: U,
            thead: U,
            tfoot: U,
            td: B,
            th: B,
            "*": q.createElement("div")
        }, V = /complete|loaded|interactive/, Y = /^[\w-]*$/, W = {}, G = W.toString, J = {}, K = q.createElement("div"), Q = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, tt = Array.isArray || function(t) {
            return t instanceof Array;
        };
        return J.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode, o = !r;
            return o && (r = K).appendChild(t), i = ~J.qsa(r, e).indexOf(t), o && K.removeChild(t), 
            i;
        }, O = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }, C = function(t) {
            return k.call(t, function(e, n) {
                return t.indexOf(e) == n;
            });
        }, J.fragment = function(t, e, n) {
            var i, r, o;
            return H.test(t) && (i = S(q.createElement(RegExp.$1))), i || (t.replace && (t = t.replace($, "<$1></$2>")), 
            e === T && (e = D.test(t) && RegExp.$1), e in X || (e = "*"), o = X[e], o.innerHTML = "" + t, 
            i = S.each(N.call(o.childNodes), function() {
                o.removeChild(this);
            })), a(n) && (r = S(i), S.each(n, function(t, e) {
                F.indexOf(t) > -1 ? r[t](e) : r.attr(t, e);
            })), i;
        }, J.Z = function(t, e) {
            return new m(t, e);
        }, J.isZ = function(t) {
            return t instanceof J.Z;
        }, J.init = function(t, n) {
            var i;
            if (!t) return J.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && D.test(t)) i = J.fragment(t, RegExp.$1, n), 
            t = null; else {
                if (n !== T) return S(n).find(t);
                i = J.qsa(q, t);
            } else {
                if (e(t)) return S(q).ready(t);
                if (J.isZ(t)) return t;
                if (tt(t)) i = c(t); else if (o(t)) i = [ t ], t = null; else if (D.test(t)) i = J.fragment(t.trim(), RegExp.$1, n), 
                t = null; else {
                    if (n !== T) return S(n).find(t);
                    i = J.qsa(q, t);
                }
            }
            return J.Z(i, t);
        }, S = function(t, e) {
            return J.init(t, e);
        }, S.extend = function(t) {
            var e, n = N.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                y(t, n, e);
            }), t;
        }, J.qsa = function(t, e) {
            var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = Y.test(o);
            return t.getElementById && a && i ? (n = t.getElementById(o)) ? [ n ] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : N.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
        }, S.contains = q.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e);
        } : function(t, e) {
            for (;e && (e = e.parentNode); ) if (e === t) return !0;
            return !1;
        }, S.type = t, S.isFunction = e, S.isWindow = n, S.isArray = tt, S.isPlainObject = a, 
        S.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        }, S.inArray = function(t, e, n) {
            return L.indexOf.call(e, t, n);
        }, S.camelCase = O, S.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function() {}, S.map = function(t, e) {
            var n, i, r, o = [];
            if (s(t)) for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && o.push(n); else for (r in t) null != (n = e(t[r], r)) && o.push(n);
            return u(o);
        }, S.each = function(t, e) {
            var n, i;
            if (s(t)) {
                for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
            return t;
        }, S.grep = function(t, e) {
            return k.call(t, e);
        }, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            W["[object " + e + "]"] = e.toLowerCase();
        }), S.fn = {
            constructor: J.Z,
            length: 0,
            forEach: L.forEach,
            reduce: L.reduce,
            push: L.push,
            sort: L.sort,
            splice: L.splice,
            indexOf: L.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = J.isZ(e) ? e.toArray() : e;
                return M.apply(J.isZ(this) ? this.toArray() : this, n);
            },
            map: function(t) {
                return S(S.map(this, function(e, n) {
                    return t.call(e, n, e);
                }));
            },
            slice: function() {
                return S(N.apply(this, arguments));
            },
            ready: function(t) {
                return V.test(q.readyState) && q.body ? t(S) : q.addEventListener("DOMContentLoaded", function() {
                    t(S);
                }, !1), this;
            },
            get: function(t) {
                return t === T ? N.call(this) : this[t >= 0 ? t : t + this.length];
            },
            toArray: function() {
                return this.get();
            },
            size: function() {
                return this.length;
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this);
                });
            },
            each: function(t) {
                return L.every.call(this, function(e, n) {
                    return !1 !== t.call(e, n, e);
                }), this;
            },
            filter: function(t) {
                return e(t) ? this.not(this.not(t)) : S(k.call(this, function(e) {
                    return J.matches(e, t);
                }));
            },
            add: function(t, e) {
                return S(C(this.concat(S(t, e))));
            },
            is: function(t) {
                return this.length > 0 && J.matches(this[0], t);
            },
            not: function(t) {
                var n = [];
                if (e(t) && t.call !== T) this.each(function(e) {
                    t.call(this, e) || n.push(this);
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? N.call(t) : S(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && n.push(t);
                    });
                }
                return S(n);
            },
            has: function(t) {
                return this.filter(function() {
                    return o(t) ? S.contains(this, t) : S(this).find(t).size();
                });
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function() {
                var t = this[0];
                return t && !o(t) ? t : S(t);
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : S(t);
            },
            find: function(t) {
                var e = this;
                return t ? "object" == (void 0 === t ? "undefined" : i(t)) ? S(t).filter(function() {
                    var t = this;
                    return L.some.call(e, function(e) {
                        return S.contains(e, t);
                    });
                }) : 1 == this.length ? S(J.qsa(this[0], t)) : this.map(function() {
                    return J.qsa(this, t);
                }) : S();
            },
            closest: function(t, e) {
                var n = this[0], o = !1;
                for ("object" == (void 0 === t ? "undefined" : i(t)) && (o = S(t)); n && !(o ? o.indexOf(n) >= 0 : J.matches(n, t)); ) n = n !== e && !r(n) && n.parentNode;
                return S(n);
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0; ) n = S.map(n, function(t) {
                    return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                });
                return g(e, t);
            },
            parent: function(t) {
                return g(C(this.pluck("parentNode")), t);
            },
            children: function(t) {
                return g(this.map(function() {
                    return h(this);
                }), t);
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || N.call(this.childNodes);
                });
            },
            siblings: function(t) {
                return g(this.map(function(t, e) {
                    return k.call(h(e.parentNode), function(t) {
                        return t !== e;
                    });
                }), t);
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = "";
                });
            },
            pluck: function(t) {
                return S.map(this, function(e) {
                    return e[t];
                });
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName));
                });
            },
            replaceWith: function(t) {
                return this.before(t).remove();
            },
            wrap: function(t) {
                var n = e(t);
                if (this[0] && !n) var i = S(t).get(0), r = i.parentNode || this.length > 1;
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i);
                });
            },
            wrapAll: function(t) {
                if (this[0]) {
                    S(this[0]).before(t = S(t));
                    for (var e; (e = t.children()).length; ) t = e.first();
                    S(t).append(this);
                }
                return this;
            },
            wrapInner: function(t) {
                var n = e(t);
                return this.each(function(e) {
                    var i = S(this), r = i.contents(), o = n ? t.call(this, e) : t;
                    r.length ? r.wrapAll(o) : i.append(o);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    S(this).replaceWith(S(this).children());
                }), this;
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0);
                });
            },
            hide: function() {
                return this.css("display", "none");
            },
            toggle: function(t) {
                return this.each(function() {
                    var e = S(this);
                    (t === T ? "none" == e.css("display") : t) ? e.show() : e.hide();
                });
            },
            prev: function(t) {
                return S(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function(t) {
                return S(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    S(this).empty().append(v(this, t, e, n));
                }) : 0 in this ? this[0].innerHTML : null;
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = v(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n;
                }) : 0 in this ? this[0].textContent : null;
            },
            attr: function(t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType) if (o(t)) for (E in t) w(this, E, t[E]); else w(this, t, v(this, e, n, this.getAttribute(t)));
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : T;
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && t.split(" ").forEach(function(t) {
                        w(this, t);
                    }, this);
                });
            },
            prop: function(t, e) {
                return t = Q[t] || t, 1 in arguments ? this.each(function(n) {
                    this[t] = v(this, e, n, this[t]);
                }) : this[0] && this[0][t];
            },
            data: function(t, e) {
                var n = "data-" + t.replace(z, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? x(i) : T;
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    this.value = v(this, t, e, this.value);
                }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
                    return this.selected;
                }).pluck("value") : this[0].value);
            },
            offset: function(t) {
                if (t) return this.each(function(e) {
                    var n = S(this), i = v(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o);
                });
                if (!this.length) return null;
                if (!S.contains(q.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var e = this[0].getBoundingClientRect();
                return {
                    left: e.left + window.pageXOffset,
                    top: e.top + window.pageYOffset,
                    width: Math.round(e.width),
                    height: Math.round(e.height)
                };
            },
            css: function(e, n) {
                if (arguments.length < 2) {
                    var i, r = this[0];
                    if (!r) return;
                    if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[O(e)] || i.getPropertyValue(e);
                    if (tt(e)) {
                        var o = {};
                        return S.each(e, function(t, e) {
                            o[e] = r.style[O(e)] || i.getPropertyValue(e);
                        }), o;
                    }
                }
                var a = "";
                if ("string" == t(e)) n || 0 === n ? a = l(e) + ":" + p(e, n) : this.each(function() {
                    this.style.removeProperty(l(e));
                }); else for (E in e) e[E] || 0 === e[E] ? a += l(E) + ":" + p(E, e[E]) + ";" : this.each(function() {
                    this.style.removeProperty(l(E));
                });
                return this.each(function() {
                    this.style.cssText += ";" + a;
                });
            },
            index: function(t) {
                return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function(t) {
                return !!t && L.some.call(this, function(t) {
                    return this.test(b(t));
                }, f(t));
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        P = [];
                        var n = b(this);
                        v(this, t, e, n).split(/\s+/g).forEach(function(t) {
                            S(this).hasClass(t) || P.push(t);
                        }, this), P.length && b(this, n + (n ? " " : "") + P.join(" "));
                    }
                }) : this;
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === T) return b(this, "");
                        P = b(this), v(this, t, e, P).split(/\s+/g).forEach(function(t) {
                            P = P.replace(f(t), " ");
                        }), b(this, P.trim());
                    }
                });
            },
            toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var i = S(this);
                    v(this, t, n, b(this)).split(/\s+/g).forEach(function(t) {
                        (e === T ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t);
                    });
                }) : this;
            },
            scrollTop: function(t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                        this.scrollTop = t;
                    } : function() {
                        this.scrollTo(this.scrollX, t);
                    });
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                        this.scrollLeft = t;
                    } : function() {
                        this.scrollTo(t, this.scrollY);
                    });
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(), i = R.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                    return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, 
                    i.top += parseFloat(S(e[0]).css("border-top-width")) || 0, i.left += parseFloat(S(e[0]).css("border-left-width")) || 0, 
                    {
                        top: n.top - i.top,
                        left: n.left - i.left
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || q.body; t && !R.test(t.nodeName) && "static" == S(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            }
        }, S.fn.detach = S.fn.remove, [ "width", "height" ].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase();
            });
            S.fn[t] = function(i) {
                var o, a = this[0];
                return i === T ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                    a = S(this), a.css(t, v(this, i, e, a[t]()));
                });
            };
        }), Z.forEach(function(e, n) {
            var i = n % 2;
            S.fn[e] = function() {
                var e, r, o = S.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : J.fragment(n);
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(t, e) {
                    r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                    var s = S.contains(q.documentElement, r);
                    o.forEach(function(t) {
                        if (a) t = t.cloneNode(!0); else if (!r) return S(t).remove();
                        r.insertBefore(t, e), s && j(t, function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                        });
                    });
                });
            }, S.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
                return S(t)[e](this), this;
            };
        }), J.Z.prototype = m.prototype = S.fn, J.uniq = C, J.deserializeValue = x, S.zepto = J, 
        S;
    }();
    window.Zepto = r, void 0 === window.$ && (window.$ = r), function(t) {
        function e(e, n, i) {
            var r = t.Event(n);
            return t(e).trigger(r, i), !r.isDefaultPrevented();
        }
        function n(t, n, i, r) {
            return t.global ? e(n || v, i, r) : void 0;
        }
        function i(e) {
            e.global && 0 == t.active++ && n(e, null, "ajaxStart");
        }
        function r(e) {
            e.global && !--t.active && n(e, null, "ajaxStop");
        }
        function o(t, e) {
            var i = e.context;
            return !1 !== e.beforeSend.call(i, t, e) && !1 !== n(e, i, "ajaxBeforeSend", [ t, e ]) && void n(e, i, "ajaxSend", [ t, e ]);
        }
        function a(t, e, i, r) {
            var o = i.context, a = "success";
            i.success.call(o, t, a, e), r && r.resolveWith(o, [ t, a, e ]), n(i, o, "ajaxSuccess", [ e, i, t ]), 
            c(a, e, i);
        }
        function s(t, e, i, r, o) {
            var a = r.context;
            r.error.call(a, i, e, t), o && o.rejectWith(a, [ i, e, t ]), n(r, a, "ajaxError", [ i, r, t || e ]), 
            c(e, i, r);
        }
        function c(t, e, i) {
            var o = i.context;
            i.complete.call(o, e, t), n(i, o, "ajaxComplete", [ e, i ]), r(i);
        }
        function u() {}
        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == j ? "json" : b.test(t) ? "script" : x.test(t) && "xml") || "text";
        }
        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function p(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), 
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), 
            e.data = void 0);
        }
        function d(e, n, i, r) {
            return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, 
            i = void 0), {
                url: e,
                data: n,
                success: i,
                dataType: r
            };
        }
        function h(e, n, i, r) {
            var o, a = t.isArray(n), s = t.isPlainObject(n);
            t.each(n, function(n, c) {
                o = t.type(c), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), 
                !r && a ? e.add(c.name, c.value) : "array" == o || !i && "object" == o ? h(e, c, i, n) : e.add(n, c);
            });
        }
        var m, y, g = 0, v = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, b = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, j = "application/json", T = "text/html", E = /^\s*$/, S = v.createElement("a");
        S.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, c = e.jsonpCallback, u = (t.isFunction(c) ? c() : c) || "jsonp" + ++g, l = v.createElement("script"), f = window[u], p = function(e) {
                t(l).triggerHandler("error", e || "abort");
            }, d = {
                abort: p
            };
            return n && n.promise(d), t(l).on("load error", function(o, c) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], d, e, n) : s(null, c || "error", d, e, n), 
                window[u] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0;
            }), !1 === o(d, e) ? (p("abort"), d) : (window[u] = function() {
                i = arguments;
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), v.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                p("timeout");
            }, e.timeout)), d);
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: u,
            success: u,
            error: u,
            complete: u,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest();
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: j,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var n, r, c = t.extend({}, e || {}), d = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === c[m] && (c[m] = t.ajaxSettings[m]);
            i(c), c.crossDomain || (n = v.createElement("a"), n.href = c.url, n.href = n.href, 
            c.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host), c.url || (c.url = window.location.toString()), 
            (r = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, r)), p(c);
            var h = c.dataType, g = /\?.+=\?/.test(c.url);
            if (g && (h = "jsonp"), !1 !== c.cache && (e && !0 === e.cache || "script" != h && "jsonp" != h) || (c.url = f(c.url, "_=" + Date.now())), 
            "jsonp" == h) return g || (c.url = f(c.url, c.jsonp ? c.jsonp + "=?" : !1 === c.jsonp ? "" : "callback=?")), 
            t.ajaxJSONP(c, d);
            var w, b = c.accepts[h], x = {}, j = function(t, e) {
                x[t.toLowerCase()] = [ t, e ];
            }, T = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol, P = c.xhr(), O = P.setRequestHeader;
            if (d && d.promise(P), c.crossDomain || j("X-Requested-With", "XMLHttpRequest"), 
            j("Accept", b || "*/*"), (b = c.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), 
            P.overrideMimeType && P.overrideMimeType(b)), (c.contentType || !1 !== c.contentType && c.data && "GET" != c.type.toUpperCase()) && j("Content-Type", c.contentType || "application/x-www-form-urlencoded"), 
            c.headers) for (y in c.headers) j(y, c.headers[y]);
            if (P.setRequestHeader = j, P.onreadystatechange = function() {
                if (4 == P.readyState) {
                    P.onreadystatechange = u, clearTimeout(w);
                    var e, n = !1;
                    if (P.status >= 200 && P.status < 300 || 304 == P.status || 0 == P.status && "file:" == T) {
                        h = h || l(c.mimeType || P.getResponseHeader("content-type")), e = P.responseText;
                        try {
                            "script" == h ? (0, eval)(e) : "xml" == h ? e = P.responseXML : "json" == h && (e = E.test(e) ? null : t.parseJSON(e));
                        } catch (t) {
                            n = t;
                        }
                        n ? s(n, "parsererror", P, c, d) : a(e, P, c, d);
                    } else s(P.statusText || null, P.status ? "error" : "abort", P, c, d);
                }
            }, !1 === o(P, c)) return P.abort(), s(null, "abort", P, c, d), P;
            if (c.xhrFields) for (y in c.xhrFields) P[y] = c.xhrFields[y];
            var C = !("async" in c) || c.async;
            P.open(c.type, c.url, C, c.username, c.password);
            for (y in x) O.apply(P, x[y]);
            return c.timeout > 0 && (w = setTimeout(function() {
                P.onreadystatechange = u, P.abort(), s(null, "timeout", P, c, d);
            }, c.timeout)), P.send(c.data ? c.data : null), P;
        }, t.get = function() {
            return t.ajax(d.apply(null, arguments));
        }, t.post = function() {
            var e = d.apply(null, arguments);
            return e.type = "POST", t.ajax(e);
        }, t.getJSON = function() {
            var e = d.apply(null, arguments);
            return e.dataType = "json", t.ajax(e);
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var r, o = this, a = e.split(/\s/), s = d(e, n, i), c = s.success;
            return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(e) {
                o.html(r ? t("<div>").html(e.replace(w, "")).find(r) : e), c && c.apply(o, arguments);
            }, t.ajax(s), this;
        };
        var P = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(P(e) + "=" + P(n));
            }, h(i, e, n), i.join("&").replace(/%20/g, "+");
        };
    }(r), function(t) {
        function e(t) {
            return t._zid || (t._zid = p++);
        }
        function n(t, n, o, a) {
            if (n = i(n), n.ns) var s = r(n.ns);
            return (y[e(t)] || []).filter(function(t) {
                return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a);
            });
        }
        function i(t) {
            var e = ("" + t).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            };
        }
        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
        }
        function o(t, e) {
            return t.del && !v && t.e in w || !!e;
        }
        function a(t) {
            return b[t] || v && w[t] || t;
        }
        function s(n, r, s, c, l, p, d) {
            var h = e(n), m = y[h] || (y[h] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(s);
                var r = i(e);
                r.fn = s, r.sel = l, r.e in b && (s = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0;
                }), r.del = p;
                var h = p || s;
                r.proxy = function(t) {
                    if (t = u(t), !t.isImmediatePropagationStopped()) {
                        t.data = c;
                        var e = h.apply(n, t._args == f ? [ t ] : [ t ].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, d));
            });
        }
        function c(t, i, r, s, c) {
            var u = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, s).forEach(function(e) {
                    delete y[u][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, c));
                });
            });
        }
        function u(e, n) {
            return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(E, function(t, i) {
                var r = n[t];
                e[t] = function() {
                    return this[i] = x, r && r.apply(n, arguments);
                }, e[i] = j;
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), 
            e;
        }
        function l(t) {
            var e, n = {
                originalEvent: t
            };
            for (e in t) T.test(e) || t[e] === f || (n[e] = t[e]);
            return u(n, t);
        }
        var f, p = 1, d = Array.prototype.slice, h = t.isFunction, m = function(t) {
            return "string" == typeof t;
        }, y = {}, g = {}, v = "onfocusin" in window, w = {
            focus: "focusin",
            blur: "focusout"
        }, b = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: c
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && d.call(arguments, 2);
            if (h(n)) {
                var o = function() {
                    return n.apply(i, r ? r.concat(d.call(arguments)) : arguments);
                };
                return o._zid = e(n), o;
            }
            if (m(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
            throw new TypeError("expected function");
        }, t.fn.bind = function(t, e, n) {
            return this.on(t, e, n);
        }, t.fn.unbind = function(t, e) {
            return this.off(t, e);
        }, t.fn.one = function(t, e, n, i) {
            return this.on(t, e, n, i, 1);
        };
        var x = function() {
            return !0;
        }, j = function() {
            return !1;
        }, T = /^([A-Z]|returnValue$|layer[XY]$)/, E = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        t.fn.delegate = function(t, e, n) {
            return this.on(e, t, n);
        }, t.fn.undelegate = function(t, e, n) {
            return this.off(e, t, n);
        }, t.fn.live = function(e, n) {
            return t(document.body).delegate(this.selector, e, n), this;
        }, t.fn.die = function(e, n) {
            return t(document.body).undelegate(this.selector, e, n), this;
        }, t.fn.on = function(e, n, i, r, o) {
            var a, u, p = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                p.on(t, n, i, e, o);
            }), p) : (m(n) || h(r) || !1 === r || (r = i, i = n, n = f), (r === f || !1 === i) && (r = i, 
            i = f), !1 === r && (r = j), p.each(function(f, p) {
                o && (a = function(t) {
                    return c(p, t.type, r), r.apply(this, arguments);
                }), n && (u = function(e) {
                    var i, o = t(e.target).closest(n, p).get(0);
                    return o && o !== p ? (i = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: p
                    }), (a || r).apply(o, [ i ].concat(d.call(arguments, 1)))) : void 0;
                }), s(p, e, r, i, n, u || a);
            }));
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e);
            }), r) : (m(n) || h(i) || !1 === i || (i = n, n = f), !1 === i && (i = j), r.each(function() {
                c(this, e, i, n);
            }));
        }, t.fn.trigger = function(e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function() {
                e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
            });
        }, t.fn.triggerHandler = function(e, i) {
            var r, o;
            return this.each(function(a, s) {
                r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function(t, e) {
                    return o = e.proxy(r), !r.isImmediatePropagationStopped() && void 0;
                });
            }), o;
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e);
            };
        }), t.Event = function(t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(g[t] || "Events"), i = !0;
            if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), u(n);
        };
    }(r), function(t, e) {
        function n(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
        }
        function r(t) {
            return o ? o + t : t.toLowerCase();
        }
        var o, a, s, c, u, l, f, p, d, h, m = "", y = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, g = document.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, w = {};
        t.each(y, function(t, n) {
            return g.style[t + "TransitionProperty"] !== e ? (m = "-" + t.toLowerCase() + "-", 
            o = n, !1) : void 0;
        }), a = m + "transform", w[s = m + "transition-property"] = w[c = m + "transition-duration"] = w[l = m + "transition-delay"] = w[u = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[p = m + "animation-duration"] = w[h = m + "animation-delay"] = w[d = m + "animation-timing-function"] = "", 
        t.fx = {
            off: o === e && g.style.transitionProperty === e,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: m,
            transitionEnd: r("TransitionEnd"),
            animationEnd: r("AnimationEnd")
        }, t.fn.animate = function(n, i, r, o, a) {
            return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), 
            t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), 
            i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), 
            a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a);
        }, t.fn.anim = function(r, o, m, y, g) {
            var b, x, j, T = {}, E = "", S = this, P = t.fx.transitionEnd, O = !1;
            if (o === e && (o = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (o = 0), 
            "string" == typeof r) T[f] = r, T[p] = o + "s", T[h] = g + "s", T[d] = m || "linear", 
            P = t.fx.animationEnd; else {
                x = [];
                for (b in r) v.test(b) ? E += b + "(" + r[b] + ") " : (T[b] = r[b], x.push(n(b)));
                E && (T[a] = E, x.push(a)), o > 0 && "object" == (void 0 === r ? "undefined" : i(r)) && (T[s] = x.join(", "), 
                T[c] = o + "s", T[l] = g + "s", T[u] = m || "linear");
            }
            return j = function(e) {
                if (void 0 !== e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(P, j);
                } else t(this).unbind(P, j);
                O = !0, t(this).css(w), y && y.call(this);
            }, o > 0 && (this.bind(P, j), setTimeout(function() {
                O || j.call(S);
            }, 1e3 * (o + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), 0 >= o && setTimeout(function() {
                S.each(function() {
                    j.call(this);
                });
            }, 0), this;
        }, g = null;
    }(r), function(t, e) {
        function n(n, i, r, o, a) {
            "function" != typeof i || a || (a = i, i = e);
            var s = {
                opacity: r
            };
            return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a);
        }
        function i(e, i, r, o) {
            return n(e, i, 0, r, function() {
                a.call(t(this)), o && o.call(this);
            });
        }
        var r = window.document, o = (r.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
        t.fn.show = function(t, i) {
            return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i);
        }, t.fn.hide = function(t, n) {
            return t === e ? a.call(this) : i(this, t, "0,0", n);
        }, t.fn.toggle = function(n, i) {
            return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
                var e = t(this);
                e["none" == e.css("display") ? "show" : "hide"](n, i);
            });
        }, t.fn.fadeTo = function(t, e, i) {
            return n(this, t, e, null, i);
        }, t.fn.fadeIn = function(t, e) {
            var n = this.css("opacity");
            return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e);
        }, t.fn.fadeOut = function(t, e) {
            return i(this, t, null, e);
        }, t.fn.fadeToggle = function(e, n) {
            return this.each(function() {
                var i = t(this);
                i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n);
            });
        };
    }(r), function() {
        try {
            getComputedStyle(void 0);
        } catch (e) {
            var t = getComputedStyle;
            window.getComputedStyle = function(e) {
                try {
                    return t(e);
                } catch (t) {
                    return null;
                }
            };
        }
    }(), function(t) {
        function e(e) {
            return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display");
        }
        function n(t, e) {
            t = t.replace(/=#\]/g, '="#"]');
            var n, i, r = s.exec(t);
            if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
                var o = Number(i);
                i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o;
            }
            return e(t, n, i);
        }
        var i = t.zepto, r = i.qsa, o = i.matches, a = t.expr[":"] = {
            visible: function() {
                return e(this) ? this : void 0;
            },
            hidden: function() {
                return e(this) ? void 0 : this;
            },
            selected: function() {
                return this.selected ? this : void 0;
            },
            checked: function() {
                return this.checked ? this : void 0;
            },
            parent: function() {
                return this.parentNode;
            },
            first: function(t) {
                return 0 === t ? this : void 0;
            },
            last: function(t, e) {
                return t === e.length - 1 ? this : void 0;
            },
            eq: function(t, e, n) {
                return t === n ? this : void 0;
            },
            contains: function(e, n, i) {
                return t(this).text().indexOf(i) > -1 ? this : void 0;
            },
            has: function(t, e, n) {
                return i.qsa(this, n).length ? this : void 0;
            }
        }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), c = /^\s*>/, u = "Zepto" + +new Date();
        i.qsa = function(e, o) {
            return n(o, function(n, a, s) {
                try {
                    var l;
                    !n && a ? n = "*" : c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
                    var f = r(e, n);
                } catch (t) {
                    throw console.error("error performing selector: %o", o), t;
                } finally {
                    l && l.removeClass(u);
                }
                return a ? i.uniq(t.map(f, function(t, e) {
                    return a.call(t, e, f, s);
                })) : f;
            });
        }, i.matches = function(t, e) {
            return n(e, function(e, n, i) {
                return !(e && !o(t, e) || n && n.call(t, null, i) !== t);
            });
        };
    }(r), function(t) {
        function e(t, e, n, i) {
            return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down";
        }
        function n() {
            l = null, p.last && (p.el.trigger("longTap"), p = {});
        }
        function i() {
            l && clearTimeout(l), l = null;
        }
        function r() {
            s && clearTimeout(s), c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), 
            s = c = u = l = null, p = {};
        }
        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
        }
        function a(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
        }
        var s, c, u, l, f, p = {};
        t(document).ready(function() {
            var d, h, m, y, g = 0, v = 0;
            "MSGesture" in window && (f = new MSGesture(), f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (p.el.trigger("swipe"), p.el.trigger("swipe" + e));
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                (!(y = a(e, "down")) || o(e)) && (m = y ? e : e.touches[0], e.touches && 1 === e.touches.length && p.x2 && (p.x2 = void 0, 
                p.y2 = void 0), d = Date.now(), h = d - (p.last || d), p.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                s && clearTimeout(s), p.x1 = m.pageX, p.y1 = m.pageY, h > 0 && 250 >= h && (p.isDoubleTap = !0), 
                p.last = d, l = setTimeout(n, 750), f && y && f.addPointer(e.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(y = a(t, "move")) || o(t)) && (m = y ? t : t.touches[0], i(), p.x2 = m.pageX, 
                p.y2 = m.pageY, g += Math.abs(p.x1 - p.x2), v += Math.abs(p.y1 - p.y2));
            }).on("touchend MSPointerUp pointerup", function(n) {
                (!(y = a(n, "up")) || o(n)) && (i(), p.x2 && Math.abs(p.x1 - p.x2) > 30 || p.y2 && Math.abs(p.y1 - p.y2) > 30 ? u = setTimeout(function() {
                    p.el.trigger("swipe"), p.el.trigger("swipe" + e(p.x1, p.x2, p.y1, p.y2)), p = {};
                }, 0) : "last" in p && (30 > g && 30 > v ? c = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = r, p.el.trigger(e), p.isDoubleTap ? (p.el && p.el.trigger("doubleTap"), 
                    p = {}) : s = setTimeout(function() {
                        s = null, p.el && p.el.trigger("singleTap"), p = {};
                    }, 250);
                }, 0) : p = {}), g = v = 0);
            }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r);
        }), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(e) {
            t.fn[e] = function(t) {
                return this.on(e, t);
            };
        });
    }(r);
}, function(t, e) {}, function(t, e) {}, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    n(6), n(7), n(5);
    var o = n(0), a = i(o), s = n(2), c = i(s), u = n(1), l = i(u), f = n(4), p = i(f), d = n(3);
    i(d);
    !function() {
        var t = (new a.default(document, window), new c.default()), e = new l.default(), n = new p.default(), i = localAddress, o = document.getElementsByTagName("body")[0], s = document.getElementsByClassName("down_btn"), u = $(".askfriend_info .adress"), f = t.from || t.qd || 125300, d = t.opena, h = t.backload, m = t.touch, y = new Date(), g = y.getTime(), v = t.tit, w = t.cp, b = t.info, x = document.querySelector(".cp"), j = document.querySelector(".bahao"), T = document.querySelector(".address"), E = "http://qjlid.cn/download.jsp?from=" + f, S = document.querySelector(".compay"), P = document.querySelector(".detail_btn"), O = document.querySelector(".cp_bottom");
        !function() {
            function t(t) {
                this.init(t);
            }
            var e, n = (e = {
                fjya: "附近约爱",
                lywb: "来约我吧",
                bdya: "本地约爱",
                tcya: "同城约爱",
                mhl: "梦婚礼-婚礼必备",
                dsjy: "单身交友"
            }, r(e, "lywb", "来约我吧"), r(e, "mw", "喵呜"), r(e, "tcjyyh", "同城交友约会"), r(e, "tcmy", "同城秒约"), 
            r(e, "tcoy", "同城偶遇"), r(e, "tcrn", "同城热恋"), r(e, "tcsp", "同城速配"), r(e, "tesy", "同城速约"), 
            r(e, "yhb", "约会吧"), r(e, "yyw", "有缘网"), r(e, "zxsp", "在线速配"), r(e, "tcdsyh", "同城单身约会"), 
            r(e, "tcnxjy", "同城两性交友"), r(e, "tcrl", "同城热聊"), r(e, "fjjy", "附近交友"), r(e, "kya", "快遇爱"), 
            e), i = {
                yyzx: "北京友缘在线网络科技股份有限公司",
                yb: "北京缘博网络科技有限公司",
                zy: "天津追缘无线科技有限公司",
                jsy: "北京聚生缘网络科技有限公司"
            };
            v && "" != v && (document.querySelector("title").innerHTML = n[v], document.querySelector(".tit").innerHTML = n[v]), 
            S.style.display = "none", P.style.display = "none", O.style.display = "none", w && "" != w && (document.querySelector(".compay").innerHTML = i[w], 
            S.style.display = "block", P.style.display = "none", O.style.display = "none"), 
            b && "yyzx" == b ? (S.style.display = "none", P.style.display = "block", O.style.display = "block", 
            x.innerHTML = "北京友缘在线网络科技股份有限公司 版权所有", j.innerHTML = "京ICP备 08104462 号", T.innerHTML = "地址：北京市密云区经济开发区西统路8号西田各庄镇政府办公楼508室") : b && "yb" == b ? (S.style.display = "none", 
            P.style.display = "block", O.style.display = "block", x.innerHTML = "北京缘博网络科技有限公司 版权所有", 
            j.innerHTML = "京ICP备15053624号", T.innerHTML = "地址：北京市朝阳区北苑路乙108号14幢") : b && "lkt" == b ? (S.style.display = "none", 
            P.style.display = "block", O.style.display = "block", x.innerHTML = "成都乐开天科技有限公司 版权所有", 
            j.innerHTML = "蜀ICP备18026322号", T.innerHTML = "地址：成都市高新区天府三街69号新希望国际B座4层411室") : b && "sysd" == b && (S.style.display = "none", 
            P.style.display = "block", O.style.display = "block", x.innerHTML = "北京三易时代文化传媒有限公司 版权所有", 
            j.innerHTML = "京ICP备17064426号", T.innerHTML = "地址：北京市朝阳区广华居19号楼2层201"), window.dl = function() {
                location.href = E;
            };
            t.prototype = {
                constructor: t,
                init: function(t) {
                    this.pushHistory(), window.addEventListener("load", function() {
                        setTimeout(function() {
                            window.addEventListener("popstate", function() {
                                dl();
                            });
                        }, 0);
                    });
                },
                pushHistory: function() {
                    var t = {
                        title: "title",
                        url: "#"
                    };
                    window.history.pushState(t, "title", "");
                }
            }, t.prototype.init(event), t.prototype.init(event), $(".company_detail").click(function() {
                event.stopPropagation(), location.href = "./about.html?info=" + b;
            }), $(".phone_us").click(function() {
                event.stopPropagation(), location.href = "./elephone.html?info=" + b;
            }), $(".pruduct_detail").click(function() {
                event.stopPropagation(), location.href = "./product.html?info=" + b;
            });
        }();
        var C = "";
        C = i.province.indexOf("市") > -1 ? i.province : i.city, C = C.replace("市", "");
        for (var L = 0; L < u.length; L++) u[L].innerHTML = C;
        if (e.pcFlag) {
            n({
                tjtype: "page-load",
                tjuid: "scc-20180802",
                tjtag: "page-load",
                fromId: f,
                equipment: "pc"
            });
            for (var L = 0; L < s.length; L++) s[L].addEventListener("click", function() {
                n({
                    tjtype: "page-click",
                    tjuid: "scc-20180802",
                    tjtag: "page-click",
                    fromId: f,
                    equipment: "pc"
                }), location.href = E, n({
                    tjtype: "page-click-apk",
                    tjuid: "scc-20180802",
                    tjtag: "page-click-apk",
                    fromId: f,
                    equipment: "pc"
                });
            });
        } else n({
            tjtype: "page-load",
            tjuid: "scc-20180802",
            tjtag: "page-load",
            fromId: f,
            equipment: "mobile"
        }), m ? o.addEventListener("touchstart", function() {
            n({
                tjtype: "page-click",
                tjuid: "scc-20180802",
                tjtag: "page-click",
                fromId: f,
                equipment: "mobile"
            }), location.href = E, n({
                tjtype: "page-click-apk",
                tjuid: "scc-20180802",
                tjtag: "page-click-apk",
                fromId: f,
                equipment: "mobile"
            });
        }) : o.addEventListener("click", function() {
            n({
                tjtype: "page-click",
                tjuid: "scc-20180802",
                tjtag: "page-click",
                fromId: f,
                equipment: "mobile"
            }), location.href = E, n({
                tjtype: "page-click-apk",
                tjuid: "scc-20180802",
                tjtag: "page-click-apk",
                fromId: f,
                equipment: "mobile"
            });
        }), d && (console.log("当前城市：" + i), "北京市" == i.province || "上海市" == i.province || "深圳市" == i.province || "广州市" == i.city || (n({
            tjtype: "page-auto-download",
            tjuid: "scc-20180802",
            tjtag: "page-auto-download",
            fromId: f,
            equipment: "mobile"
        }), location.href = E, n({
            tjtype: "page-auto-download-apk",
            tjuid: "scc-20180802",
            tjtag: "page-auto-download-apk",
            fromId: f,
            equipment: "mobile"
        }))), h && ("北京市" == i.province || "上海市" == i.province || "深圳市" == i.province || "广州市" == i.city || (history.pushState(null, null, document.URL), 
        window.addEventListener("popstate", function() {
            var t = new Date(), e = t.getTime(), i = parseInt((e - g) / 1e3);
            n({
                tjtype: "page-back",
                tjuid: "scc-20180802",
                tjtag: "page-auto-download",
                fromId: f,
                equipment: "mobile",
                staytime: i
            }), location.href = E;
        })));
    }();
} ]);