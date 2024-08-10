<?php
echo "1";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
echo "2";
include 'Exception.php';echo "3";
include 'test.php';echo "4";
include 'PHPMailer.php';echo "5";




$mail = new PHPMailer();
$mail->isSMTP();
$mail->Mailer = "smtp";
$mail->Host = "smtp.1blu.de";
$mail->Port = 465; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'SSL/TLS';
$mail->Username = "s212217_0-rimma";
$mail->Password = "Rimma01!Rimma01!";

$mail->From = "rimma@mkrauss01.de";
$mail->FromName = "Support Team";
$mail->addAddress("rimma.raffael@gmail.com", "Rimma Deutschkurs");
$mail->addReplyTo("rimma.raffael@gmail.com", "Sender's Name");


$vname = $_POST["Vorname"];
$nname = $_POST["Nachname"];
$email = $_POST["E-Mail"];
$tel = $_POST["Telefon"];
$betreff = $_POST["Betreff"];
$nachricht = $_POST["Nachricht"];


$mail->Subject = $betreff;
$mail->Body = $vname . " " . $nname . "/r/n" . $email . "/r/n" . $tel . "/r/n" . "<br>" . $nachricht;
$mail->WordWrap = 50;

if (!$mail->send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
?>