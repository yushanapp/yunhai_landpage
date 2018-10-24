$(document).ready(function() {
    $.ajax({
        url: "http://storage.lyplaaap.cn/bbbs/action/select.php",
        type: "get",
        success: function (res) {
            var data = jQuery.parseJSON(res);
            var bj=data[3].bj;
            var xf=data[3].xf;
            var dxf=data[3].dxf;
            var kd=data[3].kd;
            var dw1=data[3].dw1;
            var dw2=data[3].dw2;
            var dw3=data[3].dw3;
            var dw4=data[3].dw4;

            console.log(bj+"----"+xf+"------"+dw1+"------"+dw2+"-----"+dw3);

            /* $("#img").attr("src",bj);*//* $("#img").attr("src",bj);*/

            var imgs=" <img src="+bj+" style='width:"+kd+"' alt=\"navbar\" border=\"0\" usemap=\"#imgMap\" id=\"img\">";
            /* $("#xfbtn").attr("src",xf);*/

            $(".navImage").append(imgs);
            if(xf==0||xf == ""||xf.length==0){
                $("#xfbtn").remove();
            }else{
                $("#xfbtn").attr("src",xf);
                $("#xfbtn").css({"width":kd});
            }

            if(dxf==0||dxf == ""||dxf.length==0){
                $("#xfbtntop").remove();
            }else{
                $("#xfbtntop").attr("src",dxf);
                $("#xfbtntop").css({"width":kd});
            }

            $("#xfbtntop").css({"width":kd});
            $("#b_dw1").attr("coords",dw1);
            $("#b_dw2").attr("coords",dw2);
            $("#b_dw3").attr("coords",dw3);
            $("#b_dw4").attr("coords",dw4);
        }
    });
});