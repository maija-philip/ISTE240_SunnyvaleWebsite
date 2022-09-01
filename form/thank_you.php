<?php
 $visitor  = $_POST['visitor'];
 $groupNum = $_POST['num_vis'];
 $vdate    = $_POST['vdate'];
 $place    = $_POST['fplace'];
 $rating   = $_POST['rating'];
 $destination_email = "mep4741@rit.edu, RITISTprofessor@gmail.com";
 /*
 add his email after march 2nd
 Professor email: RITISTprofessor@gmail.com
 */
$email_subject = "Sunnyvale, CA  - visitor Maija Philip";
$email_body = "Visitor name:  $visitor\n";
$email_body .= "Group Size:  $groupNum\n"; // .= means concatenate
$email_body .= "Date Visited: $vdate\n";
$email_body .= "Favorite Place: $place\n";
$email_body .= "Freeways driven on: \n";
// freeway checkboxes
if (isset($_POST['i280'])) {
    $email_body .= "\t" . $_POST['i280'] .  "\n";
}
if (isset($_POST['r101'])) {
    $email_body .= "\t" . $_POST['r101'] .  "\n";
}
if (isset($_POST['r82'])) {
    $email_body .= "\t" . $_POST['r82'] .  "\n";
}
if (isset($_POST['r85'])) {
    $email_body .= "\t" . $_POST['r85'] .  "\n";
}
if (isset($_POST['r237'])) {
    $email_body .= "\t" . $_POST['r237'] .  "\n";
}
$email_body .= "\nRating -> $rating\n";

$email_body .= "\n Updated February 2022 \n";
mail($destination_email, $email_subject, $email_body);  // worker line
echo "Data Sent\n";

?>
<!DOCTYPE html>
<html lang="en">
<!--
Maija Philip
ISTE-240
Rochester Institute of Technology
2.22.22
-->
<head>

	<!-- My Logo for the Tab -->
	<link rel="icon" type="image/png" href="../assets/images/favicon.png"/>

  <!-- My Stylesheets -->
	<link rel="stylesheet" type="text/css" href="../assets/css/styles.css">


	<!-- My Javascript -->
	<!-- for the navigation -->
	<script src="assets/js/navigation.js"></script>

	<!-- Fonts 'Roboto' -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">



	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Thank you for your feedback! | Sunnyvale</title>

</head>
<body>
	<!-- Floating Menu Nav button -->
	<div class="floating-button" id="hamburger" onclick="toggleNav()"></div>

	<!-- Navigation -->
	<nav>
		<div class="floating-button" id="close" onclick="toggleNav()"></div>
		<a href="index.html" class="floating-button" id="logo"></a>

		<ul id="nav-format">
			<li><div><a href="../index.php">home</a></div></li>
			<li>
				<div><a href="../things_to_do/index.php">things to do</a></div>
				<ul>
					<li><a href="../offices/index.php">Cool Offices</a></li>
					<li><a href="../hikes_drives/index.php">Hikes + Drives</a></li>
				</ul>
			</li>
			<li>
				<div><a href="../food/index.php">food</a></div>
				<ul>
					<li><a href="../restaurants/index.php">restaurants</a></li>
					<li><a href="../farmers_market/index.php">farmers market</a></li>
				</ul>
			</li>
			<li><div><a href="../history/index.php">history</a></div></li>
			<li><div><a href="../form/index.php">your feedback</a></div></li>
			<li><div><a href="../about/index.php">about</a></div></li>
		</ul>

	</nav>


  	<!-- Header -->
  	<header id="thanks_head">
  		<div class="tint">
  			<div class="header_text">
  				<h2 class="white">Thank you for your feedback! :)</h2>
  			</div>
  		</div>
  	</header>


    <main id="thank_you">
      <div>
        <p>We appretiate you taking time out of your day to complete our survey. Your feedback will directly help us keep track of why visitors come to Sunnyvale, CA. Thank you for sharing.
        </p>

        <!-- back home button -->
        <a href="../index.php" class="button">Go Home</a>

      </div>




    </main>


	<!-- footer -->
	<footer>
			<div class="footer_logo"></div>
			<a href="Refrences_Sunnyvale_Project.pdf" target="_blank" class="button">reference</a>
			<a href="grading.html" class="button">Grading</a>
			<p>Made by Maija Philip &copy; 2021 | ISTE 240 </p>
			<p><a href="mailto:mep4741@rit.edu">mep4741@&nbsp;rit.edu</a></p>
	</footer>


</body>
<html>
