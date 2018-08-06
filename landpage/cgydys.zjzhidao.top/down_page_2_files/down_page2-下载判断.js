    function loadingInfo(){
    var self =this;
    //初始化
    this.init=function(fn){
        //发放渠道
        self.strPath= window.location.href;
        self.plat_name = self.GetPathStr(self.strPath,"plat");
        if(self.plat_name){
           self.loadurl={"ydq":"http://wcdn1.cgyouxi.com/spec/apk/cg_noscore_aiqiyi02CG_2.12.235.0529.apk",
                "B_info1":"https://lnk0.com/8kMtc8",
                "B_info2":"https://lnk0.com/0U1wx9",
                "zyb5":"http://wcdn1.cgyouxi.com/spec/apk/yd_noscore_XXLzuoyebang05YD_2.12.235.0529.apk",
                "zyb6":"http://wcdn1.cgyouxi.com/spec/apk/yd_noscore_XXLzuoyebang05YD_2.12.235.0529.apk"
            }; 
        }
        fn&&fn();
    };
     /*获取游戏地址后的参数*/
    this.GetPathStr=function(str,name){
        str = str.substring(self.strPath.indexOf("?"));
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = str.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }
    /*判断微信*/
    this.isWeixin=function(){
       var agent = navigator.userAgent.toLowerCase();
        if (agent.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        } 
    }
    //添加统计pv uv
    //
    this.goStatisticsNUm=function(type){
        var data={
           no:self.plat_name,
           type:type
        }
        $.ajax({
          type: 'get',
          url: window.oapiSdk+"/landing/v1/landing/recordClickcount",
          data: data,
          success: function(result){
            if(parseInt(result.status)==1){
                console.log("记录成功");
            }
          },
          dataType: "json"
        });
    }

    //点击下载
    this.download=function(){
         //判断ios 安卓
        var u = navigator.userAgent, app = navigator.appVersion;
        var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var iPad = u.indexOf('iPad') > -1;
        var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;

        if (ios || iPad || iPhone) {
            window.location.href ="http://www.66rpg.com";
        } else {//安卓
            if(self.plat_name){
                for (var prop in self.loadurl) {
                    if(self.plat_name==prop){
                        if(self.isWeixin()){
                            alert("请在浏览器中点击下载！");
                        }else{
                            self.goStatisticsNUm("2");//pv
                           window.location.href=self.loadurl[prop];
                        }
                        
                    }
                }
            }
        }
    }
}
var LoadInfo=new loadingInfo();
$(function(){
    LoadInfo.init(function(){
        LoadInfo.goStatisticsNUm("1");//pv
    });

    $(".header").click(function(){
       LoadInfo.download();
    });
     $(".footer").click(function(){
        LoadInfo.download();
    })
})
