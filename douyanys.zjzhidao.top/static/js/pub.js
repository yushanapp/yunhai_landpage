// 全局数组
// 身高
var gHeightArr = new Array(140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220);

//体重
var gWeightArr = new Array(35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100);

//公共函数库
window.Comm = {
	checkNickname:function(str){
		if(str.length<2 || str.length>16) return false;
		return true;
		
		var exp = /^\w+$/;
		return exp.test(str);
	},
	full2half:function(str){
		var i;
		var result='';
		for(i=0;i<str.length;i++)
		{
			str1=str.charCodeAt(i);
			if(str1<65296)
			{ 
				result+=String.fromCharCode(str.charCodeAt(i)); 
				continue;
			}
			if(str1<125&&!flag)
				result+=String.fromCharCode(str.charCodeAt(i));
			else
				result+=String.fromCharCode(str.charCodeAt(i)-65248);
		}
	
		return result.replace(/\s+/g, "");
	},
	empty:function(str){
		if(typeof(str)=='undefined' || str=='undefined' || str=='')
		{
			return true;
		}
		else return false;
	},
	urlFormat: function(path,domain){
		if(path.indexOf('http')==-1){
            if(path.substr(0,1)!="/") path = "/"+path;
            return domain + path;
        }
        
        return path;
	},
	newDate : function(str){ // 2013-05-06 12:00:00
		var _arr = str.split(' ');
		var _day = _arr[0].split('-');
		_arr[1] = (_arr[1] == null) ? '0:0:0' :_arr[1];
		var _time = _arr[1].split(':');
		
		for (var i = _day.length - 1; i >= 0; i--)
		{
			_day[i] = isNaN(parseInt(_day[i], 10)) ? 0 :parseInt(_day[i], 10);
		};
		for (var i = _time.length - 1; i >= 0; i--)
		{
			_time[i] = isNaN(parseInt(_time[i], 10)) ? 0 :parseInt(_time[i], 10);
		};
		
		return new Date(_day[0],_day[1]-1,_day[2],_time[0],_time[1],_time[2]);
		/*return _temp.getTime() / 1000;*/
	},
	trim: function(str){
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	substr: function(str, len){
		str =str.replace(/\</ig,"&lt;");
		str =str.replace(/\>/ig,"&gt;");
		if(!str || !len) { return ''; }
		var a = 0;
		var i = 0;
		var temp = '';
		for (i=0;i<str.length;i++){
			if (str.charCodeAt(i)>255){
				a+=2;
			}
			else{
				a++;
			}
			if(a > len) { return temp; }
			temp += str.charAt(i);
		}
		return str;
	},
	strlen: function(str) {
	  return str.replace(/[^\x00-\xff]/g,"**").length;
	},
	json2str: function (jsonObj) {
		return JSON.stringify(jsonObj);
	},
	str2json: function (str) {
		if(str)return JSON.parse(str);
	},
	rand: function(min,max) {
		return parseInt(Math.random()*(max-min+1)+min);
	},
	time: function() {
		return Math.round((new Date()).valueOf()/1000);
	},
	getOS: function(){
		if(typeof(gOS) != undefined) return gOS;
		
		if(navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1 || navigator.userAgent.indexOf("iPod") > -1){
			return 'ios';
		}
		else if(navigator.userAgent.indexOf("Android") > -1){
			return 'android';
		}
		else
		{
			return 'web';
		}
	},
	isIpad: function(){
		if(navigator.userAgent.indexOf("iPad") > -1) return true;
		return false;
	},
	configScreen:function(){//适配屏幕
		var width=document.body.clientWidth;
		var point=width/32;
		//当屏幕为ipad时候
		if(width==768)
		{
			point=16;
		}
		document.querySelectorAll("html")[0].style.fontSize=point+"px";
	}
};

//当前进程本地存储
window.SStorage = {
	_key: function(key) {
		return "mly_"+key;
	},
	get: function(key) {
		return sessionStorage.getItem(SStorage._key(key));
	},
	set: function(key, val) {
		return sessionStorage.setItem(SStorage._key(key), val);
	},
	del: function(key) {
		return sessionStorage.removeItem(SStorage._key(key));
	},
	clear: function() {
		return sessionStorage.clear();
	}
};

//永久本地存储 
window.LStorage = {
	_key: function(key) {
		return "mly_"+key;
	},
	get: function(key) {
		return localStorage.getItem(LStorage._key(key));
	},
	set: function(key, val) {
		return localStorage.setItem(LStorage._key(key), val);
	},
	getObj: function(key) {
		var v = LStorage.get(key);
		if (typeof(v)=="string") {
			return Comm.str2json(v);
		}else{
			return {};
		}
	},
	setObj: function(key, val) {
        return LStorage.setItem(key, Comm.json2str(val));
	},
	del: function(key) {
		return localStorage.removeItem(LStorage._key(key));
	},
	clear: function() {
		return localStorage.clear();
	}
};

//客户端对象
window.Client = {
	call:function(funcName,arg){
		if(typeof(arg) == 'string'){
			arg = Comm.str2json(arg);
		}
		if(Comm.getOS() == 'ios')
		{
			arg.funcName = funcName;
			var command = "mlyCommand:"+encodeURIComponent(Comm.json2str(arg));
			
			var iframe = document.createElement("IFRAME");
			iframe.setAttribute("height", 0);
			iframe.setAttribute("width", 0);
			iframe.setAttribute("frameborder", 0);
			iframe.setAttribute("src", command);
			document.documentElement.appendChild(iframe);
			iframe.parentNode.removeChild(iframe);
			iframe = null;
		}
		else
		{
			android[funcName](Comm.json2str(arg));
		}
	},
	copy:function(str){
		Client.call('copyStr',{str:str});
	},
	logout:function(msg){
		Client.call('logout',{msg:msg});
	},
	getLocation:function(successFunc,errorFunc,exactly){
		successFunc = Callback.add(successFunc,'json');
		errorFunc = Callback.add(errorFunc);
		Client.call('getLocation',{successFunc:successFunc,errorFunc:errorFunc,exactly:exactly});
	},
	getPoi:function(data,successFunc,cancelFunc){
		if(typeof(data)== undefined) data = {};
		if(typeof(data)=='string') data = Comm.str2json(data);
		
		successFunc = Callback.add(successFunc,'json');
		cancelFunc = Callback.add(cancelFunc,'json');
		
		Client.call('getPoi',{data:data,successFunc:successFunc,cancelFunc:cancelFunc});
	},
	getInfo:function(successFunc,errorFunc){
		successFunc = Callback.add(successFunc,'json');
		errorFunc = Callback.add(errorFunc);
		Client.call('getClientInfo',{successFunc:successFunc,errorFunc:errorFunc});
	},
	downLoadAndroid:function(downLoadUrl){
		Client.call('downLoadInstall',{downLoadUrl:downLoadUrl});
	},
	navigation:function(longitude,latitude,name,successFunc,cancelFunc){
		successFunc = Callback.add(successFunc);
		cancelFunc = Callback.add(cancelFunc);
		Client.call('navigation',{longitude:longitude,latitude:latitude,name:name,successFunc:successFunc,cancelFunc:cancelFunc});
	},
	callPhone:function(phone){
		Client.call('callPhone',{phone:phone});
	},
	showMap:function(longitude,latitude,name,successFunc,cancelFunc){
		successFunc = Callback.add(successFunc);
		cancelFunc = Callback.add(cancelFunc);
		Client.call('showMap',{longitude:longitude,latitude:latitude,name:name,successFunc:successFunc,cancelFunc:cancelFunc});
	},
	setVisitPassword:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('setVisitPassword',{successFunc:successFunc});
	},
	gesturePasswordPage:function(){
		Client.call('gesturePasswordPage',{});
	},
	refreshKissMy:function(){
		Client.call('refreshKissMy',{});
	},
	getArea:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getArea',{successFunc:successFunc});
	},
	getLocationArea:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getLocationArea',{successFunc:successFunc});
	},
	getPushMsgState:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getPushMsgState',{successFunc:successFunc});
	},
	openAppleSet:function(successFunc){
		Client.call('openAppleSet',{});
	},
	openMiMarket:function(successFunc){
		Client.call('openMiMarket',{});
	},
	passWebData:function(data,type){
		Client.call('passWebData',{data:data,type:type});
	},
    openJoinGift:function(publish_uid,event_id,event_type,join_uid,face_url,nickname){
		Client.call('openJoinGift',{publish_uid:publish_uid,event_id:event_id,event_type:event_type,join_uid:join_uid,face_url:face_url,nickname:nickname});
	},
	closeKeyboard:function(){
		Client.call('closeKeyboard',{});
	},
	refreshBoardIndex:function(){
		Client.call('refreshBoardIndex',{});
	},
	refreshTopicList:function(sort){
		Client.call('refreshTopicList',{sort:sort});
	},
	refreshMyBoard:function(){
		Client.call('refreshMyBoard',{});
	},
	refreshTopicDetail:function(sort){
		Client.call('refreshTopicDetail',{});
	},
	setRequestParam:function(param){
		Client.call('setRequestParam',{param:param});
	},
	showLikeEachOther:function(uid,nickname,face_url,sex,age){
		Client.call('showLikeEachOther',{uid:uid,nickname:nickname,face_url:face_url,sex:sex,age:age});
	},
	ServiceBindPhoneSuccess:function(){
		Client.call('ServiceBindPhoneSuccess',{});
	},
	cleanNotification:function(event_type){
		Client.call('cleanNotification',{event_type:event_type});
	},
	//切换环境 env : ztest2 、ztest3 、mapi
	changeEnv:function(env){
		Client.call('changeEnv',{env:env});
	},
	//刷新语音视频聊天列表
	refreshCallUserList:function(){
		Client.call('refreshCallUserList',{});
	},
	getAppVersion:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getAppVersion',{successFunc:successFunc});
	},

};

