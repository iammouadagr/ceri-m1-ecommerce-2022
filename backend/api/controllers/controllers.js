const connection = require('../../config/db')

exports.getAllbums = async  (req,res) => {
    connection.query("SELECT * FROM use e_com.album inner join e_com.artiste on id_artiste = artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
}

exports.getArtistes = async  (req,res) => {
    connection.query("SELECT * FROM e_com.artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
}


exports.getChansons = async  (req,res) => {
    connection.query("SELECT * FROM e_com.chanson", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.json(result);
        }
    });
}