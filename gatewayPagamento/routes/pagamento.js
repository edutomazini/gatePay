module.exports = function (app) {
    app.get('/pagamento', function (req, res) {
        res.send('ok');
    });
}



//app.get('/pagamento', function (req, res) {
//    console.log('Recebida requisicao de pagamento');
//    res.send('ok');
//});