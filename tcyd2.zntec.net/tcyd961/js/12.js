    var Android="https://by.ldcxweb.cn/fctf/3022961.apk";//��׿��������
    var Ios="http://cloudappclub.com:8080/r/index.do?app=3022954";//ios��������

    var btns = document.getElementsByClassName("btnCilck");
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function () {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                window.location.href =Ios;
            }else {
                window.location.href =Android;
            }
        }
    };