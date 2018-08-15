<!DOCTYPE html>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<style>
.input{
	text-align:justify;
	font-size:22px;
	color:#000;
	font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana;
	resize:none;
}
#feedback-form {
	position:absolute;
	top:260px;
	width: 880px;
	padding: 40px;
	border-radius: 15px;
	background-image:url(../images/back8.jpg);
}
#feedback-form [required] {
	width: 100%;
	box-sizing: border-box;
	margin: 2px 0 2% 0;
	padding: 2%;
	border: 1px solid rgba(0,0,0,.1);
	border-radius: 3px;
	box-shadow: 0 1px 2px -1px rgba(0,0,0,.2) inset, 0 0 transparent;
}
#feedback-form [required]:hover {
	border-color: #7eb4ea;
	box-shadow: 0 1px 2px -1px rgba(0,0,0,.2) inset, 0 0 transparent;
}
#feedback-form [required]:focus {
	outline: none;
	border-color: #7eb4ea;
	box-shadow: 0 1px 2px -1px rgba(0,0,0,.2) inset, 0 0 4px rgba(35,146,243,.5);
	transition: .2s linear;
}
/* buton */
#feedback-form [type="submit"] {
	padding: 20px 60px;
	border: none;
	border-radius: 7px;
	box-shadow: 0 0 0 1px rgba(0,0,0,.2) inset;
	background: #C43025;
	color: #ffffff;
	font-weight: bold;
	font-size: 20px;
	text-decoration:none;
	font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana;
}
#feedback-form [type="submit"]:hover {
	background-color:#8A221A;
	color:#CCC;
}
#feedback-form [type="submit"]:focus {
	box-shadow: 0 1px 1px #fff, inset 0 1px 2px rgba(0,0,0,.8), inset 0 -1px 0 rgba(0,0,0,.05);
}
</style>

<form method="POST" id="feedback-form">
<?php
if (isset ($_POST['messageFF'])) {
  mail ("radu@bk.ru",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
  echo ("<h2>Ваше сообщение получено, спасибо!</h2>");}?>
<h1>Форма для обратной связи</h1></br>
<input class="input" type="text" name="nameFF" required placeholder="Имя и фамилия" x-autocompletetype="name">
<h1>Ваша э-почта:</h1></br>
<input class="input" type="email" name="contactFF" required placeholder="Адрес электронной почты" x-autocompletetype="email">
<h1>Сообщение:</h1></br>
<textarea class="input" name="messageFF" required rows="10"></textarea>
<input type="submit" value="ОТПРАВИТЬ">
</form>