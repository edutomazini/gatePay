function PagamentoDao(connection){
    this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento,callback){
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

module.exports = function(){
    return PagamentoDao;
};
