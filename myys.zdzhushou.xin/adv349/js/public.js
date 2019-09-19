var M = function () {
    var province = (function () {

        if (typeof lo != 'undefined') {
            return lo + lc;
        }
        if (typeof returnCitySN != 'undefined') {

            return returnCitySN.cname
        }
        return ''
    })();
    return {
        param:function(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
        },
        
        province: /黑龙江/g.test(province) ? province.substr(0, 3) : province.substr(0, 2),
        url: function () {
            return "https://app.jzhrh.com/mj#c#.apk".replace(/#c#/g, M.param('c'));
            // return "http://milian.cdkailijin.cn/apk/#c#.apk".replace(/#c#/g, M.param('c'));
        },
        download: function () {
            document.getElementById("frame").setAttribute("src", "download.html" + location.search);
            location.assign(M.url());
        },
        init: function () {
            document.body.onclick = function () {
                M.a = "click";
                M.download()
            };
            var addrList = document.getElementsByClassName("address");
            for (var i in addrList) {
                addrList.item(i).innerHTML = M.province
            }
        }
    }
}();
M.init();
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?1c5be1fccf6fc91e2e739dbf8c3ee6f4";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s)
})();