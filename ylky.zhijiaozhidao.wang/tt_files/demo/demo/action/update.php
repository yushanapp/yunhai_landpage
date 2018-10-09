<?php
header("Access-Control-Allow-Origin: *");

$url = "mysql:host=localhost;dbname=demo";
$user = "root";
$pwd = "0123456zp";
$conn=new PDO($url,$user,$pwd);
$conn->query("set names utf8");

$id=$_GET['id'];
$az=$_GET['az'];
$ios=$_GET['ios'];
$bj=$_GET['bj'];
$xf=$_GET['xf'];
$kd=$_GET['kd'];
$dw1=$_GET['dw1'];
$dw2=$_GET['dw2'];
$dw3=$_GET['dw3'];



$sql="update d set az='$az',ios='$ios',az='$az',bj='$bj',xf='$xf',kd='$kd',dw1='$dw1',dw2='$dw2',dw3='$dw3' where id=$id";

$res=$conn->exec($sql);

if($res){
    echo json_encode(array(
        "status"=>true,
        "info"=>"add success"
    ),JSON_UNESCAPED_UNICODE);
}else{
    echo json_encode(array(
        "status"=>false,
        "info"=>"add error",
        "sql"=>$sql
    ),JSON_UNESCAPED_UNICODE);
}

