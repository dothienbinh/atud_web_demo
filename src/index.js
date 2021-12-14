const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');

// cookie parser
const cookieParser = require('cookie-parser');

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));


// app.

//http logs
// app.use(morgan('combined'));

// // tmplate engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a+b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);

app.listen(port, () => console.log(`App listening at port:${port}`));