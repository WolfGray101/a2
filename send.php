<?php header('Content-Type: text/html; charset=utf-8');

//Пример создан сайтом http://blogjquery.ru/ajax-rdmailform-forma-otpravki-soobshhenij-bez-perezagruzki-stranicy/

//Первая форма
if(isset($_POST['name']) && !empty($_POST['name'])) {
$to = 'da@a2logistics.ru';
$subject = 'Сообщение с сайта '.$_SERVER['SERVER_NAME'];
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$msgotprav = 'Имя: '.$_POST['name'].'<br>Телефон: '.$_POST['phone'].'<br>Email: '.$_POST['text'];
$msgotprav .= '<br><br>Отправлено со страницы: '.$_SERVER['HTTP_REFERER'];
mail($to, $subject, $msgotprav, $headerss);
echo 'MF000'; //если сообщение отправлено ajax-ом - выводим статус успешной доставки
}


//Вторая форма 
//if(isset($_POST['name2']) && !empty($_POST['name2'])) {

//echo 'MF255'; //если сообщение отправлено ajax-ом - выводим статус успешной доставки
//}

?>