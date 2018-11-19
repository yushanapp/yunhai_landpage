// JavaScript Document
$(function(){
oMonth = $('.month');
	oDay = $('.day');
	var month = new Date().getMonth();
	var week = new Date().getDay();
	var date = new Date().getDate();
	if (week == 7) {//如果今天是星期7（周日），则当前时间+7天
		date = new Date().getDate() + 7;
	} else if (week == 1) {
		date = new Date().getDate() + 6;
	} else if (week == 2) {
		date = new Date().getDate() + 5;
	} else if (week == 3) {
		date = new Date().getDate() + 4;
	} else if (week == 4) {
		date = new Date().getDate() + 3;
	} else if (week == 5) {
		date = new Date().getDate() + 2;
	} else if (week == 6) {
		date = new Date().getDate() + 1;
	}
	d = new Date();
	d.setDate(date);
	oMonth.html(d.getMonth()+1);
	oDay.html(d.getDate());
})