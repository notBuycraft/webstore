let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    price: Number,
    action: String,
    thumbnail: String,
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    date: String
});

let Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
