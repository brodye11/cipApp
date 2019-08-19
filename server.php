<?php 

session_start();

// REGISTER - - - - - - - 

if($db = mysqli_connect('64.20.45.186', 'cipappwe_brodie', 'Doublerainbow11', 'cipappwe_db')) { // if doesn't work check if statments
	
	//escape these

	if (isset($_POST['reg_user'])) {
		
		$name = mysqli_real_escape_string($db, $_POST['name']);
		$email = mysqli_real_escape_string($db, $_POST['email']);
		$password = mysqli_real_escape_string($db, $_POST['password']);
		$errors = array();

		// make appropriate checks eg. is password entered, does email contain @. If not append
		
		if (empty($name)) {
			array_push($errors, "Name can't be empty");
		}
		
		if (empty($email)) {
			array_push($errors, "Email can't be empty");
		}
		
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			 array_push($errors, "Email must follow: aaa@a.co...");
		}
		
		if (empty($password)) {
			array_push($errors, "Password can't be empty");
		}

		// check that errors.length 0
		
		// - - - - - - - - - -- - - - - - - - - - - - - - - put email exists test above insert query and md6
		
		$query = "SELECT * FROM users WHERE email = '$email'";
			
		$result = mysqli_query($db, $query);

		// do this by splitting query + connect into an array thing $user = mysqli_fetch_assoc($result);

		$user = mysqli_fetch_assoc($result);

		// check whether email or username are taken and add appropriate errors

		if ($email == $user['email']) {
			array_push($errors, "Email is already in use");
		}
		
		if (count($errors) == 0) {
			
			// create query selecting users email
			//proceed to check whether the either email already exists
			
			// if aren't taken:

			// if so errorlength 0 count()

			// md5 password

				//add desired sessions

			$password = md5($password);

			$query = "INSERT INTO users (name, email, password)
				  VALUES('$name', '$email', '$password')";
			mysqli_query($db, $query);
			
			$_SESSION['email'] = $email;
			$_SESSION['success'] = "You're now logged in";
			header('location: index.php');
			
		}

	}
	
	//LOGIN - - - - - 

	if(isset($_POST['login'])){

		//escape these

		$email = mysqli_real_escape_string($db, $_POST['email']);
		$password = mysqli_real_escape_string($db, $_POST['password']);
		$errors = array();

		// make appropriate checks eg. is password entered, does email contain @. If not append

		if (empty($email)) {
			array_push($errors, "Email field is empty");
		}

		if (empty($password)) {
			array_push($errors, "Password field is empty");
		}

		// check that errors.length 0

		if(count($errors) == 0) {

			$password = md5($password);

			$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
			$result = mysqli_query($db, $query);

			// my_sqli_num_rows() 1 then set sessions and change header

			if (mysqli_num_rows($result) == 1) {

				$_SESSION['email'] = $email;
				$_SESSION['success'] = "You're now logged in:)";

				header('location: index.php');

			} else {
				array_push($errors, "Wrong email/password combination");
			}

			// query select from users email and password



			// else errors append incorrect combination

		}


	}

} else {
	array_push($error, "I'm sorry, we failed to connect to the database :(");
}



	
?>