/**
 * Created by jy on 2017/4/17.
 */
var thisHost = location.hostname;
if(thisHost.indexOf('yushan')>=0 || thisHost.indexOf('zjzhidao')>=0 || thisHost.indexOf('zjzdao')>=0){
// if(thisHost.indexOf('yushan')>=0 || thisHost.indexOf('zjzhidao')>=0 || thisHost.indexOf('zjzdao')>=0){

  $('.banben').html('北京智投智道投资咨询有限公司版权所有');
  $(".hei").attr('src','http://test.myushan.com//yushan/logo_black.png');
  $(".bai").attr('src','http://test.myushan.com//lanpeg/yslogo.png');
}else if (thisHost.indexOf('zhiniaotec')>=0 || thisHost.indexOf('zntec')>=0) {
    $('.banben').html('北京智鸟科技有限公司版权所有');
    $(".hei").attr('src','http://test.myushan.com//yushan/logo_black.png');
    $(".bai").attr('src','http://test.myushan.com//lanpeg/yslogo.png');
}else {
  /*$('.banben').html('北京智投智道投资咨询有限公司版权所有');
  $(".hei").attr('src','http://7xrc8m.com1.z0.glb.clouddn.com//logo/%E7%BE%BD%E6%89%87LOGO.png');
  $(".bai").attr('src','http://7xrc8m.com2.z0.glb.qiniucdn.com/%40%2Fduoshou%2F%E7%BE%BD%E6%89%87LOGO2.png');*/
  $('.banben').text('北京智道未来网络科技有限公司版权所有');
  $(".hei").attr('src','http://test.myushan.com//yushan/logo_zhitou_h.png');
  $(".bai").attr('src','http://test.myushan.com//yushan/logo_zhitou_w.png');
}

