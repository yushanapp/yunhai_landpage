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
    }, e.p = "", e(e.s = 6);
}([ function(t, e, n) {
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
            for (var c in e) r += "&" + c + "=" + encodeURIComponent(e[c]);
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
        function c(t) {
            return "number" == typeof t.length;
        }
        function u(t) {
            return M.call(t, function(t) {
                return null != t;
            });
        }
        function s(t) {
            return t.length > 0 ? k.fn.concat.apply([], t) : t;
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
        function h(t) {
            var e, n;
            return _[t] || (e = $.createElement(t), $.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), 
            e.parentNode.removeChild(e), "none" == n && (n = "block"), _[t] = n), _[t];
        }
        function d(t) {
            return "children" in t ? L.call(t.children) : k.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0;
            });
        }
        function m(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || "";
        }
        function g(t, e, n) {
            for (T in e) n && (a(e[T]) || tt(e[T])) ? (a(e[T]) && !a(t[T]) && (t[T] = {}), tt(e[T]) && !tt(t[T]) && (t[T] = []), 
            g(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T]);
        }
        function y(t, e) {
            return null == e ? k(t) : k(t).filter(e);
        }
        function v(t, n, i, r) {
            return e(n) ? n.call(t, i, r) : n;
        }
        function w(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
        }
        function b(t, e) {
            var n = t.className || "", i = n && n.baseVal !== E;
            return e === E ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e);
        }
        function x(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t;
            } catch (e) {
                return t;
            }
        }
        function j(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) j(t.childNodes[n], e);
        }
        var E, T, k, P, O, S, C = [], N = C.concat, M = C.filter, L = C.slice, $ = window.document, _ = {}, A = {}, I = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, q = /^\s*<(\w+|!)[^>]*>/, D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, R = /^(?:body|html)$/i, F = /([A-Z])/g, z = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], Z = [ "after", "prepend", "before", "append" ], H = $.createElement("table"), U = $.createElement("tr"), B = {
            tr: $.createElement("tbody"),
            tbody: H,
            thead: H,
            tfoot: H,
            td: U,
            th: U,
            "*": $.createElement("div")
        }, X = /complete|loaded|interactive/, V = /^[\w-]*$/, W = {}, G = W.toString, J = {}, K = $.createElement("div"), Q = {
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
        }, S = function(t) {
            return M.call(t, function(e, n) {
                return t.indexOf(e) == n;
            });
        }, J.fragment = function(t, e, n) {
            var i, r, o;
            return D.test(t) && (i = k($.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(Y, "<$1></$2>")), 
            e === E && (e = q.test(t) && RegExp.$1), e in B || (e = "*"), o = B[e], o.innerHTML = "" + t, 
            i = k.each(L.call(o.childNodes), function() {
                o.removeChild(this);
            })), a(n) && (r = k(i), k.each(n, function(t, e) {
                z.indexOf(t) > -1 ? r[t](e) : r.attr(t, e);
            })), i;
        }, J.Z = function(t, e) {
            return new m(t, e);
        }, J.isZ = function(t) {
            return t instanceof J.Z;
        }, J.init = function(t, n) {
            var i;
            if (!t) return J.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && q.test(t)) i = J.fragment(t, RegExp.$1, n), 
            t = null; else {
                if (n !== E) return k(n).find(t);
                i = J.qsa($, t);
            } else {
                if (e(t)) return k($).ready(t);
                if (J.isZ(t)) return t;
                if (tt(t)) i = u(t); else if (o(t)) i = [ t ], t = null; else if (q.test(t)) i = J.fragment(t.trim(), RegExp.$1, n), 
                t = null; else {
                    if (n !== E) return k(n).find(t);
                    i = J.qsa($, t);
                }
            }
            return J.Z(i, t);
        }, k = function(t, e) {
            return J.init(t, e);
        }, k.extend = function(t) {
            var e, n = L.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                g(t, n, e);
            }), t;
        }, J.qsa = function(t, e) {
            var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = V.test(o);
            return t.getElementById && a && i ? (n = t.getElementById(o)) ? [ n ] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : L.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
        }, k.contains = $.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e);
        } : function(t, e) {
            for (;e && (e = e.parentNode); ) if (e === t) return !0;
            return !1;
        }, k.type = t, k.isFunction = e, k.isWindow = n, k.isArray = tt, k.isPlainObject = a, 
        k.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        }, k.inArray = function(t, e, n) {
            return C.indexOf.call(e, t, n);
        }, k.camelCase = O, k.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }, k.uuid = 0, k.support = {}, k.expr = {}, k.noop = function() {}, k.map = function(t, e) {
            var n, i, r, o = [];
            if (c(t)) for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && o.push(n); else for (r in t) null != (n = e(t[r], r)) && o.push(n);
            return s(o);
        }, k.each = function(t, e) {
            var n, i;
            if (c(t)) {
                for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
            return t;
        }, k.grep = function(t, e) {
            return M.call(t, e);
        }, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            W["[object " + e + "]"] = e.toLowerCase();
        }), k.fn = {
            constructor: J.Z,
            length: 0,
            forEach: C.forEach,
            reduce: C.reduce,
            push: C.push,
            sort: C.sort,
            splice: C.splice,
            indexOf: C.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = J.isZ(e) ? e.toArray() : e;
                return N.apply(J.isZ(this) ? this.toArray() : this, n);
            },
            map: function(t) {
                return k(k.map(this, function(e, n) {
                    return t.call(e, n, e);
                }));
            },
            slice: function() {
                return k(L.apply(this, arguments));
            },
            ready: function(t) {
                return X.test($.readyState) && $.body ? t(k) : $.addEventListener("DOMContentLoaded", function() {
                    t(k);
                }, !1), this;
            },
            get: function(t) {
                return t === E ? L.call(this) : this[t >= 0 ? t : t + this.length];
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
                return C.every.call(this, function(e, n) {
                    return !1 !== t.call(e, n, e);
                }), this;
            },
            filter: function(t) {
                return e(t) ? this.not(this.not(t)) : k(M.call(this, function(e) {
                    return J.matches(e, t);
                }));
            },
            add: function(t, e) {
                return k(S(this.concat(k(t, e))));
            },
            is: function(t) {
                return this.length > 0 && J.matches(this[0], t);
            },
            not: function(t) {
                var n = [];
                if (e(t) && t.call !== E) this.each(function(e) {
                    t.call(this, e) || n.push(this);
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : c(t) && e(t.item) ? L.call(t) : k(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && n.push(t);
                    });
                }
                return k(n);
            },
            has: function(t) {
                return this.filter(function() {
                    return o(t) ? k.contains(this, t) : k(this).find(t).size();
                });
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function() {
                var t = this[0];
                return t && !o(t) ? t : k(t);
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : k(t);
            },
            find: function(t) {
                var e = this;
                return t ? "object" == (void 0 === t ? "undefined" : i(t)) ? k(t).filter(function() {
                    var t = this;
                    return C.some.call(e, function(e) {
                        return k.contains(e, t);
                    });
                }) : 1 == this.length ? k(J.qsa(this[0], t)) : this.map(function() {
                    return J.qsa(this, t);
                }) : k();
            },
            closest: function(t, e) {
                var n = this[0], o = !1;
                for ("object" == (void 0 === t ? "undefined" : i(t)) && (o = k(t)); n && !(o ? o.indexOf(n) >= 0 : J.matches(n, t)); ) n = n !== e && !r(n) && n.parentNode;
                return k(n);
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0; ) n = k.map(n, function(t) {
                    return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                });
                return y(e, t);
            },
            parent: function(t) {
                return y(S(this.pluck("parentNode")), t);
            },
            children: function(t) {
                return y(this.map(function() {
                    return d(this);
                }), t);
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || L.call(this.childNodes);
                });
            },
            siblings: function(t) {
                return y(this.map(function(t, e) {
                    return M.call(d(e.parentNode), function(t) {
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
                return k.map(this, function(e) {
                    return e[t];
                });
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName));
                });
            },
            replaceWith: function(t) {
                return this.before(t).remove();
            },
            wrap: function(t) {
                var n = e(t);
                if (this[0] && !n) var i = k(t).get(0), r = i.parentNode || this.length > 1;
                return this.each(function(e) {
                    k(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i);
                });
            },
            wrapAll: function(t) {
                if (this[0]) {
                    k(this[0]).before(t = k(t));
                    for (var e; (e = t.children()).length; ) t = e.first();
                    k(t).append(this);
                }
                return this;
            },
            wrapInner: function(t) {
                var n = e(t);
                return this.each(function(e) {
                    var i = k(this), r = i.contents(), o = n ? t.call(this, e) : t;
                    r.length ? r.wrapAll(o) : i.append(o);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    k(this).replaceWith(k(this).children());
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
                    var e = k(this);
                    (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide();
                });
            },
            prev: function(t) {
                return k(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function(t) {
                return k(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    k(this).empty().append(v(this, t, e, n));
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
                    if (1 === this.nodeType) if (o(t)) for (T in t) w(this, T, t[T]); else w(this, t, v(this, e, n, this.getAttribute(t)));
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E;
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
                var n = "data-" + t.replace(F, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? x(i) : E;
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    this.value = v(this, t, e, this.value);
                }) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
                    return this.selected;
                }).pluck("value") : this[0].value);
            },
            offset: function(t) {
                if (t) return this.each(function(e) {
                    var n = k(this), i = v(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o);
                });
                if (!this.length) return null;
                if (!k.contains($.documentElement, this[0])) return {
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
                        return k.each(e, function(t, e) {
                            o[e] = r.style[O(e)] || i.getPropertyValue(e);
                        }), o;
                    }
                }
                var a = "";
                if ("string" == t(e)) n || 0 === n ? a = l(e) + ":" + p(e, n) : this.each(function() {
                    this.style.removeProperty(l(e));
                }); else for (T in e) e[T] || 0 === e[T] ? a += l(T) + ":" + p(T, e[T]) + ";" : this.each(function() {
                    this.style.removeProperty(l(T));
                });
                return this.each(function() {
                    this.style.cssText += ";" + a;
                });
            },
            index: function(t) {
                return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function(t) {
                return !!t && C.some.call(this, function(t) {
                    return this.test(b(t));
                }, f(t));
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        P = [];
                        var n = b(this);
                        v(this, t, e, n).split(/\s+/g).forEach(function(t) {
                            k(this).hasClass(t) || P.push(t);
                        }, this), P.length && b(this, n + (n ? " " : "") + P.join(" "));
                    }
                }) : this;
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === E) return b(this, "");
                        P = b(this), v(this, t, e, P).split(/\s+/g).forEach(function(t) {
                            P = P.replace(f(t), " ");
                        }), b(this, P.trim());
                    }
                });
            },
            toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var i = k(this);
                    v(this, t, n, b(this)).split(/\s+/g).forEach(function(t) {
                        (e === E ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t);
                    });
                }) : this;
            },
            scrollTop: function(t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                        this.scrollTop = t;
                    } : function() {
                        this.scrollTo(this.scrollX, t);
                    });
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
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
                    return n.top -= parseFloat(k(t).css("margin-top")) || 0, n.left -= parseFloat(k(t).css("margin-left")) || 0, 
                    i.top += parseFloat(k(e[0]).css("border-top-width")) || 0, i.left += parseFloat(k(e[0]).css("border-left-width")) || 0, 
                    {
                        top: n.top - i.top,
                        left: n.left - i.left
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || $.body; t && !R.test(t.nodeName) && "static" == k(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            }
        }, k.fn.detach = k.fn.remove, [ "width", "height" ].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase();
            });
            k.fn[t] = function(i) {
                var o, a = this[0];
                return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                    a = k(this), a.css(t, v(this, i, e, a[t]()));
                });
            };
        }), Z.forEach(function(e, n) {
            var i = n % 2;
            k.fn[e] = function() {
                var e, r, o = k.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : J.fragment(n);
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(t, e) {
                    r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                    var c = k.contains($.documentElement, r);
                    o.forEach(function(t) {
                        if (a) t = t.cloneNode(!0); else if (!r) return k(t).remove();
                        r.insertBefore(t, e), c && j(t, function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                        });
                    });
                });
            }, k.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
                return k(t)[e](this), this;
            };
        }), J.Z.prototype = m.prototype = k.fn, J.uniq = S, J.deserializeValue = x, k.zepto = J, 
        k;
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
            u(a, e, i);
        }
        function c(t, e, i, r, o) {
            var a = r.context;
            r.error.call(a, i, e, t), o && o.rejectWith(a, [ i, e, t ]), n(r, a, "ajaxError", [ i, r, t || e ]), 
            u(e, i, r);
        }
        function u(t, e, i) {
            var o = i.context;
            i.complete.call(o, e, t), n(i, o, "ajaxComplete", [ e, i ]), r(i);
        }
        function s() {}
        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == j ? "json" : b.test(t) ? "script" : x.test(t) && "xml") || "text";
        }
        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function p(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), 
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), 
            e.data = void 0);
        }
        function h(e, n, i, r) {
            return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, 
            i = void 0), {
                url: e,
                data: n,
                success: i,
                dataType: r
            };
        }
        function d(e, n, i, r) {
            var o, a = t.isArray(n), c = t.isPlainObject(n);
            t.each(n, function(n, u) {
                o = t.type(u), r && (n = i ? r : r + "[" + (c || "object" == o || "array" == o ? n : "") + "]"), 
                !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u);
            });
        }
        var m, g, y = 0, v = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, b = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, j = "application/json", E = "text/html", T = /^\s*$/, k = v.createElement("a");
        k.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, u = e.jsonpCallback, s = (t.isFunction(u) ? u() : u) || "jsonp" + ++y, l = v.createElement("script"), f = window[s], p = function(e) {
                t(l).triggerHandler("error", e || "abort");
            }, h = {
                abort: p
            };
            return n && n.promise(h), t(l).on("load error", function(o, u) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], h, e, n) : c(null, u || "error", h, e, n), 
                window[s] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0;
            }), !1 === o(h, e) ? (p("abort"), h) : (window[s] = function() {
                i = arguments;
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + s), v.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                p("timeout");
            }, e.timeout)), h);
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: s,
            success: s,
            error: s,
            complete: s,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest();
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: j,
                xml: "application/xml, text/xml",
                html: E,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var n, r, u = t.extend({}, e || {}), h = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
            i(u), u.crossDomain || (n = v.createElement("a"), n.href = u.url, n.href = n.href, 
            u.crossDomain = k.protocol + "//" + k.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), 
            (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), p(u);
            var d = u.dataType, y = /\?.+=\?/.test(u.url);
            if (y && (d = "jsonp"), !1 !== u.cache && (e && !0 === e.cache || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), 
            "jsonp" == d) return y || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), 
            t.ajaxJSONP(u, h);
            var w, b = u.accepts[d], x = {}, j = function(t, e) {
                x[t.toLowerCase()] = [ t, e ];
            }, E = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, P = u.xhr(), O = P.setRequestHeader;
            if (h && h.promise(P), u.crossDomain || j("X-Requested-With", "XMLHttpRequest"), 
            j("Accept", b || "*/*"), (b = u.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), 
            P.overrideMimeType && P.overrideMimeType(b)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && j("Content-Type", u.contentType || "application/x-www-form-urlencoded"), 
            u.headers) for (g in u.headers) j(g, u.headers[g]);
            if (P.setRequestHeader = j, P.onreadystatechange = function() {
                if (4 == P.readyState) {
                    P.onreadystatechange = s, clearTimeout(w);
                    var e, n = !1;
                    if (P.status >= 200 && P.status < 300 || 304 == P.status || 0 == P.status && "file:" == E) {
                        d = d || l(u.mimeType || P.getResponseHeader("content-type")), e = P.responseText;
                        try {
                            "script" == d ? (0, eval)(e) : "xml" == d ? e = P.responseXML : "json" == d && (e = T.test(e) ? null : t.parseJSON(e));
                        } catch (t) {
                            n = t;
                        }
                        n ? c(n, "parsererror", P, u, h) : a(e, P, u, h);
                    } else c(P.statusText || null, P.status ? "error" : "abort", P, u, h);
                }
            }, !1 === o(P, u)) return P.abort(), c(null, "abort", P, u, h), P;
            if (u.xhrFields) for (g in u.xhrFields) P[g] = u.xhrFields[g];
            var S = !("async" in u) || u.async;
            P.open(u.type, u.url, S, u.username, u.password);
            for (g in x) O.apply(P, x[g]);
            return u.timeout > 0 && (w = setTimeout(function() {
                P.onreadystatechange = s, P.abort(), c(null, "timeout", P, u, h);
            }, u.timeout)), P.send(u.data ? u.data : null), P;
        }, t.get = function() {
            return t.ajax(h.apply(null, arguments));
        }, t.post = function() {
            var e = h.apply(null, arguments);
            return e.type = "POST", t.ajax(e);
        }, t.getJSON = function() {
            var e = h.apply(null, arguments);
            return e.dataType = "json", t.ajax(e);
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var r, o = this, a = e.split(/\s/), c = h(e, n, i), u = c.success;
            return a.length > 1 && (c.url = a[0], r = a[1]), c.success = function(e) {
                o.html(r ? t("<div>").html(e.replace(w, "")).find(r) : e), u && u.apply(o, arguments);
            }, t.ajax(c), this;
        };
        var P = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(P(e) + "=" + P(n));
            }, d(i, e, n), i.join("&").replace(/%20/g, "+");
        };
    }(r), function(t) {
        function e(t) {
            return t._zid || (t._zid = p++);
        }
        function n(t, n, o, a) {
            if (n = i(n), n.ns) var c = r(n.ns);
            return (g[e(t)] || []).filter(function(t) {
                return !(!t || n.e && t.e != n.e || n.ns && !c.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a);
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
        function c(n, r, c, u, l, p, h) {
            var d = e(n), m = g[d] || (g[d] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(c);
                var r = i(e);
                r.fn = c, r.sel = l, r.e in b && (c = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0;
                }), r.del = p;
                var d = p || c;
                r.proxy = function(t) {
                    if (t = s(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == f ? [ t ] : [ t ].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, h));
            });
        }
        function u(t, i, r, c, u) {
            var s = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, c).forEach(function(e) {
                    delete g[s][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u));
                });
            });
        }
        function s(e, n) {
            return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(T, function(t, i) {
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
            for (e in t) E.test(e) || t[e] === f || (n[e] = t[e]);
            return s(n, t);
        }
        var f, p = 1, h = Array.prototype.slice, d = t.isFunction, m = function(t) {
            return "string" == typeof t;
        }, g = {}, y = {}, v = "onfocusin" in window, w = {
            focus: "focusin",
            blur: "focusout"
        }, b = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", t.event = {
            add: c,
            remove: u
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && h.call(arguments, 2);
            if (d(n)) {
                var o = function() {
                    return n.apply(i, r ? r.concat(h.call(arguments)) : arguments);
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
        }, E = /^([A-Z]|returnValue$|layer[XY]$)/, T = {
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
            var a, s, p = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                p.on(t, n, i, e, o);
            }), p) : (m(n) || d(r) || !1 === r || (r = i, i = n, n = f), (r === f || !1 === i) && (r = i, 
            i = f), !1 === r && (r = j), p.each(function(f, p) {
                o && (a = function(t) {
                    return u(p, t.type, r), r.apply(this, arguments);
                }), n && (s = function(e) {
                    var i, o = t(e.target).closest(n, p).get(0);
                    return o && o !== p ? (i = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: p
                    }), (a || r).apply(o, [ i ].concat(h.call(arguments, 1)))) : void 0;
                }), c(p, e, r, i, n, s || a);
            }));
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e);
            }), r) : (m(n) || d(i) || !1 === i || (i = n, n = f), !1 === i && (i = j), r.each(function() {
                u(this, e, i, n);
            }));
        }, t.fn.trigger = function(e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : s(e), e._args = n, this.each(function() {
                e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
            });
        }, t.fn.triggerHandler = function(e, i) {
            var r, o;
            return this.each(function(a, c) {
                r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = c, t.each(n(c, e.type || e), function(t, e) {
                    return o = e.proxy(r), !r.isImmediatePropagationStopped() && void 0;
                });
            }), o;
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e);
            };
        }), t.Event = function(t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(y[t] || "Events"), i = !0;
            if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), s(n);
        };
    }(r), function(t, e) {
        function n(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
        }
        function r(t) {
            return o ? o + t : t.toLowerCase();
        }
        var o, a, c, u, s, l, f, p, h, d, m = "", g = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, y = document.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, w = {};
        t.each(g, function(t, n) {
            return y.style[t + "TransitionProperty"] !== e ? (m = "-" + t.toLowerCase() + "-", 
            o = n, !1) : void 0;
        }), a = m + "transform", w[c = m + "transition-property"] = w[u = m + "transition-duration"] = w[l = m + "transition-delay"] = w[s = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[p = m + "animation-duration"] = w[d = m + "animation-delay"] = w[h = m + "animation-timing-function"] = "", 
        t.fx = {
            off: o === e && y.style.transitionProperty === e,
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
        }, t.fn.anim = function(r, o, m, g, y) {
            var b, x, j, E = {}, T = "", k = this, P = t.fx.transitionEnd, O = !1;
            if (o === e && (o = t.fx.speeds._default / 1e3), y === e && (y = 0), t.fx.off && (o = 0), 
            "string" == typeof r) E[f] = r, E[p] = o + "s", E[d] = y + "s", E[h] = m || "linear", 
            P = t.fx.animationEnd; else {
                x = [];
                for (b in r) v.test(b) ? T += b + "(" + r[b] + ") " : (E[b] = r[b], x.push(n(b)));
                T && (E[a] = T, x.push(a)), o > 0 && "object" == (void 0 === r ? "undefined" : i(r)) && (E[c] = x.join(", "), 
                E[u] = o + "s", E[l] = y + "s", E[s] = m || "linear");
            }
            return j = function(e) {
                if (void 0 !== e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(P, j);
                } else t(this).unbind(P, j);
                O = !0, t(this).css(w), g && g.call(this);
            }, o > 0 && (this.bind(P, j), setTimeout(function() {
                O || j.call(k);
            }, 1e3 * (o + y) + 25)), this.size() && this.get(0).clientLeft, this.css(E), 0 >= o && setTimeout(function() {
                k.each(function() {
                    j.call(this);
                });
            }, 0), this;
        }, y = null;
    }(r), function(t, e) {
        function n(n, i, r, o, a) {
            "function" != typeof i || a || (a = i, i = e);
            var c = {
                opacity: r
            };
            return o && (c.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(c, i, null, a);
        }
        function i(e, i, r, o) {
            return n(e, i, 0, r, function() {
                a.call(t(this)), o && o.call(this);
            });
        }
        var r = window.document, o = (r.documentElement, t.fn.show), a = t.fn.hide, c = t.fn.toggle;
        t.fn.show = function(t, i) {
            return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i);
        }, t.fn.hide = function(t, n) {
            return t === e ? a.call(this) : i(this, t, "0,0", n);
        }, t.fn.toggle = function(n, i) {
            return n === e || "boolean" == typeof n ? c.call(this, n) : this.each(function() {
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
            var n, i, r = c.exec(t);
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
        }, c = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), u = /^\s*>/, s = "Zepto" + +new Date();
        i.qsa = function(e, o) {
            return n(o, function(n, a, c) {
                try {
                    var l;
                    !n && a ? n = "*" : u.test(n) && (l = t(e).addClass(s), n = "." + s + " " + n);
                    var f = r(e, n);
                } catch (t) {
                    throw console.error("error performing selector: %o", o), t;
                } finally {
                    l && l.removeClass(s);
                }
                return a ? i.uniq(t.map(f, function(t, e) {
                    return a.call(t, e, f, c);
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
            c && clearTimeout(c), u && clearTimeout(u), s && clearTimeout(s), l && clearTimeout(l), 
            c = u = s = l = null, p = {};
        }
        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
        }
        function a(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
        }
        var c, u, s, l, f, p = {};
        t(document).ready(function() {
            var h, d, m, g, y = 0, v = 0;
            "MSGesture" in window && (f = new MSGesture(), f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (p.el.trigger("swipe"), p.el.trigger("swipe" + e));
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                (!(g = a(e, "down")) || o(e)) && (m = g ? e : e.touches[0], e.touches && 1 === e.touches.length && p.x2 && (p.x2 = void 0, 
                p.y2 = void 0), h = Date.now(), d = h - (p.last || h), p.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                c && clearTimeout(c), p.x1 = m.pageX, p.y1 = m.pageY, d > 0 && 250 >= d && (p.isDoubleTap = !0), 
                p.last = h, l = setTimeout(n, 750), f && g && f.addPointer(e.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(g = a(t, "move")) || o(t)) && (m = g ? t : t.touches[0], i(), p.x2 = m.pageX, 
                p.y2 = m.pageY, y += Math.abs(p.x1 - p.x2), v += Math.abs(p.y1 - p.y2));
            }).on("touchend MSPointerUp", function(n) {
                (!(g = a(n, "up")) || o(n)) && (i(), p.x2 && Math.abs(p.x1 - p.x2) > 30 || p.y2 && Math.abs(p.y1 - p.y2) > 30 ? s = setTimeout(function() {
                    p.el.trigger("swipe"), p.el.trigger("swipe" + e(p.x1, p.x2, p.y1, p.y2)), p = {};
                }, 0) : "last" in p && (30 > y && 30 > v ? u = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = r, p.el.trigger(e), p.isDoubleTap ? (p.el && p.el.trigger("doubleTap"), 
                    p = {}) : c = setTimeout(function() {
                        c = null, p.el && p.el.trigger("singleTap"), p = {};
                    }, 250);
                }, 0) : p = {}), y = v = 0);
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
    n(4), n(5), n(3);
    var o = n(1), a = i(o), c = n(0), u = i(c), s = n(2), l = i(s);
    !function() {
        var t, e = new a.default(), n = new u.default(), i = new l.default(), o = localAddress, c = $("#body"), s = $(".down_btn"), f = $(".askfriend_info .adress"), p = e.from || e.qd || 600284, h = e.opena, d = e.backload, m = e.touch, g = e.info, y = e.cpshow, v = e.down, w = e.page, b = new Date(), x = b.getTime(), j = e.tit, E = e.cp, T = $(".cp"), k = $(".bahao"), P = $(".address");
        106271 == p ? (p = 1101379, t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 157620 == p ? (p = 1101380, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 158101 == p ? (p = 1100021, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 157440 == p ? (p = 1100020, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 157441 == p ? (p = 1101375, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 158103 == p ? (p = 1101377, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 158104 == p ? (p = 1101378, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : 803084 == p ? (p = 1101253, 
        t = "http://ptd.yoyuan.com.cn/apk/download/" + p + "/YouYuan_" + p + ".apk") : t = "//ptd.youyuan.com/apk/download/" + p + "/YouYuan_" + p + ".apk", 
        function() {
            var t;
            $("#body .content_box").hide();
            var e = (t = {
                fjya: "附近约爱",
                lywb: "来约我吧",
                bdya: "本地约爱",
                tcya: "同城约爱",
                mhl: "梦婚礼-婚礼必备",
                dsjy: "单身交友"
            }, r(t, "lywb", "来约我吧"), r(t, "mw", "喵呜"), r(t, "tcjyyh", "同城交友约会"), r(t, "tcmy", "同城秒约"), 
            r(t, "tcoy", "同城偶遇"), r(t, "tcrn", "同城热恋"), r(t, "tcsp", "同城速配"), r(t, "tesy", "同城速约"), 
            r(t, "yhb", "约会吧"), r(t, "yyw", "有缘网"), r(t, "zxsp", "在线速配"), r(t, "tcdsyh", "同城单身约会"), 
            r(t, "tcnxjy", "同城两性交友"), r(t, "tcrl", "同城热聊"), r(t, "fjjy", "附近交友"), r(t, "spjy", "速配交友"), 
            t);
            y ? ($("#company").show(), $(".cp_bottom").hide(), $(".detail_btn").hide()) : g && $("#company").hide(), 
            j && "" != j && (document.querySelector("title").innerHTML = e[j], document.querySelector(".tit").innerHTML = e[j]), 
            w && "a" == w ? ($("#pageA").show(), console.log("a")) : w && "b" == w ? ($("#pageB").show(), 
            console.log("b")) : w && "c" == w && ($("#pageC").show(), console.log("c")), E && "yyzx" == E ? (T.html("北京智鸟科技有限公司版权所有 版权所有"), 
            k.html("ICP备 08104462 号"), P.html("地址：北京市密云区经济开发区西统路8号西田各庄镇政府办公楼508室")) : E && "yb" == E ? (T.html("北京智鸟科技有限公司版权所有 版权所有"), 
            k.html("ICP备15053624号"), P.html("地址：北京市朝阳区北苑路乙108号14幢")) : E && "lkt" == E ? (T.html("北京智鸟科技有限公司版权所有 版权所有"), 
            k.html("ICP备18026322号"), P.html("地址：海淀区交大东路66号院2号楼")) : E && "sysd" == E ? (T.html("北京三易时代文化传媒有限公司 版权所有"), 
            k.html("ICP备17064426号"), P.html("地址：北京市朝阳区广华居19号楼2层201")) : E && "jiujy" == E && (T.html("北京智鸟科技有限公司版权所有 版权所有"), 
            P.html("柏林区杜儿坪大虎峪西街")), $(".company_detail").click(function(t) {
                t.stopPropagation(), location.href = "./about.html?info=" + E;
            }), $(".phone_us").click(function(t) {
                t.stopPropagation(), location.href = "./elephone.html?info=" + E;
            }), $(".pruduct_detail").click(function(t) {
                t.stopPropagation(), location.href = "./product.html?info=" + E;
            });
        }();
        var O = "";
        O = o.province.indexOf("市") > -1 ? o.province : o.city, O = O.replace("市", "");
        for (var S = 0; S < f.length; S++) f[S].innerHTML = O;
        if (n.pcFlag) {
            i({
                tjtype: "page-load",
                tjuid: "scc-20180802",
                tjtag: "page-load",
                fromId: p,
                equipment: "pc"
            });
            for (var S = 0; S < s.length; S++) s[S].addEventListener("click", function() {
                i({
                    tjtype: "page-click",
                    tjuid: "scc-20180802",
                    tjtag: "page-click",
                    fromId: p,
                    equipment: "pc"
                }), location.href = t, i({
                    tjtype: "page-click-apk",
                    tjuid: "scc-20180802",
                    tjtag: "page-click-apk",
                    fromId: p,
                    equipment: "pc"
                });
            });
        } else {
            if (i({
                tjtype: "page-load",
                tjuid: "scc-20180802",
                tjtag: "page-load",
                fromId: p,
                equipment: "mobile"
            }), v && "true" == v) for (var S = 0; S < s.length; S++) s[S].addEventListener("click", function() {
                i({
                    tjtype: "page-click",
                    tjuid: "scc-20180802",
                    tjtag: "page-click",
                    fromId: p,
                    equipment: "pc"
                }), location.href = t, i({
                    tjtype: "page-click-apk",
                    tjuid: "scc-20180802",
                    tjtag: "page-click-apk",
                    fromId: p,
                    equipment: "pc"
                });
            }); else m ? c.addEventListener("touchstart", function() {
                i({
                    tjtype: "page-click",
                    tjuid: "scc-20180802",
                    tjtag: "page-click",
                    fromId: p,
                    equipment: "mobile"
                }), location.href = t, i({
                    tjtype: "page-click-apk",
                    tjuid: "scc-20180802",
                    tjtag: "page-click-apk",
                    fromId: p,
                    equipment: "mobile"
                });
            }) : c.addEventListener("click", function() {
                i({
                    tjtype: "page-click",
                    tjuid: "scc-20180802",
                    tjtag: "page-click",
                    fromId: p,
                    equipment: "mobile"
                }), location.href = t, i({
                    tjtype: "page-click-apk",
                    tjuid: "scc-20180802",
                    tjtag: "page-click-apk",
                    fromId: p,
                    equipment: "mobile"
                });
            });
            h && ("北京市" == o.province || "上海市" == o.province || "深圳市" == o.province || "广州市" == o.city || (i({
                tjtype: "page-auto-download",
                tjuid: "scc-20180802",
                tjtag: "page-auto-download",
                fromId: p,
                equipment: "mobile"
            }), location.href = t, i({
                tjtype: "page-auto-download-apk",
                tjuid: "scc-20180802",
                tjtag: "page-auto-download-apk",
                fromId: p,
                equipment: "mobile"
            }))), d && ("北京市" == o.province || "上海市" == o.province || "深圳市" == o.province || "广州市" == o.city || (history.pushState(null, null, document.URL), 
            window.addEventListener("popstate", function() {
                var e = new Date(), n = e.getTime(), r = parseInt((n - x) / 1e3);
                i({
                    tjtype: "page-back",
                    tjuid: "scc-20180802",
                    tjtag: "page-auto-download",
                    fromId: p,
                    equipment: "mobile",
                    staytime: r
                }), location.href = t;
            })));
        }
    }();
} ]);