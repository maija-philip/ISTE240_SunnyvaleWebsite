
	<!-- footer -->
	<footer>
			<div class="footer_logo"></div>
			<a href="<?php echo $path; ?>Refrences_Sunnyvale_Project.pdf" target="_blank" class="button">reference</a>
			<a href="<?php echo $path; ?>grading/index.php" class="button">Grading</a>
			<p>Made by Maija Philip &copy; 2021 | ISTE 240 </p>
			<p><a href="mailto:mep4741@rit.edu">mep4741@&nbsp;rit.edu</a></p>
			<!-- get date -->
			<?php
			$filename = 'index.php' ;
			if (file_exists($filename)) {
			    echo "<p id=\"lastModified\">Updated on: " . date ("l, F d, Y h:ia", filemtime($filename)) . "</p>";
			}
			?>
	</footer>

</body>
</html>
