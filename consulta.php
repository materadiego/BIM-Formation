<?php
$nombreApellido = $_POST['nombreApellido'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$mensaje .= "Apellido : " . $apellido . " \r\n";
$mensaje .= "Nombre y Apellido : " . $nombreApellido . " \r\n";
$mensaje .= "Su e-mail es : " . $email . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'diegomatera@gmail.com';
$asunto = 'Consulta via web';

mail($para, $asunto, utf8_decode($mensaje), $header);


header("Location:index.html");
?>