<?php

include_once("Banco.php");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $tabela = filter_input(INPUT_GET, "tabela", FILTER_SANITIZE_SPECIAL_CHARS);
    $coluna = filter_input(INPUT_GET, "coluna", FILTER_SANITIZE_SPECIAL_CHARS);
    $valor = filter_input(INPUT_GET, "valor", FILTER_SANITIZE_SPECIAL_CHARS);
    $novovalor =  filter_input(INPUT_GET, "novovalor", FILTER_SANITIZE_SPECIAL_CHARS);
}

echo "<h1>Valor antigo ". $valor." </h1>";

$sql = "SELECT * FROM $tabela WHERE $coluna='$valor'";

$result = $conexao->query($sql);
$arr = [];
$cont = 0;
if ($result) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $arr[$cont++] = $row;
        }
    }
}
echo json_encode($arr);

$sql = "UPDATE $tabela SET $coluna = '$novovalor' WHERE $coluna = '$valor'";

$conexao->query($sql);

echo "<h1>Valor novo ". $novovalor." </h1>";

$sql = "SELECT * FROM $tabela ";
$sql .= $coluna != "" ? "WHERE $coluna='$novovalor'" : "";

$result = $conexao->query($sql);
$arr = [];
$cont = 0;
if ($result) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $arr[$cont++] = $row;
        }
    }
}
echo json_encode($arr);