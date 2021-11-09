<?php

//veiculo.class.php

class Veiculo
{
    protected $nrodas;
    protected $npassageiros;

    public function __construct(){

    }

    public function getNRodas(){
        return $this->nrodas;
    }

    public function setNRodas($nrodas){
        $this->nrodas = $nrodas;
    }

    public function getNPassageiros(){
        return $this->npassageiros;
    }

    public function setNPassageiros($npassageiros){
        $this->npassageiros = $npassageiros;
    }
}