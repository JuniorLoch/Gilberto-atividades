<?php 
    include("carro.class.php");
    include("caminhao.class.php");

    $peugeot = new Carro();
    $scania = new Caminhao();

    $peugeot->setNRodas(6);
    $peugeot->setNPassageiros(7);
    $peugeot->setTipo("offroad");

    $scania->setNPassageiros(3);
    $scania->setNRodas(500);
    $scania->setCarga("rodas");

    $peugeot->show();
    $scania->show();
?>