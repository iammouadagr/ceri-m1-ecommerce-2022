const express = require('express')
const app = express()


const bodyParser= require('body-parser');

const server = require('http').Server(app);

var os = require('os');
const hostname = os.hostname();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "mohakh",
    password: "mohakh"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(8080, () => {  console.log("Serveur à l'écoute")});

app.get('/albums', (req,res) => {
    con.query("SELECT * FROM vinyle.album inner join vinyle.artiste on id_artiste = artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
})

app.get('/artistes', (req,res) => {
    con.query("SELECT * FROM vinyle.artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
})

app.get('/chansons', (req,res) => {
    con.query("SELECT * FROM vinyle.chanson", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
})