
<?php
/*
*   获取服务器时间，返回JSON 杨晨制作 2018/09/25
*/
ini_set('date.timezone','Asia/Shanghai');
header('Content-Type:application/json');
$arr = array('dateymd'=>date('Y.n.j'),'year'=>date('Y'),'month'=>date('n'),'today'=>date('j'));
exit(json_encode($arr));
?>