<?php

class Test{
    private $id;
    private $nome;

    public function __construct()
    {
        $this->id = 1;
        $this->nome = "teste";
    }

    public function getAttr($attr){
        return $this->{$attr};
    }
}

$test = new Test();
echo $test->getAttr('nome');