//窗口对象
window.Win = {
	tips: function(msg,title,waitTime,level){
		title = title || this.title;
		Client.call('showTips',{msg:msg,waitTime:waitTime,title:title,level:level});
        return;
	},
  	alert: function(msg, enterFunc, title, enterLabel){
  		if(typeof(msg)=='object') msg = Comm.json2str(msg);
  		
  		enterFunc = Callback.add(enterFunc);
		
        Client.call('showAlertDialog',{msg:msg,title:title,enterLabel:enterLabel,enterFunc:enterFunc});
  	},
  	showAlert: function(msg, enterFunc, enterLabel,enterBtnColor,height){
  		if(typeof(msg)=='object') msg = Comm.json2str(msg);
  		
  		enterFunc = Callback.add(enterFunc);
		
        Client.call('showAlert',{msg:msg,enterLabel:enterLabel,enterFunc:enterFunc,height:height,enterBtnColor:enterBtnColor});
  	},
  	confirm: function(msg, enterFunc, title, enterLabel,cancelFunc,cancelLabel){
		enterFunc = Callback.add(enterFunc);
		cancelFunc = Callback.add(cancelFunc);
		
		Client.call('showConfirmDialog',{msg:msg,title:title,enterLabel:enterLabel,enterFunc:enterFunc,cancelLabel:cancelLabel,cancelFunc:cancelFunc});
  	},
  	showConfirm: function(msg, enterFunc, enterLabel,cancelFunc,cancelLabel,height,enterBtnColor,cancelBtnColor){
  		//绿色:green，蓝色:blue，红色:red，黄色:yellow，藏青色:navy_blue
		enterFunc = Callback.add(enterFunc);
		cancelFunc = Callback.add(cancelFunc);
		
		Client.call('showConfirm',{msg:msg,enterLabel:enterLabel,enterFunc:enterFunc,cancelLabel:cancelLabel,cancelFunc:cancelFunc,height:height,enterBtnColor:enterBtnColor,cancelBtnColor:cancelBtnColor});
  	},
  	showLoader: function(waitTime,msg,isLock){
  		Client.call('showLoader',{msg:msg,waitTime:waitTime,isLock:isLock});
  	},
  	hideLoader: function(){
  		Client.call('hideLoader',{});
  	},
  	refresh:function(hide){
  		if(typeof(hide) == 'undefined') Win.showLoader();
  		
        Client.call('refresh',{});
  	},
  	//currentFrame 注册传１，登陆进去不用传
  	open:function(pageName,data,closeCurrent,closeFunc,currentFrame,allowAllDomain){
		if(typeof(data)=='string'){
			data = Comm.str2json(data);
		}
		
		if(typeof(data)!='undefined' && typeof(data.url)!='undefined') data.url = Comm.urlFormat(data.url,gURL_MAPI);
        closeFunc = Callback.add(closeFunc);
        
        Client.call('open',{pageName:pageName,data:data,closeFunc:closeFunc,currentFrame:currentFrame,closeCurrent:closeCurrent});
  	},
  	go:function(url,newOpen,postData,closeCurrent,closeFunc,currentFrame,allowAllDomain){
  		
  		//检测到是60版本访问主页则打开客户端主页
  		if(gVersion >= 60 && (url.indexOf('/home/index') != -1 || url.indexOf('/home/?') != -1 || url.indexOf('/home?') != -1) )
  		{
  			homeParamArr = url.split('?');
  			homeParam = homeParamArr[1];

  			//refreshPrevious：：刷新上一页，closePrevious：关闭上一页
			paramStart = homeParam.indexOf("see_from=")+9;
			if(paramStart != -1)
			{
				if(homeParam.indexOf("&",paramStart)>0)
				{
					see_from = homeParam.slice(paramStart,homeParam.indexOf("&",paramStart));
				}
				else
				{
					see_from = homeParam.slice(paramStart);
				}
				if(see_from == 'profile' || see_from == 'join' || see_from == 'top_event')  homeParam = homeParam + '&refreshPrevious=1';
			}
  			if(typeof(closeFunc) != 'undefined' && closeFunc.indexOf('Win.refresh') != -1) 	homeParam = homeParam + '&refreshPrevious=1';
  			if(closeCurrent == 1)  homeParam = homeParam + '&closePrevious=1';

  			Win.open('userHome',{postData:homeParam});
  		}
  		else
  		{
  			if(typeof(newOpen) == 'undefined') newOpen = 1;
  			
  			if(typeof(newOpen)=='number' && newOpen == 1){
  				Win.open('web',{url:url,postData:postData,allowAllDomain:allowAllDomain},closeCurrent,closeFunc,currentFrame);
  				return ;
  			}
  			
  			url = Comm.urlFormat(url,gURL_MAPI);
  			
  			Client.call('loadUrl',{url:url,postData:postData,allowAllDomain:allowAllDomain});
  		}

  	},
  	notice:function(noticeType,data)
  	{
  		if(typeof(data)=='string'){
			data = Comm.str2json(data);
		}
		Client.call('notice',{noticeType:noticeType,data:data});
  	},
  	close: function(){
  		Client.call('close',{});
  		return true;
  	},
  	selectArea:function(prov,city,successFunc,allowAllCity,country,notContainsRegios,allowAllCountry){
		successFunc = Callback.add(successFunc,'json');
		Client.call('selectArea',{successFunc:successFunc,first:prov,second:city,allowAllCity:allowAllCity,country:country,allowAllCountry:allowAllCountry,notContainsRegios:notContainsRegios});
	},
  	selectCity:function(prov,city,successFunc,allowAllCity){
		successFunc = Callback.add(successFunc,'json');
		Client.call('selectCity',{successFunc:successFunc,first:prov,second:city,allowAllCity:allowAllCity});
	},
	selectMenu: function(enterLabel,enterFunc,cancelLabel,cancelFunc){
		enterFunc = Callback.add(enterFunc);
		cancelFunc = Callback.add(cancelFunc);
		
		Client.call('selectMenu',{enterLabel:enterLabel,enterFunc:enterFunc,cancelLabel:cancelLabel,cancelFunc:cancelFunc});
  	},
	selectPicker:function(listData,selectedValue,successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('selectPicker',{listData:listData,selectedValue:selectedValue,successFunc:successFunc});
	},
	selectList:function(listData,first,second,successFunc){
		successFunc = Callback.add(successFunc,'json');
		Client.call('selectList',{listData:listData,first:first,second:second,successFunc:successFunc});
	},
	selectDate:function(successFunc,date,canSelectOld){
		// 默认不可选择老的日期
		if(typeof(canSelectOld) == 'undefined') canSelectOld = 0;
		
		successFunc = Callback.add(successFunc);
		Client.call('selectDate',{successFunc:successFunc,date:date,canSelectOld:canSelectOld});
	},
	selectTime:function(successFunc,time,canSelectOld){
		// 默认不可选择老的时间
		if(typeof(canSelectOld) == 'undefined') canSelectOld = 0;
		//if(Comm.getOS() == 'android')
		//{
			successFunc = Callback.add(successFunc);
			Client.call('selectTime',{successFunc:successFunc,time:time,canSelectOld:canSelectOld});
		//}
	},
  	closePages:function(pageNum)
  	{
		Client.call('closePages',{pageNum:pageNum});
  	},
  	openAppStore:function(app_id)
  	{
  		Client.call('openAppStore',{app_id:app_id});
  	},

    //跳转到小程序(appId:小程序应用appId，userName:小程序原始id，path:去小程序指定页面，不填默认到小程序首页)
    launchMiniProgram:function (appId,userName,path)
    {
        Client.call('launchMiniProgram',{appId:appId,userName:userName,path:path});
    }
};

