<?php
 header("Access-Control-Allow-Origin: *");

?>
<!DOCTYPE html>
<html lang="en">

<head>
   <style>
       #map {
         min-height:500px;
        width: 100%;
       }
       #info_source {
           color: brown;
           font-family: fantasy;
       }
    </style>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>MapMyNews</title>

  <!-- Bootstrap core CSS -->

  <link href="css/bootstrap.min.css" rel="stylesheet">

  <link href="fonts/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/animate.min.css" rel="stylesheet">

  <!-- Custom styling plus plugins -->
  <link href="css/custom.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/maps/jquery-jvectormap-2.0.3.css" />
  <link href="css/icheck/flat/green.css" rel="stylesheet" />
  <link href="css/floatexamples.css" rel="stylesheet" type="text/css" />
  

  <script src="js/jquery.min.js"></script>
  <script src="js/nprogress.js"></script>
  <script src="js/constants.js"></script>
  
  <!-- Scrolling Nav JavaScript -->
   <script src="js/jquery.easing.min.js"></script>
   <script src="js/scrolling-nav.js"></script>
   
 
 

  <!--[if lt IE 9]>
        <script src="../assets/js/ie8-responsive-file-warning.js"></script>
        <![endif]-->

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>


<body class="nav-md">

    <div class="container body">


		<div class="main_container">

		  <?php  require_once('inc/left_menu.php'); ?>

		  <!-- top navigation -->
		   <?php  require_once('inc/top_navigation.php'); ?>
		  <!-- /top navigation -->

		  <!-- page content -->
			<div class="right_col" role="main" id="mainContainer">
			    <input type="hidden" id="lat" value="<?php echo $_GET['lat'];?>">
				<input type="hidden" id="lon" value="<?php echo $_GET['lon'];?>">
				<?php  require_once('inc/maps.php'); ?>
				
				<?php  require_once('inc/pop_up_model.php'); ?>
			  
				<?php  require_once('inc/date_popup_model.php'); ?>
				
				<?php  require_once('inc/category_popup_model.php'); ?>
						
				<br>
							
				
			</div>
			
		</div>
	</div>
	
	<a id="back-to-top" href="#" 
	      class="btn btn-primary btn-lg back-to-top" 
		  role="button" 
		  title="Back to Top" 
		  data-toggle="tooltip" 
		  data-placement="top">
        <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
	 
	  
    <!-- /page content -->
    <link rel="stylesheet" href="css/jquerydateui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- bootstrap progress js -->
    <script src="js/progressbar/bootstrap-progressbar.min.js"></script>
    <script src="js/datepicker/daterangepicker.js"></script>
    <script src="js/custom.js"></script>
    <!-- chart js -->
    <script src="js/chartjs/dist/Chart.bundle.js">
     //Custom Label Fun Part  
    </script>
   
   
    <script src="js/mycustom_script.js"></script>


     <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4jzRaaDIhgtHTEBtGkMCxQ4GkL1apVhI&callback=initMap">
    </script>
 
<!-- Back to Top -->
  <script type="text/javascript">
  
	$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

      });
	  
	  $(document).ready(function()
		{
			  
		  $('#infomodal').modal({ show: false});
		  $('#datemodal').modal({show: false});
		  $('#categorymodal').modal({show: false});
			

		}); 
  </script>
<!-- Page Scroll --> 

  
</body>
</html>
