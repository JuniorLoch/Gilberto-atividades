var socket = io();
var jogador;
$('#login').on('submit', (e) => {
    e.preventDefault();
    jogador = $('#jogador').val();
    console.log(jogador);
    socket.emit('jogador', jogador);

    socket.on('verifica',(jogador,aprovado) => {
        console.log('verificar');
        if(aprovado){
            console.log('aprovou');
            e.initEvent();
        } else {
            console.log('reprovou');
            $('#resultado').append('Max de jogadores atingido!');
        }
    });
});