window.Header = {
	setTitle: function(title){
		Client.call('setTitle',{title:title});
	},
	setRightButton: function(display,text,buttonFunc,numField){ // display: 0：不显示，1：显示文字，2：显示图片，3：加载图片url,4,显示文字＋数字
		if(display != 0 && display != 1 && display != 2 && display != 3 && display != 4){
			return false;
		}
		
		if(2 == display)
		{
			if('more' == text)
			{
				text = 'pub_title_8_v1.png'; // 三个点图标图片名
				if(gOS == 'android' && gVersion == 132) text = 'channel_details_else.png';
			}
			else if('add_event' == text)
			{
				text = 'pub_title_4_v1.png'; // 发布活动图片名
			}
		}
		buttonFunc = Callback.add(buttonFunc,'',1);
		
		Client.call('setRightButton',{display:display,text:text,buttonFunc:buttonFunc,numField:numField});
	},
	setLeftButton: function(backLevel,text,buttonFunc){
		if(typeof(buttonFunc) == 'undefined')
		{
			buttonFunc = 'Win.close';
			if(typeof(backLevel)=='number' && backLevel<0){
				if(history.length + backLevel>0) buttonFunc = 'history.go('+backLevel+')';
			}
		}
		else
		{
			buttonFunc = Callback.add(buttonFunc,'',1);
		}
		
		Client.call('setLeftButton',{text:text,buttonFunc:buttonFunc});
	},
	hideLeftButton: function(hide){
		Client.call('hideLeftButton',{hide:hide});
	},
	setCloseFunc: function(closeFunc,closeArg){
		if(typeof(closeArg)=='object') closeArg = Comm.json2str(closeArg);
		Client.call('setCloseFunc',{closeFunc:closeFunc,closeArg:closeArg});
	},
	setDownRefresh: function(allow){
		//设置是否允许下拉刷新   allow 客户端默认1 
		Client.call('setDownRefresh',{allow:allow});
	},
	setBgColor:function(color){
		Client.call('setBgColor',{color:color});
	},
	setUpload: function(allow,loadFunc)
	{
		loadFunc = Callback.add(loadFunc,'',1);
		Client.call('setUpload',{allow:allow,loadFunc:loadFunc});
	},
	setRightSlide: function(allow){
		//设置是否允许向右滑动   allow 客户端默认1 
		Client.call('setRightSlide',{allow:allow});
	},
	setScrollFunc: function(allow,callbackFunc){
		//设置是否允许滑动   allow 客户端默认1
		//callbackfunc  参数  0向上，1向下
		callbackFunc = Callback.add(callbackFunc,'',1);
		Client.call('setScrollFunc',{allow:allow,callbackFunc:callbackFunc});
	},
	showCloseButton: function(allow){
		//设置是否显示关闭的按钮 allow 客户端默认0，0 不显示，1 显示
		Client.call('showCloseButton',{allow:allow});
	},
	showTextField: function(allow,callbackFunc,placeholder,maxLength,tips,lockText,lockFunc){
		/**
		设置是否显示输入框 allow 客户端默认0，0 不显示，1 显示
		当输入框文字要提交的时候，将会把信息抛到这个callback 中 callbackFunc(rs) rs== 输入框内容
		maxLength 输入框最多可以输入多少长度 一个字母和一个汉字算1个，表情 有可能是2个有可能是4个
		placeholder 输入框默认中的文字
		lockText  锁上输入了的文字提示
		lockFunc 点击锁定层 调用的方法
		**/
		if(typeof(maxLength) =='undefined') maxLength = 50;
		if(typeof(tips) == 'undefined') tips = "最多只能输入"+maxLength+"个字符";
		if(typeof(placeholder) == 'undefined') placeholder = "";
		if(typeof(lockText) == 'undefined') lockText = "";
		callbackFunc = Callback.add(callbackFunc,'',1);
		lockFunc = Callback.add(lockFunc,'',1);
		Client.call('showTextField',{allow:allow,callbackFunc:callbackFunc,placeholder:placeholder,maxLength:maxLength,tips:tips,lockText:lockText,lockFunc:lockFunc});
	},
	compassAngle: function(allow,data,callbackfunc)
	{
		/**
		   设置是否显示输入框 allow 客户端默认0，0 不显示，1 显示
		   数据信息 data 
		   当用户拿到角度或者没有定位到左边，请调用 callbackfunc
		**/

		callbackFunc = Callback.add(callbackFunc,'',1);
		Client.call('compassAngle',{allow:allow,callbackFunc:callbackFunc,longitude:data.longitude,latitude:data.latitude});
	}
};

