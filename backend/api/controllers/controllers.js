const connection = require('../../config/db')
const sha1 = require('sha1');
const algoliasearch = require('algoliasearch');
const client = algoliasearch('69GHD0JX5C', '68fbf0a5e20e5fb1467b628382e1a810');
const index = client.initIndex('indexBDD');


connection.query("select * from album as A inner join artiste as C on A.id_artiste = C.id_artiste;", function (err, result, fields) {
    if (err){
        console.log("err");
        throw err;
    }
    else{  

        const res = Object.assign({},result);
        index.setSettings({
            attributeForDistinct: 'id_album',
            distinct: true
            }).then(() => {
            // done
            });
        index.saveObjects([res], {
            autoGenerateObjectIDIfNotExist: true
          })
          .wait()
          .then((response) => {
            console.log("object : ",response);
        }).catch((err) => {console.log(err)});
    }
});





exports.getAlbums = async  (req,res) => {
    connection.query(" SELECT * FROM album as A inner join artiste as B on A.id_artiste = B.id_artiste;", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.searchAlgolia = async  (req,res) => {

    var search = req.body.search;

    var queryAlbumByID = `select * from album as A inner join artiste as B on A.id_artiste = B.id_artiste where`;
    index.search(search)
    .then((objects) => {
        console.log(" search result ::: ", objects)
        if(objects.hits.length==0){
            res.status(200).json(new Array());
        }
        else if (objects.hits){
            for(let i = 0; i<objects.hits.length; i++)
            {
                if(i<objects.hits.length - 1)
                {
                    queryAlbumByID = queryAlbumByID + ` id_album = `+objects.hits[i].id_album+` or `;
                }
                else{
                    queryAlbumByID = queryAlbumByID + ` id_album = `+objects.hits[i].id_album+`;`;
                }

            }
            connection.query(queryAlbumByID, function (err, result, fields) {
                if (err){
                    throw err;
                }
                else{  
                    res.status(200).json(result);
                }
            });
            
        }

    
    })
    .catch();

}


exports.addAlbum = async  (req,res) => {
    
    var artiste = req.body.artiste;
    var queryVerifArtist = `select * from artiste where nom like '`+artiste+`';`
    var lien_image = req.body.lien_image;
    var titre_album = req.body.titre_album;
    var annee = req.body.annee;
    var quantite = req.body.quantite;
    var genre_musical = req.body.genre_musical;
    var description = req.body.description;
    var prix = req.body.prix;
    var listeChansons = req.body.listeChansons;



    
    connection.query(queryVerifArtist, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{
            if(result[0]!=null)
            {
                var queryAddAlbum = `INSERT INTO album(titre_album, id_artiste, lien_image, genre_musical, annee, prix, description_album, quantiteMax) VALUES`+
                `('`+titre_album+`','`+result[0].id_artiste+`','`+lien_image+`', '`+genre_musical+`', '`+annee+`', '`+prix+`', "`+description+`", '`+quantite+`');`;   
                connection.query(queryAddAlbum, function (err, result5, fields) {
                    if (err){
                        throw err;
                    }
                    else{
                        var queryGetAlbumByName = `select * from album where titre_album like '`+titre_album+`' and id_artiste = `+result[0].id_artiste+`;`
                        connection.query(queryGetAlbumByName, function (err, result6, fields) {
                            if (err){
                                throw err;
                            }
                            else{

                                for(let i=0; i<listeChansons.length; i++)
                                {
                                    var queryAddSongs = `INSERT INTO chanson (titre_chanson, id_album, id_artiste, genre_musical) values ('`+listeChansons[i]+`', `+result6[0].id_album+`, `+result[0].id_artiste+`, '`+genre_musical+`')`;
                                    connection.query(queryAddSongs, function (err, result8, fields) {
                                        if (err){
                                            throw err;
                                        }
                                    });
                                    if(i==(listeChansons.length - 1))
                                    {
                                        res.status(200).json(result6);
                                    }
                                }
           
                            }
                        });
                    }
                });         
            }
            else{
                var queryCreateArtist = `insert into artiste(nom) values ('`+artiste+`');`;
                connection.query(queryCreateArtist, function (err, result1, fields) {
                    if (err){
                        throw err;
                    }
                    else{
                        var queryGetIdArtiste = `select * from artiste where nom like '`+artiste+`';`;
                        connection.query(queryGetIdArtiste, function (err, result2, fields) {
                            if (err){
                                throw err;
                            }
                            else{
                                var queryAddAlbum = `INSERT INTO album(titre_album, id_artiste, lien_image, genre_musical, annee, prix, description_album, quantiteMax) VALUES`+
                                `('`+titre_album+`','`+result2[0].id_artiste+`','`+lien_image+`', '`+genre_musical+`', '`+annee+`', '`+prix+`', "`+description+`", '`+quantite+`');`;            
                                connection.query(queryAddAlbum, function (err, result3, fields) {
                                    if (err){
                                        throw err;
                                    }
                                    else{
                                        var queryGetAlbumByName = `select * from album where titre_album like '`+titre_album+`' and id_artiste = `+result2[0].id_artiste+`;`
                                        connection.query(queryGetAlbumByName, function (err, result4, fields) {
                                            if (err){
                                                throw err;
                                            }
                                            else{
                                                for(let i=0; i<listeChansons.length; i++)
                                                {
                                                    var queryAddSongs = `INSERT INTO chanson (titre_chanson, id_album, id_artiste, genre_musical) values ('`+listeChansons[i]+`', `+result4[0].id_album+`, `+result2[0].id_artiste+`, '`+genre_musical+`')`;
                                                    connection.query(queryAddSongs, function (err, result8, fields) {
                                                        if (err){
                                                            throw err;
                                                        }
                                                    });
                                                    if(i==(listeChansons.length - 1))
                                                    {
                                                        
                                                        res.status(200).json(result4);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });
}

exports.getUserInformation = async  (req,res) => {

    var nom_utilisateur = req.body.nom_utilisateur;
    var query = `select * from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`
    connection.query(query, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.removeAlbum = async  (req,res) => {

    var album = req.body.id_album;
    var queryRemoveAlbumById = `delete from album where id_album = `+album+`;`;
    var queryRemoveSongByAlbum = `delete from chanson where id_album = `+album+`;`;


    connection.query(queryRemoveSongByAlbum, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            connection.query(queryRemoveAlbumById, function (err, result, fields) {
                if (err){
                    throw err;
                    res.status(400).json(false);
                }
                else{  
                    res.status(200).json(true);
                }
            });
        }
    });
}

exports.getOrderPending = async  (req,res) => {

    var queryGetOrderPending = `select * from suivi_commandes where statut like 'attente de traitement';`;

    connection.query(queryGetOrderPending, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.getOrderValidated = async  (req,res) => {

    var queryGetOrderValidated = `select * from suivi_commandes where statut like 'validée';`;

    connection.query(queryGetOrderValidated, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.getOrderShipped = async  (req,res) => {

    var queryGetOrderShipped = `select * from suivi_commandes where statut like 'expédiée';`;

    connection.query(queryGetOrderShipped, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.getOrderDelivered = async  (req,res) => {

    var queryGetOrderDelivered = `select * from suivi_commandes where statut like 'livrée';`;

    connection.query(queryGetOrderDelivered, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(result);
        }
    });
}



exports.getOrderByUser = async  (req,res) => {

    var id_utilisateur = req.body.id_utilisateur;
    var queryGetOrderByUser = `select * from suivi_commandes where id_utilisateur = `+id_utilisateur+`;`;

    connection.query(queryGetOrderByUser, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.modifyStatus = async  (req,res) => {


    var id_suivi = req.body.id_suivi;
    var statut = req.body.statut;


    var queryModifyStatus = `update suivi_commandes set statut = '`+statut+`' where id_suivi = `+id_suivi+`;`;

    connection.query(queryModifyStatus, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{  
            res.status(200).json(true);
        }
    });
}

exports.getMusicByAlbum = async  (req,res) => {

    var id_album = req.body.album;
    var queryMusicByIdAlbum = `select * from chanson where id_album = `+id_album+`;`;
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

    prenom = req.body.prenom;
    nom = req.body.nom;
    adresse_mail = req.body.adresse_mail;
    nom_utilisateur = req.body.nom_utilisateur;
    lieu_naissance = req.body.lieu_naissance;
    date_naissance = req.body.date_naissance;
    mot_de_passe = sha1(req.body.mot_de_passe);
    sexe = req.body.sexe;
    statut = req.body.statut;


    var queryRegister = `INSERT INTO utilisateur(nom_utilisateur, adresse_mail, prenom, nom, lieu_naissance, date_naissance, mot_de_passe, sexe, statut) VALUES`+
	`('`+nom_utilisateur+`','`+adresse_mail+`','`+prenom+`', '`+nom+`', '`+lieu_naissance+`', '`+date_naissance+`', "`+mot_de_passe+`", '`+sexe+`', '`+statut+`');`;

    var queryVerification = `select * from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`;

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

    var nom_utilisateur = req.body.nom_utilisateur;
    var mot_de_passe = sha1(req.body.mot_de_passe);

    var queryAuthentication = `select * from utilisateur where nom_utilisateur like '`+nom_utilisateur+`' and mot_de_passe like "`+mot_de_passe+`";`;

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

    var queryCategories = `select distinct(genre_musical) from chanson;`;
    var listCategories = new Array();
    connection.query(queryCategories, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{ 
            for(let i=0; i<result.length; i++)
            {
                listCategories.push(result[i].genre_musical);
            }
            res.status(200).send(listCategories);
        }
    });
}

exports.getAlbumsByGenre = async  (req,res) => {

    var genre = req.body.genre;
    var queryAlbumByGenre = `select * from album where genre_musical like '`+genre+`';`;

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

    var nom_utilisateur = req.body.nom_utilisateur;
    var id_album = req.body.album;

    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    connection.query(queryGetUserId, function (err, result_2, fields) {
        if (err){
            throw err;
        }
        else{ 
            var queryVerifFavorite = `select * from favoris where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;

            connection.query(queryVerifFavorite, function (err, result_3, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    console.log(result_3);
                    if(result_3[0]==null)
                    {
                        var queryInsterFavorite = `INSERT INTO favoris(id_utilisateur, id_album) VALUES (`+result_2[0].id_utilisateur+`, `+id_album+`)`;
                        connection.query(queryInsterFavorite, function (err, result_4, fields) {
                            if (err){
                                throw err;
                                res.json(false);
                            }
                            else{ 
                                var queryGetFavoriteId = `Select * from favoris where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;
                                connection.query(queryGetFavoriteId, function (err, result_5, fields) {
                                    if (err){
                                        throw err;
                                        res.json(false);
                                    }
                                    else{ 
                                        res.status(200).json(result_5[0]);
                                    }
                                });
                            }
                        });
                    }
                    else{
                        res.status(200).json(false);
                    }
                }
            });

        }
    });

}

exports.addCart = async  (req,res) => {


    var nom_utilisateur = req.body.nom_utilisateur;
    var id_album = req.body.album;
    var quantite = req.body.quantite;
    var quantiteBool = req.body.boolVar;


    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`



    connection.query(queryGetUserId, function (err, result_2, fields) {
        if (err){
            throw err;
        }
        else{ 
            var queryVerifCart = `select * from panier where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;

            connection.query(queryVerifCart, function (err, result_3, fields) {
                if (err){
                    throw err;
                }
                else{ 
                    console.log(result_3);
                    if(result_3[0]==null)
                    {
                        var queryInsertCart = `INSERT INTO panier(id_utilisateur, id_album, quantite) VALUES (`+result_2[0].id_utilisateur+`, `+id_album+`, 1)`;
                        connection.query(queryInsertCart, function (err, result_4, fields) {
                            if (err){
                                throw err;
                                res.json(false);
                            }
                            else{ 
                                var queryGetCartId = `Select id_panier from panier where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;
                                connection.query(queryGetCartId, function (err, result_5, fields) {
                                    if (err){
                                        throw err;
                                        res.json(false);
                                    }
                                    else{ 
                                        res.status(200).json(result_5[0].id_panier);
                                    }
                                });                            
                            }
                        });
                    }
                    else{
                        if(quantiteBool == true)
                        {
                            var queryAddOneQuantity = `update panier set quantite = quantite + 1 where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;
                            connection.query(queryAddOneQuantity, function (err, result_6, fields) {
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
                            var queryAddOneQuantity = `update panier set quantite = `+quantite+` where id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+id_album+`;`;
                            connection.query(queryAddOneQuantity, function (err, result_6, fields) {
                                if (err){
                                    throw err;
                                    res.json(false);
                                }
                                else{ 
                                    res.status(200).json(true);
                                }
                            });  
                        }
                    }
                }
            });
        }
    });

}

exports.getArtistes = async  (req,res) => {
    connection.query("SELECT * FROM artiste", function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}

exports.addPurchase = async  (req,res) => {

    var nom_utilisateur = req.body.nom_utilisateur;
    var date_achat = req.body.date;
    var prix = req.body.prix;
    var albums = req.body.listAlbums;
    var listeAlbumQuantity = req.body.listeAlbumQuantity;



    var queryGetIdByUsername = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`;


    connection.query(queryGetIdByUsername, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryAddPurchase = `insert into suivi_commandes (date_achat, id_utilisateur, prix, statut) values (str_to_date('`+date_achat+`', '%d/%m/%Y') , '`+result[0].id_utilisateur+`', '`+prix+`', 'attente de traitement');`;
            connection.query(queryAddPurchase, function (err, result1, fields) {
                if (err){
                    throw err;
                }
                else{  
                    var queryLastPurchase = `SELECT id_suivi FROM suivi_commandes ORDER BY id_suivi DESC LIMIT 1;`;
                    connection.query(queryLastPurchase, function (err, result2, fields) {
                        if (err){
                            throw err;
                        }else{
                            for(let i = 0; i<albums.length; i++){
                                console.log(" albums ", albums[i])

                                var queryAddPurchaseAlbum = `insert into suivi_commandes_album (id_suivi, id_album, quantite) values (`+result2[0].id_suivi+`, `+albums[i]+`, `+listeAlbumQuantity[i]+`);`;
                                connection.query(queryAddPurchaseAlbum, function (err, result3, fields) {
                                    if (err){
                                        throw err;
                                    }
                                    else{
                                        var queryRemoveQuantity= `update album set quantiteMax = quantiteMax - `+listeAlbumQuantity[i]+` where id_album = `+albums[i]+`;`;
                                        connection.query(queryRemoveQuantity, function (err, result4, fields) {
                                            if (err){
                                                throw err;
                                            }
                                            else{

                                            }
                                        });
                                    }
                                });
                                if(i==(albums.length-1))
                                {
                                    var queryRemoveCart= `delete from panier where id_utilisateur = `+result[0].id_utilisateur+`;`;
                                        connection.query(queryRemoveCart, function (err, result7, fields) {
                                            if (err){
                                                throw err;
                                            }
                                            else{

                                            }
                                        });
                                }
                            }
                            res.json(result2[0].id_suivi);
                        }
                    });
                }
            });
        }
    });
}

exports.getAlbumsByPurchase = async  (req,res) => {

    var id_suivi = req.body.id_suivi;
    var queryGetAlbumsByPurchase = `select id_album from suivi_commandes_album where id_suivi = `+id_suivi+`;`;
    var listAlbums = new Array();
    var cpt = 0;
    connection.query(queryGetAlbumsByPurchase, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            for(let i = 0; i<result.length; i++)
            {
                var queryGetNameAlbumByIdAlbum = `select * from album where id_album = `+result[i].id_album+`; `;
                connection.query(queryGetNameAlbumByIdAlbum, function (err, result1, fields) {
                    if (err){
                        throw err;
                    }
                    else{ 
                        listAlbums.push(result1[0]);
                        cpt = cpt + 1;
                        if(cpt == result.length)
                        {
                            res.json(listAlbums);
                        }
                    }
                });

            }
        }
    });
}

exports.getFavoritesByUser = async  (req,res) => {

    var nom_utilisateur =  req.body.nom_utilisateur;
    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    
    connection.query(queryGetUserId, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetFavoritesByUserId = `select * from favoris as A inner join album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
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

    var nom_utilisateur = req.body.nom_utilisateur;
    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

    
    connection.query(queryGetUserId, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetFavoritesByUserId = `select * from panier as A inner join album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
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

    var nom_utilisateur = req.body.nom_utilisateur;
    var album = req.body.album;

    var queryGetIdAlbum = `select id_album from album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

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
                    var queryDeleteFavorite = `DELETE FROM favoris WHERE id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

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

    // var nom_utilisateur = req.body.nom_utilisateur;

    var nom_utilisateur = "mohakh";
    var queryGetIdByUser = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`' ; `;

    connection.query(queryGetIdByUser, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{  
            var queryGetCartPrice = `select sum(prix * A.quantite) as total from panier as A inner join album as B on A.id_album = B.id_album where id_utilisateur = `+result[0].id_utilisateur+`;`;
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

    var nom_utilisateur = req.body.nom_utilisateur;
    var album = req.body.album;

    var queryGetIdAlbum = `select id_album from album where titre_album like '`+album+`';`
    var queryGetUserId = `select id_utilisateur from utilisateur where nom_utilisateur like '`+nom_utilisateur+`';`

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
                    var queryDeleteFavorite = `DELETE FROM panier WHERE id_utilisateur = `+result_2[0].id_utilisateur+` and id_album = `+result_1[0].id_album+`;`;

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

exports.getAlbumBySearch = async  (req,res) => {

    var search = req.body.search;
    var queryAlbumBySearch = `select * from album as A inner join artiste as B on A.id_artiste = B.id_artiste where titre_album like '%`+search+`%' or nom like '%`+search+`%' or annee like '`+search+`';`;

    connection.query(queryAlbumBySearch, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{
            res.status(200).json(result);
        }
    });
}

exports.modifyQuantityAlbum = async  (req,res) => {

    var album = req.body.id_album;
    var new_quantity = req.body.quantite;
    var queryModifyQuantity = `update album set quantiteMax = `+new_quantity+` where id_album = `+album+`;`;

    connection.query(queryModifyQuantity, function (err, result, fields) {
        if (err){
            throw err;
            res.status(400).json(false);
        }
        else{
            res.status(200).json(true);
        }
    });
}

exports.getAlbumByPrice = async  (req,res) => {

    var prix_min = req.body.min;
    var prix_max = req.body.max;

    var queryAlbumByPrice = `select * from album as A inner join artiste as B on A.id_artiste = B.id_artiste where prix between `+prix_min+` and `+prix_max+`;`;

    connection.query(queryAlbumByPrice, function (err, result, fields) {
        if (err){
            throw err;
        }
        else{
            res.status(200).json(result);
        }
    });
}

exports.getChansons = async  (req,res) => {
    connection.query("SELECT * FROM chanson", function (err, result, fields) {
        if (err){
            
            throw err;
        }
        else{  
            res.status(200).json(result);
        }
    });
}
