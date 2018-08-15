<?php
if(empty($_SESSION['login'])){
print <<<HERE
			<h1 class='text-center'>Login</h1>
			<div class='col-sm-10'>
				<form action="login.php" method="POST" class="form-horizontal">
				  <div class="form-group">
				    <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
				    <div class="col-sm-10">
				      <input type="text" name="login" placeholder="Username" class="form-control">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
				    <div class="col-sm-10">
				      <input type="password" name="password" placeholder="Password" class="form-control">
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default" name="submit">Sign in</button>
				    </div>
				  </div>
				</form>
			</div>
			
HERE;
}
else{
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



