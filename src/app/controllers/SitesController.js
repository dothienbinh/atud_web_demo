const Product = require('../modules/ProductModel');
const { mutipleMongooseToObject} = require('../../util/mongoose');

class SitesController {


    index (req, res, next) {
        
        Product.find({})
            .then(products => {
                res.render('home', { 
                    products: mutipleMongooseToObject(products)
                })
            })
            .catch(next)

        // res.render('home');
    }


    show (req, res) {
        res.render('search');
    }
}

module.exports = new SitesController;