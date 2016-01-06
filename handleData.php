<?php
header('Content-Type:text/html;charset=utf-8');
$p_username=isset($_POST['p_username'])?trim($_POST['p_username']):null;
$p_password=isset($_POST['p_password'])?trim($_POST['p_password']):null;
$p_rememberMe=isset($_POST['p_rememberMe'])?trim($_POST['p_rememberMe']):null;

if(!empty($p_username) && !empty($p_password) && !empty($p_rememberMe)){
    $p_rememberMe=$p_rememberMe=='true'?$p_rememberMe='记住我已勾选！':$p_rememberMe='记住我未勾选！';
    echo '{
"success":true,
"msg":"'.'登录成功！<br/>用户名：'.$p_username.''.'&nbsp;&nbsp;密码：'.$p_password.'&nbsp;&nbsp;'.$p_rememberMe.'"}';

}else {
    echo '{"success":false,"msg":"数据提交错误，登录失败！"}';
}

?>
