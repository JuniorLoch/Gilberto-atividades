const express = require('express'); // requisicao express
const app = express(); // criando app

app.set("view engine",'ejs'); // setando a view como ejs, necessario instalar o ejs pra isso
app.use(express.urlencoded({extended: true})); //colocando extended como true na urlencoded do express()

app.get('/', (req,res) => { // req - request | res - response
    res.redirect('/indexestatico.html')
});

app.get('/indexestatico.html', (req,res) => { // req - request | res - response
    res.sendFile(__dirname+'/indexestatico.html');
    console.log('bomdia');
});

app.post('/index', (req,res) => { // req - request | res - response
    var nome = req.body.nome+"";
    console.log('post');
    res.render('algo',{nome}); 
});

app.listen(3000);



