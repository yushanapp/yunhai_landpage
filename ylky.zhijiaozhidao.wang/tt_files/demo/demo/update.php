<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
  <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <title>可编辑表格</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/update.css">
    <style media="screen">
        .table{
            text-align: center;
        }
    </style>
</head>
<body>

<div class="page-header">
    <h1>快手连接管理后台
        <small></small>
    </h1>
    <button type="button" id="tc" class="btn btn-info" style="position: absolute;right: 30px;top: 31px;">退出登录</button>
</div>

<table class="table table-bordered table-hover" id="tables">
    <thead>
    <tr class="info">
        <th>id</th>
        <th>域名</th>
        <th>安卓</th>
        <th>ios</th>
        <th>背景图片地址</th>
        <th>悬浮按钮图片地址</th>
        <th>图片宽度</th>
        <th>背景定位1</th>
        <th>背景定位1</th>
        <th>按钮定位值</th>
        <td>操作</td>
    </tr>
    </thead>
    <tbody>

    </tbody>

    <!--<tbody id="table_main">
        <tr>
            <td>1</td>
            <td>www.baidu.com</td>
            <td>www.az.dassdasdaASDasdsadasdaaaaaaaaaapk</td>
            <td>www.ios.html</td>
            <td><button type="button" id="btn_update" class="btn btn-success btn-sm" style="padding: 1px 10px;" data-toggle="modal" data-target="#myModal">修改</button>
            </td>
        </tr>
    </tbody>-->

    <!--  <tr>
        <td colspan="5" class="danger"><button class="btn btn-primary btn-sm">增加</button></td>
      </tr>-->

</table>

<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="z-index: 89999;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    ID:<span id="ids"></span>　域名：<span id="ym"></span>
                </h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">安卓:</span>
                        <input type="text" id="az"  style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">ios:</span>
                        <input type="text" id="ios" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">背景地址:</span>
                        <input type="text" id="bj" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">按钮地址:</span>
                        <input type="text" id="xf" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">宽度:</span>
                        <input type="text" id="kd" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">背景定位1:</span>
                        <input type="text" id="dw1" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">背景定位2:</span>
                        <input type="text" id="dw2" style="width: 85%;">
                    </li>
                    <li>
                        <span style="display: inline-block;width: 12%; text-align: right;">悬浮按钮定位:</span>
                        <input type="text" id="dw3" style="width: 85%;">
                    </li>
                </ul>
            </div>
            <div class="modal-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal">
                    关闭
                </button>

                <button type="button" id="btn_xg" class="btn btn-primary">
                    提交修改
                </button>

            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/table.js"></script>
<script src="js/bootstrap.js"></script>

</body>
</html>
