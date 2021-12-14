const newsRouter = require('./news');
const sitesRouter = require('./sites');
const productsRouter = require('./products');
const meRouter = require('./me');
const loginRouter = require('./login');
const requireAuth  = require('../util/Auth');
const adminRouter = require('./admin');

function route(app) {

    app.use('/news', newsRouter);
    
    app.use('/products', requireAuth.requireAuth , productsRouter);

    app.use('/me', requireAuth.requireAuth , meRouter);

    app.use('/login', loginRouter);

    app.use('/admin', adminRouter);

    app.use('/', sitesRouter);

}

module.exports = route;