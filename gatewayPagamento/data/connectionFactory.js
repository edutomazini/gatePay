var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pretinha',
        database: 'pagamento'
    });
}

module.exports = function(){
    return createDBConnection;
}