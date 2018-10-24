/**
 * 全部推广链接 对应 监控文件地址
 * @type {Array}
 *
 * url-页面链接，不要给?后面的参数,不要跟http/https协议，不要给空格
 * js-链接对应的跟踪代码文件名
 */
 var extend_route={
    'bd.wts999.cn/t/bdzjx1yh.html':'baidu_A_abzj_01.js',
    'bd.wts999.cn/t/bkgmzjx716yd.html':'baidu_A_abzj_01.js',
    'bd.wts9999.cn/t/qmczbzpcNew-yd.html':'baidu_A_abzj_01.js',
    'bd.wts999.net/t/bkgmzjx716yd.html':'baidu_A_abzj_01.js',
    'bd.wts9999.net/t/bwjkzjjbd.html':'baidu_A_abzj_01.js',
    'bd1.wts999.com/t/cqszdjbpc.html':'bdjj_00_abyh_01.js',
    'bd1.wts999.com/t/cqszdjb.html':'bdjj_00_abyh_01.js',
    'bd.wts999.cn/t/bwjkzjjb.html':'bdjj_A_bwzj_02.js',
    'jrtt3.wts9999.cn/t/bwjkzjjb.html':'jrtt_juhe_bwzj_01.js',
    'jrtt3.wts9999.cn/t/cqszdjb.html':'jrtt_juhe_abyh_02.js',

    'jrtt3.wts9999.cn/t/qmczbzpcNew-yd.html':'jrtt_juhe_etyh_03.js',
    'jrtt3.wts9999.cn/t/bfcs.html':'jrtt_juhe_etzh_04.js',
    'jrtt3.wts9999.cn/t/bdzjx1yh.html':'jrtt_juhe_abh_05.js',
    'jrtt2.wts9999.cn/t/zawlsejynj.html':'jrtt_juhe_zawl_06.js',

    'gdt.wts999.cn/t/tx/txjx2yh.html':'gdt_abzj_01.js',
    'gdt.wts999.cn/t/tx/bwjkzjjb2.html':'gdt_bwxt_02.js',
    'gdt.wts999.cn/t/tx/cqszdjb2.html':'gdt_abyh_03.js',
    'gdt.wts999.cn/t/tx/hxjkzdjb2.html':'gdt_hxzj_04.js',
    'gdt.wts999.cn/t/tx/bwjkzjjb1.html':'gdt_bwxt_05.js',
    'gdt.wts999.cn/t/tx/bfcs1tx.html':'gdt_etzh_06.js',
    'gdt.wts999.cn/t/tx/hxjkzdjb.html':'gdt_hxzj_07.js',
    'gdt.wts999.cn/t/tx/txjx1yh.html':'gdt_abzj_08.js',
};
doUrl()
function doUrl() {
    //匹配地址和关联跟踪代码
    var url = location.href;
    var reg = /([/][^/]+)$/;
    url = url.replace("http://", "").replace("https://", "").replace("file:///D:/", "");
    url=url.split('?')[0];
    if(extend_route[url]){
        loadJs("/static/monitor/"+extend_route[url],function(){
            console.log('success to listen in');
        });
    }else{
        loadJs("/static/monitor/default_submit.js",function(){
            console.log('success to listen in default')
        });
    }
    console.log(url);
}



function loadJs(url, callback) {
    //动态加载js资源
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (typeof (callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            script.onload = function () {
                callback()
            }
        }
    }
    script.src = url;
    document.head.appendChild(script);
}
