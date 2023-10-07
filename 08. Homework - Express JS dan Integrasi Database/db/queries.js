const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'mahesa',
    host : 'localhost',
    database : 'dvdrental',
    password : 'mahesa123',
    port : 5432
});

module.exports = pool;

