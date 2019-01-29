/*
 * @description: 中文说明
 * @author: lvman (2017-05-09 12:00)
 * @update: lvman (2017-07-12 16:00)  根据系统显示数据
 */
var setTimer1, setTimer2, setTimer3;
$(function () {
    //视频,美女随机切换
    randomShowEle($('#zt_gr01 a'), 1);
    randomShowEle($('#zt_gr02 a'), 1);
    randomShowEle($('#zt_gr03 a'), 1);
    randomShowEle($('.add_beau a'), 3);

    //点击视频播放显示视频加载提示
    $('.play_place').click(function () {
        $(this).remove();
        $('.play_topBar').css({
            'background-color': 'rgba(0, 0, 0, .5)',
            'z-index': 9999
        })
        $('.play_video_box').css('display', 'block');
        //视频加载提示
        setTimeout(function () {
            $('#js_downBox').show();
        }, 0);
    });
    //图片预加载
    $(".lazy").lazyload({
        effect: "fadeIn",
        data_attribute: "src"
    });
    $(".lazy").attr('src', 'images/lazy.png');

    //判断手机系统是安卓还是ios
    before_down();

    function before_down() {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            $('#js_an').attr('class', 'Android').html('<span><i></i>安卓秒速下载</span>');
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            $('#js_an').attr('class', 'IOS').html('<span><i></i>iOS秒速下载</span>');
        }
        clearTimeout(setTimer1);
        clearTimeout(setTimer2);
        clearTimeout(setTimer3);
        showContant();
    }

    //浏览器禁止返回
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, '');
            window.history.forward(1);
            setTimeout(function () {
                before_down();
            }, 5000)
        });
    }
    window.history.pushState('forward', null, '');
    window.history.forward(1);

    //简介
    $('.new_info_r').click(function () {
        $('.show_sy_new').toggleClass('new_none');
        $(this).toggleClass('arrow_n');
    });
    optionNew();

    var total = 1;

    //级数渲染函数
    function optionNew() {
        $.ajax({
            type: "post",
            timeout: "10000",
            url: "http://47.97.20.12/backms/dealRJSPromote.do?id=vdfac4e85c74bf9163",
            dataType: "jsonp",
            success: function (result) {
                total = result.result;
                videoRes(total, 15);
            },
            error: function (data) {

            }
        });
    };

    // videoRes(total, 15);

    //页面跳转时的逻辑处理
    try {
        var hash = window.location.href.slice(window.location.href.indexOf('?num=') + 5);
        $("[data-se=" + hash + "]").addClass('active').siblings().removeClass('active');
        $('.v_tit label').html(hash);
        if ($("[data-se=" + hash + "]").hasClass('active')) {
            $('#v_scrollBox .scroll_wrap li').eq(Math.ceil(hash / (option_new.view)) - 1).addClass('active').siblings().removeClass('active');
            var s_c = $('#v_scrollBox .scroll_wrap li.active').find('#s_t').text();
            var e_c = $('#v_scrollBox .scroll_wrap li.active').find('#e_t').text();
            for (var i = 0; i < option_new.view; i++) {
                $('#tab_num_item a').eq(i).css('display', 'none');
            }
            for (var i = s_c - 1; i < e_c; i++) {
                $('#tab_num_item a').eq(i).css('display', 'block');
            }
        }
    } catch (e) {
    }

    //集数选择效果
    $(document).on('click', '.tab_num_item a', function () {
        $(this).addClass("active").siblings().removeClass('active');
    });
    $('.antho_r').click(function () {
        $('.top_play,.top_video .v_antho,.tab_con,.v_antho_new').hide();
        $('.new_play_qj').show();
        $('#tab_item_new a').eq(0).addClass('active').siblings().removeClass('active');
        var siteMain = window.location.href.split('?')[0];
        $(this).find('a').attr('href', siteMain + '?all=1');
    });
    //点击关闭悬浮
    $(document).on('click', '#antho_r_new', function () {
        $(this).parent().parent().hide();
        $('.play_video.top_video').show();
        var siteMain = window.location.href.split('?')[0];
        window.location.href = siteMain + '?num=1';
    });

    try {
        var siteMain_all = window.location.href.split('?')[1];
        var hash_all = window.location.href.split('?all=')[1] - 1;
        if (siteMain_all.indexOf('all') != -1) {
            $('.top_play,.top_video .v_antho,.tab_con,.v_antho_new').hide();
            $('.new_play_qj,.tab_con_new').show();
            $('#tab_item_new a').eq(hash_all).addClass('active').siblings().removeClass('active');
            //$('.play_pro').removeClass('play_pro_n');
            $('.v_tit label').html(hash_all + 1);
            $('.v_icon').css('margin-top', '-.2rem');
        }
    } catch (e) {
    }

    /*
     * t  共多少集
     * s  一次显示多少条数据
     * */
    function videoRes(t, s) {

        var arr_num = [],
            result_num = [],
            tit_html = '',
            con_html = '';
        $('.new_antho_n').html(t);
        $('.v_l label').html(t);
        for (var i = 1; i <= t; i++) {
            arr_num.push(i);
        }

        var start = arr_num[0];
        var end = arr_num[arr_num.length - 1];

        tit_html += '<li><a href="javascript:;"><i id="s_t">' + start  + '</i>-<i id="e_t">' + end + '</i></a></li>';

        for ( var i = 0; i <arr_num.length; i++){
            con_html += '<a href="javascript:;" data-se="' + arr_num[i] + '">' + arr_num[i] + '</a>'
        }

        // for (var i = 0; i < arr_num.length; i += s) {
        //     // 修改 i+15  为i+1
        //     result_num.push(arr_num.slice(i, i + 1));
        //     console.log(result_num)
        // }
        // ;

        // $.each(result_num, function (i, o) {
        //     tit_html += '<li><a href="javascript:;"><i id="s_t">' + o[0] + '</i>-<i id="e_t">' + o[o.length - 1] + '</i></a></li>';
        //     $.each(o, function (j, k) {
        //         con_html += '<a href="javascript:;" data-se="' + k + '">' + k + '</a>'
        //     });
        // });
        $('#v_scrollBox .scroll_wrap').html(tit_html);
        $('#tab_num_item').html(con_html);
        $('#tab_item_new').html(con_html);
        $('#v_scrollBox .scroll_wrap li').eq(0).addClass('active');
        $('.item.tab_num_item a').eq(0).addClass('active');

        if (t >= 20) {

            $('#tab_item_new a').eq(t - 2).text('下载APP看最新集').addClass('last_one').removeAttr('data-se').next().css('display', 'none');
            $('#tab_num_item a').eq(t - 2).text('下载APP看最新集').addClass('last_one').removeAttr('data-se').next().css({
                'display': 'none',
                'opacity': 0,
                'height': '0px'
            }).removeAttr('data-se');

        }

        //首屏渲染
        for (var i = 0; i < s; i++) {
            $('#tab_num_item a').eq(i).css('display', 'block');
        }
        $(document).on('click', '#v_scrollBox .scroll_wrap li', function () {
            $('#tab_num_item a').css('display', 'none');
            var s_t = $(this).find('#s_t').text();
            var e_t = $(this).find('#e_t').text();
            for (var i = s_t - 1; i < e_t; i++) {
                $('#tab_num_item a').eq(i).css('display', 'block');
            }

        });

        $(document).on('click', '#tab_num_item a', function () {
            var data_se = $(this).attr('data-se');
            $('.v_tit label').html(data_se);
            var siteMain = window.location.href.split('?')[0];
            if ($(this).hasClass('last_one') == false) {
                $(this).attr('href', siteMain + '?num=' + data_se);
            }
        });
        //悬浮点击效果
        $(document).on('click', '#tab_item_new a', function () {
            var data_se = $(this).attr('data-se');
            $('.v_tit label').html(data_se);
            var siteMain = window.location.href.split('?')[0];
            if ($(this).hasClass('last_one') == false) {
                $(this).attr('href', siteMain + '?all=' + data_se);
            }

        });
    }

    //滑动导航初始化
    if ($('.scroll_wrap li').hasClass('active')) {
        var $liA = $('.scroll_wrap li.active');
        $.each($liA, function () {
            var _this = $(this)
            var $t = _this.offset().left, $w = $(window).width(), $n = _this.width(),
                i = $('.scroll_wrap').scrollLeft();
            if ($t < ($w / 2)) {
                return
            } else {
                $(this).parent().animate({
                    scrollLeft: $t - $w / 2
                }, 0);
            }
        })
    }
