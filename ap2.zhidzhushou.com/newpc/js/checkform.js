// JavaScript Document
var allCheck = 
{	
    UserName : function ()
    {
        var returnval = false;
        var patrn = /^[a-zA-Z0-9_\u4E00-\u9FA5]{2,9}$/;
        if (patrn.test($.trim($('#username').val())) == false)
        {
            $("#show_username").html("只能由2-9位字母、数字、中文或下划线组成");
            $("#show_username").attr("class", "reg_wrong");
            return false
        }
        else
        {

        }
    },
    Password : function ()
    {
        if ($('#password').val().length>=6&&$('#password').val().length<20)
        {
            $("#show_password").html("&nbsp;");
            $("#show_password").attr("class", "reg_right");
            return true
        }
        else
        {
            $("#show_password").html("密码必需在6-20位以内的字符");
            $("#show_password").attr("class", "reg_wrong");
            return false;
        }
    },
    ConfirmPassword : function ()
    {
        if ($.trim($("#repassword").val()) == "")
        {
            $("#show_repassword").html("请输入确认密码");
            $("#show_repassword").attr("class", "reg_wrong");
            return false
        }
        else
        {
            if ($("#password").val() != $("#repassword").val())
            {
                $("#show_repassword").html("密码与确认密码不一致，请确认");
                $("#show_repassword").attr("class", "reg_wrong");
                return false
            }
            else
            {
                $("#show_repassword").html("&nbsp;");
                $("#show_repassword").attr("class", "reg_right");
                return true;
            }
        }
    },

    Sex : function ()
    {
		var val=$('#sex').val();
		if(val=="undefined"){
			$("#show_sex").html("请选择性别");
			$("#show_sex").attr("class", "reg_wrong");
			return false
            }
            else
			{
				$("#show_sex").html("注册后不可修改！");
				$("#show_sex").attr("class", "reg_right");
				return true;
            }
    },
    City : function ()
    {
        var city=$("#city").val();
		if (city=="0")
        {
            $("#show_city").html("请选择您来自哪个城市");
            $("#show_city").attr("class","reg_wrong");
            return false
        }
        else {
            $("#show_city").html("&nbsp;");
            $("#show_city").attr("class","reg_right");
            return true;
        }
    },
    Email : function ()
    {
        if (navyFun.checkEmail($('#email').val()) == false)
        {
            $("#show_email").html("邮箱地址格式错误，格式参考： yourname@163.com");
            $("#show_email").attr("class", "reg_wrong");
            return false
        }
        else if (navyFun.checkLength($.trim($('#email').val()), 8, 40) == false)
        {
            $("#show_email").html("邮箱地址有误或过长！");
            $("#show_email").attr("class", "reg_wrong");
            return false
        }
        else {
            $("#show_email").html("&nbsp;");
            $("#show_email").attr("class", "reg_right")
			return true
        }
    },
    Birthday : function ()
    {
        if (navyFun.checkBirthday($('#birthday').val()) == false)
        {
            $("#show_Birthday").html("出生年月的有误，请以“1985-10-01”格式输入");
            $("#show_Birthday").attr("class", "reg_wrong");
            return false
        }
        else
        {
			$("#show_Birthday").html("&nbsp;");
            $("#show_Birthday").attr("class", "reg_right");
            return true;
        }
    },
	QQTelWeixin : function()	
	{
		var qq=$("#qq").val()
		var weixin=$("#weixin").val()
		var mobile=$("#mobile").val()
		var email=$("#email").val();
		var semail=qq+"@qq.com";
		
		
		if(qq.length==0&&weixin.length==0&&mobile.length==0)
		{
			$("#show_mobile").html("手机、微信和QQ必须填写一项。").attr("class", "reg_wrong");
			return false
		}
		else
		{
			$("#show_mobile").html("&nbsp;").attr("class", "reg_right");
			if (navyFun.isnumber(mobile)&&mobile.length==11&&weixin.length<5){$("#weixin").val(mobile)}
			if (email.length<5&&navyFun.isnumber(qq)&&qq.length>=5&&qq.length<=12){$("#email").val(semail)}
            return true;
		}
	},
    QQ : function ()
    {
        if ($('#qq').val().length<5||$('#qq').val().length>12)
        {
            $("#show_qq").html("QQ号必需是5-12位的数字");
            $("#show_qq").attr("class", "reg_wrong");
            return false
        }
        else
        {
            $("#show_qq").html("&nbsp;");
            $("#show_qq").attr("class", "reg_right");
            return true;
        }
    },
    Mobile : function ()
    {
        if ($('#mobile').val().length!=11)
        {
            $("#show_mobile").html("手机是必须11位的数字");
            $("#show_mobile").attr("class", "reg_wrong");
            return false
        }
        else
        {
            $("#show_mobile").html("&nbsp;");
            $("#show_mobile").attr("class", "reg_right");
            return true;
        }
    },
    Loop : function ()
    {
        if (navyFun.checkRadio(document.form1.LoopId) ==- 1)
        {
            $("#show_info").html("“情趣”、“知已”，至少选择一个！");
            $("#show_info").attr("className", "reg_wrong");
            return false
        }
        else {
            $("#show_info").html("");
            $("#show_info").attr("className", "reg_right");
            return true;
        }
    },
    selectList : function ()
    {
        if (navyFun.checkSelect(document.form1.LoopId) == true)
        {
            $("#show_info").html("请选择");
            $("#show_info").attr("className", "reg_wrong");
            return false
        }
        else {
            $("#show_info").html("");
            $("#show_info").attr("className", "reg_right");
            return true;
        }
    },
    RadioList : function ()
    {
        if ($.trim($('#Tel').val()).length < 7)
        {
            $("#show_info").html("联系电话有误，可输入固定电话、手机等");
            $("#show_info").attr("className", "reg_wrong");
            return false
        }
        else {
            $("#show_info").html("");
            $("#show_info").attr("className", "reg_right");
            return true;
        }
    },
    Chucai : function ()
    {
        if ($.trim($('#Tel').val()).length < 7)
        {
            $("#show_info").html("联系电话有误，可输入固定电话、手机等");
            $("#show_info").attr("className", "reg_wrong");
            return false
        }
        else {
            $("#show_info").html("");
            $("#show_info").attr("className", "reg_right");
            return true;
        }
    },
    ChucaiDiQu : function ()
    {
        if ($.trim($('#Tel').val()).length < 7)
        {
            $("#show_info").html("联系电话有误，可输入固定电话、手机等");
            $("#show_info").attr("className", "reg_wrong");
            return false
        }
        else {
            $("#show_info").html("");
            $("#show_info").attr("className", "reg_right");
            return true;
        }
    }
}

