// JavaScript Document
function closef_c()
{
  var obj = document.getElementById( "f_c" );
  obj.style.visibility = "hidden";
  var obj = document.getElementById( "f" );
  obj.style.visibility = "hidden";

}

window.onload = function()
{
     window.setInterval(function(){
          document.getElementById('f_c').style.display='block';
		  document.getElementById('f').style.display='block';

    },30000);

	 
	 
};

document.write("<style>");
document.write("<!--");
document.write("#f { position:fixed;_position:absolute; z-index:99999998; top:0px; left:0px; height:100%; width:100%; background:#000; display:none; filter:alpha(opacity=50); opacity:0.5;}");
document.write("#f_c { position:fixed;_position:absolute; z-index:99999999; top:120px; left:50%; width:70%; max-width:450px; margin-left:-35%;display:none;-moz-box-shadow: 0px 0px 10px #000000;-webkit-box-shadow: 0px 0px 10px #000000;box-shadow: 0px 0px 10px #000000;}");
document.write("#f_c .close { position:absolute; left:50%; bottom:-60px; margin-left:-25px; display:block; width:50px; height:50px;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;-moz-box-shadow: 0px 0px 10px #000000;-webkit-box-shadow: 0px 0px 10px #000000;box-shadow: 0px 0px 10px #000000; }");
document.write("-->");
document.write("</style>");
document.write("<div id=\"f\"></div>");
document.write("<div id=\"f_c\">");
document.write("    <a onclick=\"doyoo.util.openChat('g=10079387');return false;\"><img onclick=\"javascript:closef_c();\" src=\"/leyu/bg_tel_599/bjlgdxfsfx.png\" width=\"100%\" border=\"0\"></a>");
document.write("    <img class=\"close\" onclick=\"javascript:closef_c();\" src=\"/leyu/bg_tel_599/close.png\" width=\"100%\" border=\"0\">");
document.write("</div>");
