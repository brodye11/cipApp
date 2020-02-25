<?php include('server.php') ?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "cipStyle.css">
        <link rel = "stylesheet" type = "text/css" href = "logInStyle.css">
        <title>Cip</title>
    </head>
    <body>

        <img src = "images/logo2.png" alt = "graphic crystal heart">
        
        <div class = "header">Log In</div>
        
        <form method = "post">
            <input type = "email" id = "email" placeholder = "email">
            <input type = "password" id = "paswsword" placeholder = "password">
            <input type = "submit" value = "Log In" class = "button r formButton">
        </form>
        
        <div class = "or"><hr><div class = "orTxt">or</div><hr></div>
        
        <div class = "button w formButton"><a href = "sign_up.php">Sign Up Instead</a></div>
        
        <div class = "navbar">
            <ul class = "navIcons">
                <li class = "navIcon"><img src = "images/icons/search-24px.svg"></li>
                <li class = "navIcon"><img src = "images/icons/home-24px.svg"></li>
                <li class = "navIcon"><img src = "images/icons/hourglass_empty-24px.svg"></li>
            </ul>
        </div>
        
    </body>
</html>