//点击滑动导航
    $(document).on("click", ".scroll_wrap li", function () {
        var _this = $(this), index = _this.index();
        _this.addClass("active").siblings().removeClass('active');
        $("#tab_num_item_" + (index + 1) + "").addClass("active").siblings().removeClass("active");
        var $t = _this.offset().left, $w = $(window).width(), $n = _this.width(), i = $('.scroll_wrap').scrollLeft();
        $(this).parent().animate({
            scrollLeft: i + $t - $w / 2 + $n
        }, 0);
    });

});

//不同终端显示不同数据
function resetData() {
    var us = navigator.userAgent.toLowerCase(), osTag = 'android', classTag = 'Android';
    if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
        osTag = 'android';
        classTag = 'Android';
    } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
        osTag = 'ios';
        classTag = 'IOS';
    }
    $('#js_an').attr('class', classTag);
    $(document).on('click', '.js_btn, #js_an,.down_btn', function () {
        window.location.href = siteData[osTag][0].url;
    });
    // $(document).on('click', '.js_btn,.ph_footer,#js_sure,#js_downBox,.down_btn, #v_scrollBox_mx .v_adver a,.last_one', function () {
    //     window.location.href = siteData[osTag][0].url;
    // });
    $('#js_crossDowm i,.t_logo').css('background-image', 'url(' + siteData[osTag][0].icon + ')');
    $('.fo_left img,.down_logo').attr('src', siteData[osTag][0].icon);
    // $('.loading').attr('src', siteData[osTag][0].gif);
    $('.app_name').text(siteData[osTag][0].title);
}


