<?php
$nombreApellido = $_POST['nombreApellido2'];

$email = $_POST['email2'];


$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombreApellido . " \r\n";
$mensaje .= "Su e-mail es : " . $email . " \r\n";
$mensaje .= "Mensaje: Accedió al modulo gratis"  . " \r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'diegomatera@gmail.com';
$asunto = 'Consulta via web';

mail($para, $asunto, utf8_decode($mensaje), $header);


header("Location:https://bimformation.club.hotmart.com/login");
?>