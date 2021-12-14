const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Acount = new Schema({
    username: {type: String, maxlength: 255},
    password: {type: String, maxlength: 600},
});

module.exports = mongoose.model('Acount', Acount);