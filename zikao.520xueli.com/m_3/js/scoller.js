/**
 * Created by Administrator on 2017/7/6.
 */
    window.onload= function () {
        var mySwiper = new Swiper('#banner1', {
            pagination: '.xgt-pagination',    //导航小圆点
            paginationClickable: true,        //导航小圆点（可点击）
            nextButton: '.swiper-button-next',//下一张按钮
            prevButton: '.swiper-button-prev',//上一张按钮
            //direction: 'vertical',//Slides的滑动方向:垂直
            autoplay: 2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换
            //speed:300,//滑动速度，即slider自动滑动开始到结束的时间（单位ms）
            loop: true,        //可循环
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
            //mousewheelControl: true,//鼠标滚轮
            lazyLoading: true,//图片懒加载    http://www.swiper.com.cn/api/Images/2015/0308/213.html
            onLazyImageLoad: function (swiper, slide, image) {
                //alert('延迟加载图片');
                //console.log(swiper);//Swiper实例
                //console.log(slide);//哪个slide里面的图片在加载
                //console.log(image);//哪个图片在加载
            }
        });
    }
