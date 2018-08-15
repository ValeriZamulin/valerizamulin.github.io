<?php
//alustame sessiooni
include 'bd.php';


$error_level = error_reporting(0);
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	
	
$name_rus = $_POST['name_rus'];
$description_rus = $_POST['description_rus'];
$name_est = $_POST['name_est'];
$description_est = $_POST['description_est'];
$name_eng = $_POST['name_eng'];
$description_eng = $_POST['description_eng'];

if ((empty($name_rus)) or (empty ($description_rus)))
{$rus = '';}
else {$rus = '<h4>'.$name_rus.'</h4><h3>'.$description_rus.'</h3>';}

if ((empty($name_est)) or (empty ($description_est)))
{$est = '';}
else {$est = '<h4>'.$name_est.'</h4><h3>'.$description_est.'</h3>';}

if ((empty($name_eng)) or (empty ($description_eng)))
{$eng = '';}
else {$eng = '<h4>'.$name_eng.'</h4><h3>'.$description_eng.'</h3>';}

//Andmebasi sisestamine
$query = "INSERT INTO work (rus, est, eng) 

VALUES ('$rus', '$est', '$eng')";
$result = mysql_query($query) or die(mysql_error());
echo "Добавлено<br><a href='index.php'>Назад</a>";//Kui k]ik edustab, refresh

			


?>