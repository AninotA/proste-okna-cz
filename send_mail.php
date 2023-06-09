<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/Exception.php";
    require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true); 
$mail->CharSet = "UTF-8"; 
$mail->IsHTML(true); 

$name = $_POST["name"]; 
$phone = $_POST["phone"]; 
$email = $_POST["email"]; 
$comment = $_POST["comment"]; 

$body = $name . ' ' . $phone . ' ' . $email . ' ' . $comment;
$theme = "[Kontaktujte nás]";

$mail->addAddress("antoninabuchak@gmail.com");

$mail->Subject = $theme;
$mail->Body = $body;

@mail->send();