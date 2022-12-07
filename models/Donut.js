const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    email: {type: String, required: true},
    sprinkles: String,
    name: {type: String, required: true},
    dough: String,
    glaze: String,
    image: String,
    production: String
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;