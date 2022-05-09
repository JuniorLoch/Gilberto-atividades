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
            console.log('aprovou');
            $('#login').submit();
        } else {
            console.log('reprovou');
            $('#resultado').text('Max de jogadores atingido!');
        }
    });
});


