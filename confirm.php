<?php

//check if email and hash both match a row in db

$db = new mysqli('localhost', 'root', '', 'cip') or die("Failed to connect");

$hash = $_GET['hash'];
$email = $_GET['email'];

$query = "SELECT * FROM Users WHERE hash = '$hash' AND email = '$email'";

$result = mysqli_query($db, $query);
$num_rows = mysqli_num_rows($result);
if($num_rows > 0) {
    
    $query = "UPDATE Users SET active = 1 WHERE email = '$email'";
    if(mysqli_query($db, $query)) {
        echo "active now";
        $_SESSION['email'] = $email;
        header("location: home.php");
    } else {
        echo "active query failed";
    }
    
} else {
    echo "something went wrong with your confirmation. Ensure you're connected to the internet and try again";
}

//if so start a session using email and take them to home page

?>