<?php

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
        <a id="logo-container" href="" class="brand-logo">Login massa</a>
    </div>
</nav>
<br><br><br><br>
<div class="container">
    <div class="container">
        <div class="center col card panel red section hoverable" style ="padding: 30px;">
            <form id="formulario" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <div class="row input-field">
                    <p class="white-text" style ="font-weight: 600;">Altura</p>
                    <input placeholder="altura" id="altura" name="altura" type="text" class="col s6 offset-s3 validate row center-align">
                </div>
                <div class="row input-field">
                    <p class="white-text" style ="font-weight: 600;">Peso</p>
                    <input placeholder="peso" id="peso" name="peso" type="text" class="col s6 offset-s3 validate row center-align">
                </div>
                <div class="row input-field">
                    <a id="calcular" class="waves-effect waves-light btn right">Calcular</a>
                </div>
                <div class="row">
                <?php
                    if(isset($_REQUEST["peso"]) && isset($_REQUEST["altura"]) && $_SERVER["REQUEST_METHOD"] === "POST"){
                        $peso = $_POST["peso"];
                        $altura = $_POST["altura"];
                        if($peso != "" && $altura != ""){
                            $imc = $peso/pow($altura,2);
                        } else {
                            $imc = 0;
                        }
                            
                        
                        if($imc < 18.5)
                            echo '<p id="imc" class="white-text" style ="font-weight: 600;">'.$imc.'  magreza</p>';
                        if($imc > 18.5 && $imc < 24.9)
                            echo '<p id="imc" class="white-text" style ="font-weight: 600;">'.$imc.'  normal</p>';
                        if($imc > 25 && $imc < 29.9)
                            echo '<p id="imc" class="white-text" style ="font-weight: 600;">'.$imc.'  sobrepeso</p>';
                        if($imc > 30 && $imc < 39.9)
                            echo '<p id="imc" class="white-text" style ="font-weight: 600;">'.$imc.'  gordo pra krl</p>';
                        if($imc > 40)
                            echo '<p id="imc" class="white-text" style ="font-weight: 600;">'.$imc.'  gordasso</p>';
                    }
                    
                ?> 
                </div>
            </form>
        </div>
    </div>
</div>
    

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script>
            $(function() {
                $("#calcular").click(function() {
                    $("#formulario").submit();

                });
            });
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</body>
</html>