<?php include('server.php') ?>

<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "cipStyle.css">
        <link rel = "stylesheet" type = "text/css" href = "signUpStyle.css">
        <title>Cip</title>
    </head>
    <body>

        <img height = "30px" width = "30px" src = "images/logo2.png" alt = "graphic crystal heart">
        
        <div class = "header">Log In</div>
        
        <?php include('error.php') ?>
        
        <form method = "post">
            <input name = "first_name" type = "input" id = "firstName" placeholder = "First Name">
            <input name = "last_name" type = "input" id = "lastName" placeholder = "Last Name">
            <input name = "email" type = "email" id = "email" placeholder = "email">
            <input name = "password" type = "password" id = "paswsword" placeholder = "password">
            <input type = "submit" value = "Sign Up" class = "button r formButton" name = "signUp">
        </form>
        
        <?php include('msgs.php') ?>
        
        <div class = "or"><hr><div class = "orTxt">or</div><hr></div>
        
        <div class = "button w formButton">Log In Instead</div>
        
        <div class = "navbar">
            <ul class = "navIcons">
                <li class = "navIcon"><img src = "images/icons/search-24px.svg"></li>
                <li class = "navIcon"><img src = "images/icons/home-24px.svg"></li>
                <li class = "navIcon"><img src = "images/icons/hourglass_empty-24px.svg"></li>
            </ul>
        </div>
        
    </body>
</html>