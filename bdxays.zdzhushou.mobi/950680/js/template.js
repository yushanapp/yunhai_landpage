$(function(){
    //获取参数
    var QueryString = {data: {},Initial: function() {
            var aPairs,aTmp,a;
            var queryString = location.search;
            queryString = queryString.substr(1, queryString.length);
            aPairs = queryString.split("&");
            for (var i = 0; i < aPairs.length; i++) {
                aTmp = aPairs[i].split("=");
                this.data[aTmp[0]] = aTmp[1];
            }
        },GetValue: function(key) {
            return QueryString.data[key];
        }
    };
    QueryString.Initial();
    $('.button').click(function(){
        location.href="http://ptd.youyuan.com/apk/download/950680/rfydong_950680.apk";
    });

});