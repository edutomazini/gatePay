var app = require('./config/custom-express')();

app.listen(3000, function () {
    console.log('servidor rodando porta 3000');
});

//todas requisicoes http serão colocadas na pasta routes (controllers)
//app.get('/teste', function (req, res) {
//    console.log('Recebida requisicao de teste');
//    res.send('ok');
//});

