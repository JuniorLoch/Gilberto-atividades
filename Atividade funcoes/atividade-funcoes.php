<?php
/*
function printNumber($num=1){
    for($i=0;$i<=$num;$i++){
        echo $i." ";
    }
    echo "<br><br>";
}

printNumber();
printNumber(125);
printNumber();
*/
function getprimos($qtd){
    $vetor = array(1,2);
    $primo =true;
    for($i=3; sizeof($vetor) <= $qtd; $i++){
        for ($j=2; $j < $i; $j++) { 
            if ($i % $j == 0){
                $primo = false;
                
            }
        }
        if ($primo == true){
            array_push($vetor,$i);
        }
        $primo = true;
    }
    var_dump($vetor);
}

getprimos(5);