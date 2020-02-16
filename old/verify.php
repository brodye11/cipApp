<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>

<?php

$verified = false;
$errors = array();

$given_hash = $_GET['hash'];
$email = $_GET['email'];
//working

$db = mysqli_connect('64.20.45.186', 'cipappwe_brodie', 'Doublerainbow11', 'cipappwe_db');
$query = "SELECT * FROM users WHERE email = '$email' AND hash = '$given_hash'";
$q = mysqli_query($db, $query);

$result = mysqli_num_rows($q);

//check if there's a match using num_rows

//if so account is verified

if ($result > 0) {
	$_SESSION['email'] = $email;
	$_SESSION['success'] = "You're now logged in";
	$verified = true;
}

?>

<html>
	<head>
		<title>Verify</title>
	</head>
	<body>
		<h1>Verify your email</h1>
		
		<?php if($verified == true) : ?>
			<p>
				Email verified successfully :) Click here to navigate to start filling in your details:
				<a href = "index.php#login">Details</a>
			</p>
		<?php else: ?>
			<p>Sorry, verification failed. Please try again later</p>
		<?php endif; ?>
		
		
		<?php 
//		if($verified == true) {
//			echo "<p>Email verified successfully :) Click here to navigate to start filling in your details: <a href = 'index.php#login'>Details</a></p>";
//		} else {
//			echo "<p>Verification failed :( Please try again later.</p>";
//		}
//		include('errors.php');
		?>
		<?php include('errors.php') ?>
	</body>
</html>