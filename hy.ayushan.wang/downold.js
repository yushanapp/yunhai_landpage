// CT.alert("Hello! MUI");		

		var debugTest = ((location.port&&location.port=="8080") || !location.host || location.host&&location.host.indexOf("test") != -1)?true:false;
		var search = location.search, param, channel;
		var CT = {
			init_page: function(){
				var t = this;				
				param = CT.queryString(search, "param");
				channel = CT.queryString(search, "channel");
			},
			page_loading: function(){
				var t = this;

				//渲染loading
			},
			queryString:function(str,name){
		        var result = str.match(new RegExp("[\?\&]?" + name+ "=([^\&]+)","i"));
		        if(result == null || result.length < 1){
		            return "";
		        }
		        return result[1];
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
			getJSON: function(data){
				var t = this;
				if(!data["url"]) return;
				// $.getJSON(data);
				t._getJSON(data["url"], data["data"], data["success"], data["error"], data["method"]);
			},
			_getJSON: function(url, data, sfn, errfn, method){
				var t = this;
				var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
				var pars = [];
				for(var i in data){
					pars.push(i+"="+data[i]);
				}
				if(method=="get"){
					url += "?"+pars.join("&");
					xhr.open(method, url, true);
					xhr.send();
					xhr.onreadystatechange = function(){
					    if(xhr.readyState == 4 && xhr.status == 200){
					        var d = JSON.parse(xhr.responseText)
					        if(d.status=="200"){
					        	sfn && sfn(d);
					        }else{
					        	errfn && errfn(d);
					        }
					    }
					}
				}else if(method=="post"){
					xhr.open(method, url, true);
					xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
					xhr.send(pars.join("&"));
					xhr.onreadystatechange = function(){
					    if(xhr.readyState == 4 && xhr.status == 200){
					        var d = JSON.parse(xhr.responseText)
					        if(d.status=="200"){
					        	sfn && sfn(d);
					        }else{
					        	errfn && errfn(d);
					        }
					    }else{
					        console.log(xhr.status);
					        errfn && errfn(JSON.parse(xhr.responseText));
					    }
					}
				}
				
			},
			PATH:{
				AGENT: "https://webh5.hangyunejia.com"
			},
			getAndroidUrl: function(cfg){
				var t = this, data = cfg&&cfg['data'] || {}, cb = cfg&&cfg['cb'], fb = cfg&&cfg['fb'];
				//获取最新地址		
				CT.getJSON({
					url: CT.PATH.AGENT + '/v1/h5/appdown/getandroiddownuri',
					data: data,
					method: "get",
					success: function(data){
						// console.log(data["data"]);	
						//更新地址
						if(data["data"]){
							CT['android_version'] = data["data"]['version'];
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
			//显示蒙层
			showMask: function(){
				$("#maskPointer").show();
			},
			//隐藏蒙层
			hideMask: function(){
				$("#maskPointer").hide();
			},
			openApp: function(){
				var t = this;				
				
				var url;
				if (CT.getAppEnv.isIOS) {	
					url = "xiaozhoushipping://"+param;	
				    setTimeout(function(){
						window.open("https://itunes.apple.com/cn/app/id1104759817");
						// window.location.href = "https://itunes.apple.com/cn/app/id1104759817";  //IOS
					},0)								
				}else if (CT.getAppEnv.isAndroid){
					url = 'hyej://com.leijin.hhej?param='+param;
					window.location.href = url;
					setTimeout(function(){
						CT.getAndroidUrl({
							data:{
								channel: channel
							},
							cb: function(url){
								window.location.href = url || CT['android_url'] || "http://resource.hangyunejia.com/resource/uploads/file/20190411/ZoZGwQlrHasaLa3aZto4.apk";
							},
							fb: function(url){
								window.location.href = url || CT['android_url'] || "http://resource.hangyunejia.com/resource/uploads/file/20190411/ZoZGwQlrHasaLa3aZto4.apk";
							}
						});
						
					},2000)
				}else{
					// CT.alert("在普通浏览器");
					window.location.href = CT['android_url'];	
				}
			},
			android_url : "http://resource.hangyunejia.com/resource/uploads/file/20190411/ZoZGwQlrHasaLa3aZto4.apk"
		};

		CT.init_page();