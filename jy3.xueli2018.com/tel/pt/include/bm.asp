<div id="bm">
<a name="#bm"></a>        
<div class="m">
    <script language="javascript">
	function baomi(theform)
	{
		if(theform.name.value=="" || theform.name.value=="请填写学生姓名")
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
		if(theform.mobile.value.length<11)
		{
			alert("请正确填写联系电话");
			return false;
		}
		if(theform.sex.value=="")
		{
			alert("请选择性别");
			theform.sex.focus();
			return false;
		}
		if( theform.year.value==""   ||  theform.month.value==""    ||  theform.day.value=="" )
		{
			alert("请选择出生年月日");
			return false;
		}
		
		
	}
</script> 
        <form name="form1" action="/tel/pt/join/join_ok.php" method="post" onSubmit="return baomi(this)">
        <input type="hidden" name="actcode" value="10080" />  
        <ul>
        
        <li>
        <span>学生姓名</span>    
        <input type="text" name="name" size="13" maxlength="25" onFocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" value="请填写学生姓名"  />
        </li>  
        
        
        <li>
        <span>联系电话</span>
        <input  name="mobile" type="text" value="请填写联系电话" onFocus="if (this.value == this.defaultValue) this.value='';" onBlur="this.value=this.value.Trim(); if (this.value=='') this.value=this.defaultValue;" class="input_a"  maxlength="12"  onkeyup="value=value.replace(/[^\d]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"/>
        </li>
        
        <li>
        <span>性别</span>
        
        <select name="sex">
        <option value="">请选择</option>
        <option value="女">女</option>
        <option value="男">男</option>
        
        </select>
        
        </li>  
        
        
        
        <li>  
        <span>出生年月</span>
        <select name="year" id="year" style="width:30%;">
              <option value="">年</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              </select>
              <select name="month" id="month" style=" width:30%;">
                <option value="">月</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                </select>
              <select name="day" id="day" style=" width:30%;">
                <option value="">日</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                </select>
        </li>
        
        </ul>
        <center>
        <label><input class="b" type="submit" name="submit" value="√ 确认提交" /></label>
        </center>
        </form>


</div>
</div>
