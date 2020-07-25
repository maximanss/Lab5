const mysql = require('mysql');

const pool = mysql.createPool ({
    
    connectionLimit: 10,
    host: "mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gsuwopqyp6mpxux4",
    password: "p7ed92w0vl603qtu",
    database: "tvxcdzmjbustk9jm"
    
});

module.exports = pool;