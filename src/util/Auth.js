module.exports.requireAuth = function (req, res, next) {
    // console.log(req.cookies.id);
    if(!req.cookies.id){
        // res.redirect('/login');
        res.render('login/login', {
            title: ' ban can phai dang nhap',
        });
        return;
    }
    next();
};