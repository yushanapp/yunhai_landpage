


















var JESONG_MESSAGE_TEXT;
var jesong;
(function(){
	function isMobile(){
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){ 
			return true;
		}else{
			return false;
		}
	}
	if(jesong || (false && true != isMobile())){
		return;
	}
JESONG_MESSAGE_TEXT = {"inviteText":"","extCode":"","msgOfDisConnected":"感谢您的咨询， 再见！","welcomeMsgOfConnected":"<p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \">您好，欢迎来到学历报名中心！</p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"color: rgb(255, 0, 0); \"><strong>一年</strong></span>拿名校本科，只在学历报名中心！免试入学，不过全额退费！学信网终生可查，国家承认！</p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \"><span style=\"background-color: rgb(255, 255, 0); \"><strong>2018年<span style=\"background-color: rgb(255, 255, 0); color: rgb(255, 0, 0); \">主考院校直录</span>申请即将截止，名额有限，报完即止，错过将再无直录机会！</strong></span></p><p style=\"margin-top: 5px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; \">或者留下您的【电话】+【姓名】即可抢占<strong><span style=\"color: rgb(255, 0, 0); \">2000元</span></strong>助学金名额</p><p><br/></p>","inviteTitle":"","replyMsgAtConnected":"","msgOfTrans":"您的对话将被转移给我的同事， 感谢您的咨询！"};
jesong={	
	lazy : false,
	version : '2018052302',
	language : 'sc',
	visitorReady : false,
	forceReady : false,
	chatRequest : false,
	jsType : 1,
	callerOpinion : "0",
	env:{
		isPhone : true,
		scheme : "http",
		schemePort : "80",
		server:{
			monitor:'http://m.easyliao.com/',
			chat:'http://live.easyliao.com/live/',
			file:'http://scripts.easyliao.com/prd/'
		},
		compId:8961,
		confId:20802,
		vId:'',
		uId:'',
		pId:0,
		sid:0,
		promotionId:0,
		mId:'',
		lang:'',
		min:1,
		pos:'1'
	},
	config:{
		firstToRebot:0,
		phoneChatPop:0,
		monitor:false,
		panel:true,
		frameChatStyle:14,
		forceChatLogo:""
	},
	monitor:{},	panel:{},win:{},icon:{},text:{}, freecall:{}, probe:{}, phone:{},
	_isBindHost:function(){
		var bindHosts = "";
		if(bindHosts != ""){
			var _hosts = bindHosts.split(",");
			var domain = window.location.host;
			var bindHostFlag = false;
			for(var i=0; i < _hosts.length; i++){
				if(domain == _hosts[i]){
					bindHostFlag = true;
					break;
				}
			}
			return bindHostFlag;
		}else{
			return true;
		}
	},
	_genId : function(){
		var random4 = function(){
			return parseInt(Math.random()*9000+1000, 10);
		}
		var cId = "8961";
		while(cId.length < 12){
			cId = "0"+cId;
		}
		var id = ""+new Date().getTime();
		id = id.substring(3);
		id += random4();
		id += random4();
		return "01"+cId+id;
	},
	_createLayout : function(id, className){
		if(!this.lazy){
			document.write('<div id="'+id+'" class="'+className+'"></div>');
		}else{
			var _div = document.createElement("div");
			_div.id = id;
			_div.className = className;
			document.body.appendChild(_div);
		}
	},
	_loadJS : function(src){
		if(!this.lazy){
			//async="async"
			document.write('<scr'+'ipt type="text/javascript" defer src="'+src+'"></scr'+'ipt>');
		}else{
		    var script = document.createElement( "script" ); 
			script.type = "text/javascript"; 
			script.charset = "utf-8";
			script.src = src; 
			document.getElementsByTagName("script")[0].parentNode.appendChild(script); 
		}
	},
	_loadCSS : function(url){ 
		if(!this.lazy){
			document.write('<link rel="stylesheet" type="text/css" href="'+url+'"></link>');
		}else{
			var link = document.createElement( "link" ); 
			link.type = "text/css"; 
			link.rel = "stylesheet"; 
			link.href = url; 
			document.getElementsByTagName( "head" )[0].appendChild( link ); 
		}
	},
	init:function(){
		if(this._isBindHost()){
			jesong.env.vId = this._genId();
			this._createLayout("jesong_panel", "");
			if(jesong.jsType == 1 && jesong.env.isPhone){
				this._createLayout("jesong_chat_layout", "jesong_phone_layout jesong_phone_layout_sc_1");
			}else{
				this._createLayout("jesong_chat_layout", "jesong_chat_layout_pc jesong_chat_layout_pc_sc");
			}
			this._createLayout("jesong_chat_min", "jesong_chat_min_sc");
			this._createLayout("jesong_pop_msg", "");
			if("https:" == document.location.protocol){
				this.env.server.monitor = this.env.server.monitor.replace("http", "https");
				this.env.server.chat = this.env.server.chat.replace("http", "https");
				this.env.server.file = this.env.server.file.replace("http", "https");
				this.env.schemePort = "443";
				this.env.scheme = "https";
				
			}
			this._loadCSS(this.env.server.file + "css/webcall.css?ver=2018052302");
			this._loadJS(this.env.server.file + "js/webcall.js?ver=2018052302");
			this._loadCSS(this.env.server.file + "css/force.css?ver=2018052302");
		}
	},
	words:{
		welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
		greeting:JESONG_MESSAGE_TEXT.replyMsgAtConnected,
		disconnect:JESONG_MESSAGE_TEXT.msgOfDisConnected
	}
};



jesong.panel.config={
	category:'icon',	
	position:0,
	vertical:120,
	horizon:5,
	panelWhenInvite:'1'
};





jesong.icon.config={
	mode:1,
	target:'15080',
	online:'http://prd5.jswebcall.com:80/images/floaticon/online-phone-4.png?ver=2',
	offline:'http://prd5.jswebcall.com:80/images/floaticon/online-phone-4.png?ver=2',
	width:30,
	height:80,
	status:1,
	closeWidth : 0,
	closeHeight : 0,
	closeTop : 0,
	closeLeft : 0
};






jesong.freecall.config = {
	groupId : -1,
	show : false,
	panelPos : 0,
	
	panelBg : "",
	panelWidth : 0,
	panelHeight : 0,
	
	panelTop : -1,
	panelLeft : -1,
	panelRight : -1,
	panelBottom : -1,
	
	textWidth : 0,
	textHeight : 0,
	textLeft : 0,
	textTop : 0,
	
	closeWidth : 0,
	closeHeight : 0,
	closeLeft : 0,
	closeTop : 0,
	
	callWidth : 0,
	callHeight : 0,
	callLeft : 0,
	callTop : 0

};


jesong.probe = {
	texts:"", 
	groupIds:""
};

jesong.autochat={
	bgcolor:'#3097ef',
	width:320,
	height:435,
	use:0,
	start:'09:00',
	end:'18:00',
	times:-1,
	show:false,
	welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
	waitSendMsg:'',
	connect : '0',
	closeBtn : '1',
	minBtn : '1',
	mask : '0',
	userHead : 'http://scripts.easyliao.com/prd//images/chat/201805/head-user.png',
	visitorHead : 'http://scripts.easyliao.com/prd//images/chat/201805/head-visitor.png',
	phoneHeight : 80,
	tools:{
		emoticons : '1',
		opinion : '1',
		screen : '1',
		file : '1'
	}
};
jesong.init();

})();

		

