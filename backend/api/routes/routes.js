const express = require('express');
const controllers = require('../controllers/controllers');
const  router = express.Router();

router.get('/albums',controllers.getAllbums);
router.get('/artistes', controllers.getArtistes);
router.get('/chansons', controllers.getChansons);


module.exports = router;