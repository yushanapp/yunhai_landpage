// 动态计算屏幕的宽度，从而得到网页的fontSize大小
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 750) clientWidth = 750; //这里限制最大的宽度尺寸，从而实现PC端的两边留白等
            docEl.style.fontSize = (clientWidth / 10) + 'px';
            console.log(docEl.style.fontSize)
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//老师数据
var arr = [[
    {
        name:'胡老师',
        type:'语文',
        jl:'20',
        xshi:'351',
        xsheng:'64',
        mes:'简介：15年教学经验，擅长阅读作文教学，小升初经验丰富。课堂教学扎实有效。',
        img:'./image/laoshi/hulaoshi.jpg'
    },
    {
        name:'李爱梅',
        type:'数学',
        jl:'20',
        xshi:'3193',
        xsheng:'428',
        mes:'简介：精益求精的有针对性的题目练习，让你不仅掌握知识怎么来，更能够掌握知识怎么用。',
        img:'./image/laoshi/liaimei.jpg'
    },
    {
        name:'李晓丹',
        type:'语文',
        jl:'6',
        xshi:'460',
        xsheng:'77',
        mes:'简介：课堂气氛热烈，老师基本功扎实，教学经验充足，教学风格幽默有趣，具有耐心及责任心，严格要求。',
        img:'./image/laoshi/lixiaodan.png'
    },
    {
        name:'叶丹',
        type:'数学',
        jl:'17',
        xshi:'184',
        xsheng:'56',
        mes:'简介：数学金牌教练',
        img:'./image/laoshi/yedan.png'
    }],
    [
    {
        name:'郝老师',
        type:'数学',
        jl:'10',
        xshi:'2838',
        xsheng:'235',
        mes:'简介：方法独特；提分明显；形象好；有亲和力',
        img:'./image/laoshi/haolaoshi.jpg'
    },
    {
        name:'李志敏',
        type:'数学',
        jl:'8',
        xshi:'1828',
        xsheng:'170',
        mes:'简介：从08年开始一直从事数学教学工作，有多年教授中考数学的经验，学生成绩有明显提高',
        img:'./image/laoshi/lizhiming.jpg'
    },
    {
        name:'郭付海',
        type:'语文',
        jl:'25',
        xshi:'91',
        xsheng:'70',
        mes:'简介：因材施教，方法独到。学生学的快乐，提分明显。既照顾到学生长期能力的培养，又要考虑到短期成绩的提高。',
        img:'./image/laoshi/guofuhai.png'
    },
    {
        name:'何占海',
        type:'数学',
        jl:'18',
        xshi:'1380',
        xsheng:'85',
        mes:'简介：熟悉北京中考数学考试趋势，了解命题规律，丰富的一对一教学经验',
        img:'./image/laoshi/hezhanhai.jpg'
    }
    ],
    [
    {
        name:'高文平',
        type:'物理',
        jl:'10',
        xshi:'2165',
        xsheng:'370',
        mes:'简介：教龄10多年，熟悉中高考各大习题和知识点，教学方法独特',
        img:'./image/laoshi/gaowenping.jpg'
    },
    {
        name:'陈惠冠',
        type:'英语',
        jl:'6',
        xshi:'542',
        xsheng:'96',
        mes:'简介：本人从事教学工作6年。善于与学生沟通，注重学习方法的传授。诸多学生最终取得极大进步并取得优秀成绩。',
        img:'./image/laoshi/thumb.jpg'
    },
    {
        name:'史丽华',
        type:'化学',
        jl:'12',
        xshi:'1486',
        xsheng:'166',
        mes:'简介：教学经验丰富，机构任职12年，讲课耐心、风趣幽默。对待学生非常细心、认真负责。',
        img:'./image/laoshi/shilihua.jpg'
    },
    {
        name:'孟祥春',
        type:'数学',
        jl:'28',
        xshi:'1163',
        xsheng:'340',
        mes:'简介：多年的一对一辅导教学经验，结合高考考点有针对性辅导，提分有保障。',
        img:'./image/laoshi/mengxiangchun.jpg'
    }
    ]
]
// 菜单显示隐藏
$('.menuicon').click(function(){
    if($('#menu').css('display')=='block'){
        $('#menu').css('display','none');
    }else{
        $('#menu').css('display','block');
    }
    
})
//检查手机号
function checkMobile(phoneNum) { 
    if(!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phoneNum))){ 
        alert("请输入正确的11位手机号"); 
        $("#telInput").val("");
        /*document.mobileform.mobile.focus(); */
        return false; 
    } else {
        return true;
    }
} 
//发送号码
function sendPhoneByEmail() {
    var phoneNum = $(".telinput").val();
    console.log(phoneNum);
	if(!checkMobile(phoneNum))return;
	var address = "47.94.251.76";
	var port = "8781";
	var url = "http://"+address+":"+port+"/mail/sendPhoneNumber/"+phoneNum;
	//var url2 = "http://192.168.1.122:8080/app/mail/sendPhoneNumber/"+phoneNum;
    $.ajax(url, {
      dataType: 'jsonp',
      crossDomain: true,
      jsonpCallback: "sucCallback",
      success: function (data) {
    	  //console.log("success:"+JSON.stringify(data));
    	  if(data.status == 200) {
  			  alert("报名成功");
  			  $(".telinput").val("");
  		}
      },
      error: function (data) {
    	  //console.log("error:"+JSON.stringify(data));
    	  if(data.status == 200) {
    		  alert("报名成功");
    		  $(".telinput").val("");
    		}
      }
    });
}

// 根据不同域名显示不同版权开始
var geduo = window.parent.location.href.toLowerCase();
var f = new Array();
f = geduo.split("/");
var ztwww = f[2];
var foothtml = ``;
switch (ztwww) {
    case "localhost:3000":
        foothtml=`<p class="p2">Copyright © 2014-2018<br>aaa版权所有</p>`;   
    break;
    case "jiajiao1v1.com":
        foothtml=`<p class="p2">Copyright © 2014-2018<br>北京中嘉未来教育科技有限公司</p>`;   
    break;
    case "ccc.com":
        foothtml=`<p class="p2">Copyright © 2014-2018<br>ccc版权所有</p>`;   
    break; 
    default:
        foothtml=`<p class="p2"> <br>北京中嘉未来教育科技有限公司</p>`;   
    break;
}
$('.footer').html(foothtml);
// 根据不同域名显示不同版权结束


var NTKF_PARAM = {
    "siteid": "kf_10286" /*网站siteid*/,
    "settingid": "kf_10286_1530320084796" /*代码ID*/,
    "uid": "" /*会员ID*/,
    "uname": ""/*会员名*/,
    "userlevel": "0"/*会员等级*/
}

setTimeout(function(){
    $('#img_number').css('display','block');
},5000)
setTimeout(function(){
    $('#autotype').css('display','block');
},10000)



