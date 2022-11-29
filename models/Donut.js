const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    username: String,
    email: String,
    sprinkles: String,
    name: String,
    dough: String,
    glaze: String,
    image: String,
    status: String,
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;