function check()
{
	var frm = document.name_form ;
	if(checkRadio(frm.LoopId) == -1){
		alert("至少加入一个交友圈。");
		return false;
	}

	  if(checkSelect(frm.EduHistory)){ 
		alert("请选择您的教育程度。");
		frm.EduHistory.focus();
		return false;
	  }
	  if(checkSelect(frm.Hangye)){ 
		alert("请选择您从事的行业。");
		frm.Hangye.focus();
		return false;
	  }
	  if(checkSelect(frm.Zhiwei))
	  { alert("请选择您的职位。");
		frm.Zhiwei.focus();
		return false;
	  }
	  if(checkSelect(frm.Nianxin))
	  { alert("请选择您的年收入。");
		frm.Nianxin.focus();
		return false;
	  }
	if(checkSelect(frm.Shengao))
	  { alert("请选择您的身高。");
		frm.Shengao.focus();
		return false;
	  }
	if(checkSelect(frm.Tixing))
	  { alert("请选择您的体型。");
		frm.Tixing.focus();
		return false;
	  }
	if(checkSelect(frm.Xingge))
	  { alert("请选择您的性格。");
		frm.Xingge.focus();
		return false;
	  }
	if(checkSelect(frm.Qizhi))
	  { alert("请选择您的气质。");
		frm.Qizhi.focus();
		return false;
	  }
	  if(checkSelect(frm.Xiyan))
	  { alert("请选择您是否吸烟。");
		frm.Xiyan.focus();
		return false;
	  }
	  if(checkSelect(frm.Hejiu))
	  { alert("请选择您是否饮酒。");
		frm.Hejiu.focus();
		return false;
	  }
	  if(checkSelect(frm.MarryState))
	  { alert("请选择目前你的婚姻状况。");
		frm.MarryState.focus();
		return false;
	  }
	  if(checkRadio(frm.Chucai) == -1){ 
		alert("请选择出差情况。");
		return false;
	  }
	  if(navyFun.checkNumbLength(frm.ChucaiCity.value,1,20,false) == false){
		alert("出差城市不能为数字！");
		return false;
	  }
	  if(checkRadio(frm.HaveCar) == -1){ 
		alert("请选择是否拥有私家车。");
		return false;
	  }
	  if(checkRadio(frm.HaveVideo) == -1){ 
		alert("请选择是否有电脑摄像头。");
		return false;
	  }
	return true;
}
function checkUserEdit()
{
	var frm = document.userbaseform ;
	if(frm.Name.value.length < 2)
	{
		alert("请正确输入昵称");
		frm.Name.focus();
		return false;
	}
	if(frm.Name.value.length > 10)
	{
		alert("请正确输入昵称");
		frm.Name.focus();
		return false;
	}
	if(frm.Canton.value=="")
	{ 
		alert("请选择您的所在省份");
		frm.Canton.focus();
		return false;
	}
	if(frm.City.value=="")
	{ 
		alert("请选择您的所在地区");
		frm.City.focus();
		return false;
	}
	if(frm.Town.value=="")
	{ 
		alert("请选择您的所在城市");
		frm.Town.focus();
		return false;
	}
	if(frm.Birthday.value=="")
	{ 
		alert("请输入您的出生年月。");
		frm.Birthday.focus();
		return false;
	}
	if(checkSelect(frm.SexState)){
		alert("请选择您对性生活的态度。");
		frm.SexState.focus();
		return false;
	}
	if(checkSelect(frm.EloveState)){ 
		alert("请选择您对一夜情的态度。");
		frm.EloveState.focus();
		return false;
	  }
	  if(checkSelect(frm.EduHistory)){ 
		alert("请选择您的教育程度。");
		frm.EduHistory.focus();
		return false;
	  }
	  if(checkSelect(frm.Hangye)){ 
		alert("请选择您从事的行业。");
		frm.Hangye.focus();
		return false;
	  }
	  if(checkSelect(frm.Zhiwei))
	  { alert("请选择您的职位。");
		frm.Zhiwei.focus();
		return false;
	  }
	  if(checkSelect(frm.Nianxin))
	  { alert("请选择您的年收入。");
		frm.Nianxin.focus();
		return false;
	  }
	if(checkSelect(frm.Shengao))
	  { alert("请选择您的身高。");
		frm.Shengao.focus();
		return false;
	  }
	if(checkSelect(frm.Tixing))
	  { alert("请选择您的体型。");
		frm.Tixing.focus();
		return false;
	  }
	if(checkSelect(frm.Xingge))
	  { alert("请选择您的性格。");
		frm.Xingge.focus();
		return false;
	  }
	if(checkSelect(frm.Qizhi))
	  { alert("请选择您的气质。");
		frm.Qizhi.focus();
		return false;
	  }
	  if(checkSelect(frm.Xingzuo))
	  { alert("请选择您的星座。");
		frm.Xingzuo.focus();
		return false;
	  }
	  if(checkSelect(frm.Xiyan))
	  { alert("请选择您是否吸烟。");
		frm.Xiyan.focus();
		return false;
	  }
	  if(checkSelect(frm.Hejiu))
	  { alert("请选择您是否饮酒。");
		frm.Hejiu.focus();
		return false;
	  }
	  if(checkSelect(frm.MarryState))
	  { alert("请选择目前你的婚姻状况。");
		frm.MarryState.focus();
		return false;
	  }
	  if(checkRadio(frm.Chucai) == -1){ 
		alert("请选择出差情况。");
		return false;
	  }
	  if(checkRadio(frm.Chucai) != 1 && frm.ChucaiCity.value == ""){ 
		alert("请选择经常出差的城市。");
		return false;
	  }
	  if(checkRadio(frm.HaveCar) == -1){ 
		alert("请选择是否拥有私家车。");
		return false;
	  }
	  if(checkRadio(frm.HaveVideo) == -1){ 
		alert("请选择是否有电脑摄像头。");
		return false;
	  }
	return true;
}
function checkUserContact(){
	var frm = document.formc1 ;

	if(!chkemail(frm.Mail.value))
	{
		frm.Mail.focus();
		return false;
	}
	if(frm.QQ.value.length < 5)
	{ 
		alert("请输入您的联系QQ。");
		frm.QQ.focus();
		return false;
	}
	return true;
}

