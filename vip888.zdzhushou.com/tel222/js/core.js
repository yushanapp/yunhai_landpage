if(!window.pa){
	pa={};
}
pa.contextPath="/pa18shoplife";
pa.submitURI=pa.contextPath+"/engine.ajax";
pa.flowId='';
pa.set=function(params){
	for(var k in params){
		if(k){
			pa[k]=params[k];
		}
	}
}
pa.init=function(flowId){if(flowId){pa.flowId=flowId;}}

function RequestDefined(reqId,validators){
	this.reqId=reqId;
}

function mediaFromUrl() {
	var theUrl = window.location.href;
	var mediaSource='';
	var paramIndex = theUrl.indexOf("WT.mc_id=");
	if(paramIndex != -1) {
		mediaSource = theUrl.substring(paramIndex);
		var pIndex = mediaSource.indexOf("&");
		if(pIndex != -1) {
			mediaSource = mediaSource.substring(0,pIndex);
		}
		mediaSource = mediaSource.substring(9);
	}else {
		mediaSource = "";
	}
	
	return mediaSource;
}

RequestDefined.prototype={
	submit:function(params,callback,beforesend,errorback){
		var mediaSource = mediaFromUrl();
		var uri=pa.submitURI+"?flowId="+pa.flowId+"&reqId="+this.reqId+"&WT.mc_id="+mediaSource;
		var json=null;
		if(params){
			json=Utils.obj2json(params);
		}
		$.ajax({type: "POST",url: uri,data: json,success: function(str){
		    //if(window.console)console.log(str);
			var datas=null;
			try{
			  datas=eval("("+str+")");
			}catch(e){
				//'json数据格式错误:'+str;
				datas = null;
			}
			callback(datas);
		},error: function (){if(typeof(errorback)=="function")errorback()},
		beforeSend: function(){if(typeof(beforesend)=="function")beforesend()},
		contentType:"text/plain"}); 
	},
	submitInputs:function(wrapElementIds,callback,beforesend,errorback){
		var params=Utils.inputs2obj(wrapElementIds);
		this.submit(params,callback,beforesend,errorback);
	},
	filterSubmit:function(params,callback,beforesend,errorback,completeBack,isAsync){
		var mediaSource = mediaFromUrl();
		var uri=pa.submitURI+"?flowId="+pa.flowId+"&reqId="+this.reqId+"&WT.mc_id="+mediaSource;
		var reqId = this.reqId;
		var json=null;
		if(params){
			json=Utils.obj2json(params);
		}
		//默认是异步的，如果要同步请显示标明 【isAsync = false】
		isAsync = !(typeof isAsync == 'boolean' && isAsync === false);
		
		$.ajax({type: "POST",url: uri,data: json,
			async:isAsync,
			success: function(str){
		    //if(window.console)console.log(str);
			var datas=null;
			try{
			  datas=eval("("+str+")");
			}catch(e){
				//'json数据格式错误:'+str;
				datas = null;
			}
			//如果是空对象，那么可能是后台不响应用户提交导致的
			if(!$.isEmptyObject(datas)&&datas._skip==="true"){
				if(window.console){
					console.log("************************连续点击，除第一外不响应*******************");
				}
				if(typeof window._timerQueryOrderNo == 'function' && reqId.indexOf("supplementReq") >= 0){
					window._timerQueryOrderNo.call(window);
				}
				return false;
			}
			callback(datas);
		},error: function (){if(typeof(errorback)=="function")errorback()},
		complete:function(){if(typeof(completeBack)=="function")completeBack()},
		beforeSend: function(){if(typeof(beforesend)=="function")beforesend()},
		contentType:"text/plain"}); 
	}
	
};

