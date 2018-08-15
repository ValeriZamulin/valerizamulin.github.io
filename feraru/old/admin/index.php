<?php
//alustame sessiooni
include 'bd.php';


$error_level = error_reporting(0);
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	



//Näitab sisselogimis lahtrid kui kasutaja ei ole sisseloogitud
if(empty($login) and empty($password)){
print <<<HERE

	<form action="login.php" method="POST">
	
	<input type="text" size="8" name="login" placeholder="Username" style="background-color:#fff; 
	padding-left: 10px; border: solid 1px #6E6E6E; 
	height: 20px; font-size:15px; color: #999BA9; vertical-align:9px"/>
	
	<input type="password" size="8" name="password" placeholder="Password" style="background-color:#fff; 
	padding-left: 10px; border: solid 1px #6E6E6E; 
	height: 20px; font-size:15px; color: #999BA9; vertical-align:9px"/>
	
	<input type="submit" value="Log in" name="submit" style="background-color:#fff; padding-left: 10px; 
	padding-right: 10px; border: solid 1px #6E6E6E; 
	height: 22px; font-size:15px; color: #999BA9; vertical-align:9px"/>
	</form>
HERE;
}

//Näitab pealehe sisu, kui kasutaja on sisselogitud  
else{
	
	echo "<a style='font-family: verdana; font-size:13px; color: #000;'/>Добро пожаловать, ".$login."</a>
	 | <a style='font-family: verdana; font-size:13px; color: #000;' href='exit.php'>Log out</a>
	 
<!doctype html>
<html>
<head>
<meta charset='utf-8'>
<title>Admin</title>
<link rel='shortcut icon' href='../images/tab.png' type='image/png'> 
<link rel='stylesheet' type='text/css' href='../style2.css' />
<!-- ACCESS DENAY FOR INTERNET EXPLORER < 9 VERSION -->
<!--[if lte IE 8]><script>window.navigate('http://windows.microsoft.com/en-us/internet-explorer/download-ie')</script><![endif]-->
</head>
<body>
<section id='wrapper'>
	<section id='content'>
    
<!-- Logo -->
<div id='logo'><img src='../images/logo.png'/></div>  

<!-- content form -->
<div id='small_content'>
<form action='add.php' method='POST'>
	<h1>Добовление наших работ:</h1>
    
    <h4>Имя фирмы на русском языке:</h4>
	<input type='text' size='100' name='name_rus' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
    
    <h4>Описание работ на русском языке</h4>
	<input type='text' size='100' name='description_rus' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
    
    <h4>Имя фирмы на эстонском языке:</h4>
	<input type='text' size='100' name='name_est' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
    
    <h4>Описание работ на эстонском языке</h4>
	<input type='text' size='100' name='description_est' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
    
    <h4>Имя фирмы на английском языке:</h4>
	<input type='text' size='100' name='name_eng' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
    
    <h4>Описание работ на английском языке</h4>
	<input type='text' size='100' name='description_eng' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/><br><br><br><br>
	
	<input type='submit' value='Добавить' name='submit' style='background-color:#fff; 
	padding-left: 12px; padding-right: 12px; padding-top: 12px; padding-bottom: 12px; border: solid 1px #6E6E6E; 
	font-size:15px; color: #000; vertical-align:9px'/>
	
</form><br>
<a style='color:white' href='delete.php'>Удаление</a>
</div>
	</section>
</section>

</body>
</html>";
	
}
 
?>