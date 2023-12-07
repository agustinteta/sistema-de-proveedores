const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    _id: String,
    idCliente: String,
    productos: [{
        id: String,
        name: String,
        price: Number,
        qty: Number
    }],
    total: Number
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;