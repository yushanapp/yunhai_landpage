
if(!CT){
	var CT = {

	};
}

var debugTest = ((location.port&&location.port=="8080") || !location.host || location.host&&location.host.indexOf("test") != -1)?true:false;

//清除ajax缓存
$.ajaxSetup({ cache: false });

mui.extend(CT, {
	debugTest: debugTest,
	useLocalToken: false,
	PATH: {
		AGENT: debugTest?"https://testwebh5.hangyunejia.com":"https://webh5.hangyunejia.com",
		WXAPI: debugTest?"https://testwxapi.hangyunejia.com":"https://wxapi.hangyunejia.com",
		APPAPI: debugTest?"http://testappapi.hangyunejia.com":"https://appapi.hangyunejia.com"
	},
	getWebToken_web:function(){
		var t = this;
		CT.getJSON({
			url: CT.PATH.APPAPI + "/v1/account/login",
			data: {
				// passport: "wuhansishui@163.com",
				// password: "sishui20070501",
				passport: "13797078501",
				password: "123456",
				device_id: "123"
			},
			method: "post",
			success: function(data){
				console.log(data["data"]["web_token"]);
				var web_token = data["data"]["web_token"];
				if(web_token){
					localStorage.setItem("web_token", web_token);
					$("#page_container").text(web_token);
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	},
	//判断APP环境
	getAppEnv: (function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		// console.log(u+" || "+app);
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		// console.log(isAndroid, isIOS);
		return {
			isAndroid: isAndroid==true?true:false,
			isIOS: isIOS==true?true:false,
			isWeb: (isAndroid||isIOS)?false:true
		}
	})(),
	openPointerLayer: function(){
		var t = this;
		if($("#maskPointer").size()>0){
			$("#maskPointer").show();
			$('#maskPointer').on("click", function(e){
				$("#maskPointer").hide();			
			});
    		return;
    	}
    	var maskPointer = $('<div class="window_mask" id="maskPointer"><div class="arrow"><img src="../../images/arrow.png"></div></div>');
		$('body').append(maskPointer);
		maskPointer.show();
		$('#maskPointer').on("click", function(e){
			$("#maskPointer").hide();			
		});
	},
	openEwmLayer: function(xcx){
		var t = this;
		if($("#maskEwm").size()>0){
			$("#maskEwm").show();
			$('#maskEwm').on("click", function(e){
				$("#maskEwm").hide();			
			});
    		return;
    	}
    	//默认为应用宝，传参为小程序码
    	var imgsrc = xcx?"../../images/ewm.jpg":"../../images/actives/wx_app_down.png";
    	var maskEwm = $('<div class="window_mask" id="maskEwm"><img src="'+imgsrc+'"></div>');
		$('body').append(maskEwm);
		maskEwm.show();
		$('#maskEwm').on("click", function(e){
			$("#maskEwm").hide();			
		});
	},
	android_url: 'http://resource.hangyunejia.com/resource/uploads/file/20190411/ZoZGwQlrHasaLa3aZto4.apk',
	getAndroidUrl: function(cfg){
		var t = this, data = cfg&&cfg['data'] || {}, cb = cfg&&cfg['cb'], fb = cfg&&cfg['fb'];
		//获取最新地址		
		CT.getJSON({
			url: CT.PATH.AGENT + '/v1/h5/appdown/getandroiddownuri',
			data: data,
			method: "get",
			no_web_token: true,
			no_loading: true,
			success: function(data){
				// console.log(data["data"]);	
				//更新地址
				if(data["data"]){
					CT['android_version'] = data["data"];
					CT['android_url'] = data["data"]['download'];
					cb && cb(CT['android_url']);
				}else{
					fb && fb(CT['android_url']);
				}							
			},
			error: function(err){
				console.log(err);
				fb && fb(CT['android_url']);
			}
		});
	},
	//下载
	gotoAppDownload:function(cfg){
		var t = this;
		var is_weixin = (function(){return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1})();
		//微信里无法跳转，打开ewm
		if(is_weixin){
			t.openEwmLayer();
			return;
		}
		var open = cfg&&cfg["open"]?cfg["open"]:false;
		var time = open?2000:0;
		if($("#iframe_open_App").size()==0){
			var iframe_open_App = $('<iframe id="iframe_open_App" style="display:none;"></iframe>');
			$('body').append(iframe_open_App);
		}
		var search = location.search;
		var param = CT.queryString(search, "param");
		var url;
		if (mui.os.ios) {					
			url = "xiaozhoushipping://"+param;
			$.getScript(
			    "https://pv.sohu.com/cityjson?ie=utf-8",
			    function(data){  
			    //localIP = returnCitySN["cip"];
			    console.log(returnCitySN);
			    var cname = returnCitySN&&returnCitySN['cname'];
			    //杭州地区不下载
			    // if(cname.indexOf('杭州') > -1){
			    // 	return;
			    // }
			    if(open)window.location.href = url;
			    setTimeout(function(){
					window.open("https://itunes.apple.com/cn/app/id1104759817");
					// window.location.href = "https://itunes.apple.com/cn/app/id1104759817";  //IOS
				},time)
		    });		
			// open && window.open(url);
			// open && $("#iframe_open_App").attr("src", url);
			// alert(url);
			// if(open)window.location.href = url;
			// setTimeout(function(){
			// 	window.open("https://itunes.apple.com/cn/app/id1104759817");
			// 	// alert("https://itunes.apple.com/cn/app/id1104759817");
			// 	// window.location.href = "https://itunes.apple.com/cn/app/id1104759817";  //IOS
			// },time)
		}else if (mui.os.android){
			url = 'hyej://com.leijin.hhej?param='+param;
			// open && window.open(url);
			// $("#iframe_open_App").attr("src", url);
			window.location.href = url;
			setTimeout(function(){
				// window.open("http://resource.hangyunejia.com/resource/uploads/file/20190226/1Fb2D0wbcBx6spgW0PXJ.apk");
				window.location.href = CT['android_url'];
			},2000)
		}else{
			// CT.alert("在普通浏览器");	
			window.location.href = CT['android_url'];
		}
	},
	/*
     程序接口:
     */
    InterFace:{
        /*
         *    同步todo
         */
        todoSync:function(buss,operate,pars){
        	var t = this;
            if(!buss || !operate) return;
            if(pars && $.isArray(pars)){
                pars = pars.join("&");
            }
            pars = "opt="+operate+"&"+pars;
            if(CT.debugClient){

            }else{
                if(window.CTSyn && window.CTSyn.CommunicateSync){
                    return JSON.parse(window.CTSyn.CommunicateSync(buss,pars||""));
                }else{
                    return {};
                }
            }
        },
        /*
         *    异步todo
         */
        todoAsyn:function(buss,pars,cb){
        	var t = this;
            if(!buss) return;
            // if(pars && $.isArray(pars)){
            //     pars = pars.join("&");
            // }
            pars = pars?pars:{};
            var task_id =  CT.getUid();

            //获取环境
            var evn = CT.getAppEnv;
            
            if(mui.os.ios){//IOS
                if(window.webkit && window.webkit.messageHandlers && 
                	window.webkit.messageHandlers.CommunicateAsyn){     
	            	//注入回调方法
	            	CT[task_id] = cb; 
	            	//调起         
                	window.webkit.messageHandlers.CommunicateAsyn.postMessage({
                		fn: buss,
                		pars: pars,
                		task_id: task_id
                	});                  

                    CT.log("task_id:"+task_id+",buss:"+buss+",pars:"+JSON.stringify(pars));
                }else{
                	CT.alert('请升级客户端到最新版本 !');
                    console.log("IOS:"+buss,JSON.stringify(pars||""));
                }
            }else if(mui.os.android){//Android
            	if(!window.CommunicateAsyn){
            		CT.alert('请升级客户端到最新版本！');
            		console.log("Android: 通道 CommunicateAsyn 未注入");
            		return;
            	}
            	if(!window.CommunicateAsyn[buss]){
            		CT.alert('请升级客户端到最新版本！');
            		console.log("Android: 方法[ "+buss+" ]未注入");
            		return;
            	}
            	if(window.CommunicateAsyn && window.CommunicateAsyn[buss]){
            		//注入回调方法
	            	CT[task_id] = cb;  
	            	var params = {
                		pars: pars,
                		task_id: task_id
                	};
                	//调起
                	window.CommunicateAsyn[buss](JSON.stringify(params));

                    CT.log("task_id:"+task_id+",buss:"+buss+",pars:"+JSON.stringify(pars));
            	}else{
            		CT.alert('请升级客户端到最新版本！');
                    console.log("Android:"+buss,JSON.stringify(pars||""));
                }
            }else{//WEB
            	CT.alert('请在客户端内打开!');
            	console.log("Web:"+buss,JSON.stringify(pars||""));
            }
            //立即返回一个任务ID
            return task_id;
        }
    },
    queryString:function(str,name){
        var result = str.match(new RegExp("[\?\&]?" + name+ "=([^\&]+)","i"));
        if(result == null || result.length < 1){
            return "";
        }
        return result[1];
    },
    //获取基础数据
    getBaseData:function(cb){
    	var t = this, type = "basedata";
    	var basedata = localStorage.getItem(type);
    	if(basedata){
    		basedata = JSON.parse(basedata);
    		t.basedata = basedata;
    		cb && cb(t.basedata);
    	}else{
    		CT.getJSON({
				url: CT.PATH.APPAPI + "/" + type + ".json",
				data: {
					
				},
				method: "get",
				success: function(data){
					// console.log(data["data"]);
					var a = data["data"];
					if(a){
						var aa = {};
			    		for(var i in a){
			    			var ii = a[i];
			    			aa[ii["select_type_ename"]] = ii;
			    			ii["child"] = {};
			    			for(var j in ii["list"]){
			    				var jj = ii["list"][j];
			    				ii["child"][jj["id"]] = jj;
			    			}
			    		}
			    		t.basedata = aa;
						localStorage.setItem(type, JSON.stringify(t.basedata));
						cb && cb(t.basedata);
					}
				},
				error: function(err){
					console.log(err);
				}
			});
    	}
    },
    //获取JOB基础数据
    getJobData:function(cb){
    	var t = this, type = "jobdata";
    	var jobdata = localStorage.getItem(type);
    	if(jobdata){
    		jobdata = JSON.parse(jobdata);
    		t.jobdata = jobdata;
    		cb && cb(t.jobdata);
    	}else{
    		CT.getJSON({
				url: CT.PATH.APPAPI + "/" + type + ".json",
				data: {
					
				},
				method: "get",
				success: function(data){
					// console.log(data["data"]);
					var a = data["data"]["list"];
					if(a){
						var aa = {};
			    		for(var i in a){
			    			var ii = a[i];
			    			aa[ii["job_type_ename"]] = ii;
			    			ii["child"] = {};
			    			for(var j in ii["list"]){
			    				var jj = ii["list"][j];
			    				ii["child"][jj["id"]] = jj;
			    			}
			    		}
			    		t.jobdata = aa;
						localStorage.setItem(type, JSON.stringify(t.jobdata));
						cb && cb(t.jobdata);
					}
				},
				error: function(err){
					console.log(err);
				}
			});
    	}
    },
    //获取area基础数据
    getAreaData:function(cb){
    	var t = this, type = "areadata";
    	var areadata = localStorage.getItem(type);
    	if(areadata){
    		areadata = JSON.parse(areadata);
    		t.areadata = areadata;
    		cb && cb(t.areadata);
    	}else{
    		CT.getJSON({
				url: CT.PATH.APPAPI + "/" + type + ".json",
				data: {
					
				},
				method: "get",
				success: function(data){
					// console.log(data["data"]);
					var a = data["data"]["list"];
					if(a){
						var aa = {};
			    		for(var i in a){
			    			var ii = a[i];
			    			aa[ii["code"]] = ii;
			    			ii["child"] = {};
			    			for(var j in ii["list"]){
			    				var jj = ii["list"][j];
			    				ii["child"][jj["code"]] = jj;
			    				jj["child"] = {};
			    				for(var k in jj["list"]){
			    					var kk = jj["list"][k];
			    					jj["child"][kk["code"]] = kk;
			    				}
			    			}
			    		}
			    		t.areadata = aa;
						localStorage.setItem(type, JSON.stringify(t.areadata));
						cb && cb(t.areadata);
					}
				},
				error: function(err){
					console.log(err);
				}
			});
    	}
    },
    //整合基础数据
    formatBaseData: function(){
    	var t = this;
    	t.getBaseData(function(a){    
    		// console.log(a);
    	});
    	t.getJobData(function(b){
    		// console.log(b);
    	});
    	t.getAreaData(function(c){
    		// console.log(c)
    	});
    },
    show_loading: function(){
    	var t = this;
    	if($("#loading_dom").size()>0){
    		$("#loading_dom").show();
    		return;
    	}
    	var load_dom = $('<div class="loading_dom" id="loading_dom"></div>');
		$('body').append(load_dom);
    	load_dom.html('<div class="loading"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
			'<path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(240.06 25 25)">'+
			'<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>'+
			'</path>'+
		'</svg><span>正在加载</span></div>');
    },
    hide_loading: function(){
    	var t = this;
    	if($("#loading_dom").size()>0){
    		$("#loading_dom").fadeOut();
    	}
    },
    /*
	  从服务端获取Json数据
	   @desc
	   url  服务端数据地址
	   data post 数据
	   method get、post 默认为 get
	   success  成功后的回调方法
	   error 失败后的回调方法
	   @eg
	   CT.getJson(...);
	  */
	getJSON: function(data){
		var t = this;
		if(!data["url"]) return;
		// $.getJSON(data);
		t._getJSON(data["url"], data["data"], data["success"], data["error"], data["method"], data["datatype"], data["no_loading"], data["no_error"], data["no_web_token"]);
	},
	/*

	*/
	_getJSON: function(url, data, sfn, errfn, method, datatype, no_loading, no_error, no_web_token) {
	  if(!url) return;
	  var _data,_cache= {};
	  // var web_token = localStorage.getItem("web_token") || "";
	  var search = location.search, web_token = CT.queryString(search, "web_token");
	  if(!web_token&&CT.useLocalToken)web_token = localStorage.getItem("web_token") || "";
	  if(!data)data = {};
	  if(!no_web_token)data["web_token"] = decodeURIComponent(web_token);
	  // CT.alert("web_token: "+data["web_token"]);

	  if(!no_loading)CT.show_loading();

		var xhr = $.ajax({
			url: url,
			type: method || "POST",
			data: data || "",
			timeout : 10000, //超时时间设置，单位毫秒
			success: function(j){
				CT.hide_loading();
				var s = j.status || j.state,fn,flag = false;
				if(s=="200" || s=="success"){
				  flag = true;
				}
				if (flag) {
				  sfn && sfn(j);
				}else if(s=="404"){
				  !no_error && CT.debug && CT.toast(j.info);
				  // console.log("未登录，跳出登录？");
				  //未登录，跳出登录？
				  errfn && errfn(j);
				} else {
				  !no_error && CT.debug && CT.toast(j.info);
				  errfn && errfn(j);
				}
			},
			error: function(xhr, type, e) {
			  if (type == "abort") {
			      CT.log("abort");
			      return;
			  } else {
			      e.url = url;
			      e.data = _data;
			      !no_error && CT.debug && CT.debugErro(e, xhr, type);
			      errfn && errfn(e);
			  }
			},
			complete:function(xhr,status){
				CT.hide_loading();
			  if(status=='timeout'){
			      xhr.abort();
			      CT.log("ajaxTimeout:"+url);
			  }
			}
		});
	  
	  return xhr;
	},
	// 警告框 alert( message, title, btnValue, callback [, type] )
	alert: function(msg, cfg){
		var t = this;
		mui.alert(msg, cfg);	
	},
	// 自动关闭消息，long(3500ms),short(2000ms)
	toast: function(msg, cfg){
		var t = this;
		mui.toast(msg, cfg);
	},
	debugClientErro: function(buss,pars){
		var t = this;
		var errmsg = "接口:" + buss + "<br/>参数: " + pars;
		t.toast(errmsg, { duration: 'short'});
	},
	// 
	debugErro: function(e, xhr, type){
		var t = this;
		var errmsg = type + ",地址:" + e.url + "状态: " + e.status + " " + e.statusText
		t.toast(errmsg, { duration: 'short'});
	},
	log: function(msg){
		var t = this;
		try{
			console.log(msg);
		}catch(e){
			// t.debugClientErro(msg);
		}		
	},
    //时间戳
    _d: new Date().getTime(),
    //返回唯一ID
    getUid: function(){
    	var t = this;
    	return 'CT_' + (t._d++);
    },
	/*
	获取对象类型
	@eg
	var a={a:"123"};
	$.getType(a);
	*/
	getType: function(obj) {
	  var type;
	  return (type = typeof(obj)) == 'object' ? obj == null && 'null' || Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : type;
	},
	/*
	取消事件冒泡，阻止默认事件
	@eg
	$.stopEvent(e);
	*/
	stopEvent: function(e) {
	  if (!e) return;
	  if (window.event) {
	      window.event.cancelBubble = true;
	      window.event.returnValue = false;
	  } else {
	      e.stopPropagation();
	      e.preventDefault();
	  }
	},
  //倒计时
	countDown:function(o){
	    var cd=o.data("cd"), total = 60;
	    if(!o) return;
	    o.addClass("disabled");
	    o.html("重新发送:"+(cd-->0?cd:0));
	    if(cd>0){
	        o.data("cd",cd);
	        window.setTimeout(function(){
	            CT.countDown(o);
	        },1000);
	    }else{
	        o.data("cd", total).removeClass("disabled").html(o.data("html"));
	    }
	},
	/*跳转指定页面 marker: 跳转类型：
	1：内部导航；
	2：内部地址（App跳转时，地址里补上web_token参数）；
	3：外部地址；
	target: "_self"当前页面跳转，"_blank" 新开页面
	*/
	goto_page: function(cfg){
		var t = this, link = cfg["link"], id = cfg["id"] || "", 
		marker = cfg["marker"], target = cfg["target"] || "_self";
		if(!link || !marker){
			t.toast("缺少参数 link/marker");
			return;
		}
		CT.InterFace.todoAsyn("gotos", {
			link: link,
			id: id+"",
			target: target,
			marker: marker+""
		}, function(e){
			console.log(e);
		});
	},
	//未登录，跳转APP首页
	checkLogin: function(){
		var t = this;
		var search = location.search;
		var web_token = CT.queryString(search, "web_token") || "";
		var is_wx = CT.queryString(search, "is_wx") || false;
		if(!web_token){
			CT.alert("未登录，请先登录！");
			// window.setTimeout(function(){	            
			// 	if(!is_wx){
			// 		CT.goto_page({
			// 			"link": 'nav_001',
			// 			"target": "_self",
			// 			"marker": "1"
			// 		});
			// 	}
	  //       }, 1000);
			return false;
		}		
		return web_token;
	},
	//App内部导航跳转映射
	App:{
		nav:{
			"nav_001": "nav_001",//首页 ->
			"nav_010": "nav_010",//培训办证船员培训列表 -> 
			"nav_011": "nav_011",//培训办证证书办理列表 -> 
			"nav_012": "nav_012",//船员培训详情 -> "nav_012" (需传id)
			"nav_013": "nav_013",//证书办理详情 -> "nav_013" (需传id)
			"nav_020": "nav_020",//线下活动列表 -> "nav_020"
			"nav_021": "nav_021",//学校列表 -> "nav_021"
			"nav_022": "nav_022",//医院列表 -> "nav_022"
			"nav_023": "nav_023",//学校详情 -> "nav_023" (需传id)
			"nav_024": "nav_024",//医院详情 -> "nav_024" (需传id)
			"nav_030": "nav_030",//团购优惠酒店列表 -> "nav_030"
			"nav_031": "nav_031",//团购优惠体检列表 -> "nav_031"
			"nav_032": "nav_032",//团购优惠酒店详情 -> "nav_032" (需传id)
			"nav_033": "nav_033",//团购优惠体检详情 -> "nav_033" (需传id)
			"nav_040": "nav_040",//航运工具列表 -> "nav_040"
			"nav_100": "nav_100",//圈子招聘求职列表 -> "nav_100"
			"nav_101": "nav_101",//圈子海员生活列表 -> "nav_101"
			"nav_102": "nav_102",//职位详情 -> "nav_102" (需传id)
			"nav_103": "nav_103",//热门话题 -> "nav_103" (需传id)
			"nav_104": "nav_104",//动态详情 -> "nav_104" （需传id）
			"nav_050": "nav_050",//合伙人 -> "nav_050" （默认需传web_token）
		}
	},
	//调起APP打电话
	call_phone: function(phone){
		var t = this;
		if(!phone){
			t.toast("缺少参数 phone");
			return;
		}
		CT.InterFace.todoAsyn("callPhone", {
			phone: phone+"" // 字符串
		}, function(e){
			console.log(e);
		});
	},
	//调起APP分享链接
	share_url: function(cfg){
		var t = this, type = cfg["type"]*1, 
		title = cfg["title"], url = cfg["url"], desTitle = cfg["desTitle"];
		if(!type || !url){
			t.toast("缺少参数 type/url");
			return;
		}
		// console.log(cfg);
		var parm = {
			type: type,
			title: title,
			shareUrl: url+"" // 字符串
		};
		if(desTitle){
			parm["desTitle"] = desTitle;
		}
		CT.InterFace.todoAsyn("share", parm, function(e){
			console.log(e);
		});
	},
	//APP返回方法
	goback: function(){
		var t = this;
		CT.InterFace.todoAsyn("goBack", {
			
		}, function(e){
			console.log(e);
		});
	},
	//APP调起悬浮客服
	showFloatView: function(){
		var t = this;
		var check_ver = t.checkVersion("2.1.6");
		if(check_ver){
			CT.InterFace.todoAsyn("showFloatView", {
			
			}, function(e){
				console.log(e);
			});
		}else{
			CT._showFloatView();
		}		
	},
	//关闭悬浮客服
	closeFloatView: function(){
		var t = this;
		var check_ver = t.checkVersion("2.1.6");
		if(check_ver){
			CT.InterFace.todoAsyn("hideFloatView", {
			
			}, function(e){
				console.log(e);
			});
		}else{
			
		}
	},
	_showFloatView: function(){
		var t = this;    	
		//获取当前登录用户专属客服微信号		
		CT.getJSON({
			url: CT.PATH.AGENT + '/v1/member/wechat/cs',
			data: {},
			success: function(data){
				// console.log(data["data"]);	
				var wx_num = data["data"]["wechat"];
				t._showCsViewBy(wx_num);
			},
			error: function(err){
				console.log(err);
			}
		});
		// t._showCsViewBy("1234567~");
	},
	_showCsViewBy: function(wx_num){
		var t = this;
		if(!wx_num)return;
		mui("body").on("tap", '#floatCsView_dom_close', function(e){
			$("#floatCsView_dom").hide();
		});
		mui("body").on("tap", '#floatCsView_dom_img', function(e){
			var el = this, data = el.dataset;
			if(data["wx_num"]){
				t.cefCopy(data["wx_num"], "客服微信复制成功");
			}
		});
		if($("#floatCsView_dom").size()>0){
    		$("#floatCsView_dom").find("#floatCsView_dom_img").data("wx_num",wx_num);
    		$("#floatCsView_dom").show();
    		return;
    	}
    	var floatCsView_dom = $('<div class="floatCsView_dom" id="floatCsView_dom"></div>');
		$('body').append(floatCsView_dom);
    	floatCsView_dom.html('<div id="floatCsView_dom_close"></div><div id="floatCsView_dom_img" class="floatCsView_dom_img" data-wx_num="'+wx_num+'"></div>').show();
	},
	/*调用cef方法*/
    cefCopy:function(str, msg){
        var t=this;
        if(!str) {
            CT.alert("无复制内容.");
            return;
        }
        if(!t.$$text){
            t.$$text = $("<textarea/>").css({
                position:"fixed",
                "left":"-1000px",
                "top":"0"
            }).appendTo("body");
        }
        t.$$text.text(str).focus();
        var em = t.$$text[0];
        em.setSelectionRange(0, em.value.length);
        var rlt;
        try {
            rlt = document.execCommand("Copy");
        } catch (n) {
            rlt = !1
        }
        var text = "复制失败";
        if(rlt){
        	text = msg?msg:"复制成功";
        }
        CT.alert(text);
        return rlt;
    },
    product_version: "2.1.5",//版本默认值
    set_product_version: function(){
    	var t = this;
    	var search = location.search;
		var version = CT.queryString(search, "version") || "2.1.5";
		CT["product_version"] = version;
		localStorage.setItem("product_version", version);
		console.log(CT["product_version"]);
    },
    checkVersion:function(version){
    	var product_version = localStorage.getItem("product_version") || CT.product_version;
        var a = product_version.split(".");
        var b = version.split(".");
        for(var i=0;i<a.length;i++){
            if(a[i]==b[i]) continue;
            return  Number(a[i])>Number(b[i]);
        }
        return true;
    },
    checkTask: function(){
    	var t = this, search = location.search;
    	var url = CT.PATH.AGENT + '/v1/activity/task/check?';
    	var task_id = CT.queryString(search, "task_id") || "";
    	if(!task_id)return;
    	var parms = ["task_id="+task_id];
    	url += parms.join("&");
    	(new Image(1, 1)).src = url;
    },
  /*	
   常用方法
   */
  Lang: {
	    /*	
	     是否是字符串
	     @eg
	     $.Lang.isString("test");
	     */
	    isString: function (obj) {
	      return CT.getType(obj) == 'string';
	    },
	    /*	
	     是否是方法
	     @eg
	     $.Lang.isMethod("test");
	     */
	    isMethod: function (obj) {
	      return CT.getType(obj) == 'function';
	    },
	    /*	
	     是否是字符串
	     @eg
	     $.Lang.isArray("test");
	     */
	    isArray: function (obj) {
	      return CT.getType(obj) == 'array';
	    },
	    isUndefined: function (obj) {
	      return CT.getType(obj) == 'undefined';
	    },
	    isNumber: function (obj) {
	      return CT.getType(obj) == 'number';
	    },
	    isObject: function (obj) {
	      return CT.getType(obj) == 'object';
	    },
	    /*	
	     是否是指定类型
	     @eg
	     $.Lang.is("test","string");
	     */
	    is: function (test, aim) {
	      var result;
	      try {
	        result = (aim == 'string' || CT.Lang.isString(aim)) ? CT.getType(test) == aim : test instanceof aim
	      } catch (e) {
	      }
	      return !!result;
	    },
	    //校验身份证号
		isCardid: function(code) {
		  var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
		  var tip = "";
		  var pass = true;

		  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
		    tip = "身份证号格式错误";
		    pass = false;
		  }

		  else if (!city[code.substr(0, 2)]) {
		    tip = "地址编码错误";
		    pass = false;
		  }
		  else {
		    //18位身份证需要验证最后一位校验位
		    if (code.length == 18) {
		      code = code.split('');
		      //∑(ai×Wi)(mod 11)
		      //加权因子
		      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
		      //校验位
		      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
		      var sum = 0;
		      var ai = 0;
		      var wi = 0;
		      for (var i = 0; i < 17; i++) {
		        ai = code[i];
		        wi = factor[i];
		        sum += ai * wi;
		      }
		      var last = parity[sum % 11];
		      if (parity[sum % 11] != code[17]) {
		        tip = "校验位错误";
		        pass = false;
		      }
		    }
		  }
		  if (!pass){
		  	console.log(tip);
		  	return false;
		  }
		  return true;
		}
	},
	/*
		使用 juicer 前端模版引擎
		@container_id HTML写入容器
		@tpl_id 使用的模版ID
		@data 数据
	*/
	JTMP:{
		fetch: function(tpl){

		},
		toFill: function(container_id, tpl_id, data){
			var c = this;
			try{
				var container = mui("#"+container_id);
				var html = CT.returnHtml(tpl_id, data);
				container[0].innerHTML = html;
			}catch(e){
				console.log(e);
			}
			return c;
		}
	},
	returnHtml: function(tpl_id, data){
		var html = "";
		try{
			var tpl = mui("#"+tpl_id)[0].innerHTML;
			//注册自定义函数
			juicer.register('format_info', CT.format_info); //将带 | info 信息转换为带分隔符的字符串
			juicer.register('returnStart', CT.returnStart); //将分数转换为星级
			juicer.register('format_second', CT.format_second);  //将秒转换为时分秒
			juicer.register('format_name', CT.format_name);  //将名字“江卫华”转为“江**”
			juicer.register('format_status_01', CT.format_status_01);
			juicer.register('format_status_02', CT.format_status_02);
			juicer.register('format_status_03', CT.format_status_03);
			html = juicer(tpl, data);
			return html;
		}catch(e){
			console.log(e);
			return html;
		}
	},
	/*将带 | info 信息转换为带分隔符的字符串*/
	format_info: function(info){
		var b = "";
		if(!info)return b;
		var a = info.split("|");
		mui.each(a, function(i, item){
			if(i==0){
				b += item;
			}else{
				b += '<span class="spacing">|</span>'+item;				
			}			
		});
		return b;
	},
	//渲染星级方法
	returnStart: function(num){
		var t = this, num = num*1;
		if(num>50)num = 50;
		if(num<0)num = 0;
		var html = '<span class="start-cont">', f = parseInt(num/10), h = num%10;
		var e = h==0?(5 - f):(4 - f);		
		for (var i = f - 1; i >= 0; i--) {
			html += '<span class="mui-icon mui-icon-start-filled"></span>';
		}
		if(h>0){
			html += '<span class="mui-icon mui-icon-start-half"></span>';
		}
		for (var j = e - 1; j >= 0; j--) {
			html += '<span class="mui-icon mui-icon-start"></span>';
		}
		html += '</span>';
		return html;
	},
	//将秒转换为时分秒
	format_second: function(s){
		var t = this, s = s*1, t = "";
		if(s > -1){
            var hour = Math.floor(s/3600);
            var min = Math.floor(s/60) % 60;
            var sec = s % 60;
            if(hour < 10) {
                t = '0'+ hour + ":";
            } else {
                t = hour + ":";
            }

            if(min < 10){t += "0";}
            t += min + ":";
            if(sec < 10){t += "0";}
            t += sec.toFixed(0);
        }
        return t;
	},
	format_name: function(str){
		var t = this, s = "";
		if(str && CT.Lang.isString(str)){
			str = str.substring(0,1) + "**";
		}
		return str;
	},
	//转换状态
	format_status_01: function(status, s_t, f_t){
		var t = this, html = '', s_t = s_t?s_t:"通过", f_t = f_t?f_t:"不通过";
		html = status=="0"?'<span class="font_green">'+s_t+'</span>':'<span class="font_red">'+f_t+'</span>';
		return html;
	},
	format_status_02: function(status, s_t, f_t){
		var t = this, html = '', s_t = s_t?s_t:"合格", f_t = f_t?f_t:"不合格";
		html = status=="0"?'<span class="font_green">'+s_t+'</span>':'<span class="font_red">'+f_t+'</span>';
		return html;
	},
	format_status_03: function(status, s_t, f_t){
		var t = this, html = '', s_t = s_t?s_t:"有效", f_t = f_t?f_t:"无效";
		html = status=="1"?'<span class="font_green">'+s_t+'</span>':'<span class="font_red">'+f_t+'</span>';
		return html;
	},
	//解析成绩查询返回值
	analysisResult: function(data){
		var t = this, 
			url_01 = "http://cy.js-msa.gov.cn/cvicsehs/ksxx/kscj.action?sfzhm=350426199102182017",
			url_02 = "http://cy.js-msa.gov.cn/cvicsehs/gonggong/zsxx.action?zscxhm=320625196803137919";
		var url = data["url"], cb = data["cb"], fb = data["fb"], 
		methodStr = data["methodStr"] || "get", charset = data["charset"] || "",
		params = data["params"] || {}; 
		if(!url)return;

		//区分post/get
		var send = {
			url: window.encodeURIComponent(url)
		}
		if(charset){
			send["charset"] = charset;
		}
		if(methodStr=="post"){
			mui.extend(send, {
				methodStr: "post",
				params: params
			});
		}
		
		CT.getJSON({
			url: CT.PATH.AGENT + "/v1/h5/searchdata/readurl",
			data: send,
			method: "post",
			success: function(data){
				console.log(data["data"]);
				// if(data["data"] && CT.Lang.isString(data["data"])){
				if(data["data"]){
					try{
						var bk = JSON.parse(data["data"]);
						cb && cb(bk);
					}catch(e){
						console.log(e);
						cb && cb(data["data"]);
					}
					
				}else{
					fb && fb(data["data"]);
				}				
				// var bk = JSON.parse(JSON.parse(data["data"]));
				// if(bk && CT.Lang.isArray(bk) && bk.length>1){
				// 	cb && cb(bk[1]);
				// }				
			},
			error: function(err){
				// console.log(err);
				fb && fb(err);
			}
		});
		// console.log(JSON.parse(bk));
		// console.log(JSON.parse(bk_02));
	}
});

//获取安卓最新下载地址
// CT.getAndroidUrl();

//获取并设置当前APP版本
CT.set_product_version();

/*APP 与 js 交互*/
/*
 参数:
 json ={
 fn: "函数名",
 //参数 json格式
 pars:{
 status:"success",              //状态
 message:"操作成功",        //操作信息
 data:{                               //返回参数
 a:1,
 b:2
 }
 }
 }
回调举例：
JsHandleCallback('{"fn":"fn_name","pars":{"data":{...}},"task_id":"CT_1528097107146"}')
 */
window.JsHandleCallback = function(json){
	if(typeof(json)=="string"){
		json  = JSON.parse(json);
	}    
    if(!json.nolog){
        CT.log(json);
    }
    if(!json) return;
    if(json.pars && json.task_id){
        CT.log("Callback_task_id:"+json.task_id);
        if(!json.pars.data) json.pars.data="";
        var task_id = json.task_id;
        //如果存在指定回调则执行指定回调方法
        if(CT[json.fn]){
            CT[json.fn](json.pars);
        }else{
            CT[task_id] && CT[task_id](json.pars);
            delete  CT[task_id];
        }
    }else{
        if(!json.pars)  json.pars={};
        if(!json.pars.data) json.pars.data="";
        //如果存在指定回调则执行指定回调方法
        if(CT[json.fn]){
            //hack gameSync;
            CT[json.fn](json.data||json.pars);
        }else{
            CT[json.task_id] && CT[json.task_id](json.pars);
            delete  CT[json.task_id];
        }
    }
};

//百度pv统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  // hm.src = "https://hm.baidu.com/hm.js?7a26410f56f79cc7d08235f2e3ec3282";	//测试环境 testwebh5.hangyunejia.com
  hm.src = "https://hm.baidu.com/hm.js?5fafcaa5b1287c48a1ceaf67fa024a60";	//线上环境 webh5.hangyunejia.com
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();