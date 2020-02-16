<?php include("server.php") ?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Register.php</title>
	<link rel="stylesheet" href="themes/flat.css" />
	<link rel="stylesheet" href="themes/jquery.mobile.icons.min.css" />
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
	
  <link rel="stylesheet" type="text/css" href="userStyle.css">
</head>
<body>
	
	<div class = "container">
	
		<div class="header">
			<h2>Register test</h2>
		</div>

		<form method="post" action = "register.php">
			<?php include("errors.php") ?>
			<div class="input-group">
				<label>Full Name</label>
				<input type="text" name="name">
			</div>
			<div class="input-group">
				<label>Email</label>
				<input type="email" name="email">
			</div>
			<div class="input-group">
				<label>Password</label>
				<input type="password" name="password">
			</div>
			<div class="input-group">
				<button type="submit" class="btn" name="reg_user">Register</button>
			</div>
			<?php include("msgs.php") ?> 
			
			<p>
				Already a member?</p><div class = "button blue"><a href="login.php">Log in</a></div>
		</form>
	
	
	</div>
		
</body>
</html>