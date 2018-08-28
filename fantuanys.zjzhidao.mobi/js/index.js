window.onload=function () {
    function  oHeight() {
        var imgHeight=document.getElementById("bg1").offsetHeight;

        var oDiv=document.getElementById("header-lb");
        console.log(imgHeight);
        var oBox=document.getElementById("header-lb-box");

        oDiv.style.height=(imgHeight*0.58)+"px";
        for (var i=0;i<3;i++){
            var oImg=document.getElementsByClassName("img-lb")[i];
            oImg.style.height=(imgHeight*0.58)+"px";
            oImg.style.width=oDiv.offsetWidth+"px";
            oBox.style.width=oLbimg.offsetWidth*3+"px";
        }
    }
    oHeight();

    window.onresize=function () {
        oHeight();
    };

    var oLeft=document.getElementById("header-lb-box").offsetLeft;
    var num=10;

    var timer=setInterval(function () {

    },2000);
};
