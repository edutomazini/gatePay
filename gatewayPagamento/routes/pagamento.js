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
        pagamento.data = new Date;

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
        console.log('Fim POST');
    });

    app.put('/pagamento/:id', function(req,res){
        var pagamento = {};
        var id = req.params.id;

        pagamento.id = id;
        pagamento.status = "CONFIRMADO"

        var connection = app.data.connectionFactory();
        var pagamentoDao = new app.data.PagamentoDao(connection);

        pagamentoDao.atualiza(pagamento,function(erro){
            if(erro){
                console.log(erro)
                res.status(500).send(erro);
            } else {
                res.send(pagamento);
                res.status(201).json(pagamento)
            };
        })
        console.log('Fim PUT');
    });

    app.delete('/pagamento/:id', function(req,res){
        var pagamento = {};
        var id = req.params.id;

        pagamento.id = id;
        pagamento.status = "CANCELADO"

        var connection = app.data.connectionFactory();
        var pagamentoDao = new app.data.PagamentoDao(connection);

        pagamentoDao.atualiza(pagamento,function(erro){
            if(erro){
                console.log(erro)
                res.status(500).send(erro);
            } else {
                res.send(pagamento);
                res.status(201).json(pagamento)
            };
        })
        console.log('Fim DELETE');
    });
}



//app.get('/pagamento', function (req, res) {
//    console.log('Recebida requisicao de pagamento');
//    res.send('ok');
//});