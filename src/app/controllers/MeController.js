const Product = require('../modules/ProductModel');
const { mutipleMongooseToObject} = require('../../util/mongoose');

class MeController {


    

    storedProducts (req, res, next) {
        var author = req.cookies.id;
        var user = 'me';
        Promise.all([Product.find({author: author}), Product.countDocumentsDeleted({author: author})])
            .then(([products, deletedCount]) => {
                res.render('me/stored-products', {
                    user,
                    deletedCount,
                    products: mutipleMongooseToObject(products)
                });            
            })

    }

    // show (req, res, next) {
    //     Product.findAll
    // }

    trashProducts (req, res, next) {
        var author = req.cookies.id;
        Product.findDeleted({author: author})        
            .then(products => {
                res.render('me/trash-products', { 
                    products: mutipleMongooseToObject(products)
                })
            })
            .catch(next)
    }

    create (req, res) {
        res.render('products/create');
    }

}

module.exports = new MeController();