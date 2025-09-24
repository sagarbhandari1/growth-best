<?php
require_once('PHPMailer/class.phpmailer.php');
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$smtpinfo["host"] ="ssl://blynx7.cloudhostdns.net";
$smtpinfo["port"] ="465";
$smtpinfo["auth"] =true;
$mail->Username = "mail@arcconsultant.com";
$mail->Password = "Arc@india23%";

$mail->SetFrom($email, $name);
$mail->Subject = "Growth Best";
$body="
<b>*** PAGE QUERY***</b> <br><br><br>
<b>NAME:</b> $name<br><br>
<b>EMAIL:</b> $email<br><br>
<b>MESSAGE:</b> $message";

$mail->MsgHTML($body);
$address = "info@growthbest.com";//info@growthbest.com
$mail->AddAddress($address, 'Growth Best');
$mail->IsHTML(true);


if($mail->Send()) {
  echo "<div id='navigation' style='width: 405px;  text-align:center; font-weight: 700; color: #009900; padding-top:9px; position:absolute; height:24px; margin-left:394px; margin-right:auto; margin-top:240px; '> THANK YOU! WE HAVE RECEIVED YOUR REQUEST 
  <br><br><a href='index.php' style='background:red;padding:10px 20px;color:white;'>Close</a>
  </div>";
} else {
  echo "Mailer Error: " . $mail->ErrorInfo;
}
?>
