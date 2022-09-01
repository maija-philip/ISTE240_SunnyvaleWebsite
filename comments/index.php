<?php
	$page='Comments';
	$path='./../';
	require $path.'../../../dbConnect.inc';

	if ($mysqli) {
		// code...
		if (!empty($_POST['name']) && !empty($_POST['comment'])) {
			// code...
			/* we are using client entered data - therefore HAVE to sue prepaired statement

				1) prepare my query
				2) bind
				3) execute
				4) close
			*/

			// this statement gets put into machine language, but ? can't be put into machine
			$stmt=$mysqli->prepare("insert into comments (name, comment) values (?, ?)");
			// the question marks are where the data will be
				// id and date auto put in
			// -> is using prepare method of $mysqli object


			$stmt->bind_param("ss",$_POST['name'], $_POST['comment']);
			// "ss" is type of name and comment, both strings so ss
				//bind param will clense of html injections and place where ? are in above

			$stmt->execute();
			$stmt->close();

		} // end of not empty

		// get contents of table and send back...
		$sql = 'SELECT name, comment, lastModifiedDate FROM comments';
		$res = $mysqli->query($sql); // runs query
		if ($res)  { //checking for not null
			// code...
			while ($rowHolder = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
				//$rowHolder['name'] $rowHolder['comment']
				$records[] = $rowHolder; // $records[0]['name']['comment']
			}
			// var_dump($records) //use to debug while loop. displays table comments
		}
	}

	require ($path.'assets/inc/header.php');



?>

<?php
	include($path.'assets/inc/nav.php');
?>
	<main id="comments">

    <!-- list of comments -->
    <h2>Comment section</h2>
    <div id="list">
      <ul>
				<?php
					foreach($records as $this_row){
						echo '<li><span class="name">'.$this_row['name'] . ":</span> " . $this_row['comment'] . ' <span class="date">' . $this_row['lastModifiedDate'] . '</span></li>';
					} // end of foreach loop
				?>
      </ul>
    </div>

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
