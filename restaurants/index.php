<?php
	$page='Restaurants';
	$path='./../';
	require ($path.'assets/inc/header.php');
?>

<?php
	include($path.'assets/inc/nav.php');
?>
	<!--<h1>Home page stuff...</h1>
	<div>(eventually, each page will be some includes and a db call only!)</div>-->
	<?php

require $path.'../../../dbConnect.inc';
		$sql = "SELECT content FROM modularSite where page='$page'";
		// selects the content section from the page requested
		$result = $mysqli->query($sql);
		// results is a pointer
		// query populates num_rows by itself

		if($result->num_rows > 0){
			//output the data for each row
			while ($row = $result->FETCH_ASSOC()) {
				// $row becaomes associate array, fill the row with $results pointer
				echo $row['content'];
			}
		}else{
			echo "0 results, did something wrong!";
		}
	?>
<?php
    require($path.'assets/inc/footer.php');
     mysqli_close($mysqli);

?>
