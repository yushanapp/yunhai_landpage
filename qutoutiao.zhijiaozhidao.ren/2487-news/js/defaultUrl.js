var android='http://bd-m.qutoutiao.net/download/qutoutiao_2487_apkfile';
var ios='';
var down=''
var btndown=''

var url={
  sem1:'http://bd-m.qutoutiao.net/download/qutoutiao_332_apkfile',//332
  sem2:'http://bd-m.qutoutiao.net/download/qutoutiao_334_apkfile',//334
  sem3:'http://bd-m.qutoutiao.net/download/qutoutiao_335_apkfile',//335
  sem4:'http://bd-m.qutoutiao.net/download/qutoutiao_336_apkfile',//336
  sem5:'http://bd-m.qutoutiao.net/download/qutoutiao_337_apkfile',//337
  sem6:'http://bd-m.qutoutiao.net/download/qutoutiao_338_apkfile',//338
  sem7:'http://bd-m.qutoutiao.net/download/qutoutiao_339_apkfile',//339
  sem8:'http://bd-m.qutoutiao.net/download/qutoutiao_597_apkfile',//587
  sem9:'http://bd-m.qutoutiao.net/download/qutoutiao_588_apkfile',//588
  sem10:'http://bd-m.qutoutiao.net/download/qutoutiao_874_apkfile',//874
  sem11:'http://bd-m.qutoutiao.net/download/qutoutiao_875_apkfile',//875
  sem12:'http://bd-m.qutoutiao.net/download/qutoutiao_674_apkfile',//674
  sem13:'http://bd-m.qutoutiao.net/download/qutoutiao_676_apkfile', //676

  sem14:'http://bd-m.qutoutiao.net/download/qutoutiao_333_apkfile' //333
};

var c4 = _getQueryString("c4")  || "sem1";

android = url[c4];

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  down='ios'
  btndown=ios;
} else if (/(Android)/i.test(navigator.userAgent)) {
  down='android'
  btndown=android;
} else {
  down='pc'
  btndown=android;
};