function checkUserPw(){
	var frm = document.form1 ;

	if(!chkpass(frm.User_Password_old.value))
	{
		frm.User_Password_old.focus();
		return false;
	}
	if(!chkpass(frm.User_Password.value))
	{
		frm.User_Password.focus();
		return false;
	}
	if(frm.User_Password.value!=frm.User_Password2.value)
	{
		alert("两次输入的密码不一致，请重新输入");
		frm.User_Password2.focus();
		return false;
	}
	return true;
}
function checkUserLoopState()
{
	var frm = document.name_form ;
	if(checkRadio(frm.LoopId) == -1){
		alert("至少加入一个交友圈。");
		return false;
	}
	return true ;
}
function checkSelect(fn){
	var f = eval(fn);
    for (i=0;i<f.length;i++){
        if (f.options[i].selected == true){
           if (f.options[i].value == "" || f.options[i].value == "-1"){
				return true;
           }
       } 
    }
	return false ;
}

function checkRadio(fn){
	var f = eval(fn);
	var count = -1 ;
    for (i=0;i<f.length;i++){
        if (f[i].checked == true){
				count = i;
				break;
       }
    }
	return count ;
}


function chkuser(str)
{
	var patrn=/^[a-zA-Z0-9_\u4E00-\u9FA5]{6,20}$/;
	if(!patrn.test(str))
	{
		//alert("用户名不正确：\n\n它应该是由6-20位的中文、英文、数字及下划线组成的字符");
		return false;
	}
	else{
		return true;
	}
}

