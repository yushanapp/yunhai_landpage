(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            (clientWidth > 600) && (clientWidth = 600);  
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / 7.5+ 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);//resize
    doc.addEventListener('DOMContentLoaded', recalc, false);//reload
})(document, window);
