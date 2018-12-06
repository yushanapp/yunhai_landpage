// JavaScript Document
<!--
function $(objName){
	return eval('document.getElementById("' + objName + '")');	
}
function ChangMenu(n,Fid,lis){
	for(var i = 0; i < lis.length; i++){ 
		lis[i].className = (i == n) ? "on" : "";
		$(Fid+"_"+i).style.display = (i == n) ? "block" : "none";
	}
}
function BindMenu(Fid,Cid){
	var lis = $(Fid).getElementsByTagName(Cid);
	for(var x = 0; x < lis.length; x++){ eval("lis[x].onclick = function(){ChangMenu("+x+",'"+Fid+"',lis);}"); }
}
-->
