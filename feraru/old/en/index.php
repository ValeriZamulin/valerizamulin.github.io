<!doctype html>
<html>
<?php include 'head.php';?>
<body>
<section id="wrapper">
	<section id="content">
    
<!-- Logo -->
<div id="logo"><img src="../images/logo.png"/></div>  

<!-- e-mail -->
<div id="e_mail"><a href="contact.php"><img src="../images/pack.png" width="25px"/></a> info@feraru.ee</br>
<img src="../images/face.png" width="25px"/> +37258100723</div>
                
<!-- languages -->                
<div class="language">

<!-- menu -->
<?php include 'menu.php';?>  

	<div id="lang">
		<a href="../index.php"><img src="../images/est.png" alt="error picture" /></a>
		<a href="../ru/index.php"><img src="../images/rus.png" alt="error picture" /></a>
		<a href="#"><img src="../images/eng.png" alt="error picture" /></a>
    </div>
</div>

<!-- changeable pictures -->
	<div class="rotator">
				<ul>
					<li class="show">
						<img src="../images/first1.jpg" alt="error picture" />
					</li>
    				<li>
    					<img src="../images/first2.jpg" alt="error picture" />
    					</li>
    				<li>
    					<img src="../images/first3.jpg" alt="error picture" />
    				</li>
  				</ul>
			</div>
            
<!-- Down pictures -->

<div id="info1">
	<h1>Industrial<br>insulation</h1>
    <img id="info_pictures" src="../images/image5.jpg"/>
    <h3>Industrial insulation - is the main performance diraction of Feraru OÜ.<br><br></h3>
    <a id="more" href="industrial.php">MORE</a>
</div>

<div id="info2">
	<h1>Scaffolding <br><br></h1>
    <img id="info_pictures" src="../images/image4.jpg"/>
    <h3>We offer from our side installation of scaffoldings for lease or sale.<br><br></h3>
    <a id="more" href="scaffolding.php">MORE</a>
</div>
    
<div id="info3">
	<h1>Design<br>engineering</h1>
    <img id="info_pictures" src="../images/image2.jpg"/>
    <h3>Feraru OÜ Company offers the comprehensive solutions for insulation designings.<br></h3>
    <a id="more" href="design.php">MORE</a>
</div>

	</section>
			<div id="footer">
				<?php include "../footer.php";?>
			</div>
</section>

</body>
</html>