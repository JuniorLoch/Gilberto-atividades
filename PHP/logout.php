<?php
session_start();
session_unset();
session_destroy();
header("loginsessão.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
<nav class="red" role="navigation">
    <div class="nav-wrapper container ">
        <a id="logo-container" href="loginsessão.php" class="brand-logo">Login</a>
    </div>
</nav>
<div class="center card panel red lighten-1 section hoverable" style ="padding: 10px;">
    bom dia
</div>
</body>
</html>