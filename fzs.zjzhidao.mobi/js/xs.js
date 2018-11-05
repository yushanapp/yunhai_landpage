$(function () {

    
    $(".t_left").click(function () {
        $(".pl").css({"display":"none"});
        $(".b1").addClass("bcolor");
        $(".b2").removeClass("bcolor");
        $(".xq").css({"display":"block"});

    });

    $(".t_right").click(function () {
        $(".b2").addClass("bcolor");
        $(".b1").removeClass("bcolor");
        $(".pl").css({"display":"block"});
        $(".xq").css({"display":"none"});
    });
    
    
});