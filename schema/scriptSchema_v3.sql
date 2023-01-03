use vinyle;
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
    quantiteMax int not null,
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
    quantite int not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur), 
    FOREIGN KEY (id_album) REFERENCES album(id_album) 
);

CREATE TABLE suivi_commandes (
    id_suivi int not null AUTO_INCREMENT,
    PRIMARY KEY(id_suivi),
    date_achat DATE NOT NULL,
    id_utilisateur int not null,
    prix DOUBLE not null,
    statut varchar(200) not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE suivi_commandes_album (
    id_sca int not null AUTO_INCREMENT,
    PRIMARY KEY(id_sca),
    id_suivi int not null,
    id_album int not null,
    quantite int not null,
    FOREIGN KEY (id_suivi) REFERENCES suivi_commandes(id_suivi),
    FOREIGN KEY (id_album) REFERENCES album(id_album)
);


