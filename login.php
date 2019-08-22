<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php include("server.php") ?>

<!DOCTYPE html>
<html>
	<head>
	  <title>Registration system PHP and MySQL</title>
		<link rel="stylesheet" href="themes/flat.css" />
		<link rel="stylesheet" href="themes/jquery.mobile.icons.min.css" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
<!--
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
-->
	  <link rel="stylesheet" type="text/css" href="userStyle.css">
	</head>
	<body>
		
		<div class = "container">
		
				<div class="header">
					<h2>Login</h2>
				</div>

				<form method="post" action = "register.php">
					<?php include("errors.php") ?>
					<input type="email" name="email" placeholder = "Email">
					<input data-icon = "lock" type="password" name="password" placeholder = "Password">
					<button type="submit" class="btn" name="login">Register</button>
				</form>
				<div class = "switch">
					<p>
					Don't have an account?</p><div class = "button blue"><a href="register.php">Sign Up</a></div>
				</div>
		
		
		</div>
	</body>
</html>