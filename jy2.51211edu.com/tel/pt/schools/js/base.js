//=====================================导航条浮动======================================
$(document).ready(function(e) {		

		t = $('#nav').offset().top;  //导航到顶部距离
		mh = 5000;  // 高度
		fh = $('#nav').height(); // 导航高度
		$(window).scroll(function(e){
			s = $(document).scrollTop();	
			if(s > t ){
				$('#nav').css('position','fixed');
				$('#nav li').css('width','12.8%');
				$('#nav').css('top','40px');
				$('#nav').css('z-index','10');
				
				if(s + fh > mh){
					$('#nav').css('top',mh-s-fh+'px');	
				}				
			}else{
				$('#nav').css('position','');
				$('#nav li').css('width','14.28%');
			}
		})
});
