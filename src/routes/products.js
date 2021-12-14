const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');
const sitesController = require('../app/controllers/SitesController');


router.get('/create', productController.create);
router.post('/create/del_cookie', productController.delCookie);
router.post('/store', productController.store);
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
router.patch('/:id/restore', productController.restore);
router.delete('/:id', productController.delete);
router.delete('/:id/force', productController.forceDelete);
router.get('/:slug', productController.show);
router.get('/', sitesController.index);


module.exports = router;