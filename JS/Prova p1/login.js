const express = require('express'); 
const app = express(); 

//3 logins, pos 0 login - pos 1 senha
var usuario1 = ["fpp1","fpp1"]; 
var usuario2 = ["fpp2","fpp2"]; 
var usuario3 = ["fpp3","fpp3"]; 
/*
var carro = {modelo:"Argo",marca:"Fiat",info:function () {
    console.log("Carro: "+this.marca+" - "+this.modelo); 
}};*/
//variaveis de contagem
var contagem = [0,0,0,0];

app.set("view engine",'ejs'); 
app.use(express.urlencoded({extended: true})); 

app.get('/', (req,res) => { // req - request | res - response
    res.redirect('/index.html')
});

app.get('/index.html', (req,res) => { // req - request | res - response
    res.sendFile(__dirname+'/index.html');
});

app.get('/contagem', (req,res) => { // req - request | res - response
    res.render('contagem',{user1:contagem[0],user2:contagem[1],user3:contagem[2]});
});

app.post('/login', (req,res) => { // req - request | res - response
    var l = req.body.nome;
    var s = req.body.senha;
    var nusuario = 0;

    if (usuario1[0] == l && usuario1[1] == s){
        nusuario = 1
        contagem[0]++;
    } else if (usuario2[0] == l && usuario2[1] == s){
        nusuario = 2
        contagem[1]++;
    } else if (usuario3[0] == l && usuario3[1] == s){
        nusuario = 3
        contagem[2]++;
    } else {
        contagem[3]++;
        nusuario = 0;
    }

    if(nusuario > 0){
        res.render('login',{nusuario}); 
    } else {
        res.render('falha'); 
    } 

    console.log(contagem[0]+" - "+contagem[1]+" - "+contagem[2]+" - "+contagem[3]);
});



app.listen(3000);