CREATE USER 'admin'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* to 'admin' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE e_com;
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
	album(titre_album, artiste, lien_image, annee, prix)
VALUES
	('Will of the People', 1, 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1', 2022, 10),
	('Mr. Morale & the Big Steppers', 2, 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png', 2022, 12),
    ('Born Pink', 3, 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg', 2022, 13),
	('Map of the Soul: 7', 4, 'https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg', 2022, 12),
    ('Future Nostalgia', 5, 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg',  2022, 11 ),
    ('30', 6, 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg', 2022, 12 ),
	('Nonante-Cinq', 7, 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg', 2022, 14);

INSERT INTO 
	chanson(titre_chanson, album, artiste, genre)
VALUES
	('Compliance', 1, 1, "Cloud"),
	('N95', 2, 2, 'Rap'),
    ('Shut Down', 3, 3, 'K-Pop'),
    ('Filter', 4, 4, 'K-Pop'),
    ('Cool', 5, 5, 'Pop'),
    ('Démons', 6, 6, 'Musique Classique'),
    ('Easy On Me', 7, 7, 'Rap');




