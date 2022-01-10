const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const dotenv = require('dotenv').config();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
const cors = require('cors');


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

//
var corsOptions = {
    origin: '*',
    method: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}

// const whitelist = ['http://localhost:3000', 'http://developer2.com']
// const corsOptions1 = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//     //   console.log(error);
//     }
//   }
// }

app.use(cors(corsOptions));

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