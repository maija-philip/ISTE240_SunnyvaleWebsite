<!-- Floating Menu Nav button -->
<div class="floating-button" id="hamburger" onclick="toggleNav()"></div>

<!-- Navigation -->
<nav>
	<div class="floating-button" id="close" onclick="toggleNav()"></div>
	<a href="<?php echo $path; ?>index.php" class="floating-button" id="logo"></a>

	<ul id="nav-format">
		<li><div><a href="<?php echo $path; ?>index.php">home</a></div></li>
		<li>
			<div><a href="<?php echo $path; ?>things_to_do/index.php">things to do</a></div>
			<ul>
				<li><a href="<?php echo $path; ?>offices/index.php">Cool Offices</a></li>
				<li><a href="<?php echo $path; ?>hikes_drives/index.php">Hikes + Drives</a></li>
			</ul>
		</li>
		<li>
			<div><a href="<?php echo $path; ?>food/index.php">food</a></div>
			<ul>
				<li><a href="<?php echo $path; ?>restaurants/index.php">restaurants</a></li>
				<li><a href="<?php echo $path; ?>farmers_market/index.php">farmers market</a></li>
			</ul>
		</li>
		<li><div><a href="<?php echo $path; ?>history/index.php">history</a></div></li>
		<li><div><a href="https://people.rit.edu/~mep4741/ISTE240/project2/form.html">your feedback</a></div></li>
		<li><div><a href="<?php echo $path; ?>about/index.php">about</a></div></li>
		<li><div><a href="<?php echo $path; ?>comments/index.php">comments</a></div></li>
	</ul>

</nav>
