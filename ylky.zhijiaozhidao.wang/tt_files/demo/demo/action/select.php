<?php
header("Access-Control-Allow-Origin: *");

$url = "mysql: host=localhost;dbname=demo";
$user = "root";
$pwd = "0123456zp";
$conn=new PDO($url,$user,$pwd);
$conn->query("set names utf8");
$sql = "select * from d";
$rst = $conn->query($sql);
$result=$rst->fetchAll();

echo json_encode($result,JSON_UNESCAPED_UNICODE);