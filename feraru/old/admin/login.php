<?php
//alustame sessiooni
include 'bd.php';


$error_level = error_reporting(0);
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	


//Sisselogimis lahtrite kontroll
if (isset($_POST['login'])) {
	$login = $_POST['login']; 
	if ($login == '') {
		unset($login);
		echo "<meta http-equiv='Refresh' content='0; URL=index.php'>";	} 
}
if (isset($_POST['password'])) {
	$password=$_POST['password']; 
	if ($password =='') {
		unset($password);
		exit ("");

	}
}


	//Kui kasutajatunnus ja salasõna on õiged, siis alustab sessiooni 
$user = mysql_query("SELECT id FROM users WHERE login='$login' AND password='$password'");
$id_user = mysql_fetch_array($user);
if (empty($id_user['id'])){
	exit ("Login failed, <br>Please check your username and password.<br><br><a href='index.php'>Back</a>");
}
else {

   
    $_SESSION['password']=$password; 
	$_SESSION['login']=$login; 
    $_SESSION['id']=$id_user['id'];		  
}
echo "<meta http-equiv='Refresh' content='0; URL=index.php'>";
?>