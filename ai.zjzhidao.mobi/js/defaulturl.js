var android='https://yuehui1.cn/market/3091025.apk';
var ios='https://itunes.apple.com/cn/app/id1154389441';
var down=''
var btndown=''
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

function down() {
	window.location.href=btndown;
}
