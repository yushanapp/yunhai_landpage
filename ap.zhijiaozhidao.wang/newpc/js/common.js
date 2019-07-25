// JavaScript 
$(function(){
    $("#submit").click(function(){
		if (WebForm_OnSubmit())
		{
			$("#login").submit();
		}
	})
	$(document).keydown(function(e){
		if(e.keyCode==13&&WebForm_OnSubmit())
		{
			$("#login").submit();
		}
	})
	$("#uploadpho").click(function(){
	
		if($("#mlgroupid").val()>1||$("#mlsex").val()==2)
		{
			$li=$(this).next("li");
			if ($li.hasClass("hide")){
				$li.removeClass("hide");
				$li.fadeIn().children("a").click(function(){
					$(this).parent().addClass("hide").fadeOut();
				});
			}
		}
		else
		{
			msg='只有女会员和C级或C级以上VIP会员才可以上传相册！';
			showDialog('vipalert.php?msg='+msg ,'系统消息',500,200,'')
		}
	})
	
})
$(document).ready(function(e) {
    getMsg();
});

function getMsg(){
  $.getJSON('/e/extend/History_Popup.php', function(json){
	$('#havemsg').html("（"+json.AllMess+" 新）");
  });
}
function getCity(){
	var _area=$('#area').val();
	var ajax = {
		 url		: "/e/extend/getCity.php?dt=" + navyFun.getdatetime(), 
		 data		: {area : _area},
		 type		: 'Post', 
		 dataType	: 'text', 
		 cache		: false,
		 success	: function (sReturn)
		 {
			//alert (sReturn);
			var str='';
			arr=sReturn.split("|")
			for (i=0;i<arr.length;i++)
			{
				str+='<option value="'+arr[i]+'">'+arr[i]+'</option>';
			}
			$("#city").html(str);
		 },
		 async : false
	};
	if(_area)
	{
		$.ajax(ajax);
	}
	else
	{
		$("#city").html('<option value="0">请选择城市</option>');
	}
}

function CheckVip(uid,msg){
		var ajax={
			 url		: "/e/extend/checkVip.php?dt=" + navyFun.getdatetime(), 
			 data		: {userid : uid, svar : msg},
			 type		: 'Post', 
			 dataType	: 'text', 
			 cache		: false,
			 success	: function (sReturn)
			 {
				
				state=sReturn.split("|")[0];
				alert (sReturn);
				if (state=="yes")
				{
					$("#"+msg).html(sReturn.split("|")[1]);
				}
				else if (state=="no")
				{
					showDialog('vipalert.php','系统消息',500,200)
				}
			 },
			 async : false
		};
		$.ajax(ajax);
}
function Message(fromUserid,toUsername){
		var ajax={
			 url		: "/e/extend/CheckQiuboMsg.php?dt=" + navyFun.getdatetime(), 
			 data		: {userid : fromUserid},
			 type		: 'Post', 
			 dataType	: 'text', 
			 cache		: false,
			 success	: function (sReturn)
			 {
				state=sReturn.split("|")[0];
				level=sReturn.split("|")[1];
				if (state=="yes")
				{
				showDialog('/e/member/msg/sendmsg.php?userid='+fromUserid+'&uname='+toUsername,'向【'+toUsername+'】发送悄悄话',600,300)
				}
				else if (state=="no")
				{
					showDialog('/e/member/msg/vipalert.php?msg='+level,'系统消息',500,200)
				}
				else
				{}
				
			 },
			 async : false
		};
		$.ajax(ajax);
}
function Contact(toUserid,toUsername){
		var ajax={
			 url		: "/e/extend/CheckContactLevel.php?dt=" + navyFun.getdatetime(), 
			 type		: 'Post', 
			 dataType	: 'text', 
			 cache		: false,
			 success	: function (sReturn)
			 {
				state=sReturn.split("|")[0];
				Msg=sReturn.split("|")[1];
				if (state=="yes")
				{
					showDialog('/e/member/ShowInfo/showContact.php?userid='+toUserid,'【'+toUsername+'】的联系方式',500,180)
				}
				else if(state=="no")
				{
					showDialog('/e/member/ShowInfo/vipalert.php?msg='+ Msg,'系统消息',500,200)
				}
				else
				{}
			 },
			 async : false
		};
		$.ajax(ajax);
}

