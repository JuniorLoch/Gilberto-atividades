<?php
$arr = array(
    array("titulo" => "Site da Anvisa é atacado por hackers; agência afirma que dados não foram afetados", "imagem" => "https://s2.glbimg.com/uSfqcd9_AV5Vex-s6MupJrwHBqw=/0x0:1280x633/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/C/V/Ek5qaJSQKYMUrFx5GX9g/whatsapp-image-2021-09-08-at-18.54.10.jpeg", "Descricao" => "Um dos sites da Agência Nacional de Vigilância Sanitária (Anvisa) sofreu um ataque cibernético na tarde desta quarta-feira (8). Na página, os invasores colocaram uma bandeira da Argentina e uma mensagem.", "Link" => "https://g1.globo.com/ciencia-e-saude/noticia/2021/09/08/site-da-anvisa-e-atacado-por-hackers-agencia-explica-que-dados-nao-foram-afetados.ghtml"),
    array("titulo" => "Empresas perdem R$ 195,3 bilhões em valor de mercado nesta quarta-feira com declarações golpistas de Bolsonaro", "imagem" => "https://s2.glbimg.com/bvcbDKhoSgj7MQpIDeG1J5KXcoM=/0x0:4996x3331/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/9/B/7DQxQdTxybsgUykPefmA/notre-dame-b3-23-04-9647.jpg", "Descricao" => "Com a escalada da crise política no país, as empresas de capital aberto da bolsa de valores brasileira, a B3, perderam R$ 195,3 bilhões em valor de mercado nesta quarta-feira (8), de acordo com um levantamento realizado pela provedora de informações financeiras Economatica.", "Link" => "https://g1.globo.com/economia/noticia/2021/09/08/empresas-perdem-r-1953-bilhoes-em-valor-de-mercado-nesta-quarta-feira-com-declaracoes-golpistas-de-bolsonaro.ghtml"),
    array("titulo" => "Moraes devolve processos, e STF retomará julgamento de regras do governo para armas", "imagem" => "https://tpc.googlesyndication.com/simgad/9041336952012299138?&tp=.png", "Descricao" => "O Supremo Tribunal Federal marcou para o próximo dia 17 a retomada do julgamento de ações que questionam a política armamentista do governo Bolsonaro.

    Os temas já tinham sido levados ao plenário virtual do STF em ocasiões anteriores, mas tiveram a análise adiada por pedidos de vista do ministro Alexandre de Moraes. Agora, Moraes devolveu os processos, o que permitiu que os julgamentos pudessem ser novamente agendados.", "Link" => "https://g1.globo.com/politica/noticia/2021/09/08/moraes-devolve-processos-e-stf-retomara-julgamento-de-regras-do-governo-para-armas.ghtml"),
    array("titulo" => "O carro futurista que 'come' poluição", "imagem" => "https://s2.glbimg.com/VVgx0vJjYgZdbKLKSKfbMjZ1Sbk=/0x0:800x450/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/P/W/xHXghsR1ukBqioSvIDSw/carrofuturistabbc2.jpg", "Descricao" => "Um carro que foi projetado para eliminar a poluição do ar enquanto é dirigido foi exibido no Festival de Velocidade de Goodwood, no Reino Unido.

    Criado pelo designer britânico Thomas Heatherwick, o Airo deve entrar em produção na China em 2023 — e a ideia é fabricar um milhão deles.", "Link" => "https://g1.globo.com/tecnologia/noticia/2021/09/07/o-carro-futurista-que-come-poluicao.ghtml"),
    array("titulo" => "É #FAKE que ministro Alexandre de Moraes fugiu do país um dia após discurso de Bolsonaro no 7 de Setembro", "imagem" => "https://s2.glbimg.com/oKlyDuLBMLnWY-FiZiJ7upvsyd4=/0x0:1548x381/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/W/8/y18otKTWSPZY0vso0dMg/header-moares.jpg", "Descricao" => "Circula nas redes sociais uma mensagem que diz que o ministro Alexandre de Moraes fugiu do país durante a madrugada após o discurso do presidente Jair Bolsonaro no 7 de Setembro. É #FAKE.", "Link" => "https://g1.globo.com/fato-ou-fake/noticia/2021/09/08/e-fake-que-ministro-alexandre-de-moraes-fugiu-do-pais-um-dia-apos-discurso-de-bolsonaro-no-7-de-setembro.ghtml"),
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
</head>
<body>
<nav class="cyan lighten-2" role="navigation">
    <div class="nav-wrapper container ">
        <a id="logo-container" href="#" class="brand-logo">NOTICIA DO DIA!</a>
    </div>
</nav>
<br><br><br>
<div class="container">
    <div class="center card panel red lighten-2 section">
                <?php
                $noticia = Array();
                while(sizeof($noticia)<1){
                    $num = rand(0,sizeof($arr)-1);
                    if(!in_array($num,$noticia))
                        array_push($noticia,$num);
                }
                
                foreach ($noticia as $key => $num) {
                    $value = $arr[$num];
                }
                ?>
        <div class="row">
            <a class="blue-text text-darken-2">NOTICIA DO DIA!</a>
        </div>
        <div class="row">
            <a class="blue-text text-darken-2">NOTICIA DO DIA!</a>
        </div>
        <div class="row">
            <a class="blue-text text-darken-2">NOTICIA DO DIA!</a>
        </div>
    </div>
</div>
    

    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</body>
</html>