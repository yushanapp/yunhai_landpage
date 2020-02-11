// JavaScript Document
$(document).ready(function(){
	$('#btnSubmit').click(function(){
		saveRegister();
	});
	$("#btnLogin").click(function(){
		if (WebForm_OnSubmit())
		{
			$("#login").submit();
		}
	})
	$('#register select[name=sex]').bind("blur", sexBlur);
	$('#register select[name=sex]').bind("focus", sexFocus);
	$('#register input[name=username]').bind("blur", userNameBlur);
	$('#register input[name=username]').bind("focus", userNameFocus);
	$('#register input[name=password]').bind("blur", passwordBlur);
	$('#register input[name=password]').bind("focus", passwordFocus);
	$('#register input[name=repassword]').bind("blur", confirmPasswordBlur);
	$('#register input[name=repassword]').bind("focus", confirmPasswordFocus);
	$('#qq').bind("blur", qqBlur);
	$('#qq').bind("focus", qqFocus);
	$('#mobile').bind("blur", mobileBlur);
	$('#mobile').bind("focus", mobileFocus);

});
function WebForm_OnSubmit() {
			var form =document.getElementById('login');
			if (form.username.value ==""||form.username.value =="用户名/手机/邮箱")
			{
				alert("FUCK 有木有搞错?不输入用户名,你怎么登录呀!");
				form.username.focus();
				return false;
			}
			if (form.password.value =="")
			{
				alert("FUCK 有木有搞错?不输入密码,你怎么登录呀!");
				form.password.focus();
				return false;
			}

			return true;
	}
function saveRegister(){
   if(checkSubmit()) {
		$("#register").submit();
   }
   else
   {
$("#register").submit();
		
   }
}
function userNameFocus()
{
	$('#show_username').html("<b style=\"color:Red;\">严格保密，作为登录帐户</b>");
	$('#show_username').attr("class","reg_notice");
}
function userNameBlur()
{ 
	 allCheck.UserName();
} 
function passwordFocus()
{
   $('#show_password').html("密码是由6-20位的数字、字母组成");
   $('#show_password').attr("class","reg_notice");
}        
function passwordBlur()
{
	allCheck.Password();
}
function confirmPasswordFocus()
{
   $('#show_repassword').html("请再次输入相同的密码");
   $('#show_repassword').attr("class","reg_notice");
}        
function confirmPasswordBlur()
{
	allCheck.ConfirmPassword();
}
function sexFocus()
{ 
   $('#show_sex').html("注册后不能修改！");
   $('#show_sex').attr("class","reg_notice");
}   
function sexBlur()
{
	allCheck.Sex();
}
function cityFocus()
{ 
   $('#show_city').html("请选择所在城市");
   $('#show_city').attr("class","reg_notice");
}   
function cityBlur()
{
	allCheck.City();
}
function qqFocus()
{ 
   $('#show_qq').html("QQ为5-12位的数字。");
   $('#show_qq').attr("class","reg_notice");
}  
function qqBlur()
{
	allCheck.QQ();
} 
function mobileFocus()
{ 
   $('#show_mobile').html("手机为11位数字。");
   $('#show_mobile').attr("class","reg_notice");
}
function mobileBlur()
{
	allCheck.Mobile();
}   
function checkSubmit()
{
   var error = 0;
  
   if(!allCheck.UserName())
	error++;
   if(!allCheck.Password())
	 error++;
   if(!allCheck.ConfirmPassword())
	 error++;
   if(!allCheck.City())
	 error++;
   if(!allCheck.QQ())
	 error++;
   if(!allCheck.Mobile())
	 error++;
	
   if(error>0)
   {
	  return false;
   }
   else
   {
	  return true;
   }
}
function getCity(){
	var _area=$('#area').val();
	var ajax = {
		 url		: "/e/extend/getCity.asp?dt=" + navyFun.getdatetime(), 
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