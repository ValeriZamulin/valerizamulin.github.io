<!DOCTYPE html>
<html lang="en">
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
//alustame sessiooni
include 'bd.php';

$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	
	
$del = $_POST['del'];

if (empty($del))
{echo "Номер не верен<br><a href='delete.php'>Назад</a>";}
else {
$query = "DELETE FROM works WHERE id = $del"; 
$result = mysql_query($query) or die(mysql_error());
echo "<script type='text/javascript'>alert('Удалено!');</script><meta http-equiv='refresh' content='0;URL=delete.php'>";
}
?>
</body>
</html>