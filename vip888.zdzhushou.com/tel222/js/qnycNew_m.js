$(function(){
    quote.init();
 // 判断ib电话显示只在早8点至晚8点
	quote.dealTime();
	setInterval('quote.dealTime()',3000);
});
var quote = {
	    _childAge : $('#childAge'),
	    _childSex : $('#childSex'),
	    _appPlan_sumIns : $('#appPlan_sumIns'),
	    _zjbe_sumIns : $('#zjbe_sumIns'),
	    _paymentMethod : $('#paymentMethod'),
	    _phone : $('#phone'),
	    _btnSubmit : $('.btn-submit'),
	    _btnSubmitT: $('.btn-submitT'),
	    _radio : '.radio',
	    
	    init:function(){
	    	// 判断ib电话显示只在早8点至晚8点
	    	console.log($('#appPlan_sumIns').val());
	    	console.log($('#zjbe_sumIns').val());
	    	quote.dealTime();
	    	setInterval('quote.dealTime()',3000);
	    	quote.bind();
	    	
	    	var now = new Date();
	    	var maxDiff = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 28);
	    	var minDiff = new Date(now.getFullYear() - 11, now.getMonth(), now.getDate());
	    	
	    	var opt = {
	    			preset: 'date', //日期
	    			theme: 'android-ics light', //皮肤样式
	    			display: 'modal', //显示方式
	    			mode: 'scroller', //日期选择模式
	    			dateFormat: 'yy-mm-dd', // 日期格式
	    			setText: '确定', //确认按钮名称
	    			cancelText: '取消',//取消按钮名籍我
	    			dateOrder: 'yymmdd', //面板中日期排列格式
	    			dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
	    			maxDate:maxDiff,
	    			minDate:minDiff
	    	};
	    	$("#childAge").mobiscroll(opt).date(opt);
	    	/*重测按钮点击返回测保页面，滚动到表单*/
	    	function GetQueryString(name){
               var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
               var r = window.location.search.substr(1).match(reg);
               if(r!=null)return  unescape(r[2]); 
               return null;
            }
            var myurl=GetQueryString("k");
            if(myurl == 1){
            	$(".feature,.comm").css("visibility","hidden");
               var formTop = $(".qnycNew-sec3").offset().top;
            	$('html,body').stop().animate({scrollTop:formTop},1000);
               $(".feature,.comm").css("visibility","visible");
            }

            /* nav导航 */
            $(".tit_btn").on("click",function(event){
            	event.stopPropagation();
            	$(".nav").stop().animate({"right": "0","top":"0"},250);
            })
            $(document).on("click",function(){
            	$(".nav").stop().animate({"right": "-448","top":"-1000"},250);
            	$(".nav_tab").hide();
            	$(".arrow").css('background-position','0px -7px');
            })
            $(".colse").on("click",function(){
            	$(".nav").stop().animate({"right": "-448","top":"-1000"},250);
            	$(".nav_tab").hide();
            	$(".arrow").css('background-position','0px -7px');
            })
            $(".item1").on("click",function(event){
            	var formTop = $(".qnycNew-sec3").offset().top;
            	$('html,body').stop().animate({scrollTop:formTop},1000);
            })
            $(".item2").on("click",function(event){
            	var formTop = $(".qnycNew-sec4").offset().top;
            	$('html,body').stop().animate({scrollTop:formTop},1000);
            })
            $(".item3").on("click",function(event){
            	var formTop = $(".qnycNew-sec5").offset().top;
            	$('html,body').stop().animate({scrollTop:formTop-50+"px"},1000);
            })
            $(".nav_btn").on("click",function(event){
            	event.stopPropagation();
            	if($(".nav_tab").css("display") == "none"){
            		$(".nav_tab").show();
            		$(".arrow").css('background-position','0px 2px');
            	}else {
            		$(".nav_tab").hide();
            		$(".arrow").css('background-position','0px -7px');
            	}
            })
	    },
	   
    
    bind:function(){
    	// 轮播显示电话悬浮提示语
        var tel_flag = 1;
        setInterval(function(){
            if(tel_flag == 1){
                $(".tellWrap p").animate({
                	"text-indent":"0",
                    "width":"5rem",
                    "padding-left":'0.6rem'
                });
                tel_flag = 0;
            }else{
                $(".tellWrap p").animate({                   
                	"text-indent":"-9999px",
                    "width":"0",
                    "padding-left":'0'
                });
                tel_flag = 1;
            }
        },3000);

	    //单选框
	    $(quote._radio).on('click', function(event) {
	    	var _self = $(this);
	    	if(!_self.hasClass('check')){
	    		_self.addClass('check').siblings(quote._radio).removeClass('check');
	    		_self.siblings('input[type=hidden]').attr('value', _self.attr('data-val'));
	    	}
	    });
	    
	    //教育金保额选择
	    quote._appPlan_sumIns.on('change', function(event) {
	    	var app_sumIns = $("#appPlan_sumIns").val();
	    	$("#sumIns").val(app_sumIns);
	    });
	    
	    //重疾保额选择
	    quote._zjbe_sumIns.on('change', function(event) {
	    	var zjbe_sumIns = $("#zjbe_sumIns").val();
	    	if(quote.isNotNull(zjbe_sumIns)){
				$("#jibing_bx").val("1");//附加重疾险
				$("#zjsumIns").val(zjbe_sumIns);
				$("#pid").val("8000003164");//全能英才C
			}else{
				$("#jibing_bx").val("0");//不附加重疾险s
				$("#zjsumIns").val("");
				$("#pid").val("8000002081");//全能英才A
			}
	    });
	    
	    //宝宝年龄
	    var nowTime = new Date(Date.now());
	    var maxDiff1 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate()-28);
	    var minDiff1 = new Date(nowTime.getFullYear()-11, nowTime.getMonth(), nowTime.getDate());
	    var opt1 = {
	    		lang : 'zh',
	    		theme: 'android-holo-light', //皮肤样式
	    		display: 'center', //显示方式
	    		dateFormat: 'yy-mm-dd', // 日期格式
	    };       
	    opt1.min=minDiff1;
	    opt1.max=maxDiff1;
	    quote._childAge.mobiscroll().date(opt1);
	    
	    //试算保费
	    quote._btnSubmitT.on('click',function(){
	    	var formTop = $(".qnycNew-sec3").offset().top;
            $('html,body').stop().animate({scrollTop:formTop},1000);
	    })
	    quote._btnSubmit.on('click', function() {
	    	var formTop = $(".qnycNew-sec3").offset().top;
            $('html,body').stop().animate({scrollTop:formTop},1000);
      //       $(".tips_wrap").remove();    // 新增代码
	    	//宝宝年龄验证
	    	if(quote._childAge.val().length == 0){
	    		quote.reTips("请选择宝宝年龄");
	    		return false;
	    	}
	    	//宝宝性别
	    	if(quote._childSex.val().length == 0){
	    		quote.reTips("请选择宝宝性别");
	    		return false;
	    	}
	    	
	    	if(quote._appPlan_sumIns.val().length == 0){
	    		quote.reTips("请选择教育金保额");
	    		return false;
	    	}
	    	//交费方式
	    	if(quote._paymentMethod.val().length == 0){
	    		quote.reTips("请选择交费方式");
	    		return false;
	    	}
	    	//联系方式
	    	if(quote._phone.val().length == 0){
	    		quote.reTips("请填入联系方式");
	    		return false;
	    	}
	    	if(!quote.validMobile(quote._phone.val())){
	    		quote.reTips("请填入正确的联系方式");
	    		return false;
	    	}
	    	
							var data ={
								"age":quote._childAge.val(),
								"sex":quote._childSex.val()==='M'?'男':'女',
								"money":quote._appPlan_sumIns.val(),
								"type":quote._paymentMethod.val(),
								"name":$('#zjbe_sumIns').val(),
							};
			 var param = {
			            "platform": null,
			            "phones": quote._phone.val(),
			            "name": '',
			            "status": 1,
						"types":'保险',
						"keywords":"年龄:"+data.age+";性别:"+data.sex+";金额:"+data.money+";交费方式:"+data.type+";重疾保额:"+data.name
			     };
	        $("#search_ajaxLoading,.tipsArea").show();
	        $.ajax({
	        	type:"post",
	        	data:param,
	        	url:"http://tuivip.haic666.com/vip888/ajax.php",
	        	success:function(res){
	        		$("#search_ajaxLoading,.tipsArea").hide();
	        		quote.reTips('提交成功！请保持电话畅通，客服人员马上联系您')
	        	}
	        });
	    
	    });
	    
	    $("#childAge").on('focus', function() {
            $(this).trigger('blur');
        });

    },
    
    // 验证手机号码
    validMobile: function (mobile_val) {
        return /^(13|14|15|18|17)[0-9]{9}$/.test(mobile_val);
    },
    //表单错误提示
    reTips:function(str){
        var st = $(window).scrollTop(), //滚动条长度
	     $bd = $("body"),
	     bdW = $bd.width(),
	     bdH = $bd.height(),    
	     winH = $(window).height(),  //视口高
	     winW = $(window).width(),   //视口宽            
	     height = (bdH-winH)>0 ? bdH : winH,
	     width = (bdW-winW)>0 ? bdW : winW;        
		var $awrap = $("<div class='tips_wrap'><p class='cont'>" + str + "</p></div>").appendTo($bd);
		 $(".tips_wrap").css({
		     "position":"fixed",
		     "border-radius":"8px",
		     "height":"1.625rem",
		     "z-index":1101,
		     "font-size":"0.6875rem",
		     "font-weight":"bold",
		     "background-color":"rgba(31,31,31,0.8)",
		     "color":"#fff",
		     "text-align":"center",
		     "line-height":"1.625rem",
		     "width":bdW * 0.8,
		     "left":(width - bdW * 0.8)/2,
		     "top":(winH - $(".alert_wrap").height())/2
		 });
		
		 setTimeout(function(){
		     $awrap.remove();
		 }, 2000);
	},
    // 判断值是否有效 
 	isNotNull : function(value) {
		if(typeof value != 'undefined' && value != null && value != "") {
			return true;
		}
		return false;
	},
	// 判断ib电话显示只在早8点至晚8点
	dealTime : function(){
		var now = new Date();
		var hours = now.getHours();
		if(hours >= 8 && hours < 20){
			$(".premium-btn").removeClass("btn-hide");
			$(".tellWrap").removeClass("tellWrap-hide");
			$(".advisory").removeClass("advisory-hide");
			$(".measured").removeClass("measured-width");
			
		}else{
			$(".premium-btn").addClass("btn-hide");
			$(".tellWrap").addClass("tellWrap-hide");
			$(".advisory").addClass("advisory-hide");
			$(".measured").addClass("measured-width");
		}
	}
	
}

