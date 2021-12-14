const express = require('express');
const router = express.Router();

const sitesController  = require('../app/controllers/SitesController');

router.get('/search', sitesController.show);
router.get('/private', sitesController.show);
router.get('/', sitesController.index);

module.exports = router;