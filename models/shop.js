let mongoose = require('mongoose');

let StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    desc: String,
    date: String
});

let Shop = mongoose.model('Store', StoreSchema);

module.exports = Shop;
