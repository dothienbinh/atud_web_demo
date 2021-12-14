const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, maxlength: 255},
    description: {type: String, maxlength: 600},
    image: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    level: {type: String},
    VideoId: {type: String},
    author: {type: String},
});

// add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all'});

module.exports = mongoose.model('Product', Product);