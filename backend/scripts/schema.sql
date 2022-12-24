USE e_com;

CREATE TABLE artiste (
    id_artiste int not null AUTO_INCREMENT,
    PRIMARY KEY (id_artiste),
    nom varchar(100) not null
);


CREATE TABLE album (
    id_album int not null AUTO_INCREMENT,
    titre_album varchar(100) not null,
    id_artiste int not null,
    lien_image varchar(1000),
    genre_musical varchar(100),
    annee int not null,
    prix DOUBLE not null,
    description_album varchar(900),
    PRIMARY KEY (id_album),
    FOREIGN KEY (id_artiste) REFERENCES artiste(id_artiste)
);

CREATE TABLE chanson (
    id_chanson int not null AUTO_INCREMENT,
    titre_chanson varchar(100) not null,
    id_album int not null,
    id_artiste int not null,
    genre_musical varchar(100) not null,
    PRIMARY KEY (id_chanson),
    FOREIGN KEY (id_artiste) REFERENCES artiste(id_artiste),
    FOREIGN KEY (id_album) REFERENCES album(id_album)
);

CREATE TABLE utilisateur (
    id_utilisateur int not null AUTO_INCREMENT,
    nom_utilisateur varchar(100),
    adresse_mail varchar(100),
    prenom varchar(100) not null,
    nom varchar(100) not null,
    lieu_naissance varchar(100) not null,
    date_naissance DATE not null,
    mot_de_passe varchar(200) not null,
    sexe varchar(1),
    PRIMARY KEY(id_utilisateur),
    statut varchar(10)
);

CREATE TABLE favoris ( 
    id_favoris int not null AUTO_INCREMENT,
    PRIMARY KEY(id_favoris),
    id_utilisateur int not null,
    id_album int not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur), 
    FOREIGN KEY (id_album) REFERENCES album(id_album) 
);

CREATE TABLE panier ( 
    id_panier int not null AUTO_INCREMENT,
    PRIMARY KEY(id_panier),
    id_utilisateur int not null,
    id_album int not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur), 
    FOREIGN KEY (id_album) REFERENCES album(id_album) 
);

CREATE TABLE historique (
    id_historique int not null AUTO_INCREMENT,
    PRIMARY KEY(id_historique),
    date_achat DATE NOT NULL,
    id_utilisateur int not null,
    prix DOUBLE not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE achat_album (
    id_achat int not null AUTO_INCREMENT,
    PRIMARY KEY(id_achat),
    id_historique int not null,
    id_album int not null,
    FOREIGN KEY (id_historique) REFERENCES historique(id_historique),
    FOREIGN KEY (id_album) REFERENCES album(id_album)
);

