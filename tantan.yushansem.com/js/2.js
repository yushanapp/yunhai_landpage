   var Android="https://tantanapp.com/tantan_sembaidu06.apk";//��׿��������
    var Ios="";//ios��������

    var btns = document.getElementsByClassName("btnCilck");
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function () {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                window.location.href =Android;
            }else {
                window.location.href =Android;
            }
        }
    };