// 用户信息相关
window.UserInfo = {
	set:function(userinfo){
		if(typeof(userinfo)=='object') userinfo = Comm.json2str(userinfo);
		Client.call('setUserInfo',{userinfo:userinfo});
	},
	top:function(uid, face_url,is_vip){
		Client.call('superTopUser',{uid:uid,face_url:face_url,is_vip:is_vip});
	},
	refreshHome:function(){
		Client.call('refreshHome',{});
	},
	refreshMenuMy:function(){
		Client.call('refreshMenuMy',{});
	},
};

window.Chat = {
	refresh:function(chat_uid){
		Client.call('chatRefresh',{data:{chat_uid:chat_uid}});
	},
	updateNotificationsNum:function(type,number)
	{
		number = parseInt(number);
		Client.call('updateNotificationsNum',{type:type,number:number});
	},
};

// 活动相关
window.Event = {
	updateInfo:function(data, successFunc){
		// 聊天页跳转到新页面，返回后更新顶部活动信息
		successFunc = Callback.add(successFunc);
		Client.call('updateEventStatus', {data:data,successFunc:successFunc});
	},
	getMeetAddr:function(prov, city, successFunc, errorFunc){
		// 获取见面地点坐标
		successFunc = Callback.add(successFunc);
		errorFunc = Callback.add(errorFunc);
		Client.call('getMeetAddrInfo', {prov:prov,city:city,successFunc:successFunc,errorFunc:errorFunc});
	},
	getSignAddr:function(meet_long, meet_lat, meet_addr, successFunc, errorFunc){
		// 获取签到坐标
		successFunc = Callback.add(successFunc);
		errorFunc = Callback.add(errorFunc);
		Client.call('getSignAddrInfo', {meet_long:meet_long,meet_lat:meet_lat,meet_addr:meet_addr,successFunc:successFunc,errorFunc:errorFunc});
	},
	alertTips:function(tips, enterName, enterFunc, cancelName, cancelFunc){
		enterFunc = Callback.add(enterFunc);
		cancelFunc = Callback.add(cancelFunc);
		
		Client.call('showAlertTips',{tips:tips,enterName:enterName,enterFunc:enterFunc,cancelName:cancelName,cancelFunc:cancelFunc});
	},
	refresh:function(){
		Client.call('eventRefresh',{});
	},
	setPublishInfo:function(event_id, title, color){
		Client.call('setPublishInfo',{event_id:event_id, title:title, color:color});
	},
	refreshDetail:function(event_id, publish_uid, event_type){
		//刷新活动详情
		Client.call('refreshDetail',{event_id:event_id,publish_uid:publish_uid,event_type:event_type});
	},
};

