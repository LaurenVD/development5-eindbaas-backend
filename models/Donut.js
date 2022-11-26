const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    username: String,
    email: String,
    name: String,
    dough: String,
    glaze: String,
    status: String,
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;