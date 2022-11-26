const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: String,
    dough: String,
    glaze: String,
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;