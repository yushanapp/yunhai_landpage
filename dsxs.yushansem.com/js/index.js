$(function () {

    $(".text_title ul li:nth-child(1)").click(function () {
        $(this).css({"color":"red","border-bottom":"2px solid red"});
        $(this).siblings().css({"color":"#909090","border-bottom":"2px solid #e0e0e0"});
            $(".im1").css({"display":"block"});
            $(".im2").css({"display":"none"});

    });
    $(".text_title ul li:nth-child(2)").click(function () {

        $(this).css({"color":"red","border-bottom":"2px solid red"});
        $(this).siblings().css({"color":"#909090","border-bottom":"2px solid #e0e0e0"});

        $(".im2").css({"display":"block"});
        $(".im1").css({"display":"none"});

    });
})