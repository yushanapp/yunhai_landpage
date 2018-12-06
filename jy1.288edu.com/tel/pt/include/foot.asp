

<style type="text/css"> 
.white_content{ display:none;position:fixed;_position:absolute; top:50%; margin-top:-100px; left:50%; margin-left:-60px;width:100px; padding:10px; z-index:30;overflow:hidden; text-align:center; background:white;  line-height:1.5;-moz-box-shadow: 0px 0px 10px #000000;-webkit-box-shadow: 0px 0px 10px #000000;box-shadow: 0px 0px 10px #000000;}
</style>
<div id="light" class="white_content"><img src="img/wx.gif" width="100" style="margin-bottom:5px;" />长按识别二维码<br />微信24小时咨询
</div>
<a href="javascript:void(0)" onClick="document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'" id="fade" style="position:fixed;_position:absolute; top:0px; left:0px; z-index:29;background:#000; width:100%; height:100%; display:none; filter: alpha(opacity=50); opacity:0.5;"></a>

<div id="foot">
    	<ul>
        <li style="width:24%;"><a style="background:url(img/bottom1.png) 10px center no-repeat;" onclick="doyoo.util.openChat('g=10079387');return false;">点击咨询</a></li>
        <li style="width:24%;"><a style="background:url(img/bottom2.png) 10px center no-repeat;" href="tel:13311109354">立即通话</a></li>
        <li style="width:24%;"><a style="background:url(img/bottom3.png) 10px center no-repeat;" href="bm.asp">在线报名</a></li>
        <li style="width:28%;"><a style="padding-left:0px;" href="tzs.asp">录取通知书申请</a></li>
        </ul>
    </div>
<!--51la-->
<div style="height:0px; width:0px; display:block; overflow:hidden;">
<script language="javascript" type="text/javascript" src="http://js.users.51.la/992415.js"></script>
</div>



<div id="call">

<script language="javascript">
	function bottom(theform)
	{
		if(theform.name.value==""||theform.name.value=="学生姓名")
		{
			alert("请填写学生姓名");
			theform.name.focus();
			return false;
		}
		str = theform.name.value;
		re = /[\u4E00-\u9FA0]/;
		if (!re.test(str))
		{	alert("姓名必须中文填写!");
			theform.name.select();
			theform.name.focus();
			return false;
		}
   if(theform.mobile.value.length < 11)
   {  
    //验证手机号为11位
    alert("请正确填写联系电话")
    theform.mobile.focus();
    return false;
   }

	}
</script>

<form action="/tel/pt/join_b/join_ok.php" method="post" name="form20" onSubmit="return bottom(this);">
<input type="hidden" name="actcode" value="10080" />
        <ul>

        <li class="one">
<input name="name" type="text"  maxlength="10"  onfocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" value="学生姓名"  />
        </li>
        
        <li class="two">
<div><input  name="mobile" type="text" value="联系电话" onFocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" class="input_a"  maxlength="12"  onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/></div>
        </li>
        
        <li class="three">
        <input class="b" type="submit" name="button" id="button" value="招办老师给您回电" />
        </li>

        </ul>
</form>
        </div>
        
<!--51la-->
<div style="height:0px; width:0px; display:block; overflow:hidden;">
<script language="javascript" src="/tel/pt/js/take_bjlgdxfsfx.js" type="text/javascript"></script>
</div>
