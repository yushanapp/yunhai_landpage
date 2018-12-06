// JavaScript Document
function closef_c()
{
  var obj = document.getElementById( "f_c" );
  obj.style.visibility = "hidden";
}

window.onload = function(){
     window.setInterval(function(){
          document.getElementById('f_c').style.display='block';
    },30000);	 
};
document.write("<style>");
document.write("<!--");
document.write("#f_c { position:fixed;_position:absolute; z-index:999; top:150px; left:50%; width:240px; margin-left:-120px;display:none;-moz-box-shadow: 0px 0px 10px #000000;-webkit-box-shadow: 0px 0px 10px #000000;box-shadow: 0px 0px 10px #000000;}");
document.write("#f_c .close { position:absolute; right:0px; top:0px; display:block; width:20px; height:20px;}");
document.write("-->");
document.write("</style>");
document.write("<div id=\"f_c\">");
document.write("    <a onclick=\"doyoo.util.openChat('g=10079387');return false;\"><img onclick=\"javascript:closef_c();\" src=\"/leyu/bg_tel_599/kj.gif\" width=\"240\" border=\"0\"></a>");
document.write("    <img class=\"close\" onclick=\"javascript:closef_c();\" src=\"/leyu/bg_tel_599/close.gif\" border=\"0\">");
document.write("</div>");
document.write("<br />");
