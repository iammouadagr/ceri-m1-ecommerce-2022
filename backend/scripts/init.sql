ALTER USER 'admin'@'%' IDENTIFIED BY 'root';
ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
GRANT ALL PRIVILEGES ON *.* to 'admin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
CREATE DATABASE IF NOT EXISTS vinyle;
USE vinyle;
CREATE TABLE IF NOT EXISTS artiste (
    id_artiste int not null AUTO_INCREMENT,
    PRIMARY KEY (id_artiste),
    nom varchar(100) not null
);
CREATE TABLE IF NOT EXISTS album (
    id_album int not null AUTO_INCREMENT,
    titre_album varchar(100) not null,
    id_artiste int not null,
    lien_image varchar(1000),
    genre_musical varchar(100),
    annee int not null,
    prix DOUBLE not null,
    PRIMARY KEY (id_album),
    FOREIGN KEY (id_artiste) REFERENCES artiste(id_artiste)
);
CREATE TABLE IF NOT EXISTS chanson (
    id_chanson int not null AUTO_INCREMENT,
    titre_chanson varchar(100) not null,
    id_album int not null,
    id_artiste int not null,
    genre_musical varchar(100) not null,
    PRIMARY KEY (id_chanson),
    FOREIGN KEY (id_artiste) REFERENCES artiste(id_artiste),
    FOREIGN KEY (id_album) REFERENCES album(id_album)
);
CREATE TABLE IF NOT EXISTS utilisateur (
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
CREATE TABLE IF NOT EXISTS favoris ( 
    id_favoris int not null AUTO_INCREMENT,
    PRIMARY KEY(id_favoris),
    id_utilisateur int not null,
    id_album int not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur), 
    FOREIGN KEY (id_album) REFERENCES album(id_album) 
);
CREATE TABLE IF NOT EXISTS panier ( 
    id_panier int not null AUTO_INCREMENT,
    PRIMARY KEY(id_panier),
    id_utilisateur int not null,
    id_album int not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur), 
    FOREIGN KEY (id_album) REFERENCES album(id_album) 
);
INSERT INTO 
	artiste(nom)
VALUES
	('Muse'),
	('Kendrick Lamar'),
    ('Black Pink'),
	('BTS'),
    ('Dua Lipa'),
    ('Adèle'),
	('Angèle');
INSERT INTO 
	album(titre_album, id_artiste, lien_image, genre_musical, annee, prix)
VALUES
	('Will of the People', 1, 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1','Cloud', 2022, 10),
	('Mr. Morale & the Big Steppers', 2, 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png', 'Rap', 2022, 12),
    ('Born Pink', 3, 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg', 'K-Pop', 2022, 13),
	('Map of the Soul: 7', 4, 'https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg', 'K-Pop', 2022, 12),
    ('Future Nostalgia', 5, 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg', 'Pop', 2022, 11 ),
    ('30', 6, 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg', 'Musique Classique', 2022, 12 ),
	('Nonante-Cinq', 7, 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg', 'Rap', 2022, 14);

INSERT INTO 
	chanson(titre_chanson, id_album, id_artiste, genre_musical)
VALUES
	('Compliance', 1, 1, "Cloud"),
	('N95', 2, 2, 'Rap'),
    ('Shut Down', 3, 3, 'K-Pop'),
    ('Filter', 4, 4, 'K-Pop'),
    ('Cool', 5, 5, 'Pop'),
    ('Démons', 6, 6, 'Musique Classique'),
    ('Easy On Me', 7, 7, 'Rap');

INSERT INTO 
	utilisateur(nom_utilisateur, adresse_mail, prenom, nom, lieu_naissance, date_naissance, mot_de_passe, sexe, statut)
VALUES
	('mohakh', 'moha@gmail.com', 'Moha', 'Kh', 'Bagnols-sur-Cèze', "2000-06-15", 'd033e22ae348aeb5660fc2140aec35850c4da997', 'M', 'admin');

INSERT INTO 
	favoris(id_utilisateur, id_album)
VALUES
	(1, 1),
	(1, 2),
	(1, 3);


INSERT INTO 
	panier(id_utilisateur, id_album)
VALUES
	(1, 1),
	(1, 2),
	(1, 3);





 