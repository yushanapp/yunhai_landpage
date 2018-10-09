/**
 * Created by libo on 2017/11/9.
 */

/*封装一些公用的事件或者公用的方法*/
/*定义的一个命名空间*/
window.my = {};
/*封装一个事件 过渡结束事件*/
my.transitionEnd = function(dom,callback){
    //1.给谁加事件
    //2.事件触发后处理什么业务
    if(!dom || typeof dom != 'object'){
        //没dom的时候或者不是一个对象的时候 程序停止
        return false;
    }
    dom.addEventListener('transitionEnd', function(){
        callback && callback();
    });
    dom.addEventListener('webkitTransitionEnd', function(){
        callback && callback();
    });
}

//封装一个tap事件
my.tap = function(dom,callback){
    if(!dom || typeof dom != 'object'){
        //没dom的时候或者不是一个对象的时候 程序停止
        return false;
    }

    var isMove = false; //是否滑动过
    var time = 0;   //刚刚触摸屏幕的事件  touchstart的触发事件

    dom.addEventListener('touchstart',function(){
        //记录触发这个事件的时间
        time = Date.now();  //时间戳 毫秒
    });
    dom.addEventListener('touchmove',function(){
        isMove = true;
    });
    window.addEventListener('touchend',function(e){
        //1.没有滑动过
        //2.响应事件在150ms以内   要求比click要响应快
        if(!isMove && (Date.now()-time)<150 ){
            callback && callback(e);
        }

        //重置参数
        isMove = false;
        time = 0;
    });

}