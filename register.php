<?php include("server.php") ?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php header('location:index.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<title>Register.php</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
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
  	<p>
  		Already a member? <a href="login.php">Log in</a>
  	</p>
  </form>
		
</body>
</html>