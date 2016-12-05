<?php 
if (isset($_POST['submit'])) {
    $secret = '6LdG0g0UAAAAACS_bVQf9QcA4o3XIQ5K2NzXX1uV';
    $response = $_POST['g-recaptcha-response'];
    $remoteip = $_SERVER['REMOTE_ADDR'];
    
    $url = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip");
    $result = json_decode($url, TRUE);
    /*if ($result['success'] == 1) {
        echo $_POST['myreq'];
    } */
}
?>
