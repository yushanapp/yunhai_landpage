var M = function () {
    return {
        param:function(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
        },

        url: function () {
            return "http://app.jrchuangda.cn/mj#c#.apk".replace(/#c#/g, M.param('c'));
        },

        download: function () {
            location.assign(M.url());
        },

        init: function () {
            document.querySelector('.btn_img').onclick = function () {
                M.a = "click";
                M.download()
            };
        }
    }
}();
M.init();
