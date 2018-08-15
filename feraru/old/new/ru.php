
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="images/tab.png">

    <title>FERARU</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"> 

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="css/carousel.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
    <body>
    <div class="navbar-wrapper">
      <div class="container">
        <nav class="navbar-inverse navbar-fixed-top">
          <div class="container"> 
            <a class="navbar-brand" href="#"><img id="logo" src="images/logo2.png"></a>
            <div class="navbar-header">              
              <button type="button" class="navbar-toggle
               collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul id="menu" class="nav navbar-nav navbar-right">
                <li><a href="#services">Услуги</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#contact">Контакт</a></li>
                <!-- Languages -->
                <li id="lang">
                  <a href="index.php"><img src="images/est.png"></a>
                  <a href="#"><img src="images/rus.png"></a>
                  <a href="en.php"><img src="images/eng.png"></a>
                </li>
                <!-- End Languages -->
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active" id="first_slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Промышленная изоляция</h1>
              <p>Мы предоставляем различные услуги в области изоляции</p>
              <p><a class="btn btn-lg btn-primary" href="#industrial_insulation" role="button">Больше</a></p>
            </div>
          </div>
        </div>
        <div class="item" id="second_slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Строительные леса</h1>
              <p>Строительные леса — временные сооружения из дерева или металла</p>
              <p><a class="btn btn-lg btn-primary" href="#Scaffolding" role="button">Больше</a></p>
            </div>
          </div>
        </div>
        <div class="item" id="third_slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Проектирование</h1>
              <p>Индивидуальное проектирование технической изоляции котлов, фильтров, каналов, трубопроводов и оборудования</p>
              <p><a class="btn btn-lg btn-primary" href="#Design_engineering" role="button">Больше</a></p>
            </div>
          </div>
        </div>
        <div class="item" id="fourth_slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Демонтаж асбеста</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#Asbestos_removal" role="button">Больше</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
    <a name="services"></a>
    <div class="container marketing">
      <!-- START THE FEATURETTES -->
      <h3 id="h3_title">Услуги</h3>
      <!-- For Navigation -->
      <a name="industrial_insulation"></a>
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Промышленная <span class="text-muted">изоляция</span></h2>
          <p class="lead">Мы предоставляем различные услуги в области изоляции, например, услуги, связанные с тепло-, звуковой-, противопожарной изоляцией, для которой используются специальные высококачественные материалы, обеспечивающие высокое качество и долговечность работ. Производим техническую изоляцию котлов, фильтров, каналов, трубопроводов и оборудования.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="images/serv1.jpg" alt="Generic placeholder image">
        </div>
      </div>
      <!-- For Navigation -->
      <a name="Scaffolding"></a>
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">Строительные <span class="text-muted">леса</span></h2>
          <p class="lead">Строительные леса — временные сооружения из дерева или металла, используются для проведения ремонтных, строительно-монтажных, отделочных, внутренних и внешних работ с помещением по всей Эстонии.  При применении таких лесов возможна одновременная занятость нескольких мастеров, что способствует сокращению сроков, снижению расходов и облегчению контроля над выполнением работ. Мы предлагаем со своей стороны установку лесов в аренду, а также есть возможность выкупить.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" src="images/serv2.jpg" alt="Generic placeholder image">
        </div>
      </div>
      <!-- For Navigation -->
      <a name="Design_engineering"></a>
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Проектирование</h2>
          <p class="lead">Наша компания осуществляет индивидуальное проектирование технической изоляции котлов, фильтров, каналов, трубопроводов и оборудования. Проектирование осуществляется на основании технического задания, архитектурных чертежей и дизайн-проектов объекта.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="images/serv3.jpg" alt="Generic placeholder image">
        </div>
      </div>
      <!-- For Navigation -->
      <a name="Asbestos_removal"></a>
      <hr class="featurette-divider">      
      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">Демонтаж <span class="text-muted">асбеста </span></h2>
          <p class="lead">Scaffolding - temporary constructions of wood or metal, used to carry out repair, construction and installation, finishing, internal and external works with a premise all over Estonia. When using such scaffolds is possible simultaneously, employ multiple masters, which contributes to reduce the deadlines, reduce costs and alleviate control over performance of works. We offer from our side installation of scaffoldings for lease or sale.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" src="images/serv4.jpg" alt="Generic placeholder image">
        </div>
      </div>
      <a name="about"></a>
      <hr class="featurette-divider">
      <!-- /END THE FEATURETTES -->
    </div><!-- /.container -->
    <!-- About -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <!--  About  -->
          <h3 id="h3_title2">О нас</h3>
          <p class="lead">Мы стремительно развивающееся предприятие, которое основано было в 2015 году. В своей работе мы используем только качественные и сертифицированные материалы.
          <br>
          Все работы по изоляции мы осуществляем своими силами. Нашими специалистами предоставляется полная техническая поддержка, включающая в себя разнообразные варианты технических решений. 
          <br>
          Коллектив компании состоит из высококвалифицированных специалистов, а также руководящего состава с техническим образованием.
          <br>
          Мы проконсультируем вас, сформируем для вас оптимальное предложение и самые выгодные условия.</p>
        </div>
      </div>
    </div>
    <!-- End about -->
    <br>
    <br>
    <!-- Partners -->
    <div class="container-fluid">
      <div class="row" id="partners">
        <h3 id="h3_title2">Наши партнёры</h3>
          <div class="col-md-4">
            <img src="images/vkg_logo.png" class="center-block">
          </div>
          <div class="col-md-4">
            <img src="images/bhg_logo.png" class="center-block">
          </div>
          <div class="col-md-4">
            <img src="images/ramirent_logo.png" class="center-block">
          </div>
      </div>
    </div>
    <!-- End Partners -->
    <br>
    <br>
    <div class="container">
    <!-- Our Works -->
    <div class="row">
    <h3 id="h3_title2">Выполненная работа</h3>
    <?php
        $servername = "mysql.hostinger.ee";
        $username = "u221157496_ferar";
        $password = "Zaqzaq12";
        $dbname = "u221157496_ferar";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "SELECT rus_name, rus_description FROM works";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                echo "<div class='col-md-4'><h4 class='lead title'>" . $row["rus_name"] . "</h4><h5 class='lead'>" . $row["rus_description"] . "</h5></div>";
            }
        } else {
            echo "";
        }

        mysqli_close($conn);
    ?>
    </div>
    
    <!-- End Our Works -->
    <!-- Contact -->
    <a name="contact"></a>
    <hr class="featurette-divider">
      <div class="row">
        <div class="col-md-6">
          <h3 id="h3_title2">Обратная связь</h3><br>
          <form method="POST" class="form-horizontal">
            <?php
              if (isset ($_POST['messageFF'])) {
                mail ("valeri.zamulin@gmail.com",
                      "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
                      "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
                echo ("<script type='text/javascript'>alert('Ваше сообщение отправленно!');</script>");}
            ?>
            <div class="form-group">
              <div class="col-sm-12">
                <input required name="nameFF" type="text" class="form-control" placeholder="Имя">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <input required name="contactFF" type="email" class="form-control" id="inputEmail3" placeholder="Э-почта">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <textarea required name="messageFF" class="form-control" rows="6" placeholder="Ваше сообщение"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <button type="submit" class="btn btn-default" id="send">Послать</button>
              </div>
            </div>
          </form>
          <br>
        </div>
        <div class="col-md-6">
          <h3 id="h3_title2">Контакт</h3>
          <br>
          <h4 class="text-center lead">Телефон: +37258100723</h4>
          <h4 class="text-center lead">Э-почта: info@feraru.ee</h4>
        </div>
      </div>
      <!-- End Contact -->
    </div>
    <!-- FOOTER -->
    <div class="container-fluid" id="footer">
      <div class="row">
        <footer>
          <p class="pull-right"><a href="#">В начало &nbsp</a></p>
          <p class="text-center">Copyright&copy 2016 Feraru OÜ</p>
        </footer>
      </div>
    </div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="js/min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
