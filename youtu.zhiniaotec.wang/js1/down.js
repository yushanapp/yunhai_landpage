    $(function () {
        $('.swiper-container').css({
            height: window.innerHeight
        })
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: false, //��ѡѡ��Զ�����
            direction: 'vertical',
            // autoHeight:true,
            // loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
        $('.softDown').on('click', function () {
            if (typeof WeixinJSBridge !== "undefined") {
                $('.weixin').show();
            } else {
                window.location.href = "go.html";
            }
        });
    });