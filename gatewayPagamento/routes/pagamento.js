module.exports = function (app) {
    app.get('/pagamento', function (req, res) {
        res.send('ok get');
    });

    app.post('/pagamento', function (req, res) {
        req.assert("valor","valor é obrigatorio e deve ser válido").notEmpty().isFloat();
        var erros = req.validationErrors();

        if (erros){
            console.log('Erros de validacao');
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        console.log('processando pagamento');

        pagamento.status = 'NOVO';
        pagamento.data = new Date();

        console.log(pagamento);

        var connection = app.data.connectionFactory();
        var pagamentoDao = new app.data.PagamentoDao(connection);

        pagamentoDao.salva(pagamento,function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro);
            } else {
                console.log('pagamento criado');
                res.location('/pagamento/'+resultado.insertId);
                res.status(201).json(pagamento)
            };
        })
    });
}



//app.get('/pagamento', function (req, res) {
//    console.log('Recebida requisicao de pagamento');
//    res.send('ok');
//});