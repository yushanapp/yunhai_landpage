var img_arr = [
  'images/zxbj_n0.png'
  ,'images/zxbj_n1.png'
  ,'images/zxbj_n2.png'
  ,'images/zxbj_n3.png'
  ,'images/zxbj_n4.png'
  ,'images/zxbj_n5.png'
  ,'images/zxbj_n6.png'
  ,'images/zxbj_n7.png'
  ,'images/zxbj_n8.png'
  ,'images/zxbj_n9.png'
];

var img_arr2 = [
  'images/zxbj_n5.png'
  ,'images/zxbj_n4.png'
  ,'images/zxbj_n3.png'
  ,'images/zxbj_n2.png'
  ,'images/zxbj_n1.png'
  ,'images/zxbj_n7.png'
  ,'images/zxbj_n6.png'
  ,'images/zxbj_n8.png'
  ,'images/zxbj_n9.png'
  ,'images/zxbj_n0.png'
];

var img_arr3 = [
  'images/zxbj_n3.png'
  ,'images/zxbj_n5.png'
  ,'images/zxbj_n8.png'
  ,'images/zxbj_n0.png'
  ,'images/zxbj_n4.png'
  ,'images/zxbj_n1.png'
  ,'images/zxbj_n6.png'
  ,'images/zxbj_n7.png'
  ,'images/zxbj_n2.png'
  ,'images/zxbj_n9.png'
];

var img_arr4 = [
  'images/zxbj_n2.png'
  ,'images/zxbj_n3.png'
  ,'images/zxbj_n4.png'
  ,'images/zxbj_n5.png'
  ,'images/zxbj_n6.png'
  ,'images/zxbj_n7.png'
  ,'images/zxbj_n8.png'
  ,'images/zxbj_n9.png'
  ,'images/zxbj_n1.png'
  ,'images/zxbj_n7.png'
];


var numge = document.getElementById('numge');
var numshi = document.getElementById('numshi');
var numbai = document.getElementById('numbai');
var numqian = document.getElementById('numqian');


var i = 0;

setInterval(function(){
  numge.src = img_arr[i];
  numshi.src = img_arr2[i];
  numbai.src = img_arr3[i];
  numqian.src = img_arr4[i];

  if(i<9){
    i++;
  }else{
    i=0;
  }


},100);
