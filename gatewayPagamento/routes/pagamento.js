module.exports = function (app) {
    app.get('/pagamento', function (req, res) {
        res.send('ok get');
    });

    app.post('/pagamento', function (req, res) {
        var pagamento = req.body;
        console.log(pagamento);
        res.send('ok post');
    });
}



//app.get('/pagamento', function (req, res) {
//    console.log('Recebida requisicao de pagamento');
//    res.send('ok');
//});