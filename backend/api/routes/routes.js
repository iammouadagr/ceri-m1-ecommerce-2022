const express = require('express');
const controllers = require('../controllers/controllers');
const  router = express.Router();

router.get('/albums',controllers.getAlbums);
router.get('/artistes', controllers.getArtistes);
router.get('/chansons', controllers.getChansons);
router.get('/inscrireUtilisateur', controllers.registerUser);
router.get('/connexionUtilisateur', controllers.userAuthentication);
router.get('/genreMusical', controllers.getMusicalGenre);
router.get('/albumGenre', controllers.getAlbumsByGenre);
router.get('/ajouterFavoris', controllers.addFavorite);
router.get('/supprimerFavoris', controllers.deleteFavorite);
router.get('/favorisUtilisateur', controllers.getFavoritesByUser);
router.get('/informationUtilisateur', controllers.getUserInformation);


module.exports = router;