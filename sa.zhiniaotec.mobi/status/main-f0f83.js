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
    }, e.p = "", e(e.s = 4);
}([ function(t, e, n) {
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
            return null == t ? String(t) : H[J.call(t)] || "object";
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
            return t.length > 0 ? S.fn.concat.apply([], t) : t;
        }
        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function f(t) {
            return t in $ ? $[t] : $[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
        }
        function h(t, e) {
            return "number" != typeof e || _[l(t)] ? e : e + "px";
        }
        function p(t) {
            var e, n;
            return A[t] || (e = L.createElement(t), L.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), 
            e.parentNode.removeChild(e), "none" == n && (n = "block"), A[t] = n), A[t];
        }
        function d(t) {
            return "children" in t ? D.call(t.children) : S.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0;
            });
        }
        function m(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || "";
        }
        function y(t, e, n) {
            for (T in e) n && (a(e[T]) || tt(e[T])) ? (a(e[T]) && !a(t[T]) && (t[T] = {}), tt(e[T]) && !tt(t[T]) && (t[T] = []), 
            y(t[T], e[T], n)) : e[T] !== j && (t[T] = e[T]);
        }
        function v(t, e) {
            return null == e ? S(t) : S(t).filter(e);
        }
        function g(t, n, i, r) {
            return e(n) ? n.call(t, i, r) : n;
        }
        function w(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
        }
        function x(t, e) {
            var n = t.className || "", i = n && n.baseVal !== j;
            return e === j ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e);
        }
        function b(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t;
            } catch (e) {
                return t;
            }
        }
        function E(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) E(t.childNodes[n], e);
        }
        var j, T, S, C, P, N, O = [], k = O.concat, M = O.filter, D = O.slice, L = window.document, A = {}, $ = {}, _ = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, q = /^\s*<(\w+|!)[^>]*>/, R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, I = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, F = /^(?:body|html)$/i, V = /([A-Z])/g, Z = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], z = [ "after", "prepend", "before", "append" ], Y = L.createElement("table"), B = L.createElement("tr"), G = {
            tr: L.createElement("tbody"),
            tbody: Y,
            thead: Y,
            tfoot: Y,
            td: B,
            th: B,
            "*": L.createElement("div")
        }, U = /complete|loaded|interactive/, X = /^[\w-]*$/, H = {}, J = H.toString, W = {}, K = L.createElement("div"), Q = {
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
        return W.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode, o = !r;
            return o && (r = K).appendChild(t), i = ~W.qsa(r, e).indexOf(t), o && K.removeChild(t), 
            i;
        }, P = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }, N = function(t) {
            return M.call(t, function(e, n) {
                return t.indexOf(e) == n;
            });
        }, W.fragment = function(t, e, n) {
            var i, r, o;
            return R.test(t) && (i = S(L.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(I, "<$1></$2>")), 
            e === j && (e = q.test(t) && RegExp.$1), e in G || (e = "*"), o = G[e], o.innerHTML = "" + t, 
            i = S.each(D.call(o.childNodes), function() {
                o.removeChild(this);
            })), a(n) && (r = S(i), S.each(n, function(t, e) {
                Z.indexOf(t) > -1 ? r[t](e) : r.attr(t, e);
            })), i;
        }, W.Z = function(t, e) {
            return new m(t, e);
        }, W.isZ = function(t) {
            return t instanceof W.Z;
        }, W.init = function(t, n) {
            var i;
            if (!t) return W.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && q.test(t)) i = W.fragment(t, RegExp.$1, n), 
            t = null; else {
                if (n !== j) return S(n).find(t);
                i = W.qsa(L, t);
            } else {
                if (e(t)) return S(L).ready(t);
                if (W.isZ(t)) return t;
                if (tt(t)) i = u(t); else if (o(t)) i = [ t ], t = null; else if (q.test(t)) i = W.fragment(t.trim(), RegExp.$1, n), 
                t = null; else {
                    if (n !== j) return S(n).find(t);
                    i = W.qsa(L, t);
                }
            }
            return W.Z(i, t);
        }, S = function(t, e) {
            return W.init(t, e);
        }, S.extend = function(t) {
            var e, n = D.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                y(t, n, e);
            }), t;
        }, W.qsa = function(t, e) {
            var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = X.test(o);
            return t.getElementById && a && i ? (n = t.getElementById(o)) ? [ n ] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
        }, S.contains = L.documentElement.contains ? function(t, e) {
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
            return O.indexOf.call(e, t, n);
        }, S.camelCase = P, S.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function() {}, S.map = function(t, e) {
            var n, i, r, o = [];
            if (s(t)) for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && o.push(n); else for (r in t) null != (n = e(t[r], r)) && o.push(n);
            return c(o);
        }, S.each = function(t, e) {
            var n, i;
            if (s(t)) {
                for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (i in t) if (!1 === e.call(t[i], i, t[i])) return t;
            return t;
        }, S.grep = function(t, e) {
            return M.call(t, e);
        }, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            H["[object " + e + "]"] = e.toLowerCase();
        }), S.fn = {
            constructor: W.Z,
            length: 0,
            forEach: O.forEach,
            reduce: O.reduce,
            push: O.push,
            sort: O.sort,
            splice: O.splice,
            indexOf: O.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = W.isZ(e) ? e.toArray() : e;
                return k.apply(W.isZ(this) ? this.toArray() : this, n);
            },
            map: function(t) {
                return S(S.map(this, function(e, n) {
                    return t.call(e, n, e);
                }));
            },
            slice: function() {
                return S(D.apply(this, arguments));
            },
            ready: function(t) {
                return U.test(L.readyState) && L.body ? t(S) : L.addEventListener("DOMContentLoaded", function() {
                    t(S);
                }, !1), this;
            },
            get: function(t) {
                return t === j ? D.call(this) : this[t >= 0 ? t : t + this.length];
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
                return O.every.call(this, function(e, n) {
                    return !1 !== t.call(e, n, e);
                }), this;
            },
            filter: function(t) {
                return e(t) ? this.not(this.not(t)) : S(M.call(this, function(e) {
                    return W.matches(e, t);
                }));
            },
            add: function(t, e) {
                return S(N(this.concat(S(t, e))));
            },
            is: function(t) {
                return this.length > 0 && W.matches(this[0], t);
            },
            not: function(t) {
                var n = [];
                if (e(t) && t.call !== j) this.each(function(e) {
                    t.call(this, e) || n.push(this);
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? D.call(t) : S(t);
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
                    return O.some.call(e, function(e) {
                        return S.contains(e, t);
                    });
                }) : 1 == this.length ? S(W.qsa(this[0], t)) : this.map(function() {
                    return W.qsa(this, t);
                }) : S();
            },
            closest: function(t, e) {
                var n = this[0], o = !1;
                for ("object" == (void 0 === t ? "undefined" : i(t)) && (o = S(t)); n && !(o ? o.indexOf(n) >= 0 : W.matches(n, t)); ) n = n !== e && !r(n) && n.parentNode;
                return S(n);
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0; ) n = S.map(n, function(t) {
                    return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                });
                return v(e, t);
            },
            parent: function(t) {
                return v(N(this.pluck("parentNode")), t);
            },
            children: function(t) {
                return v(this.map(function() {
                    return d(this);
                }), t);
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || D.call(this.childNodes);
                });
            },
            siblings: function(t) {
                return v(this.map(function(t, e) {
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
                return S.map(this, function(e) {
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
                    (t === j ? "none" == e.css("display") : t) ? e.show() : e.hide();
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
                    S(this).empty().append(g(this, t, e, n));
                }) : 0 in this ? this[0].innerHTML : null;
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = g(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n;
                }) : 0 in this ? this[0].textContent : null;
            },
            attr: function(t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType) if (o(t)) for (T in t) w(this, T, t[T]); else w(this, t, g(this, e, n, this.getAttribute(t)));
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : j;
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
                    this[t] = g(this, e, n, this[t]);
                }) : this[0] && this[0][t];
            },
            data: function(t, e) {
                var n = "data-" + t.replace(V, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== i ? b(i) : j;
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    this.value = g(this, t, e, this.value);
                }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
                    return this.selected;
                }).pluck("value") : this[0].value);
            },
            offset: function(t) {
                if (t) return this.each(function(e) {
                    var n = S(this), i = g(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o);
                });
                if (!this.length) return null;
                if (!S.contains(L.documentElement, this[0])) return {
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
                    if (tt(e)) {
                        var o = {};
                        return S.each(e, function(t, e) {
                            o[e] = r.style[P(e)] || i.getPropertyValue(e);
                        }), o;
                    }
                }
                var a = "";
                if ("string" == t(e)) n || 0 === n ? a = l(e) + ":" + h(e, n) : this.each(function() {
                    this.style.removeProperty(l(e));
                }); else for (T in e) e[T] || 0 === e[T] ? a += l(T) + ":" + h(T, e[T]) + ";" : this.each(function() {
                    this.style.removeProperty(l(T));
                });
                return this.each(function() {
                    this.style.cssText += ";" + a;
                });
            },
            index: function(t) {
                return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function(t) {
                return !!t && O.some.call(this, function(t) {
                    return this.test(x(t));
                }, f(t));
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        C = [];
                        var n = x(this);
                        g(this, t, e, n).split(/\s+/g).forEach(function(t) {
                            S(this).hasClass(t) || C.push(t);
                        }, this), C.length && x(this, n + (n ? " " : "") + C.join(" "));
                    }
                }) : this;
            },
            removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === j) return x(this, "");
                        C = x(this), g(this, t, e, C).split(/\s+/g).forEach(function(t) {
                            C = C.replace(f(t), " ");
                        }), x(this, C.trim());
                    }
                });
            },
            toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var i = S(this);
                    g(this, t, n, x(this)).split(/\s+/g).forEach(function(t) {
                        (e === j ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t);
                    });
                }) : this;
            },
            scrollTop: function(t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === j ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                        this.scrollTop = t;
                    } : function() {
                        this.scrollTo(this.scrollX, t);
                    });
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === j ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                        this.scrollLeft = t;
                    } : function() {
                        this.scrollTo(t, this.scrollY);
                    });
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(), i = F.test(e[0].nodeName) ? {
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
                    for (var t = this.offsetParent || L.body; t && !F.test(t.nodeName) && "static" == S(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            }
        }, S.fn.detach = S.fn.remove, [ "width", "height" ].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase();
            });
            S.fn[t] = function(i) {
                var o, a = this[0];
                return i === j ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                    a = S(this), a.css(t, g(this, i, e, a[t]()));
                });
            };
        }), z.forEach(function(e, n) {
            var i = n % 2;
            S.fn[e] = function() {
                var e, r, o = S.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : W.fragment(n);
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(t, e) {
                    r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                    var s = S.contains(L.documentElement, r);
                    o.forEach(function(t) {
                        if (a) t = t.cloneNode(!0); else if (!r) return S(t).remove();
                        r.insertBefore(t, e), s && E(t, function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                        });
                    });
                });
            }, S.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
                return S(t)[e](this), this;
            };
        }), W.Z.prototype = m.prototype = S.fn, W.uniq = N, W.deserializeValue = b, S.zepto = W, 
        S;
    }();
    window.Zepto = r, void 0 === window.$ && (window.$ = r), function(t) {
        function e(e, n, i) {
            var r = t.Event(n);
            return t(e).trigger(r, i), !r.isDefaultPrevented();
        }
        function n(t, n, i, r) {
            return t.global ? e(n || g, i, r) : void 0;
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
            return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == E ? "json" : x.test(t) ? "script" : b.test(t) && "xml") || "text";
        }
        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function h(e) {
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
        function d(e, n, i, r) {
            var o, a = t.isArray(n), s = t.isPlainObject(n);
            t.each(n, function(n, u) {
                o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), 
                !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u);
            });
        }
        var m, y, v = 0, g = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, x = /^(?:text|application)\/javascript/i, b = /^(?:text|application)\/xml/i, E = "application/json", j = "text/html", T = /^\s*$/, S = g.createElement("a");
        S.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v, l = g.createElement("script"), f = window[c], h = function(e) {
                t(l).triggerHandler("error", e || "abort");
            }, p = {
                abort: h
            };
            return n && n.promise(p), t(l).on("load error", function(o, u) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, u || "error", p, e, n), 
                window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0;
            }), !1 === o(p, e) ? (h("abort"), p) : (window[c] = function() {
                i = arguments;
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), g.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                h("timeout");
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
                json: E,
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
            i(u), u.crossDomain || (n = g.createElement("a"), n.href = u.url, n.href = n.href, 
            u.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), 
            (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), h(u);
            var d = u.dataType, v = /\?.+=\?/.test(u.url);
            if (v && (d = "jsonp"), !1 !== u.cache && (e && !0 === e.cache || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), 
            "jsonp" == d) return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), 
            t.ajaxJSONP(u, p);
            var w, x = u.accepts[d], b = {}, E = function(t, e) {
                b[t.toLowerCase()] = [ t, e ];
            }, j = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, C = u.xhr(), P = C.setRequestHeader;
            if (p && p.promise(C), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), 
            E("Accept", x || "*/*"), (x = u.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), 
            C.overrideMimeType && C.overrideMimeType(x)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), 
            u.headers) for (y in u.headers) E(y, u.headers[y]);
            if (C.setRequestHeader = E, C.onreadystatechange = function() {
                if (4 == C.readyState) {
                    C.onreadystatechange = c, clearTimeout(w);
                    var e, n = !1;
                    if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == j) {
                        d = d || l(u.mimeType || C.getResponseHeader("content-type")), e = C.responseText;
                        try {
                            "script" == d ? (0, eval)(e) : "xml" == d ? e = C.responseXML : "json" == d && (e = T.test(e) ? null : t.parseJSON(e));
                        } catch (t) {
                            n = t;
                        }
                        n ? s(n, "parsererror", C, u, p) : a(e, C, u, p);
                    } else s(C.statusText || null, C.status ? "error" : "abort", C, u, p);
                }
            }, !1 === o(C, u)) return C.abort(), s(null, "abort", C, u, p), C;
            if (u.xhrFields) for (y in u.xhrFields) C[y] = u.xhrFields[y];
            var N = !("async" in u) || u.async;
            C.open(u.type, u.url, N, u.username, u.password);
            for (y in b) P.apply(C, b[y]);
            return u.timeout > 0 && (w = setTimeout(function() {
                C.onreadystatechange = c, C.abort(), s(null, "timeout", C, u, p);
            }, u.timeout)), C.send(u.data ? u.data : null), C;
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
                o.html(r ? t("<div>").html(e.replace(w, "")).find(r) : e), u && u.apply(o, arguments);
            }, t.ajax(s), this;
        };
        var C = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n));
            }, d(i, e, n), i.join("&").replace(/%20/g, "+");
        };
    }(r), function(t) {
        function e(t) {
            return t._zid || (t._zid = h++);
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
            return t.del && !g && t.e in w || !!e;
        }
        function a(t) {
            return x[t] || g && w[t] || t;
        }
        function s(n, r, s, u, l, h, p) {
            var d = e(n), m = y[d] || (y[d] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(s);
                var r = i(e);
                r.fn = s, r.sel = l, r.e in x && (s = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0;
                }), r.del = h;
                var d = h || s;
                r.proxy = function(t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == f ? [ t ] : [ t ].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p));
            });
        }
        function u(t, i, r, s, u) {
            var c = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, s).forEach(function(e) {
                    delete y[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u));
                });
            });
        }
        function c(e, n) {
            return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(T, function(t, i) {
                var r = n[t];
                e[t] = function() {
                    return this[i] = b, r && r.apply(n, arguments);
                }, e[i] = E;
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), 
            e;
        }
        function l(t) {
            var e, n = {
                originalEvent: t
            };
            for (e in t) j.test(e) || t[e] === f || (n[e] = t[e]);
            return c(n, t);
        }
        var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function(t) {
            return "string" == typeof t;
        }, y = {}, v = {}, g = "onfocusin" in window, w = {
            focus: "focusin",
            blur: "focusout"
        }, x = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: u
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && p.call(arguments, 2);
            if (d(n)) {
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
        var b = function() {
            return !0;
        }, E = function() {
            return !1;
        }, j = /^([A-Z]|returnValue$|layer[XY]$)/, T = {
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
            var a, c, h = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                h.on(t, n, i, e, o);
            }), h) : (m(n) || d(r) || !1 === r || (r = i, i = n, n = f), (r === f || !1 === i) && (r = i, 
            i = f), !1 === r && (r = E), h.each(function(f, h) {
                o && (a = function(t) {
                    return u(h, t.type, r), r.apply(this, arguments);
                }), n && (c = function(e) {
                    var i, o = t(e.target).closest(n, h).get(0);
                    return o && o !== h ? (i = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: h
                    }), (a || r).apply(o, [ i ].concat(p.call(arguments, 1)))) : void 0;
                }), s(h, e, r, i, n, c || a);
            }));
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e);
            }), r) : (m(n) || d(i) || !1 === i || (i = n, n = f), !1 === i && (i = E), r.each(function() {
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
            var n = document.createEvent(v[t] || "Events"), i = !0;
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
        var o, a, s, u, c, l, f, h, p, d, m = "", y = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, v = document.createElement("div"), g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, w = {};
        t.each(y, function(t, n) {
            return v.style[t + "TransitionProperty"] !== e ? (m = "-" + t.toLowerCase() + "-", 
            o = n, !1) : void 0;
        }), a = m + "transform", w[s = m + "transition-property"] = w[u = m + "transition-duration"] = w[l = m + "transition-delay"] = w[c = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[h = m + "animation-duration"] = w[d = m + "animation-delay"] = w[p = m + "animation-timing-function"] = "", 
        t.fx = {
            off: o === e && v.style.transitionProperty === e,
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
        }, t.fn.anim = function(r, o, m, y, v) {
            var x, b, E, j = {}, T = "", S = this, C = t.fx.transitionEnd, P = !1;
            if (o === e && (o = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (o = 0), 
            "string" == typeof r) j[f] = r, j[h] = o + "s", j[d] = v + "s", j[p] = m || "linear", 
            C = t.fx.animationEnd; else {
                b = [];
                for (x in r) g.test(x) ? T += x + "(" + r[x] + ") " : (j[x] = r[x], b.push(n(x)));
                T && (j[a] = T, b.push(a)), o > 0 && "object" == (void 0 === r ? "undefined" : i(r)) && (j[s] = b.join(", "), 
                j[u] = o + "s", j[l] = v + "s", j[c] = m || "linear");
            }
            return E = function(e) {
                if (void 0 !== e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(C, E);
                } else t(this).unbind(C, E);
                P = !0, t(this).css(w), y && y.call(this);
            }, o > 0 && (this.bind(C, E), setTimeout(function() {
                P || E.call(S);
            }, 1e3 * (o + v) + 25)), this.size() && this.get(0).clientLeft, this.css(j), 0 >= o && setTimeout(function() {
                S.each(function() {
                    E.call(this);
                });
            }, 0), this;
        }, v = null;
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
            l = null, h.last && (h.el.trigger("longTap"), h = {});
        }
        function i() {
            l && clearTimeout(l), l = null;
        }
        function r() {
            s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), 
            s = u = c = l = null, h = {};
        }
        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
        }
        function a(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
        }
        var s, u, c, l, f, h = {};
        t(document).ready(function() {
            var p, d, m, y, v = 0, g = 0;
            "MSGesture" in window && (f = new MSGesture(), f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e));
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                (!(y = a(e, "down")) || o(e)) && (m = y ? e : e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, 
                h.y2 = void 0), p = Date.now(), d = p - (h.last || p), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                s && clearTimeout(s), h.x1 = m.pageX, h.y1 = m.pageY, d > 0 && 250 >= d && (h.isDoubleTap = !0), 
                h.last = p, l = setTimeout(n, 750), f && y && f.addPointer(e.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(y = a(t, "move")) || o(t)) && (m = y ? t : t.touches[0], i(), h.x2 = m.pageX, 
                h.y2 = m.pageY, v += Math.abs(h.x1 - h.x2), g += Math.abs(h.y1 - h.y2));
            }).on("touchend MSPointerUp pointerup", function(n) {
                (!(y = a(n, "up")) || o(n)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function() {
                    h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {};
                }, 0) : "last" in h && (30 > v && 30 > g ? u = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = r, h.el.trigger(e), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), 
                    h = {}) : s = setTimeout(function() {
                        s = null, h.el && h.el.trigger("singleTap"), h = {};
                    }, 250);
                }, 0) : h = {}), v = g = 0);
            }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r);
        }), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(e) {
            t.fn[e] = function(t) {
                return this.on(e, t);
            };
        });
    }(r);
}, function(t, e) {}, function(t, e) {}, function(t, e, n) {
    "use strict";
    n(2), n(3), n(1);
    var i = n(0), r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }(i);
    !function(t) {
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
        e.Initial();
        var n = e.GetValue("from") || e.GetValue("qd") || e.GetValue("channelyy") || 66223, i = e.GetValue("ut"), o = (e.GetValue("autoLoad"), 
        e.GetValue("dj") || "body"), a = (e.GetValue("time"), e.GetValue("cpxx"));
        3091012 == n ? n = 3091018 : 3091012 == n ? n = 3091018 : 3091012 == n ? n = 3091018 : 3091012 == n && (n = 3091012);
        var s = "https://app.jzhrh.com/mj502006921.apk";
        "sp" == i && (s = "https://app.jzhrh.com/mj502006921.apk"), 
        "yobolove" == i && (s = "https://app.jzhrh.com/mj502006921.apk"), 
        "yoboloveSp" == i && (s = "https://app.jzhrh.com/mj502006921.apk"), 
        "lrxq" == i && (s = "https://app.jzhrh.com/mj502006921.apk");
        var u = document.querySelector("body"), c = (document.querySelector("html"), document.querySelector(".debox")), l = document.getElementById("close"), f = document.getElementById("down"), h = document.querySelector(".company"), p = new r.default();
        p({
            tjtype: "window-onload",
            tjuid: "tj",
            tjtag: "page-load"
        });
        var d = 0;
        "body" == o && (u.onclick = function(t) {
            c.style.display = "block", f.onclick = function(e) {
                e.preventDefault(), e.stopPropagation(), c.style.display = "none", location.href = s, 
                setTimeout(function() {
                    p({
                        tjtype: "window-click-body",
                        tjuid: "tj",
                        tjtag: "page-click-body",
                        x: t.clientX,
                        y: t.clientY,
                        clickI: ++d
                    });
                }, 300);
            };
        }), l.onclick = function(t) {
            t.preventDefault(), t.stopPropagation(), c.style.display = "none";
        }, a && "yyzx" == a && (h.style.display = "block");
    }(window);
} ]);