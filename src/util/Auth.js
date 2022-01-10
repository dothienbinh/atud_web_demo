const jwt = require('jsonwebtoken');

// module.exports.requireAuth = function (req, res, next) {
//     // console.log(req.cookies.id);
//     if(!req.cookies.token){
//         // res.redirect('/login');
//         res.render('login/login', {
//             title: ' ban can phai dang nhap',
//         });
//         return;
//     }
//     next();
// };

// module.exports = {
//     checkLogin: function (req, res, next) {
//         if (!req.cookies.ACCESS_TOKEN) {
//             // res.redirect('/login');
//             res.status(401).render('login/login', {
//                 title: 'chua dang nhap',
//             });
//             return;
//         } else {
//             // let token = req.cookies.ACCESS_TOKEN;
//             // var jwtt = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
//             // console.log(jwtt);
//             next();
//         }

//     },

//     checkAdmin: function (req, res, next) {

//     }

// }

class Auth {
    checkLogin(req, res, next) {
        if (!req.cookies.ACCESS_TOKEN) {
            // res.redirect('/login');
            // res.status(401).render('login/login', {
            //     title: 'chua dang nhap',
            // });
            res.status(403).json({
                message: 'chua dang nhap',
            })
            return;
        } else {
            try {
                let token = req.cookies.ACCESS_TOKEN;
                var jwtt = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
                req.data = jwtt;
                // console.log(req.data);
                next();
            } catch (error) {
                res.clearCookie("ACCESS_TOKEN");
                res.clearCookie("id");
                res.status(500).render('login/login' , {title: 'token khong hop le'});
            }
        }

    }

    checkAdmin(req, res, next) {
        var isAdmin = req.data.admin;
        if(isAdmin == 'true') {
            next();
        } else {
            res.status(403).json({message: 'Not Permisson!'})
        }
        
    }

    checkUser(req, res, next) {
        var isAdmin = req.data.admin;
        if(isAdmin == 'false') {
            
            next();
        } else {
            res.status(403).json({message: 'Not Permisson!'})
        }
        
    }
}

module.exports = new Auth;