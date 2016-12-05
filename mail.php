<?php 

$recepient = "murzio@mail.ru";
$sitename = "Регистрация";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);

$pagetitle = "Запрос на регистрацию с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $mail";
$headers = "From: webmaster@example.com" . "\r\n" . "CC: somebodyelse@example.com";
mail($recepient, $pagetitle, $message, $headers);

?>