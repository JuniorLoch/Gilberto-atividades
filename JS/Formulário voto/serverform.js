const http = require('http');
const fs = require('fs');
const url = require('url');
var formidable = require('formidable');
const moment = require('moment');

const server = http.createServer((req,res)=>{
    file = (req.url=="/")?"/index.html":req.url;
    console.log(file);

    if(file == "/index"){
        var form = new formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
            var datanasc = moment(fields.datanascimento);
            var idade = datanasc.diff(moment(),"years") * -1;
            console.log(idade);
            
            if(idade < 16 && idade > 0){
                //nao pode votar
                res.writeHeader(200,{'Content-Type':'text/html'});
                res.write('<head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title>Pode</title> </head> <body  class="#4dd0e1 cyan lighten-2"> <div class="container #b2ebf2 cyan lighten-4 center"> <div class="row col s12" style="padding-bottom: 30%;padding-top: 30%; margin-bottom: 0;"><h1> Você nao pode votar nao </h1><form action="index.html" method="post" enctype="multipart/form-data"><button class="btn btn-large #4dd0e1 cyan lighten-2" type="submit" name="action">Voltar</button></form></div></div></body>');
            } else if (idade >= 16 && idade < 18){
                //pode votar
                res.write('<head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title>Pode</title> </head> <body  class="#4dd0e1 cyan lighten-2"> <div class="container #b2ebf2 cyan lighten-4 center"> <div class="row col s12" style="padding-bottom: 30%;padding-top: 30%; margin-bottom: 0;"><h1> Você pode votar mas nao deve </h1><form action="index.html" method="post" enctype="multipart/form-data"><button class="btn btn-large #4dd0e1 cyan lighten-2" type="submit" name="action">Voltar</button></form></div></div></body>');
                res.end();
            } else {
                //deve votar
                res.write('<head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title>Pode</title> </head> <body  class="#4dd0e1 cyan lighten-2"> <div class="container #b2ebf2 cyan lighten-4 center"> <div class="row col s12" style="padding-bottom: 30%;padding-top: 30%; margin-bottom: 0;"><h1> Você pode obrigatoriamente deve votar </h1><form action="index.html" method="post" enctype="multipart/form-data"><button class="btn btn-large #4dd0e1 cyan lighten-2" type="submit" name="action">Voltar</button></form></div></div></body>');
                res.end();
            }
        });
    }else{
        var diretorio = __dirname;

        var q = url.parse(file,true);

        fs.readFile(diretorio+q.pathname,(erro,html)=>{
            if(erro){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Pagina inválida");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(html);
            }
        });
    }
});

server.listen(3000);