$(function () {
  $('.comTit').html($('.nav').html())
  $('.dialog').click(function () {
    $('.dialog').hide();
  });
  try {
    $('.swiper-container').height($(window).height());
    new Swiper('.swiper-container', {
      direction: 'vertical',
      nextButton: '.next'
    });
    //系统判断
    var M, channel = getQueryString('qd') || 'BDPP2_1',
      appKey = 'kimvpm',
      iosOffLine = false;
    var an_url = "https://app.live520.ink:19443/direct/" + channel,
      ios_url = 'https://itunes.apple.com/cn/app/id1447869861?mt=8';
    if (sysTemInfo() == 'ios') {
      appKey = 'kimvpm';
      channel = 'ios' + channel;
      var OS = 'ios', appName = '花间';
      var titArry = ['立即下载' + appName + OS + '版app', appName + OS + '版官网下载', appName + OS + '版app官方下载', appName + '影视' + OS + '版app官方下载', appName + OS + '版下载'];
      $('.btn a').each(function (i) {
        $(this).attr({ class: OS, title: titArry[i] });
      })
      ios_url += '?qd=' + channel;
      $('body').addClass('iosApp');
      $('title').html('花间APP-美女主播1V1直播社交APP下载_花间APP安卓版/IOS版官网下载');
      $('.logo').attr('src', 'images/logo2.png');
      
    }else if(sysTemInfo() == 'android'){
      appKey = 'kqhqf6';
    }

    $('#pageUrl').val(window.location.href);
    //复制当前页面地址
    var clipboard = new ClipboardJS('.js_copy');
    clipboard.on('success', function (e) {
      console.log('复制成功');
    });
    $('.js_copy').click(function () {
      !$('.toast').length && $('body').append('<div class="toast">复制成功</div>');
      setTimeout(function () {
        $('.toast').remove();
      }, 1500);
    });
    $('.cover,.t_close').click(function () {
      $('.cover,.layer').hide();
    })

    new OpenInstall({
      appKey: appKey,
      onready: function () {
        M = this;
        /*在app已安装的情况尝试拉起app*/
        M.schemeWakeup();
        $('.btn a').click(function () {
          if (sysTemInfo() == 'ios' && checkIsUc()) {
            $('.cover,.layer').hide();
            $('.cover,.ucTips').show();
            return false
          }
          if (sysTemInfo() == 'ios') {
            iosOffLine && installByQYZS();
            M.install();
            return false
          }
          if (sysTemInfo() === 'android') {
            if (isWeChat()) {
              $('.dialog').show();
            } else {
              // window.location.href = an_url;
              M.install();
            }
          }
        })
      }
    }, {
      "channel": channel
    });
  } catch (e) { }

  $('.manual  ul li').eq(0).addClass('active').find('.con').show()
  $('.manual  ul li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active').find('.con').stop().slideUp();
    $(this).next().stop().slideDown()
  })
});

function checkIsUc() {
  if (navigator.userAgent.indexOf('UCBrowser') > -1 && appVersion()) {
    return true;
  } else {
    return false;
  }
}

function appVersion() {
  var ua = navigator.userAgent.toLowerCase();
  var m = ua.match(/cpu iphone os (.*?) like mac os/);
  var ver;
  if (!m) {
    return false;
  } else {
    ver = m[1].replace(/_/g, ".");
  }
  // var osVer = ver.split('.')[0] + '.' + ver.split('.')[1];
  var osVer = ver.split('.')[0];
  // 是否有apple
  if (typeof window.ApplePaySession === 'function') {
    return false;
  } else if (osVer && osVer < 12) {
    return false;
  } else {
    return true;
  }
}

//判断是wx
function isWeChat() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

//微信系统内容处理
function weChatRes(n) {
  var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
  $('body').append(html);
  $(".wechat").css("height", $(window).height()).show();
}

//企业证书安装
function installByQYZS() {
  $("#js_box2").show();
  $(".now-download").show();
  $(".change").hide();
  loading = true;
  $(".top-bar").css("width", "0.1%");
  timer = setTimeout(function () {
    $(".top-bar").animate({
      width: "100%"
    }, 30000, function () {
      $(".now-download").html('安装完成，请开始设置！');
      $('.alert-btn').hide();
      $(".change").show();
      loading = false;
    });
  }, 1000);
  $('#js_closeBtn2').click(function () {
    $("#js_box2").hide();
    $(".now-download").html('“花间”安装中...');
    $(".top-bar").css("width", "0.1%");
    $('.alert-btn').show();
    clearTimeout(timer);
    loading = false;
  });
}

//微信系统内容处理
function weChatRes(n) {
  var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
  $('body').append(html);
  $(".wechat").css("height", $(window).height()).show();
}

function sysTemInfo() {
  var us = navigator.userAgent.toLowerCase();
  if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
    return 'android';
  } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
    return 'ios';
  }
}

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}