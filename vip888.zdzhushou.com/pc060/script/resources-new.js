var url = "/source/collect.do";
var layer_dx,sendNum=0,SuccessDiv,isPc=false;//短信弹窗,发送数量,发送dom

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function getContent() {
	var content = [];
	$("[lz-key]").each(function() {
		var key = $(this).attr('lz-key');
		var type = $(this).attr('lz-key-type');
		var title = $(this).attr('lz-key-data');
		var value = "";
		if (type == 'input') {
			value = $("[lz-value = '" + key + "']").val();
		}else if(type == 'select'){
			value = $("[lz-value = '" + key + "']").val();
		}else if(type == 'checkbox'){
			value = getCheckBoxValue(key);
		}
		var ele = {
			'key' : title,
			'value' : value
		}
		content.push(ele);
	});
	return JSON.stringify(content);
}

function getCheckBoxValue(attrValue){
	var value = "";
	$("[lz-value = '" + attrValue + "']:checked").each(function(){
       value+=$(this).val()+",";
       });
	return value;
}

function getReferrer() {
	if (document.referrer) {
		return document.referrer;
	} else {
		return "";
	}
}


function submitData(plan, nameId, mobileId, successDiv, nameArt, mobileArt,isPcs) {
	var content = getContent();
	SuccessDiv=successDiv;
	var name = $("#" + nameId).val();
	var mobile = $("#" + mobileId).val();
	var sourceUrl = location.href;
	var refererUrl = getReferrer();
	var userAgent = navigator.userAgent;
	var channel = GetQueryString('c');
	var send = GetQueryString('m');
	var executer = GetQueryString('e');
	var planName = GetQueryString('p');

    mobile=mobile.trim().replace(" ","").replace(" ","");
	if(isPcs)isPc=true;
	if (name == null || name == '') {
		if (nameArt != null) {
			alert(nameArt);
		}
		return false;
	}
	if (mobile == null || mobile == '') {
		if (mobileArt != null) {
			alert(mobileArt);
		}
		return false;
	}
	if (!validatemobile(mobile)) {
		return false;
	}
				var data ={
				"age":$(".input-age").val(),
				"sex":$("#sex").val(),
				"money":$("#jine").val(),
				"type":$(".input-type").val(),
				"name":$("#name").val(),
			};
			 var param = {
			            "platform": null,
			            "phones": mobile,
			            "name": '',
			            "status": 1,
						"types":'保险',
						"keywords":"年龄:"+data.age+";性别:"+data.sex+";金额:"+data.money+";交费方式:"+data.type+";姓名:"+data.name
			     };
				 console.log(param.keywords);
	$.ajax({
		url : "http://tuivip.haic666.com/vip888/ajax.php",
		data : param,
		type : "POST",
		dataType : 'json',
		success : function(res) {
			alert("恭喜您已提交成功！稍后会有工作人员联系您！");
		}
	});
}

function validatemobile(mobile) {

	if (mobile.length == 0) {
		alert('请输入手机号码！');
		document.form1.mobile.focus();
		return false;
	}


	var myreg = /^(1[0-9]{10})$/;
	if (!myreg.test(mobile)) {
		alert('请输入有效的手机号码！');
		document.form1.mobile.focus();
		return false;
	}
	return true;
}
//短信验证码弹窗
function layerFroDx(){
	if(!isPc){
		layer_dx = layer.open({
          type: 1,
          anim: 2,
          area: ['100%', '100vh'],
          shadeClose: true, //开启遮罩关闭
          content: $(".lz-layers-virify"),
          title: false,
          shade:0.3,
          closeBtn: 0,
          skin: "lz-mask-box"
      });
	}else{
		layer_dx = layer.open({
          type: 1,
          anim: 2,
          area: ['400px'],
          shadeClose: false, //开启遮罩关闭
          content: $(".lz-layers-virify"),
          title: false,
          shade:0.3,
          closeBtn: 1,
      });
	}


  }
  function checkVery(){

  	$("#sendVery").on("click",function(e){

  		if(sendNum>0)return;
  		sendNum++;
  		var text=$("#verification").val();
  		if(!text){
  			sendNum=0;
  			layer.msg("验证码尚未填写");
  			return;
  		}
  		$.ajax({
			url : "/source/checkSms.do?code="+text,
			data : "",
			type : "GET",
			dataType : 'script',
			success : function() {
				sendNum=0;
				if (result.success == 0) {
					layer.msg("验证码校验失败");
					return;
				}
				layer.close(layer_dx);
				show(SuccessDiv);
			},
			error : function() {
				alert("提交失败");
			}
		})
  	})

  	$(".vir-close").on("click",function(){
	    layer.close(layer_dx)
	})
  }


  $(function(){
  	setTimeout(function(){
  		checkVery();
  	},2000)
  })
