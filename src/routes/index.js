const newsRouter = require('./news');
const sitesRouter = require('./sites');
const productsRouter = require('./products');
const meRouter = require('./me');
const loginRouter = require('./login');
const requireAuth  = require('../util/Auth');
const adminRouter = require('./admin');
const corsRouter = require('./cors');

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