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



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feraru";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT eng_name, eng_description FROM works";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<div class='col-md-4'><h4 class='lead title'>" . $row["eng_name"] . "</h4><h5 class='lead'>" . $row["eng_description"] . "</h5></div>";
    }
} else {
    echo "";
}

mysqli_close($conn);

$servername = "mysql.hostinger.ee";
$username = "u221157496_ferar";
$password = "Zaqzaq12";
$dbname = "u221157496_ferar";
$login = $_SESSION['login'];
$pass = $_SESSION['password'];
$id_user = $_SESSION['id'];	
        
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id FROM users WHERE login='$login' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    // output data of each row
    echo "string";;
    }
} 


       
        mysqli_close($conn);
    ?>



