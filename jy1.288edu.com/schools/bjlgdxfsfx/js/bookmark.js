function bookmark(){
        if(getCookie("bookmark")!="yes"){
        	setCookie("bookmark","yes",7);
			if (window.sidebar){
				window.sidebar.addPanel('0',''); 
			}else if(document.all){
				window.external.AddFavorite('0');
			}else if(window.opera && window.print){
				return true;
			}
        }
}

function setCookie(name,value,days){
        var exp=new Date();
        exp.setTime(exp.getTime() + days*24*60*60*1000);
        var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();
}
function getCookie(name){
        var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr!=null){
                return unescape(arr[2]);
                return null;
        }
}  
function delCookie(name){
        var exp=new Date();
        exp.setTime(exp.getTime()-1);
        var cval=getCookie(name);
        if(cval!=null){
                document.cookie=name+"="+cval+";expires="+exp.toGMTString();
        }
}
window.onbeforeunload = function(){       
	var n = window.event.screenX-window.screenLeft;       
    var b = n>document.documentElement.scrollWidth-20;       
    if(b&&window.event.clientY<0||window.event.altKey){
		bookmark();
	}  
}

//对联开始
document.write('<div id="l_Ad" style="position:absolute; z-index:10px; top:150px; left:0px;"><a href="xly.html" target="_blank"><img src="img/xly.gif" border="0" /></a></div>');
/*
document.write('<div id="r_Ad" style="position:absolute; z-index:10px; top:10px; right:0px;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="26" height="360"><param name="movie" value="http://www.zhaoban.org/img/r_ad.swf" /><param name="quality" value="high" /><embed src="http://www.zhaoban.org/img/r_ad.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="26" height="360"></embed></object></div>');*/
window.onscroll=function(){
	setTimeout(function(){
		document.getElementById('l_Ad').style.top = document.documentElement.scrollTop+150+'px';
		/*document.getElementById('r_Ad').style.top = document.documentElement.scrollTop+10+'px';*/
	},100);
}