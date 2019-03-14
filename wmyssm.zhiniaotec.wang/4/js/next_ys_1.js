/**
 * Created by Larry 7/4
 */

/*
 * font resize
 * */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
function stopTouchendPropagationAfterScroll(){
  var locked = false;

  window.addEventListener('touchmove', function(ev){
    locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
  }, true);
  function stopTouchendPropagation(ev){
    ev.stopPropagation();
    window.removeEventListener('touchend', stopTouchendPropagation, true);
    locked = false;
  }
}
stopTouchendPropagationAfterScroll();

this._yushan = this._yushan || {};

(function(window,document){

  var dl_info = function(config){
    this.config = config;
    this.tag = true;//for auto_download switch
    this.firstRun = true;//for data collection
    this.init();

  };

  var p = dl_info.prototype;
  p.init = function(){

    var _this = this;
    $("img").each(function(){
      if (!($(this).attr('class') in (_this.config.dlbutton||''))) {
        //console.log($(this).attr('class'));
        $(this).on("click",function(){

          return false;
        });
      }
    })
    var tag_array = _this.config.trace_tag;
    if((tag_array instanceof Array)){
      if(tag_array[0]!=0){

        _this.initGA(tag_array[0]);
      }else if(tag_array[1]!=0){
        console.log(tag_array[1]);
        _this.initBaiDu(tag_array[1]);
      }
    }

    _this.addEvtListener();

    $(document).ready(function(){

        //_this.initDom();

        if(_this.config.autoDownload){
          setTimeout(function(){
            if (_this.tag) {
              _this.tag = false;
              _this.downloadAndWriteLog('passive', 'auto');
            }
          },1000*_this.config.autoDownloadDelayTime);
        }
      }
      //you can add whatever you want for $.ready


    );
  };

  //p.initDom = function(){
  //    this.$btnDownload = $(this.config.dlbutton);
  //};

  p.addEvtListener = function(){
    var _this = this;

    _this.config.dlbutton.forEach(function(item){
      console.log(item);
      $(item).on("click",function () {
      // $(document).on("click touchend",item,function(){

        if (_this.firstRun&&_this.tag) {
          _this.firstRun = false;
          _this.tag = false;
          _this.downloadAndWriteLog('active', this.className);
        }else{

          _this.download(this.className);

        };
      })

    })

  };

  /**
   * 下载并记录日志, jsonp instead of ajax
   */
  p.downloadAndWriteLog = function(dl_type, dl_class){
      var _this = this;

    /*

     comment dc due to baidu checking 5/31

     */
      var sdata = this.get_query();
      sdata['c5'] = this.get_mobile_type();
      sdata['dl_tag'] = dl_class;
      sdata['referrer'] = document.referrer;
      sdata['baidu_sem'] = _getQueryString('baidu_sem');
      sdata['c3'] = location.pathname;
    $.ajax({
      type: "get",
      async: true,//false
      url: _this.config.dlserver,
      data: sdata,
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback:"dlinfo",
      success: function(json){
        //console.log('succeeded');

      },
      error: function(XMLHttpRequest, einfo,err){
        console.log(err);
      }
    });



    _this.download(dl_class);

  };

  /**
   * download
   */
  p.download = function(dl_class){
    //下载文件
    //this.gaSendEvent(dl_class);

    if(this.get_mobile_type().match(/^iOS/)){
      window.location.href = this.config.iosurl;

    } else{
      window.location.href = this.config.url;
    }
  };

  /**
   * GA事件
   */
  p.initGA = function(viewid){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', viewid, 'auto');
    ga('send', 'pageview');
    var lp = (location.pathname.substring((location.pathname.length-1)))%5;
    ga('set', 'contentGroup'+lp, 'lp'+lp);

  }

  p.initBaiDu = function(baiduid){
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?"+baiduid;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }

  p.gaSendEvent = function(dl_class){
    if (typeof ga != 'undefined' && ga instanceof Function) {
      ga('send', 'event', 'button', dl_class, 'dl-button');
    }
  };

  /**
   * 判断设备
   * @return  string iOS/Android:type details
   */
  p.get_mobile_type = function(){

    var u = navigator.userAgent;
    var type= u.substring(u.indexOf("(")+1,u.indexOf(")"));
    if(u.indexOf('Android') > -1){
      type = 'Android:'+ type;

    }
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isIOS){

      type = 'iOS:'+ type;
    }
    return type;

  };

  p.get_query = function(){

    var url = location.search; //获取url中"?"符后的字串
    var req = {};
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
        req[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
    }
    return req;
  }

  _yushan.dl_info = dl_info;
})(window,document);

function _getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}