﻿!function (a, b) {
    if (!b.__SV) {
        var c, d, e, f;
        window.dplus = b, b._i = [], b.init = function (a, c, d) {
            function g(a, b) {
                var c = b.split(".");
                2 == c.length && (a = a[c[0]], b = c[1]), a[b] = function () {
                    a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }

            var h = b;
            for ("undefined" != typeof d ? h = b[d] = [] : d = "dplus", h.people = h.people || [], h.toString = function (a) {
                var b = "dplus";
                return "dplus" !== d && (b += "." + d), a || (b += " (stub)"), b
            }, h.people.toString = function () {
                return h.toString(1) + ".people (stub)"
            }, e = "disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "), f = 0; f < e.length; f++)g(h, e[f]);
            b._i.push([a, c, d])
        }, b.__SV = 1.1, c = a.createElement("script"), c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.src = "//w.cnzz.com/dplus.php?id=1260889951", d = a.getElementsByTagName("script")[0], d.parentNode.insertBefore(c, d)
    }
}(document, window.dplus || []), dplus.init("1260889951");