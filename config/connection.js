const mysql = require("mysql2");

const options = {
    // Host name for database connection:
    host: process.env.DB_HOST,
    // Port number for database connection:
    port: process.env.DB_PORT,
    // Database user:
    user: process.env.DB_USER,
    // Password for the above database user:
    password: process.env.DB_PASSWORD,
    // Database name:
    database: process.env.DB_NAME
}

const connection = process.env.JAWSDB_URL ? ( mysql.createConnection(process.env.JAWSDB_URL) ) : ( mysql.createConnection(options) );

connection.connect();

module.exports = connection;