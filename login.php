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
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
	  <link rel="stylesheet" type="text/css" href="userStyle.css">
	</head>
	<body>
		
		<div class = "container">
		
				<div class="header">
					<h2>Login</h2>
				</div>

				<form method="post" action = "register.php">
					<?php include("errors.php") ?>
				<div class="input-group">
					<label>Email</label>
					<input type="email" name="email">
				</div>
				<div class="input-group">
					<label>Password</label>
					<input data-icon = "lock" type="password" name="password">
				</div>
				<div class="input-group">
					<button type="submit" class="btn" name="login">Register</button>
				</div>
				<p>
					Don't have an account? <a href="register.php">Sign Up</a>
				</p>
				</form>
		
		
		</div>
	</body>
</html>