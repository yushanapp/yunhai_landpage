/**
 * Created by jy on 2017/4/17.
 */
var thisHost = location.hostname;
if(thisHost.indexOf('yushan')>=0 || thisHost.indexOf('zjzhidao')>=0 || thisHost.indexOf('zjzdao')>=0){
// if(thisHost.indexOf('yushan')>=0 || thisHost.indexOf('zjzhidao')>=0 || thisHost.indexOf('zjzdao')>=0){

  $('.banben').html('<span style="font-size:12px">北京智投智道投资咨询有限公司版权所有<br><span><a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备15010702号-1</a></span></span><br> <span style="transform:scale(0.5)">地址：昌平区昌崔路198号院2号楼</span><br> <span style="transform:scale(0.5)">联系电话：15010903351</span>版权所有');
  $(".hei").attr('src','http://img.zntec.mobi//yushan/logo_black.png');
  $(".bai").attr('src','http://img.zntec.mobi//lanpeg/yslogo.png');
}else if (thisHost.indexOf('zhiniaotec')>=0 || thisHost.indexOf('zntec')>=0) {
    $('.banben').html('<span style="font-size:14px">北京智鸟科技有限公司版权所有<br><span><a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备16054220号-1</a></span></span><br>
<span style="transform:scale(0.5)">地址：海淀区交大东路66号院2号楼</span>
<span style="transform:scale(0.5)">联系电话：13051230120</span></div>');
    $(".hei").attr('src','http://img.zntec.mobi//yushan/logo_black.png');
    $(".bai").attr('src','http://img.zntec.mobi//lanpeg/yslogo.png');
}else {
  /*$('.banben').html('<span style="font-size:12px">北京智投智道投资咨询有限公司版权所有<br><span><a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备15010702号-1</a></span></span><br> <span style="transform:scale(0.5)">地址：昌平区昌崔路198号院2号楼</span><br> <span style="transform:scale(0.5)">联系电话：15010903351</span>版权所有');
  $(".hei").attr('src','http://7xrc8m.com1.z0.glb.clouddn.com//logo/%E7%BE%BD%E6%89%87LOGO.png');
  $(".bai").attr('src','http://7xrc8m.com2.z0.glb.qiniucdn.com/%40%2Fduoshou%2F%E7%BE%BD%E6%89%87LOGO2.png');*/
  $('.banben').text('<span style="font-size:12px">北京智道未来网络科技有限公司版权所有<br><span><a href="http://www.beian.miit.gov.cn" target="_blank"><img style="width: 10px" src="http://img.zntec.mobi/0.28260391696702114.png" alt="">京公网安备 11010802032332号</a></span></span><br>
<span style="transform:scale(0.5)">地址：昌平区东小口镇立汤路179号院1号楼</span><br>
<span style="transform:scale(0.5)">联系电话：15010903351</span>');
  $(".hei").attr('src','http://img.zntec.mobi//yushan/logo_zhitou_h.png');
  $(".bai").attr('src','http://img.zntec.mobi//yushan/logo_zhitou_w.png');
}

