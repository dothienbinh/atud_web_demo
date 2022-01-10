const Product = require('../modules/ProductModel');
const { mutipleMongooseToObject} = require('../../util/mongoose');

class adminControrller {

    show (req, res, next) {
        
        Promise.all([Product.find(), Product.countDocumentsDeleted()])
            .then(([products, deletedCount]) => {
                res.render('admin/admin', { 
                    deletedCount,
                    products: mutipleMongooseToObject(products)
                });            
            })
    }

    trashProducts (req, res, next) {
        var author = req.cookies.id;
        Product.findDeleted({})        
            .then(products => {
                res.render('admin/ad_trash-products', { 
                    products: mutipleMongooseToObject(products)
                })
            })
            .catch(next)
    }

}


module.exports = new adminControrller;