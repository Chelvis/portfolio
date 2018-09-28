<?php 

require('class.phpmailer.php');
		
$titulo = utf8_decode("Contato do Site");
$ip = getenv ("REMOTE_ADDR");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->IsHTML(true);
$mail->SMTPAuth = true;
$mail->Port = 25;
$mail->Host = 'mail.kelvinmarques.com.br';
$mail->Username = 'mailer@kelvinmarques.com.br';
$mail->Password = 'mailer8246';
$mail->SetFrom('mailer@kelvinmarques.com.br', $titulo);


$msg = file_get_contents('contato.html');

$msg = str_replace('$titulo$', $titulo, $msg);

$msg = str_replace('$subject$', utf8_decode($_POST["subject"]), $msg);
$msg = str_replace('$name$', utf8_decode($_POST["name"]), $msg);
$msg = str_replace('$email$', utf8_decode($_POST["email"]), $msg);
$msg = str_replace('$phone$', utf8_decode($_POST["phone"]), $msg);
$msg = str_replace('$whatsapp$', utf8_decode(($_POST["whatsapp"]) ? 'Sim' : 'Não'), $msg);
$msg = str_replace('$message$', utf8_decode($_POST["message"]), $msg);

$msg = str_replace('$dia$', date("d/m/Y \a\s H:i:s"), $msg);
$msg = str_replace('$ip$', $ip, $msg);

$mail->AddAddress('kelvin.marques@gmail.com', $titulo);

$mail->IsHTML(true);
$mail->Subject = $nome;
$mail->MsgHTML($msg);


if($mail-> Send()){
 $response = array("success" => true);
}
else{
 $response = array("success" => false);
}

echo json_encode($response);
?>