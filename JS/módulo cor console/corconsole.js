var coresTexto = {Preto:"\x1b[30m", Vermelho:"\x1b[31m", Verde:"\x1b[32m", Amarelo:"\x1b[33m", Azul:"\x1b[34m", Rosa:"\x1b[35m", Ciano:"\x1b[36m", Branco:"\x1b[37m"};
var coresFundo = {Preto:"\x1b[40m", Vermelho:"\x1b[41m", Verde:"\x1b[42m", Amarelo:"\x1b[43m", Azul:"\x1b[44m", Rosa:"\x1b[45m", Ciano:"\x1b[46m", Branco:"\x1b[47m"};
var reset = "\x1b[0m";

exports.corConsole = (corDeFundo, corDoTexto, Mensagem) => {
    if(coresFundo[corDeFundo] != undefined &&  coresTexto[corDoTexto] != undefined) {
        console.log(coresFundo[corDeFundo]+' '+ coresTexto[corDoTexto] + Mensagem +" "+  reset);
    } else {
        console.log("Parametro(s) invalido(s)!!");
    }
}
