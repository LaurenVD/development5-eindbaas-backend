const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    email: String,
    sprinkles: String,
    name: String,
    dough: String,
    glaze: String,
    image: String,
    production: String
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;