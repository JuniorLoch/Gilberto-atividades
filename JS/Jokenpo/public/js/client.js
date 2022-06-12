var socket = io();
var jogador;
$('#enviar').on('click', (e) => {
    e.preventDefault();
    jogador = $('#jogador').val();
    console.log(jogador);
    socket.emit('jogador', jogador);

    socket.on('verifica',(jogador) => {
        console.log('verificar');
        if(jogador.aprovado){
            console.log('Jogador id:'+jogador.id+' nome: '+jogador.nome+' Aprovado');
            $('#login').submit();
        } else {
            console.log('Jogador id:'+jogador.id+' nome: '+jogador.nome+' Reprovado, Max atingido!');
            $('#resultado').text('Max de jogadores atingido!');
        }
    });
});


