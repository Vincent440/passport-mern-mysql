const mysql = require("mysql2/promise");
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const options = {
    host: process.env.DB_HOST, // Host name for database connection:
    port: process.env.DB_PORT,// Port number for database connection:
    user: process.env.DB_USER,// Database user:
    password: process.env.DB_PASSWORD,// Password for the above database user:
    database: process.env.DB_NAME// Database name:
}
const connection = process.env.JAWSDB_URL ?
(mysql.createConnection(process.env.JAWSDB_URL)) : (mysql.createConnection(options));

const sessionOptions = {
    host: process.env.DB_HOST, // Host name for database connection:
    port: process.env.DB_PORT,// Port number for database connection:
    user: process.env.DB_USER,// Database user:
    password: process.env.DB_PASSWORD,// Password for the above database user:
    database: process.env.DB_NAME,// Database name:,
    clearExpired: true,// Whether or not to automatically check for and clear expired sessions:
    checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds:
    expiration: 7200000// The maximum age of a valid session; 2 hours in milliseconds:
}
const sessionStore = new MySQLStore(sessionOptions, connection.promise);

module.exports = sessionStore;