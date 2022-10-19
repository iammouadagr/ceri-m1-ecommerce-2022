use e_com;
CREATE TABLE artiste (
    id_artiste int not null AUTO_INCREMENT,
    PRIMARY KEY (id_artiste),
    nom varchar(100)
);


CREATE TABLE album (
    id_album int not null AUTO_INCREMENT,
    titre_album varchar(100),
    artiste int,
    lien_image varchar(1000),
    annee int,
    prix DOUBLE,
    PRIMARY KEY (id_album),
    FOREIGN KEY (artiste) REFERENCES artiste(id_artiste)
);

CREATE TABLE chanson (
    id_chanson int not null AUTO_INCREMENT,
    titre_chanson varchar(100),
    album int,
    artiste int,
    genre varchar(100),
    PRIMARY KEY (id_chanson),
    FOREIGN KEY (artiste) REFERENCES artiste(id_artiste),
    FOREIGN KEY (album) REFERENCES album(id_album)
);

