var android='http://www.hbooker.com/setting/download?channel=shenma';
var ios='';
var down=''
var btndown=''

var url={
  sem1:'http://www.hbooker.com/setting/download?channel=shenma1',//332
  sem2:'http://www.hbooker.com/setting/download?channel=shenma2',//334
  sem3:'http://www.hbooker.com/setting/download?channel=shenma3',//335
  sem4:'http://www.hbooker.com/setting/download?channel=shenma4',//336
  sem5:'http://www.hbooker.com/setting/download?channel=shenma5',//337
  sem6:'http://www.hbooker.com/setting/download?channel=shenma6',//338
  sem7:'http://www.hbooker.com/setting/download?channel=shenma7',//339
  sem8:'http://www.hbooker.com/setting/download?channel=shenma8',//587
};

var c4 = _getQueryString("c4") || "sem1";

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