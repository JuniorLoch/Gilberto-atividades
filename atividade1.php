<?php
//funcao que retorna o menor numero
function menorNumero($x,$y){
    if ($x < $y){
        return $x;
    } else {
        return $y;
    }
}

echo menorNumero(25,5);
echo "<br><br><br>";
?>
//-------------------------------------------------
<?php
echo "<br><br><br>";
//Escreva uma função que calcule e retorne a distância entre dois pontos (x1,y1) e (x2,y2).
function distancia($x1,$y1,$x2,$y2){
    $result = sqrt((pow($x2-$x1,2))+(pow($y2-$y1,2)));
    return $result;
}

echo distancia(-2,-2,-4,-4);
echo "<br><br><br>";
?>
//-------------------------------------------------
<?php
echo "<br><br><br>";

//Escreva uma função que receba 3 notas de um aluno e uma letra. Se a letra for A a função 
//retorna a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2) 
//e se for H, a sua média harmônica.

function medias($nota1,$nota2,$nota3,$letra){
    switch($letra){
        case "A":
            return ($nota1 + $nota2 + $nota3)/3;
        break;
        case "P":
            return (($nota1*0.5) + ($nota2*0.3) + ($nota3*0.2))/3;
        break;
        case "H":
            return 3/(1/$nota1 + 1/$nota2 + 1/$nota3);
        break;
        default:
            return $char = "letra inválida digita certo krl";
        break;
    }
}

echo medias(8,6,4,"A");
echo "<br>";
echo medias(8,6,4,"P");
echo "<br>";
echo medias(8,6,4,"H");
echo "<br>";
echo medias(8,6,4,"G");
echo "<br>";