// JavaScript Document
// 获取URL
$(function(){
		$('#leaveMsgForm #url').val($(document)[0].URL);
		$('#leaveMsgForm1 #url').val($(document)[0].URL);
		$('#leaveMsgForm2 #url').val($(document)[0].URL);
		$('#leaveMsgForm3 #url').val($(document)[0].URL);
		$('#leaveMsgForm4 #url').val($(document)[0].URL);
		$('#leaveMsgForm5 #url').val($(document)[0].URL);
		$('#leaveMsgForm6 #url').val($(document)[0].URL);
		$('#leaveMsgForm7 #url').val($(document)[0].URL);
                $('ins#LXB_CONTAINER_SHOW').css({'height':'auto','width':'auto','padding':'10px 20px'})

	});
// 适配 手机
  if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
       var version = parseFloat(RegExp.$1);
    if(version>2.3){
       var phoneScale = parseInt(window.screen.width)/1000;
       document.write('<meta name="viewport" content="width=1000, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', user-scalable=no, target-densitydpi=device-dpi">');
       }else{
            document.write('<meta name="viewport" content="width=1000, target-densitydpi=device-dpi">');
       }
       }else{
            document.write('<meta name="viewport" content="width=1000, user-scalable=no, target-densitydpi=device-dpi">');
       }
// 正则判断

		var checkmingzi= {};
		var checkdianhua= {};
			//验证姓名
		function check1(t){
			var form = $(t).parents('form');
			var formid = form[0].id;
			var na=t.value;
//			if(t.value=="" || t.value == " "){
//				alert("必填");
//				return;
//			}
			var pattern = /^[a-zA-Z0-9_\u4e00-\u9fa5]{2,20}$/;
			if(pattern.test(na))
			{
				
				checkmingzi[formid] = true;
				return;
			}else{
				alert("请输入真实姓名！");
				checkmingzi[formid] = false;
				return;
			}
		}
		
		//验证手机
		function check2(t){
			var form = $(t).parents('form');
			var formid = form[0].id;
			psd1=t.value;
			var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-?)(\d{7,8})(-?(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
			if(pattern.test(psd1)) {
				
				checkdianhua[formid] = true;
				
				return true;
			}else{
				alert("请输入正确联系方式！");
				checkdianhua[formid] = false;
				return false;
			}
		}	
		
         if($('#checkbox').is(':checked')) {
    // do something
}
		
        
         var isCommitted = {};
		 function submitform(button){
		 	var form = $(button).parents('form');
		 	var formid = form[0].id;
			if( (checkmingzi.hasOwnProperty(formid) &&checkdianhua.hasOwnProperty(formid) 
			     && checkmingzi[formid] && checkdianhua[formid])
			     //添加抢占名额验证
			     ||(checkdianhua2.hasOwnProperty(formid)&& checkdianhua2[formid])){
				if(!isCommitted.hasOwnProperty(formid)||!isCommitted[formid]){
				   isCommitted[formid]=true;
				   alert("您输入的信息已经提交，稍后会有专业的老师与您联系~");
				  $.post("http://myjaq.com/liuyan/tijiao.php",form.serialize(),function(data){
				  	console.log("已经提交")
				  });
				}else{
					alert("不能重复提交表单");
					return false;
				}
			}else{
				alert("请正确填写！");
				return false;
			}
		}




		//验证手机抢占名额
		var checkdianhua2= {};
		function check3(t){
			var form = $(t).parents('form');
			var formid = form[0].id;
			psd1=t.value;
			var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-?)(\d{7,8})(-?(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
			if(pattern.test(psd1)) {
				
				checkdianhua2[formid] = true;
				
				return true;
			}else{
				alert("请输入正确联系方式！");
				checkdianhua2[formid] = false;
				return false;
			}
		}	
