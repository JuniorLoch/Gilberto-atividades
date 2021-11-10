<?php
// src/produto classe de produto
// metodos getters e setters + CRUD banco de dados
namespace App;

use mysqli;

use function PHPUnit\Framework\isNull;

class Produto {
    private $id;
    private $nome;
    private $pesoLiq;
    private $marca;
    private $valor;

    private $conexaoBD;

    public function __construct($dados)
    {
        $this->conectaBD();

        if(is_array($dados) && !is_null($dados)){ // o $dados deve possuir esses campos
            $this->id = $dados["id"];
            $this->nome = $dados["nome"];
            $this->pesoLiq = $dados["pesoLiq"];
            $this->marca = $dados["marca"];
            $this->valor = $dados["valor"];
        }
    }

    // a fazer: salvar, editar, remover e listar

    public function salvar(){
        $sql = $this->conexaoBD->prepare("INSERT INTO produto (nome,pesoliq,marca,valor) VALUES (?,?,?,?)");
        $sql->bind_param("sfsf",$this->nome,$this->pesoLiq,$this->marca,$this->valor);

        $sql->execute();
    }

    public function editar($coluna,$dados){
        if(isNull($dados) && !isNull($coluna) && is_string($coluna)){
            $sql = $this->conexaoBD->prepare("UPDATE produto SET ".$coluna." = ? WHERE id = ?");
            $sql->bind_param("si",$this->valor/*($coluna)*/,$this->id); // como fazer isso funcionar 

            $sql->execute();
        }
        if(!isNull($dados) && is_array($dados)){
            $sql = $this->conexaoBD->prepare("UPDATE produto SET nome = ?, pesoliq = ?, marca = ?, valor = ? WHERE id = ?");
            $sql->bind_param("sfsf",$dados["nome"],$dados["pesoLiq"],$dados["marca"],$dados["valor"]); // se $dados nao seguir esse padrao da merda

            $sql->execute();
        }
    }

    private function conectaBD(){ //realiza a conexao com o banco
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $nomeBanco = "vendas";

        $this->conexaoBD = new mysqli($servidor,$usuario,$senha,$nomeBanco);
        if($this->conexaoBD->error){
            die("Conexão Falhou: ".$this->conn->connect_error);
        }
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    public function getPesoLiq()
    {
        return $this->pesoLiq;
    }

    public function setPesoLiq($pesoLiq)
    {
        $this->pesoLiq = $pesoLiq;

        return $this;
    }

    public function getMarca()
    {
        return $this->marca;
    }

    public function setMarca($marca)
    {
        $this->marca = $marca;

        return $this;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;

        return $this;
    }
}
