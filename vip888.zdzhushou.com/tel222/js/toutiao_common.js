// 此js文件是处理今日头条公共部分
// 不同的convert_id对应不同的账户，区分账户的参数是WT.mc_id=mobi05-qsfj-s226-jrtt|jrtt1-8-1
var toutiaoObject= {
	toutiaoParam: 'jrtt|jrtt',
	jrtt: null, 
	convert_id: null,
	getConver_id: function () {
		if (location.href.indexOf(this.toutiaoParam) > -1) {
			this.jrtt = location.href.split(this.toutiaoParam)[1][0];
		}
		switch (this.jrtt) {
			case '1':
				this.convert_id = '1602947754215464'
			break;
			case '2':
				this.convert_id = '1612933859760190'
			break;
			case '3':
				this.convert_id = '1612934180054056'
			break;
			default:
				this.convert_id = '1602947754215464'
			break;
		}
	}
}
toutiaoObject.getConver_id();