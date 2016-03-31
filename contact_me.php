<?
if (array_key_exists('message', $_POST)) {
   $to = 'abashkin.91@mail.ru';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "<b>Имя:</b> ".$_POST['name']."<br /><b>Email:</b> ".$_POST['email']."<br /><b>IP:</b> ".$_SERVER['REMOTE_ADDR']."<br /><b>Сообщение:</b> ".$_POST['message'];
   $headers = 'Content-type: text/html; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "From:" . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
   mail($to, $subject, $message, $headers, $from);
   echo $_POST['name'];   
   }

?>