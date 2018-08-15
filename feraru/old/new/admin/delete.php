<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="../images/tab.png">
    <title>Administrator</title>
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"> 
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
  </head>
<body>
<div class="container">
<?php
include 'bd.php';
	
$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	
$conn = mysqli_connect($servername, $username, $password, $dbname);

if(empty($login) and empty($password)){
echo "<meta http-equiv='refresh' content='0; url=index.php'>";
}
else{	
	echo "<p class='lead'>Добро пожаловать, ".$login." | <a class='lead' href='exit.php'>Log out</a></p><br><br><h1 class='text-center'>Удаление</h1><hr><br>";      
		$sql = "SELECT * FROM works";
		$result = mysqli_query($conn, $sql);
		if (mysqli_num_rows($result) > 0) {
		    while($row = mysqli_fetch_assoc($result)) {
		        echo "<div class='row'><div class='col-md-3'><h4 class='lead title'>" . $row["rus_name"] . "</h4><h5 class='lead'>" . $row["rus_description"] . "</h5></div><div class='col-md-3'><h4 class='lead title'>" . $row["est_name"] . "</h4><h5 class='lead'>" . $row["est_description"] . "</h5></div><div class='col-md-3'><h4 class='lead title'>" . $row["eng_name"] . "</h4><h5 class='lead'>" . $row["eng_description"] . "</h5></div><div class='col-md-3'><form action='del.php' method='POST'><input type='hidden' name='del' value='". $row["id"] ."'><input type='submit' class='btn btn-danger' value='Удалить' name='submit'></form></div></div><hr>";
		   	}
		   	mysql_close();
		} 
		else {
		    echo "<h2>Пусто</h2>";
		}
		echo "<br><br><div class='row text-center'><h5>Нажмите сюда, чтобы вернуться на страничку добавления</h5><br><a class='btn btn-success' href='index.php'>Добавление</a></div>";
}
?>
</div>
</body>
</html>
