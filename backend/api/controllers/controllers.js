const connection = require('../../config/db')
const sha1 = require('sha1');

exports.getAlbums = async  (req,res) => {
    connection.query(" SELECT * FROM vinyle.album as A inner join vinyle.artiste as B on A.id_artiste = B.id_artiste;", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.getUserInformation = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var query = `select * from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`
    connection.query(query, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.getMusicByAlbum = async  (req,res) => {

    var id_album = req.query.album;
    var queryMusicByIdAlbum = `select * from vinyle.chanson where id_album = `+id_album+`;`;
    connection.query(queryMusicByIdAlbum, function (err, result_1, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result_1);
        }
    });

}







exports.registerUser = async  (req,res) => {

    prenom = req.query.prenom;
    nom = req.query.nom;
    adresse_mail = req.query.adresse_mail;
    nom_utilisateur = req.query.nom_utilisateur;
    lieu_naissance = req.query.lieu_naissance;
    date_naissance = req.query.date_naissance;
    mot_de_passe = sha1(req.query.mot_de_passe);
    sexe = req.query.sexe;
    statut = req.query.statut;


    var queryRegister = `INSERT INTO utilisateur(nom_utilisateur, adresse_mail, prenom, nom, lieu_naissance, date_naissance, mot_de_passe, sexe, statut) VALUES`+
	`('`+nom_utilisateur+`','`+adresse_mail+`','`+prenom+`', '`+nom+`', '`+lieu_naissance+`', '`+date_naissance+`', "`+mot_de_passe+`", '`+sexe+`', '`+statut+`');`;

    var queryVerification = `select * from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`;

    connection.query(queryVerification, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            if(result[0]==null)
            {
                connection.query(queryRegister, function (err, result, fields) {
                    if (err){
                        throw err;
                    }
                    else{  
                        res.json(true);
                    }
                });
            }
            else{
                res.status(200).send(false);
            }
        }
    });
}

exports.userAuthentication = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var mot_de_passe = sha1(req.query.mot_de_passe);

    var queryAuthentication = `select * from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`' and mot_de_passe like "`+mot_de_passe+`";`;

    connection.query(queryAuthentication, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            if(result[0]!=null)
            {
                res.status(201).send(true);
            }
            else{
                res.status(200).send(false);
            }
        }
    });
}



exports.getMusicalGenre = async  (req,res) => {

    var queryCategories = `select distinct(genre) from vinyle.chanson;`;
    var listCategories = new Array();
    connection.query(queryCategories, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{ 
            for(let i=0; i<result.length; i++)
            {
                listCategories.push(result[i].genre);
            }
            res.status(200).send(listCategories);
        }
    });
}

exports.getAlbumsByGenre = async  (req,res) => {

    var genre = req.query.genre;
    var queryAlbumByGenre = `select * from vinyle.album where genre_musical like '`+genre+`';`;

    connection.query(queryAlbumByGenre, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{ 
            res.status(200).json(result);
        }
    });
}

