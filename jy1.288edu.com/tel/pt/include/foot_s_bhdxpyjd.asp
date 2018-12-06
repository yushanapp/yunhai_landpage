<!--a id="floar_right" onclick="doyoo.util.openChat('g=10079387');return false;" style="position:fixed;_position:absolute; top:200px; right:0px; z-index:10; padding:10px 0px; width:24px; overflow:hidden;-moz-border-radius:10px 0px 0px 10px;-webkit-border-radius:10px 0px 0px 10px; border-radius:10px 0px 0px 10px;filter:alpha(opacity=70); opacity:0.7; background:red; font-size:12px; font-weight:bold; color:white; line-height:1.1; text-shadow:0px 0px 1px #000; text-align:center;">在<br />线<br />咨<br />询<br />专<br />家</a-->


<div id="foot_bg">
<script language="javascript">
	function close_bottom()
	{
	  var obj = document.getElementById( "call_t" );
	  obj.style.visibility = "hidden";
	  var obj = document.getElementById( "foot" );
	  obj.style.visibility = "hidden";
	  var obj = document.getElementById( "call" );
	  obj.style.visibility = "hidden";
	  var obj = document.getElementById( "foot_bg" );
	  obj.style.bottom = "-85px";
	  var obj = document.getElementById( "close_bottom" );
	  obj.style.visibility = "hidden";
	  var obj = document.getElementById( "open_bottom" );
	  obj.style.visibility = "visible";
	  var obj = document.getElementById( "wx" );
	  obj.style.bottom = "8px";
	}
	function open_bottom()
	{
	  var obj = document.getElementById( "call_t" );
	  obj.style.visibility = "visible";
	  var obj = document.getElementById( "foot" );
	  obj.style.visibility = "visible";
	  var obj = document.getElementById( "call" );
	  obj.style.visibility = "visible";
	  var obj = document.getElementById( "foot_bg" );
	  obj.style.bottom = "0px";
	  var obj = document.getElementById( "close_bottom" );
	  obj.style.visibility = "visible";
	  var obj = document.getElementById( "open_bottom" );
	  obj.style.visibility = "hidden";
	  var obj = document.getElementById( "wx" );
	  obj.style.bottom = "93px";
	}
</script>
<a id="close_bottom" href="javascript:close_bottom();" style=" display:block; position:absolute; width:40px; overflow:hidden; text-align:center; height:7px; padding:10px 0px; top:-27px; left:50%; margin-left:-20px; z-index:10; color:white; background:#000;-moz-border-radius:5px 5px 0px 0px;-webkit-border-radius:5px 5px 0px 0px;border-radius:5px 5px 0px 0px;" ><img src="/tel/pt/img/close_bottom.png" /></a>
<a id="open_bottom" href="javascript:open_bottom();" style="display:block;  position:absolute; width:40px; overflow:hidden; text-align:center; height:7px;padding:10px 0px; top:-27px; left:50%; margin-left:-20px; z-index:9; color:white; background:#000;-moz-border-radius:5px 5px 0px 0px;-webkit-border-radius:5px 5px 0px 0px;border-radius:5px 5px 0px 0px;" ><img src="/tel/pt/img/open_bottom.png" /></a>
</div>



<div id="call_t">

<script language="javascript">
	function bottom_t(theform)
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

<form action="/tel/pt/join_b/join_ok.php" method="post" name="form21" onSubmit="return bottom_t(this);">
<input type="hidden" name="actcode" value="10080" />
        <ul>

        <li class="one">
        <input name="name" type="text"  maxlength="10"  onfocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" value="学生姓名"  />
        </li>
        
        <li class="two">
<div><input name="mobile" type="text" value="联系电话" onFocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" class="input_a"  maxlength="12"  onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/></div>
        </li>
        
        <li class="four">
<div><input  name="" type="text" value="学历" onFocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" /></div>
        </li>
        
        <li class="three">
        <input class="b" type="submit" name="button" id="button" value="录取通知书申请" />
        </li>

        </ul>
</form>
        </div>

<style type="text/css"> 
.white_content{ display:none;position:fixed;_position:absolute; top:50%; margin-top:-100px; left:50%; margin-left:-60px;width:100px; padding:10px; z-index:30;overflow:hidden; text-align:center; background:white;  line-height:1.5;-moz-box-shadow: 0px 0px 10px #000000;-webkit-box-shadow: 0px 0px 10px #000000;box-shadow: 0px 0px 10px #000000;}
</style> 
<div id="light" class="white_content"><img src="/wx/ii5599.gif" width="100" style="margin-bottom:5px;" />长按识别二维码<br />（微信号 ii5599）
</div>
<a href="javascript:void(0)" onClick="document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'" id="fade" style="position:fixed;_position:absolute; top:0px; left:0px; z-index:29;background:#000; width:100%; height:100%; display:none; filter: alpha(opacity=50); opacity:0.5;"></a>


    <div id="foot"><!--a href="/tel/hb/"><img style="position:absolute; z-index:200; left:0px;top:-89px;" src="/img2/hongbao.gif" width="60" /></a><a onclick="doyoo.util.openChat('g=10079387');return false;"><img style="position:absolute; z-index:200; left:0px;top:-150px;" src="/img2/qq.gif" width="60" /></a>
<marquee style="position:absolute; z-index:200; left:0px;top:-55px; margin-left:64px; height:14px; display:block;text-shadow:0px 0px 5px white;" onmouseover="this.stop();" onmouseout="this.start();" direction="left" behavior="scroll"><a href="/tel/pt/tzs_s.php" style="color:red;font-size:14px; line-height:1;">【录取通知书现已陆续发放，还未报名的同学请抓紧时间报名】</a></marquee-->

    	<ul>
        <li style="width:33%;"><a style="background:#4ac6f9;" onclick="doyoo.util.openChat('g=10079387');return false;"><span>1</span>在线咨询专家</a></li>
        <li style="width:33%;"><a style="background:#7bc31f;" href="tel:13311109354"><img src="/tel/pt/img/phone.png" height="16" />立即通话</a></li>
        <li style="width:33%;"><a style="background:#fb6e72;" href="/tel/pt/bm_s.php">在线报名</a></li>

        </ul>
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
<script language="javascript" src="/tel/pt/js/take_bhdxpyjd.js" type="text/javascript"></script>
</div>
