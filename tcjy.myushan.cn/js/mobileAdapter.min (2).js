window.mobileUtil = (function (f, e) { var d = navigator.userAgent, c = /android|adr/gi.test(d), b = /iphone|ipod|ipad/gi.test(d) && !c, a = c || b; return { isAndroid: c, isIos: b, isMobile: a, isNewsApp: /NewsApp\/[\d\.]+/gi.test(d), isWeixin: /MicroMessenger/gi.test(d), isQQ: /QQ\/\d/gi.test(d), isYixin: /YiXin/gi.test(d), isWeibo: /Weibo/gi.test(d), isTXWeibo: /T(?:X|encent)MicroBlog/gi.test(d), tapEvent: a ? "tap" : "click", fixScreen: function (i) { var A = e.querySelector('meta[name="viewport"]'), B = A ? A.content : "", y = B.match(/initial\-scale=([\d\.]+)/), o = B.match(/width=([^,\s]+)/); if (typeof i === "undefined") { console.log(false); i = false } console.log(e); console.log(A); if (!A) { var k = e.documentElement, u = k.dataset.mw || 750, h = b ? Math.min(f.devicePixelRatio, 3) : 1, C = 1 / h, z; k.removeAttribute("data-mw"); k.dataset.dpr = h; A = e.createElement("meta"); A.name = "viewport"; A.content = q(C); k.firstElementChild.appendChild(A); var s = function () { var w = k.getBoundingClientRect().width; if (w / h > u) { w = u * h } var D = w / 16; k.style.fontSize = D + "px" }; f.addEventListener("resize", function () { clearTimeout(z); z = setTimeout(s, 300) }, false); f.addEventListener("pageshow", function (w) { if (w.persisted) { clearTimeout(z); z = setTimeout(s, 300) } }, false); s() } else { if ((a && !y && (o && o[1] != "device-width")) || i) { var x = parseInt(o[1]), l = f.innerWidth || x, m = f.outerWidth || l, v = f.screen.width || l, j = f.screen.availWidth || l, r = f.innerHeight || x, t = f.outerHeight || r, g = f.screen.height || r, n = f.screen.availHeight || r, p = Math.min(l, m, v, j), C = Math.max(l, m, v, j) / x; A.content = o[0] + "," + q(C) } } function q(w) { return "initial-scale=" + w + ",maximum-scale=" + w + ",minimum-scale=" + w + ",user-scalable=no,viewport-fit=cover" } }, getSearch: function (g) { g = g || f.location.search; var i = {}, h = new RegExp("([^?=&]+)(=([^&]*))?", "g"); g && g.replace(h, function (k, j, m, l) { i[j] = l }); return i }, formatUcBrowser: function () { var g = navigator.userAgent, h = /UC/gi.test(g); if (h) { $(".smartFixed").each(function () { var n = $(this); var m = parseInt(n.css("top"), 10); var l = parseInt(n.css("left"), 10); var k = parseInt(n.css("right"), 10); var j = parseInt(n.css("bottom"), 10); if (m <= 150 && j === 0 && (l <= 150 || k <= 150)) { var i = parseInt(n.css("height"), 10) / 2 * -1; i = i + m; n.css({ "top": "50%", "margin-top": i + "px" }) } }) } } } })(window, document);