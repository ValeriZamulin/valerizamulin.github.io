<?php
//alustame sessiooni
include 'bd.php';


$error_level = error_reporting(0);
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];



//Kui kasutaja ei ole sisse logitud 
if (empty($_SESSION['login']) or empty($_SESSION['password'])) {
	exit ("Access for this web-page is denied for unregistered users. Please log-in.<br><a href='index.php'>Home</a>");
}
// Sessiooni lõpetamine
unset($_SESSION['password']);
unset($_SESSION['login']); 
unset($_SESSION['id']);

//Tagasi pealehele
exit("<meta http-equiv='Refresh' content='0; URL=index.php'>");
?>