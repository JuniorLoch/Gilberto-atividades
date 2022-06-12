var socket = io();

$('.imagescolha').click(function(e){
    $('.imagescolha').removeClass
    e.addClass('imageanim');
});


$(".item").click( function(e) { 
    if($(this).find("p").text() == ""){
        $(this).find("p").text("X");
    }
    var posicao = $(this).attr("id");
    socket.emit('pos', posicao);
});

socket.on('rpos',(posicao) => {
    console.log(posicao);
    var componente = "#"+posicao;
    var tcasa = $(componente).find('p').text()
    if(tcasa == ""){
        $(componente).find('p').text("O");
    }
});
