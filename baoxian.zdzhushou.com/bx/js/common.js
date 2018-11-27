/********************************************
*	平安寿险基础对象函数集合
*
*	**************************
*	数组 Array 	对象功能扩展
*	字符串 String 对象功能扩展
*	公共功能对象	common
*	数据校验对象	Validate
*	**************************
*
*	modify xupan799 2011-09-22
*********************************************/

/**
 * 公共调用 
 * 
 */
$(function(){
	common.sessionTimeoutStart(pa.flowId);
	common.ajaxError();
	common.initClaimRate();
});
	
var urlPath = "http://" + location.host + "/pa18shoplife";

/*********************************
*	公共功能对象	common	
**********************************/
var common = {
	keepFlag : false,
	flowIntervalId: null,
	timeOutId: null,
	timeOutUrl:null,
	timeOutType:'self',
	ajaxError: function(){
		$.ajaxSetup({
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
		});
	},
	/**
	*	根据下拉框的值获取其文本值
	*/
	getOptionTextByValue : function (obj,value){
		return $.trim($("option[value='"+value+"']",$(obj)).text());
	},
	
	/**
	*	根据文本值定位下拉框的值
	*/
	getOptionValueByText : function (obj,text){
		var objs = $("option",$(obj));
		for(i=0;i<objs.length;i++){
			if($.trim($(objs[i]).text()) === text){
				return $(objs[i]).val();
			}
		}
		return false;
	},
	
	/**
	*	根据单选框的name值获取被选中的值
	*/
	getRadioValue : function (name){
		return $("input[name='"+name+"']:checked").length > 0 ? $("input[name='"+name+"']:checked").val() : "";
	},
	
	
	/*******************
	*	字符串处理相关		
	********************/
	/**
	*	根据身份证号，获取身份信息，并返回为信息对象
	*/
	getIdCardInfo : function(id){
		var idCardInfo = {};
		idCardInfo.id=id;
		var y=0,m=0,d=0,sex='M';
		if(id.length==15){
			 y = id.substring(6, 8);
			 m = id.substring(8, 10);
			 d = id.substring(10, 12);
			sex = id.substring(14,15);
			sex = sex%2==1?'M':'F';
			if (y > 10) y = '19'+y;
			else y = '20'+y;
		}else if(id.length==18){
			 y = id.substring(6, 10);
			 m = id.substring(10, 12);
			 d = id.substring(12, 14);
			 sex= id.substring(16,17);
			 sex = sex%2==1?'M':'F';
		}else{
			idCardInfo.error=true;
		}
		idCardInfo.year=y;
		idCardInfo.month=m;
		idCardInfo.date=d;
		idCardInfo.sex=sex;
		idCardInfo.birthday=y+'-'+m+'-'+d;
		return idCardInfo;
	},	
	
	/**
	*	对字符串求和，前提是参数是数字字符串，如stringSum("145","45","2","458")
	*/
	stringSum:function(){
		var integerPart = 0, fractionPart = 0;
		for(var i = 0; i < arguments.length; i++){
			var num = arguments[i];
			var index = num.indexOf('.');
			if(-1 != index){
				var numFraction = num.substring(index + 1);
				numFraction = numFraction.length > 1 ? numFraction.substring(0,2) : numFraction + '0';
				fractionPart += parseInt(numFraction, 10);
				integerPart += parseInt(num.substring(0,index), 10);
			}else {
				integerPart += parseInt(num, 10);
			}
		}
		if(fractionPart >= 100) {
			var n = 0;
			while(fractionPart - 100 >= 0){
				fractionPart -= 100;
				n++;
			}
			integerPart += n;
		}
		if(fractionPart > 0){
			return integerPart + '.' + (fractionPart < 10 ? '0' + fractionPart: fractionPart);
		}else{
			return integerPart + '';
		}
	},
	
	/**
	*	用途：格式化界面金额显示形式，按千位分隔和小数位分隔
	*	输入：s为金额,n小数位数  
	*	返回：返回按千位分隔的数字和n位小数位金额,若n=2则返回:10,000.00
	*/
	formatMoney : function(s,n){
	   n = n > 0 && n <= 20 ? n : 2;   
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
	   var l = s.split(".")[0].split("").reverse(),   
	   r = s.split(".")[1];   
	   t = "";   
	   for(i = 0; i < l.length; i ++ )   
	   {   
	      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	   }   
	   return t.split("").reverse().join("") + "." + r;   
	},
	
	/**
	*	用途：格式化界面金额显示形式，按千位分隔和小数位分隔
	*	输入：s为金额,n小数位数  
	*	返回：返回按千位分隔的数字和n位小数位金额,超出n位的舍位,不进行四舍五入,若n=2,s为123.4567则返回:123.45
	*/
	formatMoneyFloor : function(s,n){
		n = n > 0 && n <= 20 ? n : 2;
	    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";   
	    var l = s.split(".")[0].split("").reverse(),   
	    r = s.split(".")[1];
	    //如果小数位数不够2位则补0
	    if(r){
		   if(r.length > n){
				r = r.substr(0,n);
		   }else{
		   		while(n - r.length > 0){
		   			r = r + "0";
		   		}
		   }
	    }else{
	    	r = "00";
	    }
	    t = "";   
		for(i = 0; i < l.length; i ++ ){   
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	    }   
	    return t.split("").reverse().join("") + "." + r;   
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

	
	/*******************
	*	日期处理相关	
	********************/
	/**
	*	是否闰年
	*/
	isLeapYear : function(iYear){
		return ((iYear % 4 == 0) && ((iYear % 100 != 0) || (iYear % 400 == 0)));
	},
	
	/**
	*	某一年的某个月有多少天
	*/
	daysInMonth : function(theYear, theMonth){
		
    	var dayCountArray = new Array(0,31,-1,31,30,31,30,31,31,30,31,30,31);
    	if (Number(theMonth) != 2){
			return dayCountArray[Number(theMonth)];
		}
    	if (common.isLeapYear(Number(theYear))){
        	return 29;
		}
    	return 28;
	},
	
	/**
	*	获取增加或减少多少月后的新日期
	*/
	dateAddMonth : function(oDate,monthsIncrement){
		if(oDate){
			return new Date(oDate.getFullYear(), oDate.getMonth()+monthsIncrement, oDate.getDate());
		}
		return null;
	},
	
	/**
	*	获取增加或减少多少天后的新日期
	*/
	dateAddDay : function(oDate,daysIncrement){
		if(oDate){
			return new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDate()+daysIncrement);
		}
		return null;
	},
	
	/**
	*	日期格式化为标准的####-##-##格式,同时如果传了某元素，则将值更新到该元素上
	*/
	dateFormat : function(sDateString,jqueryObj){
		if(common.dateCheck(sDateString)){
			var oDate = common.stringToDate(sDateString);
			var sNewDateString = common.dateToString(oDate);
			jqueryObj && jqueryObj.val(sNewDateString);
			return sNewDateString;
		}
		return null;
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
	
	/**
	*	将####-##-##格式的日期字符串转化为日期对象
	*/
	stringToDate : function(sDateString){
		if(common.dateCheck(sDateString)){
			var arrDateSplit = sDateString.split("-");
			var oNewDate = new Date(arrDateSplit[0],arrDateSplit[1]-1,arrDateSplit[2]);
			return oNewDate;
		}
		return null;
	},
	
	/**
	*	将日期对象转化为指定格式的日期字符串,默认格式为####-##-##
	*/
	dateToString : function(oDate,sFormat){
		var format = sFormat ? sFormat: "-";
		if(oDate){
			var iYear = oDate.getFullYear();
			var iMonth = oDate.getMonth() + 1;
			var iDay = oDate.getDate();
			if(iMonth < 10){
				iMonth = "0" + iMonth;
			}				
			if(iDay < 10){
				iDay = "0" + iDay;
			}	
			return (iYear + format + iMonth + format + iDay);
		}
		return null;
	},
	
	/**
	*	将分散的年、月、日组装成####-##-##格式的日期字符串
	*/
	dateStrsToString : function(strYear,strMonth,strDay){
		if(strYear && strMonth && strDay){
			if(String(strYear).length == 2){//年份为2个字符，则自动在前面加19
				strYear = "19" + strYear;
			}
			if(parseInt(strMonth) < 10){	//月份为1个字符，则自动在前面加0
				strMonth = "0" + strMonth;	
			}				
			if(parseInt(strDay) < 10){		//日子为1个字符，则自动在前面加0
				strDay = "0" + strDay;
			}
			var strDate = strYear + "-" + strMonth + "-" + strDay;
			if(common.dateCheck(strDate)){		//检测下日期是否为规范化的日期
				return strDate;	
			}
		}
		return null;
	},
	
	/**
	*	将日期以指定分隔符分割，并返回日期数组，默认的分隔符是“-”
	*/
	splitDate : function(sDateString,regFormat){
		format = regFormat ? regFormat: /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
		var arrMatched = format.exec(sDateString);
		if(arrMatched){
			var arrDateString = [];
			arrDateString.push(arrMatched[1]);
			arrDateString.push(arrMatched[2]);
			arrDateString.push(arrMatched[3]);
			return arrDateString;
		}
		return null;
	},
	
	/**
	*	根据出生年月日获取相对于保险起期的年龄数组
	*/
	getAgeArray : function(birth,beginDate){
		var arrContractBeginDate = beginDate.split('-');		
		var oContractBeginDate = new Date(parseInt(arrContractBeginDate[0],10),parseInt(arrContractBeginDate[1],10),parseInt(arrContractBeginDate[2],10));
		var iContractBeginYear = oContractBeginDate.getFullYear();
		var iContractBeginMonth = oContractBeginDate.getMonth();
			
		var arrBirthdaySelect = birth.split("-");
		var birthdaySelect = new Date(parseInt(arrBirthdaySelect[0],10),parseInt(arrBirthdaySelect[1],10),parseInt(arrBirthdaySelect[2],10));
		var iAge = iContractBeginYear - parseInt(arrBirthdaySelect[0],10);
		var iMonth = iContractBeginMonth - parseInt(arrBirthdaySelect[1],10);
		var iDay = oContractBeginDate.getDate() - parseInt(arrBirthdaySelect[2],10);
		var ageArray = [];
		ageArray.push(iAge);
		ageArray.push(iMonth);
		ageArray.push(iDay);
		return ageArray;
	},
	
	/**
	*	计算两个字符串日期之间相差的年数（如：投被保人之间相差的周岁）
	*/
	yearsBetween : function(date1,date2,splitFormat){
		if(typeof date1 == 'string' && typeof date2 == 'string') {
			splitFormat = splitFormat ? splitFormat: "-";
			var arrD1 = date1.split(splitFormat);
			var arrD2 = date2.split(splitFormat);
			if(arrD1 && arrD2){
				var oDate1 = new Date(arrD1[0],arrD1[1] - 1,arrD1[2]);
				var oDate2 = new Date(arrD2[0],arrD2[1] - 1,arrD2[2]);
				
				if(oDate2 >= oDate1) {
					return common.getYears(oDate1,oDate2);
				}else {
					return common.getYears(oDate2,oDate1);
				}
			}
		}
	},
	
	getYears : function(date1,date2) {
		var y1_Date  = date1.getDate(),
		    y1_Month = date1.getMonth(),
		    y1_Year  = date1.getYear();
	
	    var y2_Date  = date2.getDate(),
            y2_Month = date2.getMonth(),
            y2_Year  = date2.getYear();
	
	    if(y1_Year < 2000){
		   y1_Year += 1900;
	    }
	    if(y2_Year < 2000){
	 	   y2_Year += 1900;
	    }
	    
	    var years  = y2_Year - y1_Year;
		var months = y2_Month - y1_Month;
		var days   = y2_Date - y1_Date;
		
		if(days < 0) months--;
		if(months < 0) years--;
		
		if(days == 0 && months == 0) {
			if(years > 0) years--;
		}
		
		return years;
	},
	
	/**
	*	计算两个字符串日期之间相差的天数
	*/
	daysBetween : function(day1,day2,splitFormat){
		if(typeof day1 == 'string' && typeof day2 == 'string'){
			splitFormat = splitFormat ? splitFormat: "-";
			var arrD1 = day1.split(splitFormat);
			var arrD2 = day2.split(splitFormat);
			if(arrD1 && arrD2){
				var oDay1 = new Date(arrD1[0],arrD1[1] - 1,arrD1[2]);
				var oDay2 = new Date(arrD2[0],arrD2[1] - 1,arrD2[2]);
				var days = (oDay1.getTime() - oDay2.getTime())/(1000*60*60*24);
				return days;
			}
		}
	},

	/**
	*	解析生日，如果生日是'1985-1-21';
	*	如果cardType==1，返回'850121';
	*	如果cardType==2,返回'19850121';
	*/
	birthSplit : function(birth, cardType) {
		if(birth == null) return; 
		var births = birth.split("-");
		if(births.length < 3) return;
		var year = births[0];
		if(cardType == 1) {
			year = year.substring(2, 2);
		}
		var month = births[1];
		if(month.length == 1) {
			month = '0' + month
		}
		var day = births[2];
		if(day.length == 1) {
			day = '0' + day;
		}
		return year + month + day;
	},
		
	/**
	*	填充证件类型1:身份证 2:护照 3:军官证 6:港澳回乡证或台胞证 7:驾驶证0:其他
	*/
	fillCertType : function(e){
		var ops=e[0].options;
		ops.length=0;
		//ops[ops.length]=new Option('请选择','');
		ops[ops.length]=new Option('身份证','1');
		ops[ops.length]=new Option('护照','2');
		ops[ops.length]=new Option('军官证','3');
		ops[ops.length]=new Option('港澳回乡证或台胞证','6');
		//ops[ops.length]=new Option('驾驶证','7');
		ops[ops.length]=new Option('其它','0');
		e.selectedIndex=0; 
		e.trigger("propertychange");
	},	

	/**
	*	保持流程，每30秒发一次
	*/
	keepFlow : function(flowid){
		common.flowIntervalId = setInterval(function(){
			$.ajax({
				url : pa.contextPath + "/keep-flow.ajax?flowId="+flowid
			});			
		},60000);
	},
	
	/**
	*	启动session超时计时
	*/
	sessionTimeoutStart : function(flowid){
		common.keepFlag = true;
		//启动保持流程计时器
		common.keepFlow(flowid);
		//启动会话超时计时，并保存该计时ID,30分钟 30*60*1000=1800000
		common.timeOutId = setTimeout("common.executeSessionTimeout()",1800000);
		setTimeout(function(){//超时前5分钟要做的操作（调用页面上的函数）25分钟 25*60*1000=1500000
            typeof(beforeTimeout)=="function" && beforeTimeout(common.flowIntervalId, common.timeOutId);   //超时前5分钟要做的操作的函数名 beforeTimeout
        },1500000);
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
		var toUrl = pa.contextPath+"/error.jsp?errorCode=001";
		if(common.timeOutUrl) toUrl = common.timeOutUrl;
		if(common.timeOutType == 'top') top.location.replace(toUrl);
		else self.location.replace(toUrl);
	},
	/**
	*  关闭定时器
	**/
	destroyTimeouter: function(){
		common.keepFlag = false;
		if(common.flowIntervalId){ clearInterval(common.flowIntervalId); }
		if(common.timeOutId){ clearTimeout(common.timeOutId); }
	},
	/**
	*	遮罩层防止触发页面上其它事件
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
	 * 显示数据加载中...
	 * 
	 */
	loading: function(){
		var args = args = arguments || [];
		if(typeof args[0] == 'string' && args[0] == 'hide'){
			$('#loading').size() && $('#loading').fadeOut(500);
			return;
		}
		
		var elem = !$('#loading').size() ? $('<div id="loading"><p>数据交互中，请稍等...</p></div>').appendTo('body') : $('#loading'),
			option = $.extend({
				left: ($(document).width()-$('#loading').width())/2,
				top: (document.documentElement.clientHeight-$('#loading').height())/2+$(document).scrollTop()
			}, typeof args[0] != 'string' ? args[0] : args[1] || {});
		
		elem.css(option).fadeIn(500);
	},
	/**
	*	弹出窗体提示统一控制
	*/
	showDialog : function(objOption, jqueryObjFocus) {
		objOption.title  = objOption.title || '温馨提示';
		objOption.size   = objOption.size || [600,400];
		objOption.botton = objOption.botton || 'N';
		objOption.close  = objOption.close || function(){if(typeof jqueryObjFocus != "undefined") jqueryObjFocus.focus();};
		
		var objDialog = {};
		for(var k in objOption){
			objDialog[k]=objOption[k];
		}
		
		if(typeof(objOption.idEle) != "undefined"){
			objDialog.idEle = objOption.idEle;
		}
		
		cx_ui.dialog.open(objDialog);
	},
	/**
	*	消息提示统一控制
	*/
	showMsg : function(objOption,jqueryObjFocus){//common.showMsg({size:[300,200] , content : '抱歉，请先正确填写完数据并保存'}, $("#birthYear"));
		var title = objOption.title || '温馨提示';
		var size  = objOption.size || [350,200];
		var content = objOption.content || '';
		var botton = objOption.botton || 'Y';
		var mainContent = 	'<div>'+
								'<p style="padding:20px 10px;padding-bottom:25px; line-height:20px; text-align:left;">'+ content + '</p>'  + 
								(botton == 'Y' ? '<div style="text-align:center;"><a href="javascript:void(0)" onclick="cx_ui.dialog.close();return false;" class="a_a"><span class="ll"><span class="rr">关闭</span></span></a></div>' : '') + 
							'</div>';
		var objDialog = {
			title : title,
			size : size, 
			content : objOption.mainContent || mainContent ,
			close: objOption.close || function(){if(typeof jqueryObjFocus != "undefined") jqueryObjFocus.focus();},
			beforeClose: objOption.beforeClose
		};
		if(typeof(objOption.idEle) != "undefined"){
			objDialog.idEle = objOption.idEle;
		}
		cx_ui.dialog.open(objDialog);
	},
	/**
	*	页面超时消息提示
	*/
	showTimeoutMsg : function(objOption,jqueryObjFocus){
		var title = objOption.title || '温馨提示';
		var size  = objOption.size || [350,200];
		var content = objOption.content || '';
		var botton = objOption.botton || 'Y';
		var action = objOption.action;
		var mainContent = 	'<div>'+
								'<p style="padding:20px 10px;padding-bottom:25px; line-height:20px; text-align:left;">'+ content + '</p>'  + 
								(botton == 'Y' ? '<div style="text-align:center;"><a href="javascript:void(0)" ' + 
								' onclick="' + action + 'common.sessionTimeoutStart(\''+pa.flowId+'\');cx_ui.dialog.close();return false;" ' + 
								'class="a_a"><span class="ll"><span class="rr">继续</span></span></a></div>' : '') + 
							'</div>';
		var objDialog = {
			title : title,
			size : size, 
			content : objOption.mainContent || mainContent ,
			close: objOption.close || function(){if(typeof jqueryObjFocus != "undefined") jqueryObjFocus.focus();},
			beforeClose: objOption.beforeClose
		};
		if(typeof(objOption.idEle) != "undefined"){
			objDialog.idEle = objOption.idEle;
		}
		cx_ui.dialog.open(objDialog);
	},
	/**
	*	确认消息提示
	*/
	showConfirmMsg : function(objOption,jqueryObjFocus){
		var title = objOption.title || '温馨提示';
		var size  = objOption.size || [350,200];
		var content = objOption.content || '';
		var botton = objOption.botton || 'Y';
		var action = objOption.action;
		var mainContent = 	'<div>'+
								'<p style="padding:20px 10px;padding-bottom:25px; line-height:20px; text-align:left;">'+ content + '</p>'  + 
								(botton == 'Y' ? '<div style="text-align:center;">' +
									'<a href="javascript:void(0)" onclick="'+ action + 'cx_ui.dialog.close();return false;" class="a_a"><span class="ll"><span class="rr">确定</span></span></a>' +
									'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
									'<a href="javascript:void(0)" onclick="cx_ui.dialog.close();return false;" class="a_a"><span class="ll"><span class="rr">取消</span></span></a></div>' : '') + 
							'</div>';
		var objDialog = {
			title : title,
			size : size, 
			content : objOption.mainContent || mainContent ,
			close: objOption.close || function(){if(typeof jqueryObjFocus != "undefined") jqueryObjFocus.focus();},
			beforeClose: objOption.beforeClose
		};
		if(typeof(objOption.idEle) != "undefined"){
			objDialog.idEle = objOption.idEle;
		}
		cx_ui.dialog.open(objDialog);
	},
	/**
	*	鼠标滑过表格tr标签，高亮相应行
	*/
	trHoverHeightLight : function (jqueryObjWrap, preColor, hoverColor){
		!jqueryObjWrap && (jqueryObjWrap = $("table"));
		preColor = preColor || "#FFFFFF";
		hoverColor = hoverColor || "#F3F3F3";
		$("tr:has(td)",jqueryObjWrap).hover(
			function(){
				$("td",this).css("background-color",hoverColor);
			},
			function(){
				$("td",this).css("background-color",preColor);
			}
		); 
	},
	

	/* 省份城市相关功能函数 begin --->*/
	/** 
	*	初始化省份列表
	*/
	changeProvincesList : function(provincesData, eProvince){
		//初始化省份
		var aProvinces = [];
		$.each(provincesData,function(index,item){
			var _province = '<option value="'+item['provinceCode']+'">'+item['provinceName']+'</option>';
			$.inArray(_province,aProvinces) == -1 && aProvinces.push(_province);
		});
		eProvince.append(aProvinces.join('')).dropselect("destroy").dropselect({maxHeight: 105});
	},
	
	/** 
	*	初始化城市列表
	*/
	changeCityList : function(provincesData, eProvince, eCity){
		//联动城市
		var pc = $(eProvince).val(),cities = [];
		$.each(provincesData,function(indexProvince,itemProvince){
			if(itemProvince['provinceCode'] == pc){
				$.each(itemProvince['provinceCities'],function(index,itemCity){
					cities.push('<option value="'+itemCity['cityCode']+'">'+itemCity['cityName']+'</option>');
				});
				return;
			}
		});
		eCity.html(cities.join('')).prepend('<option value="">请选择城市</option>');
		eCity.dropselect("destroy").dropselect({maxHeight: 105}).dropselect('setValue',$("option:eq(1)",eCity).val() ? $("option:eq(1)",eCity).val() : "");
	},
	
	/** 
	*	根据 provinceCities 里的 cityCode 字段查找相应的比如 regionCode 和 postCode 字段的值
	*	provincesData : 城市数据，[{}]
	*	cityCode : 		城市下拉框的值即cityCode
	*	fieldFind : 	需要根据 provinceCities 里的 cityCode 字段查找的相关字段值
	*/
	getProvinceCitiesField : function(provincesData, cityCode, fieldFind){
		var fieldFindData = "";
		$.each(provincesData,function(indexProvince,itemProvince){
			$.each(itemProvince['provinceCities'],function(index,itemCity){
				if(itemCity["cityCode"] == cityCode){
					fieldFindData = itemCity[fieldFind];
					return;
				}
			});
		});	
		return fieldFindData;
	},
	
	/** 
	*	根据 provinceCities 里的 cityCode 字段查找相应的比如 regionCode 和 postCode 字段的值
	*	provincesData : 	城市数据，[{}]
	*	cityCode : 			城市下拉框的值即cityCode
	*	provinceNameFind : 	需要根据 provincesData 里的 cityCode 字段查找的provinceName字段值
	*   cityNameFind : 		需要根据 provinceCities 里的 cityCode 字段查找的cityName字段值
	*   regionCodeFind :	需要根据 provinceCities 里的 cityCode 字段查找的regionCode字段值
	*/
	getProvinceCitieFields : function(provincesData, cityCode, provinceNameFind, cityNameFind, regionCodeFind, postCodeFind){
		var fieldFindData = {};
		$.each(provincesData,function(indexProvince,itemProvince){
			$.each(itemProvince['provinceCities'],function(index,itemCity){
				if(itemCity["cityCode"] == cityCode){
					fieldFindData.provinceName = itemProvince[provinceNameFind];
					fieldFindData.cityName = itemCity[cityNameFind];
					fieldFindData.regionCode = itemCity[regionCodeFind];
					fieldFindData.postCode = itemCity[postCodeFind];
					return;
				}
			});
		});	
		return fieldFindData;
	},

	/**
	*	调用此函数直接启动省份城市列表初始化及相关事件绑定
	*	provincesData : 城市数据，[{}]
	*	eProvince : 	省份下拉框元素Jquery对象
	*	eCity : 		城市下拉框元素Jquery对象
	*/
	startProvinceCityListInit : function (provincesData, eProvince, eCity){
		eProvince.bind("change",function(){
			common.changeCityList(provincesData,$(this),eCity);
		});
		common.changeProvincesList(provincesData, eProvince);
	},

	/**
	*	调用此函数直接启动城市改变后需要进行的给其他关联表单赋值的操作
	*	provincesData : 	城市数据，[{}]
	*	eCity : 			城市下拉框元素Jquery对象
	*	provinceNameInput:	关联的表单元素Jquery对象
	*   provinceNameFind:	需要根据 provinceCities 里的 cityCode 字段查找的省分名字段值
	*   cityNameInput:		关联的表单元素Jquery对象
	*   cityNameFind:		需要根据 provinceCities 里的 cityCode 字段查找的城市名字段值
	*   regionCodeInput:	关联的表单元素Jquery对象
	*	regionCodeFind : 	需要根据 provinceCities 里的 cityCode 字段查找的相关字段值
	*/
	startCityChangeBind : function (provincesData, eCity, provinceNameInput, provinceNameFind, cityNameInput, cityNameFind, regionCodeInput, regionCodeFind, postCodeInput, postCodeFind){
		eCity.bind("change",function(){
			//eFieldFindInput.val(common.getProvinceCitiesField(provincesData, eCity.val(), fieldFind));
			var findData = common.getProvinceCitieFields(provincesData, eCity.val(), provinceNameFind, cityNameFind, regionCodeFind, postCodeFind);
			provinceNameInput.val(findData.provinceName);	//省份名
			cityNameInput.val(findData.cityName);			//城市名
			regionCodeInput.val(findData.regionCode);		//regionCode
			if(postCodeInput != null) {
			   postCodeInput.val(findData.postCode);        //postCode
			}
			
		});
	},
	/*<--- 省份城市相关功能函数 end*/	

	/**
	*	add
	*/
	add : function (){

	},
	
	/**
	*	新增获取偿付率
	*/
	initClaimRate : function(){
		if($('#claim_rate').size() > 0){
			$.ajax({
				url : urlPath + '/common_action/lasObtainingClaimRateAction.jsp',
				type : 'POST',
				success : function(d) {
					var res = $.parseJSON(d).content;
					if (res.length > 0){
						if($('#ced_epoicy').val() == 'Y')
							$('#claim_rate').children().eq(6).after('<li>8、' + res + '</li>');
						else
							$('#claim_rate').children().eq(5).after('<li>7、' + res + '</li>');
					}
						
				}
			});
		}
	}
	
};


var Validate = {
	/**
	*	把输入的字符串转换为半角 
	*	输入: Str    任意字符串 
	*	输出: DBCStr 半角字符串 
	*	说明: 1、全角空格为12288，半角空格为32 
	*		  2、其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248 
	*/ 
	toDBC : function(obj){
		if(obj == null) return true;
		objValue = obj.value;
		if(objValue == null || objValue == "") return true;
		var DBCStr = "";
		for(var i=0; i<objValue.length; i++){
			var c = objValue.charCodeAt(i);
			if(c == 12288) {
				DBCStr += String.fromCharCode(32);
				continue;
			}   
			if (c > 65280 && c < 65375) {
			DBCStr += String.fromCharCode(c - 65248);
			continue;
			}   
			DBCStr += String.fromCharCode(c);
		}
		obj.value = DBCStr;
		return true;
	},

	/**
	*	校验字符字节长度
	*/
	byteLength : function(str,minlen,maxlen) {
		if (str == null) return false;
		var l = str.length;
		var blen = 0;
		for(i=0; i<l; i++) {
			if ((str.charCodeAt(i) & 0xff00) != 0) {
				blen ++;
			}
			blen ++;
		}
		if (blen > maxlen || blen < minlen) {
			return false;
		}
		return true;
	},

	/** 
	*	核对证件号码,联合证件类型校验
	*/
	idNo : function (eCertNo,eCertType){
		var reg=null;
		var v=eCertNo.val();
		var type=eCertType.val();
		switch(type){
			case '1':
				v = v.toUpperCase();  
				reg=/(^\d{15}$)|(^\d{17}([0-9]|X))$/;
				break;
			case '2':reg=/^[a-zA-Z0-9]{3,21}$/;break;
			case '3':reg=/^[a-zA-Z0-9]{6,21}$/;break;
			case '6':reg=/^[a-zA-Z0-9]{5,21}$/;break;
			default :reg=/^[a-zA-Z0-9]{3,21}$/;break;
		}
		var res=reg.test(v);
		return res;
	},

	/**
	*	严格的身份证号码校验
	*/
	idCard : function (idcard) {
		var Errors = [
			true,
			"\u8eab\u4efd\u8bc1\u53f7\u7801\u4f4d\u6570\u4e0d\u5bf9!",	//身份证号码位数不对!
			"\u8eab\u4efd\u8bc1\u53f7\u7801\u51fa\u751f\u65e5\u671f\u8d85\u51fa\u8303\u56f4\u6216\u542b\u6709\u975e\u6cd5\u5b57\u7b26!",//身份证号码出生日期超出范围或含有非法字符!
			"\u8eab\u4efd\u8bc1\u53f7\u7801\u6821\u9a8c\u9519\u8bef!",	//身份证号码校验错误!
			"\u8eab\u4efd\u8bc1\u5730\u533a\u975e\u6cd5!"				//身份证地区非法!
		];
		var area = {
			11: "\u5317\u4eac",	12: "\u5929\u6d25",	13: "\u6cb3\u5317",	14: "\u5c71\u897f",	15: "\u5185\u8499\u53e4",	21: "\u8fbd\u5b81",	22: "\u5409\u6797",	23: "\u9ed1\u9f99\u6c5f",
			31: "\u4e0a\u6d77",	32: "\u6c5f\u82cf",	33: "\u6d59\u6c5f",	34: "\u5b89\u5fbd",	35: "\u798f\u5efa",	36: "\u6c5f\u897f",	37: "\u5c71\u4e1c",	41: "\u6cb3\u5357",	42: "\u6e56\u5317",
			43: "\u6e56\u5357",	44: "\u5e7f\u4e1c",	45: "\u5e7f\u897f",	46: "\u6d77\u5357",	50: "\u91cd\u5e86",	51: "\u56db\u5ddd",	52: "\u8d35\u5dde",	53: "\u4e91\u5357",	54: "\u897f\u85cf",	
			61: "\u9655\u897f",	62: "\u7518\u8083",	63: "\u9752\u6d77",	64: "\u5b81\u590f",	65: "\u65b0\u7586",	71: "\u53f0\u6e7e",	81: "\u9999\u6e2f",	82: "\u6fb3\u95e8",	91: "\u56fd\u5916"
		};
		var Y, JYM;
		var S, M;
		var idcard_array = new Array();
		idcard_array = idcard.split("");
		if(idcard == ""){//为空
			return true;
		}
		if (area[parseInt(idcard.substr(0, 2))] == null) {
			return Errors[4]
		}
		switch (idcard.length) {
		case 15://15_DIGITS_ID_TOKEN
			if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
			} else {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
			}
			if (ereg.test(idcard)) {
				return Errors[0]
			} else {
				return Errors[2]
			}
			break;
		case 18:
			if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
			} else {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
			}
			if (ereg.test(idcard)) {
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
				Y = S % 11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y, 1);
				if (M == idcard_array[17]) {
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
		return true
	},

	/**
	*	身份证信息验证
	*	验证用户输入的出生日期和性别与身份证信息是否匹配
	*/
	idCardBirthSex : function(idNo, birth, sex){
		var checkResult = {birth:true,sex:true,isNull:false};
		if(idNo == null || idNo == '' || 
		   birth == null || birth == '' ||
		   sex == null || sex == '') {
			checkResult.isNull=true;
			return checkResult;
		}
		var id_sex_num, id_sex, id_birth;
		var birthday;
		if(idNo.length==15) {
			birthday = $birthSplit(birth, 1);
			id_birth = idNo.substr(6,6);
			id_sex_num = idNo.substr(14,1);
		}
		if(idNo.length==18) {
			birthday = $birthSplit(birth, 2);
			id_birth = idNo.substr(6,8);
			id_sex_num = idNo.substr(16,1);
		}
		
		if(birthday!=id_birth) {
			//身份证信息与用户输入的出生日期不一致
			checkResult.birth=false;
		}
		id_sex = (id_sex_num%2==0) ? 'F' : 'M';
		if(id_sex != sex) {
			checkResult.sex=false;
		}
		return checkResult;
	},
	
	/** 
	*	校验是否为整数型字符串
	*/
	isInteger : function (str){
		Val = $.trim(str);
		myRegExp = /^([0-9]+)$/;
		return (myRegExp.test(Val))
	},
	
	/** 
	*	校验出生日期
	*/
	birthDate : function (oBirthYear,oBirthMonth,oBirthDay,dFilterMask){
		var birthYear = oBirthYear.val();
		var birthMonth = oBirthMonth.val();
		var birthDay = oBirthDay.val();
		if(dFilterMask == "year"){
			if(birthYear == ""){
				return true;
			}
			if(Validate.isInteger(birthYear)){
				if(birthYear.length == 4){
					if(birthYear < 1900){
						return '生日年份不能小于1900年，请修改!';
					}
					return true;
				}
				return '年份输入有误，请修改! 如:2008.';
			}
			return '年份输入有误，请修改! 如:2008.';
		} else if (dFilterMask == "month"){
			if(birthMonth == ""){
				return true;
			}
			if(Validate.isInteger(birthMonth)){
				if(birthMonth <= 12 && birthMonth >0){
					if(birthMonth.length == 1){
						oBirthMonth.val("0"+birthMonth);
						return true;
					}else if(birthMonth.length !=2){
						return '月份输入有误，请修改! 如:01或1.';
					}
					return true;
				}
				return '月份输入有误，请修改成1到12的范围内!';
			}
			return '月份输入有误，请修改! 如:01或1.';
		}else if(dFilterMask == "day"){
			if(birthDay == ""){
				return true;
			}
			if(birthYear =="" || birthMonth == ""){
				//return '日期不能为空！';
				return true;
			}else{
				if(Validate.isInteger(birthDay)){
					if(birthDay <= common.daysInMonth(birthYear,birthMonth) && birthDay>0){
						if(birthDay.length == 1){
							oBirthDay.val("0"+birthDay);
							return true;
						}else if(birthDay.length != 2){
							return '日期输入有误，请修改! 如:01或1.';
						}
						return true;
					}
					return '日期输入有误，请修改! 如:01或1.';
				}
				return '日期输入有误，请修改! 如:01或1.';
			}
		}
	},
	
	/**
	*	姓名特殊字符检查
	*/
	specialName : function(value){
	   var vkeyWords=/^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\,.<>/?]{1}[^`~!@#$%^&()+=|\\\][\]\{\}:;'\,<>?]{0,19}$/;
	   if(!vkeyWords.test(value)) {
			return false;
	   } 
	   if(value=='不详'||value=='不祥'||value=='未知'||value=='不知道'){
			return false;
	   }
	   return true;
	},


	/**
	*	用途：检查输入字符串是否为空或者全部都是空格
	*	输入：str
	*	返回：如果全是空返回true,否则返回false
	*/
	isNull : function (str){
		if(str == "") return true;
		var regu = "^[ ]+$";
		var re = new RegExp(regu);
		return re.test(str);
	},
	
	/**
	*	去除姓名中所有空格、数字
	*/
	trimNameMethod : function(nameEle){
		var name = nameEle.value;
		var reg=/\s+/g;
		var numreg = /[\d\(\)]/g;
		name = name.replace(reg,"")
		name = name.replace(numreg,""); 
		nameEle.value = name;
	},

	/**
	*	去除页面文本输入域中文本内容包含的所有空格
	*/
	trimTextValue : function(TextEle){
	   var text = TextEle.value;
	   var reg=/\s+/g;
	   text = text.replace(reg,"")
	   TextEle.value = text;
	}
}

/*弹框遮罩*/
var commonObj = {
	// 加载....
	loadShow: function(){ // 显示loading
		var loadImg="<div class='loading'></div><div class='load-bg'><img src='app_img/loading.gif' class='loading-img'></div>";
        $("body").append($(loadImg));
	},
    loadHide: function(){//隐藏loading
        $(".loading,.load-bg").remove();
    },
    // 弹出遮罩层
    openLayer:function(){
    	var $bd=$("body"),
	    	bdH = $(document).height(),
	        bdW = $(document).width(),
	        winH = $(window).height(),
	        winW = $(window).width(),
		    height = (bdH-winH)>0 ? bdH : winH,
		    width = (bdW-winW)>0 ? bdW : winW,
		    filter;
		filter="<div class='filter' style='height:" + height + "px; width:" + width + "px;'></div>";
    	$bd.append($(filter));
    	$('.tc').show();
    	$('.tc-con').addClass('bounceIn');
    	//禁止整个页面随当前弹出框滚动
	    var scrollTop = $(window).scrollTop() > 0 ? -$(window).scrollTop() : 0;
	    var left = (winW-640)/2 > 0 ? (winW-640)/2 : 0 ;
	    $bd.css({"position":"fixed","top":scrollTop,"left":left+"px"});

	    $bd.delegate(".closed-t", "touchstart", function(event){
	        event.stopPropagation();
	        $(".filter").remove();
	        $(".tc").hide();
	        $('.tc-con').removeClass('bounceIn');

	        //恢复点击之前位置
	        $bd.css({"position":"static","top":"none","left":"none"});
	        if(scrollTop!=0){
	            $(window).scrollTop(-scrollTop);
	        }
	    });
	    $bd.delegate(".free-btn","touchstart",function(){
	    	event.stopPropagation();
	        $(".filter").remove();
	        $(".tc").hide();
	        $('.tc-con').removeClass('bounceIn');
	        $("html,body").stop().animate({"scrollTop":265},1000);

	        //恢复点击之前位置
	        $bd.css({"position":"static","top":"none","left":"none"});
	        if(scrollTop!=0){
	            $(window).scrollTop(-scrollTop);
	        }
	    })
    }
}