window.Callback = {
	count:0,
	data:{},
	add:function(func,argType,keep){
		if(typeof(func) != 'function') return func;
		if(typeof(argType) == 'undefined') argType = '';
		if(typeof(keep) == 'undefined') keep = 0;
		
		Callback.count++;
		Callback.data[Callback.count] = {func:func,argType:argType,keep:keep};
		return 'Callback.run('+Callback.count+')';
	},
	run: function(id,clientArg){
		if(typeof(clientArg) == 'string') clientArg = decodeURIComponent(clientArg);
		if(typeof(Callback.data) == 'undefined') return false;
		if(typeof(Callback.data[id]) == 'undefined') return false;
		
		if(Callback.data[id].argType == 'json')
		{
			clientArg = Comm.str2json(clientArg);
		}
		
		var result = Callback.data[id].func(clientArg);
		
		if(Callback.data[id].keep != 1) delete Callback.data[id];
		
		return result;
	},
};

window.Request = {
	post: function(url, postData, successFunc, showLoader) {
        url = Comm.urlFormat(url,gURL_MAPI);
		
		successFunc = Callback.add(successFunc);
		
		Client.call('ajaxRequest',{url:url,postData:postData,showLoader:showLoader,successFunc:successFunc,errorFunc:'Request.error',timeout:30000});
	},
	error: function(rs){
		Win.tips("网络请求失败，请检查网络后重试");
	}
}

window.Photo = {
	show:function(imgArr,index,allowSave){
		if(typeof(imgArr)=='string') imgArr = [imgArr];
		Win.open('show_img',{imgArr:imgArr,index:index,allowSave:allowSave});
	},
	upload:function(arg){
        arg.url = Comm.urlFormat(arg.url,gURL_MAPI); //照片上传接口地址
		
		if(Comm.getOS() == 'ios') arg.quality = 0.5;
		else arg.quality = 90;
		
		if(typeof(arg.video_filename) =='undefined') arg.video_filename = 'video_file';
		if(typeof(arg.blur_filename) =='undefined') arg.blur_filename = 'blur_file';  //模糊图片文件名
		if(typeof(arg.filename)	=='undefined') arg.filename = 'file';
		if(typeof(arg.minSize)	=='undefined') arg.minSize = '160*160';
		if(typeof(arg.maxSize)	=='undefined') arg.maxSize = '960*960';
		if(typeof(arg.useFilter)=='undefined') arg.useFilter = 1;
		if(typeof(arg.bgMusicIndex)=='undefined') arg.bgMusicIndex = 'short';
		if(typeof(arg.useEditer)=='undefined') arg.useEditer = 1;
		if(typeof(arg.useFrontCamera)=='undefined') arg.useFrontCamera = 0;
		if(typeof(arg.maxFileNum)=='undefined') arg.maxFileNum = 1;
		if(typeof(arg.uploadWay)=='undefined') arg.uploadWay = 0; //0:全部, 1:选择照片, 2:拍照，3:录视频，4:选择照片＋拍照，5:选择视频
		
		//视频参数
		if(typeof(arg.minTime)	=='undefined') arg.minTime = 2;  //录制最短时间
		if(typeof(arg.maxTime)	=='undefined') arg.maxTime = 20; //录制最长时间
		if(typeof(arg.minImportTime) =='undefined') arg.minImportTime = 4; //导入视频最短时间
		if(typeof(arg.maxImportTime) =='undefined') arg.maxImportTime = 120; //导入视频最长时间
		if(typeof(arg.tips) =='undefined') arg.tips = ''; //tips
		if(typeof(arg.facedetect) =='undefined') arg.facedetect = 0; //人脸识别
		// 形象照切图
		if(typeof(arg.isface) =='undefined') arg.isface = 0;

		// 主页封面图
		if(typeof(arg.isHomeBg) =='undefined') arg.isHomeBg = 0;
		
		arg.successFunc = Callback.add(arg.successFunc,'json');
		arg.errorFunc = Callback.add(arg.errorFunc);
		arg.cancelFunc = Callback.add(arg.cancelFunc);
		
		Client.call('uploadPhoto',{url:arg.url,postData:arg.postData,video_filename:arg.video_filename,blur_filename:arg.blur_filename,minTime:arg.minTime,maxTime:arg.maxTime,minImportTime:arg.minImportTime,maxImportTime:arg.maxImportTime,bgMusicIndex:arg.bgMusicIndex,useFrontCamera:arg.useFrontCamera,uploadWay:arg.uploadWay,maxFileNum:arg.maxFileNum,filename:arg.filename,minSize:arg.minSize,maxSize:arg.maxSize,quality:arg.quality,useFilter:arg.useFilter,useEditer:arg.useEditer,successFunc:arg.successFunc,errorFunc:arg.errorFunc,cancelFunc:arg.cancelFunc,tips:arg.tips,isface:arg.isface,isHomeBg:arg.isHomeBg,facedetect:arg.facedetect});
	},
	uploads:function(arg){
        arg.url = Comm.urlFormat(arg.url,gURL_MAPI); //照片上传接口地址
		
		if(Comm.getOS() == 'ios') arg.quality = 0.5;
		else arg.quality = 90;
		
		if(typeof(arg.video_filename) =='undefined') arg.video_filename = 'video_file';
		if(typeof(arg.blur_filename) =='undefined') arg.blur_filename = 'blur_file';  //模糊图片文件名
		if(typeof(arg.filename)	=='undefined') arg.filename = 'file';
		if(typeof(arg.minSize)	=='undefined') arg.minSize = '160*160';
		if(typeof(arg.maxSize)	=='undefined') arg.maxSize = '960*960';
		if(typeof(arg.useFilter)=='undefined') arg.useFilter = 1;
		if(typeof(arg.bgMusicIndex)=='undefined') arg.bgMusicIndex = 'short';
		if(typeof(arg.useEditer)=='undefined') arg.useEditer = 1;
		if(typeof(arg.useFrontCamera)=='undefined') arg.useFrontCamera = 0;
		if(typeof(arg.maxFileNum)=='undefined') arg.maxFileNum = 9;
		if(typeof(arg.uploadWay)=='undefined') arg.uploadWay = 0; //0:全部, 1:选择照片, 2:拍照，3:录视频，4:选择照片＋拍照，5:选择视频
		
		//视频参数
		if(typeof(arg.minTime)	=='undefined') arg.minTime = 2;  //录制最短时间
		if(typeof(arg.maxTime)	=='undefined') arg.maxTime = 20; //录制最长时间
		if(typeof(arg.minImportTime) =='undefined') arg.minImportTime = 4; //导入视频最短时间
		if(typeof(arg.maxImportTime) =='undefined') arg.maxImportTime = 120; //导入视频最长时间
		if(typeof(arg.tips) =='undefined') arg.tips = ''; //tips
		if(typeof(arg.facedetect) =='undefined') arg.facedetect = 0; //人脸识别
		if(typeof(arg.showShareButton) =='undefined') arg.showShareButton = 1; //是否美颜
		if(typeof(arg.video_type) == 'undefined') arg.video_type = 2;//默认相册视频
		// 形象照切图
		if(typeof(arg.isface) =='undefined') arg.isface = 0;
		
		arg.successFunc = Callback.add(arg.successFunc,'json');
		arg.errorFunc = Callback.add(arg.errorFunc);
		arg.cancelFunc = Callback.add(arg.cancelFunc);
		
		Client.call('uploadPhotos',{url:arg.url,postData:arg.postData,video_filename:arg.video_filename,blur_filename:arg.blur_filename,minTime:arg.minTime,maxTime:arg.maxTime,minImportTime:arg.minImportTime,maxImportTime:arg.maxImportTime,bgMusicIndex:arg.bgMusicIndex,useFrontCamera:arg.useFrontCamera,uploadWay:arg.uploadWay,maxFileNum:arg.maxFileNum,filename:arg.filename,minSize:arg.minSize,maxSize:arg.maxSize,quality:arg.quality,useFilter:arg.useFilter,showShareButton:arg.showShareButton,useEditer:arg.useEditer,successFunc:arg.successFunc,errorFunc:arg.errorFunc,cancelFunc:arg.cancelFunc,tips:arg.tips,isface:arg.isface,facedetect:arg.facedetect,video_type:arg.video_type});
	},
	select:function(successFunc,canncelFunc){
		successFunc = Callback.add(successFunc);
		errorFunc = Callback.add(errorFunc);
		
		Client.call('selectPhoto',{successFunc:successFunc,canncelFunc:canncelFunc});
	},
	refreshPhotoInfo:function(imgArr){
		if(typeof(imgArr)=='string') imgArr = [imgArr];
		Client.call('refreshPhotoInfo',{imgArr:rs.refresh_photo});
	},
};

