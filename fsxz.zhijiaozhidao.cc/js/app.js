
function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return '';
}

function isIos() {
	var u = navigator.userAgent, app = navigator.appVersion; 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	console.log("isiOS:" + isiOS);
	console.log("isAndroid:" + isAndroid);
	return isiOS;
}

function loadBody(divid) {
    var a = $("#" + divid).height();
    var b = $(window).height();
    if(b > a) {
        $("#" + divid).height(b);
    }
}