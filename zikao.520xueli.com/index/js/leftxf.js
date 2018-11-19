
 
               
           function chat() {  
              $(".like").stop(true,true).animate({"margin-left":"0px"});
              $(".cai_link").css("display","none"); 
              $(".like").css("background","#fafafa");
           }  

  $(function(){ 


  $(".uls li").hover(function(){
     $(this).find("ul").css("display","block");
  },function(){
    $(this).find("ul").css("display","none");
  })

   $(".rightyou p").click(function(){
    $(".rightyou").stop(true,true).animate({"right":"-140px"});
    $("#scoolyou").css("display","block");
   });
   $("#scoolyou").click(function(){
    $("#scoolyou").css("display","none");
    $(".rightyou").stop(true,true).animate({"right":"0px"});
	

   })


    
  })  