function WebForm_OnSubmit() {
		var username=$('#username').val();
		if (username==""||username=="用户名/手机/邮箱")
		{
			alert("FUCK 有木有搞错?不输入用户名,你怎么登录呀!");
			$('#username').focus();
			return false;
		}
		if ($('#password').val() =="")
		{
			alert("FUCK 有木有搞错?不输入密码,你怎么登录呀!");
			$('#password').focus();
			return false;
		}

		return true;
}
function showDialog(url,title,_width,_height)
  {
  var diag = new Dialog();
  diag.Width = _width;
  diag.Height = _height;
  diag.Title = title;
  diag.URL = url;
  diag.show();
}
function handelMsg(id,action)
{
var ajax={
		 url		: "/e/extend/handelMsg.php?dt=" + navyFun.getdatetime(), 
		 data		: {mid : id,ac:action},
		 type		: 'Post', 
		 dataType	: 'text', 
		 cache		: false,
		 success	: function (sReturn)
		 {
			state=sReturn.split("|")[0];
			Msg=sReturn.split("|")[1];
			if (state=="yes")
			{
				alert(Msg);
				$("#msg_"+id).remove();
			}
			else
			{
				alert(Msg);
			}
		 },
		 async : false
	};
	$.ajax(ajax);  // 
}
function jubao()
{
	alert ("举报已受理！");
}
function switchTab(n,a){
	for(var i = 1; i <= a; i++){
		document.getElementById("tab_" + i).className = "";
		document.getElementById("tab_con_" + i).style.display = "none";
	}
	document.getElementById("tab_" + n).className = "cur";
	document.getElementById("tab_con_" + n).style.display = "block";
}
function preview(src){
	var $box=$(".swfbox");
	$("#swfloader").load('/e/member/msg/qiubo.php?src='+src);
	$box.fadeIn("fast");
}
function closeswf()
{
	var $box=$(".swfbox");
	$box.fadeOut("fast");
}
function Tougao(sclassid,suserid){
	var ajax={
		url			: "/e/extend/Tougao.php",
		data		: {classid:sclassid,userid:suserid},
		type		: 'Post', 
		dataType	: 'text', 
		cache		: false,
		success	: function (sReturn)
		 {
			 if (sReturn=="yes")
			 {
				 window.location.href='/e/DoInfo/AddInfo.php?classid='+sclassid+'&mid=13';
			 }
			 else
			 {
				
			 }
			 
		 },
		 async : false
	};
	$.ajax(ajax);
}
function TongCheng(){
	var smsg='安排同城异性聚会,同城富婆，少妇，猛男激情聚会,成功机会100%。省级以上大城市，一周一聚，中等城市两周一聚。每次都有新面孔。富豪会员才能申请，开通后，请相关人员安排。';
	showDialog("/e/msg/vipalert.php?msg="+smsg,"系统消息",500,260)
}
function loadMsg(){
	var url='/e/extend/LoadMsg.php';
	$.getJSON(url, function(json){
		  if (json.AllMess > 0) {
			 $('#havemsg').html("（"+json.AllMess+" 新）");
		  }
	});
}
function mobile_device_detect(url)
{
	var thisOS=navigator.platform;
	var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
	for(var i=0;i<os.length;i++)
	{
		if(thisOS.match(os[i]))
		{  
			window.location=url;
		}
	}
	if(navigator.platform.indexOf('iPad') != -1)
	{
		window.location=url;
	}
	var check = navigator.appVersion;
	if( check.match(/linux/i) )
	{
		if(check.match(/mobile/i) || check.match(/X11/i))
		{
			window.location=url;
		} 
	}
	//类in_array函数
	Array.prototype.in_array = function(e)
	{
		for(i=0;i<this.length;i++)
		{
			if(this[i] == e)
			return true;
		}
		return false;
	}
}
function clear_text(obj)
{
   if(obj.value=="用户名")
   {
	   obj.value="";
   }
}
function check_text(obj)
{
   if(obj.value == "")
   {
	   obj.value='用户名';
   }
}
function clear_label_focus()
{
	var obj = $("#label_pw_hi");
   if(obj.text() == "密码")
   {
	   obj.attr({style:"display: none;"});
   }
}
function check_label_onblur()
{		
	var obj = $("#label_pw_hi");
   if($("#password").val() == "")
   {
	   obj.attr({style:"display: block;"});
   }
}
function shoucang(sTitle,sURL) 
{ 
try 
{ 
window.external.addFavorite(sURL, sTitle); 
} 
catch (e) 
{ 
try 
{ 
window.sidebar.addPanel(sTitle, sURL, ""); 
} 
catch (e) 
{ 
alert("加入收藏失败，请使用Ctrl+D进行添加"); 
} 
} 
} 