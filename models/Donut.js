const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dough: {
        type: String,
        required: false
    },
    glaze: {
        type: String,
        required: false
    }
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;