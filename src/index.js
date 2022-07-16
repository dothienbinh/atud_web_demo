const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const dotenv = require('dotenv').config();
const port = 8080;
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');


// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// router
const route = require('./routes');

// db connect
const db = require('./config/db');
db.connect();



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));


// cors
// var corsOptions = {
//     origin: '',
//     method: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
// }

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
// app.use(cors(corsOptions));



route(app);

app.listen(port, () => console.log(`App listening at port:${port}`));