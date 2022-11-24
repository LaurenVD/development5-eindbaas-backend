const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dough: {
        type: String,
        required: true
    },
    glaze: {
        type: String,
        required: true
    }
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;