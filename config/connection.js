const mysql = require("mysql2");
let connection;
process.env.JAWSDB_URL ? ( connection = mysql.createConnection(process.env.JAWSDB_URL) ) : 
    (connection = mysql.createConnection({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })
    );
connection.connect();
module.exports = connection;