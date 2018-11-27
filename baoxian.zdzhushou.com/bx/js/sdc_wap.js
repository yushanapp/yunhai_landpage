
function loadWTScript(a, b) {
	var c = document.createElement("script");
	c.type = "text/javascript",
	c.async = !0,
	c.src = a,
	dcsReady(c, b),
	document.getElementsByTagName("head")[0].appendChild(c)
}
function dcsReady(a, b) {
	a.readyState ? a.onreadystatechange = function() { ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, b())
	}: a.onload = function() {
		b()
	}
}

loadWTScript(window.location.protocol.indexOf('https:')==0?'https://pa-ssl.pingan.com/app_js/sdc/prd/sdc9_m.js':'http://www.pingan.com/app_js/sdc/prd/sdc9_m.js', function(){ 
    if (typeof(_tag) != "undefined"){
        _tag.DCSext.platform="pingan-wap";
        var s=_tag.dcsGetIdAsync();
        if(s) 
            dcsReady(s,function(){_tag.dcsCollect()});
        else
            _tag.dcsCollect();
    }
})
