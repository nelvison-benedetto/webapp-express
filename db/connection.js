//connection/connection.js
const mysql = require('mysql2');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT= process.env.DB_PORT || 3308;
const DB_USER = process.env.DB_USER || 'NelvisonBenedettoMySQL';
const DB_PSW = process.env.DB_PSW;
const DB_NAMEDB = process.env.DB_NAMEDB || 'boolean_books_web_app';

const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PSW,
    database: DB_NAMEDB,
});   

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MYSQL!');
});

module.exports = connection;

