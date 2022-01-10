const express = require('express');
const router = express.Router();

const adminControrller = require('../app/controllers/adminControrller');

router.get('/trash/products', adminControrller.trashProducts);
router.get('/stored/products', adminControrller.show);
router.get('/', adminControrller.show);

module.exports = router;