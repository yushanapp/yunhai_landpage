create database demo character set=utf8;
use demo;
drop table demo;
create table d
(
	id               int                  auto_increment     primary key, #id
	name           varchar(150)          not null,                       #域名
  az           varchar(200)          not null,                       #连接
  ios          varchar(200)          not null,                       #连接
  bj           varchar(200)          not null,                       #背景图
  xf           varchar(200)          not null,                       #悬浮按钮
  kd           varchar(200)          not null,                       #悬浮按钮
  dw1          varchar(200)          not null,                       #背景定位1
  dw2          varchar(200)          not null,                       #背景定位2
  dw3          varchar(200)          not null                      #悬浮按钮定位
);

insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/index.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS-gifmakerrelease-5.9.1.6830_7ab988.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/2.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,1-gifmakerrelease-5.9.1.6830_7a2f0d.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/3.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,2-gifmakerrelease-5.9.1.6830_4d54c2.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/4.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,3-gifmakerrelease-5.9.1.6830_0754bb.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/5.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,4-gifmakerrelease-5.9.1.6830_45662c.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/6.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,5-gifmakerrelease-5.9.1.6830_c1b883.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/7.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,6-gifmakerrelease-5.9.1.6830_b1a809.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/8.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,7-gifmakerrelease-5.9.1.6830_c02801.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/9.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,8-gifmakerrelease-5.9.1.6830_129a27.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
insert d(name,az,ios,bj,xf,kd,dw1,dw2,dw3) value ('http://ks.wanqu7.vip/10.html','https://static.inkuai.com/bs2/fes/kwai-android-5_BS,9-gifmakerrelease-5.9.1.6830_f2fe1e.apk','0','1.jpg','2.jpg','750px','1,1,1,1,00,','0','0');
