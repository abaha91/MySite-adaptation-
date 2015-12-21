<?php

$name = $_POST['name'];
$img =$_POST['img'];
$bPopupUrl = $_POST['url'];
$bPopupText = $_POST['message'];
$data = array();



if ($name === "") {
	$data['name_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['name_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить имя.'; 
}


if ($img === "") {
	$data['img_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['img_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить картинку.'; 
}


if ($bPopupUrl === "") {
	$data['url_status'] = 'error';
	$data['text'] = 'Заполните имя';
}else{
	$data['url_status'] = 'success';
	$data['text'] = 'Вы молодец, не забыли заполнить адрес.'; 
}


if ($bPopupText === "") {
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