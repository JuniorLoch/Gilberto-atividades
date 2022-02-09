<?php
require_once "vendor/autoload.php";

use PhpParser\Node\Expr\Cast\Array_;
use App\Model\Produto;
use PHPUnit\Framework\TestCase;

use function PHPUnit\Framework\assertEquals;
use function PHPUnit\Framework\assertNotNull;

class ProdutoTest extends TestCase{
    private $p;

    public function setUp(): void
    {
        $this->p = new Produto(null);
    }

    public function testConstructor(){
        $dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "500");
        $this->p = new Produto($dados);
        assertEquals("5",$this->p->getId());
        assertEquals("teste",$this->p->getNome());
        assertEquals("1.5",$this->p->getPesoLiq());
        assertEquals("Amanco",$this->p->getMarca());
        assertEquals("500",$this->p->getValor());
    }

    public function testId(){
        $this->p->setId("5");
        assertEquals("5",$this->p->getId());
    }

    public function testNome(){
        $this->p->setId("5");
        assertEquals("5",$this->p->getId());
    }

    public function testPesoLiq(){
        $this->p->setId("5");
        assertEquals("5",$this->p->getId());
    }

    public function testMarca(){
        $this->p->setId("5");
        assertEquals("5",$this->p->getId());
    }

    //CRUD  
    public function testSalvar(){
        $dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "500");
        $this->p = new Produto($dados);

        $this->p->salvar();

        $result = $this->p->listar();

        assertNotNull($result);
    }

    public function testRemover(){
        $dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "500");
        $this->p = new Produto($dados);

        assertEquals("1",$this->p->remover());
    }

    public function testEditar(){
        $dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "500");
        $this->p = new Produto($dados);

        $this->p->salvar();
        $dados = Array("id"=> "5","nome" => "teste", "pesoLiq" => "1.5" , "marca" => "Amanco" , "valor" => "700");
        $this->p = new Produto($dados);
        $this->p->editar("valor",null);

        $result = $this->p->listar();

        assertNotNull($result);
    }
}

