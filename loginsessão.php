<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://sm.ign.com/ign_br/screenshot/default/screenshot_f1tc.png" type="image/x-icon">
    
    <title>Tela de login</title>
</head>
<body>
<nav class="red" role="navigation">
    <div class="nav-wrapper container ">
        <a id="logo-container" href="" class="brand-logo">Login</a>
    </div>
</nav>
<br><br><br><br>
<?php
        if (isset($_SESSION["Login"]) && $_SESSION["Login"] == "bomdia") {
            echo '
                <div class="center card panel red lighten-1 section hoverable" style ="padding: 10px;">   
                <div class="row">
                    <a class="white-text" href="bom dia" style=" font-weight: 500; font-size: 30px; ">bom dia</a>
                </div>
                <div class="row">
                    <a><img class="responsive-img" width="800" src="https://i.redd.it/m1id6n66zx431.jpg"></a>
                </div>
                <div class="row">
                    <a class="white-text red btn" id="Sair" href="logout.php" style=" font-weight: 500; font-size: 20px; ">Sair</a>
                </div>
                </div>
            ';
        } else {
            echo '<div class="container">
            <div class="container">
                <div class="center col card panel red section hoverable" style ="padding: 30px;">
                    <form id="formulario" method="POST" action="'.$_SERVER["PHP_SELF"].'">
                        <div class="row input-field">
                            <p class="white-text" style ="font-weight: 600;">Login</p>
                            <input  id="Login" name="Login" type="text" class="col s6 offset-s3 validate row center-align">
                        </div>
                        <div class="row input-field">
                            <p class="white-text" style ="font-weight: 600;">Senha</p>
                            <input  id="Senha" name="Senha" type="password" class="col s6 offset-s3 validate row center-align">
                        </div>
                        <div class="row input-field">
                            <a id="Entrar" class="waves-effect waves-light btn right">Entrar</a>
                        </div>
                        <div class="row">
                        
                        </div>
                    </form>
                </div>
            </div>
            </div>';
        }
        
?>
<?php
    if(isset($_REQUEST["Login"]) && isset($_REQUEST["Senha"]) && $_SERVER["REQUEST_METHOD"] === "POST"){
        $login = $_POST["Login"];
        $senha = $_POST["Senha"];
        if ($login == "bomdia" && $senha == "bomdia") {
            $_SESSION["Login"] = "bomdia";
        }

    }
?> 

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script>
            $(function() {
                $("#Entrar").click(function() {
                    $("#formulario").submit();
                });
            });
            $(function() {
                $("#Sair").click(function() {
                    
                });
            });
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</body>
</html>