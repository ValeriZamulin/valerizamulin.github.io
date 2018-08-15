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
<div class="row">
<?php
//alustame sessiooni
include 'bd.php';



$login = $_SESSION['login'];
$password = $_SESSION['password'];
$id_user = $_SESSION['id'];	



//Näitab sisselogimis lahtrid kui kasutaja ei ole sisseloogitud
if(empty($login) and empty($password)){
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
	echo "<p class='lead'>Добро пожаловать, ".$login." | <a class='lead' href='exit.php'>Log out</a></p><br><br>
		<form action='add.php' method='POST'>
			<h1>Добовление наших работ:</h1><br>
		    <div class='col-md-4'>
			    <h4>Имя фирмы на русском языке:</h4>
			    <input name='name_rus' type='text' class='form-control' placeholder='Name'><br>
			    <textarea name='description_rus' class='form-control' rows='3' placeholder='Description'></textarea>
			</div>
		    <div class='col-md-4'>
			    <h4>Имя фирмы на эстонском языке:</h4>
			    <input name='name_est' type='text' class='form-control' placeholder='Name'><br>
			    <textarea name='description_est' class='form-control' rows='3' placeholder='Description'></textarea>
			</div>
		    <div class='col-md-4'>
			    <h4>Имя фирмы на английском языке:</h4>
			    <input name='name_eng' type='text' class='form-control' placeholder='Name'><br>
		    	<textarea name='description_eng' class='form-control' rows='3' placeholder='Description'></textarea>
			</div>
			<div class='col-md-12'>
				<br>
				<br>
				<input class='btn btn-success' type='submit' value='Добавить' name='submit'>
			</div>
			<div class='col-md-12 text-center'>
				<hr>
				<br>
				<br>
				<h3 class='text-center'>Для выбора и удаления работы, нажать тут</h3><br>
				<a class='btn btn-danger' href='delete.php'>Удаление работы</a>
			</div>
		</form>";	
} 
?>
</div>
</div>
</body>
</html>