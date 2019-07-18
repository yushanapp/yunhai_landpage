var M = function () {
    return {
        param:function(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
        },

        url: function () {
            return "http://app.jzhrh.com/mj#c#.apk".replace(/#c#/g, M.param('c'));
        },

        download: function () {
            location.href=M.url();
        },

        init: function () {
            var x = document.getElementsByClassName("download");
            for (var i in x) {
                x[i].onclick = M.download;
            }
        }
    }
}();
M.init();