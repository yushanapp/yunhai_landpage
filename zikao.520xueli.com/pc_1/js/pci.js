// JavaScript Document
$(document).ready(function () {
    function G(s) {
        return document.getElementById(s);
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }

    function Animate(obj, json) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function () {
            for (var attr in json) {
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if (iCur == json[attr]) {
                    clearInterval(obj.timer);
                }
            }
        }, 30);
    }
    var oPic = G("picBox");
    var oList = G("listBox");
    var mod18 = G("mod18");

    var oPrevTop = G("prevTop");
    var oNextTop = G("nextTop");

    var oPicLi = oPic.getElementsByTagName("li");
    var oListLi = oList.getElementsByTagName("li");
    var len1 = oPicLi.length;
    var len2 = oListLi.length;

    var oPicUl = oPic.getElementsByTagName("ul")[0];
    var oListUl = oList.getElementsByTagName("ul")[0];
    var w1 = oPicLi[0].offsetWidth;
    var w2 = oListLi[0].offsetWidth;
    oPicUl.style.left='0px';
    oPicUl.style.width = w1 * len1 + "px";
    var index = 1;
    var num = 5;
    var num2 = Math.ceil(num / 2);
    function Change() {

        Animate(oPicUl, { left: -index * w1 });
        for (var i = 0; i < len2; i++) {
            oListLi[i].className = "";
            if (i == index) {
                oListLi[i].className = "on";
            }
        }
    }

    oNextTop.onclick = function () {

        index++;
        index = index == len2 ? 0 : index;
        Change();
    }



    oPrevTop.onclick = function () {

        index--;
        index = index == -1 ? len2 - 1 : index;
        Change();
    }

    var timer = null;
    timer = setInterval(autoPlay, 4000);
    function autoPlay() {
        index++;
        index = index == len2 ? 0 : index;
        Change();
    }



    for (var i = 0; i < len2; i++) {
        oListLi[i].index = i;
        oListLi[i].onclick = function () {
            index = this.index;
            Change();
        }
    }
      mod18.onmouseover= function () {
          clearInterval(timer);
      }
      mod18.onmouseout = function () {
          timer = setInterval(autoPlay, 4000);
      }

});
