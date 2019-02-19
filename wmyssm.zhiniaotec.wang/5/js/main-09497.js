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
            return null == t ? String(t) : Y[V.call(t)] || "object";
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
        function u(t) {
            return M.call(t, function(t) {
                return null != t;
            });
        }
        function c(t) {
            return t.length > 0 ? O.fn.concat.apply([], t) : t;
        }
        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function f(t) {
            return t in A ? A[t] : A[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
        }
        function d(t, e) {
            return "number" != typeof e || D[l(t)] ? e : e + "px";
        }
        function p(t) {
            var e, n;
            return q[t] || (e = I.createElement(t), I.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), 
            e.parentNode.removeChild(e), "none" == n && (n = "block"), q[t] = n), q[t];
        }
        function h(t) {
            return "children" in t ? L.call(t.children) : O.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0;
            });
        }
        function m(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || "";
        }
        function g(t, e, n) {
            for (T in e) n && (a(e[T]) || K(e[T])) ? (a(e[T]) && !a(t[T]) && (t[T] = {}), K(e[T]) && !K(t[T]) && (t[T] = []), 
            g(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T]);
        }
        function y(t, e) {
            return null == e ? O(t) : O(t).filter(e);
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
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? O.parseJSON(t) : t) : t;
            } catch (e) {
                return t;
            }
        }
        function j(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) j(t.childNodes[n], e);
        }
        var E, T, O, S, P, C, N = [], k = N.concat, M = N.filter, L = N.slice, I = window.document, q = {}, A = {}, D = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, _ = /^\s*<(\w+|!)[^>]*>/, $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, R = /^(?:body|html)$/i, F = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], z = [ "after", "prepend", "before", "append" ], Z = I.createElement("table"), U = I.createElement("tr"), H = {
            tr: I.createElement("tbody"),
            tbody: Z,
            thead: Z,
            tfoot: Z,
            td: U,
            th: U,
            "*": I.createElement("div")
        }, B = /complete|loaded|interactive/, X = /^[\w-]*$/, Y = {}, V = Y.toString, W = {}, G = I.createElement("div"), J = {
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
        }, K = Array.isArray || function(t) {
            return t instanceof Array;
        };
        return W.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode, o = !r;
            return o && (r = G).appendChild(t), i = ~W.qsa(r, e).indexOf(t), o && G.removeChild(t), 
            i;
        }, P = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }, C = function(t) {
            return M.call(t, function(e, n) {
                return t.indexOf(e) == n;
            });
        }, W.fragment = function(t, e, n) {
            var i, r, o;
            return $.test(t) && (i = O(I.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "<$1></$2>")), 
            e === E && (e = _.test(t) && RegExp.$1), e in H || (e = "*"), o = H[e], o.innerHTML = "" + t, 
            i = O.each(L.call(o.childNodes), function() {
                o.removeChild(this);
            })), a(n) && (r = O(i), O.each(n, function(t, e) {
                F.indexOf(t) > -1 ? r[t](e) : r.attr(t, e);
            })), i;
        }, W.Z = function(t, e) {
            return new m(t, e);
        }, W.isZ = function(t) {
            return t instanceof W.Z;
        }, W.init = function(t, n) {
            var i;
            if (!t) return W.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && _.test(t)) i = W.fragment(t, RegExp.$1, n), 
            t = null; else {
                if (n !== E) return O(n).find(t);
                i = W.qsa(I, t);
            } else {
                if (e(t)) return O(I).ready(t);
                if (W.isZ(t)) return t;
                if (K(t)) i = u(t); else if (o(t)) i = [ t ], t = null; else if (_.test(t)) i = W.fragment(t.trim(), RegExp.$1, n), 
                t = null; else {
                    if (n !== E) return O(n).find(t);
                    i = W.qsa(I, t);
                }
            }
            return W.Z(i, t);
        }, O = function(t, e) {
            return W.init(t, e);
        }, O.extend = function(t) {
            var e, n = L.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                g(t, n, e);
            }), t;
        }, W.qsa = function(t, e) {
            var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = X.test(o);
            return t.getElementById && a && i ? (n = t.getElementById(o)) ? [ n ] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : L.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
        }, O.contains = I.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e);
        } : function(t, e) {
            for (;e && (e = e.parentNode); ) if (e === t) return !0;
            return !1;
        }, O.type = t, O.isFunction = e, O.isWindow = n, O.isArray = K, O.isPlainObject = a, 
        O.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        }, O.inArray = function(t, e, n) {
            return N.indexOf.call(e, t, n);
        }, O.camelCase = P, O.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }, O.uuid = 0, O.support = {}, O.expr = {}, O.noop = function() {}, O.map = function(t, e) {
            var n, i, r, o = [];
            if (s(t)) for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && o.push(n); else for (r in t) null != (n = e(t[r], r)) && o.push(n);
            return c(o);
        }, O.each = function(t, e) {
            var n, i;
            if (s(t)) {
                for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
            return t;
        }, O.grep = function(t, e) {
            return M.call(t, e);
        }, window.JSON && (O.parseJSON = JSON.parse), O.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase();
        }), O.fn = {
            constructor: W.Z,
            length: 0,
            forEach: N.forEach,
            reduce: N.reduce,
            push: N.push,
            sort: N.sort,
            splice: N.splice,
            indexOf: N.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = W.isZ(e) ? e.toArray() : e;
                return k.apply(W.isZ(this) ? this.toArray() : this, n);
            },
            map: function(t) {
                return O(O.map(this, function(e, n) {
                    return t.call(e, n, e);
                }));
            },
            slice: function() {
                return O(L.apply(this, arguments));
            },
            ready: function(t) {
                return B.test(I.readyState) && I.body ? t(O) : I.addEventListener("DOMContentLoaded", function() {
                    t(O);
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
                return N.every.call(this, function(e, n) {
                    return !1 !== t.call(e, n, e);
                }), this;
            },
            filter: function(t) {
                return e(t) ? this.not(this.not(t)) : O(M.call(this, function(e) {
                    return W.matches(e, t);
                }));
            },
            add: function(t, e) {
                return O(C(this.concat(O(t, e))));
            },
            is: function(t) {
                return this.length > 0 && W.matches(this[0], t);
            },
            not: function(t) {
                var n = [];
                if (e(t) && t.call !== E) this.each(function(e) {
                    t.call(this, e) || n.push(this);
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? L.call(t) : O(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && n.push(t);
                    });
                }
                return O(n);
            },
            has: function(t) {
                return this.filter(function() {
                    return o(t) ? O.contains(this, t) : O(this).find(t).size();
                });
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function() {
                var t = this[0];
                return t && !o(t) ? t : O(t);
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : O(t);
            },
            find: function(t) {
                var e = this;
                return t ? "object" == (void 0 === t ? "undefined" : i(t)) ? O(t).filter(function() {
                    var t = this;
                    return N.some.call(e, function(e) {
                        return O.contains(e, t);
                    });
                }) : 1 == this.length ? O(W.qsa(this[0], t)) : this.map(function() {
                    return W.qsa(this, t);
                }) : O();
            },
            closest: function(t, e) {
                var n = this[0], o = !1;
                for ("object" == (void 0 === t ? "undefined" : i(t)) && (o = O(t)); n && !(o ? o.indexOf(n) >= 0 : W.matches(n, t)); ) n = n !== e && !r(n) && n.parentNode;
                return O(n);
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0; ) n = O.map(n, function(t) {
                    return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                });
                return y(e, t);
            },
            parent: function(t) {
                return y(C(this.pluck("parentNode")), t);
            },
            children: function(t) {
                return y(this.map(function() {
                    return h(this);
                }), t);
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || L.call(this.childNodes);
                });
            },
            siblings: function(t) {
                return y(this.map(function(t, e) {
                    return M.call(h(e.parentNode), function(t) {
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
                return O.map(this, function(e) {
                    return e[t];
                });
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName));
                });
            },
            replaceWith: function(t) {
                return this.before(t).remove();
            },
            wrap: function(t) {
                var n = e(t);
                if (this[0] && !n) var i = O(t).get(0), r = i.parentNode || this.length > 1;
                return this.each(function(e) {
                    O(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i);
                });
            },
            wrapAll: function(t) {
                if (this[0]) {
                    O(this[0]).before(t = O(t));
                    for (var e; (e = t.children()).length; ) t = e.first();
                    O(t).append(this);
                }
                return this;
            },
            wrapInner: function(t) {
                var n = e(t);
                return this.each(function(e) {
                    var i = O(this), r = i.contents(), o = n ? t.call(this, e) : t;
                    r.length ? r.wrapAll(o) : i.append(o);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    O(this).replaceWith(O(this).children());
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
                    var e = O(this);
                    (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide();
                });
            },
            prev: function(t) {
                return O(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function(t) {
                return O(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    O(this).empty().append(v(this, t, e, n));
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
                return t = J[t] || t, 1 in arguments ? this.each(function(n) {
                    this[t] = v(this, e, n, this[t]);
                }) : this[0] && this[0][t];
            },
            data: function(t, e) {
                var n = "data-" + t.replace(/([A-Z])/g, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? x(i) : E;
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    this.value = v(this, t, e, this.value);
                }) : this[0] && (this[0].multiple ? O(this[0]).find("option").filter(function() {
                    return this.selected;
                }).pluck("value") : this[0].value);
            },
            offset: function(t) {
                if (t) return this.each(function(e) {
                    var n = O(this), i = v(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o);
                });
                if (!this.length) return null;
                if (!O.contains(I.documentElement, this[0])) return {
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
                    if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[P(e)] || i.getPropertyValue(e);
                    if (K(e)) {
                        var o = {};
                        return O.each(e, function(t, e) {
                            o[e] = r.style[P(e)] || i.getPropertyValue(e);
                        }), o;
                    }
                }
                var a = "";
                if ("string" == t(e)) n || 0 === n ? a = l(e) + ":" + d(e, n) : this.each(function() {
                    this.style.removeProperty(l(e));
                }); else for (T in e) e[T] || 0 === e[T] ? a += l(T) + ":" + d(T, e[T]) + ";" : this.each(function() {
                    this.style.removeProperty(l(T));
                });
                return this.each(function() {
                    this.style.cssText += ";" + a;
                });
            },
            index: function(t) {
                return t ? this.indexOf(O(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function(t) {
                return !!t && N.some.call(this, function(t) {
                    return this.test(b(t));
                }, f(t));
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        S = [];
                        var n = b(this);
                        v(this, t, e, n).split(/\s+/g).forEach(function(t) {
                            O(this).hasClass(t) || S.push(t);
                        }, this), S.length && b(this, n + (n ? " " : "") + S.join(" "));
                    }
                }) : this;
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === E) return b(this, "");
                        S = b(this), v(this, t, e, S).split(/\s+/g).forEach(function(t) {
                            S = S.replace(f(t), " ");
                        }), b(this, S.trim());
                    }
                });
            },
            toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var i = O(this);
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
                    return n.top -= parseFloat(O(t).css("margin-top")) || 0, n.left -= parseFloat(O(t).css("margin-left")) || 0, 
                    i.top += parseFloat(O(e[0]).css("border-top-width")) || 0, i.left += parseFloat(O(e[0]).css("border-left-width")) || 0, 
                    {
                        top: n.top - i.top,
                        left: n.left - i.left
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || I.body; t && !R.test(t.nodeName) && "static" == O(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            }
        }, O.fn.detach = O.fn.remove, [ "width", "height" ].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase();
            });
            O.fn[t] = function(i) {
                var o, a = this[0];
                return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                    a = O(this), a.css(t, v(this, i, e, a[t]()));
                });
            };
        }), z.forEach(function(e, n) {
            var i = n % 2;
            O.fn[e] = function() {
                var e, r, o = O.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : W.fragment(n);
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(t, e) {
                    r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                    var s = O.contains(I.documentElement, r);
                    o.forEach(function(t) {
                        if (a) t = t.cloneNode(!0); else if (!r) return O(t).remove();
                        r.insertBefore(t, e), s && j(t, function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                        });
                    });
                });
            }, O.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
                return O(t)[e](this), this;
            };
        }), W.Z.prototype = m.prototype = O.fn, W.uniq = C, W.deserializeValue = x, O.zepto = W, 
        O;
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
        function s(t, e, i, r, o) {
            var a = r.context;
            r.error.call(a, i, e, t), o && o.rejectWith(a, [ i, e, t ]), n(r, a, "ajaxError", [ i, r, t || e ]), 
            u(e, i, r);
        }
        function u(t, e, i) {
            var o = i.context;
            i.complete.call(o, e, t), n(i, o, "ajaxComplete", [ e, i ]), r(i);
        }
        function c() {}
        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == x ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text";
        }
        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function d(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), 
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), 
            e.data = void 0);
        }
        function p(e, n, i, r) {
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
            t.each(n, function(n, u) {
                o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), 
                !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? h(e, u, i, n) : e.add(n, u);
            });
        }
        var m, g, y = 0, v = window.document, w = /^(?:text|application)\/javascript/i, b = /^(?:text|application)\/xml/i, x = "application/json", j = "text/html", E = /^\s*$/, T = v.createElement("a");
        T.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++y, l = v.createElement("script"), f = window[c], d = function(e) {
                t(l).triggerHandler("error", e || "abort");
            }, p = {
                abort: d
            };
            return n && n.promise(p), t(l).on("load error", function(o, u) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, u || "error", p, e, n), 
                window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0;
            }), !1 === o(p, e) ? (d("abort"), p) : (window[c] = function() {
                i = arguments;
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), v.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                d("timeout");
            }, e.timeout)), p);
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest();
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: x,
                xml: "application/xml, text/xml",
                html: j,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var n, r, u = t.extend({}, e || {}), p = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
            i(u), u.crossDomain || (n = v.createElement("a"), n.href = u.url, n.href = n.href, 
            u.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), 
            (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), d(u);
            var h = u.dataType, y = /\?.+=\?/.test(u.url);
            if (y && (h = "jsonp"), !1 !== u.cache && (e && !0 === e.cache || "script" != h && "jsonp" != h) || (u.url = f(u.url, "_=" + Date.now())), 
            "jsonp" == h) return y || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), 
            t.ajaxJSONP(u, p);
            var w, b = u.accepts[h], x = {}, j = function(t, e) {
                x[t.toLowerCase()] = [ t, e ];
            }, O = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, S = u.xhr(), P = S.setRequestHeader;
            if (p && p.promise(S), u.crossDomain || j("X-Requested-With", "XMLHttpRequest"), 
            j("Accept", b || "*/*"), (b = u.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), 
            S.overrideMimeType && S.overrideMimeType(b)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && j("Content-Type", u.contentType || "application/x-www-form-urlencoded"), 
            u.headers) for (g in u.headers) j(g, u.headers[g]);
            if (S.setRequestHeader = j, S.onreadystatechange = function() {
                if (4 == S.readyState) {
                    S.onreadystatechange = c, clearTimeout(w);
                    var e, n = !1;
                    if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == O) {
                        h = h || l(u.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
                        try {
                            "script" == h ? (0, eval)(e) : "xml" == h ? e = S.responseXML : "json" == h && (e = E.test(e) ? null : t.parseJSON(e));
                        } catch (t) {
                            n = t;
                        }
                        n ? s(n, "parsererror", S, u, p) : a(e, S, u, p);
                    } else s(S.statusText || null, S.status ? "error" : "abort", S, u, p);
                }
            }, !1 === o(S, u)) return S.abort(), s(null, "abort", S, u, p), S;
            if (u.xhrFields) for (g in u.xhrFields) S[g] = u.xhrFields[g];
            var C = !("async" in u) || u.async;
            S.open(u.type, u.url, C, u.username, u.password);
            for (g in x) P.apply(S, x[g]);
            return u.timeout > 0 && (w = setTimeout(function() {
                S.onreadystatechange = c, S.abort(), s(null, "timeout", S, u, p);
            }, u.timeout)), S.send(u.data ? u.data : null), S;
        }, t.get = function() {
            return t.ajax(p.apply(null, arguments));
        }, t.post = function() {
            var e = p.apply(null, arguments);
            return e.type = "POST", t.ajax(e);
        }, t.getJSON = function() {
            var e = p.apply(null, arguments);
            return e.dataType = "json", t.ajax(e);
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var r, o = this, a = e.split(/\s/), s = p(e, n, i), u = s.success;
            return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(e) {
                o.html(r ? t("<div>").html(e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")).find(r) : e), 
                u && u.apply(o, arguments);
            }, t.ajax(s), this;
        };
        var O = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(O(e) + "=" + O(n));
            }, h(i, e, n), i.join("&").replace(/%20/g, "+");
        };
    }(r), function(t) {
        function e(t) {
            return t._zid || (t._zid = d++);
        }
        function n(t, n, o, a) {
            if (n = i(n), n.ns) var s = r(n.ns);
            return (g[e(t)] || []).filter(function(t) {
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
        function s(n, r, s, u, l, d, p) {
            var h = e(n), m = g[h] || (g[h] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(s);
                var r = i(e);
                r.fn = s, r.sel = l, r.e in b && (s = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0;
                }), r.del = d;
                var h = d || s;
                r.proxy = function(t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = h.apply(n, t._args == f ? [ t ] : [ t ].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p));
            });
        }
        function u(t, i, r, s, u) {
            var c = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, s).forEach(function(e) {
                    delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u));
                });
            });
        }
        function c(e, n) {
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
            return c(n, t);
        }
        var f, d = 1, p = Array.prototype.slice, h = t.isFunction, m = function(t) {
            return "string" == typeof t;
        }, g = {}, y = {}, v = "onfocusin" in window, w = {
            focus: "focusin",
            blur: "focusout"
        }, b = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: u
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && p.call(arguments, 2);
            if (h(n)) {
                var o = function() {
                    return n.apply(i, r ? r.concat(p.call(arguments)) : arguments);
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
            var a, c, d = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                d.on(t, n, i, e, o);
            }), d) : (m(n) || h(r) || !1 === r || (r = i, i = n, n = f), (r === f || !1 === i) && (r = i, 
            i = f), !1 === r && (r = j), d.each(function(f, d) {
                o && (a = function(t) {
                    return u(d, t.type, r), r.apply(this, arguments);
                }), n && (c = function(e) {
                    var i, o = t(e.target).closest(n, d).get(0);
                    return o && o !== d ? (i = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: d
                    }), (a || r).apply(o, [ i ].concat(p.call(arguments, 1)))) : void 0;
                }), s(d, e, r, i, n, c || a);
            }));
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e);
            }), r) : (m(n) || h(i) || !1 === i || (i = n, n = f), !1 === i && (i = j), r.each(function() {
                u(this, e, i, n);
            }));
        }, t.fn.trigger = function(e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
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
            var n = document.createEvent(y[t] || "Events"), i = !0;
            if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), c(n);
        };
    }(r), function(t, e) {
        function n(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
        }
        function r(t) {
            return o ? o + t : t.toLowerCase();
        }
        var o, a, s, u, c, l, f, d, p, h, m = "", g = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, y = document.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, w = {};
        t.each(g, function(t, n) {
            return y.style[t + "TransitionProperty"] !== e ? (m = "-" + t.toLowerCase() + "-", 
            o = n, !1) : void 0;
        }), a = m + "transform", w[s = m + "transition-property"] = w[u = m + "transition-duration"] = w[l = m + "transition-delay"] = w[c = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[d = m + "animation-duration"] = w[h = m + "animation-delay"] = w[p = m + "animation-timing-function"] = "", 
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
            var b, x, j, E = {}, T = "", O = this, S = t.fx.transitionEnd, P = !1;
            if (o === e && (o = t.fx.speeds._default / 1e3), y === e && (y = 0), t.fx.off && (o = 0), 
            "string" == typeof r) E[f] = r, E[d] = o + "s", E[h] = y + "s", E[p] = m || "linear", 
            S = t.fx.animationEnd; else {
                x = [];
                for (b in r) v.test(b) ? T += b + "(" + r[b] + ") " : (E[b] = r[b], x.push(n(b)));
                T && (E[a] = T, x.push(a)), o > 0 && "object" == (void 0 === r ? "undefined" : i(r)) && (E[s] = x.join(", "), 
                E[u] = o + "s", E[l] = y + "s", E[c] = m || "linear");
            }
            return j = function(e) {
                if (void 0 !== e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(S, j);
                } else t(this).unbind(S, j);
                P = !0, t(this).css(w), g && g.call(this);
            }, o > 0 && (this.bind(S, j), setTimeout(function() {
                P || j.call(O);
            }, 1e3 * (o + y) + 25)), this.size() && this.get(0).clientLeft, this.css(E), 0 >= o && setTimeout(function() {
                O.each(function() {
                    j.call(this);
                });
            }, 0), this;
        }, y = null;
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
        }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), u = /^\s*>/, c = "Zepto" + +new Date();
        i.qsa = function(e, o) {
            return n(o, function(n, a, s) {
                try {
                    var l;
                    !n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
                    var f = r(e, n);
                } catch (t) {
                    throw console.error("error performing selector: %o", o), t;
                } finally {
                    l && l.removeClass(c);
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
            l = null, d.last && (d.el.trigger("longTap"), d = {});
        }
        function i() {
            l && clearTimeout(l), l = null;
        }
        function r() {
            s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), 
            s = u = c = l = null, d = {};
        }
        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
        }
        function a(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
        }
        var s, u, c, l, f, d = {};
        t(document).ready(function() {
            var p, h, m, g, y = 0, v = 0;
            "MSGesture" in window && (f = new MSGesture(), f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (d.el.trigger("swipe"), d.el.trigger("swipe" + e));
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                (!(g = a(e, "down")) || o(e)) && (m = g ? e : e.touches[0], e.touches && 1 === e.touches.length && d.x2 && (d.x2 = void 0, 
                d.y2 = void 0), p = Date.now(), h = p - (d.last || p), d.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                s && clearTimeout(s), d.x1 = m.pageX, d.y1 = m.pageY, h > 0 && 250 >= h && (d.isDoubleTap = !0), 
                d.last = p, l = setTimeout(n, 750), f && g && f.addPointer(e.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(g = a(t, "move")) || o(t)) && (m = g ? t : t.touches[0], i(), d.x2 = m.pageX, 
                d.y2 = m.pageY, y += Math.abs(d.x1 - d.x2), v += Math.abs(d.y1 - d.y2));
            }).on("touchend MSPointerUp pointerup", function(n) {
                (!(g = a(n, "up")) || o(n)) && (i(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? c = setTimeout(function() {
                    d.el.trigger("swipe"), d.el.trigger("swipe" + e(d.x1, d.x2, d.y1, d.y2)), d = {};
                }, 0) : "last" in d && (30 > y && 30 > v ? u = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = r, d.el.trigger(e), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), 
                    d = {}) : s = setTimeout(function() {
                        s = null, d.el && d.el.trigger("singleTap"), d = {};
                    }, 250);
                }, 0) : d = {}), y = v = 0);
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
    n(7), n(6), n(5);
    var o = n(0), a = i(o), s = n(2), u = i(s), c = n(1), l = i(c), f = n(4), d = i(f), p = n(3), h = i(p);
    !function() {
        var t = (new a.default(document, window), new u.default()), e = new l.default(), n = new h.default(), i = new d.default(), n = new h.default(), o = document.getElementsByTagName("body")[0], s = document.getElementsByClassName("botton"), c = t.from || t.qd || 600284, f = t.opena, p = t.backload, m = t.touch, g = new Date(), y = g.getTime(), v = t.tit, w = t.cp, b = "//sptd.youyuan.com/apk/download/" + c + "/YouYuan_" + c + ".apk";
        if (function() {
            var t, e = {
                fjya: "images/title-fjya.png",
                lywb: "images/title-lywb.png",
                fjjy: "images/title-fjjy.png"
            }, n = (t = {
                fjya: "附近约爱",
                lywb: "来约我吧",
                fjjy: "附近交友",
                bdya: "本地约爱",
                tcya: "同城约爱",
                mhl: "梦婚礼-婚礼必备",
                dsjy: "单身交友"
            }, r(t, "lywb", "来约我吧"), r(t, "mw", "喵呜"), r(t, "tcjyyh", "同城交友约会"), r(t, "tcmy", "同城秒约"), 
            r(t, "tcoy", "同城偶遇"), r(t, "tcrn", "同城热恋"), r(t, "tcsp", "同城速配"), r(t, "tesy", "同城速约"), 
            r(t, "yhb", "约会吧"), r(t, "yyw", "有缘网"), r(t, "zxsp", "在线速配"), r(t, "tcdsyh", "同城单身约会"), 
            r(t, "tcnxjy", "同城两性交友"), t), i = {
                yyzx: "北京友缘在线网络科技股份有限公司",
                yb: "北京缘博网络科技有限公司",
                zy: "天津追缘无线科技有限公司",
                jsy: "北京聚生缘网络科技有限公司"
            };
            v && "" != v && (document.querySelector("title").innerHTML = n[v], document.querySelector(".title").src = e[v]), 
            w && "" != w && (document.querySelector(".compay").innerHTML = i[w]);
        }(), e.pcFlag) {
            i({
                tjtype: "page-load",
                tjuid: "ldy-20171115",
                tjtag: "page-load",
                fromId: c,
                equipment: "pc"
            });
            for (var x = 0; x < s.length; x++) s[x].addEventListener("click", function() {
                i({
                    tjtype: "page-click",
                    tjuid: "ldy-20171115",
                    tjtag: "page-click",
                    fromId: c,
                    equipment: "pc"
                }), location.href = b, i({
                    tjtype: "page-click-apk",
                    tjuid: "ldy-20171115",
                    tjtag: "page-click-apk",
                    fromId: c,
                    equipment: "pc"
                });
            });
        } else $(".btn").css("z-index", "0"), i({
            tjtype: "page-load",
            tjuid: "ldy-20171115",
            tjtag: "page-load",
            fromId: c,
            equipment: "mobile"
        }), m ? o.addEventListener("touchstart", function() {
            i({
                tjtype: "page-click",
                tjuid: "ldy-20171115",
                tjtag: "page-click",
                fromId: c,
                equipment: "mobile"
            }), location.href = b, i({
                tjtype: "page-click-apk",
                tjuid: "ldy-20171115",
                tjtag: "page-click-apk",
                fromId: c,
                equipment: "mobile"
            });
        }) : o.addEventListener("click", function() {
            i({
                tjtype: "page-click",
                tjuid: "ldy-20171115",
                tjtag: "page-click",
                fromId: c,
                equipment: "mobile"
            }), location.href = b, i({
                tjtype: "page-click-apk",
                tjuid: "ldy-20171115",
                tjtag: "page-click-apk",
                fromId: c,
                equipment: "mobile"
            });
        }), f && (console.log("当前城市：" + n.Isp), n.Isp.indexOf("北京") > -1 || (i({
            tjtype: "page-auto-download",
            tjuid: "ldy-20171115",
            tjtag: "page-auto-download",
            fromId: c,
            equipment: "mobile"
        }), location.href = b, i({
            tjtype: "page-auto-download-apk",
            tjuid: "ldy-20171115",
            tjtag: "page-auto-download-apk",
            fromId: c,
            equipment: "mobile"
        }))), p && (console.log("当前城市：" + n.Isp), n.Isp.indexOf("北京") > -1 || (history.pushState(null, null, document.URL), 
        window.addEventListener("popstate", function() {
            var t = new Date(), e = t.getTime(), n = parseInt((e - y) / 1e3);
            i({
                tjtype: "page-back",
                tjuid: "ldy-20171115",
                tjtag: "page-auto-download",
                fromId: c,
                equipment: "mobile",
                staytime: n
            }), location.href = b;
        })));
    }();
} ]);