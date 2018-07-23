module.exports = function (app) {
    app.get('/pagamento', function (req, res) {
        res.send('ok get');
    });

    app.post('/pagamento', function (req, res) {
        var pagamento = req.body;
        console.log('processando pagamento');

        pagamento.status = 'NOVO';
        pagamento.data = new Date();

        console.log(pagamento);

        var connection = app.data.connectionFactory();
        var pagamentoDao = new app.data.PagamentoDao(connection);

        pagamentoDao.salva(pagamento,function(erro, resultado){
            console.log('pagamento criado');
            res.json(pagamento);
        })
    });
}



//app.get('/pagamento', function (req, res) {
//    console.log('Recebida requisicao de pagamento');
//    res.send('ok');
//});