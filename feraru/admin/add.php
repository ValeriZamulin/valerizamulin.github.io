<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="../images/tab.png">
    <title>Administrator</title>
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
  </head>
<body>
<?php
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
$query = "INSERT INTO works (rus_name, rus_description, est_name, est_description, eng_name, eng_description) 
VALUES ('$name_rus', '$description_rus', '$name_est', '$description_est', '$name_eng', '$description_eng')";
$result = mysql_query($query) or die(mysql_error());
echo "<script type='text/javascript'>alert('Добавлено!');</script></div><meta http-equiv='refresh' content='0;URL=index.php'>";
?>
</body>
</html>