<?php 

	$data = file_get_contents("php://input");

	if (!$data) {
		throw new Exception('Sem dados para processar');
	}

	$decoded = json_decode($data);

	$subject = $decoded->subject;
	$name = $decoded->name;
	$email = $decoded->email;
	$phone = $decoded->phone;
	$nWhatsapp = $decoded->nWhatsapp;
	$message = $decoded->message;

	require('class.phpmailer.php');
		
	$titulo = utf8_decode("Contato do Site Kelvin Marques");
	$ip = getenv ("REMOTE_ADDR");
	
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->IsHTML(true);
	$mail->SMTPAuth = true;
	$mail->Port = 25;
	$mail->Host = 'mail.kelvinmarques.com.br';
	$mail->Username = 'mailer@kelvinmarques.com.br';
	$mail->Password = 'kmg291291';
	$mail->SetFrom('mailer@kelvinmarques.com.br', $titulo);
	
	
	$msg = file_get_contents('contato.html');
	
	
	$msg = str_replace('$titulo$', $titulo, $msg);
	
	$msg = str_replace('$nome$', $name, $msg);
	$msg = str_replace('$telefone$', $phone, $msg);
	$msg = str_replace('$whatsapp$', ($nWhatsapp ? 'Sim' : 'Não'), $msg);
	$msg = str_replace('$email$', $email, $msg);
	$msg = str_replace('$assunto$', $subject, $msg);
	$msg = str_replace('$comentarios$', $message, $msg);
	
	$msg = str_replace('$dia$', date("d/m/Y \a\s H:i:s"), $msg);
	$msg = str_replace('$ip$', $ip, $msg);
	
	$mail->AddAddress('kelvin.marques@gmail.com', $titulo);
	
	$mail->IsHTML(true);
	$mail->Subject = $nome;
	$mail->MsgHTML($msg);
	
	
	if($mail-> Send()){
		$response = array("success" => true, "data" => $decoded);
		echo json_encode($response);
	}
	else{
		throw new Exception('Erro no processamento');
	}
?>