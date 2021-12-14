const express = require('express');
const router = express.Router();

const adminControrller = require('../app/controllers/adminControrller');

router.get('/', adminControrller.show)

module.exports = router;