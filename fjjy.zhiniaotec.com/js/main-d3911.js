!function(t) {
    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    var e = {};
    n.m = t, n.c = e, n.i = function(t) {
        return t;
    }, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
    }, n.p = "", n(n.s = 5);
}([ function(t, n, e) {
    "use strict";
    function i() {
        var t = !1, n = !1, e = !1, i = {
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
        return i.versions.ios || i.versions.iPhone || i.versions.iPad ? t = !0 : i.versions.android ? n = !0 : e = !0, 
        {
            iosFlag: t,
            androidFlag: n,
            pcFlag: e
        };
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = i;
}, function(t, n, e) {
    "use strict";
    function i(t) {
        var n = {
            data: {},
            Initial: function() {
                var t, n, e = location.search;
                e = e.substr(1, e.length), t = e.split("&");
                for (var i = 0; i < t.length; i++) n = t[i].split("="), this.data[n[0]] = n[1];
            },
            GetValue: function(t) {
                return n.data[t];
            }
        };
        return n.Initial(), n.data;
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = i;
}, function(t, n, e) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, r = function() {
        function t(t) {
            return null == t ? String(t) : W[G.call(t)] || "object";
        }
        function n(n) {
            return "function" == t(n);
        }
        function e(t) {
            return null != t && t == t.window;
        }
        function r(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE;
        }
        function o(n) {
            return "object" == t(n);
        }
        function a(t) {
            return o(t) && !e(t) && Object.getPrototypeOf(t) == Object.prototype;
        }
        function s(t) {
            return "number" == typeof t.length;
        }
        function u(t) {
            return $.call(t, function(t) {
                return null != t;
            });
        }
        function c(t) {
            return t.length > 0 ? P.fn.concat.apply([], t) : t;
        }
        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function f(t) {
            return t in A ? A[t] : A[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
        }
        function h(t, n) {
            return "number" != typeof n || D[l(t)] ? n : n + "px";
        }
        function p(t) {
            var n, e;
            return L[t] || (n = M.createElement(t), M.body.appendChild(n), e = getComputedStyle(n, "").getPropertyValue("display"), 
            n.parentNode.removeChild(n), "none" == e && (e = "block"), L[t] = e), L[t];
        }
        function d(t) {
            return "children" in t ? _.call(t.children) : P.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0;
            });
        }
        function m(t, n) {
            var e, i = t ? t.length : 0;
            for (e = 0; i > e; e++) this[e] = t[e];
            this.length = i, this.selector = n || "";
        }
        function y(t, n, e) {
            for (j in n) e && (a(n[j]) || tt(n[j])) ? (a(n[j]) && !a(t[j]) && (t[j] = {}), tt(n[j]) && !tt(t[j]) && (t[j] = []), 
            y(t[j], n[j], e)) : n[j] !== T && (t[j] = n[j]);
        }
        function v(t, n) {
            return null == n ? P(t) : P(t).filter(n);
        }
        function g(t, e, i, r) {
            return n(e) ? e.call(t, i, r) : e;
        }
        function w(t, n, e) {
            null == e ? t.removeAttribute(n) : t.setAttribute(n, e);
        }
        function b(t, n) {
            var e = t.className || "", i = e && e.baseVal !== T;
            return n === T ? i ? e.baseVal : e : void (i ? e.baseVal = n : t.className = n);
        }
        function x(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? P.parseJSON(t) : t) : t;
            } catch (n) {
                return t;
            }
        }
        function E(t, n) {
            n(t);
            for (var e = 0, i = t.childNodes.length; i > e; e++) E(t.childNodes[e], n);
        }
        var T, j, P, S, O, C, k = [], N = k.concat, $ = k.filter, _ = k.slice, M = window.document, L = {}, A = {}, D = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, Y = /^\s*<(\w+|!)[^>]*>/, F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, q = /^(?:body|html)$/i, I = /([A-Z])/g, z = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], Z = [ "after", "prepend", "before", "append" ], H = M.createElement("table"), U = M.createElement("tr"), X = {
            tr: M.createElement("tbody"),
            tbody: H,
            thead: H,
            tfoot: H,
            td: U,
            th: U,
            "*": M.createElement("div")
        }, B = /complete|loaded|interactive/, V = /^[\w-]*$/, W = {}, G = W.toString, J = {}, K = M.createElement("div"), Q = {
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
        return J.matches = function(t, n) {
            if (!n || !t || 1 !== t.nodeType) return !1;
            var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (e) return e.call(t, n);
            var i, r = t.parentNode, o = !r;
            return o && (r = K).appendChild(t), i = ~J.qsa(r, n).indexOf(t), o && K.removeChild(t), 
            i;
        }, O = function(t) {
            return t.replace(/-+(.)?/g, function(t, n) {
                return n ? n.toUpperCase() : "";
            });
        }, C = function(t) {
            return $.call(t, function(n, e) {
                return t.indexOf(n) == e;
            });
        }, J.fragment = function(t, n, e) {
            var i, r, o;
            return F.test(t) && (i = P(M.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(R, "<$1></$2>")), 
            n === T && (n = Y.test(t) && RegExp.$1), n in X || (n = "*"), o = X[n], o.innerHTML = "" + t, 
            i = P.each(_.call(o.childNodes), function() {
                o.removeChild(this);
            })), a(e) && (r = P(i), P.each(e, function(t, n) {
                z.indexOf(t) > -1 ? r[t](n) : r.attr(t, n);
            })), i;
        }, J.Z = function(t, n) {
            return new m(t, n);
        }, J.isZ = function(t) {
            return t instanceof J.Z;
        }, J.init = function(t, e) {
            var i;
            if (!t) return J.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && Y.test(t)) i = J.fragment(t, RegExp.$1, e), 
            t = null; else {
                if (e !== T) return P(e).find(t);
                i = J.qsa(M, t);
            } else {
                if (n(t)) return P(M).ready(t);
                if (J.isZ(t)) return t;
                if (tt(t)) i = u(t); else if (o(t)) i = [ t ], t = null; else if (Y.test(t)) i = J.fragment(t.trim(), RegExp.$1, e), 
                t = null; else {
                    if (e !== T) return P(e).find(t);
                    i = J.qsa(M, t);
                }
            }
            return J.Z(i, t);
        }, P = function(t, n) {
            return J.init(t, n);
        }, P.extend = function(t) {
            var n, e = _.call(arguments, 1);
            return "boolean" == typeof t && (n = t, t = e.shift()), e.forEach(function(e) {
                y(t, e, n);
            }), t;
        }, J.qsa = function(t, n) {
            var e, i = "#" == n[0], r = !i && "." == n[0], o = i || r ? n.slice(1) : n, a = V.test(o);
            return t.getElementById && a && i ? (e = t.getElementById(o)) ? [ e ] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : _.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(n) : t.querySelectorAll(n));
        }, P.contains = M.documentElement.contains ? function(t, n) {
            return t !== n && t.contains(n);
        } : function(t, n) {
            for (;n && (n = n.parentNode); ) if (n === t) return !0;
            return !1;
        }, P.type = t, P.isFunction = n, P.isWindow = e, P.isArray = tt, P.isPlainObject = a, 
        P.isEmptyObject = function(t) {
            var n;
            for (n in t) return !1;
            return !0;
        }, P.inArray = function(t, n, e) {
            return k.indexOf.call(n, t, e);
        }, P.camelCase = O, P.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t);
        }, P.uuid = 0, P.support = {}, P.expr = {}, P.noop = function() {}, P.map = function(t, n) {
            var e, i, r, o = [];
            if (s(t)) for (i = 0; i < t.length; i++) null != (e = n(t[i], i)) && o.push(e); else for (r in t) null != (e = n(t[r], r)) && o.push(e);
            return c(o);
        }, P.each = function(t, n) {
            var e, i;
            if (s(t)) {
                for (e = 0; e < t.length; e++) if (!1 === n.call(t[e], e, t[e])) return t;
            } else for (i in t) if (!1 === n.call(t[i], i, t[i])) return t;
            return t;
        }, P.grep = function(t, n) {
            return $.call(t, n);
        }, window.JSON && (P.parseJSON = JSON.parse), P.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, n) {
            W["[object " + n + "]"] = n.toLowerCase();
        }), P.fn = {
            constructor: J.Z,
            length: 0,
            forEach: k.forEach,
            reduce: k.reduce,
            push: k.push,
            sort: k.sort,
            splice: k.splice,
            indexOf: k.indexOf,
            concat: function() {
                var t, n, e = [];
                for (t = 0; t < arguments.length; t++) n = arguments[t], e[t] = J.isZ(n) ? n.toArray() : n;
                return N.apply(J.isZ(this) ? this.toArray() : this, e);
            },
            map: function(t) {
                return P(P.map(this, function(n, e) {
                    return t.call(n, e, n);
                }));
            },
            slice: function() {
                return P(_.apply(this, arguments));
            },
            ready: function(t) {
                return B.test(M.readyState) && M.body ? t(P) : M.addEventListener("DOMContentLoaded", function() {
                    t(P);
                }, !1), this;
            },
            get: function(t) {
                return t === T ? _.call(this) : this[t >= 0 ? t : t + this.length];
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
                return k.every.call(this, function(n, e) {
                    return !1 !== t.call(n, e, n);
                }), this;
            },
            filter: function(t) {
                return n(t) ? this.not(this.not(t)) : P($.call(this, function(n) {
                    return J.matches(n, t);
                }));
            },
            add: function(t, n) {
                return P(C(this.concat(P(t, n))));
            },
            is: function(t) {
                return this.length > 0 && J.matches(this[0], t);
            },
            not: function(t) {
                var e = [];
                if (n(t) && t.call !== T) this.each(function(n) {
                    t.call(this, n) || e.push(this);
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? _.call(t) : P(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && e.push(t);
                    });
                }
                return P(e);
            },
            has: function(t) {
                return this.filter(function() {
                    return o(t) ? P.contains(this, t) : P(this).find(t).size();
                });
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
            },
            first: function() {
                var t = this[0];
                return t && !o(t) ? t : P(t);
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : P(t);
            },
            find: function(t) {
                var n = this;
                return t ? "object" == (void 0 === t ? "undefined" : i(t)) ? P(t).filter(function() {
                    var t = this;
                    return k.some.call(n, function(n) {
                        return P.contains(n, t);
                    });
                }) : 1 == this.length ? P(J.qsa(this[0], t)) : this.map(function() {
                    return J.qsa(this, t);
                }) : P();
            },
            closest: function(t, n) {
                var e = this[0], o = !1;
                for ("object" == (void 0 === t ? "undefined" : i(t)) && (o = P(t)); e && !(o ? o.indexOf(e) >= 0 : J.matches(e, t)); ) e = e !== n && !r(e) && e.parentNode;
                return P(e);
            },
            parents: function(t) {
                for (var n = [], e = this; e.length > 0; ) e = P.map(e, function(t) {
                    return (t = t.parentNode) && !r(t) && n.indexOf(t) < 0 ? (n.push(t), t) : void 0;
                });
                return v(n, t);
            },
            parent: function(t) {
                return v(C(this.pluck("parentNode")), t);
            },
            children: function(t) {
                return v(this.map(function() {
                    return d(this);
                }), t);
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || _.call(this.childNodes);
                });
            },
            siblings: function(t) {
                return v(this.map(function(t, n) {
                    return $.call(d(n.parentNode), function(t) {
                        return t !== n;
                    });
                }), t);
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = "";
                });
            },
            pluck: function(t) {
                return P.map(this, function(n) {
                    return n[t];
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
                var e = n(t);
                if (this[0] && !e) var i = P(t).get(0), r = i.parentNode || this.length > 1;
                return this.each(function(n) {
                    P(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i);
                });
            },
            wrapAll: function(t) {
                if (this[0]) {
                    P(this[0]).before(t = P(t));
                    for (var n; (n = t.children()).length; ) t = n.first();
                    P(t).append(this);
                }
                return this;
            },
            wrapInner: function(t) {
                var e = n(t);
                return this.each(function(n) {
                    var i = P(this), r = i.contents(), o = e ? t.call(this, n) : t;
                    r.length ? r.wrapAll(o) : i.append(o);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    P(this).replaceWith(P(this).children());
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
                    var n = P(this);
                    (t === T ? "none" == n.css("display") : t) ? n.show() : n.hide();
                });
            },
            prev: function(t) {
                return P(this.pluck("previousElementSibling")).filter(t || "*");
            },
            next: function(t) {
                return P(this.pluck("nextElementSibling")).filter(t || "*");
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    var e = this.innerHTML;
                    P(this).empty().append(g(this, t, n, e));
                }) : 0 in this ? this[0].innerHTML : null;
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    var e = g(this, t, n, this.textContent);
                    this.textContent = null == e ? "" : "" + e;
                }) : 0 in this ? this[0].textContent : null;
            },
            attr: function(t, n) {
                var e;
                return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                    if (1 === this.nodeType) if (o(t)) for (j in t) w(this, j, t[j]); else w(this, t, g(this, n, e, this.getAttribute(t)));
                }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e : T;
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && t.split(" ").forEach(function(t) {
                        w(this, t);
                    }, this);
                });
            },
            prop: function(t, n) {
                return t = Q[t] || t, 1 in arguments ? this.each(function(e) {
                    this[t] = g(this, n, e, this[t]);
                }) : this[0] && this[0][t];
            },
            data: function(t, n) {
                var e = "data-" + t.replace(I, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(e, n) : this.attr(e);
                return null !== i ? x(i) : T;
            },
            val: function(t) {
                return 0 in arguments ? this.each(function(n) {
                    this.value = g(this, t, n, this.value);
                }) : this[0] && (this[0].multiple ? P(this[0]).find("option").filter(function() {
                    return this.selected;
                }).pluck("value") : this[0].value);
            },
            offset: function(t) {
                if (t) return this.each(function(n) {
                    var e = P(this), i = g(this, t, n, e.offset()), r = e.offsetParent().offset(), o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                    "static" == e.css("position") && (o.position = "relative"), e.css(o);
                });
                if (!this.length) return null;
                if (!P.contains(M.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + window.pageXOffset,
                    top: n.top + window.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                };
            },
            css: function(n, e) {
                if (arguments.length < 2) {
                    var i, r = this[0];
                    if (!r) return;
                    if (i = getComputedStyle(r, ""), "string" == typeof n) return r.style[O(n)] || i.getPropertyValue(n);
                    if (tt(n)) {
                        var o = {};
                        return P.each(n, function(t, n) {
                            o[n] = r.style[O(n)] || i.getPropertyValue(n);
                        }), o;
                    }
                }
                var a = "";
                if ("string" == t(n)) e || 0 === e ? a = l(n) + ":" + h(n, e) : this.each(function() {
                    this.style.removeProperty(l(n));
                }); else for (j in n) n[j] || 0 === n[j] ? a += l(j) + ":" + h(j, n[j]) + ";" : this.each(function() {
                    this.style.removeProperty(l(j));
                });
                return this.each(function() {
                    this.style.cssText += ";" + a;
                });
            },
            index: function(t) {
                return t ? this.indexOf(P(t)[0]) : this.parent().children().indexOf(this[0]);
            },
            hasClass: function(t) {
                return !!t && k.some.call(this, function(t) {
                    return this.test(b(t));
                }, f(t));
            },
            addClass: function(t) {
                return t ? this.each(function(n) {
                    if ("className" in this) {
                        S = [];
                        var e = b(this);
                        g(this, t, n, e).split(/\s+/g).forEach(function(t) {
                            P(this).hasClass(t) || S.push(t);
                        }, this), S.length && b(this, e + (e ? " " : "") + S.join(" "));
                    }
                }) : this;
            },
            removeClass: function(t) {
                return this.each(function(n) {
                    if ("className" in this) {
                        if (t === T) return b(this, "");
                        S = b(this), g(this, t, n, S).split(/\s+/g).forEach(function(t) {
                            S = S.replace(f(t), " ");
                        }), b(this, S.trim());
                    }
                });
            },
            toggleClass: function(t, n) {
                return t ? this.each(function(e) {
                    var i = P(this);
                    g(this, t, e, b(this)).split(/\s+/g).forEach(function(t) {
                        (n === T ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t);
                    });
                }) : this;
            },
            scrollTop: function(t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === T ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                        this.scrollTop = t;
                    } : function() {
                        this.scrollTo(this.scrollX, t);
                    });
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === T ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                        this.scrollLeft = t;
                    } : function() {
                        this.scrollTo(t, this.scrollY);
                    });
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0], n = this.offsetParent(), e = this.offset(), i = q.test(n[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : n.offset();
                    return e.top -= parseFloat(P(t).css("margin-top")) || 0, e.left -= parseFloat(P(t).css("margin-left")) || 0, 
                    i.top += parseFloat(P(n[0]).css("border-top-width")) || 0, i.left += parseFloat(P(n[0]).css("border-left-width")) || 0, 
                    {
                        top: e.top - i.top,
                        left: e.left - i.left
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || M.body; t && !q.test(t.nodeName) && "static" == P(t).css("position"); ) t = t.offsetParent;
                    return t;
                });
            }
        }, P.fn.detach = P.fn.remove, [ "width", "height" ].forEach(function(t) {
            var n = t.replace(/./, function(t) {
                return t[0].toUpperCase();
            });
            P.fn[t] = function(i) {
                var o, a = this[0];
                return i === T ? e(a) ? a["inner" + n] : r(a) ? a.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function(n) {
                    a = P(this), a.css(t, g(this, i, n, a[t]()));
                });
            };
        }), Z.forEach(function(n, e) {
            var i = e % 2;
            P.fn[n] = function() {
                var n, r, o = P.map(arguments, function(e) {
                    return n = t(e), "object" == n || "array" == n || null == e ? e : J.fragment(e);
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(t, n) {
                    r = i ? n : n.parentNode, n = 0 == e ? n.nextSibling : 1 == e ? n.firstChild : 2 == e ? n : null;
                    var s = P.contains(M.documentElement, r);
                    o.forEach(function(t) {
                        if (a) t = t.cloneNode(!0); else if (!r) return P(t).remove();
                        r.insertBefore(t, n), s && E(t, function(t) {
                            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                        });
                    });
                });
            }, P.fn[i ? n + "To" : "insert" + (e ? "Before" : "After")] = function(t) {
                return P(t)[n](this), this;
            };
        }), J.Z.prototype = m.prototype = P.fn, J.uniq = C, J.deserializeValue = x, P.zepto = J, 
        P;
    }();
    window.Zepto = r, void 0 === window.$ && (window.$ = r), function(t) {
        function n(n, e, i) {
            var r = t.Event(e);
            return t(n).trigger(r, i), !r.isDefaultPrevented();
        }
        function e(t, e, i, r) {
            return t.global ? n(e || g, i, r) : void 0;
        }
        function i(n) {
            n.global && 0 == t.active++ && e(n, null, "ajaxStart");
        }
        function r(n) {
            n.global && !--t.active && e(n, null, "ajaxStop");
        }
        function o(t, n) {
            var i = n.context;
            return !1 !== n.beforeSend.call(i, t, n) && !1 !== e(n, i, "ajaxBeforeSend", [ t, n ]) && void e(n, i, "ajaxSend", [ t, n ]);
        }
        function a(t, n, i, r) {
            var o = i.context, a = "success";
            i.success.call(o, t, a, n), r && r.resolveWith(o, [ t, a, n ]), e(i, o, "ajaxSuccess", [ n, i, t ]), 
            u(a, n, i);
        }
        function s(t, n, i, r, o) {
            var a = r.context;
            r.error.call(a, i, n, t), o && o.rejectWith(a, [ i, n, t ]), e(r, a, "ajaxError", [ i, r, t || n ]), 
            u(n, i, r);
        }
        function u(t, n, i) {
            var o = i.context;
            i.complete.call(o, n, t), e(i, o, "ajaxComplete", [ n, i ]), r(i);
        }
        function c() {}
        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : b.test(t) ? "script" : x.test(t) && "xml") || "text";
        }
        function f(t, n) {
            return "" == n ? t : (t + "&" + n).replace(/[&?]{1,2}/, "?");
        }
        function h(n) {
            n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional)), 
            !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = f(n.url, n.data), 
            n.data = void 0);
        }
        function p(n, e, i, r) {
            return t.isFunction(e) && (r = i, i = e, e = void 0), t.isFunction(i) || (r = i, 
            i = void 0), {
                url: n,
                data: e,
                success: i,
                dataType: r
            };
        }
        function d(n, e, i, r) {
            var o, a = t.isArray(e), s = t.isPlainObject(e);
            t.each(e, function(e, u) {
                o = t.type(u), r && (e = i ? r : r + "[" + (s || "object" == o || "array" == o ? e : "") + "]"), 
                !r && a ? n.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(n, u, i, e) : n.add(e, u);
            });
        }
        var m, y, v = 0, g = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, b = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, E = "application/json", T = "text/html", j = /^\s*$/, P = g.createElement("a");
        P.href = window.location.href, t.active = 0, t.ajaxJSONP = function(n, e) {
            if (!("type" in n)) return t.ajax(n);
            var i, r, u = n.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v, l = g.createElement("script"), f = window[c], h = function(n) {
                t(l).triggerHandler("error", n || "abort");
            }, p = {
                abort: h
            };
            return e && e.promise(p), t(l).on("load error", function(o, u) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, n, e) : s(null, u || "error", p, n, e), 
                window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0;
            }), !1 === o(p, n) ? (h("abort"), p) : (window[c] = function() {
                i = arguments;
            }, l.src = n.url.replace(/\?(.+)=\?/, "?$1=" + c), g.head.appendChild(l), n.timeout > 0 && (r = setTimeout(function() {
                h("timeout");
            }, n.timeout)), p);
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
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(n) {
            var e, r, u = t.extend({}, n || {}), p = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
            i(u), u.crossDomain || (e = g.createElement("a"), e.href = u.url, e.href = e.href, 
            u.crossDomain = P.protocol + "//" + P.host != e.protocol + "//" + e.host), u.url || (u.url = window.location.toString()), 
            (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), h(u);
            var d = u.dataType, v = /\?.+=\?/.test(u.url);
            if (v && (d = "jsonp"), !1 !== u.cache && (n && !0 === n.cache || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), 
            "jsonp" == d) return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), 
            t.ajaxJSONP(u, p);
            var w, b = u.accepts[d], x = {}, E = function(t, n) {
                x[t.toLowerCase()] = [ t, n ];
            }, T = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, S = u.xhr(), O = S.setRequestHeader;
            if (p && p.promise(S), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), 
            E("Accept", b || "*/*"), (b = u.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), 
            S.overrideMimeType && S.overrideMimeType(b)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), 
            u.headers) for (y in u.headers) E(y, u.headers[y]);
            if (S.setRequestHeader = E, S.onreadystatechange = function() {
                if (4 == S.readyState) {
                    S.onreadystatechange = c, clearTimeout(w);
                    var n, e = !1;
                    if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == T) {
                        d = d || l(u.mimeType || S.getResponseHeader("content-type")), n = S.responseText;
                        try {
                            "script" == d ? (0, eval)(n) : "xml" == d ? n = S.responseXML : "json" == d && (n = j.test(n) ? null : t.parseJSON(n));
                        } catch (t) {
                            e = t;
                        }
                        e ? s(e, "parsererror", S, u, p) : a(n, S, u, p);
                    } else s(S.statusText || null, S.status ? "error" : "abort", S, u, p);
                }
            }, !1 === o(S, u)) return S.abort(), s(null, "abort", S, u, p), S;
            if (u.xhrFields) for (y in u.xhrFields) S[y] = u.xhrFields[y];
            var C = !("async" in u) || u.async;
            S.open(u.type, u.url, C, u.username, u.password);
            for (y in x) O.apply(S, x[y]);
            return u.timeout > 0 && (w = setTimeout(function() {
                S.onreadystatechange = c, S.abort(), s(null, "timeout", S, u, p);
            }, u.timeout)), S.send(u.data ? u.data : null), S;
        }, t.get = function() {
            return t.ajax(p.apply(null, arguments));
        }, t.post = function() {
            var n = p.apply(null, arguments);
            return n.type = "POST", t.ajax(n);
        }, t.getJSON = function() {
            var n = p.apply(null, arguments);
            return n.dataType = "json", t.ajax(n);
        }, t.fn.load = function(n, e, i) {
            if (!this.length) return this;
            var r, o = this, a = n.split(/\s/), s = p(n, e, i), u = s.success;
            return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(n) {
                o.html(r ? t("<div>").html(n.replace(w, "")).find(r) : n), u && u.apply(o, arguments);
            }, t.ajax(s), this;
        };
        var S = encodeURIComponent;
        t.param = function(n, e) {
            var i = [];
            return i.add = function(n, e) {
                t.isFunction(e) && (e = e()), null == e && (e = ""), this.push(S(n) + "=" + S(e));
            }, d(i, n, e), i.join("&").replace(/%20/g, "+");
        };
    }(r), function(t) {
        function n(t) {
            return t._zid || (t._zid = h++);
        }
        function e(t, e, o, a) {
            if (e = i(e), e.ns) var s = r(e.ns);
            return (y[n(t)] || []).filter(function(t) {
                return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || o && n(t.fn) !== n(o) || a && t.sel != a);
            });
        }
        function i(t) {
            var n = ("" + t).split(".");
            return {
                e: n[0],
                ns: n.slice(1).sort().join(" ")
            };
        }
        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
        }
        function o(t, n) {
            return t.del && !g && t.e in w || !!n;
        }
        function a(t) {
            return b[t] || g && w[t] || t;
        }
        function s(e, r, s, u, l, h, p) {
            var d = n(e), m = y[d] || (y[d] = []);
            r.split(/\s/).forEach(function(n) {
                if ("ready" == n) return t(document).ready(s);
                var r = i(n);
                r.fn = s, r.sel = l, r.e in b && (s = function(n) {
                    var e = n.relatedTarget;
                    return !e || e !== this && !t.contains(this, e) ? r.fn.apply(this, arguments) : void 0;
                }), r.del = h;
                var d = h || s;
                r.proxy = function(t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var n = d.apply(e, t._args == f ? [ t ] : [ t ].concat(t._args));
                        return !1 === n && (t.preventDefault(), t.stopPropagation()), n;
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in e && e.addEventListener(a(r.e), r.proxy, o(r, p));
            });
        }
        function u(t, i, r, s, u) {
            var c = n(t);
            (i || "").split(/\s/).forEach(function(n) {
                e(t, n, r, s).forEach(function(n) {
                    delete y[c][n.i], "removeEventListener" in t && t.removeEventListener(a(n.e), n.proxy, o(n, u));
                });
            });
        }
        function c(n, e) {
            return (e || !n.isDefaultPrevented) && (e || (e = n), t.each(j, function(t, i) {
                var r = e[t];
                n[t] = function() {
                    return this[i] = x, r && r.apply(e, arguments);
                }, n[i] = E;
            }), (e.defaultPrevented !== f ? e.defaultPrevented : "returnValue" in e ? !1 === e.returnValue : e.getPreventDefault && e.getPreventDefault()) && (n.isDefaultPrevented = x)), 
            n;
        }
        function l(t) {
            var n, e = {
                originalEvent: t
            };
            for (n in t) T.test(n) || t[n] === f || (e[n] = t[n]);
            return c(e, t);
        }
        var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function(t) {
            return "string" == typeof t;
        }, y = {}, v = {}, g = "onfocusin" in window, w = {
            focus: "focusin",
            blur: "focusout"
        }, b = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: u
        }, t.proxy = function(e, i) {
            var r = 2 in arguments && p.call(arguments, 2);
            if (d(e)) {
                var o = function() {
                    return e.apply(i, r ? r.concat(p.call(arguments)) : arguments);
                };
                return o._zid = n(e), o;
            }
            if (m(i)) return r ? (r.unshift(e[i], e), t.proxy.apply(null, r)) : t.proxy(e[i], e);
            throw new TypeError("expected function");
        }, t.fn.bind = function(t, n, e) {
            return this.on(t, n, e);
        }, t.fn.unbind = function(t, n) {
            return this.off(t, n);
        }, t.fn.one = function(t, n, e, i) {
            return this.on(t, n, e, i, 1);
        };
        var x = function() {
            return !0;
        }, E = function() {
            return !1;
        }, T = /^([A-Z]|returnValue$|layer[XY]$)/, j = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        t.fn.delegate = function(t, n, e) {
            return this.on(n, t, e);
        }, t.fn.undelegate = function(t, n, e) {
            return this.off(n, t, e);
        }, t.fn.live = function(n, e) {
            return t(document.body).delegate(this.selector, n, e), this;
        }, t.fn.die = function(n, e) {
            return t(document.body).undelegate(this.selector, n, e), this;
        }, t.fn.on = function(n, e, i, r, o) {
            var a, c, h = this;
            return n && !m(n) ? (t.each(n, function(t, n) {
                h.on(t, e, i, n, o);
            }), h) : (m(e) || d(r) || !1 === r || (r = i, i = e, e = f), (r === f || !1 === i) && (r = i, 
            i = f), !1 === r && (r = E), h.each(function(f, h) {
                o && (a = function(t) {
                    return u(h, t.type, r), r.apply(this, arguments);
                }), e && (c = function(n) {
                    var i, o = t(n.target).closest(e, h).get(0);
                    return o && o !== h ? (i = t.extend(l(n), {
                        currentTarget: o,
                        liveFired: h
                    }), (a || r).apply(o, [ i ].concat(p.call(arguments, 1)))) : void 0;
                }), s(h, n, r, i, e, c || a);
            }));
        }, t.fn.off = function(n, e, i) {
            var r = this;
            return n && !m(n) ? (t.each(n, function(t, n) {
                r.off(t, e, n);
            }), r) : (m(e) || d(i) || !1 === i || (i = e, e = f), !1 === i && (i = E), r.each(function() {
                u(this, n, i, e);
            }));
        }, t.fn.trigger = function(n, e) {
            return n = m(n) || t.isPlainObject(n) ? t.Event(n) : c(n), n._args = e, this.each(function() {
                n.type in w && "function" == typeof this[n.type] ? this[n.type]() : "dispatchEvent" in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, e);
            });
        }, t.fn.triggerHandler = function(n, i) {
            var r, o;
            return this.each(function(a, s) {
                r = l(m(n) ? t.Event(n) : n), r._args = i, r.target = s, t.each(e(s, n.type || n), function(t, n) {
                    return o = n.proxy(r), !r.isImmediatePropagationStopped() && void 0;
                });
            }), o;
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
            t.fn[n] = function(t) {
                return 0 in arguments ? this.bind(n, t) : this.trigger(n);
            };
        }), t.Event = function(t, n) {
            m(t) || (n = t, t = n.type);
            var e = document.createEvent(v[t] || "Events"), i = !0;
            if (n) for (var r in n) "bubbles" == r ? i = !!n[r] : e[r] = n[r];
            return e.initEvent(t, i, !0), c(e);
        };
    }(r), function(t, n) {
        function e(t) {
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
        t.each(y, function(t, e) {
            return v.style[t + "TransitionProperty"] !== n ? (m = "-" + t.toLowerCase() + "-", 
            o = e, !1) : void 0;
        }), a = m + "transform", w[s = m + "transition-property"] = w[u = m + "transition-duration"] = w[l = m + "transition-delay"] = w[c = m + "transition-timing-function"] = w[f = m + "animation-name"] = w[h = m + "animation-duration"] = w[d = m + "animation-delay"] = w[p = m + "animation-timing-function"] = "", 
        t.fx = {
            off: o === n && v.style.transitionProperty === n,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: m,
            transitionEnd: r("TransitionEnd"),
            animationEnd: r("AnimationEnd")
        }, t.fn.animate = function(e, i, r, o, a) {
            return t.isFunction(i) && (o = i, r = n, i = n), t.isFunction(r) && (o = r, r = n), 
            t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), 
            i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), 
            a && (a = parseFloat(a) / 1e3), this.anim(e, i, r, o, a);
        }, t.fn.anim = function(r, o, m, y, v) {
            var b, x, E, T = {}, j = "", P = this, S = t.fx.transitionEnd, O = !1;
            if (o === n && (o = t.fx.speeds._default / 1e3), v === n && (v = 0), t.fx.off && (o = 0), 
            "string" == typeof r) T[f] = r, T[h] = o + "s", T[d] = v + "s", T[p] = m || "linear", 
            S = t.fx.animationEnd; else {
                x = [];
                for (b in r) g.test(b) ? j += b + "(" + r[b] + ") " : (T[b] = r[b], x.push(e(b)));
                j && (T[a] = j, x.push(a)), o > 0 && "object" == (void 0 === r ? "undefined" : i(r)) && (T[s] = x.join(", "), 
                T[u] = o + "s", T[l] = v + "s", T[c] = m || "linear");
            }
            return E = function(n) {
                if (void 0 !== n) {
                    if (n.target !== n.currentTarget) return;
                    t(n.target).unbind(S, E);
                } else t(this).unbind(S, E);
                O = !0, t(this).css(w), y && y.call(this);
            }, o > 0 && (this.bind(S, E), setTimeout(function() {
                O || E.call(P);
            }, 1e3 * (o + v) + 25)), this.size() && this.get(0).clientLeft, this.css(T), 0 >= o && setTimeout(function() {
                P.each(function() {
                    E.call(this);
                });
            }, 0), this;
        }, v = null;
    }(r), function(t, n) {
        function e(e, i, r, o, a) {
            "function" != typeof i || a || (a = i, i = n);
            var s = {
                opacity: r
            };
            return o && (s.scale = o, e.css(t.fx.cssPrefix + "transform-origin", "0 0")), e.animate(s, i, null, a);
        }
        function i(n, i, r, o) {
            return e(n, i, 0, r, function() {
                a.call(t(this)), o && o.call(this);
            });
        }
        var r = window.document, o = (r.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
        t.fn.show = function(t, i) {
            return o.call(this), t === n ? t = 0 : this.css("opacity", 0), e(this, t, 1, "1,1", i);
        }, t.fn.hide = function(t, e) {
            return t === n ? a.call(this) : i(this, t, "0,0", e);
        }, t.fn.toggle = function(e, i) {
            return e === n || "boolean" == typeof e ? s.call(this, e) : this.each(function() {
                var n = t(this);
                n["none" == n.css("display") ? "show" : "hide"](e, i);
            });
        }, t.fn.fadeTo = function(t, n, i) {
            return e(this, t, n, null, i);
        }, t.fn.fadeIn = function(t, n) {
            var e = this.css("opacity");
            return e > 0 ? this.css("opacity", 0) : e = 1, o.call(this).fadeTo(t, e, n);
        }, t.fn.fadeOut = function(t, n) {
            return i(this, t, null, n);
        }, t.fn.fadeToggle = function(n, e) {
            return this.each(function() {
                var i = t(this);
                i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](n, e);
            });
        };
    }(r), function() {
        try {
            getComputedStyle(void 0);
        } catch (n) {
            var t = getComputedStyle;
            window.getComputedStyle = function(n) {
                try {
                    return t(n);
                } catch (t) {
                    return null;
                }
            };
        }
    }(), function(t) {
        function n(n) {
            return n = t(n), !(!n.width() && !n.height()) && "none" !== n.css("display");
        }
        function e(t, n) {
            t = t.replace(/=#\]/g, '="#"]');
            var e, i, r = s.exec(t);
            if (r && r[2] in a && (e = a[r[2]], i = r[3], t = r[1], i)) {
                var o = Number(i);
                i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o;
            }
            return n(t, e, i);
        }
        var i = t.zepto, r = i.qsa, o = i.matches, a = t.expr[":"] = {
            visible: function() {
                return n(this) ? this : void 0;
            },
            hidden: function() {
                return n(this) ? void 0 : this;
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
            last: function(t, n) {
                return t === n.length - 1 ? this : void 0;
            },
            eq: function(t, n, e) {
                return t === e ? this : void 0;
            },
            contains: function(n, e, i) {
                return t(this).text().indexOf(i) > -1 ? this : void 0;
            },
            has: function(t, n, e) {
                return i.qsa(this, e).length ? this : void 0;
            }
        }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), u = /^\s*>/, c = "Zepto" + +new Date();
        i.qsa = function(n, o) {
            return e(o, function(e, a, s) {
                try {
                    var l;
                    !e && a ? e = "*" : u.test(e) && (l = t(n).addClass(c), e = "." + c + " " + e);
                    var f = r(n, e);
                } catch (t) {
                    throw console.error("error performing selector: %o", o), t;
                } finally {
                    l && l.removeClass(c);
                }
                return a ? i.uniq(t.map(f, function(t, n) {
                    return a.call(t, n, f, s);
                })) : f;
            });
        }, i.matches = function(t, n) {
            return e(n, function(n, e, i) {
                return !(n && !o(t, n) || e && e.call(t, null, i) !== t);
            });
        };
    }(r), function(t) {
        function n(t, n, e, i) {
            return Math.abs(t - n) >= Math.abs(e - i) ? t - n > 0 ? "Left" : "Right" : e - i > 0 ? "Up" : "Down";
        }
        function e() {
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
        function a(t, n) {
            return t.type == "pointer" + n || t.type.toLowerCase() == "mspointer" + n;
        }
        var s, u, c, l, f, h = {};
        t(document).ready(function() {
            var p, d, m, y, v = 0, g = 0;
            "MSGesture" in window && (f = new MSGesture(), f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                n && (h.el.trigger("swipe"), h.el.trigger("swipe" + n));
            }).on("touchstart MSPointerDown pointerdown", function(n) {
                (!(y = a(n, "down")) || o(n)) && (m = y ? n : n.touches[0], n.touches && 1 === n.touches.length && h.x2 && (h.x2 = void 0, 
                h.y2 = void 0), p = Date.now(), d = p - (h.last || p), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                s && clearTimeout(s), h.x1 = m.pageX, h.y1 = m.pageY, d > 0 && 250 >= d && (h.isDoubleTap = !0), 
                h.last = p, l = setTimeout(e, 750), f && y && f.addPointer(n.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(y = a(t, "move")) || o(t)) && (m = y ? t : t.touches[0], i(), h.x2 = m.pageX, 
                h.y2 = m.pageY, v += Math.abs(h.x1 - h.x2), g += Math.abs(h.y1 - h.y2));
            }).on("touchend MSPointerUp", function(e) {
                (!(y = a(e, "up")) || o(e)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function() {
                    h.el.trigger("swipe"), h.el.trigger("swipe" + n(h.x1, h.x2, h.y1, h.y2)), h = {};
                }, 0) : "last" in h && (30 > v && 30 > g ? u = setTimeout(function() {
                    var n = t.Event("tap");
                    n.cancelTouch = r, h.el.trigger(n), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), 
                    h = {}) : s = setTimeout(function() {
                        s = null, h.el && h.el.trigger("singleTap"), h = {};
                    }, 250);
                }, 0) : h = {}), v = g = 0);
            }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r);
        }), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(n) {
            t.fn[n] = function(t) {
                return this.on(n, t);
            };
        });
    }(r);
}, function(t, n) {}, function(t, n) {}, function(t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function r(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t;
    }
    e(3), e(4), e(2);
    var o = e(1), a = i(o), s = e(0), u = i(s);
    !function() {
        var t, n, e = new a.default(), i = new u.default(), o = localAddress, s = document.querySelector("#body"), c = (document.querySelector(".down_btn"), 
        $(".askfriend_info .adress")), l = e.from, f = e.opena, h = e.backload, p = e.touch, d = e.info, m = e.button, y = e.page, v = e.tit, g = e.cp, w = $(".cp"), b = $(".bahao"), x = $(".address");
        106271 == l ? (l = 1101379, n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 157620 == l ? (l = 1101380, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 158101 == l ? (l = 1100021, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 157440 == l ? (l = 1100020, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 157441 == l ? (l = 1101375, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 158103 == l ? (l = 1101377, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 158104 == l ? (l = 1101378, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : 803084 == l ? (l = 1101253, 
        n = "http://ptd.yoyuan.com.cn/apk/download/" + l + "/YouYuan_" + l + ".apk") : n = "//ptd.youyuan.com/apk/download/" + l + "/YouYuan_" + l + ".apk";
        var E = (t = {
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
        d && "only" == d ? ($("#company").show(), $(".cp_bottom").hide(), $(".detail_btn").hide()) : d && "all" == d && $("#company").hide(), 
        v && "" != v && ($("title").html(E[v]), $(".tit").html(E[v])), y && "a" == y ? (console.log("111"), 
        $("#pageA").show()) : y && "b" == y ? (console.log("222"), $("#pageB").show()) : y && "c" == y && (console.log("333"), 
        $("#pageC").show()), g && "yyzx" == g ? (w.html("北京友缘在线网络科技股份有限公司 版权所有"), b.html("ICP备 08104462 号"), 
        x.html("地址：北京市密云区经济开发区西统路8号西田各庄镇政府办公楼508室")) : g && "yb" == g ? (w.html("北京缘博网络科技有限公司 版权所有"), 
        b.html("ICP备15053624号"), x.html("地址：北京市朝阳区北苑路乙108号14幢")) : g && "lkt" == g ? (w.html("北京智鸟科技有限公司 版权所有"), 
        b.html("ICP备18026322号"), x.html("地址：北京市昌平区沙河镇北街家园五区2号楼5层4单元525")) : g && "sysd" == g ? (w.html("北京三易时代文化传媒有限公司 版权所有"), 
        b.html("ICP备17064426号"), x.html("地址：北京市朝阳区广华居19号楼2层201")) : g && "jiujy" == g && (w.html("北京智鸟科技有限公司 版权所有"), 
        x.html("柏林区杜儿坪大虎峪西街")), $(".company_detail").click(function(t) {
            t.stopPropagation(), location.href = "./about.html?info=" + g;
        }), $(".phone_us").click(function(t) {
            t.stopPropagation(), location.href = "./elephone.html?info=" + g;
        }), $(".pruduct_detail").click(function(t) {
            t.stopPropagation(), location.href = "./product.html?info=" + g;
        });
        var T = "";
        T = o.province.indexOf("市") > -1 ? o.province : o.city, T = T.replace("市", ""), 
        c.html(T), i.pcFlag ? $(".down_btn").on("click", function() {
            location.href = n;
        }) : (m ? $(".down_btn").on("click", function() {
            location.href = n;
        }) : p ? s.addEventListener("touchstart", function() {
            location.href = n;
        }) : $("#body").on("click", function() {
            location.href = n;
        }), "北京市" == o.province || "上海市" == o.province || "深圳市" == o.province || "广州市" == o.city ? console.log("baibai") : f ? location.href = n : h && (history.pushState(null, null, document.URL), 
        window.addEventListener("popstate", function() {
            location.href = n;
        })));
    }();
} ]);