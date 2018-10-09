$(function(){

    function ajaxs() {
        $.ajax({
            url: "http://www.yulijie.top/demo/action/select.php",
            type: "get",
            success: function (res) {
                var data = jQuery.parseJSON(res)
                for(var i=0;i<data.length;i++){
                    var text="<tr><td class='ids'>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].az+"</td><td>"+data[i].ios+"</td><td>"+data[i].bj+"</td><td>"+data[i].xf+"</td><td>"+data[i].kd+"</td><td>"+data[i].dw1+"</td><td>"+data[i].dw2+"</td><td>"+data[i].dw3+"</td><td>"+"<button type=\"button\" id=\"btn_update\" class=\"btn btn-success btn-sm\" style=\"padding: 1px 10px;\" data-toggle=\"modal\" data-target=\"#myModal\">修改</button>"+"</td></tr>"
                    $("#tables tbody").append(text);

                }

            },
            error:function()//如果接收不成功执行以下
            {
                console.log("链接错误")
            }
        });
    }
    ajaxs();

    $('body').on('click', "#btn_update", function(){
        var id=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().text();
        var names=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().text();
        var az=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().text();
        var ios=$(this).parent().prev().prev().prev().prev().prev().prev().prev().text();
        var bj=$(this).parent().prev().prev().prev().prev().prev().prev().text();
        var xf=$(this).parent().prev().prev().prev().prev().prev().text();
        var kd=$(this).parent().prev().prev().prev().prev().text();
        var dw1=$(this).parent().prev().prev().prev().text();
        var dw2=$(this).parent().prev().prev().text();
        var dw3=$(this).parent().prev().text();

        $("#ids").html(id);
        $("#ym").html(names);
        $("#az").val(az);
        $("#ios").val(ios);
        $("#bj").val(bj);
        $("#xf").val(xf);
        $("#kd").val(kd);
        $("#dw1").val(dw1);
        $("#dw2").val(dw2);
        $("#dw3").val(dw3);

        console.log(id+"><"+names+">>"+az+">>"+ios+">>"+bj+">>"+xf+"<<"+dw1+">>"+dw2+">>"+dw3);
    })

    $("#btn_xg").click(function () {

        var id=$("#ids").text();
        var ym=$("#ym").text();
        var az=$("#az").val();
        var ios=$("#ios").val();
        var bj=$("#bj").val();
        var xf=$("#xf").val();
        var kd=$("#kd").val();
        var dw1=$("#dw1").val();
        var dw2=$("#dw2").val();
        var dw3=$("#dw3").val();

        var jsonData = {
            "id": id,
            "az": az,
            "ios": ios,
            "bj": bj,
            "xf": xf,
            "kd": kd,
            "dw1": dw1,
            "dw2": dw2,
            "dw3": dw3
        };
        $.ajax({
            type: 'get',
            url: 'http://www.yulijie.top/demo/action/update.php',
            data: jsonData,
            dataType: "json",
            success: function (msg){
                if (msg.status == true) {
                    alert("修改成功");
                    //局部刷新
                    for(var i=0;i< $(".ids").length;i++){
                        var num=parseInt($(".ids").eq(i).text());
                        if(num == id){
                            $(".ids").eq(i).next().next().html(az);
                            $(".ids").eq(i).next().next().next().html(ios);
                            $(".ids").eq(i).next().next().next().next().html(bj);
                            $(".ids").eq(i).next().next().next().next().next().html(xf);
                            $(".ids").eq(i).next().next().next().next().next().next().html(kd);
                            $(".ids").eq(i).next().next().next().next().next().next().next().html(dw1);
                            $(".ids").eq(i).next().next().next().next().next().next().next().next().html(dw2);
                            $(".ids").eq(i).next().next().next().next().next().next().next().next().next().html(dw3);
                        }
                        console.log(num+id);
                    }

                    $('#myModal').modal('hide');
                   /* window.location.reload();*/
                } else {
                    alert("修改失败");
                    $('#myModal').modal('hide');

                }
            },
            error: function (error) {
                console.log(error);
                $("#myModal").css({"display": "none"})

            }
        });
        console.log(id+"><"+ym+">>"+az+">>"+ios);
    });

    $("#tc").click(function () {
        location.href='login.php';
    });


})
