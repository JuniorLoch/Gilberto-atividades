<?php

include "Model/Produto.php";
use App\Model\Produto;

$dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "500");
$p = new Produto($dados);

$p->salvar();

$result = $this->p->listar();

var_dump($result);
