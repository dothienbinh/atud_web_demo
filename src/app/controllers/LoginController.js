const Acount = require('../modules/AcountModel');
const jwt = require('jsonwebtoken');
const { mongooseToObject} = require('../../util/mongoose');

class loginController {


    index (req, res, next) {
        res.render('login/login');
    }

    auth (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;

        Acount.findOne({
            username: username,
            password: password,
        })
        .then(data=>{
            if(data){
                var token = jwt.sign({
                    _id: data._id,
                }, 'mk')
                
                var a = '/';
                // res.json(data);
                res.cookie("id", data.username);
                return res.redirect(a);
            }
            else return res.status(500).json('that bai');
        })
        .catch(err=>{
            res.status(500).json('that baii');

        })
    }
}

module.exports = new loginController;