//根据时间显示内容
function showContant(n, d) {
    // setTimer1 = setTimeout(function () {
    //     $('#js_down').click();
    // }, 10e3);
    // setTimer2 = setTimeout(function () {
    //     $('#js_down').click();
    // }, 30e3);
    // setTimer3 = setTimeout(function () {
    //     $('#js_down').click();
    // }, 60e3);
    resetData();
}


//随机展示数据
function randomShowEle(box, num, type) {
    var arr = [];
    var len = box.length + 1;
    typeof (type) == 'undefined' ? type = 'v' : type = 'm';
    if (len > num) {
        if (type == 'm') {
            arr = randomNum(len - 1, num).sort(function (a, b) {
                return a - b;
            });
            $.each(arr, function (i, o) {
                (i % 2 === 0) ? box.eq(o).css('margin', 0) : box.eq(o).css('margin', '0 1%');
                box.eq(o).show();
            })
        } else {
            arr = randomNum(len - 1, num);
            $.each(arr, function (i, o) {
                box.eq(o).show();
            })
        }
    } else {
        box.show();
    }
}

//获取随机3个数字
function randomNum(max, num) {
    var randoms = [];
    while (true) {
        var isExists = false;
        var random = parseInt(0 + max * (Math.random()))
        for (var i = 0; i < randoms.length; i++) {
            if (random === randoms[i]) {
                isExists = true;
                break;
            }
        }
        if (!isExists) randoms.push(random);
        if (randoms.length === num) break;
    }
    return randoms;
}