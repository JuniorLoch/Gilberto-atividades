const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/imc.html');
});

app.get('/imc.html', (req, res) => {
    res.sendFile(__dirname + '/imc.html');
});

app.post('/imc', (req, res) => {
    var peso = req.body.peso;
    var altura = req.body.altura;
    var imc = peso / (altura*altura);
    console.log("peso = "+peso+" - Altura = "+altura+" - IMC = "+imc);

    
    var msg;
    var img;
    var cor;
    if (imc < 18.5) {
        msg = "MAGRO PRA CARAIO!";
        img = "https://i.ytimg.com/vi/WpecfJxao-Y/hqdefault.jpg";
        cor = "red";
    } else if (imc > 18.5 && imc < 24.9) {
        msg = "normal";
        img = "https://i.pinimg.com/564x/2e/57/b9/2e57b953525edaacf59be6e3e16347b4.jpg";
        cor = "green";
    } else if (imc > 24.9 && imc < 29.9) {
        msg = "TA GORDIN";
        img = "https://static.wixstatic.com/media/507abf_b62a79d5e6c24203b426effd3f1fe0f5~mv2.jpg/v1/fill/w_600,h_344,al_c,q_90/507abf_b62a79d5e6c24203b426effd3f1fe0f5~mv2.jpg";
        cor = "orange";
    } else {
        msg = "GIGANTE";
        img = "https://i.ytimg.com/vi/tv8acF5X6e4/maxresdefault.jpg";
        cor = "blue";
    }
    
    res.render("imc", {imc: msg, img: img, cor: cor});
});

app.listen(3000);
