// 初高中按钮颜色变化
$('.header>div').eq(0).css('background','#58dc77');
var fhtml=``;
for(var i = 0; i < arr[0].length;i++){
    fhtml+=
    `
    <div class="content">
        <div class="content_top">
            <img src="${arr[0][i].img}" alt="">
            <div class="content_top_right">
                <h4>${arr[0][i].name}</h4><span>${arr[0][i].type}</span>
                <p>
                    ${arr[0][i].mes}
                </p>
                <div class="jiaoling">
                    <div>
                        <p class="nl">${arr[0][i].jl}年</p>
                        <p class="jl">教龄</p>
                    </div>
                    <div>
                        <p class="nl">${arr[0][i].xshi}年</p>
                        <p class="jl">学时</p>
                    </div>
                    <div>
                        <p class="nl">${arr[0][i].xsheng}年</p>
                        <p class="jl">学生</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_bottom">
                <button class="btn yuyue" href="javascript:void(0);" onclick="NTKF.im_openInPageChat('kf_10286_1530320084796')">预约体验课</button>
        </div>
    </div>
    `
}
$('.tyk').append(fhtml);
$('.header>div').click(function(){
    console.log();
    $(this).css('background','#58dc77').siblings().css('background','#edfbf0');
    var html=``;
    var a = $(this).index();
    for(var i = 0; i < arr[a].length;i++){
        html+=
        `
        <div class="content">
            <div class="content_top">
                <img src="${arr[a][i].img}" alt="">
                <div class="content_top_right">
                    <h4>${arr[a][i].name}</h4><span>${arr[a][i].type}</span>
                    <p>
                        ${arr[a][i].mes}
                    </p>
                    <div class="jiaoling">
                        <div>
                            <p class="nl">${arr[a][i].jl}年</p>
                            <p class="jl">教龄</p>
                        </div>
                        <div>
                            <p class="nl">${arr[a][i].xshi}年</p>
                            <p class="jl">学时</p>
                        </div>
                        <div>
                            <p class="nl">${arr[a][i].xsheng}年</p>
                            <p class="jl">学生</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_bottom">
                    <button class="btn yuyue" href="javascript:void(0);" onclick="NTKF.im_openInPageChat('kf_10286_1530320084796')">预约体验课</button>
            </div>
        </div>
        `
    }
    $('.tyk>.content').remove()
    $('.tyk').append(html)
})

var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if(isiOS){
    $('.telinput').css('width','8.5rem');
}