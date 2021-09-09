<?php
    function potencia($base,$expoente){
        $result = 1;
        for ($i=0;$i<$expoente;$i++) { 
            $result *= $base;
        }
        return $result;
    }
    echo potencia(3,0);

?>

<?php
    echo "<br>";
    echo "<br>";

    function ordenar($arr){
        if(is_array($arr) == true){
            for($index = 1;$index < sizeof($arr);$index++){
                $num = $arr[$index];
                $posicao = $index-1;
                while ($posicao >= 0 && $arr[$posicao] > $num){
                    $arr[$posicao+1] = $arr[$posicao];
                    $posicao--;
                }
                $arr[$posicao+1] = $num;
            }
            print_r($arr);
        } else {
            return "NAO É UM VETOR COMO VOCE ESPERA ORDENAR UM VETOR E NAO PASSA UM VETOR";
        }
    }

    $vet = array(9,4,6,8,14,36,58,78,6);

    echo ordenar($vet);
?>



<?php
    echo "<br>";
    echo "<br>";

    function divisores($num){
        $arr = array();
        for ($i=1; $i < $num; $i++) { 
            if($num % $i == 0){
                array_push($arr,$i);
            }
        }
        print_r($arr);
    }

    divisores(38);

?>

<?php
    echo "<br>";
    echo "<br>";

    function parimpar($num){
        if($num % 2 == 0){
            return 1;
        } else {
            return 0;
        }
    }


    echo parimpar(8);
?>