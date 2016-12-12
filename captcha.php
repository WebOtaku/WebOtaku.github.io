<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST') {
   if (empty($_POST['g-recaptcha-response'])) {
       exit('Empty');
   }
   $url = 'https://www.google.com/recaptcha/api/siteverify';
   $recaptcha = $_POST['g-recaptcha-response'];
   $secret = '6LdG0g0UAAAAACS_bVQf9QcA4o3XIQ5K2NzXX1uV';
   $ip = $_SERVER['REMOTE_ADDR'];
   $url_data = $url.'?secret='.$secret.'&response='.$recaptcha.'&remoteip='. $ip;
   $curl = curl_init();
   curl_setopt($curl, CURLOPT_URL, $url_data);
   curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   $res = curl_exec($curl);
   curl_close($curl);
   $res = json_decode($res);
   if($res->success) {
       require('mail.php');
   }
   else {
       exit('Error');
   }
}
?>