$(function(){
	
	function _inputsToObj(wrapEl,obj){
		if(!obj)obj={};
		$("input[name],select[name],textarea[name]",wrapEl).each(function(i,e){
  			 e=$(e);
  			 var name=e.attr('name');
  			 if(!name)return ;
  			 var v=e.val();
  			 if(typeof e.attr('type') != 'undefined'){  
	  			 switch (e.attr('type').toLowerCase()) {
		            case 'checkbox':
		            case 'radio':
		            if (!e.attr('checked')) {return; }
	            }
	            
	           	v=v.replace(/(^\s*)|(\s*$)/g, "");
	            _parseValue(obj,name,v);
  			 }
		});
		return obj;
	}
	//{},proid[0],12
	//
	function _parseValue(obj,name,value){
		var idx=name.indexOf('.');
		if(idx==-1){
			var i2=name.indexOf('[');
			if(i2!=-1){
				var arridx=parseInt(name.substring(i2+1,name.length-1));
                var arrName=name.substring(0,i2);
				if(!obj[arrName])obj[arrName]=[];
                var arr=obj[arrName];
				arr[arr.length]=value;
			}else{
				if(obj[name]){
					if(obj[name] instanceof Array){
						var arr=obj[name];
						arr[arr.length]=value;
					}else{
						var arr=[];
						arr[0]=obj[name];
						arr[1]=value;
						obj[name]=arr;
					}
				}else{
					obj[name]=value;
				}
			}
		}else{
            var n1= name.substring(0,idx);
            var i2=n1.indexOf('[');
            var n2=name.substring(idx+1);
           
            if(i2!=-1){
            	var temp=n1.substring(i2+1,n1.length-1);
                var arridx=-1;
                if(temp.length>0){
                	arridx=parseInt(temp);
                }
                var arrName=n1.substring(0,i2);
                var arr=obj[arrName];
                if(!arr){
                	arr=obj[arrName]=[];
                }
                if(arridx==-1)arridx=arr.length;
                if(!arr[arridx])arr[arridx]={};
                _parseValue(arr[arridx],n2,value);
            }else{
                 //alert(obj);
                 if(!obj[n1])obj[n1]={};
                 _parseValue(obj[n1],n2,value);
            }
        }
	}
	
	function _objToJson(o){
		if (o == undefined) {
             return "";
         }
         var r = [];
         if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
         if (typeof o == "object") {
             if (!o.sort) {
                 for (var i in o)
                     r.push("\"" + i + "\":" + _objToJson(o[i]));
                 if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                     r.push("toString:" + o.toString.toString());
                 }
                 r = "{" + r.join() + "}"
             } else {
                 for (var i = 0; i < o.length; i++)
                     r.push(_objToJson(o[i]))
                 r = "[" + r.join() + "]";
             }
             return r;
         }
         return o.toString().replace(/\"\:/g, '":""');
	}
	
	window.Utils={
		obj2json:function(obj){
			return _objToJson(obj);
		},
		inputs2obj:function(wrapElementIds){
			var obj={};
			if(wrapElementIds instanceof Array){
				for(var i=0;i<wrapElementIds.length;i++){
					_inputsToObj($('#'+wrapElementIds[i]),obj)
				}
			}else{
				 _inputsToObj($('#'+wrapElementIds),obj);
			}
			return obj;
		}
	};
	
});


/**
 * 公共调用 
 * 
 */
