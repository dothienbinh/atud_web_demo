const Product = require('../modules/ProductModel');
const { mongooseToObject} = require('../../util/mongoose');

class ProductController {


    show (req, res, next) {
        Product.findOne({slug: req.params.slug})        
            .then(product => {                
                res.render('products/show', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);

    }

    create (req, res) {
        res.render('products/create');
    }

    store(req, res, next){
        // res.json(req.body);
        var formData = {...req.body};
        formData.image = `https://img.youtube.com/vi/${req.body.image}/sddefault.jpg`;
        const product = new Product(formData);
        product
            .save()
            .then(() => res.redirect('/me/stored/products'))
            .catch(error => {

            });
        // res.json(formData);

    }

    //GET
    edit(req, res, next) {
        Product.findOne({_id: req.params.id})
            .then(product =>
                res.render('products/edit', {
                    product: mongooseToObject(product)
                }))
            .catch(next);
    }

    //[PUT] /products/:id
    update(req, res, next) {
        var formData = {...req.body};
        // console.log(formData);
        formData["image"] = `https://img.youtube.com/vi/${req.body.VideoId}/sddefault.jpg`;
        formData["slug"] = formData.name;
        // res.json(formData);
        var a = '/';
        Product.updateOne({_id: req.params.id}, formData)
            .then(() => res.redirect(a))
            .catch(next);
    }

    //[DELETE] /products/:id
    delete(req, res, next) {
        Product.delete({_id: req.params.id})
            .then(() => res.json('success!'))
            .catch(error => res.json(error.message));
    }

    //[DELETE] /products/:id/force
    forceDelete(req, res, next) {
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /products/:id/restore
    restore(req, res, next) {
        Product.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }



}

module.exports = new ProductController();