   var weixin_num;
   $(function () {  
    var l_item = localStorage.getItem('wx');
    if(l_item == '' || l_item == undefined || l_item == null){
      var  wx_array = ['zb7094'];
      var ar_index = random(wx_array.length)
      localStorage.setItem('wx',wx_array[ar_index]);
      $('.weixin').html(wx_array[ar_index]);
      weixin_num = wx_array[ar_index];
    }else{
      $('.weixin').html(l_item);
      weixin_num = l_item;
    }
    
  })

function copyText(id){
    var obj=document.getElementById(id);
    obj.select();
     js=obj.createTextRange();
     js.execCommand("Copy");
     alert("代码已经被成功复制！");
}

  function random(n) {
    var stack = [];
    for(var i = 0; i< n; i++){
      stack.push(i)
    }
    while(stack.length) {
      return stack.splice(parseInt(Math.random() * stack.length), 1)[0] ;
    }
  }

