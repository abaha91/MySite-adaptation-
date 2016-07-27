<?php


$contactEmail = $_POST['email'];
$contactName = $_POST['name'];
$contactMessage = $_POST['message'];
$data = array();

if ($contactEmail === "") {
	$data['email_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['email_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить имя.'; 
}

if ($contactName === "") {
	$data['name_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['name_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить адрес.'; 
}


if ($contactMessage === "") {
	$data['message_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['message_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить сообщение.'; 
}




header("Content-Type: application/json");
echo json_encode($data);
exit;







?>