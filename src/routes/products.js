const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');
const sitesController = require('../app/controllers/SitesController');
const requireAuth = require('../util/Auth');


router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
router.patch('/:id/restore', productController.restore);
router.delete('/:id', productController.delete);
// router.delete('/:id', requireAuth.checkLogin, productController.delete);
// router.delete('/:id', requireAuth.checkLogin, requireAuth.checkAdmin, productController.delete);
router.delete('/:id/force', productController.forceDelete);
router.get('/:slug', productController.show);
router.get('/', sitesController.index);


module.exports = router;