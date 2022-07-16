
const productsRouter = require('./products');
const loginRouter = require('./login');
const requireAuth  = require('../util/Auth');


function route(app) {

    app.use('/news', newsRouter);
    
    app.use('/products',  productsRouter);

    app.use('/me', requireAuth.checkLogin, requireAuth.checkUser , meRouter);

    app.use('/login', loginRouter);

    app.use('/admin', requireAuth.checkLogin, requireAuth.checkAdmin, adminRouter);

    app.use('/cors', corsRouter);


    app.use('/', sitesRouter);

}

module.exports = route;