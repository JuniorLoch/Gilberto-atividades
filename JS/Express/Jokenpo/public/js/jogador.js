var socket = io();

$('.imagescolha').click(function(){
    $('.imagescolha').removeClass('imageanim');
    $(this).addClass('imageanim');
    
    socket.emit('test');
});

$('.resposta').click(function(e){
    e.preventDefault();
    escolha = $('.imageanim').children('img').attr("id");
    console.log("Mandando escolha")
    $('#painel').removeClass("red");        
    $('#painel').removeClass("green");
    $('#painel').addClass("cyan")
    $("#resultado").text("Resposta enviada!");
    socket.emit('escolha',{escolha, jogadorordem, jogadorid})
});

var jogador;
var jogadorid;
var jogadorordem;
var jogadoroponente;

var seuspontos = 0;
var pontosoponente = 0;

var rodada = 1;

$('#enviar').on('click', (e) => {
    e.preventDefault();
    jogador = $('#jogador').val();
    console.log(jogador);
    socket.emit('jogador', jogador);

    socket.on('verifica',(jogador) => {
        console.log('verificar');
        if(jogador.aprovado){
            jogadorid = jogador.id;
            jogadorordem = jogador.player;
            jogadoroponente = 3-jogadorordem;
            console.log('Jogador id:'+jogador.id+' nome: '+jogador.jogador+' Aprovado');
            $('#resultado').text("Bem vindo "+jogador.jogador+"!\n você é o jogador n°: "+jogador.player);
            $('.bloqueado').removeClass("bloqueado");
            $('#login').addClass("bloqueado");
            if(jogador.player == 1){
                $("#voce").text("👈");
            } else {
                $("#voce").text("👉");
            }
        } else {
            console.log('Jogador id:'+jogador.id+' nome: '+jogador.jogador+' Reprovado, Max atingido!');
            $('#resultado').text('Max de jogadores atingido!');
        }
    });
});

socket.on('resultado',(result) => {
    console.log("comparandoresultado");
    if(result == jogadorordem){
        $('#resultado').text("Você ganhou!😎👍");
        $('#painel').removeClass("cyan");
        $('#painel').removeClass("red");
        $('#painel').addClass("green");
        seuspontos++;
        $('#resultp'+jogadorordem).text(seuspontos);
        rodada++;
        $('#rodada').text("Rodada: "+rodada);
    } else if(result == 0){
        $('#resultado').text("Empate!😐✊");
        rodada++;
        $('#rodada').text("Rodada: "+rodada);
    } else {
        $('#resultado').text("Você perdeu!😔👎");
        $('#painel').removeClass("cyan");
        $('#painel').removeClass("green");
        $('#painel').addClass("red");
        pontosoponente++;
        $('#resultp'+jogadoroponente).text(pontosoponente);
        rodada++;
        $('#rodada').text("Rodada: "+rodada);
    }
});