exports.addFavorite = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var album = req.query.album;

    var queryGetIdAlbum = `select id_album from vinyle.album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`


    connection.query(queryGetIdAlbum, function (err, result_1, fields) {
        if (err){
            throw err;
        }
        else{ 
            connection.query(queryGetUserId, function (err, result_2, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    var queryVerifFavorite = `select * from vinyle.favoris where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

                    connection.query(queryVerifFavorite, function (err, result_3, fields) {
                        if (err){
                            throw err;
                        }
                        else{ 
                            console.log(result_3);
                            if(result_3[0]==null)
                            {
                                var queryInsterFavorite = `INSERT INTO favoris(id_utilisateur, id_album) VALUES (`+result_2[0].id_utilisateur+`, `+result_1[0].id_album+`)`;
                                connection.query(queryInsterFavorite, function (err, result_4, fields) {
                                    if (err){
                                        throw err;
                                        res.json(false);
                                    }
                                    else{ 
                                        res.status(200).json(true);
                                    }
                                });
                            }
                            else{
                                res.json(false);
                            }
                        }
                    });

                }
            });
        }
    });
}

exports.addCart = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var album = req.query.album;

    var queryGetIdAlbum = `select id_album from vinyle.album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`


    connection.query(queryGetIdAlbum, function (err, result_1, fields) {
        if (err){
            throw err;
        }
        else{ 
            connection.query(queryGetUserId, function (err, result_2, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    var queryVerifFavorite = `select * from vinyle.favoris where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

                    connection.query(queryVerifFavorite, function (err, result_3, fields) {
                        if (err){
                            throw err;
                        }
                        else{ 
                            console.log(result_3);
                            if(result_3[0]==null)
                            {
                                var queryInsterFavorite = `INSERT INTO panier(id_utilisateur, id_album) VALUES (`+result_2[0].id_utilisateur+`, `+result_1[0].id_album+`)`;
                                connection.query(queryInsterFavorite, function (err, result_4, fields) {
                                    if (err){
                                        throw err;
                                        res.json(false);
                                    }
                                    else{ 
                                        res.status(200).json(true);
                                    }
                                });
                            }
                            else{
                                res.json(false);
                            }
                        }
                    });

                }
            });
        }
    });
}

exports.getArtistes = async  (req,res) => {
    connection.query("SELECT * FROM vinyle.artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}


exports.getFavoritesByUser = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    
    connection.query(queryGetUserId, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetFavoritesByUserId = `select * from vinyle.favoris as A inner join vinyle.album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
            connection.query(queryGetFavoritesByUserId, function (err, result_1, fields) {
                if (err){
                    throw err;
                }
                else{  
                    res.status(200).json(result_1);
                }
            });

        }
    });
}

exports.getCartByUser = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    
    connection.query(queryGetUserId, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetFavoritesByUserId = `select * from vinyle.panier as A inner join vinyle.album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
            connection.query(queryGetFavoritesByUserId, function (err, result_1, fields) {
                if (err){
                    throw err;
                }
                else{  
                    res.status(200).json(result_1);
                }
            });

        }
    });
}

exports.deleteFavorite = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var album = req.query.album;

    var queryGetIdAlbum = `select id_album from vinyle.album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    connection.query(queryGetIdAlbum, function (err, result_1, fields) {
        if (err){
            throw err;
        }
        else{ 
            connection.query(queryGetUserId, function (err, result_2, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    var queryDeleteFavorite = `DELETE FROM vinyle.favoris WHERE id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

                    connection.query(queryDeleteFavorite, function (err, result_3, fields) {
                        if (err){
                            throw err;
                            res.json(false);
                        }
                        else{ 
                            res.status(200).json(true);
                        }
                    });

                }
            });
        }
    });
}

exports.getCartPrice = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var queryGetIdByUser = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`' ; `;

    connection.query(queryGetIdByUser, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetCartPrice = `select sum(prix) as total from vinyle.panier as A inner join vinyle.album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
            connection.query(queryGetCartPrice, function (err, result_1, fields) {
                if (err){
                    throw err;
                }
                else{  
                    var panier = {
                        total: 0,
                    }
                    panier.total = result_1[0].total;
                    res.json(panier);
                }
            });
        }
    });
}


exports.deleteAlbumFromCart = async  (req,res) => {

    var nom_utilisateur = req.query.nom_utilisateur;
    var album = req.query.album;

    var queryGetIdAlbum = `select id_album from vinyle.album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from vinyle.utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    connection.query(queryGetIdAlbum, function (err, result_1, fields) {
        if (err){
            throw err;
        }
        else{ 
            connection.query(queryGetUserId, function (err, result_2, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    var queryDeleteFavorite = `DELETE FROM vinyle.panier WHERE id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

                    connection.query(queryDeleteFavorite, function (err, result_3, fields) {
                        if (err){
                            throw err;
                            res.json(false);
                        }
                        else{ 
                            res.status(200).json(true);
                        }
                    });

                }
            });
        }
    });
}


exports.getChansons = async  (req,res) => {
    connection.query("SELECT * FROM vinyle.chanson", function (err, result, fields) {
        if (err){
            
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}
