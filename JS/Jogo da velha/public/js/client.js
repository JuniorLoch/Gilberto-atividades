var socket = io();
var jogador;
$('#enviar').on('click', async (e) => {
    e.preventDefault();
    jogador = $('#jogador').val();
    socket.emit('jogador', jogador);

    await socket.on('verifica',(jogador) => {
        console.log('verificar');
        if(jogador.aprovado){
            $('#login').submit();
        } else {
            $('#resultado').text('Max de jogadores atingido!');
        }
    });
});