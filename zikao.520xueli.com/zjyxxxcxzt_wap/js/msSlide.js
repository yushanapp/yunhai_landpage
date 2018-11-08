/**图片切换插件**/
/**此插件是根据容器的宽度，和第一个子元素的高度进行自适应的图片轮播。**/
(function($){
		var dset={//将参数提出来。
			auto:true,
			time:500,
			funbefore:function(){},
			funafter:function(){},
			el:null,
			control:true,
			touch:true
		};//配置参数
	var msSlide=function(options){
	  var $this=this;//保存jquery获取的dom对象数组。
	   if($this.length<=0){
				return this;
			}
			if($this.length>1){
				$this.each(function(){
					$(this).msSlide(options);
				});
				return this;
			}
			new slide(options,$this);//通过new创建的对象的this指向此对象本身，替代了call方法，并且申请了一块新的内存空间
			return this;
		};
	function slide(options,$this){
		this.set={};//将参数设置为自身的属性，而不是原型的属性，这样创建多个时，参数就不会被后一个覆盖了，因为new的时候会在不同的空间中。
		$.extend(this.set,dset,options);
		this.set.el=$this;
		this.init();
	};
	 slide.prototype={//将配置参数和功能方法都绑定到slide原型上。可以用this.进行调用。	
		/*initParam:function(options,$this){//初始化配置参数，并初始化dom对象。
			this.set=$.extend(this.set,options);
			this.set.el=$this;
		},*/
		setbeforeFun:function(funarg){//功能类的方法，
			this.set.funbefore=funarg||function(){};//在原型中方法调用时，this不是原型的所有者，而是开始查找的方法的那个对象的this。
			//注意一点，this这个值在一个继承机制中，仍然是指向它原本属于的对象，而不是从原型链上找到它时，它所属于的对象。
			
		},
		setafterFun:function(funarg){
			this.set.funafter=funarg||function(){};
		},
		init:function(){//初始化方法
			var child=this.set.el.children();
			if(child.length<2){return;}
			this.set.el.empty();
			var inner=$("<div class='ms-slide-inner'></div>");
			var inner2=$("<div class='ms-slide-inner2'></div>");
			var inner3=$("<div class='ms-slide-inner3'></div>");
			var inner4=$("<div class='ms-slide-inner4'></div>");
			$(child.get(0)).clone().appendTo(inner2);
			child.css({position:'absolute',width:'100%',height:'100%',top:'0',left:'0'});
			child.each(function(i){
				$(this).css({display:((i==0)?'block':'none')}).attr('data-serial',(i+1)).appendTo(inner4);
			});
			this.set.serial=1;
			this.set.count=child.length;//保存必要的参数信息。
			inner2.appendTo(inner);
			inner4.appendTo(inner3);
			inner3.appendTo(inner);
			inner.appendTo(this.set.el);
			if(this.set.control){
				this.initControl(inner,child.length);
			}
			//this.initNext();
			this.bindtouch();
			this.autoRun();
			//alert(this.set.el.html()+':'+inner.html());
		},
		bindtouch:function(){
			var touchstart=('ontouchstart' in document)?'touchstart':'mousedown',
				touchmove=('ontouchmove' in document)?'touchmove':'mousemove',
				touchend=('ontouchend' in document)?'touchend':'mouseup';
			if('ontouchend' in document){
				 var control = navigator.control || {};
				if (control.gesture) {
					 control.gesture(false);
					 }
				}
			//alert('ontouchstart' in document);
			var $t=this;
			var $x=0,$xx=0;
			var now_el,pre_el,next_el;
			var clicktime;
			function move(evt){
					
					var evt=evt||window.event;
					if(evt.preventDefault) {evt.preventDefault();}else{evt.returnValue=false;}
					var ee2=('ontouchend' in document)?evt.touches[0]:evt;
					$xx=(ee2.clientX==undefined)?ee2.pageX:ee2.clientX;;
					if(($xx-$x>20)||($x-$xx>20)){
						isClick=false;
						try{
							clearTimeout(clicktime);
						}catch(e){
						
						}
					}
					if($xx>$x){
						$t.set.now_el.css({left:((($xx-$x)/$t.set.el.width())*100+'%')});
						$t.set.pre_el.css({left:(((($xx-$x)/$t.set.el.width())*100-100)+'%')});
						$t.set.next_el.css({left:((($xx-$x)/$t.set.el.width())*100+100)+'%'});
					}else{
						$t.set.now_el.css({left:(-(($x-$xx)/$t.set.el.width())*100+'%')});
						$t.set.next_el.css({left:((100-(($x-$xx)/$t.set.el.width())*100)+'%')});
						$t.set.pre_el.css({left:(-(($x-$xx)/$t.set.el.width()*100+100)+'%')});
					}
				}
				var touchflag=false;
				var isClick=true;
				this.bindevent(this.set.el[0],touchstart,function(evt){
					if(!$t.set.flag||touchflag){return;}
					$t.set.flag=false;
					clearInterval($t.set.timer);
					$t.set.autoRun=false;
					$t.set.interval=false;
					touchflag=true;
					isClick=true;
					clicktime=setTimeout(function(){isClick=false},1500);
					var evt=evt||window.event;
					if(evt.preventDefault) {evt.preventDefault();}else{evt.returnValue=false;}
					//alert('aa');
					//evt.preventDefault?;
					//alert(evt.touches);
					$t.initNext();
					//alert('bb'+evt.touches);
					var ee=('ontouchend' in document)?evt.touches[0]:evt;
					//alert(ee);
					$x=$xx=(ee.clientX==undefined)?ee.pageX:ee.clientX;
					//alert($x);
				if($t.set.el[0].attachEvent){
					$t.set.el[0].attachEvent('on'+touchmove,move);
				}else{
				$t.set.el[0].addEventListener(touchmove,move,false);
				}
				},false);

			this.bindevent(	this.set.el[0],touchend,function(e){
				if(!touchflag){return;}

				$t.unbindevent($t.set.el[0],touchmove,move);
				
				if(isClick){
					var link=$t.set.now_el.attr('data-link');
					
					if(link){
						window.open(link);
					}
					
				}

				if(($xx-$x)/$t.set.el.width()>0.2){
					$t.set.now_el.animate({left:'100%'},500);
					$t.set.pre_el.animate({left:'0'},500);
					$t.set.next_el.animate({left:'200%'},500,function(){
						$t.set.flag=true;
						touchflag=false;
						if(!$t.set.autoRun)$t.autoRun();
					});
					$t.setCurrentSerial(0);
					$t.changeDot();
					
				}else{
					if(($x-$xx)/$t.set.el.width()>0.2){
						$t.set.now_el.animate({left:'-100%'},500);
						$t.set.next_el.animate({left:'0'},500);
						$t.set.pre_el.animate({left:'-200%'},500,function(){
							$t.set.flag=true;
							touchflag=false;
							if(!$t.set.autoRun)$t.autoRun();
						});
						$t.setCurrentSerial(1);
						$t.changeDot();
						
					}else{
						$t.set.now_el.animate({left:'0'},500);
						$t.set.pre_el.animate({left:'-100%'},500);
						$t.set.next_el.animate({left:'100%'},500,function(){
							$t.set.flag=true;
							touchflag=false;
							if(!$t.set.autoRun)$t.autoRun();
						});
					}
				}
				
			},false);
				
		},
		slidewrap:function(serial){//图片滑动切换。
			var $t=this;
			
			this.set.now_el.animate({left:'-100%'},500);
			if(this.set.pre_el){this.set.pre_el.animate({left:'-200%'},500);}	
			this.set.next_el.animate({left:'0'},500,function(){
			
				if(!$t.set.interval){
					$t.autoRun();
				}
				$t.set.flag=true;
			});
			//this.set.pre_el.animate({left:'-200%'},500,function(){
				
			//});
			this.setCurrentSerial(1,new Number(serial));
			this.changeDot();
			
		},
		fadewrap:function(){//图片淡入淡出切换。
		
		},
		autoRun:function(){//自动切换
			var $t=this;
			$t.set.interval=true;
			$t.set.flag=true;
			if(this.set.auto){
			$t.set.autoRun=true;
			
			this.set.timer=setInterval(function(){
				$t.set.flag=false;
					$t.initNext();
					
					$t.slidewrap(($t.getNextSerial(1)));
				},3500);
			}else{

			}
		},
		bindevent:function(el,evt,funarg){
			if(window.attachEvent){
				el.attachEvent('on'+evt,funarg);
			}else{
				el.addEventListener(evt,funarg,false);
			}
		},
		unbindevent:function(el,evt,funarg){
			if(window.attachEvent){
				el.detachEvent('on'+evt,funarg);
			}else{
				el.removeEventListener(evt,funarg,false);
			}
		},
		initNext:function(num){
					
					var next1,next2;
					if(num){
						next1=new Number(num);
						
					}else{
						next1=this.getNextSerial(1);
					}
						
					next2=this.getNextSerial(2);
					
					this.set.next_el=(this.set.el.find('[data-serial='+next1+']').css({display:'block',left:'100%'}));
					
					if(!num){
					this.set.pre_el=(this.set.el.find('[data-serial='+next2+']').css({display:'block',left:'-100%'}));
					}else{
						this.set.pre_el=null;
					}
					this.set.now_el=this.set.el.find('[data-serial='+this.set.serial+']');
					
		},
		initControl:function(cont,legth){
			/*var left=$('<div class="ms-slide-left">&lt;</div>');
			var right=$('<div class="ms-slide-right">&gt;</div>');
			left.appendTo(cont);
			right.appendTo(cont);*/
			var cc=$('<div class="ms-slide-dot"></div>');
			for(var i=0;i<legth;i++){
				
				var dot=$("<i class='ms-slide-ddt "+(i==0?'mf_select':'mf_noselect')+"' data-dot='"+(i+1)+"' ></i>");
				dot.appendTo(cc);
			}
			cc.appendTo(cont);
			var $t=this;
			if(!('ontouchend' in document)){
				
				cc.find('.ms-slide-ddt').bind('mousedown',function(e){
					e.preventDefault();
					e.stopPropagation();
					if(!$t.set.flag){
						return;
					}
					
					var serial=$(this).attr('data-dot');
					if(parseInt(serial)==parseInt($t.set.serial)){
						return;
					}
					clearInterval($t.set.timer);
					$t.set.autoRun=false;
					$t.set.interval=false;
					$t.set.flag=false;
					$t.initNext(serial);
					$t.slidewrap(serial);
					
					
				}).bind('mouseup',function(e){
					e.preventDefault();
					e.stopPropagation();
				});
			}
		},
		getNextSerial:function(direction){//得到下一张将要出现的图片的ID。
			
			var serial=this.set.serial,
				count=this.set.count;
			if(direction==1){
				if(serial>=count){
					return 1;
				}else{
					return (serial+1);
				}
			}else{
				if(serial<=1){
					return count;
				}else{
					return (serial-1);
				}
			}
		},
		getNextByNum:function(num){

			return num;
		
		},
		changeDot:function(cc,mm){
			this.set.el.find('.ms-slide-ddt').removeClass('mf_select').addClass('mf_noselect');
			this.set.el.find('[data-dot='+this.set.serial+']').removeClass('mf_noselect').addClass('mf_select');
		},
		setCurrentSerial:function(direction,num){//改变当前图片的ID。
			var serial=this.set.serial,
				count=this.set.count;
			if(num){
				this.set.serial=num;
				return;
			}
			if(direction==1){
				if(serial>=count){
					this.set.serial=1;
				}else{
					this.set.serial=(serial+1);
				}
			}else{
				if(serial<=1){
					this.set.serial=count;
				}else{
					this.set.serial=(serial-1);
				}
			}
		},
		console:function(){
			console.log(this.set);
		}
	  };
	 $.fn.msSlide=msSlide;//将方法绑定到全局变量上。
}(jQuery));