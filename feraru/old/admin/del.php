<?php
//alustame sessiooni
include 'bd.php';


$error_level = error_reporting(0);
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	
	
$del = $_POST['del'];

if (empty($del))
{echo "Номер не верен<br><a href='delete.php'>Назад</a>";}
else {
	
//Andmebasi sisestamine
$query = "DELETE FROM work WHERE id = $del"; 
$result = mysql_query($query) or die(mysql_error());
echo "Удалено<br><a href='delete.php'>Назад</a>";//Kui k]ik edustab, refresh
}
?>