function chkpass(str)
{
	var patrn=/^[a-zA-Z0-9_]{6,20}$/;
	if(!patrn.test(str))
	{
		alert("密码不正确：\n\n它应该是由6-20位的英文、数字及下划线组成的字符");
		return false;
	}
	else{
		return true;
	}
}

function chkemail(str)
{
	var patrn= /^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]*)*@[a-zA-Z0-9\-]+([\.][a-zA-Z0-9\-]+)+$/;
	if(!patrn.test(str))
	{
		alert("邮箱地址格式错误，请重新输入");
		return false;
	}
	else{
		return true;
	}
}
function ChkReg(frm)
{
	var frm = document.form1 ;

	if(!chkuser(frm.User_Name.value))
	{
		frm.User_Name.focus();
		return false;
	}

	if(!chkpass(frm.User_Password.value))
	{
		frm.User_Password.focus();
		return false;
	}
	if(frm.User_Password.value!=frm.User_Password2.value)
	{
		alert("两次输入的密码不一致，请重新输入");
		frm.User_Password2.focus();
		return false;
	}
	if(frm.Name.value.length < 2)
	{
		alert("请正确输入昵称");
		frm.Name.focus();
		return false;
	}
	if(frm.Name.value.length > 10)
	{
		alert("请正确输入昵称");
		frm.Name.focus();
		return false;
	}
	if(frm.Canton.value=="")
	{ 
		alert("请选择您的所在地区。");
		frm.Canton.focus();
		return false;
	}
	if(frm.City.value=="0")
	{ 
		alert("请选择您的所在城市。");
		frm.City.focus();
		return false;
	}
	if(frm.Birthday.value=="")
	{ 
		alert("请输入您的出生年月。");
		frm.Birthday.focus();
		return false;
	}
	if(!chkemail(frm.Mail.value))
	{
		frm.Mail.focus();
		return false;
	}
	if(frm.QQ.value.length < 5)
	{ 
		alert("请输入您的联系QQ。");
		frm.QQ.focus();
		return false;
	}
	return true;
}
function checkLoopEdit(frm)
{
	var frm = document.form1 ;

	if(checkSelect(frm.Canton1))
	{ 
		alert("至少选择一个地区。");
		frm.Canton1.focus();
		return false;
	}
	if(checkSelect(frm.City1))
	{ 
		alert("至少选择一个城市");
		frm.City1.focus();
		return false;
	}
	if(checkSelect(frm.Rongmao))
	{ 
		alert("请填选您的容貌");
		frm.Rongmao.focus();
		return false;
	}
	if(frm.Content.value.length < 20)
	{ 
		alert("请输入20字以上的宣言内容。");
		frm.Content.focus();
		return false;
	}
	if(frm.Yaoqiu.value.length < 20)
	{ 
		alert("请输入20字以上的交友要求。");
		frm.Yaoqiu.focus();
		return false;
	}
	return true;
}
function checkChucaiEdit(frm)
{
	var frm = document.form1 ;
	if(frm.Canton.value=="")
	{ 
		alert("请选择目的地的省会。");
		frm.Canton.focus();
		return false;
	}
	if(frm.City.value=="0")
	{ 
		alert("请选择目的地所在的城市。");
		frm.City.focus();
		return false;
	}
	if(frm.GetTime.value.length != 10)
	{ 
		alert("请选择此次行程的到达时间。");
		frm.GetTime.focus();
		return false;
	}
	if(frm.GoTime.value.length != 10)
	{ 
		alert("请选择此次行程的结束时间。");
		frm.GoTime.focus();
		return false;
	}
	if(checkRadio(frm.LoopIds) == -1){
		alert("至少选择一个交友圈。");
		return false;
	}
	return true;
}ue;
}