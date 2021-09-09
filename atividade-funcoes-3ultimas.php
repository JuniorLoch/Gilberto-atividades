<?php

    function valorPerfeito($num){
        $soma = 0;
        for ($i=1; $i < $num; $i++) { 
            if($num % $i == 0){
                $soma += $i;
            }
        }

        if ($soma == $num) {
            echo "<br> é perfeito <br>";
            return $num;
        } else {
            echo "<br> nao é perfeito <br>";
            return 0;
        }
    }

    echo valorPerfeito(28);

    function pesoIdeal($alt,$sexo){
        $pesoI = 0;
        switch($sexo){
            case "M":
                $pesoI = 72.7 * $alt - 58;
            break;
            case "F":
                $pesoI = 62.1 * $alt - 44.7;
            break;
            default:
                echo "sexo inválido";
            break;
        }
        return $pesoI;
    }
    echo "<br><br>";
    echo pesoIdeal(1.7,"M");

    function Fatorial($num){
        $fat = 1;
        for ($i=1; $i <= $num; $i++) { 
            $fat *= $i;
        }
        return $fat;
    }

    echo "<br><br>";
    echo Fatorial(5);

?>