$(function(){
	common.sessionTimeoutStart(pa.flowId);
	common.ajaxError();
});
/*********************************
*	公共功能对象	common	
**********************************/
var common = {
	flowIntervalId: null,
	timeOutId: null,
	timeOutUrl:null,
	timeOutType:'self',
	ajaxError: function(){
		/*$.ajaxSetup({
			error : function(request,status,error){
				try{
					common.loading('hide');
					common.showModal('hide');
					$(window).unbind('resize scroll');
		
					var request = (new Function('return '+request.responseText))();
					switch(request.errorCode){
						case 555:
							//弹出服务器内部错误 
							common.showMsg({content : decodeURIComponent(request.errorMsg)});
							break;
						case 560:
							//session超时，跳到超时页面
							common.showMsg({content : decodeURIComponent(request.errorMsg)});
							//self.location.href = '/ebusiness/auto/newness/timeout.do?flowid=' + $('#flowid').val();
							break;
						default :
							common.showMsg({content : decodeURIComponent(request.errorMsg)});
							break;
					}
				}catch(e){}
			} 
		});*/
	},
	/**
	*	保持流程，每30秒发一次
	*/
	keepFlow : function(flowid){
		common.flowIntervalId = setInterval(function(){
			$.ajax({
				url : pa.contextPath + "/keep-flow.ajax?flowId="+flowid
			});			
		},30000);
	},
	
	/**
	*	启动session超时计时
	*/
	sessionTimeoutStart : function(flowid){
		//启动保持流程计时器
		common.keepFlow(flowid);
		//启动会话超时计时，并保存该计时ID,30分钟 30*60*1000=1800000
		common.timeOutId = setTimeout("common.executeSessionTimeout()",1800000);
	},
	/**
	 *  设置超时后需要跳转的页面地址，如果没有指定url则跳转到error.jsp。urlType需要指定是top还是self
	 * @param {} urlType  top,self
	 * @param {} url
	 */
	setTimeoutUrl:function(urlType, url){
		if(urlType) common.timeOutType = urlType;
		if(url) common.timeOutUrl = url;
	},
	/**
	 * 执行session超时
	 */
	executeSessionTimeout:function(){
		var toUrl = pa.contextPath+"/mobile/error.jsp?errorCode=001";
		if(common.timeOutUrl) toUrl = common.timeOutUrl;
		if(common.timeOutType == 'top') top.location.replace(toUrl);
		else self.location.replace(toUrl);
	},
	/**
	*  关闭定时器
	**/
	destroyTimeouter: function(){
		if(common.flowIntervalId){ clearInterval(common.flowIntervalId); }
		if(common.timeOutId){ clearTimeout(common.timeOutId); }
	},
	/**
	*	用途: 数字金额按千位分隔
	*	输入: val
	*	返回: 返回按千位分隔的数字金额,如:10,000
	*/
	formatNum :function(val){
		var digit = val.indexOf("."); 	// 取得小数点的位置
		var intValue = val.substr(0,digit); // 取得小数中的整数部分
		var i;
		var mag = new Array();
		var word;
		if(val.indexOf(".") == -1){	//整数时
			i = val.length; 			// 整数的个数
			while(i > 0){
				word = val.substring(i,i-3); // 每隔3位截取一组数字
				i-= 3;
				mag.unshift(word);				//分别将截取的数字压入数组
			}
			return mag;
		}else{									//小数时
			i = intValue.length; 					// 除小数外，整数部分的个数
			while(i > 0) { 
				word = intValue.substring(i,i-3); 	// 每隔3位截取一组数字
				i-= 3;
				mag.unshift(word);
			}
			return mag + val.substring(digit);
		}
	},
	getErrorMsg : function(errorMes,currMsg){
		if(!errorMes){
			return currMsg;
		}else{
			return errorMes;
		}
	},
	/**
	*浮层遮罩
	*/
	showModal : function(status){
					status = status || 'hide';
					if(status == 'hide'){
						$('#_modal').hide();
					}else{
						$('#_modal').length > 0 ? $('#_modal').height($(document).height()).show() : $('<div id="_modal" />').appendTo('body').css({width:$(document).width()+'px',height:$(document).height() + 'px',position:'absolute',left:0,top:0,backgroundColor:'#fff',zIndex:9999,opacity:0});
					}
					return $('#_modal');
	},
	/**
	*	检测日期字符串是否正确
	*/
	dateCheck : function(sDateString){
		var regDate = /^(((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29)))?$/;//日期yyyy-MM-dd
		if(regDate.test(sDateString)){
			return true;	
		}
		return false;
	},
	
	/**#############姓名校验nameElem 姓名控件#############*/
	nameValidate : function(nameElem, nameElemText){
	
		if (!nameElem.val() || "" == nameElem.val()) {
			return "请输入" + nameElemText;
		}
		
		var numreg = /[\d\(\)]/g;
		var rs = nameElem.val().replace(numreg, "");
		var ch = /^([\u4e00-\u9fa5\s])*$/;
		var chflag = ch.test(rs);
		var reg = /^([\u4e00-\u9fa5\s]{1}|[A-Z]{1})+([\u4e00-\u9fa5\s]{0,37}|[• ]{0,37}|[· ]{0,37}|[. ]{0,37}|[． ]{0,37}|[A-Z]{0,37})*$/;
		var len = 0;
		
		// 中文姓名或新疆维吾尔族语姓名中的"•" ,有空格就去除所有空格
		if (chflag || rs.indexOf('•') != -1 || rs.indexOf('·') != -1) {
			var chreg = /\s+/g;
			rs = rs.replace(chreg, "");
			// 匹配多个连续的"."
			var defreg = /[\•\·]+/g;
			// 替换多个连续的"·"为一个
			rs = rs.replace(defreg, "·")
			// 英文姓名或是其他姓名需要将所有的空格替挽成"."
		}else {
			// 如果有多个空格，则替换为一个空格
			var enreg = /\s+/g;
			rs = rs.replace(enreg, " ");
			// 去除因". "空格带来多余"."
			rs = rs.replace(". ", ".");
			// 去除因" ."空格带来多余"."
			rs = rs.replace(" .", ".");
			// 匹配多个连续的"."
			var defreg = /\.+/g;
			// 替换多个连续的"."为一个
			rs = rs.replace(defreg, ".")
			// 替换多个连续的"．"(英文全角点号)为一个
			rs = rs.replace(/\．+/g, "．")
			// 去除英文全角点号的前缀和后缀空格
			rs = rs.replace("． ", "．").replace(" ．", "．")
		}
		
		/**将名字去除空格后,重新赋值给页面标签*/
		$(nameElem).val(rs);
		
		// 判断是否包含系统限制内容
		if (rs == '不详' || rs == '不祥' || rs == '未知' || rs == '不知道')
			return nameElemText + "含有非法字符，请重新输入";
		if (!reg.test(rs)) {
			return nameElemText + "含有非法字符，请重新输入";
		}
		for (var i = 0; i < rs.length; i++) {
			if (rs[i].match(/[^\x00-\xff]/ig)) // 全角
				len += 2;
			else
				len += 1;
		}
		if (len > 38 || len < 4) {
			return nameElemText +"长度需为2-19个中文字符，请重新输入";
		}
		return true;
	},
		
	/**############# 严格的身份证号码校验idCard身份证号码#############*/
	idCardValidate : function(idCard, nameElemText) {
		if(idCard.length == 0 || idCard == ""){
			return "请输入" + nameElemText +"的身份证号码";
		}
		
		/**校验提示信息数组**/
		var Errors = [
			true,
			nameElemText + "身份证号码必须为18位!", // 身份证号码必须为18位!
			nameElemText + "\u8eab\u4efd\u8bc1\u53f7\u7801\u51fa\u751f\u65e5\u671f\u8d85\u51fa\u8303\u56f4\u6216\u542b\u6709\u975e\u6cd5\u5b57\u7b26!",// 身份证号码出生日期超出范围或含有非法字符!
			nameElemText + "\u8eab\u4efd\u8bc1\u53f7\u7801\u6821\u9a8c\u9519\u8bef!", // 身份证号码校验错误!
			nameElemText + "\u8eab\u4efd\u8bc1\u5730\u533a\u975e\u6cd5!" // 身份证地区非法!
		];
		
		/**身份证前两位所属地区编码*/
		var area = {
			11 : "\u5317\u4eac",
			12 : "\u5929\u6d25",
			13 : "\u6cb3\u5317",
			14 : "\u5c71\u897f",
			15 : "\u5185\u8499\u53e4",
			21 : "\u8fbd\u5b81",
			22 : "\u5409\u6797",
			23 : "\u9ed1\u9f99\u6c5f",
			31 : "\u4e0a\u6d77",
			32 : "\u6c5f\u82cf",
			33 : "\u6d59\u6c5f",
			34 : "\u5b89\u5fbd",
			35 : "\u798f\u5efa",
			36 : "\u6c5f\u897f",
			37 : "\u5c71\u4e1c",
			41 : "\u6cb3\u5357",
			42 : "\u6e56\u5317",
			43 : "\u6e56\u5357",
			44 : "\u5e7f\u4e1c",
			45 : "\u5e7f\u897f",
			46 : "\u6d77\u5357",
			50 : "\u91cd\u5e86",
			51 : "\u56db\u5ddd",
			52 : "\u8d35\u5dde",
			53 : "\u4e91\u5357",
			54 : "\u897f\u85cf",
			61 : "\u9655\u897f",
			62 : "\u7518\u8083",
			63 : "\u9752\u6d77",
			64 : "\u5b81\u590f",
			65 : "\u65b0\u7586",
			71 : "\u53f0\u6e7e",
			81 : "\u9999\u6e2f",
			82 : "\u6fb3\u95e8",
			91 : "\u56fd\u5916"
		};
		
		/**JYM校验码,S运算码,Y运算码取模,M校验位*/
		var JYM, S, Y, M;
		var idCard_array = new Array();
		
		/**将每一位拆分成数组,逐一进行校验*/
		idCard_array = idCard.split("");
		
		/**前两位不属于地区数组编码**/
		if (area[parseInt(idCard.substr(0, 2))] == null) {
			return Errors[4]
		}
		
		switch (idCard.length) {
		
			/**########18_位身份证验证########*/
			case 18:
				if (parseInt(idCard.substr(6, 4)) % 4 == 0
						|| (parseInt(idCard.substr(6, 4)) % 100 == 0 && parseInt(idCard.substr(6, 4)) % 4 == 0)) {
					ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
				} else {
					ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
				}
				if (ereg.test(idCard)) {
					S = (parseInt(idCard_array[0]) + parseInt(idCard_array[10]))
							* 7
							+ (parseInt(idCard_array[1]) + parseInt(idCard_array[11]))
							* 9
							+ (parseInt(idCard_array[2]) + parseInt(idCard_array[12]))
							* 10
							+ (parseInt(idCard_array[3]) + parseInt(idCard_array[13]))
							* 5
							+ (parseInt(idCard_array[4]) + parseInt(idCard_array[14]))
							* 8
							+ (parseInt(idCard_array[5]) + parseInt(idCard_array[15]))
							* 4
							+ (parseInt(idCard_array[6]) + parseInt(idCard_array[16]))
							* 2 + parseInt(idCard_array[7]) * 1
							+ parseInt(idCard_array[8]) * 6
							+ parseInt(idCard_array[9]) * 3;
					Y = S % 11;
					M = "F";
					JYM = "10X98765432";
					M = JYM.substr(Y, 1);
					if (M == idCard_array[17]) {
						return Errors[0]
					} else {
						return Errors[3]
					}
				} else {
					return Errors[2]
				}
				break;
			default:
				return Errors[1];
				break
		}
		return true;
	},
		
	/** ############# 分离身份证号码中的生日和性别 idCard身份证号码############# */
	idCardDepart : function(idCard) {
		
		/**生日及性别组合*/
		var o = {year : '',	month : '',	day : '', sex : '' };
		
		/**出生日期*/
		var birthDate;
		
		switch (idCard.length) {
			case 18:
				birthDate = idCard.substring(6, 14);
				o.year = birthDate.substring(0, 4);
				o.month = birthDate.substring(4, 6);
				o.day = birthDate.substring(6, 8);
				o.sex = (idCard.substring(16, 17) % 2) == 0 ? 'F' : 'M';
				break;
			
			default:
		}
		return o;
	},
	/** 脱落手机号码 **/
	checkDownMobile : function(mobile){
		if( mobile.indexOf("11111")  > 0 ||
			mobile.indexOf("22222")  > 0 ||	
			mobile.indexOf("33333")  > 0 ||
			mobile.indexOf("44444")  > 0 ||
			mobile.indexOf("55555")  > 0 ||
			mobile.indexOf("66666")  > 0 ||
			mobile.indexOf("77777")  > 0 ||
		    mobile.indexOf("88888")  > 0 ||
			mobile.indexOf("99999")  > 0 ||
			mobile.indexOf("00000")  > 0 ||
			mobile.indexOf("012345")  > 0 ||
			mobile.indexOf("123456")  > 0 ||
			mobile.indexOf("234567")  > 0 ||
		    mobile.indexOf("345678")  > 0 ||
		    mobile.indexOf("456789")  > 0 ||
			mobile.indexOf("567890")  > 0 ||
			mobile.indexOf("098765")  > 0 ||
			mobile.indexOf("987654")  > 0 ||
			mobile.indexOf("876543")  > 0 ||
			mobile.indexOf("765432")  > 0 ||
			mobile.indexOf("654321")  > 0 ||
			mobile.indexOf("543210") > 0
			){
			return false;
		  }else{
			  return true;
		  }
	}
}
