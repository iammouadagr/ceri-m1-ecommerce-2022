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
    description_album varchar(900),
    quantiteMax int not null,
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

CREATE TABLE IF NOT EXISTS suivi_commandes (
    id_suivi int not null AUTO_INCREMENT,
    PRIMARY KEY(id_suivi),
    date_achat DATE NOT NULL,
    id_utilisateur int not null,
    prix DOUBLE not null,
    statut varchar(200) not null,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE IF NOT EXISTS suivi_commandes_album (
    id_sca int not null AUTO_INCREMENT,
    PRIMARY KEY(id_sca),
    id_suivi int not null,
    id_album int not null,
    FOREIGN KEY (id_suivi) REFERENCES suivi_commandes(id_suivi),
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
	('Angèle'),
    ('PNL'),
    ('MMZ');


INSERT INTO 
	album(titre_album, id_artiste, lien_image, genre_musical, annee, prix, description_album)
VALUES
	('Will of the People', 1, 'https://i0.wp.com/musefrance.com//wp-content/uploads/sites/6657/2022/03/FNfw7nvVkAcWmmw.jpg?fit=1658%2C1596&ssl=1','Cloud', 2022, 10, 'Will of the People est le neuvième album studio du groupe britannique Muse paru le 26 août 20221. Il est le successeur de Simulation Theory, paru en 2018. L album a été écrit à Los Angeles2 et enregistré en 2021 au studio Abbey Road à Londres, tout juste 20 ans après Origin of Symmetry, dernier album du groupe ayant été enregistré dans ce studio3.'),
	('Mr. Morale & the Big Steppers', 2, 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png', 'Rap', 2022, 12, 'Mr. Morale & the Big Steppers est le cinquième album studio de Kendrick Lamar, sorti en 2022, sur les labels PGLang (en), Top Dawg, Aftermath et Interscope. Ce double album marque le dernier projet de Lamar chez Top Dawg. L artiste californien revient après quatre ans d absence et l album Black Panther: The Album du film éponyme, et cinq d absence en solo avec l album Damn. Comme ses œuvres précédentes, Mr. Morale & the Big Steppers reçoit un accueil critique unanimement favorable.'),
    ('Born Pink', 3, 'https://herefan.com/wp-content/uploads/2022/08/blackpink-bornpink-kit-01.jpg', 'K-Pop', 2022, 13, 'Born Pink est le deuxième album complet du girl group sud-coréen Blackpink, officiellement sorti le 16 septembre 2022 à 13 heures (heure coréenne) et produit par YG Entertainment. La sortie de l album était accompagnée par celle du clip vidéo de la chanson principale, Shut Down.'),
	('Map of the Soul: 7', 4, 'https://m.media-amazon.com/images/I/61Pj0N8bp2L._SL1469_.jpg', 'K-Pop', 2022, 12, 'Map Of The Soul : 7 (MOTS:7) est le quatrième album studio1 en Coréen (et 9e au total) du groupe Sud-Coréen BTS, et est sorti le 21 février 2020 chez Big Hit Entertainment. Il s agit de la deuxième partie et conclusion de la série "Map Of The Soul"2 entamée par le groupe en 2019 avec l album Map Of the Soul: Persona.'),
    ('Future Nostalgia', 5, 'https://lastfm.freetls.fastly.net/i/u/ar0/95ee2cb59610158832735aeb11ea990c.jpg', 'Pop', 2022, 11, 'Future Nostalgia est le deuxième album studio de la chanteuse britannique Dua Lipa. Il est sorti le 27 mars 2020 sous le label Warner Records. L album a débuté à la quatrième place du classement américain Billboard 200 et est resté 4 semaines à la tête des charts britanniques.1 Le style de Future Nostalgia est clairement nostalgique des années 80, abordant des sonorités disco tout en restant pop. De plus, il permet à Dua Lipa de confirmer son statut de pop-star internationale.'),
    ('30', 6, 'https://m.media-amazon.com/images/I/71-llhQmneL._SL1500_.jpg', 'Pop', 2022, 12, '30 est le quatrième album de l auteure-compositrice-interprète anglaise Adele, qui a vendu plus de 120 millions de disques et remporté 15 Grammys1 tout au cours de sa carrière. Il est sorti le 19 novembre 2021 sur les labels Melted Stone et Columbia Records. Inspirée par son divorce avec son ex-mari Simon Konecki, Adele aborde la séparation au cours de l album, tout en évoquant sa maternité. Elle y réalise aussi l analyse de la célébrité.'),
	('Nonante-Cinq', 7, 'https://static.fnac-static.com/multimedia/Images/FR/NR/13/f8/d2/13826067/1507-1/tsp20211026153614/Nonante-Cinq.jpg', 'Rap', 2022, 14, 'Nonante-Cinq est le deuxième album studio de la chanteuse belge Angèle, sorti le 3 décembre 2021.Une réédition comprenant six titres supplémentaires sortira le 18 novembre 2022 sous le nom de Nonante-Cinq La Suite.'),
	('Dans la Légende', 8, 'https://m.media-amazon.com/images/I/51Xpq7L9LuL.jpg', 'Rap', 2016, 11, 'Dans la légende est le deuxième album studio du duo de rap français PNL, sorti le 16 septembre 2016 sous le label QLF (Que La Famille) Records.'),
    ('Sayonara', 9, 'https://www.trackmusik.fr/images/albums/sayonara-mmz.jpg', 'Cloud', 2019, 9, 'Le 19 avril 2019, Moha et Lazer sortent leur troisième album, Sayonara. Il compte 17 titres, dont Valar Morghulis ou Peace. <<Sayonara>>, qui signifie au-revoir en japonais, laisse d ailleurs la possibilité à Moha et Lazer d exprimer leur amour pour la culture nipponne, qu on avait déjà pu déceler à travers plusieurs morceaux. En effet, les deux rappeurs ont souvent fait référence aux mangas tels que Dragon Ball Z notamment. La pochette de l album, elle, présente un cerisier oriental, arbre emblématique de la culture du pays du soleil levant5.');

INSERT INTO 
	chanson(titre_chanson, id_album, id_artiste, genre_musical)
VALUES
    ('Will of the People', 1, 1, "Cloud"),
    ('Compliance', 1, 1, "Cloud"),
    ('Liberation', 1, 1, "Cloud"),
    ('Won t Stand Down', 1, 1, "Cloud"),
    ('Ghosts (How Can I Move On)', 1, 1, "Cloud"),
    ('You Make Me Feel Like It s Halloween', 1, 1, "Cloud"),
    ('Kill or Be Killed', 1, 1, "Cloud"),
    ('Verona', 1, 1, "Cloud"),
    ('Euphoria', 1, 1, "Cloud"),
	('Compliance', 1, 1, "Cloud"),
    ('United in Grief', 2, 2, 'Rap'),
    ('N95', 2, 2, 'Rap'),
    ('Worldwide Steppers', 2, 2, 'Rap'),
    ('Die Hard (feat. Blxst (en) & Amanda Reifer)', 2, 2, 'Rap'),
    ('Father Time (featuring Sampha)', 2, 2, 'Rap'),
    ('Rich (interlude)', 2, 2, 'Rap'),
    ('Rich Spirit', 2, 2, 'Rap'),
    ('We Cry Together (feat. Taylour Paige)', 2, 2, 'Rap'),
    ('Purple Hearts (feat. Summer Walker & Ghostface Killah)', 2, 2, 'Rap'),
    ('Count Me Out', 2, 2, 'Rap'),
    ('Crown', 2, 2, 'Rap'),
    ('Silent Hill (feat. Kodak Black)', 2, 2, 'Rap'),
    ('Savior (interlude)', 2, 2, 'Rap'),
    ('Savior (feat. Baby Keem & Sam Dew (en))', 2, 2, 'Rap'),
    ('Auntie Diaries', 2, 2, 'Rap'),
    ('Mr. Morale (feat. Tanna Leone (en))', 2, 2, 'Rap'),
    ('Mother I Sober (feat. Beth Gibbons)', 2, 2, 'Rap'),
    ('Mirror', 2, 2, 'Rap'),
    ('Soul', 3, 3, 'K-Pop'),
    ('Get Up', 3, 3, 'K-Pop'),
    ('Nico', 3, 3, 'K-Pop'),
    ('BNI', 3, 3, 'K-Pop'),
    ('Loop 90s', 3, 3, 'K-Pop'),
    ('Fun Funk', 3, 3, 'K-Pop'),
    ('Nico CR7', 3, 3, 'K-Pop'),
    ('Lemonade', 3, 3, 'K-Pop'),
    ('BP Niko', 3, 3, 'K-Pop'),
    ('Funk Pop', 3, 3, 'K-Pop'),
    ('W.A.S', 3, 3, 'K-Pop'),
    ('Hip Pop', 3, 3, 'K-Pop'),
    ('Shut Down', 3, 3, 'K-Pop'),
    ('Intro : Persona (Solo de RM)', 4, 4, 'K-Pop'),
    ('Boy With Luv (Feat. Halsey)', 4, 4, 'K-Pop'),
    ('Make It Right', 4, 4, 'K-Pop'),
    ('Jamais Vu (Sub-unit formée de Jungkook J-Hope et Jin)', 4, 4, 'K-Pop'),
    ('Dionysus', 4, 4, 'K-Pop'),
    ('Interlude : Shadow (Solo de Suga)', 4, 4, 'K-Pop'),
    ('Black Swan', 4, 4, 'K-Pop'),
    ('Filter (Solo de Jimin)', 4, 4, 'K-Pop'),
    ('My Time (Solo de Jungkook)', 4, 4, 'K-Pop'),
    ('Louder than bombs', 4, 4, 'K-Pop'),
    ('ON', 4, 4, 'K-Pop'),
    ('UGH! (Sub-unit formée des trois rappeurs RM, Suga et J-Hope)', 4, 4, 'K-Pop'),
    ('00:00 (Zero O Clock) (Sub-unit formée des quatre vocalistes Jungkook, Jimin, V et Jin)', 4, 4, 'K-Pop'),
    ('Inner Child (Solo de V)', 4, 4, 'K-Pop'),
    ('Friends (Duo de Jimin et V)', 4, 4, 'K-Pop'),
    ('Moon (Solo de Jin)', 4, 4, 'K-Pop'),
    ('Respect (Duo de RM et Suga)', 4, 4, 'K-Pop'),
    ('We are Bulletproof: the Eternal', 4, 4, 'K-Pop'),
    ('Outro : Ego (Solo de J-Hope)', 4, 4, 'K-Pop'),
    ('ON (Feat. Sia) (Remix figurant seulement sur les versions digitales de l album.)', 4, 4, 'K-Pop'),
    ('Future Nostalgia', 5, 5, 'Pop'),
    ('Don t Start Now', 5, 5, 'Pop'),
    ('Cool', 5, 5, 'Pop'),
    ('Physical', 5, 5, 'Pop'),
    ('Levitating', 5, 5, 'Pop'),
    ('Pretty Please', 5, 5, 'Pop'),
    ('Hallucinate', 5, 5, 'Pop'),
    ('Love Again', 5, 5, 'Pop'),
    ('Break My Heart', 5, 5, 'Pop'),
    ('Good in Bed', 5, 5, 'Pop'),
    ('Boys Will Be Boys', 5, 5, 'Pop'),
    ('Strangers by Nature', 6, 6, 'Musique Classique'),
    ('Easy on Me', 6, 6, 'Musique Classique'),
    ('My Little Love', 6, 6, 'Musique Classique'),
    ('Cry Your Heart Out', 6, 6, 'Musique Classique'),
    ('Oh My God', 6, 6, 'Musique Classique'),
    ('Can I Get It', 6, 6, 'Musique Classique'),
    ('I Drink Wine', 6, 6, 'Musique Classique'),
    ('All Night Parking (avec Erroll Garner)', 6, 6, 'Musique Classique'),
    ('Woman like Me', 6, 6, 'Musique Classique'),
    ('Hold On', 6, 6, 'Musique Classique'),
    ('To Be Loved', 6, 6, 'Musique Classique'),
    ('Love Is a Game', 6, 6, 'Musique Classique'),
    ('Bruxelles je t aime', 7, 7, 'Rap'),
    ('Libre', 7, 7, 'Rap'),
    ('On s habitue', 7, 7, 'Rap'),
    ('Solo', 7, 7, 'Rap'),
    ('Pensées positives', 7, 7, 'Rap'),
    ('Taxi', 7, 7, 'Rap'),
    ('Démons (featuring Damso)', 7, 7, 'Rap'),
    ('Plus de sens', 7, 7, 'Rap'),
    ('Tempête', 7, 7, 'Rap'),
    ('Profite', 7, 7, 'Rap'),
    ('Mots justes', 7, 7, 'Rap'),
    ('Mauvais rêves', 7, 7, 'Rap'),
    ('DA', 8, 8, 'Rap'),
    ('Naha', 8, 8, 'Rap'),
    ('Dans la légende', 8, 8, 'Rap'),
    ('Mira', 8, 8, 'Rap'),
    ('J suis QLF', 8, 8, 'Rap'),
    ('La vie est belle', 8, 8, 'Rap'),
    ('Kratos', 8, 8, 'Rap'),
    ('Luz de Luna', 8, 8, 'Rap'),
    ('Tu sais pas', 8, 8, 'Rap'),
    ('Sheita', 8, 8, 'Rap'),
    ('Humain', 8, 8, 'Rap'),
    ('Bambina', 8, 8, 'Rap'),
    ('Bené', 8, 8, 'Rap'),
    ('Uranus', 8, 8, 'Rap'),
    ('Onizuka', 8, 8, 'Rap'),
    ('Jusqu au dernier gramme', 8, 8, 'Rap'),
    ('Valar morghulis', 9, 9, 'Cloud'),
    ('Manolo', 9, 9, 'Cloud'),
    ('Signal', 9, 9, 'Cloud'),
    ('Donne-moi ton cœur', 9, 9, 'Cloud'),
    ('Patrona', 9, 9, 'Cloud'),
    ('Koka', 9, 9, 'Cloud'),
    ('Peace', 9, 9, 'Cloud'),
    ('John Gotti', 9, 9, 'Cloud'),
    ('Nicky Larson (feat. Jet)', 9, 9, 'Cloud'),
    ('Sur la lune', 9, 9, 'Cloud'),
    ('Benef', 9, 9, 'Cloud'),
    ('Gang Gang', 9, 9, 'Cloud'),
    ('Pour la vie', 9, 9, 'Cloud'),
    ('Capuché dans le club', 9, 9, 'Cloud'),
    ('Zen', 9, 9, 'Cloud'),
    ('Zizou', 9, 9, 'Cloud'),
    ('Ciaonara', 9, 9, 'Cloud');

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









 