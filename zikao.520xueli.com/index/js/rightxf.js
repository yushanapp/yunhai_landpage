     
  $(function(){ 

   //猜你喜欢
    setInterval(chat, "30000"); 
    $(".like").stop(true,true).animate({"margin-left":"0px"}); 
    $(".close").click(function () {

    $(".like").stop(true,true).animate({"left":"-1320px"},500);
    $(".cai_link").css("display","block");
    $(".like").css("background","none");
   // var ss=$(".like").attr("margin-left");
    //alert(ss)
   // if(ss=="-1320px") 
   // $(".cai_link").css("display","block");
   })
   $(".cai_link").click(function(){
    $(".like").stop(true,true).animate({"left":"0px"},500); 
    $(".cai_link").css("display","none");
    $(".like").css("background","#fafafa");
   })
  $(".uls li").hover(function(){
     $(this).find("ul").css("display","block");
  },function(){
    $(this).find("ul").css("display","none");
  })

   $(".rightzuo p").click(function(){
    $(".rightzuo").stop(true,true).animate({"left":"-135px"});
    $("#scoolzuo").css("display","block");
   });
   $("#scoolzuo").click(function(){
    $("#scoolzuo").css("display","none");
    $(".rightzuo").stop(true,true).animate({"left":"0px"});
   })   
  })  












