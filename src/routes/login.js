const express = require('express');
const router = express.Router();

const loginController  = require('../app/controllers/LoginController');

router.post('/logout', loginController.delCookie);
router.get('/', loginController.index);
router.post('/', loginController.auth);

module.exports = router;