window.Voice = {
	data:{},
	record:function(arg){
		arg.url = Comm.urlFormat(arg.url,gURL_MAPI);
		
		if(typeof(arg.filename)	=='undefined') arg.filename = 'file';
		if(typeof(arg.maxTime)	=='undefined') arg.maxTime = 60;
		if(typeof(arg.needConfirm)	=='undefined') arg.needConfirm = 1;
		
		arg.successFunc = Callback.add(arg.successFunc,'json');
		arg.errorFunc = Callback.add(arg.errorFunc);
		arg.cancelFunc = Callback.add(arg.cancelFunc);
		
		Client.call('recordVoice',{url:arg.url,postData:arg.postData,filename:arg.filename,title:arg.title,maxTime:arg.maxTime,needConfirm:arg.needConfirm,successFunc:arg.successFunc,errorFunc:arg.errorFunc,cancelFunc:arg.cancelFunc});
	},
	play:function(id,url){
		if(typeof(Voice.data[id])=='undefined') Voice.data[id] = $('#'+id).html();
		
		Client.call('playVoice',{id:id,url:url,statusFunc:"Voice.statusFunc"});
	},
	statusFunc:function(result){
		result = Comm.str2json(decodeURIComponent(result));
		if(result.status == '1'){
			$("#"+result.id).html('<i class="sound_loading"></i>');
		}
		else if(result.status=='2'){
			$("#"+result.id).html('<i class="sound_playing"></i>');
		}
		else {
			$("#"+result.id).html(Voice.data[result.id]);
		}
	}
};

window.User = {
	search:function(type,postData){
		Client.call('searchUser',{type:type,postData:postData});
	}
};

window.Eat = {
	search:function(postData){
		Client.call('searchEat',{postData:postData});
	}
};

window.Dating = {
	search:function(postData){
		Client.call('searchDating',{postData:postData});
	}
};

window.MSocket = {
	connect:function(config){
		if(typeof(config)=='string'){
			config = Comm.str2json(config);
		}
		Client.call('connectSocket',{config:config});
	}
};

