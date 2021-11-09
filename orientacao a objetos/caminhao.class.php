<?php

//caminhao.class.php

include_once("veiculo.class.php");

class Caminhao extends Veiculo{
    protected $carga;
    public function __construct(){

    }

    public function setCarga($carga){
        $this->carga = $carga;
    }

    public function getCarga(){
        return $this->carga;
    }

    public function show(){
        echo "<p><b>Caminhao</b></p> <p>Numero de rodas: ".$this->nrodas."</p>   <p>Numero de passageiros: ".$this->npassageiros."</p> <p>Levando a carga de: ".$this->carga."</p>";
    }

}