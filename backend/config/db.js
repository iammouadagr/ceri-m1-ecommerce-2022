require('dotenv').config({ path: '../config/.env' })
const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vinyle'
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});


module.exports = connection;
