const Acount = require('../modules/AcountModel');
const jwt = require('jsonwebtoken');
const { mongooseToObject} = require('../../util/mongoose');

class loginController {

    // conso.log(process.env.VIETNAM);

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
                    username: data.username,
                    role: data.role,
                    admin: data.admin,
                }, process.env.ACCESS_TOKEN_SECRET_KEY, {
                    // expiresIn: '3s',
                })
                
                
                console.log(token);

                
                var a = '/';
                // res.json(data);
                res.cookie("ACCESS_TOKEN", token);
                res.cookie("id", data.username);
                return res.redirect('back');
            }
            else return res.status(500).json('that bai');
        })
        .catch(err=>{
            res.status(500).json('that baii');

        })
    }

        //POST del_cookie
        delCookie(req, res, next) {
            var id = req.cookies.id;
            // var a = req.user;
    
            // res.json(a);
            console.log('success');
            if(!req.cookies.ACCESS_TOKEN){
                res.status(402).json({message: 'ban chua dang nhap'});
            } else {
                res.clearCookie("id");
                res.clearCookie("ACCESS_TOKEN");
                // console.log('kkkk');
                // res.json('logout');
                return res.redirect('/');
    
            };
        }
}

module.exports = new loginController;