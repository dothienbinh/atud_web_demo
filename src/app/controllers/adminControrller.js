const Product = require('../modules/ProductModel');
const { mutipleMongooseToObject} = require('../../util/mongoose');

class adminControrller {

    show (req, res, next) {
        var author = req.cookies.id;
        Promise.all([Product.find(), Product.countDocumentsDeleted()])
            .then(([products, deletedCount]) => {
                res.render('admin/admin', { 
                    deletedCount,
                    products: mutipleMongooseToObject(products)
                });            
            })
    }

}


module.exports = new adminControrller;