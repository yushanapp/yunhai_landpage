<?php
$siteAnchor = '#7a69ca25-a2c9-e5b5-30f1-acc471c71473';

function UserAgent()
{
    $user_agent = (!isset($_SERVER['HTTP_USER_AGENT'])) ? FALSE : $_SERVER['HTTP_USER_AGENT'];
    return $user_agent;
}

//Mobile
if ((preg_match("/(iphone|ipod|android)/i", strtolower(UserAgent()))) AND strstr(strtolower(UserAgent()), 'webkit')) {
    header('Location: wap.html' . $siteAnchor);
    exit;
} else if (trim(UserAgent()) == '' OR preg_match("/(nokia|sony|ericsson|mot|htc|samsung|sgh|lg|philips|lenovo|ucweb|opera mobi|windows mobile|blackberry)/i", strtolower(UserAgent()))) {
    header('Location: wap.html' . $siteAnchor);
    exit;
} else {//PC
    header('Location: pc.html' . $siteAnchor);
}
?>