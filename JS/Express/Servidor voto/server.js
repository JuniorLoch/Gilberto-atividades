const http = require("http");
var url = require("url");
var moment = require('moment');

const server = http.createServer((req, res) => {
    var u = "http://localhost:3000"+req.url;
    var q = url.parse(u,true);

    if (q.pathname == "/favicon.ico") {
        res.writeHead(404);
        res.end();
    } else {
        var mes = q.query.mes;
        var ano = q.query.ano;
        var dia = q.query.dia;
    
        /*if(dia != undefined && mes != undefined && ano != undefined){
            var idade = moment().
        }*/
    
        console.log('data = '+dia+"/"+mes+"/"+ano);
    
        if(dia != undefined && mes != undefined && ano != undefined){
            // ta pegando o dia mes e ano certiho, mas pq isso aqui ta morrendo?
            var nasc = moment(dia+'/'+mes+'/'+ano,'DD/MM/YYYY').format();
            var hoje = moment().format('DD/MM/YYYY');
            var idade = moment().diff(nasc,'years');

            if(idade < 16){
                res.writeHead(200);
                res.write('<div style="margin-left: 40%;">');
                res.write("<h1>"+"Idade: "+idade+"</h1>");
                res.write("<h1>"+"Voce nao pode votar"+"</h1>");
                res.write('<img style="margin-left: -12%;" src="https://agorarn.com.br/files/uploads/2020/05/bolsonaro-triste.jpg" width="550" height="400">');
                res.write('</div>');
                res.end();
            } else {
                res.writeHead(200);
                res.write('<div style="margin-left: 40%;">');
                res.write("<h1>"+"Idade: "+idade+"</h1>");
                res.write("<h1>"+"Voce pode votar"+"</h1>");
                res.write('<img style="margin-left: -12%;" src="https://static.cdn.pleno.news/2019/11/49051930907_6f4c3a2378_c.jpg" width="550" height="400">');
                res.write('</div>');
                res.end();
            }
        } else {
            res.writeHead(200);
            res.write("<h1>Bom dia</h1>")
            res.end();
        }

        
    }

    
});

server.listen(3000);