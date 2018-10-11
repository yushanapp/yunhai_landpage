$(function () {

    function getRandom(min,max){
        //x上限，y下限
        var x = max;
        var y = min;
        if(x<y){
            x=min;
            y=max;
        }
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        return rand;
    }

    var sj=getRandom(1,2);
    if(sj==2){
        $(".pl_box1").css({"display":"none"});
        $(".pl_box2").css({"display":"block"});
    }else{
        $(".pl_box2").css({"display":"none"});
        $(".pl_box1").css({"display":"block"});
    }

    $(".text_title>ul>li:nth-child(1)").click(function () {

            $(this).css({"color":"red","border-bottom":"2px solid red"});
            $(this).siblings().css({"color":"#909090","border-bottom":"2px solid #e0e0e0"});
            $(".im1").css({"display":"block"});
            $(".pl").css({"display":"none"});

    });
    $(".text_title>ul>li:nth-child(2)").click(function () {

        $(this).css({"color":"red","border-bottom":"2px solid red"});
        $(this).siblings().css({"color":"#909090","border-bottom":"2px solid #e0e0e0"});

        $(".pl").css({"display":"block"});
        $(".im1").css({"display":"none"});

    });


    function p(s) {
        return s < 10 ? '0' + s: s;
    }

    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();


    var now=year+'-'+p(month)+"-"+p(date)+" "+p(9)+':'+p(20)+":"+p(15);
    var now1=year+'-'+p(month)+"-"+p(date)+" "+p(11)+':'+p(35)+":"+p(2);
    var now2=year+'-'+p(month)+"-"+p(date)+" "+p(14)+':'+p(30)+":"+p(12);

    var now3=year+'-'+p(month)+"-"+p(date)+" "+p(8)+':'+p(30)+":"+p(20);
    var now4=year+'-'+p(month)+"-"+p(date)+" "+p(12)+':'+p(38)+":"+p(50);
    var now5=year+'-'+p(month)+"-"+p(date)+" "+p(14)+':'+p(20)+":"+p(15);


    $(".pl_b_text1").html(now);
    $(".pl_b_text2").html(now1);
    $(".pl_b_text3").html(now2);
    $(".pl_b_text4").html(now3);
    $(".pl_b_text5").html(now4);
    $(".pl_b_text6").html(now5);



})