window.Video = {
	record:function(arg){
		arg.url = Comm.urlFormat(arg.url,gURL_MAPI);
		arg.successFunc = Callback.add(arg.successFunc,'json');
		arg.errorFunc = Callback.add(arg.errorFunc,'json');
		arg.cancelFunc = Callback.add(arg.cancelFunc,'json');
		
		Client.call('recordVideo',{successFunc:arg.successFunc,errorFunc:arg.errorFunc,cancelFunc:arg.cancelFunc,url:arg.url,postData:arg.postData,useFontCamera:arg.useFontCamera,filename:arg.filename,maxTime:arg.maxTime,recordQuality:arg.recordQuality});
	},
	cutPhoto:function(arg){
		arg.url = Comm.urlFormat(arg.url,gURL_MAPI);
		arg.successFunc = Callback.add(arg.successFunc,'json');
		arg.errorFunc = Callback.add(arg.errorFunc,'json');
		arg.cancelFunc = Callback.add(arg.cancelFunc,'json');
		
		Client.call('cutVideoPhoto',{successFunc:arg.successFunc,errorFunc:arg.errorFunc,url:arg.url,postData:arg.postData,useBackCamera:arg.useBackCamera,intro:arg.intro,countdownText:arg.countdownText,filename:arg.filename,photoNum:arg.photoNum,beginTime:arg.beginTime,totalTime:arg.totalTime,photoQuality:arg.photoQuality,recordQuality:arg.recordQuality,forceVideoAuth:arg.forceVideoAuth});
	},
	play:function(url){
		if(typeof(url) == 'undefined') return false;
		Client.call('playWebVideo',{url:url});
	}
};

window.Weixin = {
	isInstall:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('weixinCheck',{successFunc:successFunc});
	},
	login:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('weixinLogin',{successFunc:successFunc});
	},
	share:function(type,data,successFunc){
		//type 1:朋友圈，2:对话
		//data (share_id,title,content,img_path,voice_path,jump_url)
		//Win.showLoader(2);
		successFunc = Callback.add(successFunc,'json');
		Client.call('weixinShare',{type:type,data:data,successFunc:successFunc});
	},
	submitOrder:function(data,successFunc){
		//data (sign_content,sign_key)
		successFunc = Callback.add(successFunc,'json');
		Client.call('weixinSubmitOrder',{data:data,successFunc:successFunc});
	}
};

window.IphonePay = {
	submitOrder:function(goodsID,from,successFunc,cancelFunc){
		// 生成订单
		Request.post('/iphone/confirm/', 'productid='+goodsID+'&_sid='+from, function(data){
			var rs = Comm.str2json(data);
			if(1 == rs.ok)
			{
				successFunc = Callback.add(successFunc);
				cancelFunc = Callback.add(cancelFunc);
				Client.call('iphonePaySubmitOrder',{goodsID:goodsID,orderID:rs.order_id,successFunc:successFunc,cancelFunc:cancelFunc});
			}
			else
			{
				Win.alert(rs.msg);
			}
			
		}, 1);
	},
	setPaySucc:function(orderID){
		Client.call('setPaySucc',{orderID:orderID});
	},
};

// 支付宝
window.Alipay = {
	submitOrder:function(data,successFunc){
		//data (sign_content,sign_key)
		successFunc = Callback.add(successFunc,'json');
		Client.call('alipaySubmitOrder',{data:data,successFunc:successFunc});
	},
	isAlipayInstall:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('isAlipayInstall',{successFunc:successFunc});
	}
};

// qq支付
window.QQpay = {
	init:function(){
		Client.call('qqpayInit',{});
	},
	submitOrder:function(data,successFunc){
		successFunc = Callback.add(successFunc,'json');
		Client.call('qqpaySubmitOrder',{data:data,successFunc:successFunc});
	}
};
// qq分享
window.QQconnect = {
	share:function(type,data,successFunc){
		//type 1:空间，2:对话
		//data (share_id,title,content,img_path,voice_path,jump_url)
		//Win.showLoader(2);
		successFunc = Callback.add(successFunc,'json');
		Client.call('qqShare',{type:type,data:data,successFunc:successFunc});
	}
};
// 移动应用内计费[appId:应用编码, appKey:app key, goodId:商品ID]
window.Cmccpay = {
	submitOrder:function(appId, appKey, goodId, orderId, successFunc, errorFunc){
		successFunc = Callback.add(successFunc,'json');
		errorFunc = Callback.add(errorFunc);
		Client.call('cmccSubmitOrder',{appId:appId,appKey:appKey,goodId:goodId,orderId:orderId,successFunc:successFunc,errorFunc:errorFunc});
	}
};

window.Cache = {
	get:function(key,successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('cacheGet',{key:key,successFunc:successFunc});
	},
	set:function(key,value,successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('cacheSet',{key:key,value:value,successFunc:successFunc});
	},
	add:function(key,offset,successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('cacheAdd',{key:key,offset:offset,successFunc:successFunc});
	},
	del:function(key,successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('cacheDel',{key:key,successFunc:successFunc});
	},
	clear:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('clearCache',{successFunc:successFunc});
	},
	getCacheSize:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getCacheSize',{successFunc:successFunc});
	},
	getGesturePasswordState:function(successFunc){
		successFunc = Callback.add(successFunc);
		Client.call('getgesturePasswordState',{successFunc:successFunc});
	}
};

var EmailHelperLib = new Array('@qq.com', '@163.com', '@sina.com', '@gmail.com', '@126.com', '@sohu.com', '@tom.com', '@hotmail.com', '@live.com', '@live.cn');

