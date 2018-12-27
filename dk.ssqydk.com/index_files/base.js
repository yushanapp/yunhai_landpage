    var flag;

    function styles(){
      var height_div = ($(".title_bg").innerWidth())*0.044964+"px";
      $(".title_bg").css('height',height_div);
      $(".title_bg").css('line-height',height_div); 
      var Big_div = ($(".bigBac").innerWidth())*1.74037 +"px";
      $(".bigBac").css('height',Big_div); 
      var Green_div = ($(".backGreen").innerWidth())*0.4350927 +"px";
      $(".backGreen").css('height',Green_div); 
      var Zb1_div = ($(".Zb1").innerWidth())*0.821879 +"px";
      $(".Zb1").css('height',Zb1_div); 
      var Zb2_div = ($(".Zb2").innerWidth())*0.821879+"px";
      $(".Zb2").css('height',Zb2_div); 
      var Zb3_div = ($(".Zb3").innerWidth())*0.5637795 +"px";
      $(".Zb3").css('height',Zb3_div);     
    }

     var Dom = {
        size:function(docEl,clientWidth){
          if(flag == 1){
            $("body").css("width","42%");
            $("body").css("margin-left","29%"); 
            docEl.style.fontSize = 100 * ((clientWidth *0.42)/ 320) + 'px';
            $('.video_video').css('height','1.6rem');
            $('.title_line_text_zb').css('padding-top','.075rem');
            $('.bottom_href').css('display','none');
            $(".scan").css("display","block");
            styles();
          }
          else if(flag == 0){
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
            styles();
          }          
        },
        Doc:function(doc, win, undefined){
         let docEl = doc.documentElement;
         let clientWidth = docEl.clientWidth;
         resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
         recalc = ()  => {   
          if (clientWidth === undefined) return;
          this.size(docEl,clientWidth);
         };
         if (doc.addEventListener === undefined) return;
         win.addEventListener(resizeEvt, recalc, false);
         doc.addEventListener('DOMContentLoaded', recalc, false);         
        }
    }
    
    var Mobile = {
        isMobile:function(){
          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
            
            return true;
          else
            
            return false;        
        },
        checkMobile:function(){  
          if (Mobile.isMobile() !== false){
                  flag = 0;
                  Dom.Doc(document, window);
              //     let state = {
              //         title: "title",
              //         url: "#"    };
              //     window.history.pushState(state, "title", "#");
              //     window.onpopstate = function() {
              //      location.href="stop.html";
              // };
          }  
          else{
            flag = 1;
            Dom.Doc(document, window);
          }            
        }
    }
    Mobile.checkMobile();