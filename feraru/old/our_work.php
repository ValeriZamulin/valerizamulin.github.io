<!doctype html>
<html>
<?php include 'admin/bd.php';?>
<?php include 'head.php';?>
<body>
<section id="wrapper3">
	<section id="content">
    
<!-- Logo -->
<div id="logo"><img src="images/logo.png"/></div>  

<!-- e-mail -->
<div id="e_mail"><a href="contact.php"><img src="images/pack.png" width="25px"/></a> info@feraru.ee</br>
<img src="images/face.png" width="25px"/> +37258100723</div>
                
<!-- languages -->                
<div class="language">

<!-- menu -->
<?php include 'menu.php';?>  

	<div id="lang">
		<a href="#"><img src="images/est.png" alt="error picture" /></a>
		<a href="ru/our_work.php"><img src="images/rus.png" alt="error picture" /></a>
		<a href="en/our_work.php"><img src="images/eng.png" alt="error picture" /></a>
    </div>
</div>

<!-- content form -->
<div id="small_content">
<h1>Meie tehtud tööd:</h1>
<?php      

$lugeja= 1;
do {
// SQL-taotlus
$strSQL = "SELECT * FROM work WHERE id ='$lugeja'";
// Teostab taotlust kus $rs sisaldab tulemust
$rs = mysql_query($strSQL);
$row = mysql_fetch_array($rs);
//Näitab kõik read andmebaasist iga tööotsija kohta
echo $row['est'];
$lugeja= $lugeja+1;
}
while ($lugeja < 300);
?>
<div id="footer2">
				<?php include "footer.php";?>
			</div>
</div>

	</section>
			
</section>

</body>
</html>