// 绑定input事件效果
function inputBindEvent(field){	
	var obj = $('#'+field);
	if(1 > obj.length) return false;
	var key = obj.attr('id');
	
	if(obj.val() != ''){
		$('#'+key+'_tips').html('');
		if(0 < $('#'+key+'_money').length){
			$('#'+key+'_money').css('visibility', 'visible');
		}
	}
	
	obj.bind('focus', function(){
		if('' != obj.val()){
			if(0 < $('#'+key+'_close').length){
				$('#'+key+'_close').css('display', 'inline-block');
			}
		}
	});
	obj.bind('blur', function(){
		if('' != obj.val()){
			if(0 < $('#'+key+'_close').length){
				/* 定时器使用是为了失去焦点后清除按钮马上消失 */
				setTimeout(function(){
					$('#'+key+'_close').css('display', 'none');
				}, 200);
			}
		}

		/** 邮箱补全助手处理 */
		setTimeout(function(){
			if(0 < $('#'+key+'_helper').length){
				$('#'+key+'_helper').hide();
			}
		}, 200);
	});
	obj.bind('cut', function(){
		if(0 < $('#'+key+'_tips').length){
			$('#'+key+'_tips').text($('#'+key+'_tips').attr('tips'));
		}
		if(0 < $('#'+key+'_money').length){
			$('#'+key+'_money').css('visibility', 'hidden');
		}
		if(0 < $('#'+key+'_close').length){
			$('#'+key+'_close').css('display', 'none');
		}
		if(0 < $('#'+key+'_helper').length){
			$('#'+key+'_helper').hide();
		}

		/** 邮箱补全助手处理 */
		if(0 < $('#'+key+'_helper').length){
			$('#'+key+'_helper').hide();
		}
	});
	obj.bind('paste', function(){
		if(0 < $('#'+key+'_tips').length){
			$('#'+key+'_tips').text('');
		}
		if(0 < $('#'+key+'_money').length){
			$('#'+key+'_money').css('visibility', 'visible');
		}
		if(0 < $('#'+key+'_close').length){
			$('#'+key+'_close').css('display', 'inline-block');
		}
		
		/** 邮箱补全助手处理 */
		if(0 < $('#'+key+'_helper').length && 0 < EmailHelperLib.length){
			emailAutoHelper(obj, key);
		}
	});
	obj.bind('keyup', function(){
		if('' != obj.val()){
			if(0 < $('#'+key+'_tips').length){
				$('#'+key+'_tips').text('');
			}
			if(0 < $('#'+key+'_money').length){
				$('#'+key+'_money').css('visibility', 'visible');
			}
			if(0 < $('#'+key+'_close').length){
				$('#'+key+'_close').css('display', 'inline-block');
			}
		}else{
			if(0 < $('#'+key+'_tips').length){
				$('#'+key+'_tips').text($('#'+key+'_tips').attr('tips'));
			}
			if(0 < $('#'+key+'_money').length){
				$('#'+key+'_money').css('visibility', 'hidden');
			}
			if(0 < $('#'+key+'_close').length){
				$('#'+key+'_close').css('display', 'none');
			}
		}
		
		/** 邮箱补全助手处理 */
		if(0 < $('#'+key+'_helper').length && 0 < EmailHelperLib.length){
			emailAutoHelper(obj, key);
		}
	});
	obj.bind('input', function(){
		if('' != obj.val()){
			if(0 < $('#'+key+'_tips').length){
				$('#'+key+'_tips').text('');
			}
			if(0 < $('#'+key+'_money').length){
				$('#'+key+'_money').css('visibility', 'visible');
			}
			if(0 < $('#'+key+'_close').length){
				$('#'+key+'_close').css('display', 'inline-block');
			}
		}else{
			if(0 < $('#'+key+'_tips').length){
				$('#'+key+'_tips').text($('#'+key+'_tips').attr('tips'));
			}
			if(0 < $('#'+key+'_money').length){
				$('#'+key+'_money').css('visibility', 'hidden');
			}
			if(0 < $('#'+key+'_close').length){
				$('#'+key+'_close').css('display', 'none');
			}
		}
		
		/** 邮箱补全助手处理 */
		if(0 < $('#'+key+'_helper').length && 0 < EmailHelperLib.length){
			emailAutoHelper(obj, key);
		}
	});
	if(0 < $('#'+key+'_close').length){
		$('#'+key+'_close').bind('click', function(){
			obj.val('');
			$('#'+key+'_close').css('display', 'none');
			if(0 < $('#'+key+'_tips').length){
				$('#'+key+'_tips').text($('#'+key+'_tips').attr('tips'));
			}
			if(0 < $('#'+key+'_money').length){
				$('#'+key+'_money').css('visibility', 'hidden');
			}
			obj.get(0).focus();
		});
	}
}

/*
邮箱补全
*/
function emailAutoHelper(obj, key){
	var helper_li = '';
	
	if('' != obj.val()){
		var objInputVal = obj.val().split('@');
		
		var is_show = 0;
		if(key == 'email' && objInputVal[0].length<1024 )//之前是length<3，输入到第三位的时候邮箱补全消失，改为输入@邮箱补全就出现
		{
			is_show=1;
			objInputVal[1] = '';
		}
		else if(undefined != objInputVal[1]) is_show=1;
		
		if(is_show == 1){
			for(var i in EmailHelperLib){
				if('' != objInputVal[0] && ('' == objInputVal[1] || 1 == EmailHelperLib[i].indexOf(objInputVal[1]))){
					if(EmailHelperLib[i] != ('@'+objInputVal[1])){
						helper_li += '<p class="email_help_list" onClick="selectedHelper(this, \''+key+'\')">'+objInputVal[0].replace(/\s*/g, "")+EmailHelperLib[i]+'</p>';
					}
				}
			}
		}
	}
	$('#'+key+'_helper').html(helper_li);
	if('' != helper_li){
		$('#'+key+'_helper').show();
	}else{
		$('#'+key+'_helper').hide();
	}
}
/*
邮箱补全选中
*/
function selectedHelper(obj, key){
	$('#'+key).val($(obj).text());
	$('#'+key+'_helper').hide();
	obj.get(0).blur();
}
$(document).ready(function(){
	Win.hideLoader();
	$('.fill-effect').on("touchstart",function()
	{
		var btn=$(this);
		btn.children('.btn-hide').css("background-color",btn.attr("data-color"));
		btn.addClass("active");
	});
	$('.fill-effect').on("touchend",function()
	{
		$(this).removeClass("active");
	});
});

var getLangText = function(key){
	$('#language_key').find('div').each(function(){
		if($(this).attr('key')==md5(key)){
			return $(this).html();
		}
	});
	return key;
}

