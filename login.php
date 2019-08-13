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
	  <link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
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
		  <input type="password" name="password">
		</div>
		<div class="input-group">
		  <button type="submit" class="btn" name="login">Register</button>
		</div>
		<p>
			Don't have an account? <a href="register.php">Sign Up</a>
		</p>
		</form>
	</body>
</html>