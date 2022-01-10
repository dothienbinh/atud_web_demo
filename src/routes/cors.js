const express = require('express');
const router = express.Router();


const CorsController = require('../app/controllers/CorsController');



router.get('/', CorsController.index);



module.exports = router;