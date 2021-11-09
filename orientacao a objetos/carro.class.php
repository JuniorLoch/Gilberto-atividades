<?php

//carro.class.php

include_once("veiculo.class.php");

class Carro extends Veiculo{
    protected $tipocarro;
    public function __construct(){

    }

    public function setTipo($tipocarro){
        $this->tipocarro = $tipocarro;
    }

    public function getTipo(){
        return $this->tipocarro;
    }

    public function show(){
        echo "<p><b>Carro</b></p> <p>Numero de rodas: ".$this->nrodas."</p>   <p>Numero de passageiros: ".$this->npassageiros."</p> <p>De tipo: ".$this->tipocarro."</p>";
    }

}

