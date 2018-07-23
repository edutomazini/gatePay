var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'newuser',
        password: '',
        database: 'pagamento'
    });
}

module.exports = function(){
    return createDBConnection;
}